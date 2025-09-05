/**
 * Error Reporting Service
 * Handles error logging, reporting, and user feedback
 */

interface ErrorContext {
  user?: {
    session?: string;
    userAgent?: string;
  };
  tags?: Record<string, string>;
  extra?: Record<string, unknown>;
  level?: 'error' | 'warning' | 'info' | 'debug';
}

interface ErrorReport {
  message: string;
  stack?: string;
  timestamp: string;
  url: string;
  userAgent: string;
  context?: ErrorContext;
}

class ErrorReportingService {
  private static instance: ErrorReportingService;
  private isEnabled: boolean = false;
  private sentryDsn?: string;

  private constructor() {
    this.initialize();
  }

  static getInstance(): ErrorReportingService {
    if (!ErrorReportingService.instance) {
      ErrorReportingService.instance = new ErrorReportingService();
    }
    return ErrorReportingService.instance;
  }

  private initialize(): void {
    this.sentryDsn = process.env.NEXT_PUBLIC_SENTRY_DSN;
    this.isEnabled = Boolean(this.sentryDsn) && process.env.NODE_ENV === 'production';
  }

  /**
   * Capture an exception with context
   */
  captureException(error: Error, context?: ErrorContext): void {
    const errorReport = this.createErrorReport(error, context);
    
    
    if (process.env.NODE_ENV === 'development') {
      console.group('🚨 Error Captured');
      console.error('Error:', error);
      console.log('Context:', context);
      console.log('Report:', errorReport);
      console.groupEnd();
    }

    
    if (this.isEnabled) {
      this.sendToSentry(errorReport);
    }

    
    this.logToLocalStorage(errorReport);
  }

  /**
   * Capture a message with optional context
   */
  captureMessage(message: string, context?: ErrorContext): void {
    const level = context?.level || 'info';
    
    if (process.env.NODE_ENV === 'development') {
      console.log(`📝 ${level.toUpperCase()}: ${message}`, context);
    }

    if (this.isEnabled) {
      
      this.sendMessageToSentry(message, context);
    }
  }

  /**
   * Add user context for error reports
   */
  setUserContext(context: { session?: string; userAgent?: string }): void {
    if (typeof window !== 'undefined') {
      window.__ERROR_USER_CONTEXT = context;
    }
  }

  /**
   * Add tags for categorizing errors
   */
  setTags(tags: Record<string, string>): void {
    if (typeof window !== 'undefined') {
      window.__ERROR_TAGS = { ...window.__ERROR_TAGS, ...tags };
    }
  }

  private createErrorReport(error: Error, context?: ErrorContext): ErrorReport {
    const userContext = typeof window !== 'undefined' ? window.__ERROR_USER_CONTEXT : undefined;
    const globalTags = typeof window !== 'undefined' ? window.__ERROR_TAGS : undefined;

    return {
      message: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString(),
      url: typeof window !== 'undefined' ? window.location.href : 'server',
      userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'unknown',
      context: {
        ...context,
        user: { ...userContext, ...context?.user },
        tags: { ...globalTags, ...context?.tags },
      },
    };
  }

  private async sendToSentry(errorReport: ErrorReport): Promise<void> {
    if (!this.sentryDsn) return;

    try {
      
      const response = await fetch(`https://sentry.io/api/0/envelope/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          dsn: this.sentryDsn,
          timestamp: errorReport.timestamp,
          exception: {
            values: [{
              type: 'Error',
              value: errorReport.message,
              stacktrace: {
                frames: this.parseStackTrace(errorReport.stack || ''),
              },
            }],
          },
          user: errorReport.context?.user,
          tags: errorReport.context?.tags,
          extra: errorReport.context?.extra,
        }),
      });

      if (!response.ok) {
        console.warn('Failed to send error to Sentry:', response.statusText);
      }
    } catch (error) {
      console.warn('Error sending to Sentry:', error);
    }
  }

  private async sendMessageToSentry(message: string, context?: ErrorContext): Promise<void> {
    
    console.log('Message captured:', message, context);
  }

  private logToLocalStorage(errorReport: ErrorReport): void {
    if (typeof window === 'undefined') return;

    try {
      const errors = JSON.parse(localStorage.getItem('error_logs') || '[]');
      errors.push(errorReport);
      
      
      const recentErrors = errors.slice(-10);
      localStorage.setItem('error_logs', JSON.stringify(recentErrors));
    } catch (error) {
      console.warn('Failed to log error to localStorage:', error);
    }
  }

  private parseStackTrace(stack: string): Array<{ filename?: string; function?: string; lineno?: number }> {
    return stack
      .split('\n')
      .map(line => {
        const match = line.match(/at (.+?) \((.+?):(\d+):\d+\)/);
        if (match) {
          return {
            function: match[1],
            filename: match[2],
            lineno: parseInt(match[3], 10),
          };
        }
        return { function: line.trim() };
      })
      .filter(frame => frame.function);
  }

  /**
   * Get recent error logs for debugging
   */
  getRecentErrors(): ErrorReport[] {
    if (typeof window === 'undefined') return [];
    
    try {
      return JSON.parse(localStorage.getItem('error_logs') || '[]');
    } catch {
      return [];
    }
  }

  /**
   * Clear error logs
   */
  clearErrorLogs(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('error_logs');
    }
  }
}


if (typeof window !== 'undefined') {
  const errorService = ErrorReportingService.getInstance();

  
  window.addEventListener('unhandledrejection', (event) => {
    errorService.captureException(
      new Error(`Unhandled Promise Rejection: ${event.reason}`),
      { tags: { type: 'unhandled_promise_rejection' } }
    );
  });

  
  window.addEventListener('error', (event) => {
    errorService.captureException(event.error || new Error(event.message), {
      tags: { type: 'global_error' },
      extra: {
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
      },
    });
  });
}


declare global {
  interface Window {
    __ERROR_USER_CONTEXT?: { session?: string; userAgent?: string };
    __ERROR_TAGS?: Record<string, string>;
  }
}

export const errorReportingService = ErrorReportingService.getInstance();
export type { ErrorContext, ErrorReport };

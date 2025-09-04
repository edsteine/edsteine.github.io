import { Metadata } from 'next';
import ErrorPage from '@/app/_components/error/ErrorPage';

export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for could not be found.',
  robots: 'noindex, nofollow',
};

export default function NotFound() {
  return <ErrorPage errorType="404" />;
}
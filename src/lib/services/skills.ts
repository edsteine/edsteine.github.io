
export interface SkillLevel {
  min: number;
  gradient: string;
  label: string;
}


export const SKILL_LEVEL_CONFIG: Record<string, SkillLevel> = {
  expert: {
    min: 90,
    gradient: 'bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500',
    label: 'Expert'
  },
  advanced: {
    min: 80,
    gradient: 'bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600',
    label: 'Advanced'
  },
  intermediate: {
    min: 70,
    gradient: 'bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600',
    label: 'Intermediate'
  },
  beginner: {
    min: 60,
    gradient: 'bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-600',
    label: 'Beginner'
  },
  novice: {
    min: 0,
    gradient: 'bg-gradient-to-r from-gray-500 via-slate-500 to-gray-600',
    label: 'Novice'
  }
} as const;

export const TECH_ICON_COLORS: Record<string, string> = {
  
  kotlin: 'bg-[#10b981]',
  android: 'bg-[#10b981]',
  flutter: 'bg-[#60a5fa]',
  dart: 'bg-[#60a5fa]',
  
  
  react: 'bg-[#06b6d4]',
  'next.js': 'bg-[#06b6d4]',
  javascript: 'bg-[#facc15]',
  typescript: 'bg-[#2563eb]',
  
  
  'spring boot': 'bg-[#f97316]',
  java: 'bg-[#f97316]',
  'node.js': 'bg-[#84cc16]',
  python: 'bg-[#eab308]',
  django: 'bg-[#eab308]',
  
  
  sql: 'bg-[#8b5cf6]',
  postgresql: 'bg-[#8b5cf6]',
  postgis: 'bg-[#8b5cf6]',
  database: 'bg-[#8b5cf6]',
  
  
  docker: 'bg-[#6366f1]',
  aws: 'bg-[#6366f1]',
  cloud: 'bg-[#6366f1]',
  git: 'bg-[#1f2937]',
  github: 'bg-[#1f2937]',
  
  
  default: 'bg-[#9ca3af]'
} as const;

export class SkillsService {
  
  static getSkillGradient(level: number): string {
    const skillLevel = Object.values(SKILL_LEVEL_CONFIG)
      .sort((a, b) => b.min - a.min)
      .find(config => level >= config.min);
    
    return skillLevel?.gradient || SKILL_LEVEL_CONFIG.novice.gradient;
  }

  
  static getSkillLevelLabel(level: number): string {
    const skillLevel = Object.values(SKILL_LEVEL_CONFIG)
      .sort((a, b) => b.min - a.min)
      .find(config => level >= config.min);
    
    return skillLevel?.label || SKILL_LEVEL_CONFIG.novice.label;
  }

  
  static getTechIconColor(skillName: string, animated = true): string {
    const skill = skillName.toLowerCase().trim();
    const animationClass = animated ? ' animate-pulse' : '';
    
    
    if (TECH_ICON_COLORS[skill]) {
      return TECH_ICON_COLORS[skill] + animationClass;
    }
    
    
    for (const [key, color] of Object.entries(TECH_ICON_COLORS)) {
      if (skill.includes(key.toLowerCase()) || key.toLowerCase().includes(skill)) {
        return color + animationClass;
      }
    }
    
    return TECH_ICON_COLORS.default + animationClass;
  }

  
  static getSkillStatistics(skills: Record<string, { level: number }>) {
    const levels = Object.values(skills).map(skill => skill.level);
    
    return {
      averageLevel: Math.round(levels.reduce((sum, level) => sum + level, 0) / levels.length),
      expertCount: levels.filter(level => level >= SKILL_LEVEL_CONFIG.expert.min).length,
      totalSkills: levels.length,
      maxLevel: Math.max(...levels),
      minLevel: Math.min(...levels)
    };
  }

  
  static filterSkillsByCategory(skills: Record<string, { category: string }>, category: string) {
    return Object.entries(skills)
      .filter(([, skill]) => skill.category === category)
      .reduce((filtered, [name, skill]) => {
        filtered[name] = skill;
        return filtered;
      }, {} as typeof skills);
  }

  
  static getTopSkills(skills: Record<string, { level: number }>, count = 5) {
    return Object.entries(skills)
      .sort(([, a], [, b]) => b.level - a.level)
      .slice(0, count)
      .map(([name, skill]) => ({ name, ...skill }));
  }
}
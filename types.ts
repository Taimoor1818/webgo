import { LucideIcon } from 'lucide-react';

export interface LinkItem {
  name: string;
  url: string;
  description?: string;
  isPremium?: boolean;
}

export interface Section {
  title: string;
  items: LinkItem[];
}

export interface CategoryData {
  id: string;
  title: string;
  iconName: 'Bot' | 'Film' | 'GraduationCap' | 'HeartPulse' | 'Trophy' | 'Cpu' | 'Newspaper' | 'Briefcase' | 'Building2';
  description: string;
  sections?: Section[]; // For multi-section pages like AI
  items?: LinkItem[];   // For flat pages
}

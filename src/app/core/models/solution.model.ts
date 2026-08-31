export interface Solution {
  title: string;
  description: string;
  icon: string;
}

export interface Industry {
  name: string;
  icon: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface PortfolioItem {
  category: string;
  title: string;
  description: string;
  tags: string[];
  gradient: 'gold' | 'red' | 'dark' | 'cream';
}

export interface Faq {
  question: string;
  answer: string;
  category: string;
}

export interface Strength {
  title: string;
  description: string;
  icon: string;
}

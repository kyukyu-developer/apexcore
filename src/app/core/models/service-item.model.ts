export interface ServiceItem {
  id: string;
  title: string;
  route: string;
  icon: 'erp' | 'mobile' | 'website' | 'code' | 'mail' | 'brand' | 'blocks' | 'gear';
  accent: 'gold' | 'red';
  summary: string;
  bullets: string[];
}

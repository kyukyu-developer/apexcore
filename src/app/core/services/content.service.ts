import { Injectable } from '@angular/core';
import { ServiceItem } from '../models/service-item.model';
import {
  Faq, Industry, PortfolioItem, ProcessStep, Solution, Strength,
} from '../models/solution.model';

@Injectable({ providedIn: 'root' })
export class ContentService {

  readonly services: ServiceItem[] = [
    {
      id: 'erp-consulting',
      title: 'ERP Consulting',
      route: '/services/erp-consulting',
      icon: 'erp',
      accent: 'gold',
      summary: 'Expert ERP consulting to streamline your business processes, improve efficiency and drive growth.',
      bullets: ['ERP implementation', 'Business process analysis', 'ERP customization', 'System integration', 'Training & support'],
    },
    {
      id: 'mobile-app',
      title: 'Mobile App Development',
      route: '/services/mobile-app',
      icon: 'mobile',
      accent: 'red',
      summary: 'Custom mobile apps for Android & iOS that deliver seamless user experiences.',
      bullets: ['Android apps', 'iOS apps', 'UI/UX design', 'API integration', 'App maintenance'],
    },
    {
      id: 'website',
      title: 'Website Design & Development',
      route: '/services/website',
      icon: 'website',
      accent: 'gold',
      summary: 'Modern, responsive websites that showcase your brand and convert visitors into customers.',
      bullets: ['Corporate websites', 'Responsive websites', 'E-commerce', 'CMS', 'Website maintenance'],
    },
    {
      id: 'custom-software',
      title: 'Custom Software Development',
      route: '/services/custom-software',
      icon: 'code',
      accent: 'red',
      summary: 'Tailored software solutions built to solve your unique business challenges and scale with you.',
      bullets: ['Business software', 'Web applications', 'Desktop applications', 'System integration', 'Custom automation'],
    },
    {
      id: 'business-mail',
      title: 'Business Mail Service',
      route: '/services/business-mail',
      icon: 'mail',
      accent: 'gold',
      summary: 'Professional email solutions with your own domain – secure, reliable and trusted communication.',
      bullets: ['Custom domain email', 'Professional business email', 'Email setup', 'Security', 'Ongoing support'],
    },
    {
      id: 'logo-branding',
      title: 'Logo Design & Branding',
      route: '/services/logo-branding',
      icon: 'brand',
      accent: 'red',
      summary: 'Distinctive logo and brand identity design that make your business memorable and professional.',
      bullets: ['Logo design', 'Brand identity', 'Business cards', 'Social media branding', 'Brand guidelines'],
    },
  ];

  readonly strengths: Strength[] = [
    { title: 'Modern Technology',        description: 'We build with current tools and frameworks so your solution is fast, secure and future-ready.', icon: 'spark' },
    { title: 'Client-Focused Approach',  description: 'Every decision starts with your goals. We listen first, then propose the right approach.',       icon: 'user' },
    { title: 'Flexible Solutions',       description: 'We adapt to your scale, your budget and your timeline — no one-size-fits-all templates.',        icon: 'layers' },
    { title: 'Transparent Communication', description: 'Clear updates, honest timelines, no jargon. You always know where your project stands.',        icon: 'chat' },
    { title: 'Quality & Reliability',    description: 'Rigorous testing, code reviews and delivery standards on every project — no shortcuts.',         icon: 'shield' },
    { title: 'Ongoing Support',          description: 'Launch is a milestone, not the finish. We stay with you for maintenance, updates and growth.',   icon: 'support' },
  ];

  readonly solutions: Solution[] = [
    { title: 'ERP Solutions',         description: 'End-to-end ERP for finance, operations and reporting.',   icon: 'erp' },
    { title: 'CRM Solutions',         description: 'Manage leads, customers and sales pipelines in one place.', icon: 'crm' },
    { title: 'Inventory Management',  description: 'Track stock, movements and warehouses in real time.',       icon: 'box' },
    { title: 'HR Management',         description: 'Employees, payroll, attendance and leave in one system.',   icon: 'people' },
    { title: 'POS Systems',           description: 'Fast, reliable point of sale for retail and F&B.',          icon: 'pos' },
    { title: 'E-commerce',            description: 'Online storefronts with secure checkout and analytics.',    icon: 'cart' },
    { title: 'Business Automation',   description: 'Automate repetitive workflows and reduce manual errors.',   icon: 'gear' },
    { title: 'Custom Business Systems', description: 'Bespoke software built exactly to your process.',         icon: 'blocks' },
  ];

  readonly industries: Industry[] = [
    { name: 'Retail',                  icon: 'retail' },
    { name: 'Manufacturing',           icon: 'factory' },
    { name: 'Distribution',            icon: 'truck' },
    { name: 'Logistics',               icon: 'logistics' },
    { name: 'Services',                icon: 'services' },
    { name: 'Education',               icon: 'edu' },
    { name: 'Healthcare',              icon: 'health' },
    { name: 'Professional Businesses', icon: 'office' },
  ];

  readonly process: ProcessStep[] = [
    { step: 1, title: 'Discover',         description: 'We learn about your business, goals and current challenges.',      icon: 'search' },
    { step: 2, title: 'Plan',             description: 'We define scope, timeline and a clear implementation roadmap.',     icon: 'map' },
    { step: 3, title: 'Design & Develop', description: 'Our team designs, builds and iterates with your continuous input.', icon: 'craft' },
    { step: 4, title: 'Test & Deploy',    description: 'Thorough QA, then a smooth production rollout with zero surprises.',icon: 'rocket' },
    { step: 5, title: 'Support',          description: 'Ongoing maintenance, monitoring and enhancement after launch.',     icon: 'support' },
  ];

  readonly portfolio: PortfolioItem[] = [
    { category: 'ERP',        title: 'Demo ERP System',           description: 'Sample ERP with finance, inventory and reporting modules for a mid-size business.', tags: ['ERP', 'Web App', 'Reporting'], gradient: 'gold' },
    { category: 'Website',    title: 'Demo Business Website',     description: 'Corporate website showcasing services, portfolio and lead capture forms.',            tags: ['Corporate', 'Responsive', 'CMS'], gradient: 'red' },
    { category: 'Mobile',     title: 'Demo Mobile Application',   description: 'Cross-platform mobile app with authentication and offline-friendly data sync.',      tags: ['iOS', 'Android', 'API'],           gradient: 'dark' },
    { category: 'Inventory',  title: 'Demo Inventory System',     description: 'Real-time stock tracking, barcode scanning and multi-warehouse management.',         tags: ['Inventory', 'Barcode', 'Realtime'],gradient: 'cream' },
    { category: 'Mail',       title: 'Demo Business Mail Setup',  description: 'Custom-domain professional email configuration with security and spam controls.',    tags: ['Email', 'Security', 'Setup'],      gradient: 'gold' },
    { category: 'Branding',   title: 'Demo Brand Identity',       description: 'Sample logo, business cards and brand guidelines built end-to-end.',                 tags: ['Logo', 'Identity', 'Print'],       gradient: 'red' },
  ];

  readonly faqs: Faq[] = [
    { category: 'ERP Consulting',    question: 'How long does an ERP implementation usually take?',                  answer: 'It depends on scope and complexity, but most SME ERP rollouts take between 2 and 6 months. We break the project into clear phases so you see value early.' },
    { category: 'Custom Software',   question: 'Can you build software tailored to my exact business process?',       answer: 'Yes — that is exactly what custom software development is for. We start by mapping your process, then design and build a system that fits it precisely.' },
    { category: 'Website Development', question: 'Will my website be mobile-friendly and SEO-ready?',                  answer: 'Every website we deliver is fully responsive across mobile, tablet and desktop, and follows current on-page SEO best practices out of the box.' },
    { category: 'Mobile App Development', question: 'Do you build for both Android and iOS?',                          answer: 'Yes. Depending on your budget and requirements, we can build native or cross-platform apps that ship to both stores.' },
    { category: 'Business Mail',     question: 'Can I use my own domain for professional email?',                     answer: 'Absolutely. We help you set up secure, custom-domain business email — for example name@yourcompany.com — with proper anti-spam and security configuration.' },
    { category: 'Logo Design',       question: 'What is included in a branding package?',                             answer: 'A typical package includes your logo, colour palette, typography, business card design and a short brand guidelines document you can share with any designer.' },
  ];
}

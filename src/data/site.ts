/**
 * SITE-WIDE CONTENT
 * Menu, contact details and footer links. Edit here, not in the components.
 */

export const site = {
  name: 'Hina Shahrukh & Co.',
  tagline: 'Partners in Growth',
  url: 'https://hsco.pk',
  email: 'mail@hsco.pk',
  phone: '+92 301 8510470',
  address: '2nd Floor, Silver Square Plaza, F-11 Markaz, Islamabad',
  copyright: '© 2024 | Hina Shahrukh & Co.',
  motto: 'Innovation. Accountability. Growth.',
  footerBlurb:
    'Serving clients across 25 countries with expertise in assurance, compliance, advisory, capacity building, and technology.',
  vacanciesUrl: 'https://erp.hsgroup.app/jobs',
  /**
   * Where the "Quick Email" form posts to. The old WordPress site used WPForms.
   * Set this to your form service URL (for example a Formspree or Web3Forms endpoint).
   * While it is empty, the form opens the visitor's email app instead.
   */
  formEndpoint: '',
};

export type NavItem = { label: string; href: string; children?: NavItem[] };

export const mainNav: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About',
    href: '/about/',
    children: [
      { label: 'Our Group', href: '/group/' },
      { label: 'Newsroom', href: '/newsroom/' },
      { label: 'Team', href: '/team/' },
    ],
  },
  {
    label: 'Services',
    href: '/services/',
    children: [
      { label: 'Financial Advisory & Consultancy', href: '/services/financial-advisory/' },
      { label: 'Risk Advisory', href: '/services/risk-advisory/' },
      { label: 'Process Improvement', href: '/services/process-improvement/' },
      { label: 'Accounting & Bookkeeping', href: '/services/accounting-bookkeeping/' },
      { label: 'Audit & Assurance', href: '/services/audit-assurance/' },
      { label: 'Tax Advisory', href: '/services/tax-advisory/' },
      { label: 'Corporate Advisory', href: '/services/corporate-advisory/' },
      { label: 'IT Services', href: '/services/it-services/' },
    ],
  },
  { label: 'Industries & Clients', href: '/industries/' },
  {
    label: 'Insights',
    href: '/insights/',
    children: [{ label: 'Case Studies', href: '/case-studies/' }],
  },
];

export const headerActions = [
  { label: 'CAREERS', href: '/careers/', variant: 'navy' as const },
  { label: 'CONNECT', href: '/contact/', variant: 'red' as const },
];

export const footerLinks = [
  { label: 'Contact', href: '/contact/' },
  { label: 'Privacy Policy', href: '/privacy-policy/' },
  { label: 'Sustainability', href: '/sustainability/' },
];

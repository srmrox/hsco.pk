/**
 * SERVICES
 * One entry per service. The /services/ page and every /services/<slug>/ page
 * are built from this list. Add, remove or reorder entries here.
 */

export type Service = {
  slug: string;
  /** Page title (hero) */
  title: string;
  /** Title on the /services/ overview card */
  cardTitle: string;
  /** One line on the /services/ overview card */
  summary: string;
  /** Short label in the side menu on service pages */
  navLabel: string;
  intro: string;
  ctaLabel: string;
  lead: string;
  capabilities: string[];
  /** Optional highlighted note under the capability list */
  edge: { label: string; text: string } | null;
  engage: { title: string; text: string }[];
  closingHeading: string;
};

export const services: Service[] = [
  {
    "slug": "financial-advisory",
    "title": "Financial Advisory & Consultancy",
    "cardTitle": "Financial Advisory & Consultancy",
    "summary": "Strategy, modelling, due diligence and valuations.",
    "navLabel": "Financial Advisory",
    "intro": "A big decision is only as good as the thinking behind it. We bring an investor’s eye to that thinking, weighing every move against your whole business, your sector and the wider economy.",
    "ctaLabel": "Request a proposal",
    "lead": "An objective third-party view across the advisory and transaction lifecycle.",
    "capabilities": [
      "Strategic & business plans and models",
      "Operational plans and models",
      "Planning workshops",
      "Value-chain analysis",
      "Market analysis & research",
      "Financial modelling & feasibility",
      "Transaction advisory",
      "Due diligence",
      "Share valuations"
    ],
    "edge": null,
    "engage": [
      {
        "title": "Raising funds or restructuring",
        "text": "You need a defensible model before facing investors or lenders."
      },
      {
        "title": "A deal on the table",
        "text": "You’re weighing a buy, sell or partnership and need independent diligence and valuation."
      },
      {
        "title": "Pressure-testing a plan",
        "text": "You want your strategy stress-tested against your sector and the economy."
      }
    ],
    "closingHeading": "Let’s talk about your next move."
  },
  {
    "slug": "risk-advisory",
    "title": "Risk Advisory",
    "cardTitle": "Risk Advisory",
    "summary": "Forensic work, internal audit and controls assurance.",
    "navLabel": "Risk Advisory",
    "intro": "As your business and its rulebook grow more complex, the risks multiply. We help you find the gaps before they find you, and keep performance and compliance in balance.",
    "ctaLabel": "Request a risk review",
    "lead": "Independent assurance that balances performance with compliance.",
    "capabilities": [
      "Forensic & anti-fraud investigations",
      "Internal audit services",
      "System & process assurance",
      "Internal-control assurance"
    ],
    "edge": null,
    "engage": [
      {
        "title": "You suspect fraud",
        "text": "You need a discreet, independent investigation and a clear record of what happened."
      },
      {
        "title": "Building internal audit",
        "text": "You want a function that catches problems, not one that ticks boxes."
      },
      {
        "title": "A board wants assurance",
        "text": "You need credible, independent evidence that your controls work."
      }
    ],
    "closingHeading": "Know your risks before they cost you."
  },
  {
    "slug": "process-improvement",
    "title": "Process Improvement",
    "cardTitle": "Process Improvement",
    "summary": "Transformation, continuity and project delivery.",
    "navLabel": "Process Improvement",
    "intro": "A major change can open the next chapter or quietly sink the business. The difference is execution. We bring the insight and the tools to get you through it with the result intact.",
    "ctaLabel": "Plan your transformation",
    "lead": "The insight and tools to navigate transformation safely.",
    "capabilities": [
      "Business process management",
      "Turnaround & transformation",
      "Business continuity management",
      "Asset management",
      "Project management"
    ],
    "edge": null,
    "engage": [
      {
        "title": "You’re scaling",
        "text": "Processes that worked at your old size are starting to crack at your new one."
      },
      {
        "title": "A change is stalling",
        "text": "A transformation has lost momentum or is running over, and you need it back on track."
      },
      {
        "title": "You need resilience",
        "text": "You want continuity plans that hold up when something actually goes wrong."
      }
    ],
    "closingHeading": "Get through change with the result intact."
  },
  {
    "slug": "accounting-bookkeeping",
    "title": "Accounting & Bookkeeping",
    "cardTitle": "Accounting & Bookkeeping",
    "summary": "Outsourced finance, payroll and ERP.",
    "navLabel": "Accounting & Bookkeeping",
    "intro": "Building an in-house finance team is expensive, and late books cost you decisions. We run your finance function for you: accurate, on time, and built around how you actually work.",
    "ctaLabel": "Outsource your finance",
    "lead": "Timely, accurate, customised finance, without the cost of a department.",
    "capabilities": [
      "Bookkeeping & financial accounting",
      "Income statement & balance sheet",
      "Cash-flow records",
      "Bank reconciliations",
      "Payroll",
      "Inventory reporting",
      "QuickBooks",
      "Receivables & payables ageing",
      "Internal cost controls",
      "Budgeting & growth planning",
      "ERP system solutions"
    ],
    "edge": null,
    "engage": [
      {
        "title": "Early-stage or scaling",
        "text": "You need real finance discipline without hiring a full team yet."
      },
      {
        "title": "Month-end is a struggle",
        "text": "Your close is slow, manual or unreliable, and you cannot trust the output."
      },
      {
        "title": "Moving to an ERP",
        "text": "You want the migration handled by people who understand the accounting and the system."
      }
    ],
    "closingHeading": "Clean books, on time, every month."
  },
  {
    "slug": "audit-assurance",
    "title": "Audit & Assurance",
    "cardTitle": "Audit & Assurance",
    "summary": "Independent audit that builds confidence.",
    "navLabel": "Audit & Assurance",
    "intro": "Stakeholders need to trust your numbers, and a weak audit erodes that trust when you need it most. A good one builds confidence and gives you a clearer view of your own business.",
    "ctaLabel": "Request an audit proposal",
    "lead": "Independent audit that builds confidence and surfaces real insight.",
    "capabilities": [
      "External audits",
      "Information systems (IS) audits",
      "Accounting & bookkeeping support",
      "Agreed-upon procedures",
      "Financial-statement preparation",
      "Non-audit assurance",
      "Capital-market transaction support",
      "Technical & regulatory advice"
    ],
    "edge": null,
    "engage": [
      {
        "title": "A statutory audit is due",
        "text": "You need it done properly and on time, by a firm that stands behind its opinion."
      },
      {
        "title": "A lender wants assurance",
        "text": "You need independent comfort over your numbers to close a deal or a facility."
      },
      {
        "title": "Preparing for a transaction",
        "text": "You want the books in order before anyone else looks at them."
      }
    ],
    "closingHeading": "An audit your stakeholders can rely on."
  },
  {
    "slug": "tax-advisory",
    "title": "Tax Advisory",
    "cardTitle": "Tax Advisory",
    "summary": "Direct, indirect and international tax.",
    "navLabel": "Tax Advisory",
    "intro": "Tax touches everything, and Pakistan’s rules are dense and often unclear. We keep you compliant, paying what you owe and not a rupee more, with someone who can answer when the authorities ask.",
    "ctaLabel": "Get tax help",
    "lead": "The full spectrum of direct, indirect and personal tax, across jurisdictions.",
    "capabilities": [
      "Registration with tax authorities",
      "Tax planning & accounting",
      "Local & international tax advisory",
      "Income-tax & withholding returns",
      "Sales tax & FED returns",
      "Advance-tax statements",
      "Responding to assessment notices",
      "Tax-audit support",
      "Representation before appellate forums",
      "Training & workshops"
    ],
    "edge": null,
    "engage": [
      {
        "title": "Entering the market",
        "text": "You need to register and structure correctly from the start."
      },
      {
        "title": "A notice or an audit",
        "text": "The FBR has raised a question or opened an audit, and you need it handled properly."
      },
      {
        "title": "Across borders",
        "text": "You need structuring that works in more than one jurisdiction."
      }
    ],
    "closingHeading": "Stay compliant. Stop overpaying."
  },
  {
    "slug": "corporate-advisory",
    "title": "Corporate Advisory",
    "cardTitle": "Corporate Advisory",
    "summary": "Company law, secretarial and compliance.",
    "navLabel": "Corporate Advisory",
    "intro": "Setting up an entity, protecting an idea, staying on the right side of company law: easy to get wrong and expensive to fix. We give clear, practical advice and handle the filings, so compliance becomes routine.",
    "ctaLabel": "Talk to a corporate adviser",
    "lead": "Expert, practical help with company law, secretarial practice and compliance in Pakistan.",
    "capabilities": [
      "Company & partnership registration",
      "NGO & NPO registration",
      "Trademark, patent & copyright registration",
      "Authorised share-capital increases",
      "Memorandum & Articles of Association",
      "Company secretarial practice",
      "EOBI & labour-law compliance"
    ],
    "edge": null,
    "engage": [
      {
        "title": "Incorporating or restructuring",
        "text": "You want the entity set up correctly the first time."
      },
      {
        "title": "Starting an NGO or NPO",
        "text": "You need registration and ongoing compliance handled by people who know the sector."
      },
      {
        "title": "Protecting your IP",
        "text": "You want your brand, product or work formally registered and defended."
      }
    ],
    "closingHeading": "Make compliance routine."
  },
  {
    "slug": "it-services",
    "title": "IT Services",
    "cardTitle": "IT Services",
    "summary": "Software, web and data, built in-house.",
    "navLabel": "IT Services",
    "intro": "Off-the-shelf software rarely fits, and spreadsheets do not scale. Most firms hand you to a vendor who does not understand your numbers. We do not: our developers build the system with you, next to our accountants.",
    "ctaLabel": "Scope your build",
    "lead": "Custom software, web and data solutions, built in-house.",
    "capabilities": [
      "Databases for small to large enterprises",
      "Platform & software development",
      "Website development",
      "Social-media management",
      "Graphic design",
      "Corporate-identity management"
    ],
    "edge": {
      "label": "Our signature edge:",
      "text": "a Chartered Accountancy practice with a genuine in-house build team, with technology clients in Australia, the US, India, Spain and the UK. When a solution is not available, we build a new one with you from scratch."
    },
    "engage": [
      {
        "title": "Nothing off the shelf fits",
        "text": "You need software shaped around your business, not the other way around."
      },
      {
        "title": "Digitising finance or ops",
        "text": "You want a system designed by people who understand the workflow and the accounting."
      },
      {
        "title": "Refreshing your presence",
        "text": "You want a website and identity that match the quality of your work."
      }
    ],
    "closingHeading": "Build the system your business actually needs."
  }
];

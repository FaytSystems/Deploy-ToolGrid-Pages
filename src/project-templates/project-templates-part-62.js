export const PROJECT_TEMPLATES_PART_62 = [
  {
    "id": "project-it-helpdesk-marketing-decision-report-101",
    "title": "IT helpdesk marketing decision report workflow",
    "field": "IT helpdesk",
    "businessFunction": "marketing",
    "groupId": "group-marketing-decision-report",
    "outcome": "Use compatible marketing tools to produce a decision-ready report with supporting calculations for IT helpdesk.",
    "prompt": "Build a micro workflow for IT helpdesk: produce a decision-ready report with supporting calculations using marketing tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste IT helpdesk notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible marketing chain.",
    "complexity": "micro-2-4",
    "layout": "1x1",
    "executionMode": "compact-waterfall",
    "toolCount": 3,
    "panelCount": 1,
    "maxNestedUiDepth": 3,
    "tags": [
      "it-helpdesk",
      "marketing",
      "decision-report",
      "micro-2-4"
    ],
    "compatibilitySummary": "3 tools arranged as 1 panel UI; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Marketing node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "newsletter-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "markdown-link-url-encoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 2
          },
          {
            "order": 3,
            "toolId": "code-comment-slug-generator",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 3
          }
        ]
      }
    ]
  },
  {
    "id": "project-it-helpdesk-sales-decision-report-102",
    "title": "IT helpdesk sales decision report workflow",
    "field": "IT helpdesk",
    "businessFunction": "sales",
    "groupId": "group-sales-decision-report",
    "outcome": "Use compatible sales tools to produce a decision-ready report with supporting calculations for IT helpdesk.",
    "prompt": "Build a 16-panel workflow for IT helpdesk: produce a decision-ready report with supporting calculations using sales tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste IT helpdesk notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible sales chain.",
    "complexity": "standard-16",
    "layout": "4x4",
    "executionMode": "waterfall",
    "toolCount": 16,
    "panelCount": 16,
    "maxNestedUiDepth": 1,
    "tags": [
      "it-helpdesk",
      "sales",
      "decision-report",
      "standard-16"
    ],
    "compatibilitySummary": "16 tools arranged as 16 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Sales node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "schema-markup-url-encoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "Sales node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 2,
            "toolId": "git-branch-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 2,
        "uiTitle": "Sales node 3",
        "mode": "waterfall",
        "tools": [
          {
            "order": 3,
            "toolId": "facebook-bio-slug-generator",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 3,
        "uiTitle": "Sales node 4",
        "mode": "waterfall",
        "tools": [
          {
            "order": 4,
            "toolId": "newsletter-campaign-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 4,
        "uiTitle": "Sales node 5",
        "mode": "waterfall",
        "tools": [
          {
            "order": 5,
            "toolId": "podcast-notes-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 5,
        "uiTitle": "Sales node 6",
        "mode": "waterfall",
        "tools": [
          {
            "order": 6,
            "toolId": "json-config-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 6,
        "uiTitle": "Sales node 7",
        "mode": "waterfall",
        "tools": [
          {
            "order": 7,
            "toolId": "json-config-url-encoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 7,
        "uiTitle": "Sales node 8",
        "mode": "waterfall",
        "tools": [
          {
            "order": 8,
            "toolId": "xml-node-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 8,
        "uiTitle": "Sales node 9",
        "mode": "waterfall",
        "tools": [
          {
            "order": 9,
            "toolId": "recipe-notes-title-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 9,
        "uiTitle": "Sales node 10",
        "mode": "waterfall",
        "tools": [
          {
            "order": 10,
            "toolId": "faq-page-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 10,
        "uiTitle": "Sales node 11",
        "mode": "waterfall",
        "tools": [
          {
            "order": 11,
            "toolId": "instagram-caption-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 11,
        "uiTitle": "Sales node 12",
        "mode": "waterfall",
        "tools": [
          {
            "order": 12,
            "toolId": "sitemap-url-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 12,
        "uiTitle": "Sales node 13",
        "mode": "waterfall",
        "tools": [
          {
            "order": 13,
            "toolId": "csv-cell-url-encoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 13,
        "uiTitle": "Sales node 14",
        "mode": "waterfall",
        "tools": [
          {
            "order": 14,
            "toolId": "prompt-text-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 14,
        "uiTitle": "Sales node 15",
        "mode": "waterfall",
        "tools": [
          {
            "order": 15,
            "toolId": "facebook-bio-blank-line-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 15,
        "uiTitle": "Sales node 16",
        "mode": "waterfall",
        "tools": [
          {
            "order": 16,
            "toolId": "blog-article-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-it-helpdesk-support-decision-report-103",
    "title": "IT helpdesk customer support decision report workflow",
    "field": "IT helpdesk",
    "businessFunction": "customer support",
    "groupId": "group-support-decision-report",
    "outcome": "Use compatible customer support tools to produce a decision-ready report with supporting calculations for IT helpdesk.",
    "prompt": "Build a micro workflow for IT helpdesk: produce a decision-ready report with supporting calculations using customer support tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste IT helpdesk notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible customer support chain.",
    "complexity": "micro-2-4",
    "layout": "2x1",
    "executionMode": "compact-waterfall",
    "toolCount": 4,
    "panelCount": 2,
    "maxNestedUiDepth": 2,
    "tags": [
      "it-helpdesk",
      "support",
      "decision-report",
      "micro-2-4"
    ],
    "compatibilitySummary": "4 tools arranged as 2 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Customer support node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "instagram-caption-title-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "Customer support node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 3,
            "toolId": "system-message-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 4,
            "toolId": "folder-name-add-weeks-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 2
          }
        ]
      }
    ]
  },
  {
    "id": "project-it-helpdesk-operations-decision-report-104",
    "title": "IT helpdesk operations decision report workflow",
    "field": "IT helpdesk",
    "businessFunction": "operations",
    "groupId": "group-operations-decision-report",
    "outcome": "Use compatible operations tools to produce a decision-ready report with supporting calculations for IT helpdesk.",
    "prompt": "Build a 8-panel workflow for IT helpdesk: produce a decision-ready report with supporting calculations using operations tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste IT helpdesk notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible operations chain.",
    "complexity": "mid-8",
    "layout": "4x2",
    "executionMode": "hybrid",
    "toolCount": 8,
    "panelCount": 8,
    "maxNestedUiDepth": 1,
    "tags": [
      "it-helpdesk",
      "operations",
      "decision-report",
      "mid-8"
    ],
    "compatibilitySummary": "8 tools arranged as 8 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Operations node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "csv-export-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "Operations node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 2,
            "toolId": "product-listing-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 2,
        "uiTitle": "Operations node 3",
        "mode": "waterfall",
        "tools": [
          {
            "order": 3,
            "toolId": "landing-page-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 3,
        "uiTitle": "Operations node 4",
        "mode": "waterfall",
        "tools": [
          {
            "order": 4,
            "toolId": "newsletter-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 4,
        "uiTitle": "Operations node 5",
        "mode": "waterfall",
        "tools": [
          {
            "order": 5,
            "toolId": "sitemap-entry-title-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 5,
        "uiTitle": "Operations node 6",
        "mode": "waterfall",
        "tools": [
          {
            "order": 6,
            "toolId": "markdown-doc-add-years-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 6,
        "uiTitle": "Operations node 7",
        "mode": "waterfall",
        "tools": [
          {
            "order": 7,
            "toolId": "press-release-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 7,
        "uiTitle": "Operations node 8",
        "mode": "waterfall",
        "tools": [
          {
            "order": 8,
            "toolId": "json-snippet-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-it-helpdesk-finance-decision-report-105",
    "title": "IT helpdesk finance decision report workflow",
    "field": "IT helpdesk",
    "businessFunction": "finance",
    "groupId": "group-finance-decision-report",
    "outcome": "Use compatible finance tools to produce a decision-ready report with supporting calculations for IT helpdesk.",
    "prompt": "Build a 32-tool nested workbench for IT helpdesk: produce a decision-ready report with supporting calculations using finance tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste IT helpdesk notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible finance chain.",
    "complexity": "advanced-32",
    "layout": "4x4",
    "executionMode": "hybrid-waterfall",
    "toolCount": 32,
    "panelCount": 16,
    "maxNestedUiDepth": 2,
    "tags": [
      "it-helpdesk",
      "finance",
      "decision-report",
      "advanced-32"
    ],
    "compatibilitySummary": "32 tools arranged as 16 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Finance node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "seo-title-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "compound-interest-calculator",
            "role": "model long-term growth or recurring gains",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "Finance node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 3,
            "toolId": "loan-payment-calculator",
            "role": "estimate payment obligations",
            "uiDepth": 1
          },
          {
            "order": 4,
            "toolId": "podcast-notes-rectangle-area-calculator",
            "role": "run a lightweight business formula",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 2,
        "uiTitle": "Finance node 3",
        "mode": "waterfall",
        "tools": [
          {
            "order": 5,
            "toolId": "consulting-invoice-total-calculator",
            "role": "calculate invoice totals from line-item assumptions",
            "uiDepth": 1
          },
          {
            "order": 6,
            "toolId": "invoice-memo-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 3,
        "uiTitle": "Finance node 4",
        "mode": "waterfall",
        "tools": [
          {
            "order": 7,
            "toolId": "markdown-doc-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 1
          },
          {
            "order": 8,
            "toolId": "compound-interest-calculator",
            "role": "model long-term growth or recurring gains",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 4,
        "uiTitle": "Finance node 5",
        "mode": "waterfall",
        "tools": [
          {
            "order": 9,
            "toolId": "loan-payment-calculator",
            "role": "estimate payment obligations",
            "uiDepth": 1
          },
          {
            "order": 10,
            "toolId": "plant-care-notes-division-calculator",
            "role": "run a lightweight business formula",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 5,
        "uiTitle": "Finance node 6",
        "mode": "waterfall",
        "tools": [
          {
            "order": 11,
            "toolId": "digital-product-order-total-calculator",
            "role": "calculate invoice totals from line-item assumptions",
            "uiDepth": 1
          },
          {
            "order": 12,
            "toolId": "ebook-chapter-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 6,
        "uiTitle": "Finance node 7",
        "mode": "waterfall",
        "tools": [
          {
            "order": 13,
            "toolId": "folder-name-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 1
          },
          {
            "order": 14,
            "toolId": "compound-interest-calculator",
            "role": "model long-term growth or recurring gains",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 7,
        "uiTitle": "Finance node 8",
        "mode": "waterfall",
        "tools": [
          {
            "order": 15,
            "toolId": "loan-payment-calculator",
            "role": "estimate payment obligations",
            "uiDepth": 1
          },
          {
            "order": 16,
            "toolId": "newsletter-average-calculator",
            "role": "run a lightweight business formula",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 8,
        "uiTitle": "Finance node 9",
        "mode": "waterfall",
        "tools": [
          {
            "order": 17,
            "toolId": "donation-receipt-total-calculator",
            "role": "calculate invoice totals from line-item assumptions",
            "uiDepth": 1
          },
          {
            "order": 18,
            "toolId": "video-script-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 9,
        "uiTitle": "Finance node 10",
        "mode": "waterfall",
        "tools": [
          {
            "order": 19,
            "toolId": "brand-name-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 1
          },
          {
            "order": 20,
            "toolId": "compound-interest-calculator",
            "role": "model long-term growth or recurring gains",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 10,
        "uiTitle": "Finance node 11",
        "mode": "waterfall",
        "tools": [
          {
            "order": 21,
            "toolId": "loan-payment-calculator",
            "role": "estimate payment obligations",
            "uiDepth": 1
          },
          {
            "order": 22,
            "toolId": "markdown-doc-subtraction-calculator",
            "role": "run a lightweight business formula",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 11,
        "uiTitle": "Finance node 12",
        "mode": "waterfall",
        "tools": [
          {
            "order": 23,
            "toolId": "freelance-invoice-total-calculator",
            "role": "calculate invoice totals from line-item assumptions",
            "uiDepth": 1
          },
          {
            "order": 24,
            "toolId": "newsletter-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 12,
        "uiTitle": "Finance node 13",
        "mode": "waterfall",
        "tools": [
          {
            "order": 25,
            "toolId": "product-listing-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 1
          },
          {
            "order": 26,
            "toolId": "compound-interest-calculator",
            "role": "model long-term growth or recurring gains",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 13,
        "uiTitle": "Finance node 14",
        "mode": "waterfall",
        "tools": [
          {
            "order": 27,
            "toolId": "loan-payment-calculator",
            "role": "estimate payment obligations",
            "uiDepth": 1
          },
          {
            "order": 28,
            "toolId": "landing-page-multiplication-calculator",
            "role": "run a lightweight business formula",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 14,
        "uiTitle": "Finance node 15",
        "mode": "waterfall",
        "tools": [
          {
            "order": 29,
            "toolId": "plant-sale-order-total-calculator",
            "role": "calculate invoice totals from line-item assumptions",
            "uiDepth": 1
          },
          {
            "order": 30,
            "toolId": "hashtag-set-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 15,
        "uiTitle": "Finance node 16",
        "mode": "waterfall",
        "tools": [
          {
            "order": 31,
            "toolId": "json-snippet-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 1
          },
          {
            "order": 32,
            "toolId": "compound-interest-calculator",
            "role": "model long-term growth or recurring gains",
            "uiDepth": 2
          }
        ]
      }
    ]
  },
  {
    "id": "project-it-helpdesk-hr-decision-report-106",
    "title": "IT helpdesk HR decision report workflow",
    "field": "IT helpdesk",
    "businessFunction": "HR",
    "groupId": "group-hr-decision-report",
    "outcome": "Use compatible HR tools to produce a decision-ready report with supporting calculations for IT helpdesk.",
    "prompt": "Build a 8-panel workflow for IT helpdesk: produce a decision-ready report with supporting calculations using HR tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste IT helpdesk notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible HR chain.",
    "complexity": "mid-8",
    "layout": "2x4",
    "executionMode": "hybrid",
    "toolCount": 8,
    "panelCount": 8,
    "maxNestedUiDepth": 1,
    "tags": [
      "it-helpdesk",
      "hr",
      "decision-report",
      "mid-8"
    ],
    "compatibilitySummary": "8 tools arranged as 8 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "HR node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "seo-title-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "HR node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 2,
            "toolId": "product-listing-password-generator",
            "role": "create secure passwords for the project",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 2,
        "uiTitle": "HR node 3",
        "mode": "waterfall",
        "tools": [
          {
            "order": 3,
            "toolId": "dns-record-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 3,
        "uiTitle": "HR node 4",
        "mode": "waterfall",
        "tools": [
          {
            "order": 4,
            "toolId": "ebook-chapter-uppercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 4,
        "uiTitle": "HR node 5",
        "mode": "waterfall",
        "tools": [
          {
            "order": 5,
            "toolId": "meta-description-add-months-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 5,
        "uiTitle": "HR node 6",
        "mode": "waterfall",
        "tools": [
          {
            "order": 6,
            "toolId": "facebook-bio-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 6,
        "uiTitle": "HR node 7",
        "mode": "waterfall",
        "tools": [
          {
            "order": 7,
            "toolId": "jwt-payload-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 7,
        "uiTitle": "HR node 8",
        "mode": "waterfall",
        "tools": [
          {
            "order": 8,
            "toolId": "cover-letter-password-generator",
            "role": "create secure passwords for the project",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-it-helpdesk-content-decision-report-107",
    "title": "IT helpdesk content decision report workflow",
    "field": "IT helpdesk",
    "businessFunction": "content",
    "groupId": "group-content-decision-report",
    "outcome": "Use compatible content tools to produce a decision-ready report with supporting calculations for IT helpdesk.",
    "prompt": "Build a micro workflow for IT helpdesk: produce a decision-ready report with supporting calculations using content tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste IT helpdesk notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible content chain.",
    "complexity": "micro-2-4",
    "layout": "2x1",
    "executionMode": "compact-waterfall",
    "toolCount": 4,
    "panelCount": 2,
    "maxNestedUiDepth": 2,
    "tags": [
      "it-helpdesk",
      "content",
      "decision-report",
      "micro-2-4"
    ],
    "compatibilitySummary": "4 tools arranged as 2 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Content node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "customer-reply-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "google-result-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "Content node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 3,
            "toolId": "html-block-extra-space-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 4,
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
            "uiDepth": 2
          }
        ]
      }
    ]
  },
  {
    "id": "project-it-helpdesk-seo-decision-report-108",
    "title": "IT helpdesk SEO decision report workflow",
    "field": "IT helpdesk",
    "businessFunction": "SEO",
    "groupId": "group-seo-decision-report",
    "outcome": "Use compatible SEO tools to produce a decision-ready report with supporting calculations for IT helpdesk.",
    "prompt": "Build a 16-panel workflow for IT helpdesk: produce a decision-ready report with supporting calculations using SEO tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste IT helpdesk notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible SEO chain.",
    "complexity": "standard-16",
    "layout": "4x4",
    "executionMode": "waterfall",
    "toolCount": 16,
    "panelCount": 16,
    "maxNestedUiDepth": 1,
    "tags": [
      "it-helpdesk",
      "seo",
      "decision-report",
      "standard-16"
    ],
    "compatibilitySummary": "16 tools arranged as 16 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "SEO node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "facebook-bio-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "SEO node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 2,
            "toolId": "product-page-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 2,
        "uiTitle": "SEO node 3",
        "mode": "waterfall",
        "tools": [
          {
            "order": 3,
            "toolId": "product-page-keyword-density-checker",
            "role": "extract keyword usage from project text",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 3,
        "uiTitle": "SEO node 4",
        "mode": "waterfall",
        "tools": [
          {
            "order": 4,
            "toolId": "tiktok-caption-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 4,
        "uiTitle": "SEO node 5",
        "mode": "waterfall",
        "tools": [
          {
            "order": 5,
            "toolId": "cookie-value-html-unescaper",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 5,
        "uiTitle": "SEO node 6",
        "mode": "waterfall",
        "tools": [
          {
            "order": 6,
            "toolId": "shipping-note-extra-space-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 6,
        "uiTitle": "SEO node 7",
        "mode": "waterfall",
        "tools": [
          {
            "order": 7,
            "toolId": "python-string-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 7,
        "uiTitle": "SEO node 8",
        "mode": "waterfall",
        "tools": [
          {
            "order": 8,
            "toolId": "facebook-bio-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 8,
        "uiTitle": "SEO node 9",
        "mode": "waterfall",
        "tools": [
          {
            "order": 9,
            "toolId": "image-tool-page-keyword-density-checker",
            "role": "extract keyword usage from project text",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 9,
        "uiTitle": "SEO node 10",
        "mode": "waterfall",
        "tools": [
          {
            "order": 10,
            "toolId": "newsletter-campaign-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 10,
        "uiTitle": "SEO node 11",
        "mode": "waterfall",
        "tools": [
          {
            "order": 11,
            "toolId": "tracking-link-html-unescaper",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 11,
        "uiTitle": "SEO node 12",
        "mode": "waterfall",
        "tools": [
          {
            "order": 12,
            "toolId": "garden-journal-sentence-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 12,
        "uiTitle": "SEO node 13",
        "mode": "waterfall",
        "tools": [
          {
            "order": 13,
            "toolId": "youtube-description-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 13,
        "uiTitle": "SEO node 14",
        "mode": "waterfall",
        "tools": [
          {
            "order": 14,
            "toolId": "review-page-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 14,
        "uiTitle": "SEO node 15",
        "mode": "waterfall",
        "tools": [
          {
            "order": 15,
            "toolId": "converter-page-keyword-density-checker",
            "role": "extract keyword usage from project text",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 15,
        "uiTitle": "SEO node 16",
        "mode": "waterfall",
        "tools": [
          {
            "order": 16,
            "toolId": "faq-page-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-it-helpdesk-social-decision-report-109",
    "title": "IT helpdesk social media decision report workflow",
    "field": "IT helpdesk",
    "businessFunction": "social media",
    "groupId": "group-social-decision-report",
    "outcome": "Use compatible social media tools to produce a decision-ready report with supporting calculations for IT helpdesk.",
    "prompt": "Build a micro workflow for IT helpdesk: produce a decision-ready report with supporting calculations using social media tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste IT helpdesk notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible social media chain.",
    "complexity": "micro-2-4",
    "layout": "1x1",
    "executionMode": "compact-waterfall",
    "toolCount": 3,
    "panelCount": 1,
    "maxNestedUiDepth": 3,
    "tags": [
      "it-helpdesk",
      "social",
      "decision-report",
      "micro-2-4"
    ],
    "compatibilitySummary": "3 tools arranged as 1 panel UI; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Social media node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "podcast-notes-slug-generator",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "blog-post-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 2
          },
          {
            "order": 3,
            "toolId": "youtube-video-keyword-density-checker",
            "role": "extract keyword usage from project text",
            "uiDepth": 3
          }
        ]
      }
    ]
  },
  {
    "id": "project-it-helpdesk-email-decision-report-110",
    "title": "IT helpdesk email decision report workflow",
    "field": "IT helpdesk",
    "businessFunction": "email",
    "groupId": "group-email-decision-report",
    "outcome": "Use compatible email tools to produce a decision-ready report with supporting calculations for IT helpdesk.",
    "prompt": "Build a 64-tool nested waterfall for IT helpdesk: produce a decision-ready report with supporting calculations using email tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste IT helpdesk notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible email chain.",
    "complexity": "nested-64",
    "layout": "4x4",
    "executionMode": "nested-waterfall",
    "toolCount": 64,
    "panelCount": 16,
    "maxNestedUiDepth": 4,
    "tags": [
      "it-helpdesk",
      "email",
      "decision-report",
      "nested-64"
    ],
    "compatibilitySummary": "64 tools arranged as 16 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Email node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "garden-guide-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 2
          },
          {
            "order": 3,
            "toolId": "contact-page-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 3
          },
          {
            "order": 4,
            "toolId": "response-text-url-decoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "Email node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 5,
            "toolId": "robots-rule-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 6,
            "toolId": "file-name-blank-line-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 7,
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
            "uiDepth": 3
          },
          {
            "order": 8,
            "toolId": "youtube-description-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 2,
        "uiTitle": "Email node 3",
        "mode": "waterfall",
        "tools": [
          {
            "order": 9,
            "toolId": "tool-page-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 1
          },
          {
            "order": 10,
            "toolId": "ip-allowlist-url-decoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 2
          },
          {
            "order": 11,
            "toolId": "cloudflare-rule-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 12,
            "toolId": "resume-bullet-find-and-replace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 3,
        "uiTitle": "Email node 4",
        "mode": "waterfall",
        "tools": [
          {
            "order": 13,
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
            "uiDepth": 1
          },
          {
            "order": 14,
            "toolId": "homepage-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 2
          },
          {
            "order": 15,
            "toolId": "pinterest-pin-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 3
          },
          {
            "order": 16,
            "toolId": "cookie-value-url-decoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 4,
        "uiTitle": "Email node 5",
        "mode": "waterfall",
        "tools": [
          {
            "order": 17,
            "toolId": "jwt-payload-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 18,
            "toolId": "facebook-bio-slug-generator",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 19,
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
            "uiDepth": 3
          },
          {
            "order": 20,
            "toolId": "about-page-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 5,
        "uiTitle": "Email node 6",
        "mode": "waterfall",
        "tools": [
          {
            "order": 21,
            "toolId": "free-pdf-page-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 1
          },
          {
            "order": 22,
            "toolId": "tracking-link-url-decoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 2
          },
          {
            "order": 23,
            "toolId": "sql-snippet-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 24,
            "toolId": "recipe-notes-title-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 6,
        "uiTitle": "Email node 7",
        "mode": "waterfall",
        "tools": [
          {
            "order": 25,
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
            "uiDepth": 1
          },
          {
            "order": 26,
            "toolId": "instagram-reel-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 2
          },
          {
            "order": 27,
            "toolId": "blog-post-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 3
          },
          {
            "order": 28,
            "toolId": "redirect-url-url-decoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 7,
        "uiTitle": "Email node 8",
        "mode": "waterfall",
        "tools": [
          {
            "order": 29,
            "toolId": "dns-record-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 30,
            "toolId": "facebook-bio-blank-line-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 31,
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
            "uiDepth": 3
          },
          {
            "order": 32,
            "toolId": "blog-article-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 8,
        "uiTitle": "Email node 9",
        "mode": "waterfall",
        "tools": [
          {
            "order": 33,
            "toolId": "review-page-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 1
          },
          {
            "order": 34,
            "toolId": "html-snippet-url-decoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 2
          },
          {
            "order": 35,
            "toolId": "oauth-state-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 36,
            "toolId": "recipe-notes-find-and-replace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 9,
        "uiTitle": "Email node 10",
        "mode": "waterfall",
        "tools": [
          {
            "order": 37,
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
            "uiDepth": 1
          },
          {
            "order": 38,
            "toolId": "local-service-page-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 2
          },
          {
            "order": 39,
            "toolId": "landing-page-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 3
          },
          {
            "order": 40,
            "toolId": "cloudflare-rule-url-decoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 10,
        "uiTitle": "Email node 11",
        "mode": "waterfall",
        "tools": [
          {
            "order": 41,
            "toolId": "user-message-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 42,
            "toolId": "email-subject-slug-generator",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 43,
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
            "uiDepth": 3
          },
          {
            "order": 44,
            "toolId": "calculator-page-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 11,
        "uiTitle": "Email node 12",
        "mode": "waterfall",
        "tools": [
          {
            "order": 45,
            "toolId": "donation-campaign-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 1
          },
          {
            "order": 46,
            "toolId": "system-message-url-decoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 2
          },
          {
            "order": 47,
            "toolId": "facebook-bio-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 48,
            "toolId": "project-brief-title-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 12,
        "uiTitle": "Email node 13",
        "mode": "waterfall",
        "tools": [
          {
            "order": 49,
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
            "uiDepth": 1
          },
          {
            "order": 50,
            "toolId": "pinterest-pin-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 2
          },
          {
            "order": 51,
            "toolId": "about-page-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 3
          },
          {
            "order": 52,
            "toolId": "python-string-url-decoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 13,
        "uiTitle": "Email node 14",
        "mode": "waterfall",
        "tools": [
          {
            "order": 53,
            "toolId": "python-string-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 54,
            "toolId": "email-subject-blank-line-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 55,
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
            "uiDepth": 3
          },
          {
            "order": 56,
            "toolId": "contact-page-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 14,
        "uiTitle": "Email node 15",
        "mode": "waterfall",
        "tools": [
          {
            "order": 57,
            "toolId": "product-listing-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 1
          },
          {
            "order": 58,
            "toolId": "git-branch-url-decoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 2
          },
          {
            "order": 59,
            "toolId": "youtube-description-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 60,
            "toolId": "project-brief-find-and-replace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 15,
        "uiTitle": "Email node 16",
        "mode": "waterfall",
        "tools": [
          {
            "order": 61,
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
            "uiDepth": 1
          },
          {
            "order": 62,
            "toolId": "policy-page-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 2
          },
          {
            "order": 63,
            "toolId": "homepage-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 3
          },
          {
            "order": 64,
            "toolId": "callback-url-url-decoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 4
          }
        ]
      }
    ]
  },
  {
    "id": "project-it-helpdesk-data-decision-report-111",
    "title": "IT helpdesk data cleanup decision report workflow",
    "field": "IT helpdesk",
    "businessFunction": "data cleanup",
    "groupId": "group-data-decision-report",
    "outcome": "Use compatible data cleanup tools to produce a decision-ready report with supporting calculations for IT helpdesk.",
    "prompt": "Build a 16-panel workflow for IT helpdesk: produce a decision-ready report with supporting calculations using data cleanup tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste IT helpdesk notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible data cleanup chain.",
    "complexity": "standard-16",
    "layout": "4x4",
    "executionMode": "waterfall",
    "toolCount": 16,
    "panelCount": 16,
    "maxNestedUiDepth": 1,
    "tags": [
      "it-helpdesk",
      "data",
      "decision-report",
      "standard-16"
    ],
    "compatibilitySummary": "16 tools arranged as 16 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Data cleanup node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "press-release-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "Data cleanup node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 2,
            "toolId": "domain-list-blank-line-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 2,
        "uiTitle": "Data cleanup node 3",
        "mode": "waterfall",
        "tools": [
          {
            "order": 3,
            "toolId": "tool-url-url-decoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 3,
        "uiTitle": "Data cleanup node 4",
        "mode": "waterfall",
        "tools": [
          {
            "order": 4,
            "toolId": "shipping-note-uuid-generator",
            "role": "create unique IDs for assets, records, or tasks",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 4,
        "uiTitle": "Data cleanup node 5",
        "mode": "waterfall",
        "tools": [
          {
            "order": 5,
            "toolId": "commit-message-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 5,
        "uiTitle": "Data cleanup node 6",
        "mode": "waterfall",
        "tools": [
          {
            "order": 6,
            "toolId": "javascript-string-json-formatter",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 6,
        "uiTitle": "Data cleanup node 7",
        "mode": "waterfall",
        "tools": [
          {
            "order": 7,
            "toolId": "worker-route-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 7,
        "uiTitle": "Data cleanup node 8",
        "mode": "waterfall",
        "tools": [
          {
            "order": 8,
            "toolId": "press-release-lowercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 8,
        "uiTitle": "Data cleanup node 9",
        "mode": "waterfall",
        "tools": [
          {
            "order": 9,
            "toolId": "query-string-url-decoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 9,
        "uiTitle": "Data cleanup node 10",
        "mode": "waterfall",
        "tools": [
          {
            "order": 10,
            "toolId": "folder-name-uuid-generator",
            "role": "create unique IDs for assets, records, or tasks",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 10,
        "uiTitle": "Data cleanup node 11",
        "mode": "waterfall",
        "tools": [
          {
            "order": 11,
            "toolId": "search-query-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 11,
        "uiTitle": "Data cleanup node 12",
        "mode": "waterfall",
        "tools": [
          {
            "order": 12,
            "toolId": "schema-markup-json-key-extractor",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 12,
        "uiTitle": "Data cleanup node 13",
        "mode": "waterfall",
        "tools": [
          {
            "order": 13,
            "toolId": "git-branch-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 13,
        "uiTitle": "Data cleanup node 14",
        "mode": "waterfall",
        "tools": [
          {
            "order": 14,
            "toolId": "customer-reply-slug-generator",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 14,
        "uiTitle": "Data cleanup node 15",
        "mode": "waterfall",
        "tools": [
          {
            "order": 15,
            "toolId": "header-value-url-decoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 15,
        "uiTitle": "Data cleanup node 16",
        "mode": "waterfall",
        "tools": [
          {
            "order": 16,
            "toolId": "raffle-page-uuid-generator",
            "role": "create unique IDs for assets, records, or tasks",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-it-helpdesk-reporting-decision-report-112",
    "title": "IT helpdesk reporting decision report workflow",
    "field": "IT helpdesk",
    "businessFunction": "reporting",
    "groupId": "group-reporting-decision-report",
    "outcome": "Use compatible reporting tools to produce a decision-ready report with supporting calculations for IT helpdesk.",
    "prompt": "Build a 8-panel workflow for IT helpdesk: produce a decision-ready report with supporting calculations using reporting tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste IT helpdesk notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible reporting chain.",
    "complexity": "mid-8",
    "layout": "4x2",
    "executionMode": "hybrid",
    "toolCount": 8,
    "panelCount": 8,
    "maxNestedUiDepth": 1,
    "tags": [
      "it-helpdesk",
      "reporting",
      "decision-report",
      "mid-8"
    ],
    "compatibilitySummary": "8 tools arranged as 8 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Reporting node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "garden-journal-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "Reporting node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 2,
            "toolId": "instagram-caption-blank-line-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 2,
        "uiTitle": "Reporting node 3",
        "mode": "waterfall",
        "tools": [
          {
            "order": 3,
            "toolId": "brand-name-add-days-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 3,
        "uiTitle": "Reporting node 4",
        "mode": "waterfall",
        "tools": [
          {
            "order": 4,
            "toolId": "facebook-bio-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 4,
        "uiTitle": "Reporting node 5",
        "mode": "waterfall",
        "tools": [
          {
            "order": 5,
            "toolId": "webhook-body-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 5,
        "uiTitle": "Reporting node 6",
        "mode": "waterfall",
        "tools": [
          {
            "order": 6,
            "toolId": "youtube-description-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 6,
        "uiTitle": "Reporting node 7",
        "mode": "waterfall",
        "tools": [
          {
            "order": 7,
            "toolId": "code-comment-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 7,
        "uiTitle": "Reporting node 8",
        "mode": "waterfall",
        "tools": [
          {
            "order": 8,
            "toolId": "support-ticket-find-and-replace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-it-helpdesk-compliance-decision-report-113",
    "title": "IT helpdesk compliance decision report workflow",
    "field": "IT helpdesk",
    "businessFunction": "compliance",
    "groupId": "group-compliance-decision-report",
    "outcome": "Use compatible compliance tools to produce a decision-ready report with supporting calculations for IT helpdesk.",
    "prompt": "Build a micro workflow for IT helpdesk: produce a decision-ready report with supporting calculations using compliance tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste IT helpdesk notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible compliance chain.",
    "complexity": "micro-2-4",
    "layout": "1x1",
    "executionMode": "compact-waterfall",
    "toolCount": 3,
    "panelCount": 1,
    "maxNestedUiDepth": 3,
    "tags": [
      "it-helpdesk",
      "compliance",
      "decision-report",
      "micro-2-4"
    ],
    "compatibilitySummary": "3 tools arranged as 1 panel UI; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Compliance node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "sitemap-url-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "environment-value-json-minifier",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 2
          },
          {
            "order": 3,
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
            "uiDepth": 3
          }
        ]
      }
    ]
  },
  {
    "id": "project-it-helpdesk-scheduling-decision-report-114",
    "title": "IT helpdesk scheduling decision report workflow",
    "field": "IT helpdesk",
    "businessFunction": "scheduling",
    "groupId": "group-scheduling-decision-report",
    "outcome": "Use compatible scheduling tools to produce a decision-ready report with supporting calculations for IT helpdesk.",
    "prompt": "Build a 16-panel workflow for IT helpdesk: produce a decision-ready report with supporting calculations using scheduling tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste IT helpdesk notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible scheduling chain.",
    "complexity": "standard-16",
    "layout": "4x4",
    "executionMode": "waterfall",
    "toolCount": 16,
    "panelCount": 16,
    "maxNestedUiDepth": 1,
    "tags": [
      "it-helpdesk",
      "scheduling",
      "decision-report",
      "standard-16"
    ],
    "compatibilitySummary": "16 tools arranged as 16 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Scheduling node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "git-branch-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "Scheduling node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 2,
            "toolId": "domain-list-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 2,
        "uiTitle": "Scheduling node 3",
        "mode": "waterfall",
        "tools": [
          {
            "order": 3,
            "toolId": "hashtag-set-add-days-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 3,
        "uiTitle": "Scheduling node 4",
        "mode": "waterfall",
        "tools": [
          {
            "order": 4,
            "toolId": "brand-name-date-to-unix-timestamp",
            "role": "convert or stamp time values",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 4,
        "uiTitle": "Scheduling node 5",
        "mode": "waterfall",
        "tools": [
          {
            "order": 5,
            "toolId": "csv-cell-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 5,
        "uiTitle": "Scheduling node 6",
        "mode": "waterfall",
        "tools": [
          {
            "order": 6,
            "toolId": "customer-reply-text-reverser",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 6,
        "uiTitle": "Scheduling node 7",
        "mode": "waterfall",
        "tools": [
          {
            "order": 7,
            "toolId": "xml-node-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 7,
        "uiTitle": "Scheduling node 8",
        "mode": "waterfall",
        "tools": [
          {
            "order": 8,
            "toolId": "recipe-notes-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 8,
        "uiTitle": "Scheduling node 9",
        "mode": "waterfall",
        "tools": [
          {
            "order": 9,
            "toolId": "file-name-add-years-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 9,
        "uiTitle": "Scheduling node 10",
        "mode": "waterfall",
        "tools": [
          {
            "order": 10,
            "toolId": "blog-post-date-to-unix-timestamp",
            "role": "convert or stamp time values",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 10,
        "uiTitle": "Scheduling node 11",
        "mode": "waterfall",
        "tools": [
          {
            "order": 11,
            "toolId": "meta-description-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 11,
        "uiTitle": "Scheduling node 12",
        "mode": "waterfall",
        "tools": [
          {
            "order": 12,
            "toolId": "podcast-notes-uppercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 12,
        "uiTitle": "Scheduling node 13",
        "mode": "waterfall",
        "tools": [
          {
            "order": 13,
            "toolId": "prompt-text-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 13,
        "uiTitle": "Scheduling node 14",
        "mode": "waterfall",
        "tools": [
          {
            "order": 14,
            "toolId": "invoice-memo-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 14,
        "uiTitle": "Scheduling node 15",
        "mode": "waterfall",
        "tools": [
          {
            "order": 15,
            "toolId": "email-subject-add-years-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 15,
        "uiTitle": "Scheduling node 16",
        "mode": "waterfall",
        "tools": [
          {
            "order": 16,
            "toolId": "ad-copy-date-to-unix-timestamp",
            "role": "convert or stamp time values",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-it-helpdesk-product-decision-report-115",
    "title": "IT helpdesk product decision report workflow",
    "field": "IT helpdesk",
    "businessFunction": "product",
    "groupId": "group-product-decision-report",
    "outcome": "Use compatible product tools to produce a decision-ready report with supporting calculations for IT helpdesk.",
    "prompt": "Build a 32-tool nested workbench for IT helpdesk: produce a decision-ready report with supporting calculations using product tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste IT helpdesk notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible product chain.",
    "complexity": "advanced-32",
    "layout": "4x4",
    "executionMode": "hybrid-waterfall",
    "toolCount": 32,
    "panelCount": 16,
    "maxNestedUiDepth": 2,
    "tags": [
      "it-helpdesk",
      "product",
      "decision-report",
      "advanced-32"
    ],
    "compatibilitySummary": "32 tools arranged as 16 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Product node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "ad-copy-blank-line-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "base-url-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "Product node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 3,
            "toolId": "css-class-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 4,
            "toolId": "garden-journal-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 2,
        "uiTitle": "Product node 3",
        "mode": "waterfall",
        "tools": [
          {
            "order": 5,
            "toolId": "invoice-memo-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 1
          },
          {
            "order": 6,
            "toolId": "callback-url-json-minifier",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 3,
        "uiTitle": "Product node 4",
        "mode": "waterfall",
        "tools": [
          {
            "order": 7,
            "toolId": "keyword-list-lowercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 8,
            "toolId": "redirect-url-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 4,
        "uiTitle": "Product node 5",
        "mode": "waterfall",
        "tools": [
          {
            "order": 9,
            "toolId": "markdown-link-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 10,
            "toolId": "code-comment-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 5,
        "uiTitle": "Product node 6",
        "mode": "waterfall",
        "tools": [
          {
            "order": 11,
            "toolId": "ebook-chapter-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 1
          },
          {
            "order": 12,
            "toolId": "oauth-state-json-key-extractor",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 6,
        "uiTitle": "Product node 7",
        "mode": "waterfall",
        "tools": [
          {
            "order": 13,
            "toolId": "youtube-description-slug-generator",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 14,
            "toolId": "html-snippet-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 7,
        "uiTitle": "Product node 8",
        "mode": "waterfall",
        "tools": [
          {
            "order": 15,
            "toolId": "system-message-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 16,
            "toolId": "recipe-notes-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 8,
        "uiTitle": "Product node 9",
        "mode": "waterfall",
        "tools": [
          {
            "order": 17,
            "toolId": "video-script-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 1
          },
          {
            "order": 18,
            "toolId": "webhook-body-json-minifier",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 9,
        "uiTitle": "Product node 10",
        "mode": "waterfall",
        "tools": [
          {
            "order": 19,
            "toolId": "json-snippet-trim-whitespace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 20,
            "toolId": "youtube-description-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 10,
        "uiTitle": "Product node 11",
        "mode": "waterfall",
        "tools": [
          {
            "order": 21,
            "toolId": "email-subject-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 22,
            "toolId": "keyword-list-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 11,
        "uiTitle": "Product node 12",
        "mode": "waterfall",
        "tools": [
          {
            "order": 23,
            "toolId": "newsletter-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 1
          },
          {
            "order": 24,
            "toolId": "json-config-json-key-extractor",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 12,
        "uiTitle": "Product node 13",
        "mode": "waterfall",
        "tools": [
          {
            "order": 25,
            "toolId": "youtube-description-blank-line-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 26,
            "toolId": "query-string-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 13,
        "uiTitle": "Product node 14",
        "mode": "waterfall",
        "tools": [
          {
            "order": 27,
            "toolId": "press-release-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 28,
            "toolId": "facebook-bio-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 14,
        "uiTitle": "Product node 15",
        "mode": "waterfall",
        "tools": [
          {
            "order": 29,
            "toolId": "hashtag-set-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 1
          },
          {
            "order": 30,
            "toolId": "sitemap-url-json-minifier",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 15,
        "uiTitle": "Product node 16",
        "mode": "waterfall",
        "tools": [
          {
            "order": 31,
            "toolId": "json-snippet-lowercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 32,
            "toolId": "git-branch-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 2
          }
        ]
      }
    ]
  },
  {
    "id": "project-it-helpdesk-ux-decision-report-116",
    "title": "IT helpdesk UX/UI decision report workflow",
    "field": "IT helpdesk",
    "businessFunction": "UX/UI",
    "groupId": "group-ux-decision-report",
    "outcome": "Use compatible UX/UI tools to produce a decision-ready report with supporting calculations for IT helpdesk.",
    "prompt": "Build a 8-panel workflow for IT helpdesk: produce a decision-ready report with supporting calculations using UX/UI tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste IT helpdesk notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible UX/UI chain.",
    "complexity": "mid-8",
    "layout": "4x2",
    "executionMode": "hybrid",
    "toolCount": 8,
    "panelCount": 8,
    "maxNestedUiDepth": 1,
    "tags": [
      "it-helpdesk",
      "ux",
      "decision-report",
      "mid-8"
    ],
    "compatibilitySummary": "8 tools arranged as 8 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "UX/UI node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "email-subject-color-contrast-checker",
            "role": "check readability and accessibility contrast",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "UX/UI node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 2,
            "toolId": "facebook-bio-title-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 2,
        "uiTitle": "UX/UI node 3",
        "mode": "waterfall",
        "tools": [
          {
            "order": 3,
            "toolId": "environment-value-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 3,
        "uiTitle": "UX/UI node 4",
        "mode": "waterfall",
        "tools": [
          {
            "order": 4,
            "toolId": "instagram-reel-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 4,
        "uiTitle": "UX/UI node 5",
        "mode": "waterfall",
        "tools": [
          {
            "order": 5,
            "toolId": "policy-page-keyword-density-checker",
            "role": "extract keyword usage from project text",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 5,
        "uiTitle": "UX/UI node 6",
        "mode": "waterfall",
        "tools": [
          {
            "order": 6,
            "toolId": "ad-copy-hex-to-rgb-converter",
            "role": "convert brand colors and palette values",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 6,
        "uiTitle": "UX/UI node 7",
        "mode": "waterfall",
        "tools": [
          {
            "order": 7,
            "toolId": "plant-care-notes-color-contrast-checker",
            "role": "check readability and accessibility contrast",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 7,
        "uiTitle": "UX/UI node 8",
        "mode": "waterfall",
        "tools": [
          {
            "order": 8,
            "toolId": "recipe-notes-uppercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-it-helpdesk-web-launch-decision-report-117",
    "title": "IT helpdesk web launch decision report workflow",
    "field": "IT helpdesk",
    "businessFunction": "web launch",
    "groupId": "group-web-launch-decision-report",
    "outcome": "Use compatible web launch tools to produce a decision-ready report with supporting calculations for IT helpdesk.",
    "prompt": "Build a 16-panel workflow for IT helpdesk: produce a decision-ready report with supporting calculations using web launch tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste IT helpdesk notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible web launch chain.",
    "complexity": "standard-16",
    "layout": "4x4",
    "executionMode": "waterfall",
    "toolCount": 16,
    "panelCount": 16,
    "maxNestedUiDepth": 1,
    "tags": [
      "it-helpdesk",
      "web-launch",
      "decision-report",
      "standard-16"
    ],
    "compatibilitySummary": "16 tools arranged as 16 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Web launch node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "local-service-page-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "Web launch node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 2,
            "toolId": "landing-page-keyword-density-checker",
            "role": "extract keyword usage from project text",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 2,
        "uiTitle": "Web launch node 3",
        "mode": "waterfall",
        "tools": [
          {
            "order": 3,
            "toolId": "plant-profile-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 3,
        "uiTitle": "Web launch node 4",
        "mode": "waterfall",
        "tools": [
          {
            "order": 4,
            "toolId": "jwt-payload-json-minifier",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 4,
        "uiTitle": "Web launch node 5",
        "mode": "waterfall",
        "tools": [
          {
            "order": 5,
            "toolId": "json-snippet-hex-to-rgb-converter",
            "role": "convert brand colors and palette values",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 5,
        "uiTitle": "Web launch node 6",
        "mode": "waterfall",
        "tools": [
          {
            "order": 6,
            "toolId": "brand-name-color-contrast-checker",
            "role": "check readability and accessibility contrast",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 6,
        "uiTitle": "Web launch node 7",
        "mode": "waterfall",
        "tools": [
          {
            "order": 7,
            "toolId": "calculator-page-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 7,
        "uiTitle": "Web launch node 8",
        "mode": "waterfall",
        "tools": [
          {
            "order": 8,
            "toolId": "donation-campaign-keyword-density-checker",
            "role": "extract keyword usage from project text",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 8,
        "uiTitle": "Web launch node 9",
        "mode": "waterfall",
        "tools": [
          {
            "order": 9,
            "toolId": "garden-guide-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 9,
        "uiTitle": "Web launch node 10",
        "mode": "waterfall",
        "tools": [
          {
            "order": 10,
            "toolId": "webhook-body-json-formatter",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 10,
        "uiTitle": "Web launch node 11",
        "mode": "waterfall",
        "tools": [
          {
            "order": 11,
            "toolId": "code-comment-hex-to-rgb-converter",
            "role": "convert brand colors and palette values",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 11,
        "uiTitle": "Web launch node 12",
        "mode": "waterfall",
        "tools": [
          {
            "order": 12,
            "toolId": "keyword-list-color-contrast-checker",
            "role": "check readability and accessibility contrast",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 12,
        "uiTitle": "Web launch node 13",
        "mode": "waterfall",
        "tools": [
          {
            "order": 13,
            "toolId": "pinterest-pin-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 13,
        "uiTitle": "Web launch node 14",
        "mode": "waterfall",
        "tools": [
          {
            "order": 14,
            "toolId": "about-page-keyword-density-checker",
            "role": "extract keyword usage from project text",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 14,
        "uiTitle": "Web launch node 15",
        "mode": "waterfall",
        "tools": [
          {
            "order": 15,
            "toolId": "calculator-page-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 15,
        "uiTitle": "Web launch node 16",
        "mode": "waterfall",
        "tools": [
          {
            "order": 16,
            "toolId": "javascript-string-json-minifier",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-it-helpdesk-developer-decision-report-118",
    "title": "IT helpdesk developer decision report workflow",
    "field": "IT helpdesk",
    "businessFunction": "developer",
    "groupId": "group-developer-decision-report",
    "outcome": "Use compatible developer tools to produce a decision-ready report with supporting calculations for IT helpdesk.",
    "prompt": "Build a 8-panel workflow for IT helpdesk: produce a decision-ready report with supporting calculations using developer tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste IT helpdesk notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible developer chain.",
    "complexity": "mid-8",
    "layout": "2x4",
    "executionMode": "hybrid",
    "toolCount": 8,
    "panelCount": 8,
    "maxNestedUiDepth": 1,
    "tags": [
      "it-helpdesk",
      "developer",
      "decision-report",
      "mid-8"
    ],
    "compatibilitySummary": "8 tools arranged as 8 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Developer node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "ebook-chapter-password-generator",
            "role": "create secure passwords for the project",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "Developer node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 2,
            "toolId": "image-alt-text-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 2,
        "uiTitle": "Developer node 3",
        "mode": "waterfall",
        "tools": [
          {
            "order": 3,
            "toolId": "jwt-payload-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 3,
        "uiTitle": "Developer node 4",
        "mode": "waterfall",
        "tools": [
          {
            "order": 4,
            "toolId": "json-config-json-minifier",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 4,
        "uiTitle": "Developer node 5",
        "mode": "waterfall",
        "tools": [
          {
            "order": 5,
            "toolId": "image-alt-text-base64-encoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 5,
        "uiTitle": "Developer node 6",
        "mode": "waterfall",
        "tools": [
          {
            "order": 6,
            "toolId": "support-ticket-uuid-generator",
            "role": "create unique IDs for assets, records, or tasks",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 6,
        "uiTitle": "Developer node 7",
        "mode": "waterfall",
        "tools": [
          {
            "order": 7,
            "toolId": "press-release-password-generator",
            "role": "create secure passwords for the project",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 7,
        "uiTitle": "Developer node 8",
        "mode": "waterfall",
        "tools": [
          {
            "order": 8,
            "toolId": "api-token-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-it-helpdesk-security-decision-report-119",
    "title": "IT helpdesk security decision report workflow",
    "field": "IT helpdesk",
    "businessFunction": "security",
    "groupId": "group-security-decision-report",
    "outcome": "Use compatible security tools to produce a decision-ready report with supporting calculations for IT helpdesk.",
    "prompt": "Build a micro workflow for IT helpdesk: produce a decision-ready report with supporting calculations using security tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste IT helpdesk notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible security chain.",
    "complexity": "micro-2-4",
    "layout": "2x1",
    "executionMode": "compact-waterfall",
    "toolCount": 4,
    "panelCount": 2,
    "maxNestedUiDepth": 2,
    "tags": [
      "it-helpdesk",
      "security",
      "decision-report",
      "micro-2-4"
    ],
    "compatibilitySummary": "4 tools arranged as 2 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Security node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "shipping-note-title-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "youtube-description-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "Security node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 3,
            "toolId": "podcast-notes-password-generator",
            "role": "create secure passwords for the project",
            "uiDepth": 1
          },
          {
            "order": 4,
            "toolId": "instagram-caption-uuid-generator",
            "role": "create unique IDs for assets, records, or tasks",
            "uiDepth": 2
          }
        ]
      }
    ]
  },
  {
    "id": "project-it-helpdesk-training-decision-report-120",
    "title": "IT helpdesk training decision report workflow",
    "field": "IT helpdesk",
    "businessFunction": "training",
    "groupId": "group-training-decision-report",
    "outcome": "Use compatible training tools to produce a decision-ready report with supporting calculations for IT helpdesk.",
    "prompt": "Build a 64-tool nested waterfall for IT helpdesk: produce a decision-ready report with supporting calculations using training tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste IT helpdesk notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible training chain.",
    "complexity": "nested-64",
    "layout": "4x4",
    "executionMode": "nested-waterfall",
    "toolCount": 64,
    "panelCount": 16,
    "maxNestedUiDepth": 4,
    "tags": [
      "it-helpdesk",
      "training",
      "decision-report",
      "nested-64"
    ],
    "compatibilitySummary": "64 tools arranged as 16 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Training node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "brand-name-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "customer-reply-lowercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 3,
            "toolId": "recipe-notes-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 4,
            "toolId": "newsletter-add-years-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "Training node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 5,
            "toolId": "file-name-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          },
          {
            "order": 6,
            "toolId": "html-snippet-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 2
          },
          {
            "order": 7,
            "toolId": "product-listing-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 8,
            "toolId": "podcast-notes-text-reverser",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 2,
        "uiTitle": "Training node 3",
        "mode": "waterfall",
        "tools": [
          {
            "order": 9,
            "toolId": "base-url-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 10,
            "toolId": "markdown-doc-add-years-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 2
          },
          {
            "order": 11,
            "toolId": "youtube-description-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 3
          },
          {
            "order": 12,
            "toolId": "youtube-description-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 3,
        "uiTitle": "Training node 4",
        "mode": "waterfall",
        "tools": [
          {
            "order": 13,
            "toolId": "json-snippet-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 14,
            "toolId": "csv-export-trim-whitespace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 15,
            "toolId": "invoice-memo-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 16,
            "toolId": "keyword-list-add-years-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 4,
        "uiTitle": "Training node 5",
        "mode": "waterfall",
        "tools": [
          {
            "order": 17,
            "toolId": "landing-page-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          },
          {
            "order": 18,
            "toolId": "query-string-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 2
          },
          {
            "order": 19,
            "toolId": "email-subject-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 20,
            "toolId": "podcast-notes-extra-space-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 5,
        "uiTitle": "Training node 6",
        "mode": "waterfall",
        "tools": [
          {
            "order": 21,
            "toolId": "search-query-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 22,
            "toolId": "invoice-memo-add-years-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 2
          },
          {
            "order": 23,
            "toolId": "facebook-bio-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 3
          },
          {
            "order": 24,
            "toolId": "git-branch-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 6,
        "uiTitle": "Training node 7",
        "mode": "waterfall",
        "tools": [
          {
            "order": 25,
            "toolId": "youtube-description-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 26,
            "toolId": "csv-export-lowercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 27,
            "toolId": "cookie-value-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 28,
            "toolId": "html-block-add-years-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 7,
        "uiTitle": "Training node 8",
        "mode": "waterfall",
        "tools": [
          {
            "order": 29,
            "toolId": "url-slug-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          },
          {
            "order": 30,
            "toolId": "xml-node-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 2
          },
          {
            "order": 31,
            "toolId": "plant-care-notes-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 32,
            "toolId": "plant-care-notes-text-reverser",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 8,
        "uiTitle": "Training node 9",
        "mode": "waterfall",
        "tools": [
          {
            "order": 33,
            "toolId": "log-line-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 34,
            "toolId": "garden-journal-add-years-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 2
          },
          {
            "order": 35,
            "toolId": "keyword-list-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 3
          },
          {
            "order": 36,
            "toolId": "prompt-text-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 9,
        "uiTitle": "Training node 10",
        "mode": "waterfall",
        "tools": [
          {
            "order": 37,
            "toolId": "html-block-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 38,
            "toolId": "cover-letter-trim-whitespace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 39,
            "toolId": "svg-snippet-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 40,
            "toolId": "file-name-add-weeks-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 10,
        "uiTitle": "Training node 11",
        "mode": "waterfall",
        "tools": [
          {
            "order": 41,
            "toolId": "email-subject-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          },
          {
            "order": 42,
            "toolId": "form-payload-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 2
          },
          {
            "order": 43,
            "toolId": "customer-reply-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 44,
            "toolId": "plant-care-notes-extra-space-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 11,
        "uiTitle": "Training node 12",
        "mode": "waterfall",
        "tools": [
          {
            "order": 45,
            "toolId": "email-body-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 46,
            "toolId": "email-subject-add-weeks-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 2
          },
          {
            "order": 47,
            "toolId": "seo-title-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 3
          },
          {
            "order": 48,
            "toolId": "webhook-body-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 12,
        "uiTitle": "Training node 13",
        "mode": "waterfall",
        "tools": [
          {
            "order": 49,
            "toolId": "seo-title-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 50,
            "toolId": "cover-letter-lowercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 51,
            "toolId": "plant-care-notes-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 52,
            "toolId": "customer-reply-add-weeks-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 13,
        "uiTitle": "Training node 14",
        "mode": "waterfall",
        "tools": [
          {
            "order": 53,
            "toolId": "json-snippet-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          },
          {
            "order": 54,
            "toolId": "press-release-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 2
          },
          {
            "order": 55,
            "toolId": "markdown-doc-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 56,
            "toolId": "order-note-text-reverser",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 14,
        "uiTitle": "Training node 15",
        "mode": "waterfall",
        "tools": [
          {
            "order": 57,
            "toolId": "webhook-body-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 58,
            "toolId": "code-comment-add-weeks-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 2
          },
          {
            "order": 59,
            "toolId": "domain-list-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 3
          },
          {
            "order": 60,
            "toolId": "error-message-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 15,
        "uiTitle": "Training node 16",
        "mode": "waterfall",
        "tools": [
          {
            "order": 61,
            "toolId": "folder-name-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 62,
            "toolId": "coupon-text-trim-whitespace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 63,
            "toolId": "garden-journal-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 64,
            "toolId": "blog-post-add-weeks-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 4
          }
        ]
      }
    ]
  },
  {
    "id": "project-it-helpdesk-inventory-decision-report-121",
    "title": "IT helpdesk inventory decision report workflow",
    "field": "IT helpdesk",
    "businessFunction": "inventory",
    "groupId": "group-inventory-decision-report",
    "outcome": "Use compatible inventory tools to produce a decision-ready report with supporting calculations for IT helpdesk.",
    "prompt": "Build a micro workflow for IT helpdesk: produce a decision-ready report with supporting calculations using inventory tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste IT helpdesk notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible inventory chain.",
    "complexity": "micro-2-4",
    "layout": "1x1",
    "executionMode": "compact-waterfall",
    "toolCount": 3,
    "panelCount": 1,
    "maxNestedUiDepth": 3,
    "tags": [
      "it-helpdesk",
      "inventory",
      "decision-report",
      "micro-2-4"
    ],
    "compatibilitySummary": "3 tools arranged as 1 panel UI; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Inventory node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "ip-allowlist-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "hashtag-set-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 2
          },
          {
            "order": 3,
            "toolId": "kilopascal-to-torr-converter",
            "role": "convert operational measurements",
            "uiDepth": 3
          }
        ]
      }
    ]
  },
  {
    "id": "project-it-helpdesk-pricing-decision-report-122",
    "title": "IT helpdesk pricing decision report workflow",
    "field": "IT helpdesk",
    "businessFunction": "pricing",
    "groupId": "group-pricing-decision-report",
    "outcome": "Use compatible pricing tools to produce a decision-ready report with supporting calculations for IT helpdesk.",
    "prompt": "Build a 8-panel workflow for IT helpdesk: produce a decision-ready report with supporting calculations using pricing tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste IT helpdesk notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible pricing chain.",
    "complexity": "mid-8",
    "layout": "2x4",
    "executionMode": "hybrid",
    "toolCount": 8,
    "panelCount": 8,
    "maxNestedUiDepth": 1,
    "tags": [
      "it-helpdesk",
      "pricing",
      "decision-report",
      "mid-8"
    ],
    "compatibilitySummary": "8 tools arranged as 8 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Pricing node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "invoice-memo-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "Pricing node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 2,
            "toolId": "shipping-invoice-total-calculator",
            "role": "calculate invoice totals from line-item assumptions",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 2,
        "uiTitle": "Pricing node 3",
        "mode": "waterfall",
        "tools": [
          {
            "order": 3,
            "toolId": "video-script-rectangle-area-calculator",
            "role": "run a lightweight business formula",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 3,
        "uiTitle": "Pricing node 4",
        "mode": "waterfall",
        "tools": [
          {
            "order": 4,
            "toolId": "compound-interest-calculator",
            "role": "model long-term growth or recurring gains",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 4,
        "uiTitle": "Pricing node 5",
        "mode": "waterfall",
        "tools": [
          {
            "order": 5,
            "toolId": "youtube-description-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 5,
        "uiTitle": "Pricing node 6",
        "mode": "waterfall",
        "tools": [
          {
            "order": 6,
            "toolId": "code-comment-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 6,
        "uiTitle": "Pricing node 7",
        "mode": "waterfall",
        "tools": [
          {
            "order": 7,
            "toolId": "ebook-chapter-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 7,
        "uiTitle": "Pricing node 8",
        "mode": "waterfall",
        "tools": [
          {
            "order": 8,
            "toolId": "sponsor-invoice-total-calculator",
            "role": "calculate invoice totals from line-item assumptions",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-it-helpdesk-outreach-decision-report-123",
    "title": "IT helpdesk outreach decision report workflow",
    "field": "IT helpdesk",
    "businessFunction": "outreach",
    "groupId": "group-outreach-decision-report",
    "outcome": "Use compatible outreach tools to produce a decision-ready report with supporting calculations for IT helpdesk.",
    "prompt": "Build a 16-panel workflow for IT helpdesk: produce a decision-ready report with supporting calculations using outreach tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste IT helpdesk notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible outreach chain.",
    "complexity": "standard-16",
    "layout": "4x4",
    "executionMode": "waterfall",
    "toolCount": 16,
    "panelCount": 16,
    "maxNestedUiDepth": 1,
    "tags": [
      "it-helpdesk",
      "outreach",
      "decision-report",
      "standard-16"
    ],
    "compatibilitySummary": "16 tools arranged as 16 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Outreach node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "policy-page-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "Outreach node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 2,
            "toolId": "redirect-url-html-unescaper",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 2,
        "uiTitle": "Outreach node 3",
        "mode": "waterfall",
        "tools": [
          {
            "order": 3,
            "toolId": "youtube-description-keyword-density-checker",
            "role": "extract keyword usage from project text",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 3,
        "uiTitle": "Outreach node 4",
        "mode": "waterfall",
        "tools": [
          {
            "order": 4,
            "toolId": "oauth-state-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 4,
        "uiTitle": "Outreach node 5",
        "mode": "waterfall",
        "tools": [
          {
            "order": 5,
            "toolId": "community-rule-find-and-replace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 5,
        "uiTitle": "Outreach node 6",
        "mode": "waterfall",
        "tools": [
          {
            "order": 6,
            "toolId": "youtube-video-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 6,
        "uiTitle": "Outreach node 7",
        "mode": "waterfall",
        "tools": [
          {
            "order": 7,
            "toolId": "google-result-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 7,
        "uiTitle": "Outreach node 8",
        "mode": "waterfall",
        "tools": [
          {
            "order": 8,
            "toolId": "html-snippet-html-unescaper",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 8,
        "uiTitle": "Outreach node 9",
        "mode": "waterfall",
        "tools": [
          {
            "order": 9,
            "toolId": "plant-profile-keyword-density-checker",
            "role": "extract keyword usage from project text",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 9,
        "uiTitle": "Outreach node 10",
        "mode": "waterfall",
        "tools": [
          {
            "order": 10,
            "toolId": "user-message-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 10,
        "uiTitle": "Outreach node 11",
        "mode": "waterfall",
        "tools": [
          {
            "order": 11,
            "toolId": "meta-description-slug-generator",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 11,
        "uiTitle": "Outreach node 12",
        "mode": "waterfall",
        "tools": [
          {
            "order": 12,
            "toolId": "image-tool-page-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 12,
        "uiTitle": "Outreach node 13",
        "mode": "waterfall",
        "tools": [
          {
            "order": 13,
            "toolId": "category-page-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 13,
        "uiTitle": "Outreach node 14",
        "mode": "waterfall",
        "tools": [
          {
            "order": 14,
            "toolId": "cloudflare-rule-html-unescaper",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 14,
        "uiTitle": "Outreach node 15",
        "mode": "waterfall",
        "tools": [
          {
            "order": 15,
            "toolId": "garden-guide-keyword-density-checker",
            "role": "extract keyword usage from project text",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 15,
        "uiTitle": "Outreach node 16",
        "mode": "waterfall",
        "tools": [
          {
            "order": 16,
            "toolId": "facebook-bio-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-it-helpdesk-research-decision-report-124",
    "title": "IT helpdesk research decision report workflow",
    "field": "IT helpdesk",
    "businessFunction": "research",
    "groupId": "group-research-decision-report",
    "outcome": "Use compatible research tools to produce a decision-ready report with supporting calculations for IT helpdesk.",
    "prompt": "Build a 8-panel workflow for IT helpdesk: produce a decision-ready report with supporting calculations using research tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste IT helpdesk notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible research chain.",
    "complexity": "mid-8",
    "layout": "4x2",
    "executionMode": "hybrid",
    "toolCount": 8,
    "panelCount": 8,
    "maxNestedUiDepth": 1,
    "tags": [
      "it-helpdesk",
      "research",
      "decision-report",
      "mid-8"
    ],
    "compatibilitySummary": "8 tools arranged as 8 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Research node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "response-text-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "Research node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 2,
            "toolId": "python-string-json-key-extractor",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 2,
        "uiTitle": "Research node 3",
        "mode": "waterfall",
        "tools": [
          {
            "order": 3,
            "toolId": "cover-letter-title-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 3,
        "uiTitle": "Research node 4",
        "mode": "waterfall",
        "tools": [
          {
            "order": 4,
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 4,
        "uiTitle": "Research node 5",
        "mode": "waterfall",
        "tools": [
          {
            "order": 5,
            "toolId": "garden-guide-keyword-density-checker",
            "role": "extract keyword usage from project text",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 5,
        "uiTitle": "Research node 6",
        "mode": "waterfall",
        "tools": [
          {
            "order": 6,
            "toolId": "secret-placeholder-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 6,
        "uiTitle": "Research node 7",
        "mode": "waterfall",
        "tools": [
          {
            "order": 7,
            "toolId": "instagram-caption-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 7,
        "uiTitle": "Research node 8",
        "mode": "waterfall",
        "tools": [
          {
            "order": 8,
            "toolId": "api-token-json-minifier",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-it-helpdesk-project-management-decision-report-125",
    "title": "IT helpdesk project management decision report workflow",
    "field": "IT helpdesk",
    "businessFunction": "project management",
    "groupId": "group-project-management-decision-report",
    "outcome": "Use compatible project management tools to produce a decision-ready report with supporting calculations for IT helpdesk.",
    "prompt": "Build a 32-tool nested workbench for IT helpdesk: produce a decision-ready report with supporting calculations using project management tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste IT helpdesk notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible project management chain.",
    "complexity": "advanced-32",
    "layout": "4x4",
    "executionMode": "hybrid-waterfall",
    "toolCount": 32,
    "panelCount": 16,
    "maxNestedUiDepth": 2,
    "tags": [
      "it-helpdesk",
      "project-management",
      "decision-report",
      "advanced-32"
    ],
    "compatibilitySummary": "32 tools arranged as 16 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Project management node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "customer-reply-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "email-subject-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "Project management node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 3,
            "toolId": "plant-care-notes-add-weeks-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          },
          {
            "order": 4,
            "toolId": "url-slug-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 2,
        "uiTitle": "Project management node 3",
        "mode": "waterfall",
        "tools": [
          {
            "order": 5,
            "toolId": "markdown-doc-extra-space-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 6,
            "toolId": "tool-url-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 3,
        "uiTitle": "Project management node 4",
        "mode": "waterfall",
        "tools": [
          {
            "order": 7,
            "toolId": "sql-snippet-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 8,
            "toolId": "youtube-description-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 4,
        "uiTitle": "Project management node 5",
        "mode": "waterfall",
        "tools": [
          {
            "order": 9,
            "toolId": "meta-description-add-weeks-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          },
          {
            "order": 10,
            "toolId": "keyword-list-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 5,
        "uiTitle": "Project management node 6",
        "mode": "waterfall",
        "tools": [
          {
            "order": 11,
            "toolId": "blog-post-lowercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 12,
            "toolId": "environment-value-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 6,
        "uiTitle": "Project management node 7",
        "mode": "waterfall",
        "tools": [
          {
            "order": 13,
            "toolId": "log-line-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 14,
            "toolId": "plant-care-notes-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 7,
        "uiTitle": "Project management node 8",
        "mode": "waterfall",
        "tools": [
          {
            "order": 15,
            "toolId": "landing-page-add-weeks-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          },
          {
            "order": 16,
            "toolId": "email-subject-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 8,
        "uiTitle": "Project management node 9",
        "mode": "waterfall",
        "tools": [
          {
            "order": 17,
            "toolId": "landing-page-text-reverser",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 18,
            "toolId": "product-listing-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 9,
        "uiTitle": "Project management node 10",
        "mode": "waterfall",
        "tools": [
          {
            "order": 19,
            "toolId": "css-class-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 20,
            "toolId": "html-block-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 10,
        "uiTitle": "Project management node 11",
        "mode": "waterfall",
        "tools": [
          {
            "order": 21,
            "toolId": "json-snippet-add-weeks-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          },
          {
            "order": 22,
            "toolId": "seo-title-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 11,
        "uiTitle": "Project management node 12",
        "mode": "waterfall",
        "tools": [
          {
            "order": 23,
            "toolId": "ad-copy-trim-whitespace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 24,
            "toolId": "xml-node-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 12,
        "uiTitle": "Project management node 13",
        "mode": "waterfall",
        "tools": [
          {
            "order": 25,
            "toolId": "seo-title-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 26,
            "toolId": "customer-reply-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 13,
        "uiTitle": "Project management node 14",
        "mode": "waterfall",
        "tools": [
          {
            "order": 27,
            "toolId": "instagram-caption-add-weeks-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          },
          {
            "order": 28,
            "toolId": "json-snippet-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 14,
        "uiTitle": "Project management node 15",
        "mode": "waterfall",
        "tools": [
          {
            "order": 29,
            "toolId": "landing-page-extra-space-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 30,
            "toolId": "header-value-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 15,
        "uiTitle": "Project management node 16",
        "mode": "waterfall",
        "tools": [
          {
            "order": 31,
            "toolId": "jwt-payload-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 32,
            "toolId": "seo-title-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 2
          }
        ]
      }
    ]
  },
  {
    "id": "project-hr-recruiting-marketing-intake-to-output-001",
    "title": "HR recruiting marketing intake-to-output workflow",
    "field": "HR recruiting",
    "businessFunction": "marketing",
    "groupId": "group-marketing-intake-to-output",
    "outcome": "Use compatible marketing tools to turn raw input into a ready-to-use output for HR recruiting.",
    "prompt": "Build a 16-panel workflow for HR recruiting: turn raw input into a ready-to-use output using marketing tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste HR recruiting notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible marketing chain.",
    "complexity": "standard-16",
    "layout": "4x4",
    "executionMode": "waterfall",
    "toolCount": 16,
    "panelCount": 16,
    "maxNestedUiDepth": 1,
    "tags": [
      "hr-recruiting",
      "marketing",
      "intake-to-output",
      "standard-16"
    ],
    "compatibilitySummary": "16 tools arranged as 16 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Marketing node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "converter-page-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "Marketing node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 2,
            "toolId": "product-listing-keyword-density-checker",
            "role": "extract keyword usage from project text",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 2,
        "uiTitle": "Marketing node 3",
        "mode": "waterfall",
        "tools": [
          {
            "order": 3,
            "toolId": "sitemap-page-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 3,
        "uiTitle": "Marketing node 4",
        "mode": "waterfall",
        "tools": [
          {
            "order": 4,
            "toolId": "markdown-link-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 4,
        "uiTitle": "Marketing node 5",
        "mode": "waterfall",
        "tools": [
          {
            "order": 5,
            "toolId": "webhook-body-html-unescaper",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 5,
        "uiTitle": "Marketing node 6",
        "mode": "waterfall",
        "tools": [
          {
            "order": 6,
            "toolId": "shipping-note-slug-generator",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 6,
        "uiTitle": "Marketing node 7",
        "mode": "waterfall",
        "tools": [
          {
            "order": 7,
            "toolId": "product-listing-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 7,
        "uiTitle": "Marketing node 8",
        "mode": "waterfall",
        "tools": [
          {
            "order": 8,
            "toolId": "homepage-keyword-density-checker",
            "role": "extract keyword usage from project text",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 8,
        "uiTitle": "Marketing node 9",
        "mode": "waterfall",
        "tools": [
          {
            "order": 9,
            "toolId": "local-service-page-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 9,
        "uiTitle": "Marketing node 10",
        "mode": "waterfall",
        "tools": [
          {
            "order": 10,
            "toolId": "system-message-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 10,
        "uiTitle": "Marketing node 11",
        "mode": "waterfall",
        "tools": [
          {
            "order": 11,
            "toolId": "robots-rule-html-unescaper",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 11,
        "uiTitle": "Marketing node 12",
        "mode": "waterfall",
        "tools": [
          {
            "order": 12,
            "toolId": "garden-journal-trim-whitespace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 12,
        "uiTitle": "Marketing node 13",
        "mode": "waterfall",
        "tools": [
          {
            "order": 13,
            "toolId": "donation-campaign-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 13,
        "uiTitle": "Marketing node 14",
        "mode": "waterfall",
        "tools": [
          {
            "order": 14,
            "toolId": "contact-page-keyword-density-checker",
            "role": "extract keyword usage from project text",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 14,
        "uiTitle": "Marketing node 15",
        "mode": "waterfall",
        "tools": [
          {
            "order": 15,
            "toolId": "facebook-post-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 15,
        "uiTitle": "Marketing node 16",
        "mode": "waterfall",
        "tools": [
          {
            "order": 16,
            "toolId": "email-subject-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-hr-recruiting-sales-intake-to-output-002",
    "title": "HR recruiting sales intake-to-output workflow",
    "field": "HR recruiting",
    "businessFunction": "sales",
    "groupId": "group-sales-intake-to-output",
    "outcome": "Use compatible sales tools to turn raw input into a ready-to-use output for HR recruiting.",
    "prompt": "Build a micro workflow for HR recruiting: turn raw input into a ready-to-use output using sales tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste HR recruiting notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible sales chain.",
    "complexity": "micro-2-4",
    "layout": "2x1",
    "executionMode": "compact-waterfall",
    "toolCount": 4,
    "panelCount": 2,
    "maxNestedUiDepth": 2,
    "tags": [
      "hr-recruiting",
      "sales",
      "intake-to-output",
      "micro-2-4"
    ],
    "compatibilitySummary": "4 tools arranged as 2 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Sales node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "review-page-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "video-script-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "Sales node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 3,
            "toolId": "blog-post-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 4,
            "toolId": "cookie-value-html-unescaper",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 2
          }
        ]
      }
    ]
  },
  {
    "id": "project-hr-recruiting-support-intake-to-output-003",
    "title": "HR recruiting customer support intake-to-output workflow",
    "field": "HR recruiting",
    "businessFunction": "customer support",
    "groupId": "group-support-intake-to-output",
    "outcome": "Use compatible customer support tools to turn raw input into a ready-to-use output for HR recruiting.",
    "prompt": "Build a 8-panel workflow for HR recruiting: turn raw input into a ready-to-use output using customer support tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste HR recruiting notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible customer support chain.",
    "complexity": "mid-8",
    "layout": "4x2",
    "executionMode": "hybrid",
    "toolCount": 8,
    "panelCount": 8,
    "maxNestedUiDepth": 1,
    "tags": [
      "hr-recruiting",
      "support",
      "intake-to-output",
      "mid-8"
    ],
    "compatibilitySummary": "8 tools arranged as 8 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Customer support node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "meta-description-add-months-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "Customer support node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 2,
            "toolId": "cloudflare-rule-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 2,
        "uiTitle": "Customer support node 3",
        "mode": "waterfall",
        "tools": [
          {
            "order": 3,
            "toolId": "webhook-body-json-minifier",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 3,
        "uiTitle": "Customer support node 4",
        "mode": "waterfall",
        "tools": [
          {
            "order": 4,
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 4,
        "uiTitle": "Customer support node 5",
        "mode": "waterfall",
        "tools": [
          {
            "order": 5,
            "toolId": "donation-page-title-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 5,
        "uiTitle": "Customer support node 6",
        "mode": "waterfall",
        "tools": [
          {
            "order": 6,
            "toolId": "store-url-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 6,
        "uiTitle": "Customer support node 7",
        "mode": "waterfall",
        "tools": [
          {
            "order": 7,
            "toolId": "landing-page-add-months-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 7,
        "uiTitle": "Customer support node 8",
        "mode": "waterfall",
        "tools": [
          {
            "order": 8,
            "toolId": "schema-markup-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-hr-recruiting-operations-intake-to-output-004",
    "title": "HR recruiting operations intake-to-output workflow",
    "field": "HR recruiting",
    "businessFunction": "operations",
    "groupId": "group-operations-intake-to-output",
    "outcome": "Use compatible operations tools to turn raw input into a ready-to-use output for HR recruiting.",
    "prompt": "Build a 16-panel workflow for HR recruiting: turn raw input into a ready-to-use output using operations tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste HR recruiting notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible operations chain.",
    "complexity": "standard-16",
    "layout": "4x4",
    "executionMode": "waterfall",
    "toolCount": 16,
    "panelCount": 16,
    "maxNestedUiDepth": 1,
    "tags": [
      "hr-recruiting",
      "operations",
      "intake-to-output",
      "standard-16"
    ],
    "compatibilitySummary": "16 tools arranged as 16 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Operations node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "css-class-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "Operations node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 2,
            "toolId": "domain-list-sentence-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 2,
        "uiTitle": "Operations node 3",
        "mode": "waterfall",
        "tools": [
          {
            "order": 3,
            "toolId": "ad-copy-add-months-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 3,
        "uiTitle": "Operations node 4",
        "mode": "waterfall",
        "tools": [
          {
            "order": 4,
            "toolId": "product-listing-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 4,
        "uiTitle": "Operations node 5",
        "mode": "waterfall",
        "tools": [
          {
            "order": 5,
            "toolId": "podcast-notes-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 5,
        "uiTitle": "Operations node 6",
        "mode": "waterfall",
        "tools": [
          {
            "order": 6,
            "toolId": "prompt-text-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 6,
        "uiTitle": "Operations node 7",
        "mode": "waterfall",
        "tools": [
          {
            "order": 7,
            "toolId": "markdown-link-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 7,
        "uiTitle": "Operations node 8",
        "mode": "waterfall",
        "tools": [
          {
            "order": 8,
            "toolId": "press-release-title-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 8,
        "uiTitle": "Operations node 9",
        "mode": "waterfall",
        "tools": [
          {
            "order": 9,
            "toolId": "url-slug-add-months-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 9,
        "uiTitle": "Operations node 10",
        "mode": "waterfall",
        "tools": [
          {
            "order": 10,
            "toolId": "instagram-caption-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 10,
        "uiTitle": "Operations node 11",
        "mode": "waterfall",
        "tools": [
          {
            "order": 11,
            "toolId": "instagram-caption-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 11,
        "uiTitle": "Operations node 12",
        "mode": "waterfall",
        "tools": [
          {
            "order": 12,
            "toolId": "form-payload-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 12,
        "uiTitle": "Operations node 13",
        "mode": "waterfall",
        "tools": [
          {
            "order": 13,
            "toolId": "system-message-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 13,
        "uiTitle": "Operations node 14",
        "mode": "waterfall",
        "tools": [
          {
            "order": 14,
            "toolId": "customer-reply-uppercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 14,
        "uiTitle": "Operations node 15",
        "mode": "waterfall",
        "tools": [
          {
            "order": 15,
            "toolId": "recipe-notes-add-months-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 15,
        "uiTitle": "Operations node 16",
        "mode": "waterfall",
        "tools": [
          {
            "order": 16,
            "toolId": "csv-export-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-hr-recruiting-finance-intake-to-output-005",
    "title": "HR recruiting finance intake-to-output workflow",
    "field": "HR recruiting",
    "businessFunction": "finance",
    "groupId": "group-finance-intake-to-output",
    "outcome": "Use compatible finance tools to turn raw input into a ready-to-use output for HR recruiting.",
    "prompt": "Build a 64-tool nested waterfall for HR recruiting: turn raw input into a ready-to-use output using finance tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste HR recruiting notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible finance chain.",
    "complexity": "nested-64",
    "layout": "4x4",
    "executionMode": "nested-waterfall",
    "toolCount": 64,
    "panelCount": 16,
    "maxNestedUiDepth": 4,
    "tags": [
      "hr-recruiting",
      "finance",
      "intake-to-output",
      "nested-64"
    ],
    "compatibilitySummary": "64 tools arranged as 16 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Finance node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "press-release-rectangle-area-calculator",
            "role": "run a lightweight business formula",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "digital-product-order-total-calculator",
            "role": "calculate invoice totals from line-item assumptions",
            "uiDepth": 2
          },
          {
            "order": 3,
            "toolId": "plant-care-notes-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 4,
            "toolId": "recipe-notes-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "Finance node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 5,
            "toolId": "compound-interest-calculator",
            "role": "model long-term growth or recurring gains",
            "uiDepth": 1
          },
          {
            "order": 6,
            "toolId": "loan-payment-calculator",
            "role": "estimate payment obligations",
            "uiDepth": 2
          },
          {
            "order": 7,
            "toolId": "podcast-notes-division-calculator",
            "role": "run a lightweight business formula",
            "uiDepth": 3
          },
          {
            "order": 8,
            "toolId": "donation-receipt-total-calculator",
            "role": "calculate invoice totals from line-item assumptions",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 2,
        "uiTitle": "Finance node 3",
        "mode": "waterfall",
        "tools": [
          {
            "order": 9,
            "toolId": "html-block-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 10,
            "toolId": "keyword-list-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 2
          },
          {
            "order": 11,
            "toolId": "compound-interest-calculator",
            "role": "model long-term growth or recurring gains",
            "uiDepth": 3
          },
          {
            "order": 12,
            "toolId": "loan-payment-calculator",
            "role": "estimate payment obligations",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 3,
        "uiTitle": "Finance node 4",
        "mode": "waterfall",
        "tools": [
          {
            "order": 13,
            "toolId": "plant-care-notes-average-calculator",
            "role": "run a lightweight business formula",
            "uiDepth": 1
          },
          {
            "order": 14,
            "toolId": "freelance-invoice-total-calculator",
            "role": "calculate invoice totals from line-item assumptions",
            "uiDepth": 2
          },
          {
            "order": 15,
            "toolId": "customer-reply-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 16,
            "toolId": "facebook-bio-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 4,
        "uiTitle": "Finance node 5",
        "mode": "waterfall",
        "tools": [
          {
            "order": 17,
            "toolId": "compound-interest-calculator",
            "role": "model long-term growth or recurring gains",
            "uiDepth": 1
          },
          {
            "order": 18,
            "toolId": "loan-payment-calculator",
            "role": "estimate payment obligations",
            "uiDepth": 2
          },
          {
            "order": 19,
            "toolId": "meta-description-subtraction-calculator",
            "role": "run a lightweight business formula",
            "uiDepth": 3
          },
          {
            "order": 20,
            "toolId": "plant-sale-order-total-calculator",
            "role": "calculate invoice totals from line-item assumptions",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 5,
        "uiTitle": "Finance node 6",
        "mode": "waterfall",
        "tools": [
          {
            "order": 21,
            "toolId": "seo-title-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 22,
            "toolId": "ad-copy-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 2
          },
          {
            "order": 23,
            "toolId": "compound-interest-calculator",
            "role": "model long-term growth or recurring gains",
            "uiDepth": 3
          },
          {
            "order": 24,
            "toolId": "loan-payment-calculator",
            "role": "estimate payment obligations",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 6,
        "uiTitle": "Finance node 7",
        "mode": "waterfall",
        "tools": [
          {
            "order": 25,
            "toolId": "markdown-doc-multiplication-calculator",
            "role": "run a lightweight business formula",
            "uiDepth": 1
          },
          {
            "order": 26,
            "toolId": "project-estimate-total-calculator",
            "role": "calculate invoice totals from line-item assumptions",
            "uiDepth": 2
          },
          {
            "order": 27,
            "toolId": "markdown-doc-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 28,
            "toolId": "podcast-notes-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 7,
        "uiTitle": "Finance node 8",
        "mode": "waterfall",
        "tools": [
          {
            "order": 29,
            "toolId": "compound-interest-calculator",
            "role": "model long-term growth or recurring gains",
            "uiDepth": 1
          },
          {
            "order": 30,
            "toolId": "loan-payment-calculator",
            "role": "estimate payment obligations",
            "uiDepth": 2
          },
          {
            "order": 31,
            "toolId": "landing-page-box-volume-calculator",
            "role": "run a lightweight business formula",
            "uiDepth": 3
          },
          {
            "order": 32,
            "toolId": "raffle-order-total-calculator",
            "role": "calculate invoice totals from line-item assumptions",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 8,
        "uiTitle": "Finance node 9",
        "mode": "waterfall",
        "tools": [
          {
            "order": 33,
            "toolId": "folder-name-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 34,
            "toolId": "instagram-caption-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 2
          },
          {
            "order": 35,
            "toolId": "compound-interest-calculator",
            "role": "model long-term growth or recurring gains",
            "uiDepth": 3
          },
          {
            "order": 36,
            "toolId": "loan-payment-calculator",
            "role": "estimate payment obligations",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 9,
        "uiTitle": "Finance node 10",
        "mode": "waterfall",
        "tools": [
          {
            "order": 37,
            "toolId": "keyword-list-addition-calculator",
            "role": "run a lightweight business formula",
            "uiDepth": 1
          },
          {
            "order": 38,
            "toolId": "service-quote-total-calculator",
            "role": "calculate invoice totals from line-item assumptions",
            "uiDepth": 2
          },
          {
            "order": 39,
            "toolId": "brand-name-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 40,
            "toolId": "domain-list-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 10,
        "uiTitle": "Finance node 11",
        "mode": "waterfall",
        "tools": [
          {
            "order": 41,
            "toolId": "compound-interest-calculator",
            "role": "model long-term growth or recurring gains",
            "uiDepth": 1
          },
          {
            "order": 42,
            "toolId": "loan-payment-calculator",
            "role": "estimate payment obligations",
            "uiDepth": 2
          },
          {
            "order": 43,
            "toolId": "invoice-memo-rectangle-area-calculator",
            "role": "run a lightweight business formula",
            "uiDepth": 3
          },
          {
            "order": 44,
            "toolId": "shipping-invoice-total-calculator",
            "role": "calculate invoice totals from line-item assumptions",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 11,
        "uiTitle": "Finance node 12",
        "mode": "waterfall",
        "tools": [
          {
            "order": 45,
            "toolId": "product-listing-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 46,
            "toolId": "url-slug-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 2
          },
          {
            "order": 47,
            "toolId": "compound-interest-calculator",
            "role": "model long-term growth or recurring gains",
            "uiDepth": 3
          },
          {
            "order": 48,
            "toolId": "loan-payment-calculator",
            "role": "estimate payment obligations",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 12,
        "uiTitle": "Finance node 13",
        "mode": "waterfall",
        "tools": [
          {
            "order": 49,
            "toolId": "instagram-caption-division-calculator",
            "role": "run a lightweight business formula",
            "uiDepth": 1
          },
          {
            "order": 50,
            "toolId": "sponsor-invoice-total-calculator",
            "role": "calculate invoice totals from line-item assumptions",
            "uiDepth": 2
          },
          {
            "order": 51,
            "toolId": "json-snippet-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 52,
            "toolId": "meta-description-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 13,
        "uiTitle": "Finance node 14",
        "mode": "waterfall",
        "tools": [
          {
            "order": 53,
            "toolId": "compound-interest-calculator",
            "role": "model long-term growth or recurring gains",
            "uiDepth": 1
          },
          {
            "order": 54,
            "toolId": "loan-payment-calculator",
            "role": "estimate payment obligations",
            "uiDepth": 2
          },
          {
            "order": 55,
            "toolId": "html-block-average-calculator",
            "role": "run a lightweight business formula",
            "uiDepth": 3
          },
          {
            "order": 56,
            "toolId": "store-order-total-calculator",
            "role": "calculate invoice totals from line-item assumptions",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 14,
        "uiTitle": "Finance node 15",
        "mode": "waterfall",
        "tools": [
          {
            "order": 57,
            "toolId": "email-subject-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 58,
            "toolId": "garden-journal-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 2
          },
          {
            "order": 59,
            "toolId": "compound-interest-calculator",
            "role": "model long-term growth or recurring gains",
            "uiDepth": 3
          },
          {
            "order": 60,
            "toolId": "loan-payment-calculator",
            "role": "estimate payment obligations",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 15,
        "uiTitle": "Finance node 16",
        "mode": "waterfall",
        "tools": [
          {
            "order": 61,
            "toolId": "garden-journal-subtraction-calculator",
            "role": "run a lightweight business formula",
            "uiDepth": 1
          },
          {
            "order": 62,
            "toolId": "subscription-invoice-total-calculator",
            "role": "calculate invoice totals from line-item assumptions",
            "uiDepth": 2
          },
          {
            "order": 63,
            "toolId": "youtube-description-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 64,
            "toolId": "code-comment-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 4
          }
        ]
      }
    ]
  },
  {
    "id": "project-hr-recruiting-hr-intake-to-output-006",
    "title": "HR recruiting HR intake-to-output workflow",
    "field": "HR recruiting",
    "businessFunction": "HR",
    "groupId": "group-hr-intake-to-output",
    "outcome": "Use compatible HR tools to turn raw input into a ready-to-use output for HR recruiting.",
    "prompt": "Build a micro workflow for HR recruiting: turn raw input into a ready-to-use output using HR tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste HR recruiting notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible HR chain.",
    "complexity": "micro-2-4",
    "layout": "2x1",
    "executionMode": "compact-waterfall",
    "toolCount": 4,
    "panelCount": 2,
    "maxNestedUiDepth": 2,
    "tags": [
      "hr-recruiting",
      "hr",
      "intake-to-output",
      "micro-2-4"
    ],
    "compatibilitySummary": "4 tools arranged as 2 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "HR node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "meeting-notes-text-reverser",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "ad-copy-add-years-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "HR node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 3,
            "toolId": "file-name-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          },
          {
            "order": 4,
            "toolId": "worker-route-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 2
          }
        ]
      }
    ]
  },
  {
    "id": "project-hr-recruiting-content-intake-to-output-007",
    "title": "HR recruiting content intake-to-output workflow",
    "field": "HR recruiting",
    "businessFunction": "content",
    "groupId": "group-content-intake-to-output",
    "outcome": "Use compatible content tools to turn raw input into a ready-to-use output for HR recruiting.",
    "prompt": "Build a 16-panel workflow for HR recruiting: turn raw input into a ready-to-use output using content tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste HR recruiting notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible content chain.",
    "complexity": "standard-16",
    "layout": "4x4",
    "executionMode": "waterfall",
    "toolCount": 16,
    "panelCount": 16,
    "maxNestedUiDepth": 1,
    "tags": [
      "hr-recruiting",
      "content",
      "intake-to-output",
      "standard-16"
    ],
    "compatibilitySummary": "16 tools arranged as 16 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Content node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "Content node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 2,
            "toolId": "developer-tool-page-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 2,
        "uiTitle": "Content node 3",
        "mode": "waterfall",
        "tools": [
          {
            "order": 3,
            "toolId": "calculator-page-keyword-density-checker",
            "role": "extract keyword usage from project text",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 3,
        "uiTitle": "Content node 4",
        "mode": "waterfall",
        "tools": [
          {
            "order": 4,
            "toolId": "css-class-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 4,
        "uiTitle": "Content node 5",
        "mode": "waterfall",
        "tools": [
          {
            "order": 5,
            "toolId": "free-pdf-page-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 5,
        "uiTitle": "Content node 6",
        "mode": "waterfall",
        "tools": [
          {
            "order": 6,
            "toolId": "domain-list-blank-line-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 6,
        "uiTitle": "Content node 7",
        "mode": "waterfall",
        "tools": [
          {
            "order": 7,
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 7,
        "uiTitle": "Content node 8",
        "mode": "waterfall",
        "tools": [
          {
            "order": 8,
            "toolId": "product-page-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 8,
        "uiTitle": "Content node 9",
        "mode": "waterfall",
        "tools": [
          {
            "order": 9,
            "toolId": "sitemap-page-keyword-density-checker",
            "role": "extract keyword usage from project text",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 9,
        "uiTitle": "Content node 10",
        "mode": "waterfall",
        "tools": [
          {
            "order": 10,
            "toolId": "markdown-link-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 10,
        "uiTitle": "Content node 11",
        "mode": "waterfall",
        "tools": [
          {
            "order": 11,
            "toolId": "blog-post-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 11,
        "uiTitle": "Content node 12",
        "mode": "waterfall",
        "tools": [
          {
            "order": 12,
            "toolId": "press-release-lowercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 12,
        "uiTitle": "Content node 13",
        "mode": "waterfall",
        "tools": [
          {
            "order": 13,
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 13,
        "uiTitle": "Content node 14",
        "mode": "waterfall",
        "tools": [
          {
            "order": 14,
            "toolId": "facebook-bio-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 14,
        "uiTitle": "Content node 15",
        "mode": "waterfall",
        "tools": [
          {
            "order": 15,
            "toolId": "local-service-page-keyword-density-checker",
            "role": "extract keyword usage from project text",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 15,
        "uiTitle": "Content node 16",
        "mode": "waterfall",
        "tools": [
          {
            "order": 16,
            "toolId": "system-message-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-hr-recruiting-seo-intake-to-output-008",
    "title": "HR recruiting SEO intake-to-output workflow",
    "field": "HR recruiting",
    "businessFunction": "SEO",
    "groupId": "group-seo-intake-to-output",
    "outcome": "Use compatible SEO tools to turn raw input into a ready-to-use output for HR recruiting.",
    "prompt": "Build a micro workflow for HR recruiting: turn raw input into a ready-to-use output using SEO tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste HR recruiting notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible SEO chain.",
    "complexity": "micro-2-4",
    "layout": "1x1",
    "executionMode": "compact-waterfall",
    "toolCount": 3,
    "panelCount": 1,
    "maxNestedUiDepth": 3,
    "tags": [
      "hr-recruiting",
      "seo",
      "intake-to-output",
      "micro-2-4"
    ],
    "compatibilitySummary": "3 tools arranged as 1 panel UI; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "SEO node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "blog-post-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "system-message-base64-encoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 2
          },
          {
            "order": 3,
            "toolId": "csv-export-trim-whitespace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 3
          }
        ]
      }
    ]
  },
  {
    "id": "project-hr-recruiting-social-intake-to-output-009",
    "title": "HR recruiting social media intake-to-output workflow",
    "field": "HR recruiting",
    "businessFunction": "social media",
    "groupId": "group-social-intake-to-output",
    "outcome": "Use compatible social media tools to turn raw input into a ready-to-use output for HR recruiting.",
    "prompt": "Build a 8-panel workflow for HR recruiting: turn raw input into a ready-to-use output using social media tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste HR recruiting notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible social media chain.",
    "complexity": "mid-8",
    "layout": "2x4",
    "executionMode": "hybrid",
    "toolCount": 8,
    "panelCount": 8,
    "maxNestedUiDepth": 1,
    "tags": [
      "hr-recruiting",
      "social",
      "intake-to-output",
      "mid-8"
    ],
    "compatibilitySummary": "8 tools arranged as 8 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Social media node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "facebook-post-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "Social media node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 2,
            "toolId": "css-class-html-escaper",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 2,
        "uiTitle": "Social media node 3",
        "mode": "waterfall",
        "tools": [
          {
            "order": 3,
            "toolId": "seo-title-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 3,
        "uiTitle": "Social media node 4",
        "mode": "waterfall",
        "tools": [
          {
            "order": 4,
            "toolId": "json-snippet-slug-generator",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 4,
        "uiTitle": "Social media node 5",
        "mode": "waterfall",
        "tools": [
          {
            "order": 5,
            "toolId": "category-page-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 5,
        "uiTitle": "Social media node 6",
        "mode": "waterfall",
        "tools": [
          {
            "order": 6,
            "toolId": "tool-page-keyword-density-checker",
            "role": "extract keyword usage from project text",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 6,
        "uiTitle": "Social media node 7",
        "mode": "waterfall",
        "tools": [
          {
            "order": 7,
            "toolId": "affiliate-page-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 7,
        "uiTitle": "Social media node 8",
        "mode": "waterfall",
        "tools": [
          {
            "order": 8,
            "toolId": "user-message-html-escaper",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-hr-recruiting-email-intake-to-output-010",
    "title": "HR recruiting email intake-to-output workflow",
    "field": "HR recruiting",
    "businessFunction": "email",
    "groupId": "group-email-intake-to-output",
    "outcome": "Use compatible email tools to turn raw input into a ready-to-use output for HR recruiting.",
    "prompt": "Build a 32-tool nested workbench for HR recruiting: turn raw input into a ready-to-use output using email tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste HR recruiting notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible email chain.",
    "complexity": "advanced-32",
    "layout": "4x4",
    "executionMode": "hybrid-waterfall",
    "toolCount": 32,
    "panelCount": 16,
    "maxNestedUiDepth": 2,
    "tags": [
      "hr-recruiting",
      "email",
      "intake-to-output",
      "advanced-32"
    ],
    "compatibilitySummary": "32 tools arranged as 16 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Email node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "html-snippet-html-escaper",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "header-value-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "Email node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 3,
            "toolId": "newsletter-title-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 4,
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 2,
        "uiTitle": "Email node 3",
        "mode": "waterfall",
        "tools": [
          {
            "order": 5,
            "toolId": "homepage-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 1
          },
          {
            "order": 6,
            "toolId": "calculator-page-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 3,
        "uiTitle": "Email node 4",
        "mode": "waterfall",
        "tools": [
          {
            "order": 7,
            "toolId": "cloudflare-rule-html-escaper",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 1
          },
          {
            "order": 8,
            "toolId": "regex-pattern-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 4,
        "uiTitle": "Email node 5",
        "mode": "waterfall",
        "tools": [
          {
            "order": 9,
            "toolId": "community-rule-uppercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 10,
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 5,
        "uiTitle": "Email node 6",
        "mode": "waterfall",
        "tools": [
          {
            "order": 11,
            "toolId": "about-page-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 1
          },
          {
            "order": 12,
            "toolId": "sitemap-page-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 6,
        "uiTitle": "Email node 7",
        "mode": "waterfall",
        "tools": [
          {
            "order": 13,
            "toolId": "system-message-html-escaper",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 1
          },
          {
            "order": 14,
            "toolId": "callback-url-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 7,
        "uiTitle": "Email node 8",
        "mode": "waterfall",
        "tools": [
          {
            "order": 15,
            "toolId": "newsletter-find-and-replace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 16,
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 8,
        "uiTitle": "Email node 9",
        "mode": "waterfall",
        "tools": [
          {
            "order": 17,
            "toolId": "instagram-reel-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 1
          },
          {
            "order": 18,
            "toolId": "local-service-page-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 9,
        "uiTitle": "Email node 10",
        "mode": "waterfall",
        "tools": [
          {
            "order": 19,
            "toolId": "python-string-html-escaper",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 1
          },
          {
            "order": 20,
            "toolId": "javascript-string-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 10,
        "uiTitle": "Email node 11",
        "mode": "waterfall",
        "tools": [
          {
            "order": 21,
            "toolId": "community-rule-sentence-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 22,
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 11,
        "uiTitle": "Email node 12",
        "mode": "waterfall",
        "tools": [
          {
            "order": 23,
            "toolId": "blog-article-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 1
          },
          {
            "order": 24,
            "toolId": "facebook-post-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 12,
        "uiTitle": "Email node 13",
        "mode": "waterfall",
        "tools": [
          {
            "order": 25,
            "toolId": "git-branch-html-escaper",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 1
          },
          {
            "order": 26,
            "toolId": "seo-title-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 13,
        "uiTitle": "Email node 14",
        "mode": "waterfall",
        "tools": [
          {
            "order": 27,
            "toolId": "meta-description-title-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 28,
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 14,
        "uiTitle": "Email node 15",
        "mode": "waterfall",
        "tools": [
          {
            "order": 29,
            "toolId": "local-service-page-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 1
          },
          {
            "order": 30,
            "toolId": "affiliate-page-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 15,
        "uiTitle": "Email node 16",
        "mode": "waterfall",
        "tools": [
          {
            "order": 31,
            "toolId": "callback-url-html-escaper",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 1
          },
          {
            "order": 32,
            "toolId": "csv-cell-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 2
          }
        ]
      }
    ]
  },
  {
    "id": "project-hr-recruiting-data-intake-to-output-011",
    "title": "HR recruiting data cleanup intake-to-output workflow",
    "field": "HR recruiting",
    "businessFunction": "data cleanup",
    "groupId": "group-data-intake-to-output",
    "outcome": "Use compatible data cleanup tools to turn raw input into a ready-to-use output for HR recruiting.",
    "prompt": "Build a 8-panel workflow for HR recruiting: turn raw input into a ready-to-use output using data cleanup tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste HR recruiting notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible data cleanup chain.",
    "complexity": "mid-8",
    "layout": "4x2",
    "executionMode": "hybrid",
    "toolCount": 8,
    "panelCount": 8,
    "maxNestedUiDepth": 1,
    "tags": [
      "hr-recruiting",
      "data",
      "intake-to-output",
      "mid-8"
    ],
    "compatibilitySummary": "8 tools arranged as 8 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Data cleanup node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "blog-post-uuid-generator",
            "role": "create unique IDs for assets, records, or tasks",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "Data cleanup node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 2,
            "toolId": "product-listing-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 2,
        "uiTitle": "Data cleanup node 3",
        "mode": "waterfall",
        "tools": [
          {
            "order": 3,
            "toolId": "jwt-payload-json-minifier",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 3,
        "uiTitle": "Data cleanup node 4",
        "mode": "waterfall",
        "tools": [
          {
            "order": 4,
            "toolId": "pages-url-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 4,
        "uiTitle": "Data cleanup node 5",
        "mode": "waterfall",
        "tools": [
          {
            "order": 5,
            "toolId": "ad-copy-blank-line-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 5,
        "uiTitle": "Data cleanup node 6",
        "mode": "waterfall",
        "tools": [
          {
            "order": 6,
            "toolId": "form-payload-html-escaper",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 6,
        "uiTitle": "Data cleanup node 7",
        "mode": "waterfall",
        "tools": [
          {
            "order": 7,
            "toolId": "landing-page-uuid-generator",
            "role": "create unique IDs for assets, records, or tasks",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 7,
        "uiTitle": "Data cleanup node 8",
        "mode": "waterfall",
        "tools": [
          {
            "order": 8,
            "toolId": "facebook-bio-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-hr-recruiting-reporting-intake-to-output-012",
    "title": "HR recruiting reporting intake-to-output workflow",
    "field": "HR recruiting",
    "businessFunction": "reporting",
    "groupId": "group-reporting-intake-to-output",
    "outcome": "Use compatible reporting tools to turn raw input into a ready-to-use output for HR recruiting.",
    "prompt": "Build a micro workflow for HR recruiting: turn raw input into a ready-to-use output using reporting tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste HR recruiting notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible reporting chain.",
    "complexity": "micro-2-4",
    "layout": "1x1",
    "executionMode": "compact-waterfall",
    "toolCount": 3,
    "panelCount": 1,
    "maxNestedUiDepth": 3,
    "tags": [
      "hr-recruiting",
      "reporting",
      "intake-to-output",
      "micro-2-4"
    ],
    "compatibilitySummary": "3 tools arranged as 1 panel UI; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Reporting node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "secret-placeholder-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "oauth-state-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 2
          },
          {
            "order": 3,
            "toolId": "domain-list-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          }
        ]
      }
    ]
  },
  {
    "id": "project-hr-recruiting-compliance-intake-to-output-013",
    "title": "HR recruiting compliance intake-to-output workflow",
    "field": "HR recruiting",
    "businessFunction": "compliance",
    "groupId": "group-compliance-intake-to-output",
    "outcome": "Use compatible compliance tools to turn raw input into a ready-to-use output for HR recruiting.",
    "prompt": "Build a 16-panel workflow for HR recruiting: turn raw input into a ready-to-use output using compliance tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste HR recruiting notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible compliance chain.",
    "complexity": "standard-16",
    "layout": "4x4",
    "executionMode": "waterfall",
    "toolCount": 16,
    "panelCount": 16,
    "maxNestedUiDepth": 1,
    "tags": [
      "hr-recruiting",
      "compliance",
      "intake-to-output",
      "standard-16"
    ],
    "compatibilitySummary": "16 tools arranged as 16 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Compliance node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "coupon-text-blank-line-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "Compliance node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 2,
            "toolId": "meta-description-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 2,
        "uiTitle": "Compliance node 3",
        "mode": "waterfall",
        "tools": [
          {
            "order": 3,
            "toolId": "blog-post-add-days-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 3,
        "uiTitle": "Compliance node 4",
        "mode": "waterfall",
        "tools": [
          {
            "order": 4,
            "toolId": "secret-placeholder-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 4,
        "uiTitle": "Compliance node 5",
        "mode": "waterfall",
        "tools": [
          {
            "order": 5,
            "toolId": "sitemap-url-json-minifier",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 5,
        "uiTitle": "Compliance node 6",
        "mode": "waterfall",
        "tools": [
          {
            "order": 6,
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 6,
        "uiTitle": "Compliance node 7",
        "mode": "waterfall",
        "tools": [
          {
            "order": 7,
            "toolId": "newsletter-lowercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 7,
        "uiTitle": "Compliance node 8",
        "mode": "waterfall",
        "tools": [
          {
            "order": 8,
            "toolId": "folder-name-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 8,
        "uiTitle": "Compliance node 9",
        "mode": "waterfall",
        "tools": [
          {
            "order": 9,
            "toolId": "youtube-description-add-days-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 9,
        "uiTitle": "Compliance node 10",
        "mode": "waterfall",
        "tools": [
          {
            "order": 10,
            "toolId": "css-class-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 10,
        "uiTitle": "Compliance node 11",
        "mode": "waterfall",
        "tools": [
          {
            "order": 11,
            "toolId": "html-snippet-json-key-extractor",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 11,
        "uiTitle": "Compliance node 12",
        "mode": "waterfall",
        "tools": [
          {
            "order": 12,
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 12,
        "uiTitle": "Compliance node 13",
        "mode": "waterfall",
        "tools": [
          {
            "order": 13,
            "toolId": "community-rule-slug-generator",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 13,
        "uiTitle": "Compliance node 14",
        "mode": "waterfall",
        "tools": [
          {
            "order": 14,
            "toolId": "ad-copy-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 14,
        "uiTitle": "Compliance node 15",
        "mode": "waterfall",
        "tools": [
          {
            "order": 15,
            "toolId": "seo-title-add-days-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 15,
        "uiTitle": "Compliance node 16",
        "mode": "waterfall",
        "tools": [
          {
            "order": 16,
            "toolId": "markdown-link-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-hr-recruiting-scheduling-intake-to-output-014",
    "title": "HR recruiting scheduling intake-to-output workflow",
    "field": "HR recruiting",
    "businessFunction": "scheduling",
    "groupId": "group-scheduling-intake-to-output",
    "outcome": "Use compatible scheduling tools to turn raw input into a ready-to-use output for HR recruiting.",
    "prompt": "Build a micro workflow for HR recruiting: turn raw input into a ready-to-use output using scheduling tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste HR recruiting notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible scheduling chain.",
    "complexity": "micro-2-4",
    "layout": "2x1",
    "executionMode": "compact-waterfall",
    "toolCount": 4,
    "panelCount": 2,
    "maxNestedUiDepth": 2,
    "tags": [
      "hr-recruiting",
      "scheduling",
      "intake-to-output",
      "micro-2-4"
    ],
    "compatibilitySummary": "4 tools arranged as 2 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Scheduling node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "keyword-list-date-to-unix-timestamp",
            "role": "convert or stamp time values",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "search-query-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "Scheduling node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 3,
            "toolId": "keyword-list-sentence-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 4,
            "toolId": "log-line-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 2
          }
        ]
      }
    ]
  },
  {
    "id": "project-hr-recruiting-product-intake-to-output-015",
    "title": "HR recruiting product intake-to-output workflow",
    "field": "HR recruiting",
    "businessFunction": "product",
    "groupId": "group-product-intake-to-output",
    "outcome": "Use compatible product tools to turn raw input into a ready-to-use output for HR recruiting.",
    "prompt": "Build a 64-tool nested waterfall for HR recruiting: turn raw input into a ready-to-use output using product tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste HR recruiting notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible product chain.",
    "complexity": "nested-64",
    "layout": "4x4",
    "executionMode": "nested-waterfall",
    "toolCount": 64,
    "panelCount": 16,
    "maxNestedUiDepth": 4,
    "tags": [
      "hr-recruiting",
      "product",
      "intake-to-output",
      "nested-64"
    ],
    "compatibilitySummary": "64 tools arranged as 16 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Product node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "landing-page-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "plant-care-notes-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 2
          },
          {
            "order": 3,
            "toolId": "environment-value-json-minifier",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 3
          },
          {
            "order": 4,
            "toolId": "resume-bullet-blank-line-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "Product node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 5,
            "toolId": "docker-tag-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 6,
            "toolId": "commit-message-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 2
          },
          {
            "order": 7,
            "toolId": "file-name-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 8,
            "toolId": "html-block-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 2,
        "uiTitle": "Product node 3",
        "mode": "waterfall",
        "tools": [
          {
            "order": 9,
            "toolId": "robots-rule-json-formatter",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 1
          },
          {
            "order": 10,
            "toolId": "facebook-bio-lowercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 11,
            "toolId": "svg-snippet-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 3
          },
          {
            "order": 12,
            "toolId": "landing-page-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 3,
        "uiTitle": "Product node 4",
        "mode": "waterfall",
        "tools": [
          {
            "order": 13,
            "toolId": "blog-post-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 14,
            "toolId": "customer-reply-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 2
          },
          {
            "order": 15,
            "toolId": "css-class-json-key-extractor",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 3
          },
          {
            "order": 16,
            "toolId": "recipe-notes-slug-generator",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 4,
        "uiTitle": "Product node 5",
        "mode": "waterfall",
        "tools": [
          {
            "order": 17,
            "toolId": "markdown-link-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 18,
            "toolId": "store-url-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 2
          },
          {
            "order": 19,
            "toolId": "press-release-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 20,
            "toolId": "seo-title-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 5,
        "uiTitle": "Product node 6",
        "mode": "waterfall",
        "tools": [
          {
            "order": 21,
            "toolId": "python-string-json-formatter",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 1
          },
          {
            "order": 22,
            "toolId": "email-subject-trim-whitespace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 23,
            "toolId": "customer-reply-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 3
          },
          {
            "order": 24,
            "toolId": "docker-tag-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 6,
        "uiTitle": "Product node 7",
        "mode": "waterfall",
        "tools": [
          {
            "order": 25,
            "toolId": "invoice-memo-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 26,
            "toolId": "markdown-doc-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 2
          },
          {
            "order": 27,
            "toolId": "api-token-json-key-extractor",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 3
          },
          {
            "order": 28,
            "toolId": "recipe-notes-blank-line-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 7,
        "uiTitle": "Product node 8",
        "mode": "waterfall",
        "tools": [
          {
            "order": 29,
            "toolId": "sql-snippet-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 30,
            "toolId": "pages-url-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 2
          },
          {
            "order": 31,
            "toolId": "ebook-chapter-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 32,
            "toolId": "folder-name-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 8,
        "uiTitle": "Product node 9",
        "mode": "waterfall",
        "tools": [
          {
            "order": 33,
            "toolId": "jwt-payload-json-formatter",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 1
          },
          {
            "order": 34,
            "toolId": "email-subject-lowercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 35,
            "toolId": "log-line-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 3
          },
          {
            "order": 36,
            "toolId": "uuid-list-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 9,
        "uiTitle": "Product node 10",
        "mode": "waterfall",
        "tools": [
          {
            "order": 37,
            "toolId": "video-script-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 38,
            "toolId": "brand-name-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 2
          },
          {
            "order": 39,
            "toolId": "sql-snippet-json-key-extractor",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 3
          },
          {
            "order": 40,
            "toolId": "project-brief-slug-generator",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 10,
        "uiTitle": "Product node 11",
        "mode": "waterfall",
        "tools": [
          {
            "order": 41,
            "toolId": "css-class-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 42,
            "toolId": "form-payload-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 2
          },
          {
            "order": 43,
            "toolId": "newsletter-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 44,
            "toolId": "product-listing-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 11,
        "uiTitle": "Product node 12",
        "mode": "waterfall",
        "tools": [
          {
            "order": 45,
            "toolId": "javascript-string-json-formatter",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 1
          },
          {
            "order": 46,
            "toolId": "ebook-chapter-trim-whitespace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 47,
            "toolId": "seo-title-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 3
          },
          {
            "order": 48,
            "toolId": "query-string-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 12,
        "uiTitle": "Product node 13",
        "mode": "waterfall",
        "tools": [
          {
            "order": 49,
            "toolId": "hashtag-set-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 50,
            "toolId": "json-snippet-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 2
          },
          {
            "order": 51,
            "toolId": "schema-markup-json-key-extractor",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 3
          },
          {
            "order": 52,
            "toolId": "project-brief-blank-line-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 13,
        "uiTitle": "Product node 14",
        "mode": "waterfall",
        "tools": [
          {
            "order": 53,
            "toolId": "jwt-payload-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 54,
            "toolId": "api-token-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 2
          },
          {
            "order": 55,
            "toolId": "csv-export-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 56,
            "toolId": "email-subject-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 14,
        "uiTitle": "Product node 15",
        "mode": "waterfall",
        "tools": [
          {
            "order": 57,
            "toolId": "environment-value-json-formatter",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 1
          },
          {
            "order": 58,
            "toolId": "ebook-chapter-lowercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 59,
            "toolId": "commit-message-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 3
          },
          {
            "order": 60,
            "toolId": "instagram-caption-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 15,
        "uiTitle": "Product node 16",
        "mode": "waterfall",
        "tools": [
          {
            "order": 61,
            "toolId": "resume-bullet-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 62,
            "toolId": "youtube-description-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 2
          },
          {
            "order": 63,
            "toolId": "query-string-json-key-extractor",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 3
          },
          {
            "order": 64,
            "toolId": "product-sku-slug-generator",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 4
          }
        ]
      }
    ]
  },
  {
    "id": "project-hr-recruiting-ux-intake-to-output-016",
    "title": "HR recruiting UX/UI intake-to-output workflow",
    "field": "HR recruiting",
    "businessFunction": "UX/UI",
    "groupId": "group-ux-intake-to-output",
    "outcome": "Use compatible UX/UI tools to turn raw input into a ready-to-use output for HR recruiting.",
    "prompt": "Build a 16-panel workflow for HR recruiting: turn raw input into a ready-to-use output using UX/UI tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste HR recruiting notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible UX/UI chain.",
    "complexity": "standard-16",
    "layout": "4x4",
    "executionMode": "waterfall",
    "toolCount": 16,
    "panelCount": 16,
    "maxNestedUiDepth": 1,
    "tags": [
      "hr-recruiting",
      "ux",
      "intake-to-output",
      "standard-16"
    ],
    "compatibilitySummary": "16 tools arranged as 16 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "UX/UI node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "blog-article-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "UX/UI node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 2,
            "toolId": "tool-page-keyword-density-checker",
            "role": "extract keyword usage from project text",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 2,
        "uiTitle": "UX/UI node 3",
        "mode": "waterfall",
        "tools": [
          {
            "order": 3,
            "toolId": "hashtag-set-hex-to-rgb-converter",
            "role": "convert brand colors and palette values",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 3,
        "uiTitle": "UX/UI node 4",
        "mode": "waterfall",
        "tools": [
          {
            "order": 4,
            "toolId": "project-brief-color-contrast-checker",
            "role": "check readability and accessibility contrast",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 4,
        "uiTitle": "UX/UI node 5",
        "mode": "waterfall",
        "tools": [
          {
            "order": 5,
            "toolId": "community-rule-text-reverser",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 5,
        "uiTitle": "UX/UI node 6",
        "mode": "waterfall",
        "tools": [
          {
            "order": 6,
            "toolId": "email-body-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 6,
        "uiTitle": "UX/UI node 7",
        "mode": "waterfall",
        "tools": [
          {
            "order": 7,
            "toolId": "local-service-page-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 7,
        "uiTitle": "UX/UI node 8",
        "mode": "waterfall",
        "tools": [
          {
            "order": 8,
            "toolId": "pinterest-pin-keyword-density-checker",
            "role": "extract keyword usage from project text",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 8,
        "uiTitle": "UX/UI node 9",
        "mode": "waterfall",
        "tools": [
          {
            "order": 9,
            "toolId": "youtube-description-hex-to-rgb-converter",
            "role": "convert brand colors and palette values",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 9,
        "uiTitle": "UX/UI node 10",
        "mode": "waterfall",
        "tools": [
          {
            "order": 10,
            "toolId": "domain-list-color-contrast-checker",
            "role": "check readability and accessibility contrast",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 10,
        "uiTitle": "UX/UI node 11",
        "mode": "waterfall",
        "tools": [
          {
            "order": 11,
            "toolId": "meta-description-uppercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 11,
        "uiTitle": "UX/UI node 12",
        "mode": "waterfall",
        "tools": [
          {
            "order": 12,
            "toolId": "plant-care-notes-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 12,
        "uiTitle": "UX/UI node 13",
        "mode": "waterfall",
        "tools": [
          {
            "order": 13,
            "toolId": "calculator-page-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 13,
        "uiTitle": "UX/UI node 14",
        "mode": "waterfall",
        "tools": [
          {
            "order": 14,
            "toolId": "free-pdf-page-keyword-density-checker",
            "role": "extract keyword usage from project text",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 14,
        "uiTitle": "UX/UI node 15",
        "mode": "waterfall",
        "tools": [
          {
            "order": 15,
            "toolId": "plant-care-notes-hex-to-rgb-converter",
            "role": "convert brand colors and palette values",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 15,
        "uiTitle": "UX/UI node 16",
        "mode": "waterfall",
        "tools": [
          {
            "order": 16,
            "toolId": "newsletter-color-contrast-checker",
            "role": "check readability and accessibility contrast",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-hr-recruiting-web-launch-intake-to-output-017",
    "title": "HR recruiting web launch intake-to-output workflow",
    "field": "HR recruiting",
    "businessFunction": "web launch",
    "groupId": "group-web-launch-intake-to-output",
    "outcome": "Use compatible web launch tools to turn raw input into a ready-to-use output for HR recruiting.",
    "prompt": "Build a 8-panel workflow for HR recruiting: turn raw input into a ready-to-use output using web launch tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste HR recruiting notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible web launch chain.",
    "complexity": "mid-8",
    "layout": "2x4",
    "executionMode": "hybrid",
    "toolCount": 8,
    "panelCount": 8,
    "maxNestedUiDepth": 1,
    "tags": [
      "hr-recruiting",
      "web-launch",
      "intake-to-output",
      "mid-8"
    ],
    "compatibilitySummary": "8 tools arranged as 8 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Web launch node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "query-string-json-key-extractor",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "Web launch node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 2,
            "toolId": "recipe-notes-hex-to-rgb-converter",
            "role": "convert brand colors and palette values",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 2,
        "uiTitle": "Web launch node 3",
        "mode": "waterfall",
        "tools": [
          {
            "order": 3,
            "toolId": "domain-list-color-contrast-checker",
            "role": "check readability and accessibility contrast",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 3,
        "uiTitle": "Web launch node 4",
        "mode": "waterfall",
        "tools": [
          {
            "order": 4,
            "toolId": "pinterest-pin-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 4,
        "uiTitle": "Web launch node 5",
        "mode": "waterfall",
        "tools": [
          {
            "order": 5,
            "toolId": "image-tool-page-keyword-density-checker",
            "role": "extract keyword usage from project text",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 5,
        "uiTitle": "Web launch node 6",
        "mode": "waterfall",
        "tools": [
          {
            "order": 6,
            "toolId": "newsletter-campaign-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 6,
        "uiTitle": "Web launch node 7",
        "mode": "waterfall",
        "tools": [
          {
            "order": 7,
            "toolId": "callback-url-json-minifier",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 7,
        "uiTitle": "Web launch node 8",
        "mode": "waterfall",
        "tools": [
          {
            "order": 8,
            "toolId": "invoice-memo-hex-to-rgb-converter",
            "role": "convert brand colors and palette values",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-hr-recruiting-developer-intake-to-output-018",
    "title": "HR recruiting developer intake-to-output workflow",
    "field": "HR recruiting",
    "businessFunction": "developer",
    "groupId": "group-developer-intake-to-output",
    "outcome": "Use compatible developer tools to turn raw input into a ready-to-use output for HR recruiting.",
    "prompt": "Build a micro workflow for HR recruiting: turn raw input into a ready-to-use output using developer tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste HR recruiting notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible developer chain.",
    "complexity": "micro-2-4",
    "layout": "2x1",
    "executionMode": "compact-waterfall",
    "toolCount": 4,
    "panelCount": 2,
    "maxNestedUiDepth": 2,
    "tags": [
      "hr-recruiting",
      "developer",
      "intake-to-output",
      "micro-2-4"
    ],
    "compatibilitySummary": "4 tools arranged as 2 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Developer node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "python-string-json-key-extractor",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "callback-url-url-encoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "Developer node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 3,
            "toolId": "community-rule-uuid-generator",
            "role": "create unique IDs for assets, records, or tasks",
            "uiDepth": 1
          },
          {
            "order": 4,
            "toolId": "search-index-password-generator",
            "role": "create secure passwords for the project",
            "uiDepth": 2
          }
        ]
      }
    ]
  },
  {
    "id": "project-hr-recruiting-security-intake-to-output-019",
    "title": "HR recruiting security intake-to-output workflow",
    "field": "HR recruiting",
    "businessFunction": "security",
    "groupId": "group-security-intake-to-output",
    "outcome": "Use compatible security tools to turn raw input into a ready-to-use output for HR recruiting.",
    "prompt": "Build a 16-panel workflow for HR recruiting: turn raw input into a ready-to-use output using security tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste HR recruiting notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible security chain.",
    "complexity": "standard-16",
    "layout": "4x4",
    "executionMode": "waterfall",
    "toolCount": 16,
    "panelCount": 16,
    "maxNestedUiDepth": 1,
    "tags": [
      "hr-recruiting",
      "security",
      "intake-to-output",
      "standard-16"
    ],
    "compatibilitySummary": "16 tools arranged as 16 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Security node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "newsletter-uuid-generator",
            "role": "create unique IDs for assets, records, or tasks",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "Security node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 2,
            "toolId": "ip-allowlist-base64-decoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 2,
        "uiTitle": "Security node 3",
        "mode": "waterfall",
        "tools": [
          {
            "order": 3,
            "toolId": "api-token-json-key-extractor",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 3,
        "uiTitle": "Security node 4",
        "mode": "waterfall",
        "tools": [
          {
            "order": 4,
            "toolId": "podcast-notes-title-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 4,
        "uiTitle": "Security node 5",
        "mode": "waterfall",
        "tools": [
          {
            "order": 5,
            "toolId": "xml-node-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 5,
        "uiTitle": "Security node 6",
        "mode": "waterfall",
        "tools": [
          {
            "order": 6,
            "toolId": "email-subject-password-generator",
            "role": "create secure passwords for the project",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 6,
        "uiTitle": "Security node 7",
        "mode": "waterfall",
        "tools": [
          {
            "order": 7,
            "toolId": "youtube-description-uuid-generator",
            "role": "create unique IDs for assets, records, or tasks",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 7,
        "uiTitle": "Security node 8",
        "mode": "waterfall",
        "tools": [
          {
            "order": 8,
            "toolId": "cookie-value-base64-decoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 8,
        "uiTitle": "Security node 9",
        "mode": "waterfall",
        "tools": [
          {
            "order": 9,
            "toolId": "jwt-payload-json-formatter",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 9,
        "uiTitle": "Security node 10",
        "mode": "waterfall",
        "tools": [
          {
            "order": 10,
            "toolId": "csv-export-uppercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 10,
        "uiTitle": "Security node 11",
        "mode": "waterfall",
        "tools": [
          {
            "order": 11,
            "toolId": "header-value-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 11,
        "uiTitle": "Security node 12",
        "mode": "waterfall",
        "tools": [
          {
            "order": 12,
            "toolId": "product-listing-password-generator",
            "role": "create secure passwords for the project",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 12,
        "uiTitle": "Security node 13",
        "mode": "waterfall",
        "tools": [
          {
            "order": 13,
            "toolId": "json-snippet-uuid-generator",
            "role": "create unique IDs for assets, records, or tasks",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 13,
        "uiTitle": "Security node 14",
        "mode": "waterfall",
        "tools": [
          {
            "order": 14,
            "toolId": "tracking-link-base64-decoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 14,
        "uiTitle": "Security node 15",
        "mode": "waterfall",
        "tools": [
          {
            "order": 15,
            "toolId": "sql-snippet-json-key-extractor",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 15,
        "uiTitle": "Security node 16",
        "mode": "waterfall",
        "tools": [
          {
            "order": 16,
            "toolId": "podcast-notes-find-and-replace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-hr-recruiting-training-intake-to-output-020",
    "title": "HR recruiting training intake-to-output workflow",
    "field": "HR recruiting",
    "businessFunction": "training",
    "groupId": "group-training-intake-to-output",
    "outcome": "Use compatible training tools to turn raw input into a ready-to-use output for HR recruiting.",
    "prompt": "Build a 32-tool nested workbench for HR recruiting: turn raw input into a ready-to-use output using training tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste HR recruiting notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible training chain.",
    "complexity": "advanced-32",
    "layout": "4x4",
    "executionMode": "hybrid-waterfall",
    "toolCount": 32,
    "panelCount": 16,
    "maxNestedUiDepth": 2,
    "tags": [
      "hr-recruiting",
      "training",
      "intake-to-output",
      "advanced-32"
    ],
    "compatibilitySummary": "32 tools arranged as 16 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Training node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "brand-name-add-months-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "folder-name-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "Training node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 3,
            "toolId": "svg-snippet-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 4,
            "toolId": "ad-copy-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 2,
        "uiTitle": "Training node 3",
        "mode": "waterfall",
        "tools": [
          {
            "order": 5,
            "toolId": "youtube-description-lowercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 6,
            "toolId": "python-string-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 3,
        "uiTitle": "Training node 4",
        "mode": "waterfall",
        "tools": [
          {
            "order": 7,
            "toolId": "ad-copy-add-months-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          },
          {
            "order": 8,
            "toolId": "ad-copy-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 4,
        "uiTitle": "Training node 5",
        "mode": "waterfall",
        "tools": [
          {
            "order": 9,
            "toolId": "markdown-link-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 10,
            "toolId": "podcast-notes-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 5,
        "uiTitle": "Training node 6",
        "mode": "waterfall",
        "tools": [
          {
            "order": 11,
            "toolId": "json-snippet-text-reverser",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 12,
            "toolId": "youtube-description-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 6,
        "uiTitle": "Training node 7",
        "mode": "waterfall",
        "tools": [
          {
            "order": 13,
            "toolId": "url-slug-add-months-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          },
          {
            "order": 14,
            "toolId": "markdown-doc-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 7,
        "uiTitle": "Training node 8",
        "mode": "waterfall",
        "tools": [
          {
            "order": 15,
            "toolId": "customer-reply-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 16,
            "toolId": "instagram-caption-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 8,
        "uiTitle": "Training node 9",
        "mode": "waterfall",
        "tools": [
          {
            "order": 17,
            "toolId": "video-script-trim-whitespace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 18,
            "toolId": "image-alt-text-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 9,
        "uiTitle": "Training node 10",
        "mode": "waterfall",
        "tools": [
          {
            "order": 19,
            "toolId": "recipe-notes-add-months-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          },
          {
            "order": 20,
            "toolId": "file-name-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 10,
        "uiTitle": "Training node 11",
        "mode": "waterfall",
        "tools": [
          {
            "order": 21,
            "toolId": "sql-snippet-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 22,
            "toolId": "domain-list-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 11,
        "uiTitle": "Training node 12",
        "mode": "waterfall",
        "tools": [
          {
            "order": 23,
            "toolId": "json-snippet-extra-space-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 24,
            "toolId": "robots-rule-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 12,
        "uiTitle": "Training node 13",
        "mode": "waterfall",
        "tools": [
          {
            "order": 25,
            "toolId": "press-release-add-months-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          },
          {
            "order": 26,
            "toolId": "youtube-description-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 13,
        "uiTitle": "Training node 14",
        "mode": "waterfall",
        "tools": [
          {
            "order": 27,
            "toolId": "log-line-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 28,
            "toolId": "url-slug-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 14,
        "uiTitle": "Training node 15",
        "mode": "waterfall",
        "tools": [
          {
            "order": 29,
            "toolId": "video-script-lowercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 30,
            "toolId": "cloudflare-rule-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 15,
        "uiTitle": "Training node 16",
        "mode": "waterfall",
        "tools": [
          {
            "order": 31,
            "toolId": "newsletter-add-months-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          },
          {
            "order": 32,
            "toolId": "landing-page-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 2
          }
        ]
      }
    ]
  },
  {
    "id": "project-hr-recruiting-inventory-intake-to-output-021",
    "title": "HR recruiting inventory intake-to-output workflow",
    "field": "HR recruiting",
    "businessFunction": "inventory",
    "groupId": "group-inventory-intake-to-output",
    "outcome": "Use compatible inventory tools to turn raw input into a ready-to-use output for HR recruiting.",
    "prompt": "Build a 8-panel workflow for HR recruiting: turn raw input into a ready-to-use output using inventory tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste HR recruiting notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible inventory chain.",
    "complexity": "mid-8",
    "layout": "2x4",
    "executionMode": "hybrid",
    "toolCount": 8,
    "panelCount": 8,
    "maxNestedUiDepth": 1,
    "tags": [
      "hr-recruiting",
      "inventory",
      "intake-to-output",
      "mid-8"
    ],
    "compatibilitySummary": "8 tools arranged as 8 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Inventory node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "webhook-body-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "Inventory node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 2,
            "toolId": "video-script-extra-space-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 2,
        "uiTitle": "Inventory node 3",
        "mode": "waterfall",
        "tools": [
          {
            "order": 3,
            "toolId": "garden-journal-add-weeks-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 3,
        "uiTitle": "Inventory node 4",
        "mode": "waterfall",
        "tools": [
          {
            "order": 4,
            "toolId": "pages-url-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 4,
        "uiTitle": "Inventory node 5",
        "mode": "waterfall",
        "tools": [
          {
            "order": 5,
            "toolId": "folder-name-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 5,
        "uiTitle": "Inventory node 6",
        "mode": "waterfall",
        "tools": [
          {
            "order": 6,
            "toolId": "atmosphere-to-inch-hg-converter",
            "role": "convert operational measurements",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 6,
        "uiTitle": "Inventory node 7",
        "mode": "waterfall",
        "tools": [
          {
            "order": 7,
            "toolId": "garden-journal-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 7,
        "uiTitle": "Inventory node 8",
        "mode": "waterfall",
        "tools": [
          {
            "order": 8,
            "toolId": "invoice-memo-sentence-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-hr-recruiting-pricing-intake-to-output-022",
    "title": "HR recruiting pricing intake-to-output workflow",
    "field": "HR recruiting",
    "businessFunction": "pricing",
    "groupId": "group-pricing-intake-to-output",
    "outcome": "Use compatible pricing tools to turn raw input into a ready-to-use output for HR recruiting.",
    "prompt": "Build a 16-panel workflow for HR recruiting: turn raw input into a ready-to-use output using pricing tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste HR recruiting notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible pricing chain.",
    "complexity": "standard-16",
    "layout": "4x4",
    "executionMode": "waterfall",
    "toolCount": 16,
    "panelCount": 16,
    "maxNestedUiDepth": 1,
    "tags": [
      "hr-recruiting",
      "pricing",
      "intake-to-output",
      "standard-16"
    ],
    "compatibilitySummary": "16 tools arranged as 16 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Pricing node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "compound-interest-calculator",
            "role": "model long-term growth or recurring gains",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "Pricing node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 2,
            "toolId": "product-listing-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 2,
        "uiTitle": "Pricing node 3",
        "mode": "waterfall",
        "tools": [
          {
            "order": 3,
            "toolId": "file-name-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 3,
        "uiTitle": "Pricing node 4",
        "mode": "waterfall",
        "tools": [
          {
            "order": 4,
            "toolId": "html-block-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 4,
        "uiTitle": "Pricing node 5",
        "mode": "waterfall",
        "tools": [
          {
            "order": 5,
            "toolId": "store-order-total-calculator",
            "role": "calculate invoice totals from line-item assumptions",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 5,
        "uiTitle": "Pricing node 6",
        "mode": "waterfall",
        "tools": [
          {
            "order": 6,
            "toolId": "video-script-division-calculator",
            "role": "run a lightweight business formula",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 6,
        "uiTitle": "Pricing node 7",
        "mode": "waterfall",
        "tools": [
          {
            "order": 7,
            "toolId": "compound-interest-calculator",
            "role": "model long-term growth or recurring gains",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 7,
        "uiTitle": "Pricing node 8",
        "mode": "waterfall",
        "tools": [
          {
            "order": 8,
            "toolId": "xml-node-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 8,
        "uiTitle": "Pricing node 9",
        "mode": "waterfall",
        "tools": [
          {
            "order": 9,
            "toolId": "blog-post-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 9,
        "uiTitle": "Pricing node 10",
        "mode": "waterfall",
        "tools": [
          {
            "order": 10,
            "toolId": "customer-reply-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 10,
        "uiTitle": "Pricing node 11",
        "mode": "waterfall",
        "tools": [
          {
            "order": 11,
            "toolId": "subscription-invoice-total-calculator",
            "role": "calculate invoice totals from line-item assumptions",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 11,
        "uiTitle": "Pricing node 12",
        "mode": "waterfall",
        "tools": [
          {
            "order": 12,
            "toolId": "url-slug-average-calculator",
            "role": "run a lightweight business formula",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 12,
        "uiTitle": "Pricing node 13",
        "mode": "waterfall",
        "tools": [
          {
            "order": 13,
            "toolId": "compound-interest-calculator",
            "role": "model long-term growth or recurring gains",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 13,
        "uiTitle": "Pricing node 14",
        "mode": "waterfall",
        "tools": [
          {
            "order": 14,
            "toolId": "header-value-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 14,
        "uiTitle": "Pricing node 15",
        "mode": "waterfall",
        "tools": [
          {
            "order": 15,
            "toolId": "press-release-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 15,
        "uiTitle": "Pricing node 16",
        "mode": "waterfall",
        "tools": [
          {
            "order": 16,
            "toolId": "seo-title-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-hr-recruiting-outreach-intake-to-output-023",
    "title": "HR recruiting outreach intake-to-output workflow",
    "field": "HR recruiting",
    "businessFunction": "outreach",
    "groupId": "group-outreach-intake-to-output",
    "outcome": "Use compatible outreach tools to turn raw input into a ready-to-use output for HR recruiting.",
    "prompt": "Build a 8-panel workflow for HR recruiting: turn raw input into a ready-to-use output using outreach tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste HR recruiting notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible outreach chain.",
    "complexity": "mid-8",
    "layout": "4x2",
    "executionMode": "hybrid",
    "toolCount": 8,
    "panelCount": 8,
    "maxNestedUiDepth": 1,
    "tags": [
      "hr-recruiting",
      "outreach",
      "intake-to-output",
      "mid-8"
    ],
    "compatibilitySummary": "8 tools arranged as 8 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Outreach node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "csv-cell-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "Outreach node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 2,
            "toolId": "html-block-blank-line-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 2,
        "uiTitle": "Outreach node 3",
        "mode": "waterfall",
        "tools": [
          {
            "order": 3,
            "toolId": "image-tool-page-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 3,
        "uiTitle": "Outreach node 4",
        "mode": "waterfall",
        "tools": [
          {
            "order": 4,
            "toolId": "pinterest-pin-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 4,
        "uiTitle": "Outreach node 5",
        "mode": "waterfall",
        "tools": [
          {
            "order": 5,
            "toolId": "callback-url-base64-encoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 5,
        "uiTitle": "Outreach node 6",
        "mode": "waterfall",
        "tools": [
          {
            "order": 6,
            "toolId": "tiktok-caption-keyword-density-checker",
            "role": "extract keyword usage from project text",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 6,
        "uiTitle": "Outreach node 7",
        "mode": "waterfall",
        "tools": [
          {
            "order": 7,
            "toolId": "meta-description-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 7,
        "uiTitle": "Outreach node 8",
        "mode": "waterfall",
        "tools": [
          {
            "order": 8,
            "toolId": "sitemap-entry-find-and-replace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-hr-recruiting-research-intake-to-output-024",
    "title": "HR recruiting research intake-to-output workflow",
    "field": "HR recruiting",
    "businessFunction": "research",
    "groupId": "group-research-intake-to-output",
    "outcome": "Use compatible research tools to turn raw input into a ready-to-use output for HR recruiting.",
    "prompt": "Build a micro workflow for HR recruiting: turn raw input into a ready-to-use output using research tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste HR recruiting notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible research chain.",
    "complexity": "micro-2-4",
    "layout": "1x1",
    "executionMode": "compact-waterfall",
    "toolCount": 3,
    "panelCount": 1,
    "maxNestedUiDepth": 3,
    "tags": [
      "hr-recruiting",
      "research",
      "intake-to-output",
      "micro-2-4"
    ],
    "compatibilitySummary": "3 tools arranged as 1 panel UI; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Research node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "newsletter-campaign-keyword-density-checker",
            "role": "extract keyword usage from project text",
            "uiDepth": 2
          },
          {
            "order": 3,
            "toolId": "instagram-caption-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          }
        ]
      }
    ]
  },
  {
    "id": "project-hr-recruiting-project-management-intake-to-output-025",
    "title": "HR recruiting project management intake-to-output workflow",
    "field": "HR recruiting",
    "businessFunction": "project management",
    "groupId": "group-project-management-intake-to-output",
    "outcome": "Use compatible project management tools to turn raw input into a ready-to-use output for HR recruiting.",
    "prompt": "Build a 64-tool nested waterfall for HR recruiting: turn raw input into a ready-to-use output using project management tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste HR recruiting notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible project management chain.",
    "complexity": "nested-64",
    "layout": "4x4",
    "executionMode": "nested-waterfall",
    "toolCount": 64,
    "panelCount": 16,
    "maxNestedUiDepth": 4,
    "tags": [
      "hr-recruiting",
      "project-management",
      "intake-to-output",
      "nested-64"
    ],
    "compatibilitySummary": "64 tools arranged as 16 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Project management node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "youtube-description-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "schema-text-trim-whitespace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 3,
            "toolId": "log-line-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 4,
            "toolId": "header-value-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "Project management node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 5,
            "toolId": "domain-list-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 6,
            "toolId": "blog-post-add-days-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 2
          },
          {
            "order": 7,
            "toolId": "landing-page-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 3
          },
          {
            "order": 8,
            "toolId": "folder-name-extra-space-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 2,
        "uiTitle": "Project management node 3",
        "mode": "waterfall",
        "tools": [
          {
            "order": 9,
            "toolId": "svg-snippet-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 10,
            "toolId": "yaml-value-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 2
          },
          {
            "order": 11,
            "toolId": "url-slug-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 12,
            "toolId": "youtube-description-add-days-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 3,
        "uiTitle": "Project management node 4",
        "mode": "waterfall",
        "tools": [
          {
            "order": 13,
            "toolId": "facebook-bio-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          },
          {
            "order": 14,
            "toolId": "schema-text-lowercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 15,
            "toolId": "email-body-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 16,
            "toolId": "python-string-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 4,
        "uiTitle": "Project management node 5",
        "mode": "waterfall",
        "tools": [
          {
            "order": 17,
            "toolId": "meta-description-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 18,
            "toolId": "seo-title-add-days-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 2
          },
          {
            "order": 19,
            "toolId": "url-slug-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 3
          },
          {
            "order": 20,
            "toolId": "file-name-text-reverser",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 5,
        "uiTitle": "Project management node 6",
        "mode": "waterfall",
        "tools": [
          {
            "order": 21,
            "toolId": "plant-care-notes-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 22,
            "toolId": "garden-journal-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 2
          },
          {
            "order": 23,
            "toolId": "garden-journal-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 24,
            "toolId": "product-listing-add-days-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 6,
        "uiTitle": "Project management node 7",
        "mode": "waterfall",
        "tools": [
          {
            "order": 25,
            "toolId": "keyword-list-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          },
          {
            "order": 26,
            "toolId": "resume-bullet-trim-whitespace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 27,
            "toolId": "webhook-body-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 28,
            "toolId": "worker-route-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 7,
        "uiTitle": "Project management node 8",
        "mode": "waterfall",
        "tools": [
          {
            "order": 29,
            "toolId": "code-comment-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 30,
            "toolId": "plant-care-notes-add-days-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 2
          },
          {
            "order": 31,
            "toolId": "email-subject-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 3
          },
          {
            "order": 32,
            "toolId": "file-name-extra-space-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 8,
        "uiTitle": "Project management node 9",
        "mode": "waterfall",
        "tools": [
          {
            "order": 33,
            "toolId": "garden-journal-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 34,
            "toolId": "product-listing-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 2
          },
          {
            "order": 35,
            "toolId": "recipe-notes-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 36,
            "toolId": "meta-description-add-days-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 9,
        "uiTitle": "Project management node 10",
        "mode": "waterfall",
        "tools": [
          {
            "order": 37,
            "toolId": "seo-title-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          },
          {
            "order": 38,
            "toolId": "resume-bullet-lowercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 39,
            "toolId": "recipe-notes-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 40,
            "toolId": "facebook-bio-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 10,
        "uiTitle": "Project management node 11",
        "mode": "waterfall",
        "tools": [
          {
            "order": 41,
            "toolId": "keyword-list-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 42,
            "toolId": "landing-page-add-days-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 2
          },
          {
            "order": 43,
            "toolId": "json-snippet-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 3
          },
          {
            "order": 44,
            "toolId": "facebook-bio-text-reverser",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 11,
        "uiTitle": "Project management node 12",
        "mode": "waterfall",
        "tools": [
          {
            "order": 45,
            "toolId": "base-url-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 46,
            "toolId": "uuid-list-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 2
          },
          {
            "order": 47,
            "toolId": "facebook-bio-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 48,
            "toolId": "json-snippet-add-days-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 12,
        "uiTitle": "Project management node 13",
        "mode": "waterfall",
        "tools": [
          {
            "order": 49,
            "toolId": "domain-list-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          },
          {
            "order": 50,
            "toolId": "recipe-notes-trim-whitespace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 51,
            "toolId": "invoice-memo-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 52,
            "toolId": "plant-care-notes-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 13,
        "uiTitle": "Project management node 14",
        "mode": "waterfall",
        "tools": [
          {
            "order": 53,
            "toolId": "ad-copy-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 54,
            "toolId": "instagram-caption-add-days-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 2
          },
          {
            "order": 55,
            "toolId": "recipe-notes-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 3
          },
          {
            "order": 56,
            "toolId": "facebook-bio-extra-space-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 14,
        "uiTitle": "Project management node 15",
        "mode": "waterfall",
        "tools": [
          {
            "order": 57,
            "toolId": "search-query-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 58,
            "toolId": "environment-value-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 2
          },
          {
            "order": 59,
            "toolId": "podcast-notes-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 60,
            "toolId": "hashtag-set-add-days-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 15,
        "uiTitle": "Project management node 16",
        "mode": "waterfall",
        "tools": [
          {
            "order": 61,
            "toolId": "invoice-memo-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          },
          {
            "order": 62,
            "toolId": "recipe-notes-lowercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 63,
            "toolId": "cookie-value-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 64,
            "toolId": "tracking-link-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 4
          }
        ]
      }
    ]
  },
  {
    "id": "project-hr-recruiting-marketing-audit-026",
    "title": "HR recruiting marketing audit workflow",
    "field": "HR recruiting",
    "businessFunction": "marketing",
    "groupId": "group-marketing-audit",
    "outcome": "Use compatible marketing tools to audit the current state and create a prioritized fix list for HR recruiting.",
    "prompt": "Build a micro workflow for HR recruiting: audit the current state and create a prioritized fix list using marketing tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste HR recruiting notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible marketing chain.",
    "complexity": "micro-2-4",
    "layout": "2x1",
    "executionMode": "compact-waterfall",
    "toolCount": 4,
    "panelCount": 2,
    "maxNestedUiDepth": 2,
    "tags": [
      "hr-recruiting",
      "marketing",
      "audit",
      "micro-2-4"
    ],
    "compatibilitySummary": "4 tools arranged as 2 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Marketing node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "tool-page-keyword-density-checker",
            "role": "extract keyword usage from project text",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "affiliate-page-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "Marketing node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 3,
            "toolId": "press-release-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 4,
            "toolId": "user-message-html-unescaper",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 2
          }
        ]
      }
    ]
  },
  {
    "id": "project-hr-recruiting-sales-audit-027",
    "title": "HR recruiting sales audit workflow",
    "field": "HR recruiting",
    "businessFunction": "sales",
    "groupId": "group-sales-audit",
    "outcome": "Use compatible sales tools to audit the current state and create a prioritized fix list for HR recruiting.",
    "prompt": "Build a 8-panel workflow for HR recruiting: audit the current state and create a prioritized fix list using sales tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste HR recruiting notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible sales chain.",
    "complexity": "mid-8",
    "layout": "4x2",
    "executionMode": "hybrid",
    "toolCount": 8,
    "panelCount": 8,
    "maxNestedUiDepth": 1,
    "tags": [
      "hr-recruiting",
      "sales",
      "audit",
      "mid-8"
    ],
    "compatibilitySummary": "8 tools arranged as 8 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Sales node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "csv-export-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "Sales node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 2,
            "toolId": "css-class-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 2,
        "uiTitle": "Sales node 3",
        "mode": "waterfall",
        "tools": [
          {
            "order": 3,
            "toolId": "cloudflare-rule-html-unescaper",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 3,
        "uiTitle": "Sales node 4",
        "mode": "waterfall",
        "tools": [
          {
            "order": 4,
            "toolId": "email-body-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 4,
        "uiTitle": "Sales node 5",
        "mode": "waterfall",
        "tools": [
          {
            "order": 5,
            "toolId": "landing-page-trim-whitespace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 5,
        "uiTitle": "Sales node 6",
        "mode": "waterfall",
        "tools": [
          {
            "order": 6,
            "toolId": "product-listing-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 6,
        "uiTitle": "Sales node 7",
        "mode": "waterfall",
        "tools": [
          {
            "order": 7,
            "toolId": "resume-bullet-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 7,
        "uiTitle": "Sales node 8",
        "mode": "waterfall",
        "tools": [
          {
            "order": 8,
            "toolId": "markdown-link-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-hr-recruiting-support-audit-028",
    "title": "HR recruiting customer support audit workflow",
    "field": "HR recruiting",
    "businessFunction": "customer support",
    "groupId": "group-support-audit",
    "outcome": "Use compatible customer support tools to audit the current state and create a prioritized fix list for HR recruiting.",
    "prompt": "Build a 16-panel workflow for HR recruiting: audit the current state and create a prioritized fix list using customer support tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste HR recruiting notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible customer support chain.",
    "complexity": "standard-16",
    "layout": "4x4",
    "executionMode": "waterfall",
    "toolCount": 16,
    "panelCount": 16,
    "maxNestedUiDepth": 1,
    "tags": [
      "hr-recruiting",
      "support",
      "audit",
      "standard-16"
    ],
    "compatibilitySummary": "16 tools arranged as 16 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Customer support node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "sql-snippet-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "Customer support node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 2,
            "toolId": "robots-rule-json-minifier",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 2,
        "uiTitle": "Customer support node 3",
        "mode": "waterfall",
        "tools": [
          {
            "order": 3,
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 3,
        "uiTitle": "Customer support node 4",
        "mode": "waterfall",
        "tools": [
          {
            "order": 4,
            "toolId": "podcast-notes-blank-line-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 4,
        "uiTitle": "Customer support node 5",
        "mode": "waterfall",
        "tools": [
          {
            "order": 5,
            "toolId": "uuid-list-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 5,
        "uiTitle": "Customer support node 6",
        "mode": "waterfall",
        "tools": [
          {
            "order": 6,
            "toolId": "blog-post-add-months-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 6,
        "uiTitle": "Customer support node 7",
        "mode": "waterfall",
        "tools": [
          {
            "order": 7,
            "toolId": "log-line-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 7,
        "uiTitle": "Customer support node 8",
        "mode": "waterfall",
        "tools": [
          {
            "order": 8,
            "toolId": "csv-cell-json-formatter",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 8,
        "uiTitle": "Customer support node 9",
        "mode": "waterfall",
        "tools": [
          {
            "order": 9,
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 9,
        "uiTitle": "Customer support node 10",
        "mode": "waterfall",
        "tools": [
          {
            "order": 10,
            "toolId": "csv-export-find-and-replace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 10,
        "uiTitle": "Customer support node 11",
        "mode": "waterfall",
        "tools": [
          {
            "order": 11,
            "toolId": "form-payload-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 11,
        "uiTitle": "Customer support node 12",
        "mode": "waterfall",
        "tools": [
          {
            "order": 12,
            "toolId": "youtube-description-add-months-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 12,
        "uiTitle": "Customer support node 13",
        "mode": "waterfall",
        "tools": [
          {
            "order": 13,
            "toolId": "css-class-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 13,
        "uiTitle": "Customer support node 14",
        "mode": "waterfall",
        "tools": [
          {
            "order": 14,
            "toolId": "python-string-json-minifier",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 14,
        "uiTitle": "Customer support node 15",
        "mode": "waterfall",
        "tools": [
          {
            "order": 15,
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 15,
        "uiTitle": "Customer support node 16",
        "mode": "waterfall",
        "tools": [
          {
            "order": 16,
            "toolId": "plant-care-notes-slug-generator",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-hr-recruiting-operations-audit-029",
    "title": "HR recruiting operations audit workflow",
    "field": "HR recruiting",
    "businessFunction": "operations",
    "groupId": "group-operations-audit",
    "outcome": "Use compatible operations tools to audit the current state and create a prioritized fix list for HR recruiting.",
    "prompt": "Build a 8-panel workflow for HR recruiting: audit the current state and create a prioritized fix list using operations tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste HR recruiting notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible operations chain.",
    "complexity": "mid-8",
    "layout": "2x4",
    "executionMode": "hybrid",
    "toolCount": 8,
    "panelCount": 8,
    "maxNestedUiDepth": 1,
    "tags": [
      "hr-recruiting",
      "operations",
      "audit",
      "mid-8"
    ],
    "compatibilitySummary": "8 tools arranged as 8 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Operations node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "order-note-trim-whitespace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "Operations node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 2,
            "toolId": "hashtag-set-add-weeks-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 2,
        "uiTitle": "Operations node 3",
        "mode": "waterfall",
        "tools": [
          {
            "order": 3,
            "toolId": "blog-post-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 3,
        "uiTitle": "Operations node 4",
        "mode": "waterfall",
        "tools": [
          {
            "order": 4,
            "toolId": "url-slug-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 4,
        "uiTitle": "Operations node 5",
        "mode": "waterfall",
        "tools": [
          {
            "order": 5,
            "toolId": "image-alt-text-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 5,
        "uiTitle": "Operations node 6",
        "mode": "waterfall",
        "tools": [
          {
            "order": 6,
            "toolId": "press-release-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 6,
        "uiTitle": "Operations node 7",
        "mode": "waterfall",
        "tools": [
          {
            "order": 7,
            "toolId": "cover-letter-blank-line-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 7,
        "uiTitle": "Operations node 8",
        "mode": "waterfall",
        "tools": [
          {
            "order": 8,
            "toolId": "folder-name-add-months-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-hr-recruiting-finance-audit-030",
    "title": "HR recruiting finance audit workflow",
    "field": "HR recruiting",
    "businessFunction": "finance",
    "groupId": "group-finance-audit",
    "outcome": "Use compatible finance tools to audit the current state and create a prioritized fix list for HR recruiting.",
    "prompt": "Build a 32-tool nested workbench for HR recruiting: audit the current state and create a prioritized fix list using finance tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste HR recruiting notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible finance chain.",
    "complexity": "advanced-32",
    "layout": "4x4",
    "executionMode": "hybrid-waterfall",
    "toolCount": 32,
    "panelCount": 16,
    "maxNestedUiDepth": 2,
    "tags": [
      "hr-recruiting",
      "finance",
      "audit",
      "advanced-32"
    ],
    "compatibilitySummary": "32 tools arranged as 16 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Finance node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "digital-product-order-total-calculator",
            "role": "calculate invoice totals from line-item assumptions",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "seo-title-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "Finance node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 3,
            "toolId": "ad-copy-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 1
          },
          {
            "order": 4,
            "toolId": "compound-interest-calculator",
            "role": "model long-term growth or recurring gains",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 2,
        "uiTitle": "Finance node 3",
        "mode": "waterfall",
        "tools": [
          {
            "order": 5,
            "toolId": "loan-payment-calculator",
            "role": "estimate payment obligations",
            "uiDepth": 1
          },
          {
            "order": 6,
            "toolId": "instagram-caption-subtraction-calculator",
            "role": "run a lightweight business formula",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 3,
        "uiTitle": "Finance node 4",
        "mode": "waterfall",
        "tools": [
          {
            "order": 7,
            "toolId": "donation-receipt-total-calculator",
            "role": "calculate invoice totals from line-item assumptions",
            "uiDepth": 1
          },
          {
            "order": 8,
            "toolId": "markdown-doc-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 4,
        "uiTitle": "Finance node 5",
        "mode": "waterfall",
        "tools": [
          {
            "order": 9,
            "toolId": "podcast-notes-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 1
          },
          {
            "order": 10,
            "toolId": "compound-interest-calculator",
            "role": "model long-term growth or recurring gains",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 5,
        "uiTitle": "Finance node 6",
        "mode": "waterfall",
        "tools": [
          {
            "order": 11,
            "toolId": "loan-payment-calculator",
            "role": "estimate payment obligations",
            "uiDepth": 1
          },
          {
            "order": 12,
            "toolId": "html-block-multiplication-calculator",
            "role": "run a lightweight business formula",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 6,
        "uiTitle": "Finance node 7",
        "mode": "waterfall",
        "tools": [
          {
            "order": 13,
            "toolId": "freelance-invoice-total-calculator",
            "role": "calculate invoice totals from line-item assumptions",
            "uiDepth": 1
          },
          {
            "order": 14,
            "toolId": "folder-name-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 7,
        "uiTitle": "Finance node 8",
        "mode": "waterfall",
        "tools": [
          {
            "order": 15,
            "toolId": "instagram-caption-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 1
          },
          {
            "order": 16,
            "toolId": "compound-interest-calculator",
            "role": "model long-term growth or recurring gains",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 8,
        "uiTitle": "Finance node 9",
        "mode": "waterfall",
        "tools": [
          {
            "order": 17,
            "toolId": "loan-payment-calculator",
            "role": "estimate payment obligations",
            "uiDepth": 1
          },
          {
            "order": 18,
            "toolId": "hashtag-set-box-volume-calculator",
            "role": "run a lightweight business formula",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 9,
        "uiTitle": "Finance node 10",
        "mode": "waterfall",
        "tools": [
          {
            "order": 19,
            "toolId": "plant-sale-order-total-calculator",
            "role": "calculate invoice totals from line-item assumptions",
            "uiDepth": 1
          },
          {
            "order": 20,
            "toolId": "brand-name-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 10,
        "uiTitle": "Finance node 11",
        "mode": "waterfall",
        "tools": [
          {
            "order": 21,
            "toolId": "domain-list-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 1
          },
          {
            "order": 22,
            "toolId": "compound-interest-calculator",
            "role": "model long-term growth or recurring gains",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 11,
        "uiTitle": "Finance node 12",
        "mode": "waterfall",
        "tools": [
          {
            "order": 23,
            "toolId": "loan-payment-calculator",
            "role": "estimate payment obligations",
            "uiDepth": 1
          },
          {
            "order": 24,
            "toolId": "garden-journal-addition-calculator",
            "role": "run a lightweight business formula",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 12,
        "uiTitle": "Finance node 13",
        "mode": "waterfall",
        "tools": [
          {
            "order": 25,
            "toolId": "project-estimate-total-calculator",
            "role": "calculate invoice totals from line-item assumptions",
            "uiDepth": 1
          },
          {
            "order": 26,
            "toolId": "product-listing-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 13,
        "uiTitle": "Finance node 14",
        "mode": "waterfall",
        "tools": [
          {
            "order": 27,
            "toolId": "url-slug-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 1
          },
          {
            "order": 28,
            "toolId": "compound-interest-calculator",
            "role": "model long-term growth or recurring gains",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 14,
        "uiTitle": "Finance node 15",
        "mode": "waterfall",
        "tools": [
          {
            "order": 29,
            "toolId": "loan-payment-calculator",
            "role": "estimate payment obligations",
            "uiDepth": 1
          },
          {
            "order": 30,
            "toolId": "file-name-rectangle-area-calculator",
            "role": "run a lightweight business formula",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 15,
        "uiTitle": "Finance node 16",
        "mode": "waterfall",
        "tools": [
          {
            "order": 31,
            "toolId": "raffle-order-total-calculator",
            "role": "calculate invoice totals from line-item assumptions",
            "uiDepth": 1
          },
          {
            "order": 32,
            "toolId": "json-snippet-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 2
          }
        ]
      }
    ]
  },
  {
    "id": "project-hr-recruiting-hr-audit-031",
    "title": "HR recruiting HR audit workflow",
    "field": "HR recruiting",
    "businessFunction": "HR",
    "groupId": "group-hr-audit",
    "outcome": "Use compatible HR tools to audit the current state and create a prioritized fix list for HR recruiting.",
    "prompt": "Build a 16-panel workflow for HR recruiting: audit the current state and create a prioritized fix list using HR tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste HR recruiting notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible HR chain.",
    "complexity": "standard-16",
    "layout": "4x4",
    "executionMode": "waterfall",
    "toolCount": 16,
    "panelCount": 16,
    "maxNestedUiDepth": 1,
    "tags": [
      "hr-recruiting",
      "hr",
      "audit",
      "standard-16"
    ],
    "compatibilitySummary": "16 tools arranged as 16 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "HR node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "html-block-add-days-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "HR node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 2,
            "toolId": "invoice-memo-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 2,
        "uiTitle": "HR node 3",
        "mode": "waterfall",
        "tools": [
          {
            "order": 3,
            "toolId": "redirect-url-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 3,
        "uiTitle": "HR node 4",
        "mode": "waterfall",
        "tools": [
          {
            "order": 4,
            "toolId": "brand-name-password-generator",
            "role": "create secure passwords for the project",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 4,
        "uiTitle": "HR node 5",
        "mode": "waterfall",
        "tools": [
          {
            "order": 5,
            "toolId": "environment-value-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 5,
        "uiTitle": "HR node 6",
        "mode": "waterfall",
        "tools": [
          {
            "order": 6,
            "toolId": "keyword-list-find-and-replace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 6,
        "uiTitle": "HR node 7",
        "mode": "waterfall",
        "tools": [
          {
            "order": 7,
            "toolId": "garden-journal-add-days-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 7,
        "uiTitle": "HR node 8",
        "mode": "waterfall",
        "tools": [
          {
            "order": 8,
            "toolId": "customer-reply-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 8,
        "uiTitle": "HR node 9",
        "mode": "waterfall",
        "tools": [
          {
            "order": 9,
            "toolId": "html-snippet-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 9,
        "uiTitle": "HR node 10",
        "mode": "waterfall",
        "tools": [
          {
            "order": 10,
            "toolId": "markdown-doc-password-generator",
            "role": "create secure passwords for the project",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 10,
        "uiTitle": "HR node 11",
        "mode": "waterfall",
        "tools": [
          {
            "order": 11,
            "toolId": "product-listing-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 11,
        "uiTitle": "HR node 12",
        "mode": "waterfall",
        "tools": [
          {
            "order": 12,
            "toolId": "youtube-description-sentence-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 12,
        "uiTitle": "HR node 13",
        "mode": "waterfall",
        "tools": [
          {
            "order": 13,
            "toolId": "facebook-bio-add-years-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 13,
        "uiTitle": "HR node 14",
        "mode": "waterfall",
        "tools": [
          {
            "order": 14,
            "toolId": "product-listing-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 14,
        "uiTitle": "HR node 15",
        "mode": "waterfall",
        "tools": [
          {
            "order": 15,
            "toolId": "youtube-description-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 15,
        "uiTitle": "HR node 16",
        "mode": "waterfall",
        "tools": [
          {
            "order": 16,
            "toolId": "support-ticket-password-generator",
            "role": "create secure passwords for the project",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-hr-recruiting-content-audit-032",
    "title": "HR recruiting content audit workflow",
    "field": "HR recruiting",
    "businessFunction": "content",
    "groupId": "group-content-audit",
    "outcome": "Use compatible content tools to audit the current state and create a prioritized fix list for HR recruiting.",
    "prompt": "Build a micro workflow for HR recruiting: audit the current state and create a prioritized fix list using content tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste HR recruiting notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible content chain.",
    "complexity": "micro-2-4",
    "layout": "1x1",
    "executionMode": "compact-waterfall",
    "toolCount": 3,
    "panelCount": 1,
    "maxNestedUiDepth": 3,
    "tags": [
      "hr-recruiting",
      "content",
      "audit",
      "micro-2-4"
    ],
    "compatibilitySummary": "3 tools arranged as 1 panel UI; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Content node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "developer-tool-page-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "facebook-post-keyword-density-checker",
            "role": "extract keyword usage from project text",
            "uiDepth": 2
          },
          {
            "order": 3,
            "toolId": "email-subject-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          }
        ]
      }
    ]
  },
  {
    "id": "project-hr-recruiting-seo-audit-033",
    "title": "HR recruiting SEO audit workflow",
    "field": "HR recruiting",
    "businessFunction": "SEO",
    "groupId": "group-seo-audit",
    "outcome": "Use compatible SEO tools to audit the current state and create a prioritized fix list for HR recruiting.",
    "prompt": "Build a 8-panel workflow for HR recruiting: audit the current state and create a prioritized fix list using SEO tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste HR recruiting notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible SEO chain.",
    "complexity": "mid-8",
    "layout": "2x4",
    "executionMode": "hybrid",
    "toolCount": 8,
    "panelCount": 8,
    "maxNestedUiDepth": 1,
    "tags": [
      "hr-recruiting",
      "seo",
      "audit",
      "mid-8"
    ],
    "compatibilitySummary": "8 tools arranged as 8 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "SEO node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "store-url-base64-encoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "SEO node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 2,
            "toolId": "newsletter-find-and-replace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 2,
        "uiTitle": "SEO node 3",
        "mode": "waterfall",
        "tools": [
          {
            "order": 3,
            "toolId": "header-value-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 3,
        "uiTitle": "SEO node 4",
        "mode": "waterfall",
        "tools": [
          {
            "order": 4,
            "toolId": "review-page-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 4,
        "uiTitle": "SEO node 5",
        "mode": "waterfall",
        "tools": [
          {
            "order": 5,
            "toolId": "tiktok-caption-keyword-density-checker",
            "role": "extract keyword usage from project text",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 5,
        "uiTitle": "SEO node 6",
        "mode": "waterfall",
        "tools": [
          {
            "order": 6,
            "toolId": "about-page-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 6,
        "uiTitle": "SEO node 7",
        "mode": "waterfall",
        "tools": [
          {
            "order": 7,
            "toolId": "pages-url-base64-encoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 7,
        "uiTitle": "SEO node 8",
        "mode": "waterfall",
        "tools": [
          {
            "order": 8,
            "toolId": "community-rule-sentence-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-hr-recruiting-social-audit-034",
    "title": "HR recruiting social media audit workflow",
    "field": "HR recruiting",
    "businessFunction": "social media",
    "groupId": "group-social-audit",
    "outcome": "Use compatible social media tools to audit the current state and create a prioritized fix list for HR recruiting.",
    "prompt": "Build a 16-panel workflow for HR recruiting: audit the current state and create a prioritized fix list using social media tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste HR recruiting notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible social media chain.",
    "complexity": "standard-16",
    "layout": "4x4",
    "executionMode": "waterfall",
    "toolCount": 16,
    "panelCount": 16,
    "maxNestedUiDepth": 1,
    "tags": [
      "hr-recruiting",
      "social",
      "audit",
      "standard-16"
    ],
    "compatibilitySummary": "16 tools arranged as 16 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Social media node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "commit-message-html-escaper",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "Social media node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 2,
            "toolId": "tool-url-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 2,
        "uiTitle": "Social media node 3",
        "mode": "waterfall",
        "tools": [
          {
            "order": 3,
            "toolId": "sitemap-entry-trim-whitespace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 3,
        "uiTitle": "Social media node 4",
        "mode": "waterfall",
        "tools": [
          {
            "order": 4,
            "toolId": "category-page-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 4,
        "uiTitle": "Social media node 5",
        "mode": "waterfall",
        "tools": [
          {
            "order": 5,
            "toolId": "blog-post-keyword-density-checker",
            "role": "extract keyword usage from project text",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 5,
        "uiTitle": "Social media node 6",
        "mode": "waterfall",
        "tools": [
          {
            "order": 6,
            "toolId": "converter-page-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 6,
        "uiTitle": "Social media node 7",
        "mode": "waterfall",
        "tools": [
          {
            "order": 7,
            "toolId": "tool-url-html-escaper",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 7,
        "uiTitle": "Social media node 8",
        "mode": "waterfall",
        "tools": [
          {
            "order": 8,
            "toolId": "environment-value-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 8,
        "uiTitle": "Social media node 9",
        "mode": "waterfall",
        "tools": [
          {
            "order": 9,
            "toolId": "html-block-extra-space-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 9,
        "uiTitle": "Social media node 10",
        "mode": "waterfall",
        "tools": [
          {
            "order": 10,
            "toolId": "plant-profile-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 10,
        "uiTitle": "Social media node 11",
        "mode": "waterfall",
        "tools": [
          {
            "order": 11,
            "toolId": "review-page-keyword-density-checker",
            "role": "extract keyword usage from project text",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 11,
        "uiTitle": "Social media node 12",
        "mode": "waterfall",
        "tools": [
          {
            "order": 12,
            "toolId": "youtube-description-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 12,
        "uiTitle": "Social media node 13",
        "mode": "waterfall",
        "tools": [
          {
            "order": 13,
            "toolId": "query-string-html-escaper",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 13,
        "uiTitle": "Social media node 14",
        "mode": "waterfall",
        "tools": [
          {
            "order": 14,
            "toolId": "product-listing-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 14,
        "uiTitle": "Social media node 15",
        "mode": "waterfall",
        "tools": [
          {
            "order": 15,
            "toolId": "sitemap-entry-lowercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 15,
        "uiTitle": "Social media node 16",
        "mode": "waterfall",
        "tools": [
          {
            "order": 16,
            "toolId": "converter-page-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-hr-recruiting-email-audit-035",
    "title": "HR recruiting email audit workflow",
    "field": "HR recruiting",
    "businessFunction": "email",
    "groupId": "group-email-audit",
    "outcome": "Use compatible email tools to audit the current state and create a prioritized fix list for HR recruiting.",
    "prompt": "Build a 64-tool nested waterfall for HR recruiting: audit the current state and create a prioritized fix list using email tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste HR recruiting notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible email chain.",
    "complexity": "nested-64",
    "layout": "4x4",
    "executionMode": "nested-waterfall",
    "toolCount": 64,
    "panelCount": 16,
    "maxNestedUiDepth": 4,
    "tags": [
      "hr-recruiting",
      "email",
      "audit",
      "nested-64"
    ],
    "compatibilitySummary": "64 tools arranged as 16 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Email node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "javascript-string-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "brand-name-blank-line-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 3,
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
            "uiDepth": 3
          },
          {
            "order": 4,
            "toolId": "homepage-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "Email node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 5,
            "toolId": "facebook-post-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 1
          },
          {
            "order": 6,
            "toolId": "callback-url-html-escaper",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 2
          },
          {
            "order": 7,
            "toolId": "seo-title-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 8,
            "toolId": "markdown-doc-lowercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 2,
        "uiTitle": "Email node 3",
        "mode": "waterfall",
        "tools": [
          {
            "order": 9,
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
            "uiDepth": 1
          },
          {
            "order": 10,
            "toolId": "about-page-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 2
          },
          {
            "order": 11,
            "toolId": "affiliate-page-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 3
          },
          {
            "order": 12,
            "toolId": "store-url-html-escaper",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 3,
        "uiTitle": "Email node 4",
        "mode": "waterfall",
        "tools": [
          {
            "order": 13,
            "toolId": "csv-cell-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 14,
            "toolId": "blog-post-slug-generator",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 15,
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
            "uiDepth": 3
          },
          {
            "order": 16,
            "toolId": "instagram-reel-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 4,
        "uiTitle": "Email node 5",
        "mode": "waterfall",
        "tools": [
          {
            "order": 17,
            "toolId": "product-page-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 1
          },
          {
            "order": 18,
            "toolId": "pages-url-html-escaper",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 2
          },
          {
            "order": 19,
            "toolId": "meta-description-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 20,
            "toolId": "landing-page-trim-whitespace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 5,
        "uiTitle": "Email node 6",
        "mode": "waterfall",
        "tools": [
          {
            "order": 21,
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
            "uiDepth": 1
          },
          {
            "order": 22,
            "toolId": "blog-article-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 2
          },
          {
            "order": 23,
            "toolId": "image-tool-page-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 3
          },
          {
            "order": 24,
            "toolId": "error-message-html-escaper",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 6,
        "uiTitle": "Email node 7",
        "mode": "waterfall",
        "tools": [
          {
            "order": 25,
            "toolId": "tool-url-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 26,
            "toolId": "blog-post-blank-line-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 27,
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
            "uiDepth": 3
          },
          {
            "order": 28,
            "toolId": "local-service-page-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 7,
        "uiTitle": "Email node 8",
        "mode": "waterfall",
        "tools": [
          {
            "order": 29,
            "toolId": "converter-page-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 1
          },
          {
            "order": 30,
            "toolId": "api-token-html-escaper",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 2
          },
          {
            "order": 31,
            "toolId": "environment-value-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 32,
            "toolId": "landing-page-lowercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 8,
        "uiTitle": "Email node 9",
        "mode": "waterfall",
        "tools": [
          {
            "order": 33,
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
            "uiDepth": 1
          },
          {
            "order": 34,
            "toolId": "calculator-page-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 2
          },
          {
            "order": 35,
            "toolId": "youtube-description-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 3
          },
          {
            "order": 36,
            "toolId": "sitemap-url-html-escaper",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 9,
        "uiTitle": "Email node 10",
        "mode": "waterfall",
        "tools": [
          {
            "order": 37,
            "toolId": "product-listing-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 38,
            "toolId": "ad-copy-slug-generator",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 39,
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
            "uiDepth": 3
          },
          {
            "order": 40,
            "toolId": "pinterest-pin-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 10,
        "uiTitle": "Email node 11",
        "mode": "waterfall",
        "tools": [
          {
            "order": 41,
            "toolId": "plant-profile-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 1
          },
          {
            "order": 42,
            "toolId": "markdown-link-html-escaper",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 2
          },
          {
            "order": 43,
            "toolId": "xml-node-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 44,
            "toolId": "keyword-list-trim-whitespace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 11,
        "uiTitle": "Email node 12",
        "mode": "waterfall",
        "tools": [
          {
            "order": 45,
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
            "uiDepth": 1
          },
          {
            "order": 46,
            "toolId": "contact-page-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 2
          },
          {
            "order": 47,
            "toolId": "garden-guide-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 3
          },
          {
            "order": 48,
            "toolId": "email-body-html-escaper",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 12,
        "uiTitle": "Email node 13",
        "mode": "waterfall",
        "tools": [
          {
            "order": 49,
            "toolId": "header-value-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 50,
            "toolId": "ad-copy-blank-line-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 51,
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
            "uiDepth": 3
          },
          {
            "order": 52,
            "toolId": "policy-page-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 13,
        "uiTitle": "Email node 14",
        "mode": "waterfall",
        "tools": [
          {
            "order": 53,
            "toolId": "calculator-page-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 1
          },
          {
            "order": 54,
            "toolId": "xml-node-html-escaper",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 2
          },
          {
            "order": 55,
            "toolId": "regex-pattern-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 56,
            "toolId": "keyword-list-lowercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 14,
        "uiTitle": "Email node 15",
        "mode": "waterfall",
        "tools": [
          {
            "order": 57,
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
            "uiDepth": 1
          },
          {
            "order": 58,
            "toolId": "developer-tool-page-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 2
          },
          {
            "order": 59,
            "toolId": "sitemap-page-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 3
          },
          {
            "order": 60,
            "toolId": "search-query-html-escaper",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 15,
        "uiTitle": "Email node 16",
        "mode": "waterfall",
        "tools": [
          {
            "order": 61,
            "toolId": "callback-url-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 62,
            "toolId": "youtube-description-slug-generator",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 63,
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
            "uiDepth": 3
          },
          {
            "order": 64,
            "toolId": "product-page-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 4
          }
        ]
      }
    ]
  },
  {
    "id": "project-hr-recruiting-data-audit-036",
    "title": "HR recruiting data cleanup audit workflow",
    "field": "HR recruiting",
    "businessFunction": "data cleanup",
    "groupId": "group-data-audit",
    "outcome": "Use compatible data cleanup tools to audit the current state and create a prioritized fix list for HR recruiting.",
    "prompt": "Build a micro workflow for HR recruiting: audit the current state and create a prioritized fix list using data cleanup tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste HR recruiting notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible data cleanup chain.",
    "complexity": "micro-2-4",
    "layout": "1x1",
    "executionMode": "compact-waterfall",
    "toolCount": 3,
    "panelCount": 1,
    "maxNestedUiDepth": 3,
    "tags": [
      "hr-recruiting",
      "data",
      "audit",
      "micro-2-4"
    ],
    "compatibilitySummary": "3 tools arranged as 1 panel UI; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Data cleanup node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "html-snippet-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "environment-value-json-minifier",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 2
          },
          {
            "order": 3,
            "toolId": "query-string-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          }
        ]
      }
    ]
  },
  {
    "id": "project-hr-recruiting-reporting-audit-037",
    "title": "HR recruiting reporting audit workflow",
    "field": "HR recruiting",
    "businessFunction": "reporting",
    "groupId": "group-reporting-audit",
    "outcome": "Use compatible reporting tools to audit the current state and create a prioritized fix list for HR recruiting.",
    "prompt": "Build a 16-panel workflow for HR recruiting: audit the current state and create a prioritized fix list using reporting tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste HR recruiting notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible reporting chain.",
    "complexity": "standard-16",
    "layout": "4x4",
    "executionMode": "waterfall",
    "toolCount": 16,
    "panelCount": 16,
    "maxNestedUiDepth": 1,
    "tags": [
      "hr-recruiting",
      "reporting",
      "audit",
      "standard-16"
    ],
    "compatibilitySummary": "16 tools arranged as 16 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Reporting node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "python-string-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "Reporting node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 2,
            "toolId": "garden-journal-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 2,
        "uiTitle": "Reporting node 3",
        "mode": "waterfall",
        "tools": [
          {
            "order": 3,
            "toolId": "invoice-memo-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 3,
        "uiTitle": "Reporting node 4",
        "mode": "waterfall",
        "tools": [
          {
            "order": 4,
            "toolId": "plant-care-notes-lowercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 4,
        "uiTitle": "Reporting node 5",
        "mode": "waterfall",
        "tools": [
          {
            "order": 5,
            "toolId": "newsletter-add-years-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 5,
        "uiTitle": "Reporting node 6",
        "mode": "waterfall",
        "tools": [
          {
            "order": 6,
            "toolId": "customer-reply-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 6,
        "uiTitle": "Reporting node 7",
        "mode": "waterfall",
        "tools": [
          {
            "order": 7,
            "toolId": "youtube-description-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 7,
        "uiTitle": "Reporting node 8",
        "mode": "waterfall",
        "tools": [
          {
            "order": 8,
            "toolId": "code-comment-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 8,
        "uiTitle": "Reporting node 9",
        "mode": "waterfall",
        "tools": [
          {
            "order": 9,
            "toolId": "ebook-chapter-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 9,
        "uiTitle": "Reporting node 10",
        "mode": "waterfall",
        "tools": [
          {
            "order": 10,
            "toolId": "cover-letter-slug-generator",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 10,
        "uiTitle": "Reporting node 11",
        "mode": "waterfall",
        "tools": [
          {
            "order": 11,
            "toolId": "markdown-doc-add-years-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 11,
        "uiTitle": "Reporting node 12",
        "mode": "waterfall",
        "tools": [
          {
            "order": 12,
            "toolId": "sql-snippet-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 12,
        "uiTitle": "Reporting node 13",
        "mode": "waterfall",
        "tools": [
          {
            "order": 13,
            "toolId": "image-alt-text-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 13,
        "uiTitle": "Reporting node 14",
        "mode": "waterfall",
        "tools": [
          {
            "order": 14,
            "toolId": "recipe-notes-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 14,
        "uiTitle": "Reporting node 15",
        "mode": "waterfall",
        "tools": [
          {
            "order": 15,
            "toolId": "video-script-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 15,
        "uiTitle": "Reporting node 16",
        "mode": "waterfall",
        "tools": [
          {
            "order": 16,
            "toolId": "order-note-trim-whitespace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-hr-recruiting-compliance-audit-038",
    "title": "HR recruiting compliance audit workflow",
    "field": "HR recruiting",
    "businessFunction": "compliance",
    "groupId": "group-compliance-audit",
    "outcome": "Use compatible compliance tools to audit the current state and create a prioritized fix list for HR recruiting.",
    "prompt": "Build a micro workflow for HR recruiting: audit the current state and create a prioritized fix list using compliance tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste HR recruiting notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible compliance chain.",
    "complexity": "micro-2-4",
    "layout": "2x1",
    "executionMode": "compact-waterfall",
    "toolCount": 4,
    "panelCount": 2,
    "maxNestedUiDepth": 2,
    "tags": [
      "hr-recruiting",
      "compliance",
      "audit",
      "micro-2-4"
    ],
    "compatibilitySummary": "4 tools arranged as 2 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Compliance node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "seo-title-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "html-block-add-months-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "Compliance node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 3,
            "toolId": "system-message-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 4,
            "toolId": "python-string-json-minifier",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 2
          }
        ]
      }
    ]
  },
  {
    "id": "project-hr-recruiting-scheduling-audit-039",
    "title": "HR recruiting scheduling audit workflow",
    "field": "HR recruiting",
    "businessFunction": "scheduling",
    "groupId": "group-scheduling-audit",
    "outcome": "Use compatible scheduling tools to audit the current state and create a prioritized fix list for HR recruiting.",
    "prompt": "Build a 8-panel workflow for HR recruiting: audit the current state and create a prioritized fix list using scheduling tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste HR recruiting notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible scheduling chain.",
    "complexity": "mid-8",
    "layout": "4x2",
    "executionMode": "hybrid",
    "toolCount": 8,
    "panelCount": 8,
    "maxNestedUiDepth": 1,
    "tags": [
      "hr-recruiting",
      "scheduling",
      "audit",
      "mid-8"
    ],
    "compatibilitySummary": "8 tools arranged as 8 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Scheduling node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "svg-snippet-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "Scheduling node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 2,
            "toolId": "support-ticket-title-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 2,
        "uiTitle": "Scheduling node 3",
        "mode": "waterfall",
        "tools": [
          {
            "order": 3,
            "toolId": "email-body-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 3,
        "uiTitle": "Scheduling node 4",
        "mode": "waterfall",
        "tools": [
          {
            "order": 4,
            "toolId": "code-comment-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 4,
        "uiTitle": "Scheduling node 5",
        "mode": "waterfall",
        "tools": [
          {
            "order": 5,
            "toolId": "brand-name-add-weeks-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 5,
        "uiTitle": "Scheduling node 6",
        "mode": "waterfall",
        "tools": [
          {
            "order": 6,
            "toolId": "youtube-description-date-to-unix-timestamp",
            "role": "convert or stamp time values",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 6,
        "uiTitle": "Scheduling node 7",
        "mode": "waterfall",
        "tools": [
          {
            "order": 7,
            "toolId": "email-body-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 7,
        "uiTitle": "Scheduling node 8",
        "mode": "waterfall",
        "tools": [
          {
            "order": 8,
            "toolId": "instagram-caption-blank-line-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-hr-recruiting-product-audit-040",
    "title": "HR recruiting product audit workflow",
    "field": "HR recruiting",
    "businessFunction": "product",
    "groupId": "group-product-audit",
    "outcome": "Use compatible product tools to audit the current state and create a prioritized fix list for HR recruiting.",
    "prompt": "Build a 32-tool nested workbench for HR recruiting: audit the current state and create a prioritized fix list using product tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste HR recruiting notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible product chain.",
    "complexity": "advanced-32",
    "layout": "4x4",
    "executionMode": "hybrid-waterfall",
    "toolCount": 32,
    "panelCount": 16,
    "maxNestedUiDepth": 2,
    "tags": [
      "hr-recruiting",
      "product",
      "audit",
      "advanced-32"
    ],
    "compatibilitySummary": "32 tools arranged as 16 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Product node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "seo-title-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "api-token-json-key-extractor",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "Product node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 3,
            "toolId": "donation-page-sentence-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 4,
            "toolId": "uuid-list-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 2,
        "uiTitle": "Product node 3",
        "mode": "waterfall",
        "tools": [
          {
            "order": 5,
            "toolId": "docker-tag-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 6,
            "toolId": "invoice-memo-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 3,
        "uiTitle": "Product node 4",
        "mode": "waterfall",
        "tools": [
          {
            "order": 7,
            "toolId": "markdown-doc-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 1
          },
          {
            "order": 8,
            "toolId": "jwt-payload-json-formatter",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 4,
        "uiTitle": "Product node 5",
        "mode": "waterfall",
        "tools": [
          {
            "order": 9,
            "toolId": "product-listing-text-reverser",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 10,
            "toolId": "plant-care-notes-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 5,
        "uiTitle": "Product node 6",
        "mode": "waterfall",
        "tools": [
          {
            "order": 11,
            "toolId": "pages-url-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 12,
            "toolId": "ebook-chapter-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 6,
        "uiTitle": "Product node 7",
        "mode": "waterfall",
        "tools": [
          {
            "order": 13,
            "toolId": "folder-name-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 1
          },
          {
            "order": 14,
            "toolId": "sql-snippet-json-key-extractor",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 7,
        "uiTitle": "Product node 8",
        "mode": "waterfall",
        "tools": [
          {
            "order": 15,
            "toolId": "domain-list-trim-whitespace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 16,
            "toolId": "environment-value-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 8,
        "uiTitle": "Product node 9",
        "mode": "waterfall",
        "tools": [
          {
            "order": 17,
            "toolId": "uuid-list-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 18,
            "toolId": "video-script-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 9,
        "uiTitle": "Product node 10",
        "mode": "waterfall",
        "tools": [
          {
            "order": 19,
            "toolId": "brand-name-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 1
          },
          {
            "order": 20,
            "toolId": "javascript-string-json-formatter",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 10,
        "uiTitle": "Product node 11",
        "mode": "waterfall",
        "tools": [
          {
            "order": 21,
            "toolId": "product-listing-extra-space-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 22,
            "toolId": "tracking-link-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 11,
        "uiTitle": "Product node 12",
        "mode": "waterfall",
        "tools": [
          {
            "order": 23,
            "toolId": "form-payload-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 24,
            "toolId": "newsletter-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 12,
        "uiTitle": "Product node 13",
        "mode": "waterfall",
        "tools": [
          {
            "order": 25,
            "toolId": "product-listing-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 1
          },
          {
            "order": 26,
            "toolId": "schema-markup-json-key-extractor",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 13,
        "uiTitle": "Product node 14",
        "mode": "waterfall",
        "tools": [
          {
            "order": 27,
            "toolId": "domain-list-lowercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 28,
            "toolId": "oauth-state-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 14,
        "uiTitle": "Product node 15",
        "mode": "waterfall",
        "tools": [
          {
            "order": 29,
            "toolId": "query-string-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 30,
            "toolId": "hashtag-set-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 15,
        "uiTitle": "Product node 16",
        "mode": "waterfall",
        "tools": [
          {
            "order": 31,
            "toolId": "json-snippet-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 1
          },
          {
            "order": 32,
            "toolId": "environment-value-json-formatter",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 2
          }
        ]
      }
    ]
  },
  {
    "id": "project-hr-recruiting-ux-audit-041",
    "title": "HR recruiting UX/UI audit workflow",
    "field": "HR recruiting",
    "businessFunction": "UX/UI",
    "groupId": "group-ux-audit",
    "outcome": "Use compatible UX/UI tools to audit the current state and create a prioritized fix list for HR recruiting.",
    "prompt": "Build a 8-panel workflow for HR recruiting: audit the current state and create a prioritized fix list using UX/UI tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste HR recruiting notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible UX/UI chain.",
    "complexity": "mid-8",
    "layout": "2x4",
    "executionMode": "hybrid",
    "toolCount": 8,
    "panelCount": 8,
    "maxNestedUiDepth": 1,
    "tags": [
      "hr-recruiting",
      "ux",
      "audit",
      "mid-8"
    ],
    "compatibilitySummary": "8 tools arranged as 8 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "UX/UI node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "blog-post-keyword-density-checker",
            "role": "extract keyword usage from project text",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "UX/UI node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 2,
            "toolId": "plant-care-notes-hex-to-rgb-converter",
            "role": "convert brand colors and palette values",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 2,
        "uiTitle": "UX/UI node 3",
        "mode": "waterfall",
        "tools": [
          {
            "order": 3,
            "toolId": "recipe-notes-color-contrast-checker",
            "role": "check readability and accessibility contrast",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 3,
        "uiTitle": "UX/UI node 4",
        "mode": "waterfall",
        "tools": [
          {
            "order": 4,
            "toolId": "markdown-doc-blank-line-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 4,
        "uiTitle": "UX/UI node 5",
        "mode": "waterfall",
        "tools": [
          {
            "order": 5,
            "toolId": "garden-journal-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 5,
        "uiTitle": "UX/UI node 6",
        "mode": "waterfall",
        "tools": [
          {
            "order": 6,
            "toolId": "local-service-page-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 6,
        "uiTitle": "UX/UI node 7",
        "mode": "waterfall",
        "tools": [
          {
            "order": 7,
            "toolId": "review-page-keyword-density-checker",
            "role": "extract keyword usage from project text",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 7,
        "uiTitle": "UX/UI node 8",
        "mode": "waterfall",
        "tools": [
          {
            "order": 8,
            "toolId": "file-name-hex-to-rgb-converter",
            "role": "convert brand colors and palette values",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-hr-recruiting-web-launch-audit-042",
    "title": "HR recruiting web launch audit workflow",
    "field": "HR recruiting",
    "businessFunction": "web launch",
    "groupId": "group-web-launch-audit",
    "outcome": "Use compatible web launch tools to audit the current state and create a prioritized fix list for HR recruiting.",
    "prompt": "Build a micro workflow for HR recruiting: audit the current state and create a prioritized fix list using web launch tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste HR recruiting notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible web launch chain.",
    "complexity": "micro-2-4",
    "layout": "2x1",
    "executionMode": "compact-waterfall",
    "toolCount": 4,
    "panelCount": 2,
    "maxNestedUiDepth": 2,
    "tags": [
      "hr-recruiting",
      "web-launch",
      "audit",
      "micro-2-4"
    ],
    "compatibilitySummary": "4 tools arranged as 2 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Web launch node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "brand-name-hex-to-rgb-converter",
            "role": "convert brand colors and palette values",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "ebook-chapter-color-contrast-checker",
            "role": "check readability and accessibility contrast",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "Web launch node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 3,
            "toolId": "pinterest-pin-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 1
          },
          {
            "order": 4,
            "toolId": "plant-profile-keyword-density-checker",
            "role": "extract keyword usage from project text",
            "uiDepth": 2
          }
        ]
      }
    ]
  },
  {
    "id": "project-hr-recruiting-developer-audit-043",
    "title": "HR recruiting developer audit workflow",
    "field": "HR recruiting",
    "businessFunction": "developer",
    "groupId": "group-developer-audit",
    "outcome": "Use compatible developer tools to audit the current state and create a prioritized fix list for HR recruiting.",
    "prompt": "Build a 16-panel workflow for HR recruiting: audit the current state and create a prioritized fix list using developer tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste HR recruiting notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible developer chain.",
    "complexity": "standard-16",
    "layout": "4x4",
    "executionMode": "waterfall",
    "toolCount": 16,
    "panelCount": 16,
    "maxNestedUiDepth": 1,
    "tags": [
      "hr-recruiting",
      "developer",
      "audit",
      "standard-16"
    ],
    "compatibilitySummary": "16 tools arranged as 16 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Developer node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "api-token-url-encoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "Developer node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 2,
            "toolId": "seo-title-uuid-generator",
            "role": "create unique IDs for assets, records, or tasks",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 2,
        "uiTitle": "Developer node 3",
        "mode": "waterfall",
        "tools": [
          {
            "order": 3,
            "toolId": "page-heading-password-generator",
            "role": "create secure passwords for the project",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 3,
        "uiTitle": "Developer node 4",
        "mode": "waterfall",
        "tools": [
          {
            "order": 4,
            "toolId": "error-message-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 4,
        "uiTitle": "Developer node 5",
        "mode": "waterfall",
        "tools": [
          {
            "order": 5,
            "toolId": "meta-description-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 5,
        "uiTitle": "Developer node 6",
        "mode": "waterfall",
        "tools": [
          {
            "order": 6,
            "toolId": "schema-markup-json-minifier",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 6,
        "uiTitle": "Developer node 7",
        "mode": "waterfall",
        "tools": [
          {
            "order": 7,
            "toolId": "sitemap-url-url-encoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 7,
        "uiTitle": "Developer node 8",
        "mode": "waterfall",
        "tools": [
          {
            "order": 8,
            "toolId": "file-name-uuid-generator",
            "role": "create unique IDs for assets, records, or tasks",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 8,
        "uiTitle": "Developer node 9",
        "mode": "waterfall",
        "tools": [
          {
            "order": 9,
            "toolId": "blog-post-password-generator",
            "role": "create secure passwords for the project",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 9,
        "uiTitle": "Developer node 10",
        "mode": "waterfall",
        "tools": [
          {
            "order": 10,
            "toolId": "user-message-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 10,
        "uiTitle": "Developer node 11",
        "mode": "waterfall",
        "tools": [
          {
            "order": 11,
            "toolId": "tool-url-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 11,
        "uiTitle": "Developer node 12",
        "mode": "waterfall",
        "tools": [
          {
            "order": 12,
            "toolId": "environment-value-json-key-extractor",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 12,
        "uiTitle": "Developer node 13",
        "mode": "waterfall",
        "tools": [
          {
            "order": 13,
            "toolId": "markdown-link-url-encoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 13,
        "uiTitle": "Developer node 14",
        "mode": "waterfall",
        "tools": [
          {
            "order": 14,
            "toolId": "project-brief-uuid-generator",
            "role": "create unique IDs for assets, records, or tasks",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 14,
        "uiTitle": "Developer node 15",
        "mode": "waterfall",
        "tools": [
          {
            "order": 15,
            "toolId": "landing-page-password-generator",
            "role": "create secure passwords for the project",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 15,
        "uiTitle": "Developer node 16",
        "mode": "waterfall",
        "tools": [
          {
            "order": 16,
            "toolId": "pages-url-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-hr-recruiting-security-audit-044",
    "title": "HR recruiting security audit workflow",
    "field": "HR recruiting",
    "businessFunction": "security",
    "groupId": "group-security-audit",
    "outcome": "Use compatible security tools to audit the current state and create a prioritized fix list for HR recruiting.",
    "prompt": "Build a micro workflow for HR recruiting: audit the current state and create a prioritized fix list using security tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste HR recruiting notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible security chain.",
    "complexity": "micro-2-4",
    "layout": "1x1",
    "executionMode": "compact-waterfall",
    "toolCount": 3,
    "panelCount": 1,
    "maxNestedUiDepth": 3,
    "tags": [
      "hr-recruiting",
      "security",
      "audit",
      "micro-2-4"
    ],
    "compatibilitySummary": "3 tools arranged as 1 panel UI; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Security node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "html-snippet-base64-decoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "schema-markup-json-key-extractor",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 2
          },
          {
            "order": 3,
            "toolId": "coupon-text-blank-line-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 3
          }
        ]
      }
    ]
  },
  {
    "id": "project-hr-recruiting-training-audit-045",
    "title": "HR recruiting training audit workflow",
    "field": "HR recruiting",
    "businessFunction": "training",
    "groupId": "group-training-audit",
    "outcome": "Use compatible training tools to audit the current state and create a prioritized fix list for HR recruiting.",
    "prompt": "Build a 64-tool nested waterfall for HR recruiting: audit the current state and create a prioritized fix list using training tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste HR recruiting notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible training chain.",
    "complexity": "nested-64",
    "layout": "4x4",
    "executionMode": "nested-waterfall",
    "toolCount": 64,
    "panelCount": 16,
    "maxNestedUiDepth": 4,
    "tags": [
      "hr-recruiting",
      "training",
      "audit",
      "nested-64"
    ],
    "compatibilitySummary": "64 tools arranged as 16 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Training node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "json-snippet-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "plant-care-notes-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 2
          },
          {
            "order": 3,
            "toolId": "domain-list-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 4,
            "toolId": "html-block-title-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "Training node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 5,
            "toolId": "robots-rule-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 6,
            "toolId": "hashtag-set-add-weeks-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 2
          },
          {
            "order": 7,
            "toolId": "domain-list-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 3
          },
          {
            "order": 8,
            "toolId": "environment-value-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 2,
        "uiTitle": "Training node 3",
        "mode": "waterfall",
        "tools": [
          {
            "order": 9,
            "toolId": "url-slug-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 10,
            "toolId": "sitemap-entry-uppercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 11,
            "toolId": "cloudflare-rule-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 12,
            "toolId": "folder-name-add-months-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 3,
        "uiTitle": "Training node 4",
        "mode": "waterfall",
        "tools": [
          {
            "order": 13,
            "toolId": "recipe-notes-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          },
          {
            "order": 14,
            "toolId": "tracking-link-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 2
          },
          {
            "order": 15,
            "toolId": "meta-description-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 16,
            "toolId": "html-block-find-and-replace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 4,
        "uiTitle": "Training node 5",
        "mode": "waterfall",
        "tools": [
          {
            "order": 17,
            "toolId": "jwt-payload-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 18,
            "toolId": "facebook-bio-add-months-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 2
          },
          {
            "order": 19,
            "toolId": "invoice-memo-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 3
          },
          {
            "order": 20,
            "toolId": "oauth-state-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 5,
        "uiTitle": "Training node 6",
        "mode": "waterfall",
        "tools": [
          {
            "order": 21,
            "toolId": "garden-journal-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 22,
            "toolId": "sitemap-entry-sentence-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 23,
            "toolId": "sql-snippet-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 24,
            "toolId": "domain-list-add-months-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 6,
        "uiTitle": "Training node 7",
        "mode": "waterfall",
        "tools": [
          {
            "order": 25,
            "toolId": "customer-reply-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          },
          {
            "order": 26,
            "toolId": "email-body-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 2
          },
          {
            "order": 27,
            "toolId": "code-comment-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 28,
            "toolId": "hashtag-set-title-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 7,
        "uiTitle": "Training node 8",
        "mode": "waterfall",
        "tools": [
          {
            "order": 29,
            "toolId": "dns-record-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 30,
            "toolId": "csv-export-add-months-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 2
          },
          {
            "order": 31,
            "toolId": "product-listing-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 3
          },
          {
            "order": 32,
            "toolId": "system-message-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 8,
        "uiTitle": "Training node 9",
        "mode": "waterfall",
        "tools": [
          {
            "order": 33,
            "toolId": "recipe-notes-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 34,
            "toolId": "shipping-note-uppercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 35,
            "toolId": "oauth-state-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 36,
            "toolId": "brand-name-add-months-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 9,
        "uiTitle": "Training node 10",
        "mode": "waterfall",
        "tools": [
          {
            "order": 37,
            "toolId": "instagram-caption-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          },
          {
            "order": 38,
            "toolId": "meta-description-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 2
          },
          {
            "order": 39,
            "toolId": "keyword-list-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 40,
            "toolId": "hashtag-set-find-and-replace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 10,
        "uiTitle": "Training node 11",
        "mode": "waterfall",
        "tools": [
          {
            "order": 41,
            "toolId": "user-message-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 42,
            "toolId": "ad-copy-add-months-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 2
          },
          {
            "order": 43,
            "toolId": "csv-export-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 3
          },
          {
            "order": 44,
            "toolId": "dns-record-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 11,
        "uiTitle": "Training node 12",
        "mode": "waterfall",
        "tools": [
          {
            "order": 45,
            "toolId": "facebook-bio-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 46,
            "toolId": "shipping-note-sentence-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 47,
            "toolId": "facebook-bio-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 48,
            "toolId": "url-slug-add-months-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 12,
        "uiTitle": "Training node 13",
        "mode": "waterfall",
        "tools": [
          {
            "order": 49,
            "toolId": "press-release-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          },
          {
            "order": 50,
            "toolId": "store-url-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 2
          },
          {
            "order": 51,
            "toolId": "ad-copy-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 52,
            "toolId": "garden-journal-title-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 13,
        "uiTitle": "Training node 14",
        "mode": "waterfall",
        "tools": [
          {
            "order": 53,
            "toolId": "python-string-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 54,
            "toolId": "recipe-notes-add-months-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 2
          },
          {
            "order": 55,
            "toolId": "html-block-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 3
          },
          {
            "order": 56,
            "toolId": "markdown-doc-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 14,
        "uiTitle": "Training node 15",
        "mode": "waterfall",
        "tools": [
          {
            "order": 57,
            "toolId": "podcast-notes-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 58,
            "toolId": "seo-title-uppercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 59,
            "toolId": "youtube-description-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 60,
            "toolId": "press-release-add-months-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 15,
        "uiTitle": "Training node 16",
        "mode": "waterfall",
        "tools": [
          {
            "order": 61,
            "toolId": "code-comment-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          },
          {
            "order": 62,
            "toolId": "csv-cell-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 2
          },
          {
            "order": 63,
            "toolId": "instagram-caption-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 64,
            "toolId": "garden-journal-find-and-replace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 4
          }
        ]
      }
    ]
  },
  {
    "id": "project-hr-recruiting-inventory-audit-046",
    "title": "HR recruiting inventory audit workflow",
    "field": "HR recruiting",
    "businessFunction": "inventory",
    "groupId": "group-inventory-audit",
    "outcome": "Use compatible inventory tools to audit the current state and create a prioritized fix list for HR recruiting.",
    "prompt": "Build a 16-panel workflow for HR recruiting: audit the current state and create a prioritized fix list using inventory tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste HR recruiting notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible inventory chain.",
    "complexity": "standard-16",
    "layout": "4x4",
    "executionMode": "waterfall",
    "toolCount": 16,
    "panelCount": 16,
    "maxNestedUiDepth": 1,
    "tags": [
      "hr-recruiting",
      "inventory",
      "audit",
      "standard-16"
    ],
    "compatibilitySummary": "16 tools arranged as 16 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Inventory node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "hashtag-set-slug-generator",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "Inventory node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 2,
            "toolId": "press-release-add-weeks-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 2,
        "uiTitle": "Inventory node 3",
        "mode": "waterfall",
        "tools": [
          {
            "order": 3,
            "toolId": "garden-journal-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 3,
        "uiTitle": "Inventory node 4",
        "mode": "waterfall",
        "tools": [
          {
            "order": 4,
            "toolId": "json-snippet-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 4,
        "uiTitle": "Inventory node 5",
        "mode": "waterfall",
        "tools": [
          {
            "order": 5,
            "toolId": "kilopascal-to-pascal-converter",
            "role": "convert operational measurements",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 5,
        "uiTitle": "Inventory node 6",
        "mode": "waterfall",
        "tools": [
          {
            "order": 6,
            "toolId": "invoice-memo-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 6,
        "uiTitle": "Inventory node 7",
        "mode": "waterfall",
        "tools": [
          {
            "order": 7,
            "toolId": "shipping-note-title-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 7,
        "uiTitle": "Inventory node 8",
        "mode": "waterfall",
        "tools": [
          {
            "order": 8,
            "toolId": "newsletter-add-weeks-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 8,
        "uiTitle": "Inventory node 9",
        "mode": "waterfall",
        "tools": [
          {
            "order": 9,
            "toolId": "worker-route-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 9,
        "uiTitle": "Inventory node 10",
        "mode": "waterfall",
        "tools": [
          {
            "order": 10,
            "toolId": "email-subject-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 10,
        "uiTitle": "Inventory node 11",
        "mode": "waterfall",
        "tools": [
          {
            "order": 11,
            "toolId": "square-kilometer-to-square-yard-converter",
            "role": "convert operational measurements",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 11,
        "uiTitle": "Inventory node 12",
        "mode": "waterfall",
        "tools": [
          {
            "order": 12,
            "toolId": "search-query-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 12,
        "uiTitle": "Inventory node 13",
        "mode": "waterfall",
        "tools": [
          {
            "order": 13,
            "toolId": "hashtag-set-blank-line-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 13,
        "uiTitle": "Inventory node 14",
        "mode": "waterfall",
        "tools": [
          {
            "order": 14,
            "toolId": "markdown-doc-add-weeks-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 14,
        "uiTitle": "Inventory node 15",
        "mode": "waterfall",
        "tools": [
          {
            "order": 15,
            "toolId": "product-listing-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 15,
        "uiTitle": "Inventory node 16",
        "mode": "waterfall",
        "tools": [
          {
            "order": 16,
            "toolId": "youtube-description-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-hr-recruiting-pricing-audit-047",
    "title": "HR recruiting pricing audit workflow",
    "field": "HR recruiting",
    "businessFunction": "pricing",
    "groupId": "group-pricing-audit",
    "outcome": "Use compatible pricing tools to audit the current state and create a prioritized fix list for HR recruiting.",
    "prompt": "Build a 8-panel workflow for HR recruiting: audit the current state and create a prioritized fix list using pricing tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste HR recruiting notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible pricing chain.",
    "complexity": "mid-8",
    "layout": "4x2",
    "executionMode": "hybrid",
    "toolCount": 8,
    "panelCount": 8,
    "maxNestedUiDepth": 1,
    "tags": [
      "hr-recruiting",
      "pricing",
      "audit",
      "mid-8"
    ],
    "compatibilitySummary": "8 tools arranged as 8 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Pricing node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "regex-pattern-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "Pricing node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 2,
            "toolId": "invoice-memo-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 2,
        "uiTitle": "Pricing node 3",
        "mode": "waterfall",
        "tools": [
          {
            "order": 3,
            "toolId": "markdown-doc-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 3,
        "uiTitle": "Pricing node 4",
        "mode": "waterfall",
        "tools": [
          {
            "order": 4,
            "toolId": "store-order-total-calculator",
            "role": "calculate invoice totals from line-item assumptions",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 4,
        "uiTitle": "Pricing node 5",
        "mode": "waterfall",
        "tools": [
          {
            "order": 5,
            "toolId": "newsletter-subtraction-calculator",
            "role": "run a lightweight business formula",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 5,
        "uiTitle": "Pricing node 6",
        "mode": "waterfall",
        "tools": [
          {
            "order": 6,
            "toolId": "compound-interest-calculator",
            "role": "model long-term growth or recurring gains",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 6,
        "uiTitle": "Pricing node 7",
        "mode": "waterfall",
        "tools": [
          {
            "order": 7,
            "toolId": "callback-url-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 7,
        "uiTitle": "Pricing node 8",
        "mode": "waterfall",
        "tools": [
          {
            "order": 8,
            "toolId": "ebook-chapter-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-hr-recruiting-outreach-audit-048",
    "title": "HR recruiting outreach audit workflow",
    "field": "HR recruiting",
    "businessFunction": "outreach",
    "groupId": "group-outreach-audit",
    "outcome": "Use compatible outreach tools to audit the current state and create a prioritized fix list for HR recruiting.",
    "prompt": "Build a micro workflow for HR recruiting: audit the current state and create a prioritized fix list using outreach tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste HR recruiting notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible outreach chain.",
    "complexity": "micro-2-4",
    "layout": "1x1",
    "executionMode": "compact-waterfall",
    "toolCount": 3,
    "panelCount": 1,
    "maxNestedUiDepth": 3,
    "tags": [
      "hr-recruiting",
      "outreach",
      "audit",
      "micro-2-4"
    ],
    "compatibilitySummary": "3 tools arranged as 1 panel UI; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Outreach node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "schema-text-lowercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "image-tool-page-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 2
          },
          {
            "order": 3,
            "toolId": "review-page-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 3
          }
        ]
      }
    ]
  },
  {
    "id": "project-hr-recruiting-research-audit-049",
    "title": "HR recruiting research audit workflow",
    "field": "HR recruiting",
    "businessFunction": "research",
    "groupId": "group-research-audit",
    "outcome": "Use compatible research tools to audit the current state and create a prioritized fix list for HR recruiting.",
    "prompt": "Build a 16-panel workflow for HR recruiting: audit the current state and create a prioritized fix list using research tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste HR recruiting notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible research chain.",
    "complexity": "standard-16",
    "layout": "4x4",
    "executionMode": "waterfall",
    "toolCount": 16,
    "panelCount": 16,
    "maxNestedUiDepth": 1,
    "tags": [
      "hr-recruiting",
      "research",
      "audit",
      "standard-16"
    ],
    "compatibilitySummary": "16 tools arranged as 16 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Research node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "raffle-campaign-keyword-density-checker",
            "role": "extract keyword usage from project text",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "Research node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 2,
            "toolId": "landing-page-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 2,
        "uiTitle": "Research node 3",
        "mode": "waterfall",
        "tools": [
          {
            "order": 3,
            "toolId": "product-listing-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 3,
        "uiTitle": "Research node 4",
        "mode": "waterfall",
        "tools": [
          {
            "order": 4,
            "toolId": "webhook-body-json-key-extractor",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 4,
        "uiTitle": "Research node 5",
        "mode": "waterfall",
        "tools": [
          {
            "order": 5,
            "toolId": "hashtag-set-extra-space-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 5,
        "uiTitle": "Research node 6",
        "mode": "waterfall",
        "tools": [
          {
            "order": 6,
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 6,
        "uiTitle": "Research node 7",
        "mode": "waterfall",
        "tools": [
          {
            "order": 7,
            "toolId": "instagram-reel-keyword-density-checker",
            "role": "extract keyword usage from project text",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 7,
        "uiTitle": "Research node 8",
        "mode": "waterfall",
        "tools": [
          {
            "order": 8,
            "toolId": "store-url-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 8,
        "uiTitle": "Research node 9",
        "mode": "waterfall",
        "tools": [
          {
            "order": 9,
            "toolId": "facebook-bio-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 9,
        "uiTitle": "Research node 10",
        "mode": "waterfall",
        "tools": [
          {
            "order": 10,
            "toolId": "json-config-json-formatter",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 10,
        "uiTitle": "Research node 11",
        "mode": "waterfall",
        "tools": [
          {
            "order": 11,
            "toolId": "shipping-note-lowercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 11,
        "uiTitle": "Research node 12",
        "mode": "waterfall",
        "tools": [
          {
            "order": 12,
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 12,
        "uiTitle": "Research node 13",
        "mode": "waterfall",
        "tools": [
          {
            "order": 13,
            "toolId": "developer-tool-page-keyword-density-checker",
            "role": "extract keyword usage from project text",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 13,
        "uiTitle": "Research node 14",
        "mode": "waterfall",
        "tools": [
          {
            "order": 14,
            "toolId": "docker-tag-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 14,
        "uiTitle": "Research node 15",
        "mode": "waterfall",
        "tools": [
          {
            "order": 15,
            "toolId": "uuid-list-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 15,
        "uiTitle": "Research node 16",
        "mode": "waterfall",
        "tools": [
          {
            "order": 16,
            "toolId": "sitemap-url-json-key-extractor",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-hr-recruiting-project-management-audit-050",
    "title": "HR recruiting project management audit workflow",
    "field": "HR recruiting",
    "businessFunction": "project management",
    "groupId": "group-project-management-audit",
    "outcome": "Use compatible project management tools to audit the current state and create a prioritized fix list for HR recruiting.",
    "prompt": "Build a 32-tool nested workbench for HR recruiting: audit the current state and create a prioritized fix list using project management tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste HR recruiting notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible project management chain.",
    "complexity": "advanced-32",
    "layout": "4x4",
    "executionMode": "hybrid-waterfall",
    "toolCount": 32,
    "panelCount": 16,
    "maxNestedUiDepth": 2,
    "tags": [
      "hr-recruiting",
      "project-management",
      "audit",
      "advanced-32"
    ],
    "compatibilitySummary": "32 tools arranged as 16 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Project management node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "email-subject-find-and-replace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "plant-care-notes-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "Project management node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 3,
            "toolId": "callback-url-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 4,
            "toolId": "garden-journal-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 2,
        "uiTitle": "Project management node 3",
        "mode": "waterfall",
        "tools": [
          {
            "order": 5,
            "toolId": "html-block-add-months-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          },
          {
            "order": 6,
            "toolId": "product-listing-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 3,
        "uiTitle": "Project management node 4",
        "mode": "waterfall",
        "tools": [
          {
            "order": 7,
            "toolId": "project-brief-sentence-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 8,
            "toolId": "webhook-body-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 4,
        "uiTitle": "Project management node 5",
        "mode": "waterfall",
        "tools": [
          {
            "order": 9,
            "toolId": "response-text-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 10,
            "toolId": "code-comment-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 5,
        "uiTitle": "Project management node 6",
        "mode": "waterfall",
        "tools": [
          {
            "order": 11,
            "toolId": "garden-journal-add-months-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          },
          {
            "order": 12,
            "toolId": "instagram-caption-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 6,
        "uiTitle": "Project management node 7",
        "mode": "waterfall",
        "tools": [
          {
            "order": 13,
            "toolId": "ebook-chapter-title-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 14,
            "toolId": "garden-journal-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 7,
        "uiTitle": "Project management node 8",
        "mode": "waterfall",
        "tools": [
          {
            "order": 15,
            "toolId": "instagram-caption-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 16,
            "toolId": "recipe-notes-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 8,
        "uiTitle": "Project management node 9",
        "mode": "waterfall",
        "tools": [
          {
            "order": 17,
            "toolId": "file-name-add-days-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          },
          {
            "order": 18,
            "toolId": "csv-export-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 9,
        "uiTitle": "Project management node 10",
        "mode": "waterfall",
        "tools": [
          {
            "order": 19,
            "toolId": "product-sku-uppercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 20,
            "toolId": "recipe-notes-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 10,
        "uiTitle": "Project management node 11",
        "mode": "waterfall",
        "tools": [
          {
            "order": 21,
            "toolId": "base-url-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 22,
            "toolId": "keyword-list-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 11,
        "uiTitle": "Project management node 12",
        "mode": "waterfall",
        "tools": [
          {
            "order": 23,
            "toolId": "email-subject-add-days-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          },
          {
            "order": 24,
            "toolId": "press-release-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 12,
        "uiTitle": "Project management node 13",
        "mode": "waterfall",
        "tools": [
          {
            "order": 25,
            "toolId": "ebook-chapter-find-and-replace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 26,
            "toolId": "base-url-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 13,
        "uiTitle": "Project management node 14",
        "mode": "waterfall",
        "tools": [
          {
            "order": 27,
            "toolId": "redirect-url-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 28,
            "toolId": "facebook-bio-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 14,
        "uiTitle": "Project management node 15",
        "mode": "waterfall",
        "tools": [
          {
            "order": 29,
            "toolId": "customer-reply-add-days-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          },
          {
            "order": 30,
            "toolId": "html-block-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 15,
        "uiTitle": "Project management node 16",
        "mode": "waterfall",
        "tools": [
          {
            "order": 31,
            "toolId": "product-sku-sentence-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 32,
            "toolId": "invoice-memo-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 2
          }
        ]
      }
    ]
  },
  {
    "id": "project-hr-recruiting-marketing-campaign-051",
    "title": "HR recruiting marketing campaign workflow",
    "field": "HR recruiting",
    "businessFunction": "marketing",
    "groupId": "group-marketing-campaign",
    "outcome": "Use compatible marketing tools to prepare a launch campaign with trackable outputs for HR recruiting.",
    "prompt": "Build a 8-panel workflow for HR recruiting: prepare a launch campaign with trackable outputs using marketing tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste HR recruiting notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible marketing chain.",
    "complexity": "mid-8",
    "layout": "4x2",
    "executionMode": "hybrid",
    "toolCount": 8,
    "panelCount": 8,
    "maxNestedUiDepth": 1,
    "tags": [
      "hr-recruiting",
      "marketing",
      "campaign",
      "mid-8"
    ],
    "compatibilitySummary": "8 tools arranged as 8 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Marketing node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "converter-page-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "Marketing node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 2,
            "toolId": "redirect-url-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 2,
        "uiTitle": "Marketing node 3",
        "mode": "waterfall",
        "tools": [
          {
            "order": 3,
            "toolId": "tool-url-html-unescaper",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 3,
        "uiTitle": "Marketing node 4",
        "mode": "waterfall",
        "tools": [
          {
            "order": 4,
            "toolId": "product-sku-find-and-replace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 4,
        "uiTitle": "Marketing node 5",
        "mode": "waterfall",
        "tools": [
          {
            "order": 5,
            "toolId": "product-listing-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 5,
        "uiTitle": "Marketing node 6",
        "mode": "waterfall",
        "tools": [
          {
            "order": 6,
            "toolId": "review-page-keyword-density-checker",
            "role": "extract keyword usage from project text",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 6,
        "uiTitle": "Marketing node 7",
        "mode": "waterfall",
        "tools": [
          {
            "order": 7,
            "toolId": "youtube-description-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 7,
        "uiTitle": "Marketing node 8",
        "mode": "waterfall",
        "tools": [
          {
            "order": 8,
            "toolId": "blog-post-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-hr-recruiting-sales-campaign-052",
    "title": "HR recruiting sales campaign workflow",
    "field": "HR recruiting",
    "businessFunction": "sales",
    "groupId": "group-sales-campaign",
    "outcome": "Use compatible sales tools to prepare a launch campaign with trackable outputs for HR recruiting.",
    "prompt": "Build a 16-panel workflow for HR recruiting: prepare a launch campaign with trackable outputs using sales tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste HR recruiting notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible sales chain.",
    "complexity": "standard-16",
    "layout": "4x4",
    "executionMode": "waterfall",
    "toolCount": 16,
    "panelCount": 16,
    "maxNestedUiDepth": 1,
    "tags": [
      "hr-recruiting",
      "sales",
      "campaign",
      "standard-16"
    ],
    "compatibilitySummary": "16 tools arranged as 16 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Sales node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "email-subject-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "Sales node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 2,
            "toolId": "callback-url-html-unescaper",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 2,
        "uiTitle": "Sales node 3",
        "mode": "waterfall",
        "tools": [
          {
            "order": 3,
            "toolId": "webhook-body-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 3,
        "uiTitle": "Sales node 4",
        "mode": "waterfall",
        "tools": [
          {
            "order": 4,
            "toolId": "video-script-extra-space-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 4,
        "uiTitle": "Sales node 5",
        "mode": "waterfall",
        "tools": [
          {
            "order": 5,
            "toolId": "tool-page-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 5,
        "uiTitle": "Sales node 6",
        "mode": "waterfall",
        "tools": [
          {
            "order": 6,
            "toolId": "blog-post-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 6,
        "uiTitle": "Sales node 7",
        "mode": "waterfall",
        "tools": [
          {
            "order": 7,
            "toolId": "press-release-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 7,
        "uiTitle": "Sales node 8",
        "mode": "waterfall",
        "tools": [
          {
            "order": 8,
            "toolId": "store-url-html-unescaper",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 8,
        "uiTitle": "Sales node 9",
        "mode": "waterfall",
        "tools": [
          {
            "order": 9,
            "toolId": "press-release-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 9,
        "uiTitle": "Sales node 10",
        "mode": "waterfall",
        "tools": [
          {
            "order": 10,
            "toolId": "invoice-memo-sentence-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 10,
        "uiTitle": "Sales node 11",
        "mode": "waterfall",
        "tools": [
          {
            "order": 11,
            "toolId": "pinterest-pin-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 11,
        "uiTitle": "Sales node 12",
        "mode": "waterfall",
        "tools": [
          {
            "order": 12,
            "toolId": "press-release-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 12,
        "uiTitle": "Sales node 13",
        "mode": "waterfall",
        "tools": [
          {
            "order": 13,
            "toolId": "worker-route-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 13,
        "uiTitle": "Sales node 14",
        "mode": "waterfall",
        "tools": [
          {
            "order": 14,
            "toolId": "pages-url-html-unescaper",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 14,
        "uiTitle": "Sales node 15",
        "mode": "waterfall",
        "tools": [
          {
            "order": 15,
            "toolId": "error-message-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 15,
        "uiTitle": "Sales node 16",
        "mode": "waterfall",
        "tools": [
          {
            "order": 16,
            "toolId": "url-slug-text-reverser",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-hr-recruiting-support-campaign-053",
    "title": "HR recruiting customer support campaign workflow",
    "field": "HR recruiting",
    "businessFunction": "customer support",
    "groupId": "group-support-campaign",
    "outcome": "Use compatible customer support tools to prepare a launch campaign with trackable outputs for HR recruiting.",
    "prompt": "Build a 8-panel workflow for HR recruiting: prepare a launch campaign with trackable outputs using customer support tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste HR recruiting notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible customer support chain.",
    "complexity": "mid-8",
    "layout": "2x4",
    "executionMode": "hybrid",
    "toolCount": 8,
    "panelCount": 8,
    "maxNestedUiDepth": 1,
    "tags": [
      "hr-recruiting",
      "support",
      "campaign",
      "mid-8"
    ],
    "compatibilitySummary": "8 tools arranged as 8 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Customer support node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "jwt-payload-json-minifier",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "Customer support node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 2,
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 2,
        "uiTitle": "Customer support node 3",
        "mode": "waterfall",
        "tools": [
          {
            "order": 3,
            "toolId": "community-rule-lowercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 3,
        "uiTitle": "Customer support node 4",
        "mode": "waterfall",
        "tools": [
          {
            "order": 4,
            "toolId": "api-token-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 4,
        "uiTitle": "Customer support node 5",
        "mode": "waterfall",
        "tools": [
          {
            "order": 5,
            "toolId": "html-block-add-weeks-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 5,
        "uiTitle": "Customer support node 6",
        "mode": "waterfall",
        "tools": [
          {
            "order": 6,
            "toolId": "email-body-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 6,
        "uiTitle": "Customer support node 7",
        "mode": "waterfall",
        "tools": [
          {
            "order": 7,
            "toolId": "webhook-body-json-formatter",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 7,
        "uiTitle": "Customer support node 8",
        "mode": "waterfall",
        "tools": [
          {
            "order": 8,
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-hr-recruiting-operations-campaign-054",
    "title": "HR recruiting operations campaign workflow",
    "field": "HR recruiting",
    "businessFunction": "operations",
    "groupId": "group-operations-campaign",
    "outcome": "Use compatible operations tools to prepare a launch campaign with trackable outputs for HR recruiting.",
    "prompt": "Build a micro workflow for HR recruiting: prepare a launch campaign with trackable outputs using operations tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste HR recruiting notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible operations chain.",
    "complexity": "micro-2-4",
    "layout": "2x1",
    "executionMode": "compact-waterfall",
    "toolCount": 4,
    "panelCount": 2,
    "maxNestedUiDepth": 2,
    "tags": [
      "hr-recruiting",
      "operations",
      "campaign",
      "micro-2-4"
    ],
    "compatibilitySummary": "4 tools arranged as 2 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Operations node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "product-listing-add-weeks-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "email-subject-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "Operations node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 3,
            "toolId": "code-comment-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 4,
            "toolId": "cloudflare-rule-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 2
          }
        ]
      }
    ]
  },
  {
    "id": "project-hr-recruiting-finance-campaign-055",
    "title": "HR recruiting finance campaign workflow",
    "field": "HR recruiting",
    "businessFunction": "finance",
    "groupId": "group-finance-campaign",
    "outcome": "Use compatible finance tools to prepare a launch campaign with trackable outputs for HR recruiting.",
    "prompt": "Build a 64-tool nested waterfall for HR recruiting: prepare a launch campaign with trackable outputs using finance tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste HR recruiting notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible finance chain.",
    "complexity": "nested-64",
    "layout": "4x4",
    "executionMode": "nested-waterfall",
    "toolCount": 64,
    "panelCount": 16,
    "maxNestedUiDepth": 4,
    "tags": [
      "hr-recruiting",
      "finance",
      "campaign",
      "nested-64"
    ],
    "compatibilitySummary": "64 tools arranged as 16 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Finance node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "brand-name-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "domain-list-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 2
          },
          {
            "order": 3,
            "toolId": "compound-interest-calculator",
            "role": "model long-term growth or recurring gains",
            "uiDepth": 3
          },
          {
            "order": 4,
            "toolId": "loan-payment-calculator",
            "role": "estimate payment obligations",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "Finance node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 5,
            "toolId": "ebook-chapter-box-volume-calculator",
            "role": "run a lightweight business formula",
            "uiDepth": 1
          },
          {
            "order": 6,
            "toolId": "donation-receipt-total-calculator",
            "role": "calculate invoice totals from line-item assumptions",
            "uiDepth": 2
          },
          {
            "order": 7,
            "toolId": "product-listing-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 8,
            "toolId": "url-slug-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 2,
        "uiTitle": "Finance node 3",
        "mode": "waterfall",
        "tools": [
          {
            "order": 9,
            "toolId": "compound-interest-calculator",
            "role": "model long-term growth or recurring gains",
            "uiDepth": 1
          },
          {
            "order": 10,
            "toolId": "loan-payment-calculator",
            "role": "estimate payment obligations",
            "uiDepth": 2
          },
          {
            "order": 11,
            "toolId": "domain-list-addition-calculator",
            "role": "run a lightweight business formula",
            "uiDepth": 3
          },
          {
            "order": 12,
            "toolId": "freelance-invoice-total-calculator",
            "role": "calculate invoice totals from line-item assumptions",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 3,
        "uiTitle": "Finance node 4",
        "mode": "waterfall",
        "tools": [
          {
            "order": 13,
            "toolId": "json-snippet-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 14,
            "toolId": "meta-description-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 2
          },
          {
            "order": 15,
            "toolId": "compound-interest-calculator",
            "role": "model long-term growth or recurring gains",
            "uiDepth": 3
          },
          {
            "order": 16,
            "toolId": "loan-payment-calculator",
            "role": "estimate payment obligations",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 4,
        "uiTitle": "Finance node 5",
        "mode": "waterfall",
        "tools": [
          {
            "order": 17,
            "toolId": "csv-export-rectangle-area-calculator",
            "role": "run a lightweight business formula",
            "uiDepth": 1
          },
          {
            "order": 18,
            "toolId": "plant-sale-order-total-calculator",
            "role": "calculate invoice totals from line-item assumptions",
            "uiDepth": 2
          },
          {
            "order": 19,
            "toolId": "email-subject-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 20,
            "toolId": "garden-journal-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 5,
        "uiTitle": "Finance node 6",
        "mode": "waterfall",
        "tools": [
          {
            "order": 21,
            "toolId": "compound-interest-calculator",
            "role": "model long-term growth or recurring gains",
            "uiDepth": 1
          },
          {
            "order": 22,
            "toolId": "loan-payment-calculator",
            "role": "estimate payment obligations",
            "uiDepth": 2
          },
          {
            "order": 23,
            "toolId": "code-comment-division-calculator",
            "role": "run a lightweight business formula",
            "uiDepth": 3
          },
          {
            "order": 24,
            "toolId": "project-estimate-total-calculator",
            "role": "calculate invoice totals from line-item assumptions",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 6,
        "uiTitle": "Finance node 7",
        "mode": "waterfall",
        "tools": [
          {
            "order": 25,
            "toolId": "youtube-description-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 26,
            "toolId": "code-comment-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 2
          },
          {
            "order": 27,
            "toolId": "compound-interest-calculator",
            "role": "model long-term growth or recurring gains",
            "uiDepth": 3
          },
          {
            "order": 28,
            "toolId": "loan-payment-calculator",
            "role": "estimate payment obligations",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 7,
        "uiTitle": "Finance node 8",
        "mode": "waterfall",
        "tools": [
          {
            "order": 29,
            "toolId": "brand-name-average-calculator",
            "role": "run a lightweight business formula",
            "uiDepth": 1
          },
          {
            "order": 30,
            "toolId": "raffle-order-total-calculator",
            "role": "calculate invoice totals from line-item assumptions",
            "uiDepth": 2
          },
          {
            "order": 31,
            "toolId": "plant-care-notes-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 32,
            "toolId": "recipe-notes-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 8,
        "uiTitle": "Finance node 9",
        "mode": "waterfall",
        "tools": [
          {
            "order": 33,
            "toolId": "compound-interest-calculator",
            "role": "model long-term growth or recurring gains",
            "uiDepth": 1
          },
          {
            "order": 34,
            "toolId": "loan-payment-calculator",
            "role": "estimate payment obligations",
            "uiDepth": 2
          },
          {
            "order": 35,
            "toolId": "ad-copy-subtraction-calculator",
            "role": "run a lightweight business formula",
            "uiDepth": 3
          },
          {
            "order": 36,
            "toolId": "service-quote-total-calculator",
            "role": "calculate invoice totals from line-item assumptions",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 9,
        "uiTitle": "Finance node 10",
        "mode": "waterfall",
        "tools": [
          {
            "order": 37,
            "toolId": "html-block-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 38,
            "toolId": "keyword-list-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 2
          },
          {
            "order": 39,
            "toolId": "compound-interest-calculator",
            "role": "model long-term growth or recurring gains",
            "uiDepth": 3
          },
          {
            "order": 40,
            "toolId": "loan-payment-calculator",
            "role": "estimate payment obligations",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 10,
        "uiTitle": "Finance node 11",
        "mode": "waterfall",
        "tools": [
          {
            "order": 41,
            "toolId": "youtube-description-multiplication-calculator",
            "role": "run a lightweight business formula",
            "uiDepth": 1
          },
          {
            "order": 42,
            "toolId": "shipping-invoice-total-calculator",
            "role": "calculate invoice totals from line-item assumptions",
            "uiDepth": 2
          },
          {
            "order": 43,
            "toolId": "customer-reply-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 44,
            "toolId": "facebook-bio-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 11,
        "uiTitle": "Finance node 12",
        "mode": "waterfall",
        "tools": [
          {
            "order": 45,
            "toolId": "compound-interest-calculator",
            "role": "model long-term growth or recurring gains",
            "uiDepth": 1
          },
          {
            "order": 46,
            "toolId": "loan-payment-calculator",
            "role": "estimate payment obligations",
            "uiDepth": 2
          },
          {
            "order": 47,
            "toolId": "video-script-box-volume-calculator",
            "role": "run a lightweight business formula",
            "uiDepth": 3
          },
          {
            "order": 48,
            "toolId": "sponsor-invoice-total-calculator",
            "role": "calculate invoice totals from line-item assumptions",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 12,
        "uiTitle": "Finance node 13",
        "mode": "waterfall",
        "tools": [
          {
            "order": 49,
            "toolId": "seo-title-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 50,
            "toolId": "ad-copy-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 2
          },
          {
            "order": 51,
            "toolId": "compound-interest-calculator",
            "role": "model long-term growth or recurring gains",
            "uiDepth": 3
          },
          {
            "order": 52,
            "toolId": "loan-payment-calculator",
            "role": "estimate payment obligations",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 13,
        "uiTitle": "Finance node 14",
        "mode": "waterfall",
        "tools": [
          {
            "order": 53,
            "toolId": "url-slug-addition-calculator",
            "role": "run a lightweight business formula",
            "uiDepth": 1
          },
          {
            "order": 54,
            "toolId": "store-order-total-calculator",
            "role": "calculate invoice totals from line-item assumptions",
            "uiDepth": 2
          },
          {
            "order": 55,
            "toolId": "markdown-doc-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 56,
            "toolId": "podcast-notes-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 14,
        "uiTitle": "Finance node 15",
        "mode": "waterfall",
        "tools": [
          {
            "order": 57,
            "toolId": "compound-interest-calculator",
            "role": "model long-term growth or recurring gains",
            "uiDepth": 1
          },
          {
            "order": 58,
            "toolId": "loan-payment-calculator",
            "role": "estimate payment obligations",
            "uiDepth": 2
          },
          {
            "order": 59,
            "toolId": "resume-bullet-rectangle-area-calculator",
            "role": "run a lightweight business formula",
            "uiDepth": 3
          },
          {
            "order": 60,
            "toolId": "subscription-invoice-total-calculator",
            "role": "calculate invoice totals from line-item assumptions",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 15,
        "uiTitle": "Finance node 16",
        "mode": "waterfall",
        "tools": [
          {
            "order": 61,
            "toolId": "folder-name-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 62,
            "toolId": "instagram-caption-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 2
          },
          {
            "order": 63,
            "toolId": "compound-interest-calculator",
            "role": "model long-term growth or recurring gains",
            "uiDepth": 3
          },
          {
            "order": 64,
            "toolId": "loan-payment-calculator",
            "role": "estimate payment obligations",
            "uiDepth": 4
          }
        ]
      }
    ]
  },
  {
    "id": "project-hr-recruiting-hr-campaign-056",
    "title": "HR recruiting HR campaign workflow",
    "field": "HR recruiting",
    "businessFunction": "HR",
    "groupId": "group-hr-campaign",
    "outcome": "Use compatible HR tools to prepare a launch campaign with trackable outputs for HR recruiting.",
    "prompt": "Build a micro workflow for HR recruiting: prepare a launch campaign with trackable outputs using HR tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste HR recruiting notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible HR chain.",
    "complexity": "micro-2-4",
    "layout": "1x1",
    "executionMode": "compact-waterfall",
    "toolCount": 3,
    "panelCount": 1,
    "maxNestedUiDepth": 3,
    "tags": [
      "hr-recruiting",
      "hr",
      "campaign",
      "micro-2-4"
    ],
    "compatibilitySummary": "3 tools arranged as 1 panel UI; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "HR node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "newsletter-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "javascript-string-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 2
          },
          {
            "order": 3,
            "toolId": "schema-text-password-generator",
            "role": "create secure passwords for the project",
            "uiDepth": 3
          }
        ]
      }
    ]
  },
  {
    "id": "project-hr-recruiting-content-campaign-057",
    "title": "HR recruiting content campaign workflow",
    "field": "HR recruiting",
    "businessFunction": "content",
    "groupId": "group-content-campaign",
    "outcome": "Use compatible content tools to prepare a launch campaign with trackable outputs for HR recruiting.",
    "prompt": "Build a 8-panel workflow for HR recruiting: prepare a launch campaign with trackable outputs using content tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste HR recruiting notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible content chain.",
    "complexity": "mid-8",
    "layout": "2x4",
    "executionMode": "hybrid",
    "toolCount": 8,
    "panelCount": 8,
    "maxNestedUiDepth": 1,
    "tags": [
      "hr-recruiting",
      "content",
      "campaign",
      "mid-8"
    ],
    "compatibilitySummary": "8 tools arranged as 8 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Content node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "image-tool-page-keyword-density-checker",
            "role": "extract keyword usage from project text",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "Content node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 2,
            "toolId": "git-branch-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 2,
        "uiTitle": "Content node 3",
        "mode": "waterfall",
        "tools": [
          {
            "order": 3,
            "toolId": "product-listing-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 3,
        "uiTitle": "Content node 4",
        "mode": "waterfall",
        "tools": [
          {
            "order": 4,
            "toolId": "brand-name-title-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 4,
        "uiTitle": "Content node 5",
        "mode": "waterfall",
        "tools": [
          {
            "order": 5,
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 5,
        "uiTitle": "Content node 6",
        "mode": "waterfall",
        "tools": [
          {
            "order": 6,
            "toolId": "product-page-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 6,
        "uiTitle": "Content node 7",
        "mode": "waterfall",
        "tools": [
          {
            "order": 7,
            "toolId": "converter-page-keyword-density-checker",
            "role": "extract keyword usage from project text",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 7,
        "uiTitle": "Content node 8",
        "mode": "waterfall",
        "tools": [
          {
            "order": 8,
            "toolId": "redirect-url-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-hr-recruiting-seo-campaign-058",
    "title": "HR recruiting SEO campaign workflow",
    "field": "HR recruiting",
    "businessFunction": "SEO",
    "groupId": "group-seo-campaign",
    "outcome": "Use compatible SEO tools to prepare a launch campaign with trackable outputs for HR recruiting.",
    "prompt": "Build a 16-panel workflow for HR recruiting: prepare a launch campaign with trackable outputs using SEO tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste HR recruiting notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible SEO chain.",
    "complexity": "standard-16",
    "layout": "4x4",
    "executionMode": "waterfall",
    "toolCount": 16,
    "panelCount": 16,
    "maxNestedUiDepth": 1,
    "tags": [
      "hr-recruiting",
      "seo",
      "campaign",
      "standard-16"
    ],
    "compatibilitySummary": "16 tools arranged as 16 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "SEO node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "blog-post-slug-generator",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "SEO node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 2,
            "toolId": "javascript-string-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 2,
        "uiTitle": "SEO node 3",
        "mode": "waterfall",
        "tools": [
          {
            "order": 3,
            "toolId": "review-page-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 3,
        "uiTitle": "SEO node 4",
        "mode": "waterfall",
        "tools": [
          {
            "order": 4,
            "toolId": "blog-article-keyword-density-checker",
            "role": "extract keyword usage from project text",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 4,
        "uiTitle": "SEO node 5",
        "mode": "waterfall",
        "tools": [
          {
            "order": 5,
            "toolId": "contact-page-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 5,
        "uiTitle": "SEO node 6",
        "mode": "waterfall",
        "tools": [
          {
            "order": 6,
            "toolId": "markdown-link-base64-encoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 6,
        "uiTitle": "SEO node 7",
        "mode": "waterfall",
        "tools": [
          {
            "order": 7,
            "toolId": "landing-page-trim-whitespace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 7,
        "uiTitle": "SEO node 8",
        "mode": "waterfall",
        "tools": [
          {
            "order": 8,
            "toolId": "seo-title-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 8,
        "uiTitle": "SEO node 9",
        "mode": "waterfall",
        "tools": [
          {
            "order": 9,
            "toolId": "faq-page-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 9,
        "uiTitle": "SEO node 10",
        "mode": "waterfall",
        "tools": [
          {
            "order": 10,
            "toolId": "raffle-campaign-keyword-density-checker",
            "role": "extract keyword usage from project text",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 10,
        "uiTitle": "SEO node 11",
        "mode": "waterfall",
        "tools": [
          {
            "order": 11,
            "toolId": "tool-page-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 11,
        "uiTitle": "SEO node 12",
        "mode": "waterfall",
        "tools": [
          {
            "order": 12,
            "toolId": "email-body-base64-encoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 12,
        "uiTitle": "SEO node 13",
        "mode": "waterfall",
        "tools": [
          {
            "order": 13,
            "toolId": "blog-post-blank-line-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 13,
        "uiTitle": "SEO node 14",
        "mode": "waterfall",
        "tools": [
          {
            "order": 14,
            "toolId": "csv-cell-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 14,
        "uiTitle": "SEO node 15",
        "mode": "waterfall",
        "tools": [
          {
            "order": 15,
            "toolId": "tiktok-caption-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 15,
        "uiTitle": "SEO node 16",
        "mode": "waterfall",
        "tools": [
          {
            "order": 16,
            "toolId": "instagram-reel-keyword-density-checker",
            "role": "extract keyword usage from project text",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-hr-recruiting-social-campaign-059",
    "title": "HR recruiting social media campaign workflow",
    "field": "HR recruiting",
    "businessFunction": "social media",
    "groupId": "group-social-campaign",
    "outcome": "Use compatible social media tools to prepare a launch campaign with trackable outputs for HR recruiting.",
    "prompt": "Build a 8-panel workflow for HR recruiting: prepare a launch campaign with trackable outputs using social media tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste HR recruiting notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible social media chain.",
    "complexity": "mid-8",
    "layout": "4x2",
    "executionMode": "hybrid",
    "toolCount": 8,
    "panelCount": 8,
    "maxNestedUiDepth": 1,
    "tags": [
      "hr-recruiting",
      "social",
      "campaign",
      "mid-8"
    ],
    "compatibilitySummary": "8 tools arranged as 8 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Social media node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "xml-node-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "Social media node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 2,
            "toolId": "folder-name-find-and-replace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 2,
        "uiTitle": "Social media node 3",
        "mode": "waterfall",
        "tools": [
          {
            "order": 3,
            "toolId": "category-page-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 3,
        "uiTitle": "Social media node 4",
        "mode": "waterfall",
        "tools": [
          {
            "order": 4,
            "toolId": "donation-campaign-keyword-density-checker",
            "role": "extract keyword usage from project text",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 4,
        "uiTitle": "Social media node 5",
        "mode": "waterfall",
        "tools": [
          {
            "order": 5,
            "toolId": "garden-guide-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 5,
        "uiTitle": "Social media node 6",
        "mode": "waterfall",
        "tools": [
          {
            "order": 6,
            "toolId": "svg-snippet-html-escaper",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 6,
        "uiTitle": "Social media node 7",
        "mode": "waterfall",
        "tools": [
          {
            "order": 7,
            "toolId": "header-value-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 7,
        "uiTitle": "Social media node 8",
        "mode": "waterfall",
        "tools": [
          {
            "order": 8,
            "toolId": "schema-text-sentence-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-hr-recruiting-email-campaign-060",
    "title": "HR recruiting email campaign workflow",
    "field": "HR recruiting",
    "businessFunction": "email",
    "groupId": "group-email-campaign",
    "outcome": "Use compatible email tools to prepare a launch campaign with trackable outputs for HR recruiting.",
    "prompt": "Build a 32-tool nested workbench for HR recruiting: prepare a launch campaign with trackable outputs using email tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste HR recruiting notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible email chain.",
    "complexity": "advanced-32",
    "layout": "4x4",
    "executionMode": "hybrid-waterfall",
    "toolCount": 32,
    "panelCount": 16,
    "maxNestedUiDepth": 2,
    "tags": [
      "hr-recruiting",
      "email",
      "campaign",
      "advanced-32"
    ],
    "compatibilitySummary": "32 tools arranged as 16 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Email node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "json-snippet-sentence-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "Email node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 3,
            "toolId": "homepage-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 1
          },
          {
            "order": 4,
            "toolId": "image-tool-page-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 2,
        "uiTitle": "Email node 3",
        "mode": "waterfall",
        "tools": [
          {
            "order": 5,
            "toolId": "api-token-html-escaper",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 1
          },
          {
            "order": 6,
            "toolId": "tool-url-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 3,
        "uiTitle": "Email node 4",
        "mode": "waterfall",
        "tools": [
          {
            "order": 7,
            "toolId": "video-script-text-reverser",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 8,
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 4,
        "uiTitle": "Email node 5",
        "mode": "waterfall",
        "tools": [
          {
            "order": 9,
            "toolId": "about-page-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 1
          },
          {
            "order": 10,
            "toolId": "converter-page-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 5,
        "uiTitle": "Email node 6",
        "mode": "waterfall",
        "tools": [
          {
            "order": 11,
            "toolId": "sitemap-url-html-escaper",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 1
          },
          {
            "order": 12,
            "toolId": "environment-value-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 6,
        "uiTitle": "Email node 7",
        "mode": "waterfall",
        "tools": [
          {
            "order": 13,
            "toolId": "invoice-memo-uppercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 14,
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 7,
        "uiTitle": "Email node 8",
        "mode": "waterfall",
        "tools": [
          {
            "order": 15,
            "toolId": "instagram-reel-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 1
          },
          {
            "order": 16,
            "toolId": "youtube-description-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 8,
        "uiTitle": "Email node 9",
        "mode": "waterfall",
        "tools": [
          {
            "order": 17,
            "toolId": "markdown-link-html-escaper",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 1
          },
          {
            "order": 18,
            "toolId": "product-listing-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 9,
        "uiTitle": "Email node 10",
        "mode": "waterfall",
        "tools": [
          {
            "order": 19,
            "toolId": "video-script-extra-space-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 20,
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 10,
        "uiTitle": "Email node 11",
        "mode": "waterfall",
        "tools": [
          {
            "order": 21,
            "toolId": "blog-article-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 1
          },
          {
            "order": 22,
            "toolId": "plant-profile-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 11,
        "uiTitle": "Email node 12",
        "mode": "waterfall",
        "tools": [
          {
            "order": 23,
            "toolId": "email-body-html-escaper",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 1
          },
          {
            "order": 24,
            "toolId": "xml-node-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 12,
        "uiTitle": "Email node 13",
        "mode": "waterfall",
        "tools": [
          {
            "order": 25,
            "toolId": "invoice-memo-sentence-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 26,
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 13,
        "uiTitle": "Email node 14",
        "mode": "waterfall",
        "tools": [
          {
            "order": 27,
            "toolId": "local-service-page-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 1
          },
          {
            "order": 28,
            "toolId": "garden-guide-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 14,
        "uiTitle": "Email node 15",
        "mode": "waterfall",
        "tools": [
          {
            "order": 29,
            "toolId": "xml-node-html-escaper",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 1
          },
          {
            "order": 30,
            "toolId": "header-value-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 15,
        "uiTitle": "Email node 16",
        "mode": "waterfall",
        "tools": [
          {
            "order": 31,
            "toolId": "url-slug-text-reverser",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 32,
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
            "uiDepth": 2
          }
        ]
      }
    ]
  },
  {
    "id": "project-hr-recruiting-data-campaign-061",
    "title": "HR recruiting data cleanup campaign workflow",
    "field": "HR recruiting",
    "businessFunction": "data cleanup",
    "groupId": "group-data-campaign",
    "outcome": "Use compatible data cleanup tools to prepare a launch campaign with trackable outputs for HR recruiting.",
    "prompt": "Build a 16-panel workflow for HR recruiting: prepare a launch campaign with trackable outputs using data cleanup tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste HR recruiting notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible data cleanup chain.",
    "complexity": "standard-16",
    "layout": "4x4",
    "executionMode": "waterfall",
    "toolCount": 16,
    "panelCount": 16,
    "maxNestedUiDepth": 1,
    "tags": [
      "hr-recruiting",
      "data",
      "campaign",
      "standard-16"
    ],
    "compatibilitySummary": "16 tools arranged as 16 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Data cleanup node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "api-token-json-key-extractor",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "Data cleanup node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 2,
            "toolId": "schema-markup-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 2,
        "uiTitle": "Data cleanup node 3",
        "mode": "waterfall",
        "tools": [
          {
            "order": 3,
            "toolId": "seo-title-title-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 3,
        "uiTitle": "Data cleanup node 4",
        "mode": "waterfall",
        "tools": [
          {
            "order": 4,
            "toolId": "docker-tag-html-escaper",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 4,
        "uiTitle": "Data cleanup node 5",
        "mode": "waterfall",
        "tools": [
          {
            "order": 5,
            "toolId": "youtube-description-uuid-generator",
            "role": "create unique IDs for assets, records, or tasks",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 5,
        "uiTitle": "Data cleanup node 6",
        "mode": "waterfall",
        "tools": [
          {
            "order": 6,
            "toolId": "robots-rule-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 6,
        "uiTitle": "Data cleanup node 7",
        "mode": "waterfall",
        "tools": [
          {
            "order": 7,
            "toolId": "jwt-payload-json-formatter",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 7,
        "uiTitle": "Data cleanup node 8",
        "mode": "waterfall",
        "tools": [
          {
            "order": 8,
            "toolId": "commit-message-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 8,
        "uiTitle": "Data cleanup node 9",
        "mode": "waterfall",
        "tools": [
          {
            "order": 9,
            "toolId": "garden-journal-blank-line-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 9,
        "uiTitle": "Data cleanup node 10",
        "mode": "waterfall",
        "tools": [
          {
            "order": 10,
            "toolId": "worker-route-html-escaper",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 10,
        "uiTitle": "Data cleanup node 11",
        "mode": "waterfall",
        "tools": [
          {
            "order": 11,
            "toolId": "json-snippet-uuid-generator",
            "role": "create unique IDs for assets, records, or tasks",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 11,
        "uiTitle": "Data cleanup node 12",
        "mode": "waterfall",
        "tools": [
          {
            "order": 12,
            "toolId": "invoice-memo-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 12,
        "uiTitle": "Data cleanup node 13",
        "mode": "waterfall",
        "tools": [
          {
            "order": 13,
            "toolId": "sql-snippet-json-key-extractor",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 13,
        "uiTitle": "Data cleanup node 14",
        "mode": "waterfall",
        "tools": [
          {
            "order": 14,
            "toolId": "landing-page-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 14,
        "uiTitle": "Data cleanup node 15",
        "mode": "waterfall",
        "tools": [
          {
            "order": 15,
            "toolId": "seo-title-find-and-replace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 15,
        "uiTitle": "Data cleanup node 16",
        "mode": "waterfall",
        "tools": [
          {
            "order": 16,
            "toolId": "schema-markup-html-escaper",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-hr-recruiting-reporting-campaign-062",
    "title": "HR recruiting reporting campaign workflow",
    "field": "HR recruiting",
    "businessFunction": "reporting",
    "groupId": "group-reporting-campaign",
    "outcome": "Use compatible reporting tools to prepare a launch campaign with trackable outputs for HR recruiting.",
    "prompt": "Build a micro workflow for HR recruiting: prepare a launch campaign with trackable outputs using reporting tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste HR recruiting notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible reporting chain.",
    "complexity": "micro-2-4",
    "layout": "2x1",
    "executionMode": "compact-waterfall",
    "toolCount": 4,
    "panelCount": 2,
    "maxNestedUiDepth": 2,
    "tags": [
      "hr-recruiting",
      "reporting",
      "campaign",
      "micro-2-4"
    ],
    "compatibilitySummary": "4 tools arranged as 2 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Reporting node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "keyword-list-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "newsletter-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "Reporting node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 3,
            "toolId": "code-comment-text-reverser",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 4,
            "toolId": "csv-export-add-years-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 2
          }
        ]
      }
    ]
  },
  {
    "id": "project-hr-recruiting-compliance-campaign-063",
    "title": "HR recruiting compliance campaign workflow",
    "field": "HR recruiting",
    "businessFunction": "compliance",
    "groupId": "group-compliance-campaign",
    "outcome": "Use compatible compliance tools to prepare a launch campaign with trackable outputs for HR recruiting.",
    "prompt": "Build a 8-panel workflow for HR recruiting: prepare a launch campaign with trackable outputs using compliance tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste HR recruiting notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible compliance chain.",
    "complexity": "mid-8",
    "layout": "4x2",
    "executionMode": "hybrid",
    "toolCount": 8,
    "panelCount": 8,
    "maxNestedUiDepth": 1,
    "tags": [
      "hr-recruiting",
      "compliance",
      "campaign",
      "mid-8"
    ],
    "compatibilitySummary": "8 tools arranged as 8 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Compliance node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "recipe-notes-add-months-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "Compliance node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 2,
            "toolId": "worker-route-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 2,
        "uiTitle": "Compliance node 3",
        "mode": "waterfall",
        "tools": [
          {
            "order": 3,
            "toolId": "javascript-string-json-minifier",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 3,
        "uiTitle": "Compliance node 4",
        "mode": "waterfall",
        "tools": [
          {
            "order": 4,
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 4,
        "uiTitle": "Compliance node 5",
        "mode": "waterfall",
        "tools": [
          {
            "order": 5,
            "toolId": "json-snippet-blank-line-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 5,
        "uiTitle": "Compliance node 6",
        "mode": "waterfall",
        "tools": [
          {
            "order": 6,
            "toolId": "plant-care-notes-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 6,
        "uiTitle": "Compliance node 7",
        "mode": "waterfall",
        "tools": [
          {
            "order": 7,
            "toolId": "press-release-add-months-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 7,
        "uiTitle": "Compliance node 8",
        "mode": "waterfall",
        "tools": [
          {
            "order": 8,
            "toolId": "git-branch-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-hr-recruiting-scheduling-campaign-064",
    "title": "HR recruiting scheduling campaign workflow",
    "field": "HR recruiting",
    "businessFunction": "scheduling",
    "groupId": "group-scheduling-campaign",
    "outcome": "Use compatible scheduling tools to prepare a launch campaign with trackable outputs for HR recruiting.",
    "prompt": "Build a 16-panel workflow for HR recruiting: prepare a launch campaign with trackable outputs using scheduling tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste HR recruiting notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible scheduling chain.",
    "complexity": "standard-16",
    "layout": "4x4",
    "executionMode": "waterfall",
    "toolCount": 16,
    "panelCount": 16,
    "maxNestedUiDepth": 1,
    "tags": [
      "hr-recruiting",
      "scheduling",
      "campaign",
      "standard-16"
    ],
    "compatibilitySummary": "16 tools arranged as 16 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Scheduling node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "garden-journal-extra-space-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "Scheduling node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 2,
            "toolId": "webhook-body-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 2,
        "uiTitle": "Scheduling node 3",
        "mode": "waterfall",
        "tools": [
          {
            "order": 3,
            "toolId": "file-name-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 3,
        "uiTitle": "Scheduling node 4",
        "mode": "waterfall",
        "tools": [
          {
            "order": 4,
            "toolId": "instagram-caption-add-years-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 4,
        "uiTitle": "Scheduling node 5",
        "mode": "waterfall",
        "tools": [
          {
            "order": 5,
            "toolId": "hashtag-set-date-to-unix-timestamp",
            "role": "convert or stamp time values",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 5,
        "uiTitle": "Scheduling node 6",
        "mode": "waterfall",
        "tools": [
          {
            "order": 6,
            "toolId": "garden-journal-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 6,
        "uiTitle": "Scheduling node 7",
        "mode": "waterfall",
        "tools": [
          {
            "order": 7,
            "toolId": "seo-title-lowercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 7,
        "uiTitle": "Scheduling node 8",
        "mode": "waterfall",
        "tools": [
          {
            "order": 8,
            "toolId": "press-release-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 8,
        "uiTitle": "Scheduling node 9",
        "mode": "waterfall",
        "tools": [
          {
            "order": 9,
            "toolId": "youtube-description-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 9,
        "uiTitle": "Scheduling node 10",
        "mode": "waterfall",
        "tools": [
          {
            "order": 10,
            "toolId": "hashtag-set-add-years-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 10,
        "uiTitle": "Scheduling node 11",
        "mode": "waterfall",
        "tools": [
          {
            "order": 11,
            "toolId": "garden-journal-date-to-unix-timestamp",
            "role": "convert or stamp time values",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 11,
        "uiTitle": "Scheduling node 12",
        "mode": "waterfall",
        "tools": [
          {
            "order": 12,
            "toolId": "recipe-notes-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 12,
        "uiTitle": "Scheduling node 13",
        "mode": "waterfall",
        "tools": [
          {
            "order": 13,
            "toolId": "folder-name-text-reverser",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 13,
        "uiTitle": "Scheduling node 14",
        "mode": "waterfall",
        "tools": [
          {
            "order": 14,
            "toolId": "error-message-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 14,
        "uiTitle": "Scheduling node 15",
        "mode": "waterfall",
        "tools": [
          {
            "order": 15,
            "toolId": "landing-page-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 15,
        "uiTitle": "Scheduling node 16",
        "mode": "waterfall",
        "tools": [
          {
            "order": 16,
            "toolId": "folder-name-add-weeks-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-hr-recruiting-product-campaign-065",
    "title": "HR recruiting product campaign workflow",
    "field": "HR recruiting",
    "businessFunction": "product",
    "groupId": "group-product-campaign",
    "outcome": "Use compatible product tools to prepare a launch campaign with trackable outputs for HR recruiting.",
    "prompt": "Build a 64-tool nested waterfall for HR recruiting: prepare a launch campaign with trackable outputs using product tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste HR recruiting notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible product chain.",
    "complexity": "nested-64",
    "layout": "4x4",
    "executionMode": "nested-waterfall",
    "toolCount": 64,
    "panelCount": 16,
    "maxNestedUiDepth": 4,
    "tags": [
      "hr-recruiting",
      "product",
      "campaign",
      "nested-64"
    ],
    "compatibilitySummary": "64 tools arranged as 16 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Product node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "schema-markup-json-key-extractor",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "plant-care-notes-title-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 3,
            "toolId": "query-string-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 3
          },
          {
            "order": 4,
            "toolId": "form-payload-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "Product node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 5,
            "toolId": "newsletter-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 6,
            "toolId": "product-listing-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 2
          },
          {
            "order": 7,
            "toolId": "environment-value-json-formatter",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 3
          },
          {
            "order": 8,
            "toolId": "cover-letter-uppercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 2,
        "uiTitle": "Product node 3",
        "mode": "waterfall",
        "tools": [
          {
            "order": 9,
            "toolId": "git-branch-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 10,
            "toolId": "query-string-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 2
          },
          {
            "order": 11,
            "toolId": "hashtag-set-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 12,
            "toolId": "json-snippet-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 3,
        "uiTitle": "Product node 4",
        "mode": "waterfall",
        "tools": [
          {
            "order": 13,
            "toolId": "query-string-json-key-extractor",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 1
          },
          {
            "order": 14,
            "toolId": "plant-care-notes-find-and-replace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 15,
            "toolId": "xml-node-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 3
          },
          {
            "order": 16,
            "toolId": "api-token-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 4,
        "uiTitle": "Product node 5",
        "mode": "waterfall",
        "tools": [
          {
            "order": 17,
            "toolId": "csv-export-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 18,
            "toolId": "email-subject-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 2
          },
          {
            "order": 19,
            "toolId": "callback-url-json-minifier",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 3
          },
          {
            "order": 20,
            "toolId": "cover-letter-sentence-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 5,
        "uiTitle": "Product node 6",
        "mode": "waterfall",
        "tools": [
          {
            "order": 21,
            "toolId": "prompt-text-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 22,
            "toolId": "instagram-caption-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 2
          },
          {
            "order": 23,
            "toolId": "resume-bullet-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 24,
            "toolId": "youtube-description-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 6,
        "uiTitle": "Product node 7",
        "mode": "waterfall",
        "tools": [
          {
            "order": 25,
            "toolId": "oauth-state-json-key-extractor",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 1
          },
          {
            "order": 26,
            "toolId": "order-note-title-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 27,
            "toolId": "form-payload-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 3
          },
          {
            "order": 28,
            "toolId": "schema-markup-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 7,
        "uiTitle": "Product node 8",
        "mode": "waterfall",
        "tools": [
          {
            "order": 29,
            "toolId": "landing-page-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 30,
            "toolId": "plant-care-notes-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 2
          },
          {
            "order": 31,
            "toolId": "webhook-body-json-minifier",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 3
          },
          {
            "order": 32,
            "toolId": "coupon-text-uppercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 8,
        "uiTitle": "Product node 9",
        "mode": "waterfall",
        "tools": [
          {
            "order": 33,
            "toolId": "webhook-body-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 34,
            "toolId": "commit-message-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 2
          },
          {
            "order": 35,
            "toolId": "file-name-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 36,
            "toolId": "html-block-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 9,
        "uiTitle": "Product node 10",
        "mode": "waterfall",
        "tools": [
          {
            "order": 37,
            "toolId": "json-config-json-key-extractor",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 1
          },
          {
            "order": 38,
            "toolId": "order-note-find-and-replace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 39,
            "toolId": "press-release-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 3
          },
          {
            "order": 40,
            "toolId": "landing-page-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 10,
        "uiTitle": "Product node 11",
        "mode": "waterfall",
        "tools": [
          {
            "order": 41,
            "toolId": "blog-post-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 42,
            "toolId": "customer-reply-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 2
          },
          {
            "order": 43,
            "toolId": "sitemap-url-json-minifier",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 3
          },
          {
            "order": 44,
            "toolId": "coupon-text-sentence-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 11,
        "uiTitle": "Product node 12",
        "mode": "waterfall",
        "tools": [
          {
            "order": 45,
            "toolId": "error-message-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 46,
            "toolId": "store-url-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 2
          },
          {
            "order": 47,
            "toolId": "press-release-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 48,
            "toolId": "seo-title-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 12,
        "uiTitle": "Product node 13",
        "mode": "waterfall",
        "tools": [
          {
            "order": 49,
            "toolId": "html-snippet-json-key-extractor",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 1
          },
          {
            "order": 50,
            "toolId": "newsletter-title-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 51,
            "toolId": "user-message-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 3
          },
          {
            "order": 52,
            "toolId": "docker-tag-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 13,
        "uiTitle": "Product node 14",
        "mode": "waterfall",
        "tools": [
          {
            "order": 53,
            "toolId": "invoice-memo-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 54,
            "toolId": "markdown-doc-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 2
          },
          {
            "order": 55,
            "toolId": "robots-rule-json-minifier",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 3
          },
          {
            "order": 56,
            "toolId": "community-rule-uppercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 14,
        "uiTitle": "Product node 15",
        "mode": "waterfall",
        "tools": [
          {
            "order": 57,
            "toolId": "pages-url-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 58,
            "toolId": "pages-url-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 2
          },
          {
            "order": 59,
            "toolId": "ebook-chapter-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 60,
            "toolId": "folder-name-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 15,
        "uiTitle": "Product node 16",
        "mode": "waterfall",
        "tools": [
          {
            "order": 61,
            "toolId": "csv-cell-json-formatter",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 1
          },
          {
            "order": 62,
            "toolId": "newsletter-find-and-replace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 63,
            "toolId": "email-subject-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 3
          },
          {
            "order": 64,
            "toolId": "uuid-list-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 4
          }
        ]
      }
    ]
  },
  {
    "id": "project-hr-recruiting-ux-campaign-066",
    "title": "HR recruiting UX/UI campaign workflow",
    "field": "HR recruiting",
    "businessFunction": "UX/UI",
    "groupId": "group-ux-campaign",
    "outcome": "Use compatible UX/UI tools to prepare a launch campaign with trackable outputs for HR recruiting.",
    "prompt": "Build a micro workflow for HR recruiting: prepare a launch campaign with trackable outputs using UX/UI tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste HR recruiting notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible UX/UI chain.",
    "complexity": "micro-2-4",
    "layout": "2x1",
    "executionMode": "compact-waterfall",
    "toolCount": 4,
    "panelCount": 2,
    "maxNestedUiDepth": 2,
    "tags": [
      "hr-recruiting",
      "ux",
      "campaign",
      "micro-2-4"
    ],
    "compatibilitySummary": "4 tools arranged as 2 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "UX/UI node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "support-ticket-hex-to-rgb-converter",
            "role": "convert brand colors and palette values",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "resume-bullet-color-contrast-checker",
            "role": "check readability and accessibility contrast",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "UX/UI node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 3,
            "toolId": "video-script-lowercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 4,
            "toolId": "invoice-memo-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 2
          }
        ]
      }
    ]
  },
  {
    "id": "project-hr-recruiting-web-launch-campaign-067",
    "title": "HR recruiting web launch campaign workflow",
    "field": "HR recruiting",
    "businessFunction": "web launch",
    "groupId": "group-web-launch-campaign",
    "outcome": "Use compatible web launch tools to prepare a launch campaign with trackable outputs for HR recruiting.",
    "prompt": "Build a 16-panel workflow for HR recruiting: prepare a launch campaign with trackable outputs using web launch tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste HR recruiting notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible web launch chain.",
    "complexity": "standard-16",
    "layout": "4x4",
    "executionMode": "waterfall",
    "toolCount": 16,
    "panelCount": 16,
    "maxNestedUiDepth": 1,
    "tags": [
      "hr-recruiting",
      "web-launch",
      "campaign",
      "standard-16"
    ],
    "compatibilitySummary": "16 tools arranged as 16 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Web launch node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "email-subject-color-contrast-checker",
            "role": "check readability and accessibility contrast",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "Web launch node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 2,
            "toolId": "pinterest-pin-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 2,
        "uiTitle": "Web launch node 3",
        "mode": "waterfall",
        "tools": [
          {
            "order": 3,
            "toolId": "sitemap-page-keyword-density-checker",
            "role": "extract keyword usage from project text",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 3,
        "uiTitle": "Web launch node 4",
        "mode": "waterfall",
        "tools": [
          {
            "order": 4,
            "toolId": "youtube-video-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 4,
        "uiTitle": "Web launch node 5",
        "mode": "waterfall",
        "tools": [
          {
            "order": 5,
            "toolId": "python-string-json-minifier",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 5,
        "uiTitle": "Web launch node 6",
        "mode": "waterfall",
        "tools": [
          {
            "order": 6,
            "toolId": "youtube-description-hex-to-rgb-converter",
            "role": "convert brand colors and palette values",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 6,
        "uiTitle": "Web launch node 7",
        "mode": "waterfall",
        "tools": [
          {
            "order": 7,
            "toolId": "plant-care-notes-color-contrast-checker",
            "role": "check readability and accessibility contrast",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 7,
        "uiTitle": "Web launch node 8",
        "mode": "waterfall",
        "tools": [
          {
            "order": 8,
            "toolId": "contact-page-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 8,
        "uiTitle": "Web launch node 9",
        "mode": "waterfall",
        "tools": [
          {
            "order": 9,
            "toolId": "local-service-page-keyword-density-checker",
            "role": "extract keyword usage from project text",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 9,
        "uiTitle": "Web launch node 10",
        "mode": "waterfall",
        "tools": [
          {
            "order": 10,
            "toolId": "policy-page-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 10,
        "uiTitle": "Web launch node 11",
        "mode": "waterfall",
        "tools": [
          {
            "order": 11,
            "toolId": "callback-url-json-formatter",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 11,
        "uiTitle": "Web launch node 12",
        "mode": "waterfall",
        "tools": [
          {
            "order": 12,
            "toolId": "plant-care-notes-hex-to-rgb-converter",
            "role": "convert brand colors and palette values",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 12,
        "uiTitle": "Web launch node 13",
        "mode": "waterfall",
        "tools": [
          {
            "order": 13,
            "toolId": "brand-name-color-contrast-checker",
            "role": "check readability and accessibility contrast",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 13,
        "uiTitle": "Web launch node 14",
        "mode": "waterfall",
        "tools": [
          {
            "order": 14,
            "toolId": "policy-page-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 14,
        "uiTitle": "Web launch node 15",
        "mode": "waterfall",
        "tools": [
          {
            "order": 15,
            "toolId": "facebook-post-keyword-density-checker",
            "role": "extract keyword usage from project text",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 15,
        "uiTitle": "Web launch node 16",
        "mode": "waterfall",
        "tools": [
          {
            "order": 16,
            "toolId": "google-result-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-hr-recruiting-developer-campaign-068",
    "title": "HR recruiting developer campaign workflow",
    "field": "HR recruiting",
    "businessFunction": "developer",
    "groupId": "group-developer-campaign",
    "outcome": "Use compatible developer tools to prepare a launch campaign with trackable outputs for HR recruiting.",
    "prompt": "Build a micro workflow for HR recruiting: prepare a launch campaign with trackable outputs using developer tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste HR recruiting notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible developer chain.",
    "complexity": "micro-2-4",
    "layout": "1x1",
    "executionMode": "compact-waterfall",
    "toolCount": 3,
    "panelCount": 1,
    "maxNestedUiDepth": 3,
    "tags": [
      "hr-recruiting",
      "developer",
      "campaign",
      "micro-2-4"
    ],
    "compatibilitySummary": "3 tools arranged as 1 panel UI; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Developer node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "plant-care-notes-uuid-generator",
            "role": "create unique IDs for assets, records, or tasks",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "hashtag-set-password-generator",
            "role": "create secure passwords for the project",
            "uiDepth": 2
          },
          {
            "order": 3,
            "toolId": "yaml-value-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 3
          }
        ]
      }
    ]
  },
  {
    "id": "project-hr-recruiting-security-campaign-069",
    "title": "HR recruiting security campaign workflow",
    "field": "HR recruiting",
    "businessFunction": "security",
    "groupId": "group-security-campaign",
    "outcome": "Use compatible security tools to prepare a launch campaign with trackable outputs for HR recruiting.",
    "prompt": "Build a 8-panel workflow for HR recruiting: prepare a launch campaign with trackable outputs using security tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste HR recruiting notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible security chain.",
    "complexity": "mid-8",
    "layout": "2x4",
    "executionMode": "hybrid",
    "toolCount": 8,
    "panelCount": 8,
    "maxNestedUiDepth": 1,
    "tags": [
      "hr-recruiting",
      "security",
      "campaign",
      "mid-8"
    ],
    "compatibilitySummary": "8 tools arranged as 8 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Security node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "oauth-state-json-key-extractor",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "Security node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 2,
            "toolId": "markdown-doc-sentence-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 2,
        "uiTitle": "Security node 3",
        "mode": "waterfall",
        "tools": [
          {
            "order": 3,
            "toolId": "csv-cell-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 3,
        "uiTitle": "Security node 4",
        "mode": "waterfall",
        "tools": [
          {
            "order": 4,
            "toolId": "recipe-notes-password-generator",
            "role": "create secure passwords for the project",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 4,
        "uiTitle": "Security node 5",
        "mode": "waterfall",
        "tools": [
          {
            "order": 5,
            "toolId": "meeting-notes-uuid-generator",
            "role": "create unique IDs for assets, records, or tasks",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 5,
        "uiTitle": "Security node 6",
        "mode": "waterfall",
        "tools": [
          {
            "order": 6,
            "toolId": "callback-url-base64-decoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 6,
        "uiTitle": "Security node 7",
        "mode": "waterfall",
        "tools": [
          {
            "order": 7,
            "toolId": "webhook-body-json-minifier",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 7,
        "uiTitle": "Security node 8",
        "mode": "waterfall",
        "tools": [
          {
            "order": 8,
            "toolId": "blog-post-text-reverser",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-hr-recruiting-training-campaign-070",
    "title": "HR recruiting training campaign workflow",
    "field": "HR recruiting",
    "businessFunction": "training",
    "groupId": "group-training-campaign",
    "outcome": "Use compatible training tools to prepare a launch campaign with trackable outputs for HR recruiting.",
    "prompt": "Build a 32-tool nested workbench for HR recruiting: prepare a launch campaign with trackable outputs using training tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste HR recruiting notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible training chain.",
    "complexity": "advanced-32",
    "layout": "4x4",
    "executionMode": "hybrid-waterfall",
    "toolCount": 32,
    "panelCount": 16,
    "maxNestedUiDepth": 2,
    "tags": [
      "hr-recruiting",
      "training",
      "campaign",
      "advanced-32"
    ],
    "compatibilitySummary": "32 tools arranged as 16 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Training node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "git-branch-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "garden-journal-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "Training node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 3,
            "toolId": "seo-title-blank-line-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 4,
            "toolId": "sql-snippet-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 2,
        "uiTitle": "Training node 3",
        "mode": "waterfall",
        "tools": [
          {
            "order": 5,
            "toolId": "product-listing-add-weeks-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          },
          {
            "order": 6,
            "toolId": "hashtag-set-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 3,
        "uiTitle": "Training node 4",
        "mode": "waterfall",
        "tools": [
          {
            "order": 7,
            "toolId": "xml-node-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 8,
            "toolId": "code-comment-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 4,
        "uiTitle": "Training node 5",
        "mode": "waterfall",
        "tools": [
          {
            "order": 9,
            "toolId": "folder-name-lowercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 10,
            "toolId": "dns-record-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 5,
        "uiTitle": "Training node 6",
        "mode": "waterfall",
        "tools": [
          {
            "order": 11,
            "toolId": "plant-care-notes-add-weeks-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          },
          {
            "order": 12,
            "toolId": "brand-name-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 6,
        "uiTitle": "Training node 7",
        "mode": "waterfall",
        "tools": [
          {
            "order": 13,
            "toolId": "prompt-text-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 14,
            "toolId": "recipe-notes-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 7,
        "uiTitle": "Training node 8",
        "mode": "waterfall",
        "tools": [
          {
            "order": 15,
            "toolId": "schema-text-slug-generator",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 16,
            "toolId": "oauth-state-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 8,
        "uiTitle": "Training node 9",
        "mode": "waterfall",
        "tools": [
          {
            "order": 17,
            "toolId": "meta-description-add-weeks-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          },
          {
            "order": 18,
            "toolId": "newsletter-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 9,
        "uiTitle": "Training node 10",
        "mode": "waterfall",
        "tools": [
          {
            "order": 19,
            "toolId": "form-payload-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 20,
            "toolId": "keyword-list-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 10,
        "uiTitle": "Training node 11",
        "mode": "waterfall",
        "tools": [
          {
            "order": 21,
            "toolId": "file-name-trim-whitespace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 22,
            "toolId": "user-message-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 11,
        "uiTitle": "Training node 12",
        "mode": "waterfall",
        "tools": [
          {
            "order": 23,
            "toolId": "landing-page-add-weeks-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          },
          {
            "order": 24,
            "toolId": "garden-journal-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 12,
        "uiTitle": "Training node 13",
        "mode": "waterfall",
        "tools": [
          {
            "order": 25,
            "toolId": "webhook-body-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 26,
            "toolId": "facebook-bio-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 13,
        "uiTitle": "Training node 14",
        "mode": "waterfall",
        "tools": [
          {
            "order": 27,
            "toolId": "schema-text-blank-line-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 28,
            "toolId": "facebook-bio-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 14,
        "uiTitle": "Training node 15",
        "mode": "waterfall",
        "tools": [
          {
            "order": 29,
            "toolId": "json-snippet-add-weeks-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          },
          {
            "order": 30,
            "toolId": "blog-post-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 15,
        "uiTitle": "Training node 16",
        "mode": "waterfall",
        "tools": [
          {
            "order": 31,
            "toolId": "press-release-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 32,
            "toolId": "ad-copy-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 2
          }
        ]
      }
    ]
  },
  {
    "id": "project-hr-recruiting-inventory-campaign-071",
    "title": "HR recruiting inventory campaign workflow",
    "field": "HR recruiting",
    "businessFunction": "inventory",
    "groupId": "group-inventory-campaign",
    "outcome": "Use compatible inventory tools to prepare a launch campaign with trackable outputs for HR recruiting.",
    "prompt": "Build a 8-panel workflow for HR recruiting: prepare a launch campaign with trackable outputs using inventory tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste HR recruiting notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible inventory chain.",
    "complexity": "mid-8",
    "layout": "4x2",
    "executionMode": "hybrid",
    "toolCount": 8,
    "panelCount": 8,
    "maxNestedUiDepth": 1,
    "tags": [
      "hr-recruiting",
      "inventory",
      "campaign",
      "mid-8"
    ],
    "compatibilitySummary": "8 tools arranged as 8 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Inventory node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "domain-list-add-weeks-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "Inventory node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 2,
            "toolId": "base-url-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 2,
        "uiTitle": "Inventory node 3",
        "mode": "waterfall",
        "tools": [
          {
            "order": 3,
            "toolId": "plant-care-notes-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 3,
        "uiTitle": "Inventory node 4",
        "mode": "waterfall",
        "tools": [
          {
            "order": 4,
            "toolId": "square-meter-to-square-millimeter-converter",
            "role": "convert operational measurements",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 4,
        "uiTitle": "Inventory node 5",
        "mode": "waterfall",
        "tools": [
          {
            "order": 5,
            "toolId": "log-line-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 5,
        "uiTitle": "Inventory node 6",
        "mode": "waterfall",
        "tools": [
          {
            "order": 6,
            "toolId": "file-name-extra-space-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 6,
        "uiTitle": "Inventory node 7",
        "mode": "waterfall",
        "tools": [
          {
            "order": 7,
            "toolId": "csv-export-add-weeks-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 7,
        "uiTitle": "Inventory node 8",
        "mode": "waterfall",
        "tools": [
          {
            "order": 8,
            "toolId": "redirect-url-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-hr-recruiting-pricing-campaign-072",
    "title": "HR recruiting pricing campaign workflow",
    "field": "HR recruiting",
    "businessFunction": "pricing",
    "groupId": "group-pricing-campaign",
    "outcome": "Use compatible pricing tools to prepare a launch campaign with trackable outputs for HR recruiting.",
    "prompt": "Build a micro workflow for HR recruiting: prepare a launch campaign with trackable outputs using pricing tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste HR recruiting notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible pricing chain.",
    "complexity": "micro-2-4",
    "layout": "1x1",
    "executionMode": "compact-waterfall",
    "toolCount": 3,
    "panelCount": 1,
    "maxNestedUiDepth": 3,
    "tags": [
      "hr-recruiting",
      "pricing",
      "campaign",
      "micro-2-4"
    ],
    "compatibilitySummary": "3 tools arranged as 1 panel UI; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Pricing node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "newsletter-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "product-listing-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 2
          },
          {
            "order": 3,
            "toolId": "store-order-total-calculator",
            "role": "calculate invoice totals from line-item assumptions",
            "uiDepth": 3
          }
        ]
      }
    ]
  },
  {
    "id": "project-hr-recruiting-outreach-campaign-073",
    "title": "HR recruiting outreach campaign workflow",
    "field": "HR recruiting",
    "businessFunction": "outreach",
    "groupId": "group-outreach-campaign",
    "outcome": "Use compatible outreach tools to prepare a launch campaign with trackable outputs for HR recruiting.",
    "prompt": "Build a 16-panel workflow for HR recruiting: prepare a launch campaign with trackable outputs using outreach tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste HR recruiting notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible outreach chain.",
    "complexity": "standard-16",
    "layout": "4x4",
    "executionMode": "waterfall",
    "toolCount": 16,
    "panelCount": 16,
    "maxNestedUiDepth": 1,
    "tags": [
      "hr-recruiting",
      "outreach",
      "campaign",
      "standard-16"
    ],
    "compatibilitySummary": "16 tools arranged as 16 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Outreach node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "image-tool-page-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "Outreach node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 2,
            "toolId": "about-page-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 2,
        "uiTitle": "Outreach node 3",
        "mode": "waterfall",
        "tools": [
          {
            "order": 3,
            "toolId": "xml-node-base64-encoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 3,
        "uiTitle": "Outreach node 4",
        "mode": "waterfall",
        "tools": [
          {
            "order": 4,
            "toolId": "developer-tool-page-keyword-density-checker",
            "role": "extract keyword usage from project text",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 4,
        "uiTitle": "Outreach node 5",
        "mode": "waterfall",
        "tools": [
          {
            "order": 5,
            "toolId": "regex-pattern-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 5,
        "uiTitle": "Outreach node 6",
        "mode": "waterfall",
        "tools": [
          {
            "order": 6,
            "toolId": "product-sku-uppercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 6,
        "uiTitle": "Outreach node 7",
        "mode": "waterfall",
        "tools": [
          {
            "order": 7,
            "toolId": "affiliate-page-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 7,
        "uiTitle": "Outreach node 8",
        "mode": "waterfall",
        "tools": [
          {
            "order": 8,
            "toolId": "product-listing-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 8,
        "uiTitle": "Outreach node 9",
        "mode": "waterfall",
        "tools": [
          {
            "order": 9,
            "toolId": "search-query-base64-encoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 9,
        "uiTitle": "Outreach node 10",
        "mode": "waterfall",
        "tools": [
          {
            "order": 10,
            "toolId": "youtube-video-keyword-density-checker",
            "role": "extract keyword usage from project text",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 10,
        "uiTitle": "Outreach node 11",
        "mode": "waterfall",
        "tools": [
          {
            "order": 11,
            "toolId": "callback-url-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 11,
        "uiTitle": "Outreach node 12",
        "mode": "waterfall",
        "tools": [
          {
            "order": 12,
            "toolId": "ebook-chapter-find-and-replace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 12,
        "uiTitle": "Outreach node 13",
        "mode": "waterfall",
        "tools": [
          {
            "order": 13,
            "toolId": "landing-page-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 13,
        "uiTitle": "Outreach node 14",
        "mode": "waterfall",
        "tools": [
          {
            "order": 14,
            "toolId": "homepage-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 14,
        "uiTitle": "Outreach node 15",
        "mode": "waterfall",
        "tools": [
          {
            "order": 15,
            "toolId": "jwt-payload-base64-encoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 1
          }
        ]
      },
      {
        "panelIndex": 15,
        "uiTitle": "Outreach node 16",
        "mode": "waterfall",
        "tools": [
          {
            "order": 16,
            "toolId": "policy-page-keyword-density-checker",
            "role": "extract keyword usage from project text",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-hr-recruiting-research-campaign-074",
    "title": "HR recruiting research campaign workflow",
    "field": "HR recruiting",
    "businessFunction": "research",
    "groupId": "group-research-campaign",
    "outcome": "Use compatible research tools to prepare a launch campaign with trackable outputs for HR recruiting.",
    "prompt": "Build a micro workflow for HR recruiting: prepare a launch campaign with trackable outputs using research tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste HR recruiting notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible research chain.",
    "complexity": "micro-2-4",
    "layout": "2x1",
    "executionMode": "compact-waterfall",
    "toolCount": 4,
    "panelCount": 2,
    "maxNestedUiDepth": 2,
    "tags": [
      "hr-recruiting",
      "research",
      "campaign",
      "micro-2-4"
    ],
    "compatibilitySummary": "4 tools arranged as 2 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Research node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "pages-url-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "html-snippet-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "Research node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 3,
            "toolId": "robots-rule-json-key-extractor",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 1
          },
          {
            "order": 4,
            "toolId": "resume-bullet-sentence-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          }
        ]
      }
    ]
  },
  {
    "id": "project-hr-recruiting-project-management-campaign-075",
    "title": "HR recruiting project management campaign workflow",
    "field": "HR recruiting",
    "businessFunction": "project management",
    "groupId": "group-project-management-campaign",
    "outcome": "Use compatible project management tools to prepare a launch campaign with trackable outputs for HR recruiting.",
    "prompt": "Build a 64-tool nested waterfall for HR recruiting: prepare a launch campaign with trackable outputs using project management tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste HR recruiting notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible project management chain.",
    "complexity": "nested-64",
    "layout": "4x4",
    "executionMode": "nested-waterfall",
    "toolCount": 64,
    "panelCount": 16,
    "maxNestedUiDepth": 4,
    "tags": [
      "hr-recruiting",
      "project-management",
      "campaign",
      "nested-64"
    ],
    "compatibilitySummary": "64 tools arranged as 16 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Project management node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "recipe-notes-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "seo-title-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 2
          },
          {
            "order": 3,
            "toolId": "keyword-list-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 4,
            "toolId": "recipe-notes-add-months-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "Project management node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 5,
            "toolId": "blog-post-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          },
          {
            "order": 6,
            "toolId": "customer-reply-title-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 7,
            "toolId": "base-url-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 8,
            "toolId": "jwt-payload-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 2,
        "uiTitle": "Project management node 3",
        "mode": "waterfall",
        "tools": [
          {
            "order": 9,
            "toolId": "facebook-bio-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 10,
            "toolId": "press-release-add-months-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 2
          },
          {
            "order": 11,
            "toolId": "meta-description-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 3
          },
          {
            "order": 12,
            "toolId": "press-release-blank-line-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 3,
        "uiTitle": "Project management node 4",
        "mode": "waterfall",
        "tools": [
          {
            "order": 13,
            "toolId": "invoice-memo-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 14,
            "toolId": "commit-message-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 2
          },
          {
            "order": 15,
            "toolId": "ad-copy-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 16,
            "toolId": "newsletter-add-months-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 4,
        "uiTitle": "Project management node 5",
        "mode": "waterfall",
        "tools": [
          {
            "order": 17,
            "toolId": "folder-name-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          },
          {
            "order": 18,
            "toolId": "customer-reply-find-and-replace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 19,
            "toolId": "search-query-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 20,
            "toolId": "search-query-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 5,
        "uiTitle": "Project management node 6",
        "mode": "waterfall",
        "tools": [
          {
            "order": 21,
            "toolId": "podcast-notes-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 22,
            "toolId": "markdown-doc-add-months-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 2
          },
          {
            "order": 23,
            "toolId": "ad-copy-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 3
          },
          {
            "order": 24,
            "toolId": "podcast-notes-slug-generator",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 6,
        "uiTitle": "Project management node 7",
        "mode": "waterfall",
        "tools": [
          {
            "order": 25,
            "toolId": "cookie-value-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 26,
            "toolId": "javascript-string-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 2
          },
          {
            "order": 27,
            "toolId": "instagram-caption-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 28,
            "toolId": "keyword-list-add-months-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 7,
        "uiTitle": "Project management node 8",
        "mode": "waterfall",
        "tools": [
          {
            "order": 29,
            "toolId": "markdown-doc-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          },
          {
            "order": 30,
            "toolId": "csv-export-title-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 31,
            "toolId": "log-line-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 32,
            "toolId": "canonical-url-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 8,
        "uiTitle": "Project management node 9",
        "mode": "waterfall",
        "tools": [
          {
            "order": 33,
            "toolId": "domain-list-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 34,
            "toolId": "invoice-memo-add-months-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 2
          },
          {
            "order": 35,
            "toolId": "file-name-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 3
          },
          {
            "order": 36,
            "toolId": "podcast-notes-blank-line-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 9,
        "uiTitle": "Project management node 10",
        "mode": "waterfall",
        "tools": [
          {
            "order": 37,
            "toolId": "svg-snippet-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 38,
            "toolId": "robots-rule-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 2
          },
          {
            "order": 39,
            "toolId": "url-slug-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 40,
            "toolId": "html-block-add-months-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 10,
        "uiTitle": "Project management node 11",
        "mode": "waterfall",
        "tools": [
          {
            "order": 41,
            "toolId": "youtube-description-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          },
          {
            "order": 42,
            "toolId": "csv-export-find-and-replace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 43,
            "toolId": "email-body-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 44,
            "toolId": "invoice-memo-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 11,
        "uiTitle": "Project management node 12",
        "mode": "waterfall",
        "tools": [
          {
            "order": 45,
            "toolId": "meta-description-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 46,
            "toolId": "garden-journal-add-months-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 2
          },
          {
            "order": 47,
            "toolId": "landing-page-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 3
          },
          {
            "order": 48,
            "toolId": "plant-care-notes-slug-generator",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 12,
        "uiTitle": "Project management node 13",
        "mode": "waterfall",
        "tools": [
          {
            "order": 49,
            "toolId": "plant-care-notes-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 50,
            "toolId": "blog-post-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 2
          },
          {
            "order": 51,
            "toolId": "garden-journal-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 52,
            "toolId": "file-name-add-days-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 13,
        "uiTitle": "Project management node 14",
        "mode": "waterfall",
        "tools": [
          {
            "order": 53,
            "toolId": "facebook-bio-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          },
          {
            "order": 54,
            "toolId": "cover-letter-title-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 55,
            "toolId": "webhook-body-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 56,
            "toolId": "regex-pattern-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 14,
        "uiTitle": "Project management node 15",
        "mode": "waterfall",
        "tools": [
          {
            "order": 57,
            "toolId": "code-comment-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 58,
            "toolId": "email-subject-add-days-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 2
          },
          {
            "order": 59,
            "toolId": "url-slug-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 3
          },
          {
            "order": 60,
            "toolId": "plant-care-notes-blank-line-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 4
          }
        ]
      },
      {
        "panelIndex": 15,
        "uiTitle": "Project management node 16",
        "mode": "waterfall",
        "tools": [
          {
            "order": 61,
            "toolId": "garden-journal-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 62,
            "toolId": "image-alt-text-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 2
          },
          {
            "order": 63,
            "toolId": "recipe-notes-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 64,
            "toolId": "customer-reply-add-days-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 4
          }
        ]
      }
    ]
  }
];

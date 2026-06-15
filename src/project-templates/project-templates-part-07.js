export const PROJECT_TEMPLATES_PART_07 = [
  {
    "id": "project-bakery-marketing-decision-report-101",
    "title": "Bakery marketing decision report workflow",
    "field": "Bakery",
    "businessFunction": "marketing",
    "groupId": "group-marketing-decision-report",
    "outcome": "Use compatible marketing tools to produce a decision-ready report with supporting calculations for Bakery.",
    "prompt": "Build a micro workflow for Bakery: produce a decision-ready report with supporting calculations using marketing tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Bakery notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible marketing chain.",
    "complexity": "micro-2-4",
    "layout": "1x1",
    "executionMode": "compact-waterfall",
    "toolCount": 3,
    "panelCount": 1,
    "maxNestedUiDepth": 3,
    "tags": [
      "bakery",
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
            "toolId": "free-pdf-page-keyword-density-checker",
            "role": "extract keyword usage from project text",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "image-tool-page-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 2
          },
          {
            "order": 3,
            "toolId": "git-branch-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          }
        ]
      }
    ]
  },
  {
    "id": "project-bakery-sales-decision-report-102",
    "title": "Bakery sales decision report workflow",
    "field": "Bakery",
    "businessFunction": "sales",
    "groupId": "group-sales-decision-report",
    "outcome": "Use compatible sales tools to produce a decision-ready report with supporting calculations for Bakery.",
    "prompt": "Build a 8-panel workflow for Bakery: produce a decision-ready report with supporting calculations using sales tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Bakery notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible sales chain.",
    "complexity": "mid-8",
    "layout": "2x4",
    "executionMode": "hybrid",
    "toolCount": 8,
    "panelCount": 8,
    "maxNestedUiDepth": 1,
    "tags": [
      "bakery",
      "sales",
      "decision-report",
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
            "toolId": "landing-page-percentage-calculator",
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
            "toolId": "system-message-markdown-table-generator",
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
            "toolId": "markdown-link-html-unescaper",
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
            "toolId": "secret-placeholder-csv-to-json-converter",
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
            "toolId": "ad-copy-find-and-replace-tool",
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
            "toolId": "contact-page-utm-link-builder",
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
            "toolId": "file-name-percentage-calculator",
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
            "toolId": "email-subject-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-bakery-support-decision-report-103",
    "title": "Bakery customer support decision report workflow",
    "field": "Bakery",
    "businessFunction": "customer support",
    "groupId": "group-support-decision-report",
    "outcome": "Use compatible customer support tools to produce a decision-ready report with supporting calculations for Bakery.",
    "prompt": "Build a 16-panel workflow for Bakery: produce a decision-ready report with supporting calculations using customer support tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Bakery notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible customer support chain.",
    "complexity": "standard-16",
    "layout": "4x4",
    "executionMode": "waterfall",
    "toolCount": 16,
    "panelCount": 16,
    "maxNestedUiDepth": 1,
    "tags": [
      "bakery",
      "support",
      "decision-report",
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
            "toolId": "invoice-memo-csv-to-json-converter",
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
            "toolId": "css-class-json-key-extractor",
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
            "toolId": "cover-letter-sentence-case-converter",
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
            "toolId": "query-string-markdown-table-generator",
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
            "toolId": "seo-title-add-weeks-date-calculator",
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
            "toolId": "blog-post-csv-to-json-converter",
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
            "toolId": "python-string-json-formatter",
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
            "toolId": "order-note-title-case-converter",
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
            "toolId": "api-token-markdown-table-generator",
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
            "toolId": "product-listing-add-weeks-date-calculator",
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
            "toolId": "regex-pattern-csv-to-json-converter",
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
            "toolId": "api-token-json-key-extractor",
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
            "toolId": "coupon-text-uppercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-bakery-operations-decision-report-104",
    "title": "Bakery operations decision report workflow",
    "field": "Bakery",
    "businessFunction": "operations",
    "groupId": "group-operations-decision-report",
    "outcome": "Use compatible operations tools to produce a decision-ready report with supporting calculations for Bakery.",
    "prompt": "Build a 8-panel workflow for Bakery: produce a decision-ready report with supporting calculations using operations tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Bakery notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible operations chain.",
    "complexity": "mid-8",
    "layout": "4x2",
    "executionMode": "hybrid",
    "toolCount": 8,
    "panelCount": 8,
    "maxNestedUiDepth": 1,
    "tags": [
      "bakery",
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
            "toolId": "coupon-text-find-and-replace-tool",
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
            "toolId": "facebook-bio-add-weeks-date-calculator",
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
            "toolId": "press-release-days-between-dates-calculator",
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
            "toolId": "garden-journal-percentage-calculator",
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
            "toolId": "uuid-list-json-to-csv-converter",
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
            "toolId": "git-branch-markdown-table-generator",
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
            "toolId": "newsletter-slug-generator",
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
            "toolId": "domain-list-add-weeks-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-bakery-finance-decision-report-105",
    "title": "Bakery finance decision report workflow",
    "field": "Bakery",
    "businessFunction": "finance",
    "groupId": "group-finance-decision-report",
    "outcome": "Use compatible finance tools to produce a decision-ready report with supporting calculations for Bakery.",
    "prompt": "Build a 32-tool nested workbench for Bakery: produce a decision-ready report with supporting calculations using finance tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Bakery notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible finance chain.",
    "complexity": "advanced-32",
    "layout": "4x4",
    "executionMode": "hybrid-waterfall",
    "toolCount": 32,
    "panelCount": 16,
    "maxNestedUiDepth": 2,
    "tags": [
      "bakery",
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
            "toolId": "raffle-order-total-calculator",
            "role": "calculate invoice totals from line-item assumptions",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "folder-name-percentage-calculator",
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
            "toolId": "instagram-caption-percent-change-calculator",
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
            "toolId": "code-comment-subtraction-calculator",
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
            "toolId": "service-quote-total-calculator",
            "role": "calculate invoice totals from line-item assumptions",
            "uiDepth": 1
          },
          {
            "order": 8,
            "toolId": "brand-name-percentage-calculator",
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
            "toolId": "domain-list-percent-change-calculator",
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
            "toolId": "brand-name-multiplication-calculator",
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
            "toolId": "shipping-invoice-total-calculator",
            "role": "calculate invoice totals from line-item assumptions",
            "uiDepth": 1
          },
          {
            "order": 14,
            "toolId": "product-listing-percentage-calculator",
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
            "toolId": "url-slug-percent-change-calculator",
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
            "toolId": "blog-post-box-volume-calculator",
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
            "toolId": "sponsor-invoice-total-calculator",
            "role": "calculate invoice totals from line-item assumptions",
            "uiDepth": 1
          },
          {
            "order": 20,
            "toolId": "json-snippet-percentage-calculator",
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
            "toolId": "meta-description-percent-change-calculator",
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
            "toolId": "ad-copy-addition-calculator",
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
            "toolId": "store-order-total-calculator",
            "role": "calculate invoice totals from line-item assumptions",
            "uiDepth": 1
          },
          {
            "order": 26,
            "toolId": "email-subject-percentage-calculator",
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
            "toolId": "garden-journal-percent-change-calculator",
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
            "toolId": "video-script-rectangle-area-calculator",
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
            "toolId": "subscription-invoice-total-calculator",
            "role": "calculate invoice totals from line-item assumptions",
            "uiDepth": 1
          },
          {
            "order": 32,
            "toolId": "youtube-description-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 2
          }
        ]
      }
    ]
  },
  {
    "id": "project-bakery-hr-decision-report-106",
    "title": "Bakery HR decision report workflow",
    "field": "Bakery",
    "businessFunction": "HR",
    "groupId": "group-hr-decision-report",
    "outcome": "Use compatible HR tools to produce a decision-ready report with supporting calculations for Bakery.",
    "prompt": "Build a 16-panel workflow for Bakery: produce a decision-ready report with supporting calculations using HR tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Bakery notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible HR chain.",
    "complexity": "standard-16",
    "layout": "4x4",
    "executionMode": "waterfall",
    "toolCount": 16,
    "panelCount": 16,
    "maxNestedUiDepth": 1,
    "tags": [
      "bakery",
      "hr",
      "decision-report",
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
            "toolId": "file-name-add-days-date-calculator",
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
            "toolId": "facebook-bio-days-between-dates-calculator",
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
            "toolId": "error-message-json-to-csv-converter",
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
            "toolId": "keyword-list-password-generator",
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
            "toolId": "xml-node-markdown-table-generator",
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
            "toolId": "video-script-text-reverser",
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
            "toolId": "email-subject-add-days-date-calculator",
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
            "toolId": "url-slug-days-between-dates-calculator",
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
            "toolId": "user-message-json-to-csv-converter",
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
            "toolId": "sitemap-entry-password-generator",
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
            "toolId": "header-value-markdown-table-generator",
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
            "toolId": "invoice-memo-uppercase-converter",
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
            "toolId": "customer-reply-add-days-date-calculator",
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
            "toolId": "keyword-list-days-between-dates-calculator",
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
            "toolId": "pages-url-json-to-csv-converter",
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
            "toolId": "garden-journal-password-generator",
            "role": "create secure passwords for the project",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-bakery-content-decision-report-107",
    "title": "Bakery content decision report workflow",
    "field": "Bakery",
    "businessFunction": "content",
    "groupId": "group-content-decision-report",
    "outcome": "Use compatible content tools to produce a decision-ready report with supporting calculations for Bakery.",
    "prompt": "Build a micro workflow for Bakery: produce a decision-ready report with supporting calculations using content tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Bakery notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible content chain.",
    "complexity": "micro-2-4",
    "layout": "2x1",
    "executionMode": "compact-waterfall",
    "toolCount": 4,
    "panelCount": 2,
    "maxNestedUiDepth": 2,
    "tags": [
      "bakery",
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
            "toolId": "tiktok-caption-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "product-page-keyword-density-checker",
            "role": "extract keyword usage from project text",
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
            "toolId": "worker-route-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 4,
            "toolId": "about-page-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 2
          }
        ]
      }
    ]
  },
  {
    "id": "project-bakery-seo-decision-report-108",
    "title": "Bakery SEO decision report workflow",
    "field": "Bakery",
    "businessFunction": "SEO",
    "groupId": "group-seo-decision-report",
    "outcome": "Use compatible SEO tools to produce a decision-ready report with supporting calculations for Bakery.",
    "prompt": "Build a 8-panel workflow for Bakery: produce a decision-ready report with supporting calculations using SEO tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Bakery notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible SEO chain.",
    "complexity": "mid-8",
    "layout": "4x2",
    "executionMode": "hybrid",
    "toolCount": 8,
    "panelCount": 8,
    "maxNestedUiDepth": 1,
    "tags": [
      "bakery",
      "seo",
      "decision-report",
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
            "toolId": "dns-record-base64-encoder",
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
            "toolId": "code-comment-text-reverser",
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
            "toolId": "callback-url-markdown-table-generator",
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
            "toolId": "homepage-meta-length-checker",
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
            "toolId": "faq-page-keyword-density-checker",
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
            "toolId": "homepage-utm-link-builder",
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
            "toolId": "webhook-body-base64-encoder",
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
            "toolId": "meeting-notes-uppercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-bakery-social-decision-report-109",
    "title": "Bakery social media decision report workflow",
    "field": "Bakery",
    "businessFunction": "social media",
    "groupId": "group-social-decision-report",
    "outcome": "Use compatible social media tools to produce a decision-ready report with supporting calculations for Bakery.",
    "prompt": "Build a 16-panel workflow for Bakery: produce a decision-ready report with supporting calculations using social media tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Bakery notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible social media chain.",
    "complexity": "standard-16",
    "layout": "4x4",
    "executionMode": "waterfall",
    "toolCount": 16,
    "panelCount": 16,
    "maxNestedUiDepth": 1,
    "tags": [
      "bakery",
      "social",
      "decision-report",
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
            "toolId": "oauth-state-html-escaper",
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
            "toolId": "product-listing-markdown-table-generator",
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
            "toolId": "hashtag-set-lowercase-converter",
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
            "toolId": "raffle-campaign-meta-length-checker",
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
            "toolId": "landing-page-keyword-density-checker",
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
            "toolId": "plant-profile-utm-link-builder",
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
            "toolId": "environment-value-html-escaper",
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
            "toolId": "xml-node-markdown-table-generator",
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
            "toolId": "shipping-note-slug-generator",
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
            "toolId": "facebook-post-meta-length-checker",
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
            "toolId": "donation-campaign-keyword-density-checker",
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
            "toolId": "garden-guide-utm-link-builder",
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
            "toolId": "yaml-value-html-escaper",
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
            "toolId": "header-value-markdown-table-generator",
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
            "toolId": "garden-journal-trim-whitespace-tool",
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
            "toolId": "sitemap-page-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-bakery-email-decision-report-110",
    "title": "Bakery email decision report workflow",
    "field": "Bakery",
    "businessFunction": "email",
    "groupId": "group-email-decision-report",
    "outcome": "Use compatible email tools to produce a decision-ready report with supporting calculations for Bakery.",
    "prompt": "Build a 64-tool nested waterfall for Bakery: produce a decision-ready report with supporting calculations using email tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Bakery notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible email chain.",
    "complexity": "nested-64",
    "layout": "4x4",
    "executionMode": "nested-waterfall",
    "toolCount": 64,
    "panelCount": 16,
    "maxNestedUiDepth": 4,
    "tags": [
      "bakery",
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
            "toolId": "csv-cell-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "landing-page-slug-generator",
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
            "toolId": "calculator-page-meta-length-checker",
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
            "toolId": "product-page-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 1
          },
          {
            "order": 6,
            "toolId": "jwt-payload-html-escaper",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 2
          },
          {
            "order": 7,
            "toolId": "meta-description-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 8,
            "toolId": "ad-copy-title-case-converter",
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
            "toolId": "pinterest-pin-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 2
          },
          {
            "order": 11,
            "toolId": "image-tool-page-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 3
          },
          {
            "order": 12,
            "toolId": "dns-record-html-escaper",
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
            "toolId": "tool-url-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 14,
            "toolId": "landing-page-blank-line-remover",
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
            "toolId": "contact-page-meta-length-checker",
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
            "toolId": "converter-page-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 1
          },
          {
            "order": 18,
            "toolId": "webhook-body-html-escaper",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 2
          },
          {
            "order": 19,
            "toolId": "environment-value-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 20,
            "toolId": "ad-copy-find-and-replace-tool",
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
            "toolId": "policy-page-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 2
          },
          {
            "order": 23,
            "toolId": "youtube-description-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 3
          },
          {
            "order": 24,
            "toolId": "robots-rule-html-escaper",
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
            "toolId": "product-listing-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 26,
            "toolId": "keyword-list-slug-generator",
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
            "toolId": "developer-tool-page-meta-length-checker",
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
            "toolId": "plant-profile-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 1
          },
          {
            "order": 30,
            "toolId": "javascript-string-html-escaper",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 2
          },
          {
            "order": 31,
            "toolId": "xml-node-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 32,
            "toolId": "youtube-description-title-case-converter",
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
            "toolId": "product-page-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 2
          },
          {
            "order": 35,
            "toolId": "garden-guide-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 3
          },
          {
            "order": 36,
            "toolId": "css-class-html-escaper",
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
            "toolId": "header-value-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 38,
            "toolId": "keyword-list-blank-line-remover",
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
            "toolId": "facebook-bio-meta-length-checker",
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
            "toolId": "calculator-page-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 1
          },
          {
            "order": 42,
            "toolId": "user-message-html-escaper",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 2
          },
          {
            "order": 43,
            "toolId": "regex-pattern-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 44,
            "toolId": "youtube-description-find-and-replace-tool",
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
            "toolId": "review-page-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 2
          },
          {
            "order": 47,
            "toolId": "sitemap-page-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 3
          },
          {
            "order": 48,
            "toolId": "regex-pattern-html-escaper",
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
            "toolId": "callback-url-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 50,
            "toolId": "json-snippet-slug-generator",
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
            "toolId": "faq-page-meta-length-checker",
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
            "toolId": "local-service-page-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 1
          },
          {
            "order": 54,
            "toolId": "image-alt-text-html-escaper",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 2
          },
          {
            "order": 55,
            "toolId": "javascript-string-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 56,
            "toolId": "video-script-title-case-converter",
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
            "toolId": "tiktok-caption-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 2
          },
          {
            "order": 59,
            "toolId": "facebook-post-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 3
          },
          {
            "order": 60,
            "toolId": "commit-message-html-escaper",
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
            "toolId": "seo-title-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 62,
            "toolId": "json-snippet-blank-line-remover",
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
            "toolId": "garden-guide-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 4
          }
        ]
      }
    ]
  },
  {
    "id": "project-bakery-data-decision-report-111",
    "title": "Bakery data cleanup decision report workflow",
    "field": "Bakery",
    "businessFunction": "data cleanup",
    "groupId": "group-data-decision-report",
    "outcome": "Use compatible data cleanup tools to produce a decision-ready report with supporting calculations for Bakery.",
    "prompt": "Build a micro workflow for Bakery: produce a decision-ready report with supporting calculations using data cleanup tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Bakery notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible data cleanup chain.",
    "complexity": "micro-2-4",
    "layout": "2x1",
    "executionMode": "compact-waterfall",
    "toolCount": 4,
    "panelCount": 2,
    "maxNestedUiDepth": 2,
    "tags": [
      "bakery",
      "data",
      "decision-report",
      "micro-2-4"
    ],
    "compatibilitySummary": "4 tools arranged as 2 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Data cleanup node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "user-message-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "query-string-json-key-extractor",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "Data cleanup node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 3,
            "toolId": "instagram-caption-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 4,
            "toolId": "sitemap-entry-trim-whitespace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          }
        ]
      }
    ]
  },
  {
    "id": "project-bakery-reporting-decision-report-112",
    "title": "Bakery reporting decision report workflow",
    "field": "Bakery",
    "businessFunction": "reporting",
    "groupId": "group-reporting-decision-report",
    "outcome": "Use compatible reporting tools to produce a decision-ready report with supporting calculations for Bakery.",
    "prompt": "Build a 16-panel workflow for Bakery: produce a decision-ready report with supporting calculations using reporting tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Bakery notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible reporting chain.",
    "complexity": "standard-16",
    "layout": "4x4",
    "executionMode": "waterfall",
    "toolCount": 16,
    "panelCount": 16,
    "maxNestedUiDepth": 1,
    "tags": [
      "bakery",
      "reporting",
      "decision-report",
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
            "toolId": "image-alt-text-markdown-table-generator",
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
            "toolId": "recipe-notes-percentage-calculator",
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
            "toolId": "video-script-percent-change-calculator",
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
            "toolId": "coupon-text-title-case-converter",
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
            "toolId": "landing-page-add-days-date-calculator",
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
            "toolId": "robots-rule-csv-to-json-converter",
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
            "toolId": "robots-rule-markdown-table-generator",
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
            "toolId": "keyword-list-percentage-calculator",
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
            "toolId": "newsletter-percent-change-calculator",
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
            "toolId": "order-note-blank-line-remover",
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
            "toolId": "json-snippet-add-days-date-calculator",
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
            "toolId": "invoice-memo-csv-to-json-converter",
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
            "toolId": "cloudflare-rule-markdown-table-generator",
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
            "toolId": "facebook-bio-percentage-calculator",
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
            "toolId": "hashtag-set-percent-change-calculator",
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
            "toolId": "coupon-text-find-and-replace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-bakery-compliance-decision-report-113",
    "title": "Bakery compliance decision report workflow",
    "field": "Bakery",
    "businessFunction": "compliance",
    "groupId": "group-compliance-decision-report",
    "outcome": "Use compatible compliance tools to produce a decision-ready report with supporting calculations for Bakery.",
    "prompt": "Build a micro workflow for Bakery: produce a decision-ready report with supporting calculations using compliance tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Bakery notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible compliance chain.",
    "complexity": "micro-2-4",
    "layout": "1x1",
    "executionMode": "compact-waterfall",
    "toolCount": 3,
    "panelCount": 1,
    "maxNestedUiDepth": 3,
    "tags": [
      "bakery",
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
            "toolId": "markdown-doc-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "file-name-add-months-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 2
          },
          {
            "order": 3,
            "toolId": "press-release-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          }
        ]
      }
    ]
  },
  {
    "id": "project-bakery-scheduling-decision-report-114",
    "title": "Bakery scheduling decision report workflow",
    "field": "Bakery",
    "businessFunction": "scheduling",
    "groupId": "group-scheduling-decision-report",
    "outcome": "Use compatible scheduling tools to produce a decision-ready report with supporting calculations for Bakery.",
    "prompt": "Build a 8-panel workflow for Bakery: produce a decision-ready report with supporting calculations using scheduling tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Bakery notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible scheduling chain.",
    "complexity": "mid-8",
    "layout": "2x4",
    "executionMode": "hybrid",
    "toolCount": 8,
    "panelCount": 8,
    "maxNestedUiDepth": 1,
    "tags": [
      "bakery",
      "scheduling",
      "decision-report",
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
            "toolId": "plant-care-notes-markdown-table-generator",
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
            "toolId": "html-block-find-and-replace-tool",
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
            "toolId": "secret-placeholder-json-to-csv-converter",
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
            "toolId": "recipe-notes-days-between-dates-calculator",
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
            "toolId": "url-slug-add-years-date-calculator",
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
            "toolId": "instagram-caption-date-to-unix-timestamp",
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
            "toolId": "webhook-body-markdown-table-generator",
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
            "toolId": "sitemap-entry-sentence-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-bakery-product-decision-report-115",
    "title": "Bakery product decision report workflow",
    "field": "Bakery",
    "businessFunction": "product",
    "groupId": "group-product-decision-report",
    "outcome": "Use compatible product tools to produce a decision-ready report with supporting calculations for Bakery.",
    "prompt": "Build a 32-tool nested workbench for Bakery: produce a decision-ready report with supporting calculations using product tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Bakery notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible product chain.",
    "complexity": "advanced-32",
    "layout": "4x4",
    "executionMode": "hybrid-waterfall",
    "toolCount": 32,
    "panelCount": 16,
    "maxNestedUiDepth": 2,
    "tags": [
      "bakery",
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
            "toolId": "folder-name-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "json-config-json-key-extractor",
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
            "toolId": "press-release-trim-whitespace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 4,
            "toolId": "markdown-doc-json-to-csv-converter",
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
            "toolId": "uuid-list-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 6,
            "toolId": "video-script-percentage-calculator",
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
            "toolId": "brand-name-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 1
          },
          {
            "order": 8,
            "toolId": "sitemap-url-json-minifier",
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
            "toolId": "domain-list-blank-line-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 10,
            "toolId": "csv-cell-json-to-csv-converter",
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
            "toolId": "form-payload-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 12,
            "toolId": "newsletter-percentage-calculator",
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
            "toolId": "product-listing-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 1
          },
          {
            "order": 14,
            "toolId": "html-snippet-json-key-extractor",
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
            "toolId": "press-release-lowercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 16,
            "toolId": "sitemap-url-json-to-csv-converter",
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
            "toolId": "query-string-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 18,
            "toolId": "hashtag-set-percentage-calculator",
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
            "toolId": "json-snippet-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 1
          },
          {
            "order": 20,
            "toolId": "robots-rule-json-minifier",
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
            "toolId": "customer-reply-slug-generator",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 22,
            "toolId": "landing-page-json-to-csv-converter",
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
            "toolId": "api-token-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 24,
            "toolId": "csv-export-percentage-calculator",
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
            "toolId": "email-subject-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 1
          },
          {
            "order": 26,
            "toolId": "csv-cell-json-formatter",
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
            "toolId": "podcast-notes-trim-whitespace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 28,
            "toolId": "cookie-value-json-to-csv-converter",
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
            "toolId": "instagram-caption-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 30,
            "toolId": "resume-bullet-percentage-calculator",
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
            "toolId": "youtube-description-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 1
          },
          {
            "order": 32,
            "toolId": "python-string-json-minifier",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 2
          }
        ]
      }
    ]
  },
  {
    "id": "project-bakery-ux-decision-report-116",
    "title": "Bakery UX/UI decision report workflow",
    "field": "Bakery",
    "businessFunction": "UX/UI",
    "groupId": "group-ux-decision-report",
    "outcome": "Use compatible UX/UI tools to produce a decision-ready report with supporting calculations for Bakery.",
    "prompt": "Build a 8-panel workflow for Bakery: produce a decision-ready report with supporting calculations using UX/UI tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Bakery notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible UX/UI chain.",
    "complexity": "mid-8",
    "layout": "4x2",
    "executionMode": "hybrid",
    "toolCount": 8,
    "panelCount": 8,
    "maxNestedUiDepth": 1,
    "tags": [
      "bakery",
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
            "toolId": "landing-page-keyword-density-checker",
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
            "toolId": "invoice-memo-color-contrast-checker",
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
            "toolId": "ad-copy-sentence-case-converter",
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
            "toolId": "base-url-markdown-table-generator",
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
            "toolId": "developer-tool-page-meta-length-checker",
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
            "toolId": "donation-campaign-keyword-density-checker",
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
    "id": "project-bakery-web-launch-decision-report-117",
    "title": "Bakery web launch decision report workflow",
    "field": "Bakery",
    "businessFunction": "web launch",
    "groupId": "group-web-launch-decision-report",
    "outcome": "Use compatible web launch tools to produce a decision-ready report with supporting calculations for Bakery.",
    "prompt": "Build a micro workflow for Bakery: produce a decision-ready report with supporting calculations using web launch tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Bakery notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible web launch chain.",
    "complexity": "micro-2-4",
    "layout": "1x1",
    "executionMode": "compact-waterfall",
    "toolCount": 3,
    "panelCount": 1,
    "maxNestedUiDepth": 3,
    "tags": [
      "bakery",
      "web-launch",
      "decision-report",
      "micro-2-4"
    ],
    "compatibilitySummary": "3 tools arranged as 1 panel UI; outputs are designed to move through text/data/url/number/date-compatible steps.",
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
            "toolId": "schema-text-color-contrast-checker",
            "role": "check readability and accessibility contrast",
            "uiDepth": 2
          },
          {
            "order": 3,
            "toolId": "facebook-bio-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 3
          }
        ]
      }
    ]
  },
  {
    "id": "project-bakery-developer-decision-report-118",
    "title": "Bakery developer decision report workflow",
    "field": "Bakery",
    "businessFunction": "developer",
    "groupId": "group-developer-decision-report",
    "outcome": "Use compatible developer tools to produce a decision-ready report with supporting calculations for Bakery.",
    "prompt": "Build a 16-panel workflow for Bakery: produce a decision-ready report with supporting calculations using developer tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Bakery notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible developer chain.",
    "complexity": "standard-16",
    "layout": "4x4",
    "executionMode": "waterfall",
    "toolCount": 16,
    "panelCount": 16,
    "maxNestedUiDepth": 1,
    "tags": [
      "bakery",
      "developer",
      "decision-report",
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
            "toolId": "javascript-string-url-encoder",
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
            "toolId": "email-subject-uuid-generator",
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
            "toolId": "youtube-description-password-generator",
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
            "toolId": "sql-snippet-csv-to-json-converter",
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
            "toolId": "environment-value-markdown-table-generator",
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
            "toolId": "csv-cell-json-minifier",
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
            "toolId": "css-class-url-encoder",
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
            "toolId": "product-listing-uuid-generator",
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
            "toolId": "json-snippet-password-generator",
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
            "toolId": "log-line-csv-to-json-converter",
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
            "toolId": "product-listing-markdown-table-generator",
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
            "toolId": "query-string-json-formatter",
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
            "toolId": "user-message-url-encoder",
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
            "toolId": "cover-letter-uuid-generator",
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
            "toolId": "shipping-note-password-generator",
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
            "toolId": "css-class-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-bakery-security-decision-report-119",
    "title": "Bakery security decision report workflow",
    "field": "Bakery",
    "businessFunction": "security",
    "groupId": "group-security-decision-report",
    "outcome": "Use compatible security tools to produce a decision-ready report with supporting calculations for Bakery.",
    "prompt": "Build a micro workflow for Bakery: produce a decision-ready report with supporting calculations using security tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Bakery notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible security chain.",
    "complexity": "micro-2-4",
    "layout": "2x1",
    "executionMode": "compact-waterfall",
    "toolCount": 4,
    "panelCount": 2,
    "maxNestedUiDepth": 2,
    "tags": [
      "bakery",
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
            "toolId": "sitemap-url-base64-decoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "csv-cell-json-formatter",
            "role": "format, validate, or extract useful keys from JSON",
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
            "toolId": "meta-description-slug-generator",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 4,
            "toolId": "seo-title-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 2
          }
        ]
      }
    ]
  },
  {
    "id": "project-bakery-training-decision-report-120",
    "title": "Bakery training decision report workflow",
    "field": "Bakery",
    "businessFunction": "training",
    "groupId": "group-training-decision-report",
    "outcome": "Use compatible training tools to produce a decision-ready report with supporting calculations for Bakery.",
    "prompt": "Build a 64-tool nested waterfall for Bakery: produce a decision-ready report with supporting calculations using training tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Bakery notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible training chain.",
    "complexity": "nested-64",
    "layout": "4x4",
    "executionMode": "nested-waterfall",
    "toolCount": 64,
    "panelCount": 16,
    "maxNestedUiDepth": 4,
    "tags": [
      "bakery",
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
            "toolId": "file-name-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "csv-cell-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 2
          },
          {
            "order": 3,
            "toolId": "meta-description-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 4,
            "toolId": "sitemap-entry-extra-space-remover",
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
            "toolId": "jwt-payload-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 6,
            "toolId": "facebook-bio-add-weeks-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 2
          },
          {
            "order": 7,
            "toolId": "youtube-description-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 3
          },
          {
            "order": 8,
            "toolId": "sitemap-url-csv-to-json-converter",
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
            "toolId": "garden-journal-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 10,
            "toolId": "hashtag-set-sentence-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 11,
            "toolId": "sql-snippet-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 12,
            "toolId": "domain-list-add-weeks-date-calculator",
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
            "toolId": "landing-page-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          },
          {
            "order": 14,
            "toolId": "landing-page-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 2
          },
          {
            "order": 15,
            "toolId": "code-comment-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 16,
            "toolId": "shipping-note-text-reverser",
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
            "toolId": "dns-record-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 18,
            "toolId": "csv-export-add-weeks-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 2
          },
          {
            "order": 19,
            "toolId": "facebook-bio-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 3
          },
          {
            "order": 20,
            "toolId": "cookie-value-csv-to-json-converter",
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
            "toolId": "recipe-notes-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 22,
            "toolId": "garden-journal-uppercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 23,
            "toolId": "oauth-state-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 24,
            "toolId": "brand-name-add-weeks-date-calculator",
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
            "toolId": "url-slug-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          },
          {
            "order": 26,
            "toolId": "secret-placeholder-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 2
          },
          {
            "order": 27,
            "toolId": "keyword-list-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 28,
            "toolId": "shipping-note-extra-space-remover",
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
            "toolId": "user-message-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 30,
            "toolId": "ad-copy-add-weeks-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 2
          },
          {
            "order": 31,
            "toolId": "keyword-list-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 3
          },
          {
            "order": 32,
            "toolId": "json-config-csv-to-json-converter",
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
            "toolId": "facebook-bio-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 34,
            "toolId": "garden-journal-sentence-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 35,
            "toolId": "facebook-bio-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 36,
            "toolId": "url-slug-add-weeks-date-calculator",
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
            "toolId": "email-subject-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          },
          {
            "order": 38,
            "toolId": "cloudflare-rule-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 2
          },
          {
            "order": 39,
            "toolId": "ad-copy-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 40,
            "toolId": "seo-title-text-reverser",
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
            "toolId": "python-string-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 42,
            "toolId": "recipe-notes-add-weeks-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 2
          },
          {
            "order": 43,
            "toolId": "seo-title-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 3
          },
          {
            "order": 44,
            "toolId": "schema-markup-csv-to-json-converter",
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
            "toolId": "podcast-notes-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 46,
            "toolId": "folder-name-uppercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 47,
            "toolId": "youtube-description-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 48,
            "toolId": "press-release-add-weeks-date-calculator",
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
            "toolId": "json-snippet-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          },
          {
            "order": 50,
            "toolId": "ip-allowlist-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 2
          },
          {
            "order": 51,
            "toolId": "instagram-caption-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 52,
            "toolId": "seo-title-extra-space-remover",
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
            "toolId": "image-alt-text-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 54,
            "toolId": "newsletter-add-weeks-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 2
          },
          {
            "order": 55,
            "toolId": "domain-list-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 3
          },
          {
            "order": 56,
            "toolId": "callback-url-csv-to-json-converter",
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
            "toolId": "domain-list-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 58,
            "toolId": "folder-name-sentence-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 59,
            "toolId": "robots-rule-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 60,
            "toolId": "markdown-doc-add-weeks-date-calculator",
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
            "toolId": "recipe-notes-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          },
          {
            "order": 62,
            "toolId": "response-text-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 2
          },
          {
            "order": 63,
            "toolId": "url-slug-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 64,
            "toolId": "schema-text-text-reverser",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 4
          }
        ]
      }
    ]
  },
  {
    "id": "project-bakery-inventory-decision-report-121",
    "title": "Bakery inventory decision report workflow",
    "field": "Bakery",
    "businessFunction": "inventory",
    "groupId": "group-inventory-decision-report",
    "outcome": "Use compatible inventory tools to produce a decision-ready report with supporting calculations for Bakery.",
    "prompt": "Build a 16-panel workflow for Bakery: produce a decision-ready report with supporting calculations using inventory tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Bakery notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible inventory chain.",
    "complexity": "standard-16",
    "layout": "4x4",
    "executionMode": "waterfall",
    "toolCount": 16,
    "panelCount": 16,
    "maxNestedUiDepth": 1,
    "tags": [
      "bakery",
      "inventory",
      "decision-report",
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
            "toolId": "seo-title-uppercase-converter",
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
            "toolId": "markdown-doc-add-years-date-calculator",
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
            "toolId": "system-message-csv-to-json-converter",
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
            "toolId": "youtube-description-percentage-calculator",
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
            "toolId": "square-meter-to-hectare-converter",
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
            "toolId": "cookie-value-markdown-table-generator",
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
            "toolId": "garden-journal-find-and-replace-tool",
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
            "toolId": "keyword-list-add-years-date-calculator",
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
            "toolId": "meta-description-csv-to-json-converter",
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
            "toolId": "plant-care-notes-percentage-calculator",
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
            "toolId": "gram-to-pound-converter",
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
            "toolId": "log-line-markdown-table-generator",
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
            "toolId": "seo-title-sentence-case-converter",
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
            "toolId": "invoice-memo-add-years-date-calculator",
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
            "toolId": "dns-record-csv-to-json-converter",
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
            "toolId": "html-block-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-bakery-pricing-decision-report-122",
    "title": "Bakery pricing decision report workflow",
    "field": "Bakery",
    "businessFunction": "pricing",
    "groupId": "group-pricing-decision-report",
    "outcome": "Use compatible pricing tools to produce a decision-ready report with supporting calculations for Bakery.",
    "prompt": "Build a 8-panel workflow for Bakery: produce a decision-ready report with supporting calculations using pricing tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Bakery notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible pricing chain.",
    "complexity": "mid-8",
    "layout": "2x4",
    "executionMode": "hybrid",
    "toolCount": 8,
    "panelCount": 8,
    "maxNestedUiDepth": 1,
    "tags": [
      "bakery",
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
            "toolId": "javascript-string-markdown-table-generator",
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
            "toolId": "video-script-percent-change-calculator",
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
            "toolId": "brand-name-percentage-calculator",
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
            "toolId": "client-invoice-total-calculator",
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
            "toolId": "file-name-subtraction-calculator",
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
            "toolId": "seo-title-markdown-table-generator",
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
            "toolId": "newsletter-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-bakery-outreach-decision-report-123",
    "title": "Bakery outreach decision report workflow",
    "field": "Bakery",
    "businessFunction": "outreach",
    "groupId": "group-outreach-decision-report",
    "outcome": "Use compatible outreach tools to produce a decision-ready report with supporting calculations for Bakery.",
    "prompt": "Build a micro workflow for Bakery: produce a decision-ready report with supporting calculations using outreach tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Bakery notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible outreach chain.",
    "complexity": "micro-2-4",
    "layout": "2x1",
    "executionMode": "compact-waterfall",
    "toolCount": 4,
    "panelCount": 2,
    "maxNestedUiDepth": 2,
    "tags": [
      "bakery",
      "outreach",
      "decision-report",
      "micro-2-4"
    ],
    "compatibilitySummary": "4 tools arranged as 2 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Outreach node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "facebook-bio-trim-whitespace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "category-page-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "Outreach node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 3,
            "toolId": "donation-campaign-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 1
          },
          {
            "order": 4,
            "toolId": "javascript-string-base64-encoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 2
          }
        ]
      }
    ]
  },
  {
    "id": "project-bakery-research-decision-report-124",
    "title": "Bakery research decision report workflow",
    "field": "Bakery",
    "businessFunction": "research",
    "groupId": "group-research-decision-report",
    "outcome": "Use compatible research tools to produce a decision-ready report with supporting calculations for Bakery.",
    "prompt": "Build a 16-panel workflow for Bakery: produce a decision-ready report with supporting calculations using research tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Bakery notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible research chain.",
    "complexity": "standard-16",
    "layout": "4x4",
    "executionMode": "waterfall",
    "toolCount": 16,
    "panelCount": 16,
    "maxNestedUiDepth": 1,
    "tags": [
      "bakery",
      "research",
      "decision-report",
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
            "toolId": "developer-tool-page-keyword-density-checker",
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
            "toolId": "docker-tag-markdown-table-generator",
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
            "toolId": "dns-record-json-to-csv-converter",
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
            "toolId": "javascript-string-json-key-extractor",
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
            "toolId": "seo-title-slug-generator",
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
            "toolId": "youtube-video-keyword-density-checker",
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
            "toolId": "pages-url-markdown-table-generator",
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
            "toolId": "store-url-json-to-csv-converter",
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
            "toolId": "schema-markup-json-minifier",
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
            "toolId": "folder-name-trim-whitespace-tool",
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
            "toolId": "policy-page-keyword-density-checker",
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
            "toolId": "uuid-list-markdown-table-generator",
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
            "toolId": "markdown-doc-json-to-csv-converter",
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
            "toolId": "environment-value-json-key-extractor",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-bakery-project-management-decision-report-125",
    "title": "Bakery project management decision report workflow",
    "field": "Bakery",
    "businessFunction": "project management",
    "groupId": "group-project-management-decision-report",
    "outcome": "Use compatible project management tools to produce a decision-ready report with supporting calculations for Bakery.",
    "prompt": "Build a 32-tool nested workbench for Bakery: produce a decision-ready report with supporting calculations using project management tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Bakery notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible project management chain.",
    "complexity": "advanced-32",
    "layout": "4x4",
    "executionMode": "hybrid-waterfall",
    "toolCount": 32,
    "panelCount": 16,
    "maxNestedUiDepth": 2,
    "tags": [
      "bakery",
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
            "toolId": "product-sku-text-reverser",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "garden-journal-markdown-table-generator",
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
            "toolId": "prompt-text-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 4,
            "toolId": "recipe-notes-percentage-calculator",
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
            "toolId": "file-name-add-months-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          },
          {
            "order": 6,
            "toolId": "keyword-list-days-between-dates-calculator",
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
            "toolId": "donation-page-uppercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 8,
            "toolId": "recipe-notes-markdown-table-generator",
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
            "toolId": "form-payload-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 10,
            "toolId": "keyword-list-percentage-calculator",
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
            "toolId": "email-subject-add-months-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          },
          {
            "order": 12,
            "toolId": "email-subject-days-between-dates-calculator",
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
            "toolId": "product-sku-extra-space-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 14,
            "toolId": "base-url-markdown-table-generator",
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
            "toolId": "webhook-body-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 16,
            "toolId": "facebook-bio-percentage-calculator",
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
            "toolId": "customer-reply-add-months-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          },
          {
            "order": 18,
            "toolId": "seo-title-days-between-dates-calculator",
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
            "toolId": "donation-page-sentence-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 20,
            "toolId": "invoice-memo-markdown-table-generator",
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
            "toolId": "press-release-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 22,
            "toolId": "ad-copy-percentage-calculator",
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
            "toolId": "code-comment-add-months-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          },
          {
            "order": 24,
            "toolId": "json-snippet-days-between-dates-calculator",
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
            "toolId": "product-listing-text-reverser",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 26,
            "toolId": "search-query-markdown-table-generator",
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
            "toolId": "error-message-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 28,
            "toolId": "podcast-notes-percentage-calculator",
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
            "toolId": "blog-post-add-months-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          },
          {
            "order": 30,
            "toolId": "domain-list-days-between-dates-calculator",
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
            "toolId": "domain-list-trim-whitespace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 32,
            "toolId": "cookie-value-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 2
          }
        ]
      }
    ]
  },
  {
    "id": "project-catering-marketing-intake-to-output-001",
    "title": "Catering marketing intake-to-output workflow",
    "field": "Catering",
    "businessFunction": "marketing",
    "groupId": "group-marketing-intake-to-output",
    "outcome": "Use compatible marketing tools to turn raw input into a ready-to-use output for Catering.",
    "prompt": "Build a 8-panel workflow for Catering: turn raw input into a ready-to-use output using marketing tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Catering notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible marketing chain.",
    "complexity": "mid-8",
    "layout": "2x4",
    "executionMode": "hybrid",
    "toolCount": 8,
    "panelCount": 8,
    "maxNestedUiDepth": 1,
    "tags": [
      "catering",
      "marketing",
      "intake-to-output",
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
            "toolId": "yaml-value-base64-encoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
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
            "toolId": "community-rule-blank-line-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "tool-page-meta-length-checker",
            "role": "check title and description length for web publishing",
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
            "toolId": "facebook-post-keyword-density-checker",
            "role": "extract keyword usage from project text",
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
            "toolId": "google-result-utm-link-builder",
            "role": "create trackable campaign URLs",
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
            "toolId": "form-payload-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "secret-placeholder-base64-encoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
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
            "toolId": "meta-description-lowercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-catering-sales-intake-to-output-002",
    "title": "Catering sales intake-to-output workflow",
    "field": "Catering",
    "businessFunction": "sales",
    "groupId": "group-sales-intake-to-output",
    "outcome": "Use compatible sales tools to turn raw input into a ready-to-use output for Catering.",
    "prompt": "Build a 16-panel workflow for Catering: turn raw input into a ready-to-use output using sales tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Catering notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible sales chain.",
    "complexity": "standard-16",
    "layout": "4x4",
    "executionMode": "waterfall",
    "toolCount": 16,
    "panelCount": 16,
    "maxNestedUiDepth": 1,
    "tags": [
      "catering",
      "sales",
      "intake-to-output",
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
            "toolId": "form-payload-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
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
            "toolId": "file-name-blank-line-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "garden-guide-utm-link-builder",
            "role": "create trackable campaign URLs",
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
            "toolId": "json-snippet-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
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
            "toolId": "store-url-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "webhook-body-base64-encoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
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
            "toolId": "webhook-body-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
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
            "toolId": "resume-bullet-find-and-replace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "calculator-page-utm-link-builder",
            "role": "create trackable campaign URLs",
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
            "toolId": "email-subject-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
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
            "toolId": "docker-tag-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "robots-rule-base64-encoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
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
            "toolId": "press-release-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
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
            "toolId": "facebook-bio-slug-generator",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "sitemap-page-utm-link-builder",
            "role": "create trackable campaign URLs",
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
            "toolId": "youtube-description-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-catering-support-intake-to-output-003",
    "title": "Catering customer support intake-to-output workflow",
    "field": "Catering",
    "businessFunction": "customer support",
    "groupId": "group-support-intake-to-output",
    "outcome": "Use compatible customer support tools to turn raw input into a ready-to-use output for Catering.",
    "prompt": "Build a 8-panel workflow for Catering: turn raw input into a ready-to-use output using customer support tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Catering notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible customer support chain.",
    "complexity": "mid-8",
    "layout": "4x2",
    "executionMode": "hybrid",
    "toolCount": 8,
    "panelCount": 8,
    "maxNestedUiDepth": 1,
    "tags": [
      "catering",
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
            "toolId": "invoice-memo-find-and-replace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "error-message-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "email-subject-add-days-date-calculator",
            "role": "project deadlines and future dates",
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
            "toolId": "oauth-state-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
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
            "toolId": "robots-rule-json-minifier",
            "role": "format, validate, or extract useful keys from JSON",
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
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
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
            "toolId": "url-slug-sentence-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "prompt-text-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-catering-operations-intake-to-output-004",
    "title": "Catering operations intake-to-output workflow",
    "field": "Catering",
    "businessFunction": "operations",
    "groupId": "group-operations-intake-to-output",
    "outcome": "Use compatible operations tools to turn raw input into a ready-to-use output for Catering.",
    "prompt": "Build a micro workflow for Catering: turn raw input into a ready-to-use output using operations tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Catering notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible operations chain.",
    "complexity": "micro-2-4",
    "layout": "1x1",
    "executionMode": "compact-waterfall",
    "toolCount": 3,
    "panelCount": 1,
    "maxNestedUiDepth": 3,
    "tags": [
      "catering",
      "operations",
      "intake-to-output",
      "micro-2-4"
    ],
    "compatibilitySummary": "3 tools arranged as 1 panel UI; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Operations node 1",
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
            "toolId": "json-config-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 2
          },
          {
            "order": 3,
            "toolId": "uuid-list-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          }
        ]
      }
    ]
  },
  {
    "id": "project-catering-finance-intake-to-output-005",
    "title": "Catering finance intake-to-output workflow",
    "field": "Catering",
    "businessFunction": "finance",
    "groupId": "group-finance-intake-to-output",
    "outcome": "Use compatible finance tools to turn raw input into a ready-to-use output for Catering.",
    "prompt": "Build a 64-tool nested waterfall for Catering: turn raw input into a ready-to-use output using finance tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Catering notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible finance chain.",
    "complexity": "nested-64",
    "layout": "4x4",
    "executionMode": "nested-waterfall",
    "toolCount": 64,
    "panelCount": 16,
    "maxNestedUiDepth": 4,
    "tags": [
      "catering",
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
            "toolId": "compound-interest-calculator",
            "role": "model long-term growth or recurring gains",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "loan-payment-calculator",
            "role": "estimate payment obligations",
            "uiDepth": 2
          },
          {
            "order": 3,
            "toolId": "csv-export-subtraction-calculator",
            "role": "run a lightweight business formula",
            "uiDepth": 3
          },
          {
            "order": 4,
            "toolId": "shipping-invoice-total-calculator",
            "role": "calculate invoice totals from line-item assumptions",
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
            "toolId": "facebook-bio-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 6,
            "toolId": "hashtag-set-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 2
          },
          {
            "order": 7,
            "toolId": "compound-interest-calculator",
            "role": "model long-term growth or recurring gains",
            "uiDepth": 3
          },
          {
            "order": 8,
            "toolId": "loan-payment-calculator",
            "role": "estimate payment obligations",
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
            "toolId": "code-comment-multiplication-calculator",
            "role": "run a lightweight business formula",
            "uiDepth": 1
          },
          {
            "order": 10,
            "toolId": "sponsor-invoice-total-calculator",
            "role": "calculate invoice totals from line-item assumptions",
            "uiDepth": 2
          },
          {
            "order": 11,
            "toolId": "ad-copy-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 12,
            "toolId": "csv-export-percent-change-calculator",
            "role": "compare before/after values",
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
            "toolId": "compound-interest-calculator",
            "role": "model long-term growth or recurring gains",
            "uiDepth": 1
          },
          {
            "order": 14,
            "toolId": "loan-payment-calculator",
            "role": "estimate payment obligations",
            "uiDepth": 2
          },
          {
            "order": 15,
            "toolId": "brand-name-box-volume-calculator",
            "role": "run a lightweight business formula",
            "uiDepth": 3
          },
          {
            "order": 16,
            "toolId": "store-order-total-calculator",
            "role": "calculate invoice totals from line-item assumptions",
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
            "toolId": "podcast-notes-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 18,
            "toolId": "resume-bullet-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 2
          },
          {
            "order": 19,
            "toolId": "compound-interest-calculator",
            "role": "model long-term growth or recurring gains",
            "uiDepth": 3
          },
          {
            "order": 20,
            "toolId": "loan-payment-calculator",
            "role": "estimate payment obligations",
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
            "toolId": "blog-post-addition-calculator",
            "role": "run a lightweight business formula",
            "uiDepth": 1
          },
          {
            "order": 22,
            "toolId": "subscription-invoice-total-calculator",
            "role": "calculate invoice totals from line-item assumptions",
            "uiDepth": 2
          },
          {
            "order": 23,
            "toolId": "instagram-caption-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 24,
            "toolId": "landing-page-percent-change-calculator",
            "role": "compare before/after values",
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
            "toolId": "compound-interest-calculator",
            "role": "model long-term growth or recurring gains",
            "uiDepth": 1
          },
          {
            "order": 26,
            "toolId": "loan-payment-calculator",
            "role": "estimate payment obligations",
            "uiDepth": 2
          },
          {
            "order": 27,
            "toolId": "youtube-description-rectangle-area-calculator",
            "role": "run a lightweight business formula",
            "uiDepth": 3
          },
          {
            "order": 28,
            "toolId": "tool-sale-order-total-calculator",
            "role": "calculate invoice totals from line-item assumptions",
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
            "toolId": "domain-list-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 30,
            "toolId": "file-name-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 2
          },
          {
            "order": 31,
            "toolId": "compound-interest-calculator",
            "role": "model long-term growth or recurring gains",
            "uiDepth": 3
          },
          {
            "order": 32,
            "toolId": "loan-payment-calculator",
            "role": "estimate payment obligations",
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
            "toolId": "video-script-division-calculator",
            "role": "run a lightweight business formula",
            "uiDepth": 1
          },
          {
            "order": 34,
            "toolId": "wholesale-order-total-calculator",
            "role": "calculate invoice totals from line-item assumptions",
            "uiDepth": 2
          },
          {
            "order": 35,
            "toolId": "url-slug-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 36,
            "toolId": "blog-post-percent-change-calculator",
            "role": "compare before/after values",
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
            "toolId": "compound-interest-calculator",
            "role": "model long-term growth or recurring gains",
            "uiDepth": 1
          },
          {
            "order": 38,
            "toolId": "loan-payment-calculator",
            "role": "estimate payment obligations",
            "uiDepth": 2
          },
          {
            "order": 39,
            "toolId": "url-slug-average-calculator",
            "role": "run a lightweight business formula",
            "uiDepth": 3
          },
          {
            "order": 40,
            "toolId": "workshop-invoice-total-calculator",
            "role": "calculate invoice totals from line-item assumptions",
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
            "toolId": "meta-description-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 42,
            "toolId": "press-release-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 2
          },
          {
            "order": 43,
            "toolId": "compound-interest-calculator",
            "role": "model long-term growth or recurring gains",
            "uiDepth": 3
          },
          {
            "order": 44,
            "toolId": "loan-payment-calculator",
            "role": "estimate payment obligations",
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
            "toolId": "resume-bullet-subtraction-calculator",
            "role": "run a lightweight business formula",
            "uiDepth": 1
          },
          {
            "order": 46,
            "toolId": "client-invoice-total-calculator",
            "role": "calculate invoice totals from line-item assumptions",
            "uiDepth": 2
          },
          {
            "order": 47,
            "toolId": "garden-journal-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 48,
            "toolId": "invoice-memo-percent-change-calculator",
            "role": "compare before/after values",
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
            "toolId": "compound-interest-calculator",
            "role": "model long-term growth or recurring gains",
            "uiDepth": 1
          },
          {
            "order": 50,
            "toolId": "loan-payment-calculator",
            "role": "estimate payment obligations",
            "uiDepth": 2
          },
          {
            "order": 51,
            "toolId": "recipe-notes-multiplication-calculator",
            "role": "run a lightweight business formula",
            "uiDepth": 3
          },
          {
            "order": 52,
            "toolId": "community-order-total-calculator",
            "role": "calculate invoice totals from line-item assumptions",
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
            "toolId": "code-comment-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 54,
            "toolId": "ebook-chapter-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 2
          },
          {
            "order": 55,
            "toolId": "compound-interest-calculator",
            "role": "model long-term growth or recurring gains",
            "uiDepth": 3
          },
          {
            "order": 56,
            "toolId": "loan-payment-calculator",
            "role": "estimate payment obligations",
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
            "toolId": "product-listing-box-volume-calculator",
            "role": "run a lightweight business formula",
            "uiDepth": 1
          },
          {
            "order": 58,
            "toolId": "consulting-invoice-total-calculator",
            "role": "calculate invoice totals from line-item assumptions",
            "uiDepth": 2
          },
          {
            "order": 59,
            "toolId": "recipe-notes-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 60,
            "toolId": "video-script-percent-change-calculator",
            "role": "compare before/after values",
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
            "toolId": "compound-interest-calculator",
            "role": "model long-term growth or recurring gains",
            "uiDepth": 1
          },
          {
            "order": 62,
            "toolId": "loan-payment-calculator",
            "role": "estimate payment obligations",
            "uiDepth": 2
          },
          {
            "order": 63,
            "toolId": "press-release-addition-calculator",
            "role": "run a lightweight business formula",
            "uiDepth": 3
          },
          {
            "order": 64,
            "toolId": "digital-product-order-total-calculator",
            "role": "calculate invoice totals from line-item assumptions",
            "uiDepth": 4
          }
        ]
      }
    ]
  },
  {
    "id": "project-catering-hr-intake-to-output-006",
    "title": "Catering HR intake-to-output workflow",
    "field": "Catering",
    "businessFunction": "HR",
    "groupId": "group-hr-intake-to-output",
    "outcome": "Use compatible HR tools to turn raw input into a ready-to-use output for Catering.",
    "prompt": "Build a micro workflow for Catering: turn raw input into a ready-to-use output using HR tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Catering notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible HR chain.",
    "complexity": "micro-2-4",
    "layout": "2x1",
    "executionMode": "compact-waterfall",
    "toolCount": 4,
    "panelCount": 2,
    "maxNestedUiDepth": 2,
    "tags": [
      "catering",
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
            "toolId": "plant-care-notes-password-generator",
            "role": "create secure passwords for the project",
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
        "uiTitle": "HR node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 3,
            "toolId": "email-subject-sentence-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 4,
            "toolId": "json-snippet-add-years-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 2
          }
        ]
      }
    ]
  },
  {
    "id": "project-catering-content-intake-to-output-007",
    "title": "Catering content intake-to-output workflow",
    "field": "Catering",
    "businessFunction": "content",
    "groupId": "group-content-intake-to-output",
    "outcome": "Use compatible content tools to turn raw input into a ready-to-use output for Catering.",
    "prompt": "Build a 8-panel workflow for Catering: turn raw input into a ready-to-use output using content tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Catering notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible content chain.",
    "complexity": "mid-8",
    "layout": "4x2",
    "executionMode": "hybrid",
    "toolCount": 8,
    "panelCount": 8,
    "maxNestedUiDepth": 1,
    "tags": [
      "catering",
      "content",
      "intake-to-output",
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
            "toolId": "converter-page-utm-link-builder",
            "role": "create trackable campaign URLs",
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
            "toolId": "html-block-text-reverser",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
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
            "toolId": "youtube-description-meta-length-checker",
            "role": "check title and description length for web publishing",
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
            "toolId": "policy-page-keyword-density-checker",
            "role": "extract keyword usage from project text",
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
            "toolId": "uuid-list-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "youtube-description-utm-link-builder",
            "role": "create trackable campaign URLs",
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
            "toolId": "sitemap-entry-trim-whitespace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-catering-seo-intake-to-output-008",
    "title": "Catering SEO intake-to-output workflow",
    "field": "Catering",
    "businessFunction": "SEO",
    "groupId": "group-seo-intake-to-output",
    "outcome": "Use compatible SEO tools to turn raw input into a ready-to-use output for Catering.",
    "prompt": "Build a 16-panel workflow for Catering: turn raw input into a ready-to-use output using SEO tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Catering notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible SEO chain.",
    "complexity": "standard-16",
    "layout": "4x4",
    "executionMode": "waterfall",
    "toolCount": 16,
    "panelCount": 16,
    "maxNestedUiDepth": 1,
    "tags": [
      "catering",
      "seo",
      "intake-to-output",
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
            "toolId": "about-page-meta-length-checker",
            "role": "check title and description length for web publishing",
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
            "toolId": "landing-page-keyword-density-checker",
            "role": "extract keyword usage from project text",
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
            "toolId": "plant-profile-utm-link-builder",
            "role": "create trackable campaign URLs",
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
            "toolId": "redirect-url-url-encoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
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
            "toolId": "shipping-note-text-reverser",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "base-url-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "instagram-reel-meta-length-checker",
            "role": "check title and description length for web publishing",
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
            "toolId": "donation-campaign-keyword-density-checker",
            "role": "extract keyword usage from project text",
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
            "toolId": "garden-guide-utm-link-builder",
            "role": "create trackable campaign URLs",
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
            "toolId": "html-snippet-url-encoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
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
            "toolId": "garden-journal-uppercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "invoice-memo-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "blog-article-meta-length-checker",
            "role": "check title and description length for web publishing",
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
            "toolId": "about-page-keyword-density-checker",
            "role": "extract keyword usage from project text",
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
            "toolId": "calculator-page-utm-link-builder",
            "role": "create trackable campaign URLs",
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
            "toolId": "cloudflare-rule-url-encoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-catering-social-intake-to-output-009",
    "title": "Catering social media intake-to-output workflow",
    "field": "Catering",
    "businessFunction": "social media",
    "groupId": "group-social-intake-to-output",
    "outcome": "Use compatible social media tools to turn raw input into a ready-to-use output for Catering.",
    "prompt": "Build a 8-panel workflow for Catering: turn raw input into a ready-to-use output using social media tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Catering notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible social media chain.",
    "complexity": "mid-8",
    "layout": "2x4",
    "executionMode": "hybrid",
    "toolCount": 8,
    "panelCount": 8,
    "maxNestedUiDepth": 1,
    "tags": [
      "catering",
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
            "toolId": "facebook-post-meta-length-checker",
            "role": "check title and description length for web publishing",
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
            "toolId": "product-page-keyword-density-checker",
            "role": "extract keyword usage from project text",
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
            "toolId": "tiktok-caption-utm-link-builder",
            "role": "create trackable campaign URLs",
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
            "toolId": "worker-route-base64-decoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
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
            "toolId": "plant-care-notes-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "customer-reply-find-and-replace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "sitemap-page-meta-length-checker",
            "role": "check title and description length for web publishing",
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
            "toolId": "image-tool-page-keyword-density-checker",
            "role": "extract keyword usage from project text",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-catering-email-intake-to-output-010",
    "title": "Catering email intake-to-output workflow",
    "field": "Catering",
    "businessFunction": "email",
    "groupId": "group-email-intake-to-output",
    "outcome": "Use compatible email tools to turn raw input into a ready-to-use output for Catering.",
    "prompt": "Build a 32-tool nested workbench for Catering: turn raw input into a ready-to-use output using email tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Catering notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible email chain.",
    "complexity": "advanced-32",
    "layout": "4x4",
    "executionMode": "hybrid-waterfall",
    "toolCount": 32,
    "panelCount": 16,
    "maxNestedUiDepth": 2,
    "tags": [
      "catering",
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
            "toolId": "pinterest-pin-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "youtube-video-utm-link-builder",
            "role": "create trackable campaign URLs",
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
            "toolId": "css-class-base64-decoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 1
          },
          {
            "order": 4,
            "toolId": "cookie-value-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "file-name-slug-generator",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 6,
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
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
            "toolId": "contact-page-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 1
          },
          {
            "order": 8,
            "toolId": "policy-page-utm-link-builder",
            "role": "create trackable campaign URLs",
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
            "toolId": "user-message-base64-decoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 1
          },
          {
            "order": 10,
            "toolId": "log-line-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "resume-bullet-title-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 12,
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
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
            "toolId": "policy-page-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 1
          },
          {
            "order": 14,
            "toolId": "google-result-utm-link-builder",
            "role": "create trackable campaign URLs",
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
            "toolId": "regex-pattern-base64-decoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 1
          },
          {
            "order": 16,
            "toolId": "svg-snippet-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "file-name-blank-line-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 18,
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
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
            "toolId": "developer-tool-page-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 1
          },
          {
            "order": 20,
            "toolId": "category-page-utm-link-builder",
            "role": "create trackable campaign URLs",
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
            "toolId": "image-alt-text-base64-decoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 1
          },
          {
            "order": 22,
            "toolId": "email-body-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "resume-bullet-find-and-replace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 24,
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
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
            "toolId": "product-page-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 1
          },
          {
            "order": 26,
            "toolId": "tiktok-caption-utm-link-builder",
            "role": "create trackable campaign URLs",
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
            "toolId": "commit-message-base64-decoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 1
          },
          {
            "order": 28,
            "toolId": "plant-care-notes-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "facebook-bio-slug-generator",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 30,
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
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
            "toolId": "facebook-bio-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 1
          },
          {
            "order": 32,
            "toolId": "newsletter-campaign-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 2
          }
        ]
      }
    ]
  },
  {
    "id": "project-catering-data-intake-to-output-011",
    "title": "Catering data cleanup intake-to-output workflow",
    "field": "Catering",
    "businessFunction": "data cleanup",
    "groupId": "group-data-intake-to-output",
    "outcome": "Use compatible data cleanup tools to turn raw input into a ready-to-use output for Catering.",
    "prompt": "Build a 16-panel workflow for Catering: turn raw input into a ready-to-use output using data cleanup tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Catering notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible data cleanup chain.",
    "complexity": "standard-16",
    "layout": "4x4",
    "executionMode": "waterfall",
    "toolCount": 16,
    "panelCount": 16,
    "maxNestedUiDepth": 1,
    "tags": [
      "catering",
      "data",
      "intake-to-output",
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
            "toolId": "domain-list-slug-generator",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "html-snippet-base64-decoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
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
            "toolId": "resume-bullet-uuid-generator",
            "role": "create unique IDs for assets, records, or tasks",
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
            "toolId": "canonical-url-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
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
            "toolId": "environment-value-json-minifier",
            "role": "format, validate, or extract useful keys from JSON",
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
            "toolId": "html-snippet-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "press-release-trim-whitespace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "cloudflare-rule-base64-decoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
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
            "toolId": "ebook-chapter-uuid-generator",
            "role": "create unique IDs for assets, records, or tasks",
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
            "toolId": "robots-rule-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
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
            "toolId": "robots-rule-json-formatter",
            "role": "format, validate, or extract useful keys from JSON",
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
            "toolId": "response-text-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "domain-list-blank-line-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "system-message-base64-decoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
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
            "toolId": "press-release-uuid-generator",
            "role": "create unique IDs for assets, records, or tasks",
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
            "toolId": "invoice-memo-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-catering-reporting-intake-to-output-012",
    "title": "Catering reporting intake-to-output workflow",
    "field": "Catering",
    "businessFunction": "reporting",
    "groupId": "group-reporting-intake-to-output",
    "outcome": "Use compatible reporting tools to turn raw input into a ready-to-use output for Catering.",
    "prompt": "Build a micro workflow for Catering: turn raw input into a ready-to-use output using reporting tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Catering notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible reporting chain.",
    "complexity": "micro-2-4",
    "layout": "1x1",
    "executionMode": "compact-waterfall",
    "toolCount": 3,
    "panelCount": 1,
    "maxNestedUiDepth": 3,
    "tags": [
      "catering",
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
            "toolId": "instagram-caption-slug-generator",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "url-slug-add-weeks-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 2
          },
          {
            "order": 3,
            "toolId": "environment-value-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 3
          }
        ]
      }
    ]
  },
  {
    "id": "project-catering-compliance-intake-to-output-013",
    "title": "Catering compliance intake-to-output workflow",
    "field": "Catering",
    "businessFunction": "compliance",
    "groupId": "group-compliance-intake-to-output",
    "outcome": "Use compatible compliance tools to turn raw input into a ready-to-use output for Catering.",
    "prompt": "Build a 8-panel workflow for Catering: turn raw input into a ready-to-use output using compliance tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Catering notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible compliance chain.",
    "complexity": "mid-8",
    "layout": "2x4",
    "executionMode": "hybrid",
    "toolCount": 8,
    "panelCount": 8,
    "maxNestedUiDepth": 1,
    "tags": [
      "catering",
      "compliance",
      "intake-to-output",
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
            "toolId": "csv-cell-json-formatter",
            "role": "format, validate, or extract useful keys from JSON",
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
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
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
            "toolId": "resume-bullet-trim-whitespace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "folder-name-days-between-dates-calculator",
            "role": "measure durations between dates",
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
            "toolId": "keyword-list-add-days-date-calculator",
            "role": "project deadlines and future dates",
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
            "toolId": "pages-url-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "python-string-json-minifier",
            "role": "format, validate, or extract useful keys from JSON",
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
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-catering-scheduling-intake-to-output-014",
    "title": "Catering scheduling intake-to-output workflow",
    "field": "Catering",
    "businessFunction": "scheduling",
    "groupId": "group-scheduling-intake-to-output",
    "outcome": "Use compatible scheduling tools to turn raw input into a ready-to-use output for Catering.",
    "prompt": "Build a 16-panel workflow for Catering: turn raw input into a ready-to-use output using scheduling tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Catering notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible scheduling chain.",
    "complexity": "standard-16",
    "layout": "4x4",
    "executionMode": "waterfall",
    "toolCount": 16,
    "panelCount": 16,
    "maxNestedUiDepth": 1,
    "tags": [
      "catering",
      "scheduling",
      "intake-to-output",
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
            "toolId": "seo-title-days-between-dates-calculator",
            "role": "measure durations between dates",
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
            "toolId": "facebook-bio-add-months-date-calculator",
            "role": "project deadlines and future dates",
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
            "toolId": "youtube-description-date-to-unix-timestamp",
            "role": "convert or stamp time values",
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
            "toolId": "oauth-state-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "domain-list-extra-space-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "webhook-body-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
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
            "toolId": "json-snippet-days-between-dates-calculator",
            "role": "measure durations between dates",
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
            "toolId": "domain-list-add-months-date-calculator",
            "role": "project deadlines and future dates",
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
            "toolId": "url-slug-date-to-unix-timestamp",
            "role": "convert or stamp time values",
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
            "toolId": "user-message-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "press-release-sentence-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "press-release-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
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
            "toolId": "domain-list-days-between-dates-calculator",
            "role": "measure durations between dates",
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
            "toolId": "csv-export-add-months-date-calculator",
            "role": "project deadlines and future dates",
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
            "toolId": "seo-title-date-to-unix-timestamp",
            "role": "convert or stamp time values",
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
            "toolId": "facebook-bio-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-catering-product-intake-to-output-015",
    "title": "Catering product intake-to-output workflow",
    "field": "Catering",
    "businessFunction": "product",
    "groupId": "group-product-intake-to-output",
    "outcome": "Use compatible product tools to turn raw input into a ready-to-use output for Catering.",
    "prompt": "Build a 64-tool nested waterfall for Catering: turn raw input into a ready-to-use output using product tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Catering notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible product chain.",
    "complexity": "nested-64",
    "layout": "4x4",
    "executionMode": "nested-waterfall",
    "toolCount": 64,
    "panelCount": 16,
    "maxNestedUiDepth": 4,
    "tags": [
      "catering",
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
            "toolId": "youtube-description-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "newsletter-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 2
          },
          {
            "order": 3,
            "toolId": "customer-reply-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 4,
            "toolId": "facebook-bio-percent-change-calculator",
            "role": "compare before/after values",
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
            "toolId": "api-token-json-key-extractor",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 1
          },
          {
            "order": 6,
            "toolId": "keyword-list-trim-whitespace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 7,
            "toolId": "query-string-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 3
          },
          {
            "order": 8,
            "toolId": "tracking-link-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "seo-title-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 10,
            "toolId": "ad-copy-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 2
          },
          {
            "order": 11,
            "toolId": "jwt-payload-json-formatter",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 3
          },
          {
            "order": 12,
            "toolId": "ad-copy-blank-line-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "git-branch-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 14,
            "toolId": "error-message-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 2
          },
          {
            "order": 15,
            "toolId": "markdown-doc-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 16,
            "toolId": "podcast-notes-percent-change-calculator",
            "role": "compare before/after values",
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
            "toolId": "sql-snippet-json-key-extractor",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 1
          },
          {
            "order": 18,
            "toolId": "keyword-list-lowercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 19,
            "toolId": "xml-node-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 3
          },
          {
            "order": 20,
            "toolId": "prompt-text-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "folder-name-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 22,
            "toolId": "instagram-caption-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 2
          },
          {
            "order": 23,
            "toolId": "javascript-string-json-formatter",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 3
          },
          {
            "order": 24,
            "toolId": "youtube-description-slug-generator",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "prompt-text-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 26,
            "toolId": "yaml-value-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 2
          },
          {
            "order": 27,
            "toolId": "brand-name-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 28,
            "toolId": "domain-list-percent-change-calculator",
            "role": "compare before/after values",
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
            "toolId": "schema-markup-json-key-extractor",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 1
          },
          {
            "order": 30,
            "toolId": "json-snippet-trim-whitespace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 31,
            "toolId": "form-payload-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 3
          },
          {
            "order": 32,
            "toolId": "html-snippet-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "product-listing-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 34,
            "toolId": "url-slug-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 2
          },
          {
            "order": 35,
            "toolId": "environment-value-json-formatter",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 3
          },
          {
            "order": 36,
            "toolId": "youtube-description-blank-line-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "webhook-body-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 38,
            "toolId": "response-text-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 2
          },
          {
            "order": 39,
            "toolId": "json-snippet-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 40,
            "toolId": "meta-description-percent-change-calculator",
            "role": "compare before/after values",
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
            "toolId": "query-string-json-key-extractor",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 1
          },
          {
            "order": 42,
            "toolId": "json-snippet-lowercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 43,
            "toolId": "press-release-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 3
          },
          {
            "order": 44,
            "toolId": "canonical-url-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "email-subject-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 46,
            "toolId": "garden-journal-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 2
          },
          {
            "order": 47,
            "toolId": "callback-url-json-minifier",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 3
          },
          {
            "order": 48,
            "toolId": "video-script-slug-generator",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "error-message-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 50,
            "toolId": "json-config-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 2
          },
          {
            "order": 51,
            "toolId": "youtube-description-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 52,
            "toolId": "code-comment-percent-change-calculator",
            "role": "compare before/after values",
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
            "toolId": "oauth-state-json-key-extractor",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 1
          },
          {
            "order": 54,
            "toolId": "invoice-memo-trim-whitespace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 55,
            "toolId": "user-message-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 3
          },
          {
            "order": 56,
            "toolId": "sitemap-url-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "plant-care-notes-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 58,
            "toolId": "recipe-notes-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 2
          },
          {
            "order": 59,
            "toolId": "webhook-body-json-minifier",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 3
          },
          {
            "order": 60,
            "toolId": "video-script-blank-line-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "pages-url-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 62,
            "toolId": "customer-reply-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 2
          },
          {
            "order": 63,
            "toolId": "html-block-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 64,
            "toolId": "keyword-list-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 4
          }
        ]
      }
    ]
  },
  {
    "id": "project-catering-ux-intake-to-output-016",
    "title": "Catering UX/UI intake-to-output workflow",
    "field": "Catering",
    "businessFunction": "UX/UI",
    "groupId": "group-ux-intake-to-output",
    "outcome": "Use compatible UX/UI tools to turn raw input into a ready-to-use output for Catering.",
    "prompt": "Build a micro workflow for Catering: turn raw input into a ready-to-use output using UX/UI tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Catering notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible UX/UI chain.",
    "complexity": "micro-2-4",
    "layout": "1x1",
    "executionMode": "compact-waterfall",
    "toolCount": 3,
    "panelCount": 1,
    "maxNestedUiDepth": 3,
    "tags": [
      "catering",
      "ux",
      "intake-to-output",
      "micro-2-4"
    ],
    "compatibilitySummary": "3 tools arranged as 1 panel UI; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "UX/UI node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "file-name-find-and-replace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "python-string-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 2
          },
          {
            "order": 3,
            "toolId": "product-page-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 3
          }
        ]
      }
    ]
  },
  {
    "id": "project-catering-web-launch-intake-to-output-017",
    "title": "Catering web launch intake-to-output workflow",
    "field": "Catering",
    "businessFunction": "web launch",
    "groupId": "group-web-launch-intake-to-output",
    "outcome": "Use compatible web launch tools to turn raw input into a ready-to-use output for Catering.",
    "prompt": "Build a 16-panel workflow for Catering: turn raw input into a ready-to-use output using web launch tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Catering notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible web launch chain.",
    "complexity": "standard-16",
    "layout": "4x4",
    "executionMode": "waterfall",
    "toolCount": 16,
    "panelCount": 16,
    "maxNestedUiDepth": 1,
    "tags": [
      "catering",
      "web-launch",
      "intake-to-output",
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
            "toolId": "faq-page-keyword-density-checker",
            "role": "extract keyword usage from project text",
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
            "toolId": "homepage-utm-link-builder",
            "role": "create trackable campaign URLs",
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
            "toolId": "json-config-json-key-extractor",
            "role": "format, validate, or extract useful keys from JSON",
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
            "toolId": "blog-post-hex-to-rgb-converter",
            "role": "convert brand colors and palette values",
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
            "toolId": "html-block-color-contrast-checker",
            "role": "check readability and accessibility contrast",
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
            "toolId": "faq-page-meta-length-checker",
            "role": "check title and description length for web publishing",
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
            "toolId": "blog-article-keyword-density-checker",
            "role": "extract keyword usage from project text",
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
            "toolId": "contact-page-utm-link-builder",
            "role": "create trackable campaign URLs",
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
            "toolId": "sitemap-url-json-minifier",
            "role": "format, validate, or extract useful keys from JSON",
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
            "toolId": "press-release-hex-to-rgb-converter",
            "role": "convert brand colors and palette values",
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
            "toolId": "recipe-notes-color-contrast-checker",
            "role": "check readability and accessibility contrast",
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
            "toolId": "tiktok-caption-meta-length-checker",
            "role": "check title and description length for web publishing",
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
            "toolId": "raffle-campaign-keyword-density-checker",
            "role": "extract keyword usage from project text",
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
            "toolId": "tool-page-utm-link-builder",
            "role": "create trackable campaign URLs",
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
            "toolId": "html-snippet-json-key-extractor",
            "role": "format, validate, or extract useful keys from JSON",
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
            "toolId": "garden-journal-hex-to-rgb-converter",
            "role": "convert brand colors and palette values",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-catering-developer-intake-to-output-018",
    "title": "Catering developer intake-to-output workflow",
    "field": "Catering",
    "businessFunction": "developer",
    "groupId": "group-developer-intake-to-output",
    "outcome": "Use compatible developer tools to turn raw input into a ready-to-use output for Catering.",
    "prompt": "Build a micro workflow for Catering: turn raw input into a ready-to-use output using developer tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Catering notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible developer chain.",
    "complexity": "micro-2-4",
    "layout": "2x1",
    "executionMode": "compact-waterfall",
    "toolCount": 4,
    "panelCount": 2,
    "maxNestedUiDepth": 2,
    "tags": [
      "catering",
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
            "toolId": "header-value-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "svg-snippet-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "javascript-string-json-key-extractor",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 1
          },
          {
            "order": 4,
            "toolId": "tool-url-html-unescaper",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 2
          }
        ]
      }
    ]
  },
  {
    "id": "project-catering-security-intake-to-output-019",
    "title": "Catering security intake-to-output workflow",
    "field": "Catering",
    "businessFunction": "security",
    "groupId": "group-security-intake-to-output",
    "outcome": "Use compatible security tools to turn raw input into a ready-to-use output for Catering.",
    "prompt": "Build a 8-panel workflow for Catering: turn raw input into a ready-to-use output using security tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Catering notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible security chain.",
    "complexity": "mid-8",
    "layout": "4x2",
    "executionMode": "hybrid",
    "toolCount": 8,
    "panelCount": 8,
    "maxNestedUiDepth": 1,
    "tags": [
      "catering",
      "security",
      "intake-to-output",
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
            "toolId": "invoice-memo-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "order-note-password-generator",
            "role": "create secure passwords for the project",
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
            "toolId": "folder-name-uuid-generator",
            "role": "create unique IDs for assets, records, or tasks",
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
            "toolId": "csv-cell-url-decoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
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
            "toolId": "schema-markup-json-key-extractor",
            "role": "format, validate, or extract useful keys from JSON",
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
            "toolId": "hashtag-set-slug-generator",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "search-query-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "ad-copy-password-generator",
            "role": "create secure passwords for the project",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-catering-training-intake-to-output-020",
    "title": "Catering training intake-to-output workflow",
    "field": "Catering",
    "businessFunction": "training",
    "groupId": "group-training-intake-to-output",
    "outcome": "Use compatible training tools to turn raw input into a ready-to-use output for Catering.",
    "prompt": "Build a 32-tool nested workbench for Catering: turn raw input into a ready-to-use output using training tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Catering notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible training chain.",
    "complexity": "advanced-32",
    "layout": "4x4",
    "executionMode": "hybrid-waterfall",
    "toolCount": 32,
    "panelCount": 16,
    "maxNestedUiDepth": 2,
    "tags": [
      "catering",
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
            "toolId": "customer-reply-trim-whitespace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "callback-url-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "landing-page-add-months-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          },
          {
            "order": 4,
            "toolId": "ad-copy-days-between-dates-calculator",
            "role": "measure durations between dates",
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
            "toolId": "git-branch-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 6,
            "toolId": "landing-page-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
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
            "toolId": "press-release-extra-space-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 8,
            "toolId": "javascript-string-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "json-snippet-add-months-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          },
          {
            "order": 10,
            "toolId": "markdown-doc-days-between-dates-calculator",
            "role": "measure durations between dates",
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
            "toolId": "xml-node-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 12,
            "toolId": "file-name-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
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
            "toolId": "customer-reply-lowercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 14,
            "toolId": "seo-title-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "instagram-caption-add-months-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          },
          {
            "order": 16,
            "toolId": "file-name-days-between-dates-calculator",
            "role": "measure durations between dates",
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
            "toolId": "prompt-text-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 18,
            "toolId": "blog-post-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
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
            "toolId": "podcast-notes-text-reverser",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 20,
            "toolId": "csv-cell-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "hashtag-set-add-months-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          },
          {
            "order": 22,
            "toolId": "youtube-description-days-between-dates-calculator",
            "role": "measure durations between dates",
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
            "toolId": "form-payload-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 24,
            "toolId": "press-release-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
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
            "toolId": "csv-export-trim-whitespace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 26,
            "toolId": "meta-description-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "folder-name-add-days-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          },
          {
            "order": 28,
            "toolId": "landing-page-days-between-dates-calculator",
            "role": "measure durations between dates",
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
            "toolId": "webhook-body-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 30,
            "toolId": "invoice-memo-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
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
            "toolId": "podcast-notes-extra-space-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 32,
            "toolId": "tool-url-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 2
          }
        ]
      }
    ]
  },
  {
    "id": "project-catering-inventory-intake-to-output-021",
    "title": "Catering inventory intake-to-output workflow",
    "field": "Catering",
    "businessFunction": "inventory",
    "groupId": "group-inventory-intake-to-output",
    "outcome": "Use compatible inventory tools to turn raw input into a ready-to-use output for Catering.",
    "prompt": "Build a 8-panel workflow for Catering: turn raw input into a ready-to-use output using inventory tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Catering notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible inventory chain.",
    "complexity": "mid-8",
    "layout": "2x4",
    "executionMode": "hybrid",
    "toolCount": 8,
    "panelCount": 8,
    "maxNestedUiDepth": 1,
    "tags": [
      "catering",
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
            "toolId": "domain-list-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
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
            "toolId": "atmosphere-to-inch-hg-converter",
            "role": "convert operational measurements",
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
            "toolId": "robots-rule-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "plant-care-notes-uppercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "url-slug-add-months-date-calculator",
            "role": "project deadlines and future dates",
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
            "toolId": "base-url-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
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
            "toolId": "url-slug-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
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
            "toolId": "kilometer-to-nanometer-converter",
            "role": "convert operational measurements",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-catering-pricing-intake-to-output-022",
    "title": "Catering pricing intake-to-output workflow",
    "field": "Catering",
    "businessFunction": "pricing",
    "groupId": "group-pricing-intake-to-output",
    "outcome": "Use compatible pricing tools to turn raw input into a ready-to-use output for Catering.",
    "prompt": "Build a micro workflow for Catering: turn raw input into a ready-to-use output using pricing tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Catering notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible pricing chain.",
    "complexity": "micro-2-4",
    "layout": "2x1",
    "executionMode": "compact-waterfall",
    "toolCount": 4,
    "panelCount": 2,
    "maxNestedUiDepth": 2,
    "tags": [
      "catering",
      "pricing",
      "intake-to-output",
      "micro-2-4"
    ],
    "compatibilitySummary": "4 tools arranged as 2 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Pricing node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "community-order-total-calculator",
            "role": "calculate invoice totals from line-item assumptions",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "folder-name-subtraction-calculator",
            "role": "run a lightweight business formula",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "Pricing node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 3,
            "toolId": "compound-interest-calculator",
            "role": "model long-term growth or recurring gains",
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
    "id": "project-catering-outreach-intake-to-output-023",
    "title": "Catering outreach intake-to-output workflow",
    "field": "Catering",
    "businessFunction": "outreach",
    "groupId": "group-outreach-intake-to-output",
    "outcome": "Use compatible outreach tools to turn raw input into a ready-to-use output for Catering.",
    "prompt": "Build a 16-panel workflow for Catering: turn raw input into a ready-to-use output using outreach tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Catering notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible outreach chain.",
    "complexity": "standard-16",
    "layout": "4x4",
    "executionMode": "waterfall",
    "toolCount": 16,
    "panelCount": 16,
    "maxNestedUiDepth": 1,
    "tags": [
      "catering",
      "outreach",
      "intake-to-output",
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
            "toolId": "cloudflare-rule-url-encoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
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
            "toolId": "product-listing-keyword-density-checker",
            "role": "extract keyword usage from project text",
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
            "toolId": "webhook-body-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "community-rule-title-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "converter-page-meta-length-checker",
            "role": "check title and description length for web publishing",
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
            "toolId": "converter-page-utm-link-builder",
            "role": "create trackable campaign URLs",
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
            "toolId": "system-message-url-encoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
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
            "toolId": "homepage-keyword-density-checker",
            "role": "extract keyword usage from project text",
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
            "toolId": "garden-journal-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "newsletter-blank-line-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "product-listing-meta-length-checker",
            "role": "check title and description length for web publishing",
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
            "toolId": "youtube-description-utm-link-builder",
            "role": "create trackable campaign URLs",
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
            "toolId": "python-string-url-encoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
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
            "toolId": "contact-page-keyword-density-checker",
            "role": "extract keyword usage from project text",
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
            "toolId": "recipe-notes-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "community-rule-find-and-replace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-catering-research-intake-to-output-024",
    "title": "Catering research intake-to-output workflow",
    "field": "Catering",
    "businessFunction": "research",
    "groupId": "group-research-intake-to-output",
    "outcome": "Use compatible research tools to turn raw input into a ready-to-use output for Catering.",
    "prompt": "Build a micro workflow for Catering: turn raw input into a ready-to-use output using research tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Catering notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible research chain.",
    "complexity": "micro-2-4",
    "layout": "1x1",
    "executionMode": "compact-waterfall",
    "toolCount": 3,
    "panelCount": 1,
    "maxNestedUiDepth": 3,
    "tags": [
      "catering",
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
            "toolId": "oauth-state-json-formatter",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "csv-export-find-and-replace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
    "id": "project-catering-project-management-intake-to-output-025",
    "title": "Catering project management intake-to-output workflow",
    "field": "Catering",
    "businessFunction": "project management",
    "groupId": "group-project-management-intake-to-output",
    "outcome": "Use compatible project management tools to turn raw input into a ready-to-use output for Catering.",
    "prompt": "Build a 64-tool nested waterfall for Catering: turn raw input into a ready-to-use output using project management tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Catering notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible project management chain.",
    "complexity": "nested-64",
    "layout": "4x4",
    "executionMode": "nested-waterfall",
    "toolCount": 64,
    "panelCount": 16,
    "maxNestedUiDepth": 4,
    "tags": [
      "catering",
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
            "toolId": "blog-post-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "markdown-doc-add-days-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 2
          },
          {
            "order": 3,
            "toolId": "landing-page-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 3
          },
          {
            "order": 4,
            "toolId": "markdown-doc-text-reverser",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "facebook-bio-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 6,
            "toolId": "seo-title-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 2
          },
          {
            "order": 7,
            "toolId": "press-release-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 8,
            "toolId": "keyword-list-add-days-date-calculator",
            "role": "project deadlines and future dates",
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
            "toolId": "facebook-bio-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          },
          {
            "order": 10,
            "toolId": "blog-post-trim-whitespace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 11,
            "toolId": "python-string-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 12,
            "toolId": "jwt-payload-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
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
            "toolId": "invoice-memo-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 14,
            "toolId": "invoice-memo-add-days-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 2
          },
          {
            "order": 15,
            "toolId": "url-slug-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 3
          },
          {
            "order": 16,
            "toolId": "markdown-doc-extra-space-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "youtube-description-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 18,
            "toolId": "commit-message-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 2
          },
          {
            "order": 19,
            "toolId": "ebook-chapter-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 20,
            "toolId": "html-block-add-days-date-calculator",
            "role": "project deadlines and future dates",
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
            "toolId": "keyword-list-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          },
          {
            "order": 22,
            "toolId": "blog-post-lowercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 23,
            "toolId": "image-alt-text-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 24,
            "toolId": "search-query-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
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
            "toolId": "video-script-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 26,
            "toolId": "garden-journal-add-days-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 2
          },
          {
            "order": 27,
            "toolId": "email-subject-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 3
          },
          {
            "order": 28,
            "toolId": "landing-page-text-reverser",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "robots-rule-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 30,
            "toolId": "javascript-string-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 2
          },
          {
            "order": 31,
            "toolId": "newsletter-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 32,
            "toolId": "facebook-bio-add-years-date-calculator",
            "role": "project deadlines and future dates",
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
            "toolId": "seo-title-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          },
          {
            "order": 34,
            "toolId": "ad-copy-trim-whitespace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 35,
            "toolId": "cloudflare-rule-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 36,
            "toolId": "canonical-url-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
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
            "toolId": "hashtag-set-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 38,
            "toolId": "domain-list-add-years-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 2
          },
          {
            "order": 39,
            "toolId": "json-snippet-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 3
          },
          {
            "order": 40,
            "toolId": "landing-page-extra-space-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "jwt-payload-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 42,
            "toolId": "robots-rule-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 2
          },
          {
            "order": 43,
            "toolId": "csv-export-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 44,
            "toolId": "csv-export-add-years-date-calculator",
            "role": "project deadlines and future dates",
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
            "toolId": "domain-list-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          },
          {
            "order": 46,
            "toolId": "ad-copy-lowercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 47,
            "toolId": "sql-snippet-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 48,
            "toolId": "invoice-memo-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
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
            "toolId": "resume-bullet-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 50,
            "toolId": "brand-name-add-years-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 2
          },
          {
            "order": 51,
            "toolId": "recipe-notes-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 3
          },
          {
            "order": 52,
            "toolId": "keyword-list-text-reverser",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "dns-record-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 54,
            "toolId": "blog-post-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 2
          },
          {
            "order": 55,
            "toolId": "landing-page-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 56,
            "toolId": "ad-copy-add-years-date-calculator",
            "role": "project deadlines and future dates",
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
            "toolId": "invoice-memo-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          },
          {
            "order": 58,
            "toolId": "youtube-description-trim-whitespace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 59,
            "toolId": "oauth-state-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 60,
            "toolId": "regex-pattern-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
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
            "toolId": "file-name-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 62,
            "toolId": "url-slug-add-years-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 2
          },
          {
            "order": 63,
            "toolId": "customer-reply-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 3
          },
          {
            "order": 64,
            "toolId": "keyword-list-extra-space-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 4
          }
        ]
      }
    ]
  },
  {
    "id": "project-catering-marketing-audit-026",
    "title": "Catering marketing audit workflow",
    "field": "Catering",
    "businessFunction": "marketing",
    "groupId": "group-marketing-audit",
    "outcome": "Use compatible marketing tools to audit the current state and create a prioritized fix list for Catering.",
    "prompt": "Build a 16-panel workflow for Catering: audit the current state and create a prioritized fix list using marketing tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Catering notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible marketing chain.",
    "complexity": "standard-16",
    "layout": "4x4",
    "executionMode": "waterfall",
    "toolCount": 16,
    "panelCount": 16,
    "maxNestedUiDepth": 1,
    "tags": [
      "catering",
      "marketing",
      "audit",
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
            "toolId": "landing-page-sentence-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "tool-page-meta-length-checker",
            "role": "check title and description length for web publishing",
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
            "toolId": "image-tool-page-keyword-density-checker",
            "role": "extract keyword usage from project text",
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
            "toolId": "newsletter-campaign-utm-link-builder",
            "role": "create trackable campaign URLs",
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
            "toolId": "instagram-caption-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "schema-markup-base64-encoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
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
            "toolId": "ad-copy-text-reverser",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "google-result-meta-length-checker",
            "role": "check title and description length for web publishing",
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
            "toolId": "converter-page-keyword-density-checker",
            "role": "extract keyword usage from project text",
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
            "toolId": "faq-page-utm-link-builder",
            "role": "create trackable campaign URLs",
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
            "toolId": "schema-markup-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "json-config-base64-encoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
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
            "toolId": "keyword-list-uppercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "youtube-video-meta-length-checker",
            "role": "check title and description length for web publishing",
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
            "toolId": "youtube-description-keyword-density-checker",
            "role": "extract keyword usage from project text",
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
            "toolId": "blog-article-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-catering-sales-audit-027",
    "title": "Catering sales audit workflow",
    "field": "Catering",
    "businessFunction": "sales",
    "groupId": "group-sales-audit",
    "outcome": "Use compatible sales tools to audit the current state and create a prioritized fix list for Catering.",
    "prompt": "Build a 8-panel workflow for Catering: audit the current state and create a prioritized fix list using sales tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Catering notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible sales chain.",
    "complexity": "mid-8",
    "layout": "4x2",
    "executionMode": "hybrid",
    "toolCount": 8,
    "panelCount": 8,
    "maxNestedUiDepth": 1,
    "tags": [
      "catering",
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
            "toolId": "product-sku-lowercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "local-service-page-utm-link-builder",
            "role": "create trackable campaign URLs",
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
            "toolId": "plant-care-notes-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
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
            "toolId": "uuid-list-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "user-message-base64-encoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
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
            "toolId": "recipe-notes-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
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
            "toolId": "donation-page-text-reverser",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "facebook-post-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-catering-support-audit-028",
    "title": "Catering customer support audit workflow",
    "field": "Catering",
    "businessFunction": "customer support",
    "groupId": "group-support-audit",
    "outcome": "Use compatible customer support tools to audit the current state and create a prioritized fix list for Catering.",
    "prompt": "Build a micro workflow for Catering: audit the current state and create a prioritized fix list using customer support tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Catering notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible customer support chain.",
    "complexity": "micro-2-4",
    "layout": "1x1",
    "executionMode": "compact-waterfall",
    "toolCount": 3,
    "panelCount": 1,
    "maxNestedUiDepth": 3,
    "tags": [
      "catering",
      "support",
      "audit",
      "micro-2-4"
    ],
    "compatibilitySummary": "3 tools arranged as 1 panel UI; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Customer support node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "html-snippet-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "markdown-doc-add-months-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 2
          },
          {
            "order": 3,
            "toolId": "form-payload-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 3
          }
        ]
      }
    ]
  },
  {
    "id": "project-catering-operations-audit-029",
    "title": "Catering operations audit workflow",
    "field": "Catering",
    "businessFunction": "operations",
    "groupId": "group-operations-audit",
    "outcome": "Use compatible operations tools to audit the current state and create a prioritized fix list for Catering.",
    "prompt": "Build a 16-panel workflow for Catering: audit the current state and create a prioritized fix list using operations tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Catering notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible operations chain.",
    "complexity": "standard-16",
    "layout": "4x4",
    "executionMode": "waterfall",
    "toolCount": 16,
    "panelCount": 16,
    "maxNestedUiDepth": 1,
    "tags": [
      "catering",
      "operations",
      "audit",
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
            "toolId": "customer-reply-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
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
            "toolId": "api-token-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "folder-name-text-reverser",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "youtube-description-add-months-date-calculator",
            "role": "project deadlines and future dates",
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
            "toolId": "meta-description-days-between-dates-calculator",
            "role": "measure durations between dates",
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
            "toolId": "invoice-memo-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
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
            "toolId": "sql-snippet-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
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
            "toolId": "instagram-caption-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "schema-text-trim-whitespace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "seo-title-add-months-date-calculator",
            "role": "project deadlines and future dates",
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
            "toolId": "folder-name-days-between-dates-calculator",
            "role": "measure durations between dates",
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
            "toolId": "ebook-chapter-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
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
            "toolId": "log-line-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
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
            "toolId": "schema-markup-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "folder-name-extra-space-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "product-listing-add-months-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-catering-finance-audit-030",
    "title": "Catering finance audit workflow",
    "field": "Catering",
    "businessFunction": "finance",
    "groupId": "group-finance-audit",
    "outcome": "Use compatible finance tools to audit the current state and create a prioritized fix list for Catering.",
    "prompt": "Build a 32-tool nested workbench for Catering: audit the current state and create a prioritized fix list using finance tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Catering notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible finance chain.",
    "complexity": "advanced-32",
    "layout": "4x4",
    "executionMode": "hybrid-waterfall",
    "toolCount": 32,
    "panelCount": 16,
    "maxNestedUiDepth": 2,
    "tags": [
      "catering",
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
            "toolId": "loan-payment-calculator",
            "role": "estimate payment obligations",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "seo-title-box-volume-calculator",
            "role": "run a lightweight business formula",
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
            "toolId": "shipping-invoice-total-calculator",
            "role": "calculate invoice totals from line-item assumptions",
            "uiDepth": 1
          },
          {
            "order": 4,
            "toolId": "instagram-caption-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
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
            "toolId": "landing-page-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 1
          },
          {
            "order": 6,
            "toolId": "compound-interest-calculator",
            "role": "model long-term growth or recurring gains",
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
            "toolId": "loan-payment-calculator",
            "role": "estimate payment obligations",
            "uiDepth": 1
          },
          {
            "order": 8,
            "toolId": "resume-bullet-addition-calculator",
            "role": "run a lightweight business formula",
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
            "toolId": "sponsor-invoice-total-calculator",
            "role": "calculate invoice totals from line-item assumptions",
            "uiDepth": 1
          },
          {
            "order": 10,
            "toolId": "domain-list-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
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
            "toolId": "file-name-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 1
          },
          {
            "order": 12,
            "toolId": "compound-interest-calculator",
            "role": "model long-term growth or recurring gains",
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
            "toolId": "loan-payment-calculator",
            "role": "estimate payment obligations",
            "uiDepth": 1
          },
          {
            "order": 14,
            "toolId": "product-listing-rectangle-area-calculator",
            "role": "run a lightweight business formula",
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
            "toolId": "store-order-total-calculator",
            "role": "calculate invoice totals from line-item assumptions",
            "uiDepth": 1
          },
          {
            "order": 16,
            "toolId": "url-slug-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
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
            "toolId": "blog-post-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 1
          },
          {
            "order": 18,
            "toolId": "compound-interest-calculator",
            "role": "model long-term growth or recurring gains",
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
            "toolId": "loan-payment-calculator",
            "role": "estimate payment obligations",
            "uiDepth": 1
          },
          {
            "order": 20,
            "toolId": "press-release-division-calculator",
            "role": "run a lightweight business formula",
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
            "toolId": "subscription-invoice-total-calculator",
            "role": "calculate invoice totals from line-item assumptions",
            "uiDepth": 1
          },
          {
            "order": 22,
            "toolId": "meta-description-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
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
            "toolId": "press-release-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 1
          },
          {
            "order": 24,
            "toolId": "compound-interest-calculator",
            "role": "model long-term growth or recurring gains",
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
            "toolId": "loan-payment-calculator",
            "role": "estimate payment obligations",
            "uiDepth": 1
          },
          {
            "order": 26,
            "toolId": "podcast-notes-average-calculator",
            "role": "run a lightweight business formula",
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
            "toolId": "tool-sale-order-total-calculator",
            "role": "calculate invoice totals from line-item assumptions",
            "uiDepth": 1
          },
          {
            "order": 28,
            "toolId": "garden-journal-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
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
            "toolId": "invoice-memo-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 1
          },
          {
            "order": 30,
            "toolId": "compound-interest-calculator",
            "role": "model long-term growth or recurring gains",
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
            "toolId": "loan-payment-calculator",
            "role": "estimate payment obligations",
            "uiDepth": 1
          },
          {
            "order": 32,
            "toolId": "newsletter-subtraction-calculator",
            "role": "run a lightweight business formula",
            "uiDepth": 2
          }
        ]
      }
    ]
  },
  {
    "id": "project-catering-hr-audit-031",
    "title": "Catering HR audit workflow",
    "field": "Catering",
    "businessFunction": "HR",
    "groupId": "group-hr-audit",
    "outcome": "Use compatible HR tools to audit the current state and create a prioritized fix list for Catering.",
    "prompt": "Build a 8-panel workflow for Catering: audit the current state and create a prioritized fix list using HR tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Catering notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible HR chain.",
    "complexity": "mid-8",
    "layout": "4x2",
    "executionMode": "hybrid",
    "toolCount": 8,
    "panelCount": 8,
    "maxNestedUiDepth": 1,
    "tags": [
      "catering",
      "hr",
      "audit",
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
            "toolId": "recipe-notes-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "press-release-title-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "youtube-description-add-years-date-calculator",
            "role": "project deadlines and future dates",
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
            "toolId": "customer-reply-days-between-dates-calculator",
            "role": "measure durations between dates",
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
            "toolId": "csv-cell-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
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
            "toolId": "schema-text-password-generator",
            "role": "create secure passwords for the project",
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
            "toolId": "base-url-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "customer-reply-uppercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-catering-content-audit-032",
    "title": "Catering content audit workflow",
    "field": "Catering",
    "businessFunction": "content",
    "groupId": "group-content-audit",
    "outcome": "Use compatible content tools to audit the current state and create a prioritized fix list for Catering.",
    "prompt": "Build a 16-panel workflow for Catering: audit the current state and create a prioritized fix list using content tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Catering notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible content chain.",
    "complexity": "standard-16",
    "layout": "4x4",
    "executionMode": "waterfall",
    "toolCount": 16,
    "panelCount": 16,
    "maxNestedUiDepth": 1,
    "tags": [
      "catering",
      "content",
      "audit",
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
            "toolId": "schema-text-uppercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
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
            "toolId": "youtube-description-meta-length-checker",
            "role": "check title and description length for web publishing",
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
            "toolId": "tiktok-caption-keyword-density-checker",
            "role": "extract keyword usage from project text",
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
            "toolId": "api-token-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "calculator-page-utm-link-builder",
            "role": "create trackable campaign URLs",
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
            "toolId": "folder-name-find-and-replace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
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
            "toolId": "homepage-meta-length-checker",
            "role": "check title and description length for web publishing",
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
            "toolId": "newsletter-campaign-keyword-density-checker",
            "role": "extract keyword usage from project text",
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
            "toolId": "instagram-caption-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "sitemap-page-utm-link-builder",
            "role": "create trackable campaign URLs",
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
            "toolId": "schema-text-sentence-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
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
            "toolId": "about-page-meta-length-checker",
            "role": "check title and description length for web publishing",
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
            "toolId": "faq-page-keyword-density-checker",
            "role": "extract keyword usage from project text",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-catering-seo-audit-033",
    "title": "Catering SEO audit workflow",
    "field": "Catering",
    "businessFunction": "SEO",
    "groupId": "group-seo-audit",
    "outcome": "Use compatible SEO tools to audit the current state and create a prioritized fix list for Catering.",
    "prompt": "Build a 8-panel workflow for Catering: audit the current state and create a prioritized fix list using SEO tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Catering notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible SEO chain.",
    "complexity": "mid-8",
    "layout": "2x4",
    "executionMode": "hybrid",
    "toolCount": 8,
    "panelCount": 8,
    "maxNestedUiDepth": 1,
    "tags": [
      "catering",
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
            "toolId": "product-listing-keyword-density-checker",
            "role": "extract keyword usage from project text",
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
            "toolId": "sitemap-page-utm-link-builder",
            "role": "create trackable campaign URLs",
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
            "toolId": "python-string-url-encoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
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
            "toolId": "file-name-blank-line-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "cookie-value-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "instagram-reel-meta-length-checker",
            "role": "check title and description length for web publishing",
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
            "toolId": "homepage-keyword-density-checker",
            "role": "extract keyword usage from project text",
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
            "toolId": "local-service-page-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-catering-social-audit-034",
    "title": "Catering social media audit workflow",
    "field": "Catering",
    "businessFunction": "social media",
    "groupId": "group-social-audit",
    "outcome": "Use compatible social media tools to audit the current state and create a prioritized fix list for Catering.",
    "prompt": "Build a micro workflow for Catering: audit the current state and create a prioritized fix list using social media tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Catering notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible social media chain.",
    "complexity": "micro-2-4",
    "layout": "2x1",
    "executionMode": "compact-waterfall",
    "toolCount": 4,
    "panelCount": 2,
    "maxNestedUiDepth": 2,
    "tags": [
      "catering",
      "social",
      "audit",
      "micro-2-4"
    ],
    "compatibilitySummary": "4 tools arranged as 2 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Social media node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "youtube-description-keyword-density-checker",
            "role": "extract keyword usage from project text",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "blog-article-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "Social media node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 3,
            "toolId": "uuid-list-base64-decoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 1
          },
          {
            "order": 4,
            "toolId": "recipe-notes-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 2
          }
        ]
      }
    ]
  },
  {
    "id": "project-catering-email-audit-035",
    "title": "Catering email audit workflow",
    "field": "Catering",
    "businessFunction": "email",
    "groupId": "group-email-audit",
    "outcome": "Use compatible email tools to audit the current state and create a prioritized fix list for Catering.",
    "prompt": "Build a 64-tool nested waterfall for Catering: audit the current state and create a prioritized fix list using email tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Catering notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible email chain.",
    "complexity": "nested-64",
    "layout": "4x4",
    "executionMode": "nested-waterfall",
    "toolCount": 64,
    "panelCount": 16,
    "maxNestedUiDepth": 4,
    "tags": [
      "catering",
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
            "toolId": "category-page-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "commit-message-base64-decoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 2
          },
          {
            "order": 3,
            "toolId": "email-body-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 4,
            "toolId": "product-sku-trim-whitespace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
            "uiDepth": 1
          },
          {
            "order": 6,
            "toolId": "contact-page-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 2
          },
          {
            "order": 7,
            "toolId": "tiktok-caption-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 3
          },
          {
            "order": 8,
            "toolId": "tool-url-base64-decoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
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
            "toolId": "plant-care-notes-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 10,
            "toolId": "ebook-chapter-extra-space-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 11,
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
            "uiDepth": 3
          },
          {
            "order": 12,
            "toolId": "policy-page-meta-length-checker",
            "role": "check title and description length for web publishing",
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
            "toolId": "newsletter-campaign-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 1
          },
          {
            "order": 14,
            "toolId": "query-string-base64-decoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 2
          },
          {
            "order": 15,
            "toolId": "webhook-body-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 16,
            "toolId": "product-sku-lowercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
            "uiDepth": 1
          },
          {
            "order": 18,
            "toolId": "developer-tool-page-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 2
          },
          {
            "order": 19,
            "toolId": "faq-page-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 3
          },
          {
            "order": 20,
            "toolId": "header-value-base64-decoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
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
            "toolId": "garden-journal-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 22,
            "toolId": "donation-page-text-reverser",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 23,
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
            "uiDepth": 3
          },
          {
            "order": 24,
            "toolId": "product-page-meta-length-checker",
            "role": "check title and description length for web publishing",
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
            "toolId": "blog-article-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 1
          },
          {
            "order": 26,
            "toolId": "canonical-url-base64-decoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 2
          },
          {
            "order": 27,
            "toolId": "recipe-notes-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 28,
            "toolId": "product-listing-trim-whitespace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
            "uiDepth": 1
          },
          {
            "order": 30,
            "toolId": "facebook-bio-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 2
          },
          {
            "order": 31,
            "toolId": "raffle-campaign-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 3
          },
          {
            "order": 32,
            "toolId": "svg-snippet-base64-decoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
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
            "toolId": "base-url-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 34,
            "toolId": "donation-page-blank-line-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 35,
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
            "uiDepth": 3
          },
          {
            "order": 36,
            "toolId": "review-page-meta-length-checker",
            "role": "check title and description length for web publishing",
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
            "toolId": "instagram-reel-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 1
          },
          {
            "order": 38,
            "toolId": "prompt-text-base64-decoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 2
          },
          {
            "order": 39,
            "toolId": "invoice-memo-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 40,
            "toolId": "product-listing-lowercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
            "uiDepth": 1
          },
          {
            "order": 42,
            "toolId": "faq-page-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 2
          },
          {
            "order": 43,
            "toolId": "developer-tool-page-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 3
          },
          {
            "order": 44,
            "toolId": "form-payload-base64-decoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
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
            "toolId": "search-query-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 46,
            "toolId": "domain-list-slug-generator",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 47,
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
            "uiDepth": 3
          },
          {
            "order": 48,
            "toolId": "tiktok-caption-meta-length-checker",
            "role": "check title and description length for web publishing",
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
            "toolId": "youtube-video-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 1
          },
          {
            "order": 50,
            "toolId": "base-url-base64-decoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 2
          },
          {
            "order": 51,
            "toolId": "cookie-value-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 52,
            "toolId": "press-release-trim-whitespace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
            "uiDepth": 1
          },
          {
            "order": 54,
            "toolId": "garden-guide-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 2
          },
          {
            "order": 55,
            "toolId": "policy-page-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 3
          },
          {
            "order": 56,
            "toolId": "sql-snippet-base64-decoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
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
            "toolId": "log-line-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 58,
            "toolId": "domain-list-blank-line-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 59,
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
            "uiDepth": 3
          },
          {
            "order": 60,
            "toolId": "youtube-description-meta-length-checker",
            "role": "check title and description length for web publishing",
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
            "toolId": "google-result-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 1
          },
          {
            "order": 62,
            "toolId": "oauth-state-base64-decoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 2
          },
          {
            "order": 63,
            "toolId": "svg-snippet-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 64,
            "toolId": "press-release-lowercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 4
          }
        ]
      }
    ]
  },
  {
    "id": "project-catering-data-audit-036",
    "title": "Catering data cleanup audit workflow",
    "field": "Catering",
    "businessFunction": "data cleanup",
    "groupId": "group-data-audit",
    "outcome": "Use compatible data cleanup tools to audit the current state and create a prioritized fix list for Catering.",
    "prompt": "Build a micro workflow for Catering: audit the current state and create a prioritized fix list using data cleanup tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Catering notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible data cleanup chain.",
    "complexity": "micro-2-4",
    "layout": "1x1",
    "executionMode": "compact-waterfall",
    "toolCount": 3,
    "panelCount": 1,
    "maxNestedUiDepth": 3,
    "tags": [
      "catering",
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
            "toolId": "git-branch-base64-decoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "newsletter-uuid-generator",
            "role": "create unique IDs for assets, records, or tasks",
            "uiDepth": 2
          },
          {
            "order": 3,
            "toolId": "sitemap-url-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 3
          }
        ]
      }
    ]
  },
  {
    "id": "project-catering-reporting-audit-037",
    "title": "Catering reporting audit workflow",
    "field": "Catering",
    "businessFunction": "reporting",
    "groupId": "group-reporting-audit",
    "outcome": "Use compatible reporting tools to audit the current state and create a prioritized fix list for Catering.",
    "prompt": "Build a 8-panel workflow for Catering: audit the current state and create a prioritized fix list using reporting tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Catering notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible reporting chain.",
    "complexity": "mid-8",
    "layout": "2x4",
    "executionMode": "hybrid",
    "toolCount": 8,
    "panelCount": 8,
    "maxNestedUiDepth": 1,
    "tags": [
      "catering",
      "reporting",
      "audit",
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
            "toolId": "folder-name-add-weeks-date-calculator",
            "role": "project deadlines and future dates",
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
            "toolId": "xml-node-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
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
            "toolId": "javascript-string-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "video-script-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
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
            "toolId": "brand-name-percent-change-calculator",
            "role": "compare before/after values",
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
            "toolId": "garden-journal-extra-space-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "facebook-bio-add-weeks-date-calculator",
            "role": "project deadlines and future dates",
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
            "toolId": "prompt-text-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-catering-compliance-audit-038",
    "title": "Catering compliance audit workflow",
    "field": "Catering",
    "businessFunction": "compliance",
    "groupId": "group-compliance-audit",
    "outcome": "Use compatible compliance tools to audit the current state and create a prioritized fix list for Catering.",
    "prompt": "Build a 16-panel workflow for Catering: audit the current state and create a prioritized fix list using compliance tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Catering notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible compliance chain.",
    "complexity": "standard-16",
    "layout": "4x4",
    "executionMode": "waterfall",
    "toolCount": 16,
    "panelCount": 16,
    "maxNestedUiDepth": 1,
    "tags": [
      "catering",
      "compliance",
      "audit",
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
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
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
            "toolId": "ebook-chapter-find-and-replace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "json-snippet-days-between-dates-calculator",
            "role": "measure durations between dates",
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
            "toolId": "ad-copy-add-days-date-calculator",
            "role": "project deadlines and future dates",
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
            "toolId": "query-string-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "javascript-string-json-minifier",
            "role": "format, validate, or extract useful keys from JSON",
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
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
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
            "toolId": "product-sku-sentence-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "domain-list-days-between-dates-calculator",
            "role": "measure durations between dates",
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
            "toolId": "url-slug-add-days-date-calculator",
            "role": "project deadlines and future dates",
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
            "toolId": "api-token-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "sitemap-url-json-formatter",
            "role": "format, validate, or extract useful keys from JSON",
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
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
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
            "toolId": "donation-page-title-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "recipe-notes-days-between-dates-calculator",
            "role": "measure durations between dates",
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
            "toolId": "recipe-notes-add-days-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-catering-scheduling-audit-039",
    "title": "Catering scheduling audit workflow",
    "field": "Catering",
    "businessFunction": "scheduling",
    "groupId": "group-scheduling-audit",
    "outcome": "Use compatible scheduling tools to audit the current state and create a prioritized fix list for Catering.",
    "prompt": "Build a 8-panel workflow for Catering: audit the current state and create a prioritized fix list using scheduling tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Catering notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible scheduling chain.",
    "complexity": "mid-8",
    "layout": "4x2",
    "executionMode": "hybrid",
    "toolCount": 8,
    "panelCount": 8,
    "maxNestedUiDepth": 1,
    "tags": [
      "catering",
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
            "toolId": "meta-description-add-weeks-date-calculator",
            "role": "project deadlines and future dates",
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
            "toolId": "hashtag-set-date-to-unix-timestamp",
            "role": "convert or stamp time values",
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
            "toolId": "python-string-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "order-note-slug-generator",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "recipe-notes-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
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
            "toolId": "plant-care-notes-days-between-dates-calculator",
            "role": "measure durations between dates",
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
            "toolId": "landing-page-add-weeks-date-calculator",
            "role": "project deadlines and future dates",
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
            "toolId": "garden-journal-date-to-unix-timestamp",
            "role": "convert or stamp time values",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-catering-product-audit-040",
    "title": "Catering product audit workflow",
    "field": "Catering",
    "businessFunction": "product",
    "groupId": "group-product-audit",
    "outcome": "Use compatible product tools to audit the current state and create a prioritized fix list for Catering.",
    "prompt": "Build a 32-tool nested workbench for Catering: audit the current state and create a prioritized fix list using product tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Catering notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible product chain.",
    "complexity": "advanced-32",
    "layout": "4x4",
    "executionMode": "hybrid-waterfall",
    "toolCount": 32,
    "panelCount": 16,
    "maxNestedUiDepth": 2,
    "tags": [
      "catering",
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
            "toolId": "prompt-text-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "folder-name-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
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
            "toolId": "instagram-caption-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 1
          },
          {
            "order": 4,
            "toolId": "schema-markup-json-key-extractor",
            "role": "format, validate, or extract useful keys from JSON",
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
            "toolId": "url-slug-extra-space-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 6,
            "toolId": "invoice-memo-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
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
            "toolId": "yaml-value-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 8,
            "toolId": "brand-name-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
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
            "toolId": "domain-list-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 1
          },
          {
            "order": 10,
            "toolId": "environment-value-json-formatter",
            "role": "format, validate, or extract useful keys from JSON",
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
            "toolId": "instagram-caption-sentence-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 12,
            "toolId": "blog-post-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
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
            "toolId": "html-snippet-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 14,
            "toolId": "product-listing-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
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
            "toolId": "url-slug-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 1
          },
          {
            "order": 16,
            "toolId": "query-string-json-key-extractor",
            "role": "format, validate, or extract useful keys from JSON",
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
            "toolId": "support-ticket-text-reverser",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 18,
            "toolId": "regex-pattern-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
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
            "toolId": "response-text-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 20,
            "toolId": "json-snippet-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
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
            "toolId": "meta-description-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 1
          },
          {
            "order": 22,
            "toolId": "callback-url-json-minifier",
            "role": "format, validate, or extract useful keys from JSON",
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
            "toolId": "html-block-uppercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 24,
            "toolId": "image-alt-text-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
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
            "toolId": "canonical-url-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 26,
            "toolId": "email-subject-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
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
            "toolId": "garden-journal-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 1
          },
          {
            "order": 28,
            "toolId": "oauth-state-json-key-extractor",
            "role": "format, validate, or extract useful keys from JSON",
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
            "toolId": "support-ticket-extra-space-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 30,
            "toolId": "api-token-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
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
            "toolId": "json-config-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 32,
            "toolId": "youtube-description-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 2
          }
        ]
      }
    ]
  },
  {
    "id": "project-catering-ux-audit-041",
    "title": "Catering UX/UI audit workflow",
    "field": "Catering",
    "businessFunction": "UX/UI",
    "groupId": "group-ux-audit",
    "outcome": "Use compatible UX/UI tools to audit the current state and create a prioritized fix list for Catering.",
    "prompt": "Build a 16-panel workflow for Catering: audit the current state and create a prioritized fix list using UX/UI tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Catering notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible UX/UI chain.",
    "complexity": "standard-16",
    "layout": "4x4",
    "executionMode": "waterfall",
    "toolCount": 16,
    "panelCount": 16,
    "maxNestedUiDepth": 1,
    "tags": [
      "catering",
      "ux",
      "audit",
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
            "toolId": "robots-rule-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "product-page-meta-length-checker",
            "role": "check title and description length for web publishing",
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
            "toolId": "plant-profile-keyword-density-checker",
            "role": "extract keyword usage from project text",
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
            "toolId": "sitemap-entry-hex-to-rgb-converter",
            "role": "convert brand colors and palette values",
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
            "toolId": "youtube-description-color-contrast-checker",
            "role": "check readability and accessibility contrast",
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
            "toolId": "donation-page-trim-whitespace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "cloudflare-rule-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "facebook-bio-meta-length-checker",
            "role": "check title and description length for web publishing",
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
            "toolId": "garden-guide-keyword-density-checker",
            "role": "extract keyword usage from project text",
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
            "toolId": "meeting-notes-hex-to-rgb-converter",
            "role": "convert brand colors and palette values",
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
            "toolId": "instagram-caption-color-contrast-checker",
            "role": "check readability and accessibility contrast",
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
            "toolId": "product-sku-blank-line-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "jwt-payload-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "review-page-meta-length-checker",
            "role": "check title and description length for web publishing",
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
            "toolId": "calculator-page-keyword-density-checker",
            "role": "extract keyword usage from project text",
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
            "toolId": "domain-list-hex-to-rgb-converter",
            "role": "convert brand colors and palette values",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-catering-web-launch-audit-042",
    "title": "Catering web launch audit workflow",
    "field": "Catering",
    "businessFunction": "web launch",
    "groupId": "group-web-launch-audit",
    "outcome": "Use compatible web launch tools to audit the current state and create a prioritized fix list for Catering.",
    "prompt": "Build a micro workflow for Catering: audit the current state and create a prioritized fix list using web launch tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Catering notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible web launch chain.",
    "complexity": "micro-2-4",
    "layout": "2x1",
    "executionMode": "compact-waterfall",
    "toolCount": 4,
    "panelCount": 2,
    "maxNestedUiDepth": 2,
    "tags": [
      "catering",
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
            "toolId": "pinterest-pin-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "csv-cell-json-formatter",
            "role": "format, validate, or extract useful keys from JSON",
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
            "toolId": "garden-journal-hex-to-rgb-converter",
            "role": "convert brand colors and palette values",
            "uiDepth": 1
          },
          {
            "order": 4,
            "toolId": "instagram-caption-color-contrast-checker",
            "role": "check readability and accessibility contrast",
            "uiDepth": 2
          }
        ]
      }
    ]
  },
  {
    "id": "project-catering-developer-audit-043",
    "title": "Catering developer audit workflow",
    "field": "Catering",
    "businessFunction": "developer",
    "groupId": "group-developer-audit",
    "outcome": "Use compatible developer tools to audit the current state and create a prioritized fix list for Catering.",
    "prompt": "Build a 8-panel workflow for Catering: audit the current state and create a prioritized fix list using developer tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Catering notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible developer chain.",
    "complexity": "mid-8",
    "layout": "4x2",
    "executionMode": "hybrid",
    "toolCount": 8,
    "panelCount": 8,
    "maxNestedUiDepth": 1,
    "tags": [
      "catering",
      "developer",
      "audit",
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
            "toolId": "webhook-body-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "css-class-json-formatter",
            "role": "format, validate, or extract useful keys from JSON",
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
            "toolId": "svg-snippet-html-unescaper",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
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
            "toolId": "plant-care-notes-uuid-generator",
            "role": "create unique IDs for assets, records, or tasks",
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
            "toolId": "hashtag-set-password-generator",
            "role": "create secure passwords for the project",
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
            "toolId": "response-text-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
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
            "toolId": "garden-journal-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "oauth-state-json-minifier",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-catering-security-audit-044",
    "title": "Catering security audit workflow",
    "field": "Catering",
    "businessFunction": "security",
    "groupId": "group-security-audit",
    "outcome": "Use compatible security tools to audit the current state and create a prioritized fix list for Catering.",
    "prompt": "Build a 16-panel workflow for Catering: audit the current state and create a prioritized fix list using security tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Catering notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible security chain.",
    "complexity": "standard-16",
    "layout": "4x4",
    "executionMode": "waterfall",
    "toolCount": 16,
    "panelCount": 16,
    "maxNestedUiDepth": 1,
    "tags": [
      "catering",
      "security",
      "audit",
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
            "toolId": "garden-journal-password-generator",
            "role": "create secure passwords for the project",
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
            "toolId": "code-comment-uuid-generator",
            "role": "create unique IDs for assets, records, or tasks",
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
            "toolId": "cookie-value-url-decoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
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
            "toolId": "oauth-state-json-key-extractor",
            "role": "format, validate, or extract useful keys from JSON",
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
            "toolId": "resume-bullet-trim-whitespace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "svg-snippet-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "recipe-notes-password-generator",
            "role": "create secure passwords for the project",
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
            "toolId": "meeting-notes-uuid-generator",
            "role": "create unique IDs for assets, records, or tasks",
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
            "toolId": "tracking-link-url-decoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
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
            "toolId": "webhook-body-json-minifier",
            "role": "format, validate, or extract useful keys from JSON",
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
            "toolId": "file-name-extra-space-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "email-body-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "donation-page-password-generator",
            "role": "create secure passwords for the project",
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
            "toolId": "url-slug-uuid-generator",
            "role": "create unique IDs for assets, records, or tasks",
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
            "toolId": "redirect-url-url-decoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
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
            "toolId": "json-config-json-key-extractor",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-catering-training-audit-045",
    "title": "Catering training audit workflow",
    "field": "Catering",
    "businessFunction": "training",
    "groupId": "group-training-audit",
    "outcome": "Use compatible training tools to audit the current state and create a prioritized fix list for Catering.",
    "prompt": "Build a 64-tool nested waterfall for Catering: audit the current state and create a prioritized fix list using training tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Catering notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible training chain.",
    "complexity": "nested-64",
    "layout": "4x4",
    "executionMode": "nested-waterfall",
    "toolCount": 64,
    "panelCount": 16,
    "maxNestedUiDepth": 4,
    "tags": [
      "catering",
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
            "toolId": "csv-cell-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "blog-post-add-months-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 2
          },
          {
            "order": 3,
            "toolId": "domain-list-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 3
          },
          {
            "order": 4,
            "toolId": "blog-post-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
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
            "toolId": "press-release-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 6,
            "toolId": "coupon-text-sentence-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 7,
            "toolId": "meta-description-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 8,
            "toolId": "youtube-description-add-months-date-calculator",
            "role": "project deadlines and future dates",
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
            "toolId": "recipe-notes-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          },
          {
            "order": 10,
            "toolId": "regex-pattern-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 2
          },
          {
            "order": 11,
            "toolId": "invoice-memo-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 12,
            "toolId": "newsletter-title-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "tool-url-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 14,
            "toolId": "seo-title-add-months-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 2
          },
          {
            "order": 15,
            "toolId": "invoice-memo-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 3
          },
          {
            "order": 16,
            "toolId": "image-alt-text-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
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
            "toolId": "ebook-chapter-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 18,
            "toolId": "community-rule-uppercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 19,
            "toolId": "environment-value-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 20,
            "toolId": "product-listing-add-months-date-calculator",
            "role": "project deadlines and future dates",
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
            "toolId": "customer-reply-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          },
          {
            "order": 22,
            "toolId": "api-token-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 2
          },
          {
            "order": 23,
            "toolId": "video-script-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 24,
            "toolId": "newsletter-find-and-replace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "product-listing-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 26,
            "toolId": "plant-care-notes-add-months-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 2
          },
          {
            "order": 27,
            "toolId": "product-listing-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 3
          },
          {
            "order": 28,
            "toolId": "recipe-notes-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
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
            "toolId": "newsletter-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 30,
            "toolId": "community-rule-sentence-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 31,
            "toolId": "xml-node-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 32,
            "toolId": "meta-description-add-months-date-calculator",
            "role": "project deadlines and future dates",
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
            "toolId": "instagram-caption-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          },
          {
            "order": 34,
            "toolId": "header-value-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 2
          },
          {
            "order": 35,
            "toolId": "hashtag-set-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 36,
            "toolId": "meta-description-title-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "header-value-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 38,
            "toolId": "landing-page-add-months-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 2
          },
          {
            "order": 39,
            "toolId": "csv-export-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 3
          },
          {
            "order": 40,
            "toolId": "yaml-value-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
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
            "toolId": "csv-export-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 42,
            "toolId": "code-comment-uppercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 43,
            "toolId": "regex-pattern-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 44,
            "toolId": "json-snippet-add-months-date-calculator",
            "role": "project deadlines and future dates",
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
            "toolId": "press-release-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          },
          {
            "order": 46,
            "toolId": "python-string-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 2
          },
          {
            "order": 47,
            "toolId": "resume-bullet-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 48,
            "toolId": "meta-description-find-and-replace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "callback-url-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 50,
            "toolId": "instagram-caption-add-months-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 2
          },
          {
            "order": 51,
            "toolId": "html-block-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 3
          },
          {
            "order": 52,
            "toolId": "garden-journal-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
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
            "toolId": "landing-page-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 54,
            "toolId": "code-comment-sentence-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 55,
            "toolId": "javascript-string-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 56,
            "toolId": "hashtag-set-add-months-date-calculator",
            "role": "project deadlines and future dates",
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
            "toolId": "code-comment-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          },
          {
            "order": 58,
            "toolId": "worker-route-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 2
          },
          {
            "order": 59,
            "toolId": "file-name-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 60,
            "toolId": "meeting-notes-title-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "seo-title-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 62,
            "toolId": "folder-name-add-days-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 2
          },
          {
            "order": 63,
            "toolId": "plant-care-notes-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 3
          },
          {
            "order": 64,
            "toolId": "product-listing-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 4
          }
        ]
      }
    ]
  },
  {
    "id": "project-catering-inventory-audit-046",
    "title": "Catering inventory audit workflow",
    "field": "Catering",
    "businessFunction": "inventory",
    "groupId": "group-inventory-audit",
    "outcome": "Use compatible inventory tools to audit the current state and create a prioritized fix list for Catering.",
    "prompt": "Build a micro workflow for Catering: audit the current state and create a prioritized fix list using inventory tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Catering notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible inventory chain.",
    "complexity": "micro-2-4",
    "layout": "2x1",
    "executionMode": "compact-waterfall",
    "toolCount": 4,
    "panelCount": 2,
    "maxNestedUiDepth": 2,
    "tags": [
      "catering",
      "inventory",
      "audit",
      "micro-2-4"
    ],
    "compatibilitySummary": "4 tools arranged as 2 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Inventory node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "kilopascal-to-pascal-converter",
            "role": "convert operational measurements",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "sql-snippet-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "Inventory node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 3,
            "toolId": "community-rule-find-and-replace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 4,
            "toolId": "folder-name-add-months-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 2
          }
        ]
      }
    ]
  },
  {
    "id": "project-catering-pricing-audit-047",
    "title": "Catering pricing audit workflow",
    "field": "Catering",
    "businessFunction": "pricing",
    "groupId": "group-pricing-audit",
    "outcome": "Use compatible pricing tools to audit the current state and create a prioritized fix list for Catering.",
    "prompt": "Build a 16-panel workflow for Catering: audit the current state and create a prioritized fix list using pricing tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Catering notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible pricing chain.",
    "complexity": "standard-16",
    "layout": "4x4",
    "executionMode": "waterfall",
    "toolCount": 16,
    "panelCount": 16,
    "maxNestedUiDepth": 1,
    "tags": [
      "catering",
      "pricing",
      "audit",
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
            "toolId": "code-comment-box-volume-calculator",
            "role": "run a lightweight business formula",
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
            "toolId": "compound-interest-calculator",
            "role": "model long-term growth or recurring gains",
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
            "toolId": "log-line-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "brand-name-percent-change-calculator",
            "role": "compare before/after values",
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
            "toolId": "domain-list-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
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
            "toolId": "consulting-invoice-total-calculator",
            "role": "calculate invoice totals from line-item assumptions",
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
            "toolId": "brand-name-addition-calculator",
            "role": "run a lightweight business formula",
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
            "toolId": "compound-interest-calculator",
            "role": "model long-term growth or recurring gains",
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
            "toolId": "svg-snippet-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "product-listing-percent-change-calculator",
            "role": "compare before/after values",
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
            "toolId": "url-slug-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
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
            "toolId": "digital-product-order-total-calculator",
            "role": "calculate invoice totals from line-item assumptions",
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
            "toolId": "ad-copy-rectangle-area-calculator",
            "role": "run a lightweight business formula",
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
            "toolId": "compound-interest-calculator",
            "role": "model long-term growth or recurring gains",
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
            "toolId": "email-body-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "json-snippet-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-catering-outreach-audit-048",
    "title": "Catering outreach audit workflow",
    "field": "Catering",
    "businessFunction": "outreach",
    "groupId": "group-outreach-audit",
    "outcome": "Use compatible outreach tools to audit the current state and create a prioritized fix list for Catering.",
    "prompt": "Build a micro workflow for Catering: audit the current state and create a prioritized fix list using outreach tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Catering notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible outreach chain.",
    "complexity": "micro-2-4",
    "layout": "1x1",
    "executionMode": "compact-waterfall",
    "toolCount": 3,
    "panelCount": 1,
    "maxNestedUiDepth": 3,
    "tags": [
      "catering",
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
            "toolId": "tool-page-keyword-density-checker",
            "role": "extract keyword usage from project text",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "base-url-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 2
          },
          {
            "order": 3,
            "toolId": "markdown-doc-extra-space-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 3
          }
        ]
      }
    ]
  },
  {
    "id": "project-catering-research-audit-049",
    "title": "Catering research audit workflow",
    "field": "Catering",
    "businessFunction": "research",
    "groupId": "group-research-audit",
    "outcome": "Use compatible research tools to audit the current state and create a prioritized fix list for Catering.",
    "prompt": "Build a 8-panel workflow for Catering: audit the current state and create a prioritized fix list using research tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Catering notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible research chain.",
    "complexity": "mid-8",
    "layout": "2x4",
    "executionMode": "hybrid",
    "toolCount": 8,
    "panelCount": 8,
    "maxNestedUiDepth": 1,
    "tags": [
      "catering",
      "research",
      "audit",
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
            "toolId": "meta-description-text-reverser",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
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
            "toolId": "free-pdf-page-keyword-density-checker",
            "role": "extract keyword usage from project text",
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
            "toolId": "error-message-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "canonical-url-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
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
            "toolId": "robots-rule-json-key-extractor",
            "role": "format, validate, or extract useful keys from JSON",
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
            "toolId": "code-comment-trim-whitespace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-catering-project-management-audit-050",
    "title": "Catering project management audit workflow",
    "field": "Catering",
    "businessFunction": "project management",
    "groupId": "group-project-management-audit",
    "outcome": "Use compatible project management tools to audit the current state and create a prioritized fix list for Catering.",
    "prompt": "Build a 32-tool nested workbench for Catering: audit the current state and create a prioritized fix list using project management tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Catering notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible project management chain.",
    "complexity": "advanced-32",
    "layout": "4x4",
    "executionMode": "hybrid-waterfall",
    "toolCount": 32,
    "panelCount": 16,
    "maxNestedUiDepth": 2,
    "tags": [
      "catering",
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
            "toolId": "brand-name-add-days-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "product-listing-days-between-dates-calculator",
            "role": "measure durations between dates",
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
            "toolId": "video-script-uppercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 4,
            "toolId": "image-alt-text-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "meta-description-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 6,
            "toolId": "video-script-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
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
            "toolId": "ad-copy-add-days-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          },
          {
            "order": 8,
            "toolId": "instagram-caption-days-between-dates-calculator",
            "role": "measure durations between dates",
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
            "toolId": "json-snippet-find-and-replace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 10,
            "toolId": "robots-rule-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "dns-record-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 12,
            "toolId": "newsletter-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
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
            "toolId": "url-slug-add-days-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          },
          {
            "order": 14,
            "toolId": "csv-export-days-between-dates-calculator",
            "role": "measure durations between dates",
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
            "toolId": "video-script-sentence-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 16,
            "toolId": "cloudflare-rule-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "store-url-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 18,
            "toolId": "hashtag-set-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
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
            "toolId": "recipe-notes-add-days-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          },
          {
            "order": 20,
            "toolId": "press-release-days-between-dates-calculator",
            "role": "measure durations between dates",
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
            "toolId": "invoice-memo-title-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 22,
            "toolId": "jwt-payload-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "markdown-doc-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 24,
            "toolId": "csv-export-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
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
            "toolId": "press-release-add-days-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          },
          {
            "order": 26,
            "toolId": "html-block-days-between-dates-calculator",
            "role": "measure durations between dates",
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
            "toolId": "url-slug-uppercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 28,
            "toolId": "sql-snippet-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "csv-cell-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 30,
            "toolId": "resume-bullet-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
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
            "toolId": "newsletter-add-days-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          },
          {
            "order": 32,
            "toolId": "code-comment-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 2
          }
        ]
      }
    ]
  },
  {
    "id": "project-catering-marketing-campaign-051",
    "title": "Catering marketing campaign workflow",
    "field": "Catering",
    "businessFunction": "marketing",
    "groupId": "group-marketing-campaign",
    "outcome": "Use compatible marketing tools to prepare a launch campaign with trackable outputs for Catering.",
    "prompt": "Build a 8-panel workflow for Catering: prepare a launch campaign with trackable outputs using marketing tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Catering notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible marketing chain.",
    "complexity": "mid-8",
    "layout": "4x2",
    "executionMode": "hybrid",
    "toolCount": 8,
    "panelCount": 8,
    "maxNestedUiDepth": 1,
    "tags": [
      "catering",
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
            "toolId": "tool-page-meta-length-checker",
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
            "toolId": "plant-profile-keyword-density-checker",
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
            "toolId": "raffle-campaign-utm-link-builder",
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
            "toolId": "landing-page-markdown-table-generator",
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
            "toolId": "response-text-base64-encoder",
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
            "toolId": "invoice-memo-blank-line-remover",
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
            "toolId": "google-result-meta-length-checker",
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
            "toolId": "garden-guide-keyword-density-checker",
            "role": "extract keyword usage from project text",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-catering-sales-campaign-052",
    "title": "Catering sales campaign workflow",
    "field": "Catering",
    "businessFunction": "sales",
    "groupId": "group-sales-campaign",
    "outcome": "Use compatible sales tools to prepare a launch campaign with trackable outputs for Catering.",
    "prompt": "Build a micro workflow for Catering: prepare a launch campaign with trackable outputs using sales tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Catering notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible sales chain.",
    "complexity": "micro-2-4",
    "layout": "1x1",
    "executionMode": "compact-waterfall",
    "toolCount": 3,
    "panelCount": 1,
    "maxNestedUiDepth": 3,
    "tags": [
      "catering",
      "sales",
      "campaign",
      "micro-2-4"
    ],
    "compatibilitySummary": "3 tools arranged as 1 panel UI; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Sales node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "product-page-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "seo-title-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 2
          },
          {
            "order": 3,
            "toolId": "api-token-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          }
        ]
      }
    ]
  },
  {
    "id": "project-catering-support-campaign-053",
    "title": "Catering customer support campaign workflow",
    "field": "Catering",
    "businessFunction": "customer support",
    "groupId": "group-support-campaign",
    "outcome": "Use compatible customer support tools to prepare a launch campaign with trackable outputs for Catering.",
    "prompt": "Build a 16-panel workflow for Catering: prepare a launch campaign with trackable outputs using customer support tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Catering notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible customer support chain.",
    "complexity": "standard-16",
    "layout": "4x4",
    "executionMode": "waterfall",
    "toolCount": 16,
    "panelCount": 16,
    "maxNestedUiDepth": 1,
    "tags": [
      "catering",
      "support",
      "campaign",
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
            "toolId": "brand-name-add-months-date-calculator",
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
            "toolId": "api-token-csv-to-json-converter",
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
            "toolId": "environment-value-json-minifier",
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
            "toolId": "resume-bullet-extra-space-remover",
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
            "toolId": "sitemap-url-markdown-table-generator",
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
            "toolId": "ad-copy-add-months-date-calculator",
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
            "toolId": "recipe-notes-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
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
            "toolId": "robots-rule-json-formatter",
            "role": "format, validate, or extract useful keys from JSON",
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
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
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
            "toolId": "facebook-bio-sentence-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "customer-reply-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "url-slug-add-months-date-calculator",
            "role": "project deadlines and future dates",
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
            "toolId": "header-value-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
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
            "toolId": "css-class-json-key-extractor",
            "role": "format, validate, or extract useful keys from JSON",
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
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-catering-operations-campaign-054",
    "title": "Catering operations campaign workflow",
    "field": "Catering",
    "businessFunction": "operations",
    "groupId": "group-operations-campaign",
    "outcome": "Use compatible operations tools to prepare a launch campaign with trackable outputs for Catering.",
    "prompt": "Build a micro workflow for Catering: prepare a launch campaign with trackable outputs using operations tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Catering notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible operations chain.",
    "complexity": "micro-2-4",
    "layout": "2x1",
    "executionMode": "compact-waterfall",
    "toolCount": 4,
    "panelCount": 2,
    "maxNestedUiDepth": 2,
    "tags": [
      "catering",
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
            "toolId": "commit-message-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "project-brief-uppercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "garden-journal-add-weeks-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          },
          {
            "order": 4,
            "toolId": "seo-title-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 2
          }
        ]
      }
    ]
  },
  {
    "id": "project-catering-finance-campaign-055",
    "title": "Catering finance campaign workflow",
    "field": "Catering",
    "businessFunction": "finance",
    "groupId": "group-finance-campaign",
    "outcome": "Use compatible finance tools to prepare a launch campaign with trackable outputs for Catering.",
    "prompt": "Build a 64-tool nested waterfall for Catering: prepare a launch campaign with trackable outputs using finance tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Catering notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible finance chain.",
    "complexity": "nested-64",
    "layout": "4x4",
    "executionMode": "nested-waterfall",
    "toolCount": 64,
    "panelCount": 16,
    "maxNestedUiDepth": 4,
    "tags": [
      "catering",
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
            "toolId": "markdown-doc-rectangle-area-calculator",
            "role": "run a lightweight business formula",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "shipping-invoice-total-calculator",
            "role": "calculate invoice totals from line-item assumptions",
            "uiDepth": 2
          },
          {
            "order": 3,
            "toolId": "meta-description-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 4,
            "toolId": "press-release-percent-change-calculator",
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
            "toolId": "landing-page-division-calculator",
            "role": "run a lightweight business formula",
            "uiDepth": 3
          },
          {
            "order": 8,
            "toolId": "sponsor-invoice-total-calculator",
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
            "toolId": "garden-journal-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 10,
            "toolId": "invoice-memo-percent-change-calculator",
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
            "toolId": "keyword-list-average-calculator",
            "role": "run a lightweight business formula",
            "uiDepth": 1
          },
          {
            "order": 14,
            "toolId": "store-order-total-calculator",
            "role": "calculate invoice totals from line-item assumptions",
            "uiDepth": 2
          },
          {
            "order": 15,
            "toolId": "code-comment-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 16,
            "toolId": "ebook-chapter-percent-change-calculator",
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
            "toolId": "invoice-memo-subtraction-calculator",
            "role": "run a lightweight business formula",
            "uiDepth": 3
          },
          {
            "order": 20,
            "toolId": "subscription-invoice-total-calculator",
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
            "toolId": "recipe-notes-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 22,
            "toolId": "video-script-percent-change-calculator",
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
            "toolId": "instagram-caption-multiplication-calculator",
            "role": "run a lightweight business formula",
            "uiDepth": 1
          },
          {
            "order": 26,
            "toolId": "tool-sale-order-total-calculator",
            "role": "calculate invoice totals from line-item assumptions",
            "uiDepth": 2
          },
          {
            "order": 27,
            "toolId": "keyword-list-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 28,
            "toolId": "newsletter-percent-change-calculator",
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
            "toolId": "html-block-box-volume-calculator",
            "role": "run a lightweight business formula",
            "uiDepth": 3
          },
          {
            "order": 32,
            "toolId": "wholesale-order-total-calculator",
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
            "toolId": "facebook-bio-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 34,
            "toolId": "hashtag-set-percent-change-calculator",
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
            "toolId": "hashtag-set-addition-calculator",
            "role": "run a lightweight business formula",
            "uiDepth": 1
          },
          {
            "order": 38,
            "toolId": "workshop-invoice-total-calculator",
            "role": "calculate invoice totals from line-item assumptions",
            "uiDepth": 2
          },
          {
            "order": 39,
            "toolId": "ad-copy-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 40,
            "toolId": "csv-export-percent-change-calculator",
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
            "toolId": "folder-name-rectangle-area-calculator",
            "role": "run a lightweight business formula",
            "uiDepth": 3
          },
          {
            "order": 44,
            "toolId": "client-invoice-total-calculator",
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
            "toolId": "podcast-notes-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 46,
            "toolId": "resume-bullet-percent-change-calculator",
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
            "toolId": "file-name-division-calculator",
            "role": "run a lightweight business formula",
            "uiDepth": 1
          },
          {
            "order": 50,
            "toolId": "community-order-total-calculator",
            "role": "calculate invoice totals from line-item assumptions",
            "uiDepth": 2
          },
          {
            "order": 51,
            "toolId": "instagram-caption-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 52,
            "toolId": "landing-page-percent-change-calculator",
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
            "toolId": "facebook-bio-average-calculator",
            "role": "run a lightweight business formula",
            "uiDepth": 3
          },
          {
            "order": 56,
            "toolId": "consulting-invoice-total-calculator",
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
            "toolId": "domain-list-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 58,
            "toolId": "file-name-percent-change-calculator",
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
            "toolId": "ebook-chapter-subtraction-calculator",
            "role": "run a lightweight business formula",
            "uiDepth": 1
          },
          {
            "order": 62,
            "toolId": "digital-product-order-total-calculator",
            "role": "calculate invoice totals from line-item assumptions",
            "uiDepth": 2
          },
          {
            "order": 63,
            "toolId": "url-slug-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 64,
            "toolId": "blog-post-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 4
          }
        ]
      }
    ]
  },
  {
    "id": "project-catering-hr-campaign-056",
    "title": "Catering HR campaign workflow",
    "field": "Catering",
    "businessFunction": "HR",
    "groupId": "group-hr-campaign",
    "outcome": "Use compatible HR tools to prepare a launch campaign with trackable outputs for Catering.",
    "prompt": "Build a 16-panel workflow for Catering: prepare a launch campaign with trackable outputs using HR tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Catering notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible HR chain.",
    "complexity": "standard-16",
    "layout": "4x4",
    "executionMode": "waterfall",
    "toolCount": 16,
    "panelCount": 16,
    "maxNestedUiDepth": 1,
    "tags": [
      "catering",
      "hr",
      "campaign",
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
            "toolId": "cover-letter-blank-line-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "hashtag-set-add-days-date-calculator",
            "role": "project deadlines and future dates",
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
            "toolId": "garden-journal-days-between-dates-calculator",
            "role": "measure durations between dates",
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
            "toolId": "tool-url-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
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
            "toolId": "order-note-password-generator",
            "role": "create secure passwords for the project",
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
            "toolId": "cookie-value-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "order-note-lowercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "file-name-add-years-date-calculator",
            "role": "project deadlines and future dates",
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
            "toolId": "blog-post-days-between-dates-calculator",
            "role": "measure durations between dates",
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
            "toolId": "newsletter-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
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
            "toolId": "ad-copy-password-generator",
            "role": "create secure passwords for the project",
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
            "toolId": "log-line-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "coupon-text-slug-generator",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "email-subject-add-years-date-calculator",
            "role": "project deadlines and future dates",
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
            "toolId": "meta-description-days-between-dates-calculator",
            "role": "measure durations between dates",
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
            "toolId": "docker-tag-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-catering-content-campaign-057",
    "title": "Catering content campaign workflow",
    "field": "Catering",
    "businessFunction": "content",
    "groupId": "group-content-campaign",
    "outcome": "Use compatible content tools to prepare a launch campaign with trackable outputs for Catering.",
    "prompt": "Build a 8-panel workflow for Catering: prepare a launch campaign with trackable outputs using content tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Catering notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible content chain.",
    "complexity": "mid-8",
    "layout": "2x4",
    "executionMode": "hybrid",
    "toolCount": 8,
    "panelCount": 8,
    "maxNestedUiDepth": 1,
    "tags": [
      "catering",
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
            "toolId": "youtube-description-meta-length-checker",
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
            "toolId": "blog-article-keyword-density-checker",
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
            "toolId": "commit-message-markdown-table-generator",
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
            "toolId": "facebook-post-utm-link-builder",
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
            "toolId": "project-brief-slug-generator",
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
            "toolId": "homepage-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-catering-seo-campaign-058",
    "title": "Catering SEO campaign workflow",
    "field": "Catering",
    "businessFunction": "SEO",
    "groupId": "group-seo-campaign",
    "outcome": "Use compatible SEO tools to prepare a launch campaign with trackable outputs for Catering.",
    "prompt": "Build a micro workflow for Catering: prepare a launch campaign with trackable outputs using SEO tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Catering notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible SEO chain.",
    "complexity": "micro-2-4",
    "layout": "2x1",
    "executionMode": "compact-waterfall",
    "toolCount": 4,
    "panelCount": 2,
    "maxNestedUiDepth": 2,
    "tags": [
      "catering",
      "seo",
      "campaign",
      "micro-2-4"
    ],
    "compatibilitySummary": "4 tools arranged as 2 panel UIs; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "SEO node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "affiliate-page-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "pages-url-url-encoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 2
          }
        ]
      },
      {
        "panelIndex": 1,
        "uiTitle": "SEO node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 3,
            "toolId": "product-sku-lowercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 4,
            "toolId": "email-body-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 2
          }
        ]
      }
    ]
  },
  {
    "id": "project-catering-social-campaign-059",
    "title": "Catering social media campaign workflow",
    "field": "Catering",
    "businessFunction": "social media",
    "groupId": "group-social-campaign",
    "outcome": "Use compatible social media tools to prepare a launch campaign with trackable outputs for Catering.",
    "prompt": "Build a 16-panel workflow for Catering: prepare a launch campaign with trackable outputs using social media tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Catering notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible social media chain.",
    "complexity": "standard-16",
    "layout": "4x4",
    "executionMode": "waterfall",
    "toolCount": 16,
    "panelCount": 16,
    "maxNestedUiDepth": 1,
    "tags": [
      "catering",
      "social",
      "campaign",
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
            "toolId": "developer-tool-page-utm-link-builder",
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
            "toolId": "tracking-link-base64-decoder",
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
            "toolId": "search-query-markdown-table-generator",
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
            "toolId": "blog-post-uppercase-converter",
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
            "toolId": "sitemap-page-meta-length-checker",
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
            "toolId": "sitemap-page-keyword-density-checker",
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
            "toolId": "youtube-video-utm-link-builder",
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
            "toolId": "redirect-url-base64-decoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
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
            "toolId": "cookie-value-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "markdown-doc-find-and-replace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "free-pdf-page-meta-length-checker",
            "role": "check title and description length for web publishing",
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
            "toolId": "local-service-page-keyword-density-checker",
            "role": "extract keyword usage from project text",
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
            "toolId": "policy-page-utm-link-builder",
            "role": "create trackable campaign URLs",
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
            "toolId": "html-snippet-base64-decoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
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
            "toolId": "log-line-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "blog-post-sentence-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-catering-email-campaign-060",
    "title": "Catering email campaign workflow",
    "field": "Catering",
    "businessFunction": "email",
    "groupId": "group-email-campaign",
    "outcome": "Use compatible email tools to prepare a launch campaign with trackable outputs for Catering.",
    "prompt": "Build a 32-tool nested workbench for Catering: prepare a launch campaign with trackable outputs using email tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Catering notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible email chain.",
    "complexity": "advanced-32",
    "layout": "4x4",
    "executionMode": "hybrid-waterfall",
    "toolCount": 32,
    "panelCount": 16,
    "maxNestedUiDepth": 2,
    "tags": [
      "catering",
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
            "toolId": "canonical-url-base64-decoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "garden-journal-markdown-table-generator",
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
            "toolId": "customer-reply-extra-space-remover",
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
            "toolId": "contact-page-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 1
          },
          {
            "order": 6,
            "toolId": "blog-article-utm-link-builder",
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
            "toolId": "svg-snippet-base64-decoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 1
          },
          {
            "order": 8,
            "toolId": "recipe-notes-markdown-table-generator",
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
            "toolId": "podcast-notes-sentence-case-converter",
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
            "toolId": "policy-page-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 1
          },
          {
            "order": 12,
            "toolId": "raffle-campaign-utm-link-builder",
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
            "toolId": "prompt-text-base64-decoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 1
          },
          {
            "order": 14,
            "toolId": "base-url-markdown-table-generator",
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
            "toolId": "csv-export-text-reverser",
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
            "toolId": "developer-tool-page-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 1
          },
          {
            "order": 18,
            "toolId": "instagram-reel-utm-link-builder",
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
            "toolId": "form-payload-base64-decoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 1
          },
          {
            "order": 20,
            "toolId": "invoice-memo-markdown-table-generator",
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
            "toolId": "plant-care-notes-uppercase-converter",
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
            "toolId": "product-page-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 1
          },
          {
            "order": 24,
            "toolId": "developer-tool-page-utm-link-builder",
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
            "toolId": "base-url-base64-decoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 1
          },
          {
            "order": 26,
            "toolId": "search-query-markdown-table-generator",
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
            "toolId": "csv-export-extra-space-remover",
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
            "toolId": "facebook-bio-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 1
          },
          {
            "order": 30,
            "toolId": "youtube-video-utm-link-builder",
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
            "toolId": "sql-snippet-base64-decoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 1
          },
          {
            "order": 32,
            "toolId": "cookie-value-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 2
          }
        ]
      }
    ]
  },
  {
    "id": "project-catering-data-campaign-061",
    "title": "Catering data cleanup campaign workflow",
    "field": "Catering",
    "businessFunction": "data cleanup",
    "groupId": "group-data-campaign",
    "outcome": "Use compatible data cleanup tools to prepare a launch campaign with trackable outputs for Catering.",
    "prompt": "Build a 8-panel workflow for Catering: prepare a launch campaign with trackable outputs using data cleanup tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Catering notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible data cleanup chain.",
    "complexity": "mid-8",
    "layout": "2x4",
    "executionMode": "hybrid",
    "toolCount": 8,
    "panelCount": 8,
    "maxNestedUiDepth": 1,
    "tags": [
      "catering",
      "data",
      "campaign",
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
            "toolId": "folder-name-uuid-generator",
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
            "toolId": "newsletter-csv-to-json-converter",
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
            "toolId": "schema-markup-json-key-extractor",
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
            "toolId": "newsletter-markdown-table-generator",
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
            "toolId": "meeting-notes-slug-generator",
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
            "toolId": "api-token-base64-decoder",
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
            "toolId": "raffle-page-uuid-generator",
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
            "toolId": "docker-tag-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-catering-reporting-campaign-062",
    "title": "Catering reporting campaign workflow",
    "field": "Catering",
    "businessFunction": "reporting",
    "groupId": "group-reporting-campaign",
    "outcome": "Use compatible reporting tools to prepare a launch campaign with trackable outputs for Catering.",
    "prompt": "Build a 16-panel workflow for Catering: prepare a launch campaign with trackable outputs using reporting tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Catering notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible reporting chain.",
    "complexity": "standard-16",
    "layout": "4x4",
    "executionMode": "waterfall",
    "toolCount": 16,
    "panelCount": 16,
    "maxNestedUiDepth": 1,
    "tags": [
      "catering",
      "reporting",
      "campaign",
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
            "toolId": "regex-pattern-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
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
            "toolId": "meta-description-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "csv-export-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
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
            "toolId": "email-subject-percent-change-calculator",
            "role": "compare before/after values",
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
            "toolId": "recipe-notes-sentence-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "meta-description-add-years-date-calculator",
            "role": "project deadlines and future dates",
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
            "toolId": "image-alt-text-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
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
            "toolId": "tool-url-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "resume-bullet-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
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
            "toolId": "youtube-description-percent-change-calculator",
            "role": "compare before/after values",
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
            "toolId": "email-subject-title-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "landing-page-add-years-date-calculator",
            "role": "project deadlines and future dates",
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
            "toolId": "api-token-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
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
            "toolId": "environment-value-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "landing-page-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
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
            "toolId": "plant-care-notes-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-catering-compliance-campaign-063",
    "title": "Catering compliance campaign workflow",
    "field": "Catering",
    "businessFunction": "compliance",
    "groupId": "group-compliance-campaign",
    "outcome": "Use compatible compliance tools to prepare a launch campaign with trackable outputs for Catering.",
    "prompt": "Build a 8-panel workflow for Catering: prepare a launch campaign with trackable outputs using compliance tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Catering notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible compliance chain.",
    "complexity": "mid-8",
    "layout": "4x2",
    "executionMode": "hybrid",
    "toolCount": 8,
    "panelCount": 8,
    "maxNestedUiDepth": 1,
    "tags": [
      "catering",
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
            "toolId": "podcast-notes-slug-generator",
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
            "toolId": "plant-care-notes-days-between-dates-calculator",
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
            "toolId": "hashtag-set-add-months-date-calculator",
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
            "toolId": "schema-markup-markdown-table-generator",
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
            "toolId": "css-class-json-key-extractor",
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
            "toolId": "csv-export-title-case-converter",
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
            "toolId": "hashtag-set-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-catering-scheduling-campaign-064",
    "title": "Catering scheduling campaign workflow",
    "field": "Catering",
    "businessFunction": "scheduling",
    "groupId": "group-scheduling-campaign",
    "outcome": "Use compatible scheduling tools to prepare a launch campaign with trackable outputs for Catering.",
    "prompt": "Build a micro workflow for Catering: prepare a launch campaign with trackable outputs using scheduling tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Catering notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible scheduling chain.",
    "complexity": "micro-2-4",
    "layout": "1x1",
    "executionMode": "compact-waterfall",
    "toolCount": 3,
    "panelCount": 1,
    "maxNestedUiDepth": 3,
    "tags": [
      "catering",
      "scheduling",
      "campaign",
      "micro-2-4"
    ],
    "compatibilitySummary": "3 tools arranged as 1 panel UI; outputs are designed to move through text/data/url/number/date-compatible steps.",
    "panels": [
      {
        "panelIndex": 0,
        "uiTitle": "Scheduling node 1",
        "mode": "intake",
        "tools": [
          {
            "order": 1,
            "toolId": "product-listing-date-to-unix-timestamp",
            "role": "convert or stamp time values",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "robots-rule-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 2
          },
          {
            "order": 3,
            "toolId": "brand-name-trim-whitespace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 3
          }
        ]
      }
    ]
  },
  {
    "id": "project-catering-product-campaign-065",
    "title": "Catering product campaign workflow",
    "field": "Catering",
    "businessFunction": "product",
    "groupId": "group-product-campaign",
    "outcome": "Use compatible product tools to prepare a launch campaign with trackable outputs for Catering.",
    "prompt": "Build a 64-tool nested waterfall for Catering: prepare a launch campaign with trackable outputs using product tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Catering notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible product chain.",
    "complexity": "nested-64",
    "layout": "4x4",
    "executionMode": "nested-waterfall",
    "toolCount": 64,
    "panelCount": 16,
    "maxNestedUiDepth": 4,
    "tags": [
      "catering",
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
            "toolId": "json-snippet-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "meta-description-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 2
          },
          {
            "order": 3,
            "toolId": "oauth-state-json-key-extractor",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 3
          },
          {
            "order": 4,
            "toolId": "garden-journal-slug-generator",
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
            "toolId": "cookie-value-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 6,
            "toolId": "canonical-url-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 2
          },
          {
            "order": 7,
            "toolId": "email-subject-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 8,
            "toolId": "garden-journal-percent-change-calculator",
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
            "toolId": "webhook-body-json-minifier",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 1
          },
          {
            "order": 10,
            "toolId": "seo-title-title-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 11,
            "toolId": "secret-placeholder-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 3
          },
          {
            "order": 12,
            "toolId": "json-config-markdown-table-generator",
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
            "toolId": "youtube-description-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 14,
            "toolId": "code-comment-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 2
          },
          {
            "order": 15,
            "toolId": "json-config-json-key-extractor",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 3
          },
          {
            "order": 16,
            "toolId": "garden-journal-blank-line-remover",
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
            "toolId": "json-config-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 18,
            "toolId": "sitemap-url-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 2
          },
          {
            "order": 19,
            "toolId": "plant-care-notes-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 20,
            "toolId": "recipe-notes-percent-change-calculator",
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
            "toolId": "sitemap-url-json-minifier",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 1
          },
          {
            "order": 22,
            "toolId": "seo-title-find-and-replace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 23,
            "toolId": "cloudflare-rule-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 3
          },
          {
            "order": 24,
            "toolId": "customer-reply-markdown-table-generator",
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
            "toolId": "html-block-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 26,
            "toolId": "keyword-list-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 2
          },
          {
            "order": 27,
            "toolId": "html-snippet-json-key-extractor",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 3
          },
          {
            "order": 28,
            "toolId": "folder-name-slug-generator",
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
            "toolId": "schema-markup-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 30,
            "toolId": "newsletter-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 2
          },
          {
            "order": 31,
            "toolId": "customer-reply-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 32,
            "toolId": "facebook-bio-percent-change-calculator",
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
            "toolId": "robots-rule-json-minifier",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 1
          },
          {
            "order": 34,
            "toolId": "schema-text-title-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 35,
            "toolId": "ip-allowlist-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 3
          },
          {
            "order": 36,
            "toolId": "tracking-link-markdown-table-generator",
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
            "toolId": "seo-title-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 38,
            "toolId": "ad-copy-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 2
          },
          {
            "order": 39,
            "toolId": "csv-cell-json-formatter",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 3
          },
          {
            "order": 40,
            "toolId": "folder-name-blank-line-remover",
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
            "toolId": "callback-url-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 42,
            "toolId": "error-message-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 2
          },
          {
            "order": 43,
            "toolId": "markdown-doc-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 44,
            "toolId": "podcast-notes-percent-change-calculator",
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
            "toolId": "python-string-json-minifier",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 1
          },
          {
            "order": 46,
            "toolId": "schema-text-find-and-replace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 47,
            "toolId": "response-text-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 3
          },
          {
            "order": 48,
            "toolId": "prompt-text-markdown-table-generator",
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
            "toolId": "folder-name-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 50,
            "toolId": "instagram-caption-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 2
          },
          {
            "order": 51,
            "toolId": "callback-url-json-formatter",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 3
          },
          {
            "order": 52,
            "toolId": "file-name-slug-generator",
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
            "toolId": "instagram-caption-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 54,
            "toolId": "yaml-value-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 2
          },
          {
            "order": 55,
            "toolId": "brand-name-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 56,
            "toolId": "domain-list-percent-change-calculator",
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
            "toolId": "jwt-payload-json-minifier",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 1
          },
          {
            "order": 58,
            "toolId": "resume-bullet-title-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 59,
            "toolId": "base-url-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 3
          },
          {
            "order": 60,
            "toolId": "html-snippet-markdown-table-generator",
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
            "toolId": "product-listing-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 62,
            "toolId": "url-slug-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 2
          },
          {
            "order": 63,
            "toolId": "webhook-body-json-formatter",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 3
          },
          {
            "order": 64,
            "toolId": "file-name-blank-line-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 4
          }
        ]
      }
    ]
  },
  {
    "id": "project-catering-ux-campaign-066",
    "title": "Catering UX/UI campaign workflow",
    "field": "Catering",
    "businessFunction": "UX/UI",
    "groupId": "group-ux-campaign",
    "outcome": "Use compatible UX/UI tools to prepare a launch campaign with trackable outputs for Catering.",
    "prompt": "Build a micro workflow for Catering: prepare a launch campaign with trackable outputs using UX/UI tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Catering notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible UX/UI chain.",
    "complexity": "micro-2-4",
    "layout": "2x1",
    "executionMode": "compact-waterfall",
    "toolCount": 4,
    "panelCount": 2,
    "maxNestedUiDepth": 2,
    "tags": [
      "catering",
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
            "toolId": "product-page-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "sitemap-page-keyword-density-checker",
            "role": "extract keyword usage from project text",
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
            "toolId": "domain-list-hex-to-rgb-converter",
            "role": "convert brand colors and palette values",
            "uiDepth": 1
          },
          {
            "order": 4,
            "toolId": "ad-copy-color-contrast-checker",
            "role": "check readability and accessibility contrast",
            "uiDepth": 2
          }
        ]
      }
    ]
  },
  {
    "id": "project-catering-web-launch-campaign-067",
    "title": "Catering web launch campaign workflow",
    "field": "Catering",
    "businessFunction": "web launch",
    "groupId": "group-web-launch-campaign",
    "outcome": "Use compatible web launch tools to prepare a launch campaign with trackable outputs for Catering.",
    "prompt": "Build a 8-panel workflow for Catering: prepare a launch campaign with trackable outputs using web launch tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Catering notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible web launch chain.",
    "complexity": "mid-8",
    "layout": "4x2",
    "executionMode": "hybrid",
    "toolCount": 8,
    "panelCount": 8,
    "maxNestedUiDepth": 1,
    "tags": [
      "catering",
      "web-launch",
      "campaign",
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
            "toolId": "webhook-body-json-formatter",
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
            "toolId": "order-note-hex-to-rgb-converter",
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
            "toolId": "invoice-memo-color-contrast-checker",
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
            "toolId": "faq-page-meta-length-checker",
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
            "toolId": "google-result-keyword-density-checker",
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
            "toolId": "landing-page-utm-link-builder",
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
            "toolId": "javascript-string-json-minifier",
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
            "toolId": "facebook-bio-hex-to-rgb-converter",
            "role": "convert brand colors and palette values",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-catering-developer-campaign-068",
    "title": "Catering developer campaign workflow",
    "field": "Catering",
    "businessFunction": "developer",
    "groupId": "group-developer-campaign",
    "outcome": "Use compatible developer tools to prepare a launch campaign with trackable outputs for Catering.",
    "prompt": "Build a 16-panel workflow for Catering: prepare a launch campaign with trackable outputs using developer tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Catering notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible developer chain.",
    "complexity": "standard-16",
    "layout": "4x4",
    "executionMode": "waterfall",
    "toolCount": 16,
    "panelCount": 16,
    "maxNestedUiDepth": 1,
    "tags": [
      "catering",
      "developer",
      "campaign",
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
            "toolId": "sql-snippet-json-formatter",
            "role": "format, validate, or extract useful keys from JSON",
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
            "toolId": "sql-snippet-html-unescaper",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
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
            "toolId": "html-block-uuid-generator",
            "role": "create unique IDs for assets, records, or tasks",
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
            "toolId": "coupon-text-password-generator",
            "role": "create secure passwords for the project",
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
            "toolId": "jwt-payload-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
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
            "toolId": "invoice-memo-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "html-snippet-json-minifier",
            "role": "format, validate, or extract useful keys from JSON",
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
            "toolId": "oauth-state-html-unescaper",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
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
            "toolId": "schema-text-uuid-generator",
            "role": "create unique IDs for assets, records, or tasks",
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
            "toolId": "newsletter-password-generator",
            "role": "create secure passwords for the project",
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
            "toolId": "commit-message-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
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
            "toolId": "search-query-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "schema-markup-json-formatter",
            "role": "format, validate, or extract useful keys from JSON",
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
            "toolId": "environment-value-html-unescaper",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
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
            "toolId": "email-subject-uuid-generator",
            "role": "create unique IDs for assets, records, or tasks",
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
            "toolId": "youtube-description-password-generator",
            "role": "create secure passwords for the project",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-catering-security-campaign-069",
    "title": "Catering security campaign workflow",
    "field": "Catering",
    "businessFunction": "security",
    "groupId": "group-security-campaign",
    "outcome": "Use compatible security tools to prepare a launch campaign with trackable outputs for Catering.",
    "prompt": "Build a 8-panel workflow for Catering: prepare a launch campaign with trackable outputs using security tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Catering notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible security chain.",
    "complexity": "mid-8",
    "layout": "2x4",
    "executionMode": "hybrid",
    "toolCount": 8,
    "panelCount": 8,
    "maxNestedUiDepth": 1,
    "tags": [
      "catering",
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
            "toolId": "search-index-uuid-generator",
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
            "toolId": "cloudflare-rule-url-decoder",
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
            "toolId": "html-snippet-json-key-extractor",
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
            "toolId": "ebook-chapter-find-and-replace-tool",
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
            "toolId": "webhook-body-markdown-table-generator",
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
            "toolId": "meta-description-password-generator",
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
            "toolId": "facebook-bio-uuid-generator",
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
            "toolId": "system-message-url-decoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-catering-training-campaign-070",
    "title": "Catering training campaign workflow",
    "field": "Catering",
    "businessFunction": "training",
    "groupId": "group-training-campaign",
    "outcome": "Use compatible training tools to prepare a launch campaign with trackable outputs for Catering.",
    "prompt": "Build a 32-tool nested workbench for Catering: prepare a launch campaign with trackable outputs using training tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Catering notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible training chain.",
    "complexity": "advanced-32",
    "layout": "4x4",
    "executionMode": "hybrid-waterfall",
    "toolCount": 32,
    "panelCount": 16,
    "maxNestedUiDepth": 2,
    "tags": [
      "catering",
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
            "toolId": "html-block-add-weeks-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "hashtag-set-days-between-dates-calculator",
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
            "toolId": "secret-placeholder-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 4,
            "toolId": "video-script-percentage-calculator",
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
            "toolId": "markdown-doc-trim-whitespace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 6,
            "toolId": "product-listing-markdown-table-generator",
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
            "toolId": "garden-journal-add-weeks-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          },
          {
            "order": 8,
            "toolId": "brand-name-days-between-dates-calculator",
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
            "toolId": "json-config-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 10,
            "toolId": "newsletter-percentage-calculator",
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
            "toolId": "brand-name-blank-line-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 12,
            "toolId": "xml-node-markdown-table-generator",
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
            "toolId": "file-name-add-months-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          },
          {
            "order": 14,
            "toolId": "newsletter-days-between-dates-calculator",
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
            "toolId": "cloudflare-rule-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 16,
            "toolId": "hashtag-set-percentage-calculator",
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
            "toolId": "markdown-doc-lowercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 18,
            "toolId": "header-value-markdown-table-generator",
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
            "toolId": "email-subject-add-months-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          },
          {
            "order": 20,
            "toolId": "garden-journal-days-between-dates-calculator",
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
            "toolId": "schema-markup-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 22,
            "toolId": "csv-export-percentage-calculator",
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
            "toolId": "blog-post-slug-generator",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 24,
            "toolId": "regex-pattern-markdown-table-generator",
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
            "toolId": "customer-reply-add-months-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          },
          {
            "order": 26,
            "toolId": "blog-post-days-between-dates-calculator",
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
            "toolId": "ip-allowlist-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 28,
            "toolId": "resume-bullet-percentage-calculator",
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
            "toolId": "landing-page-trim-whitespace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 30,
            "toolId": "callback-url-markdown-table-generator",
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
            "toolId": "code-comment-add-months-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          },
          {
            "order": 32,
            "toolId": "meta-description-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 2
          }
        ]
      }
    ]
  },
  {
    "id": "project-catering-inventory-campaign-071",
    "title": "Catering inventory campaign workflow",
    "field": "Catering",
    "businessFunction": "inventory",
    "groupId": "group-inventory-campaign",
    "outcome": "Use compatible inventory tools to prepare a launch campaign with trackable outputs for Catering.",
    "prompt": "Build a 16-panel workflow for Catering: prepare a launch campaign with trackable outputs using inventory tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Catering notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible inventory chain.",
    "complexity": "standard-16",
    "layout": "4x4",
    "executionMode": "waterfall",
    "toolCount": 16,
    "panelCount": 16,
    "maxNestedUiDepth": 1,
    "tags": [
      "catering",
      "inventory",
      "campaign",
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
            "toolId": "user-message-markdown-table-generator",
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
            "toolId": "landing-page-text-reverser",
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
            "toolId": "plant-care-notes-add-weeks-date-calculator",
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
            "toolId": "markdown-doc-csv-to-json-converter",
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
            "toolId": "facebook-bio-percentage-calculator",
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
            "toolId": "hectare-to-square-centimeter-converter",
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
            "toolId": "facebook-bio-markdown-table-generator",
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
            "toolId": "ad-copy-trim-whitespace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "meta-description-add-weeks-date-calculator",
            "role": "project deadlines and future dates",
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
            "toolId": "csv-cell-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
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
            "toolId": "ad-copy-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
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
            "toolId": "minute-to-millisecond-converter",
            "role": "convert operational measurements",
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
            "toolId": "python-string-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "landing-page-extra-space-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "landing-page-add-weeks-date-calculator",
            "role": "project deadlines and future dates",
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
            "toolId": "sitemap-url-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-catering-pricing-campaign-072",
    "title": "Catering pricing campaign workflow",
    "field": "Catering",
    "businessFunction": "pricing",
    "groupId": "group-pricing-campaign",
    "outcome": "Use compatible pricing tools to prepare a launch campaign with trackable outputs for Catering.",
    "prompt": "Build a micro workflow for Catering: prepare a launch campaign with trackable outputs using pricing tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Catering notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible pricing chain.",
    "complexity": "micro-2-4",
    "layout": "1x1",
    "executionMode": "compact-waterfall",
    "toolCount": 3,
    "panelCount": 1,
    "maxNestedUiDepth": 3,
    "tags": [
      "catering",
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
            "toolId": "compound-interest-calculator",
            "role": "model long-term growth or recurring gains",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "plant-care-notes-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 2
          },
          {
            "order": 3,
            "toolId": "email-subject-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 3
          }
        ]
      }
    ]
  },
  {
    "id": "project-catering-outreach-campaign-073",
    "title": "Catering outreach campaign workflow",
    "field": "Catering",
    "businessFunction": "outreach",
    "groupId": "group-outreach-campaign",
    "outcome": "Use compatible outreach tools to prepare a launch campaign with trackable outputs for Catering.",
    "prompt": "Build a 8-panel workflow for Catering: prepare a launch campaign with trackable outputs using outreach tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Catering notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible outreach chain.",
    "complexity": "mid-8",
    "layout": "2x4",
    "executionMode": "hybrid",
    "toolCount": 8,
    "panelCount": 8,
    "maxNestedUiDepth": 1,
    "tags": [
      "catering",
      "outreach",
      "campaign",
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
            "toolId": "cookie-value-markdown-table-generator",
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
            "toolId": "video-script-sentence-case-converter",
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
            "toolId": "converter-page-meta-length-checker",
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
            "toolId": "local-service-page-utm-link-builder",
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
            "toolId": "sitemap-url-url-encoder",
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
            "toolId": "review-page-keyword-density-checker",
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
            "toolId": "log-line-markdown-table-generator",
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
            "toolId": "invoice-memo-title-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-catering-research-campaign-074",
    "title": "Catering research campaign workflow",
    "field": "Catering",
    "businessFunction": "research",
    "groupId": "group-research-campaign",
    "outcome": "Use compatible research tools to prepare a launch campaign with trackable outputs for Catering.",
    "prompt": "Build a 16-panel workflow for Catering: prepare a launch campaign with trackable outputs using research tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Catering notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible research chain.",
    "complexity": "standard-16",
    "layout": "4x4",
    "executionMode": "waterfall",
    "toolCount": 16,
    "panelCount": 16,
    "maxNestedUiDepth": 1,
    "tags": [
      "catering",
      "research",
      "campaign",
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
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
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
            "toolId": "landing-page-keyword-density-checker",
            "role": "extract keyword usage from project text",
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
            "toolId": "html-snippet-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "sitemap-url-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
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
            "toolId": "jwt-payload-json-key-extractor",
            "role": "format, validate, or extract useful keys from JSON",
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
            "toolId": "landing-page-find-and-replace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
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
            "toolId": "donation-campaign-keyword-density-checker",
            "role": "extract keyword usage from project text",
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
            "toolId": "response-text-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "landing-page-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
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
            "toolId": "sql-snippet-json-minifier",
            "role": "format, validate, or extract useful keys from JSON",
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
            "toolId": "ad-copy-sentence-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
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
            "toolId": "about-page-keyword-density-checker",
            "role": "extract keyword usage from project text",
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
            "toolId": "canonical-url-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "cookie-value-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-catering-project-management-campaign-075",
    "title": "Catering project management campaign workflow",
    "field": "Catering",
    "businessFunction": "project management",
    "groupId": "group-project-management-campaign",
    "outcome": "Use compatible project management tools to prepare a launch campaign with trackable outputs for Catering.",
    "prompt": "Build a 64-tool nested waterfall for Catering: prepare a launch campaign with trackable outputs using project management tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Catering notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible project management chain.",
    "complexity": "nested-64",
    "layout": "4x4",
    "executionMode": "nested-waterfall",
    "toolCount": 64,
    "panelCount": 16,
    "maxNestedUiDepth": 4,
    "tags": [
      "catering",
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
            "toolId": "blog-post-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "html-block-lowercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 3,
            "toolId": "jwt-payload-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 4,
            "toolId": "error-message-csv-to-json-converter",
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
            "toolId": "csv-export-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 6,
            "toolId": "hashtag-set-add-months-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 2
          },
          {
            "order": 7,
            "toolId": "meta-description-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 3
          },
          {
            "order": 8,
            "toolId": "sitemap-entry-slug-generator",
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
            "toolId": "sql-snippet-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 10,
            "toolId": "user-message-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 2
          },
          {
            "order": 11,
            "toolId": "resume-bullet-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 12,
            "toolId": "folder-name-add-days-date-calculator",
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
            "toolId": "folder-name-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          },
          {
            "order": 14,
            "toolId": "hashtag-set-trim-whitespace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 15,
            "toolId": "dns-record-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 16,
            "toolId": "pages-url-csv-to-json-converter",
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
            "toolId": "landing-page-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 18,
            "toolId": "facebook-bio-add-days-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 2
          },
          {
            "order": 19,
            "toolId": "ad-copy-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 3
          },
          {
            "order": 20,
            "toolId": "sitemap-entry-blank-line-remover",
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
            "toolId": "oauth-state-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 22,
            "toolId": "email-subject-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 2
          },
          {
            "order": 23,
            "toolId": "file-name-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 24,
            "toolId": "domain-list-add-days-date-calculator",
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
            "toolId": "markdown-doc-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          },
          {
            "order": 26,
            "toolId": "hashtag-set-lowercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 27,
            "toolId": "user-message-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 28,
            "toolId": "tool-url-csv-to-json-converter",
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
            "toolId": "blog-post-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 30,
            "toolId": "csv-export-add-days-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 2
          },
          {
            "order": 31,
            "toolId": "file-name-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 3
          },
          {
            "order": 32,
            "toolId": "shipping-note-slug-generator",
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
            "toolId": "facebook-bio-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 34,
            "toolId": "newsletter-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 2
          },
          {
            "order": 35,
            "toolId": "press-release-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 36,
            "toolId": "brand-name-add-days-date-calculator",
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
            "toolId": "youtube-description-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          },
          {
            "order": 38,
            "toolId": "garden-journal-trim-whitespace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 39,
            "toolId": "python-string-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 40,
            "toolId": "docker-tag-csv-to-json-converter",
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
            "toolId": "invoice-memo-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 42,
            "toolId": "ad-copy-add-days-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 2
          },
          {
            "order": 43,
            "toolId": "landing-page-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 3
          },
          {
            "order": 44,
            "toolId": "shipping-note-blank-line-remover",
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
            "toolId": "youtube-description-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 46,
            "toolId": "svg-snippet-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 2
          },
          {
            "order": 47,
            "toolId": "ebook-chapter-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 48,
            "toolId": "url-slug-add-days-date-calculator",
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
            "toolId": "facebook-bio-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          },
          {
            "order": 50,
            "toolId": "garden-journal-lowercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 51,
            "toolId": "image-alt-text-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 52,
            "toolId": "markdown-link-csv-to-json-converter",
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
            "toolId": "video-script-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 54,
            "toolId": "recipe-notes-add-days-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 2
          },
          {
            "order": 55,
            "toolId": "url-slug-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 3
          },
          {
            "order": 56,
            "toolId": "seo-title-slug-generator",
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
            "toolId": "robots-rule-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 58,
            "toolId": "customer-reply-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 2
          },
          {
            "order": 59,
            "toolId": "newsletter-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 60,
            "toolId": "press-release-add-days-date-calculator",
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
            "toolId": "keyword-list-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          },
          {
            "order": 62,
            "toolId": "folder-name-trim-whitespace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 63,
            "toolId": "cloudflare-rule-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 64,
            "toolId": "sql-snippet-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 4
          }
        ]
      }
    ]
  }
];

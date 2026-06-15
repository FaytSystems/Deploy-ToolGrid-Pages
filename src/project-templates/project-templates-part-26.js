export const PROJECT_TEMPLATES_PART_26 = [
  {
    "id": "project-online-courses-marketing-intake-to-output-001",
    "title": "Online courses marketing intake-to-output workflow",
    "field": "Online courses",
    "businessFunction": "marketing",
    "groupId": "group-marketing-intake-to-output",
    "outcome": "Use compatible marketing tools to turn raw input into a ready-to-use output for Online courses.",
    "prompt": "Build a micro workflow for Online courses: turn raw input into a ready-to-use output using marketing tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible marketing chain.",
    "complexity": "micro-2-4",
    "layout": "1x1",
    "executionMode": "compact-waterfall",
    "toolCount": 3,
    "panelCount": 1,
    "maxNestedUiDepth": 3,
    "tags": [
      "online-courses",
      "marketing",
      "intake-to-output",
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
            "toolId": "product-page-keyword-density-checker",
            "role": "extract keyword usage from project text",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "tiktok-caption-utm-link-builder",
            "role": "create trackable campaign URLs",
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
    "id": "project-online-courses-sales-intake-to-output-002",
    "title": "Online courses sales intake-to-output workflow",
    "field": "Online courses",
    "businessFunction": "sales",
    "groupId": "group-sales-intake-to-output",
    "outcome": "Use compatible sales tools to turn raw input into a ready-to-use output for Online courses.",
    "prompt": "Build a 16-panel workflow for Online courses: turn raw input into a ready-to-use output using sales tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible sales chain.",
    "complexity": "standard-16",
    "layout": "4x4",
    "executionMode": "waterfall",
    "toolCount": 16,
    "panelCount": 16,
    "maxNestedUiDepth": 1,
    "tags": [
      "online-courses",
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
            "toolId": "youtube-description-percentage-calculator",
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
            "toolId": "pages-url-markdown-table-generator",
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
            "toolId": "oauth-state-base64-encoder",
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
            "toolId": "press-release-csv-to-json-converter",
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
            "toolId": "meta-description-blank-line-remover",
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
            "toolId": "local-service-page-utm-link-builder",
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
            "toolId": "plant-care-notes-percentage-calculator",
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
            "toolId": "uuid-list-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "environment-value-base64-encoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
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
            "toolId": "error-message-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
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
            "toolId": "code-comment-find-and-replace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "facebook-post-utm-link-builder",
            "role": "create trackable campaign URLs",
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
            "toolId": "html-block-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
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
            "toolId": "form-payload-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "yaml-value-base64-encoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
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
            "toolId": "user-message-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-support-intake-to-output-003",
    "title": "Online courses customer support intake-to-output workflow",
    "field": "Online courses",
    "businessFunction": "customer support",
    "groupId": "group-support-intake-to-output",
    "outcome": "Use compatible customer support tools to turn raw input into a ready-to-use output for Online courses.",
    "prompt": "Build a micro workflow for Online courses: turn raw input into a ready-to-use output using customer support tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible customer support chain.",
    "complexity": "micro-2-4",
    "layout": "2x1",
    "executionMode": "compact-waterfall",
    "toolCount": 4,
    "panelCount": 2,
    "maxNestedUiDepth": 2,
    "tags": [
      "online-courses",
      "support",
      "intake-to-output",
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
            "toolId": "email-body-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "environment-value-json-formatter",
            "role": "format, validate, or extract useful keys from JSON",
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
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
            "uiDepth": 1
          },
          {
            "order": 4,
            "toolId": "product-listing-find-and-replace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-operations-intake-to-output-004",
    "title": "Online courses operations intake-to-output workflow",
    "field": "Online courses",
    "businessFunction": "operations",
    "groupId": "group-operations-intake-to-output",
    "outcome": "Use compatible operations tools to turn raw input into a ready-to-use output for Online courses.",
    "prompt": "Build a 8-panel workflow for Online courses: turn raw input into a ready-to-use output using operations tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible operations chain.",
    "complexity": "mid-8",
    "layout": "4x2",
    "executionMode": "hybrid",
    "toolCount": 8,
    "panelCount": 8,
    "maxNestedUiDepth": 1,
    "tags": [
      "online-courses",
      "operations",
      "intake-to-output",
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
            "toolId": "press-release-blank-line-remover",
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
            "toolId": "garden-journal-add-days-date-calculator",
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
            "toolId": "json-snippet-days-between-dates-calculator",
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
            "toolId": "press-release-percentage-calculator",
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
            "toolId": "schema-markup-json-to-csv-converter",
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
            "toolId": "api-token-markdown-table-generator",
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
            "toolId": "customer-reply-find-and-replace-tool",
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
            "toolId": "facebook-bio-add-years-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-finance-intake-to-output-005",
    "title": "Online courses finance intake-to-output workflow",
    "field": "Online courses",
    "businessFunction": "finance",
    "groupId": "group-finance-intake-to-output",
    "outcome": "Use compatible finance tools to turn raw input into a ready-to-use output for Online courses.",
    "prompt": "Build a 32-tool nested workbench for Online courses: turn raw input into a ready-to-use output using finance tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible finance chain.",
    "complexity": "advanced-32",
    "layout": "4x4",
    "executionMode": "hybrid-waterfall",
    "toolCount": 32,
    "panelCount": 16,
    "maxNestedUiDepth": 2,
    "tags": [
      "online-courses",
      "finance",
      "intake-to-output",
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
            "toolId": "podcast-notes-percentage-calculator",
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
            "toolId": "resume-bullet-percent-change-calculator",
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
            "toolId": "file-name-division-calculator",
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
            "toolId": "instagram-caption-percentage-calculator",
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
            "toolId": "landing-page-percent-change-calculator",
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
            "toolId": "facebook-bio-average-calculator",
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
            "toolId": "domain-list-percentage-calculator",
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
            "toolId": "file-name-percent-change-calculator",
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
            "toolId": "ebook-chapter-subtraction-calculator",
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
            "toolId": "url-slug-percentage-calculator",
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
            "toolId": "blog-post-percent-change-calculator",
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
            "toolId": "domain-list-multiplication-calculator",
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
            "toolId": "meta-description-percentage-calculator",
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
            "toolId": "press-release-percent-change-calculator",
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
            "toolId": "customer-reply-box-volume-calculator",
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
            "toolId": "garden-journal-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 2
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-hr-intake-to-output-006",
    "title": "Online courses HR intake-to-output workflow",
    "field": "Online courses",
    "businessFunction": "HR",
    "groupId": "group-hr-intake-to-output",
    "outcome": "Use compatible HR tools to turn raw input into a ready-to-use output for Online courses.",
    "prompt": "Build a 8-panel workflow for Online courses: turn raw input into a ready-to-use output using HR tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible HR chain.",
    "complexity": "mid-8",
    "layout": "2x4",
    "executionMode": "hybrid",
    "toolCount": 8,
    "panelCount": 8,
    "maxNestedUiDepth": 1,
    "tags": [
      "online-courses",
      "hr",
      "intake-to-output",
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
            "toolId": "garden-journal-add-weeks-date-calculator",
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
            "toolId": "blog-post-days-between-dates-calculator",
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
            "toolId": "canonical-url-json-to-csv-converter",
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
            "toolId": "meta-description-password-generator",
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
            "toolId": "recipe-notes-markdown-table-generator",
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
            "toolId": "markdown-doc-sentence-case-converter",
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
            "toolId": "file-name-add-months-date-calculator",
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
            "toolId": "meta-description-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-content-intake-to-output-007",
    "title": "Online courses content intake-to-output workflow",
    "field": "Online courses",
    "businessFunction": "content",
    "groupId": "group-content-intake-to-output",
    "outcome": "Use compatible content tools to turn raw input into a ready-to-use output for Online courses.",
    "prompt": "Build a micro workflow for Online courses: turn raw input into a ready-to-use output using content tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible content chain.",
    "complexity": "micro-2-4",
    "layout": "2x1",
    "executionMode": "compact-waterfall",
    "toolCount": 4,
    "panelCount": 2,
    "maxNestedUiDepth": 2,
    "tags": [
      "online-courses",
      "content",
      "intake-to-output",
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
            "toolId": "category-page-keyword-density-checker",
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
            "toolId": "query-string-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 4,
            "toolId": "garden-guide-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 2
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-seo-intake-to-output-008",
    "title": "Online courses SEO intake-to-output workflow",
    "field": "Online courses",
    "businessFunction": "SEO",
    "groupId": "group-seo-intake-to-output",
    "outcome": "Use compatible SEO tools to turn raw input into a ready-to-use output for Online courses.",
    "prompt": "Build a 16-panel workflow for Online courses: turn raw input into a ready-to-use output using SEO tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible SEO chain.",
    "complexity": "standard-16",
    "layout": "4x4",
    "executionMode": "waterfall",
    "toolCount": 16,
    "panelCount": 16,
    "maxNestedUiDepth": 1,
    "tags": [
      "online-courses",
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
            "toolId": "dns-record-url-encoder",
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
            "toolId": "plant-care-notes-sentence-case-converter",
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
            "toolId": "search-query-markdown-table-generator",
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
            "toolId": "product-listing-keyword-density-checker",
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
            "toolId": "sitemap-page-utm-link-builder",
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
            "toolId": "webhook-body-url-encoder",
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
            "toolId": "cover-letter-text-reverser",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "cookie-value-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "about-page-meta-length-checker",
            "role": "check title and description length for web publishing",
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
            "toolId": "homepage-keyword-density-checker",
            "role": "extract keyword usage from project text",
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
            "toolId": "local-service-page-utm-link-builder",
            "role": "create trackable campaign URLs",
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
            "toolId": "robots-rule-url-encoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
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
            "toolId": "order-note-uppercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "log-line-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "instagram-reel-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-social-intake-to-output-009",
    "title": "Online courses social media intake-to-output workflow",
    "field": "Online courses",
    "businessFunction": "social media",
    "groupId": "group-social-intake-to-output",
    "outcome": "Use compatible social media tools to turn raw input into a ready-to-use output for Online courses.",
    "prompt": "Build a micro workflow for Online courses: turn raw input into a ready-to-use output using social media tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible social media chain.",
    "complexity": "micro-2-4",
    "layout": "1x1",
    "executionMode": "compact-waterfall",
    "toolCount": 3,
    "panelCount": 1,
    "maxNestedUiDepth": 3,
    "tags": [
      "online-courses",
      "social",
      "intake-to-output",
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
            "toolId": "pages-url-base64-decoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "garden-journal-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 2
          },
          {
            "order": 3,
            "toolId": "video-script-blank-line-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 3
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-email-intake-to-output-010",
    "title": "Online courses email intake-to-output workflow",
    "field": "Online courses",
    "businessFunction": "email",
    "groupId": "group-email-intake-to-output",
    "outcome": "Use compatible email tools to turn raw input into a ready-to-use output for Online courses.",
    "prompt": "Build a 64-tool nested waterfall for Online courses: turn raw input into a ready-to-use output using email tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible email chain.",
    "complexity": "nested-64",
    "layout": "4x4",
    "executionMode": "nested-waterfall",
    "toolCount": 64,
    "panelCount": 16,
    "maxNestedUiDepth": 4,
    "tags": [
      "online-courses",
      "email",
      "intake-to-output",
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
            "toolId": "svg-snippet-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "community-rule-find-and-replace-tool",
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
            "toolId": "category-page-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 1
          },
          {
            "order": 6,
            "toolId": "log-line-base64-decoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 2
          },
          {
            "order": 7,
            "toolId": "email-body-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 8,
            "toolId": "meta-description-slug-generator",
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
            "toolId": "tiktok-caption-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 3
          },
          {
            "order": 12,
            "toolId": "docker-tag-base64-decoder",
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
            "toolId": "plant-care-notes-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 14,
            "toolId": "code-comment-title-case-converter",
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
            "toolId": "newsletter-campaign-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 1
          },
          {
            "order": 18,
            "toolId": "worker-route-base64-decoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 2
          },
          {
            "order": 19,
            "toolId": "webhook-body-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 20,
            "toolId": "meta-description-blank-line-remover",
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
            "toolId": "faq-page-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 3
          },
          {
            "order": 24,
            "toolId": "schema-markup-base64-decoder",
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
            "toolId": "garden-journal-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 26,
            "toolId": "code-comment-find-and-replace-tool",
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
            "toolId": "blog-article-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 1
          },
          {
            "order": 30,
            "toolId": "json-config-base64-decoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 2
          },
          {
            "order": 31,
            "toolId": "recipe-notes-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 32,
            "toolId": "meeting-notes-slug-generator",
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
            "toolId": "raffle-campaign-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 3
          },
          {
            "order": 36,
            "toolId": "csv-cell-base64-decoder",
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
            "toolId": "base-url-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 38,
            "toolId": "brand-name-title-case-converter",
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
            "toolId": "instagram-reel-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 1
          },
          {
            "order": 42,
            "toolId": "uuid-list-base64-decoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 2
          },
          {
            "order": 43,
            "toolId": "invoice-memo-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 44,
            "toolId": "meeting-notes-blank-line-remover",
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
            "toolId": "developer-tool-page-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 3
          },
          {
            "order": 48,
            "toolId": "response-text-base64-decoder",
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
            "toolId": "search-query-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 50,
            "toolId": "brand-name-find-and-replace-tool",
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
            "toolId": "youtube-video-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 1
          },
          {
            "order": 54,
            "toolId": "ip-allowlist-base64-decoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 2
          },
          {
            "order": 55,
            "toolId": "cookie-value-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 56,
            "toolId": "markdown-doc-slug-generator",
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
            "toolId": "policy-page-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 3
          },
          {
            "order": 60,
            "toolId": "cookie-value-base64-decoder",
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
            "toolId": "log-line-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 62,
            "toolId": "blog-post-title-case-converter",
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
    "id": "project-online-courses-data-intake-to-output-011",
    "title": "Online courses data cleanup intake-to-output workflow",
    "field": "Online courses",
    "businessFunction": "data cleanup",
    "groupId": "group-data-intake-to-output",
    "outcome": "Use compatible data cleanup tools to turn raw input into a ready-to-use output for Online courses.",
    "prompt": "Build a 16-panel workflow for Online courses: turn raw input into a ready-to-use output using data cleanup tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible data cleanup chain.",
    "complexity": "standard-16",
    "layout": "4x4",
    "executionMode": "waterfall",
    "toolCount": 16,
    "panelCount": 16,
    "maxNestedUiDepth": 1,
    "tags": [
      "online-courses",
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
            "toolId": "robots-rule-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
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
            "toolId": "robots-rule-json-minifier",
            "role": "format, validate, or extract useful keys from JSON",
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
            "toolId": "canonical-url-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "json-snippet-text-reverser",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "robots-rule-base64-decoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
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
            "toolId": "product-sku-uuid-generator",
            "role": "create unique IDs for assets, records, or tasks",
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
            "toolId": "invoice-memo-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
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
            "toolId": "csv-cell-json-formatter",
            "role": "format, validate, or extract useful keys from JSON",
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
            "toolId": "json-config-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "video-script-trim-whitespace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "javascript-string-base64-decoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
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
            "toolId": "csv-export-uuid-generator",
            "role": "create unique IDs for assets, records, or tasks",
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
            "toolId": "blog-post-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
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
            "toolId": "python-string-json-minifier",
            "role": "format, validate, or extract useful keys from JSON",
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
            "toolId": "sitemap-url-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "json-snippet-extra-space-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-reporting-intake-to-output-012",
    "title": "Online courses reporting intake-to-output workflow",
    "field": "Online courses",
    "businessFunction": "reporting",
    "groupId": "group-reporting-intake-to-output",
    "outcome": "Use compatible reporting tools to turn raw input into a ready-to-use output for Online courses.",
    "prompt": "Build a 8-panel workflow for Online courses: turn raw input into a ready-to-use output using reporting tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible reporting chain.",
    "complexity": "mid-8",
    "layout": "4x2",
    "executionMode": "hybrid",
    "toolCount": 8,
    "panelCount": 8,
    "maxNestedUiDepth": 1,
    "tags": [
      "online-courses",
      "reporting",
      "intake-to-output",
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
            "toolId": "callback-url-markdown-table-generator",
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
            "toolId": "ebook-chapter-percentage-calculator",
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
            "toolId": "folder-name-percent-change-calculator",
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
            "toolId": "press-release-slug-generator",
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
            "toolId": "meta-description-add-months-date-calculator",
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
            "toolId": "oauth-state-csv-to-json-converter",
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
            "toolId": "javascript-string-markdown-table-generator",
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
            "toolId": "video-script-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-compliance-intake-to-output-013",
    "title": "Online courses compliance intake-to-output workflow",
    "field": "Online courses",
    "businessFunction": "compliance",
    "groupId": "group-compliance-intake-to-output",
    "outcome": "Use compatible compliance tools to turn raw input into a ready-to-use output for Online courses.",
    "prompt": "Build a micro workflow for Online courses: turn raw input into a ready-to-use output using compliance tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible compliance chain.",
    "complexity": "micro-2-4",
    "layout": "1x1",
    "executionMode": "compact-waterfall",
    "toolCount": 3,
    "panelCount": 1,
    "maxNestedUiDepth": 3,
    "tags": [
      "online-courses",
      "compliance",
      "intake-to-output",
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
            "toolId": "hashtag-set-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "garden-journal-add-years-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 2
          },
          {
            "order": 3,
            "toolId": "form-payload-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-scheduling-intake-to-output-014",
    "title": "Online courses scheduling intake-to-output workflow",
    "field": "Online courses",
    "businessFunction": "scheduling",
    "groupId": "group-scheduling-intake-to-output",
    "outcome": "Use compatible scheduling tools to turn raw input into a ready-to-use output for Online courses.",
    "prompt": "Build a 16-panel workflow for Online courses: turn raw input into a ready-to-use output using scheduling tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible scheduling chain.",
    "complexity": "standard-16",
    "layout": "4x4",
    "executionMode": "waterfall",
    "toolCount": 16,
    "panelCount": 16,
    "maxNestedUiDepth": 1,
    "tags": [
      "online-courses",
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
            "toolId": "facebook-bio-markdown-table-generator",
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
            "toolId": "video-script-uppercase-converter",
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
            "toolId": "press-release-json-to-csv-converter",
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
            "toolId": "landing-page-days-between-dates-calculator",
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
            "toolId": "blog-post-add-days-date-calculator",
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
            "toolId": "json-snippet-date-to-unix-timestamp",
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
            "toolId": "python-string-markdown-table-generator",
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
            "toolId": "json-snippet-find-and-replace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "error-message-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
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
            "toolId": "facebook-bio-days-between-dates-calculator",
            "role": "measure durations between dates",
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
            "toolId": "youtube-description-add-days-date-calculator",
            "role": "project deadlines and future dates",
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
            "toolId": "invoice-memo-date-to-unix-timestamp",
            "role": "convert or stamp time values",
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
            "toolId": "youtube-description-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "video-script-sentence-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "user-message-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
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
            "toolId": "url-slug-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-product-intake-to-output-015",
    "title": "Online courses product intake-to-output workflow",
    "field": "Online courses",
    "businessFunction": "product",
    "groupId": "group-product-intake-to-output",
    "outcome": "Use compatible product tools to turn raw input into a ready-to-use output for Online courses.",
    "prompt": "Build a 32-tool nested workbench for Online courses: turn raw input into a ready-to-use output using product tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible product chain.",
    "complexity": "advanced-32",
    "layout": "4x4",
    "executionMode": "hybrid-waterfall",
    "toolCount": 32,
    "panelCount": 16,
    "maxNestedUiDepth": 2,
    "tags": [
      "online-courses",
      "product",
      "intake-to-output",
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
            "toolId": "podcast-notes-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "jwt-payload-json-minifier",
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
            "toolId": "email-subject-text-reverser",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 4,
            "toolId": "git-branch-json-to-csv-converter",
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
            "toolId": "prompt-text-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 6,
            "toolId": "folder-name-percentage-calculator",
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
            "toolId": "instagram-caption-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 1
          },
          {
            "order": 8,
            "toolId": "webhook-body-json-formatter",
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
            "toolId": "project-brief-trim-whitespace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 10,
            "toolId": "xml-node-json-to-csv-converter",
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
            "toolId": "yaml-value-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 12,
            "toolId": "brand-name-percentage-calculator",
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
            "toolId": "domain-list-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 1
          },
          {
            "order": 14,
            "toolId": "javascript-string-json-minifier",
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
            "toolId": "email-subject-extra-space-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 16,
            "toolId": "prompt-text-json-to-csv-converter",
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
            "toolId": "html-snippet-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 18,
            "toolId": "product-listing-percentage-calculator",
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
            "toolId": "url-slug-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 1
          },
          {
            "order": 20,
            "toolId": "sitemap-url-json-formatter",
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
            "toolId": "project-brief-lowercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 22,
            "toolId": "form-payload-json-to-csv-converter",
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
            "toolId": "response-text-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 24,
            "toolId": "json-snippet-percentage-calculator",
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
            "toolId": "meta-description-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 1
          },
          {
            "order": 26,
            "toolId": "environment-value-json-minifier",
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
            "toolId": "ebook-chapter-text-reverser",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 28,
            "toolId": "webhook-body-json-to-csv-converter",
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
            "toolId": "canonical-url-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 30,
            "toolId": "email-subject-percentage-calculator",
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
            "toolId": "garden-journal-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 1
          },
          {
            "order": 32,
            "toolId": "robots-rule-json-formatter",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 2
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-ux-intake-to-output-016",
    "title": "Online courses UX/UI intake-to-output workflow",
    "field": "Online courses",
    "businessFunction": "UX/UI",
    "groupId": "group-ux-intake-to-output",
    "outcome": "Use compatible UX/UI tools to turn raw input into a ready-to-use output for Online courses.",
    "prompt": "Build a 8-panel workflow for Online courses: turn raw input into a ready-to-use output using UX/UI tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible UX/UI chain.",
    "complexity": "mid-8",
    "layout": "4x2",
    "executionMode": "hybrid",
    "toolCount": 8,
    "panelCount": 8,
    "maxNestedUiDepth": 1,
    "tags": [
      "online-courses",
      "ux",
      "intake-to-output",
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
            "toolId": "youtube-description-keyword-density-checker",
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
            "toolId": "press-release-hex-to-rgb-converter",
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
            "toolId": "folder-name-color-contrast-checker",
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
            "toolId": "meta-description-find-and-replace-tool",
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
            "toolId": "robots-rule-markdown-table-generator",
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
            "toolId": "plant-profile-keyword-density-checker",
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
            "toolId": "garden-journal-hex-to-rgb-converter",
            "role": "convert brand colors and palette values",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-web-launch-intake-to-output-017",
    "title": "Online courses web launch intake-to-output workflow",
    "field": "Online courses",
    "businessFunction": "web launch",
    "groupId": "group-web-launch-intake-to-output",
    "outcome": "Use compatible web launch tools to turn raw input into a ready-to-use output for Online courses.",
    "prompt": "Build a 16-panel workflow for Online courses: turn raw input into a ready-to-use output using web launch tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible web launch chain.",
    "complexity": "standard-16",
    "layout": "4x4",
    "executionMode": "waterfall",
    "toolCount": 16,
    "panelCount": 16,
    "maxNestedUiDepth": 1,
    "tags": [
      "online-courses",
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
            "toolId": "cover-letter-hex-to-rgb-converter",
            "role": "convert brand colors and palette values",
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
            "toolId": "product-listing-color-contrast-checker",
            "role": "check readability and accessibility contrast",
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
            "toolId": "facebook-bio-meta-length-checker",
            "role": "check title and description length for web publishing",
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
            "toolId": "instagram-reel-keyword-density-checker",
            "role": "extract keyword usage from project text",
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
            "toolId": "pinterest-pin-utm-link-builder",
            "role": "create trackable campaign URLs",
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
            "toolId": "javascript-string-json-formatter",
            "role": "format, validate, or extract useful keys from JSON",
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
            "toolId": "project-brief-hex-to-rgb-converter",
            "role": "convert brand colors and palette values",
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
            "toolId": "csv-export-color-contrast-checker",
            "role": "check readability and accessibility contrast",
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
            "toolId": "review-page-meta-length-checker",
            "role": "check title and description length for web publishing",
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
            "toolId": "developer-tool-page-keyword-density-checker",
            "role": "extract keyword usage from project text",
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
            "toolId": "free-pdf-page-utm-link-builder",
            "role": "create trackable campaign URLs",
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
            "toolId": "schema-markup-json-key-extractor",
            "role": "format, validate, or extract useful keys from JSON",
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
            "toolId": "instagram-caption-hex-to-rgb-converter",
            "role": "convert brand colors and palette values",
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
            "toolId": "meeting-notes-color-contrast-checker",
            "role": "check readability and accessibility contrast",
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
            "toolId": "faq-page-meta-length-checker",
            "role": "check title and description length for web publishing",
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
            "toolId": "youtube-video-keyword-density-checker",
            "role": "extract keyword usage from project text",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-developer-intake-to-output-018",
    "title": "Online courses developer intake-to-output workflow",
    "field": "Online courses",
    "businessFunction": "developer",
    "groupId": "group-developer-intake-to-output",
    "outcome": "Use compatible developer tools to turn raw input into a ready-to-use output for Online courses.",
    "prompt": "Build a 8-panel workflow for Online courses: turn raw input into a ready-to-use output using developer tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible developer chain.",
    "complexity": "mid-8",
    "layout": "2x4",
    "executionMode": "hybrid",
    "toolCount": 8,
    "panelCount": 8,
    "maxNestedUiDepth": 1,
    "tags": [
      "online-courses",
      "developer",
      "intake-to-output",
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
            "toolId": "json-config-html-unescaper",
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
            "toolId": "garden-journal-uuid-generator",
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
            "toolId": "code-comment-password-generator",
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
            "toolId": "python-string-csv-to-json-converter",
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
            "toolId": "webhook-body-markdown-table-generator",
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
            "toolId": "html-snippet-json-formatter",
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
            "toolId": "csv-cell-html-unescaper",
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
            "toolId": "recipe-notes-uuid-generator",
            "role": "create unique IDs for assets, records, or tasks",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-security-intake-to-output-019",
    "title": "Online courses security intake-to-output workflow",
    "field": "Online courses",
    "businessFunction": "security",
    "groupId": "group-security-intake-to-output",
    "outcome": "Use compatible security tools to turn raw input into a ready-to-use output for Online courses.",
    "prompt": "Build a micro workflow for Online courses: turn raw input into a ready-to-use output using security tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible security chain.",
    "complexity": "micro-2-4",
    "layout": "2x1",
    "executionMode": "compact-waterfall",
    "toolCount": 4,
    "panelCount": 2,
    "maxNestedUiDepth": 2,
    "tags": [
      "online-courses",
      "security",
      "intake-to-output",
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
            "toolId": "sitemap-url-url-decoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "environment-value-json-minifier",
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
            "toolId": "csv-export-find-and-replace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 4,
            "toolId": "log-line-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 2
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-training-intake-to-output-020",
    "title": "Online courses training intake-to-output workflow",
    "field": "Online courses",
    "businessFunction": "training",
    "groupId": "group-training-intake-to-output",
    "outcome": "Use compatible training tools to turn raw input into a ready-to-use output for Online courses.",
    "prompt": "Build a 64-tool nested waterfall for Online courses: turn raw input into a ready-to-use output using training tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible training chain.",
    "complexity": "nested-64",
    "layout": "4x4",
    "executionMode": "nested-waterfall",
    "toolCount": 64,
    "panelCount": 16,
    "maxNestedUiDepth": 4,
    "tags": [
      "online-courses",
      "training",
      "intake-to-output",
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
            "toolId": "brand-name-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "xml-node-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 2
          },
          {
            "order": 3,
            "toolId": "blog-post-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 4,
            "toolId": "invoice-memo-uppercase-converter",
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
            "toolId": "csv-cell-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 6,
            "toolId": "garden-journal-add-days-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 2
          },
          {
            "order": 7,
            "toolId": "newsletter-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 3
          },
          {
            "order": 8,
            "toolId": "prompt-text-csv-to-json-converter",
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
            "toolId": "press-release-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 10,
            "toolId": "video-script-extra-space-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 11,
            "toolId": "meta-description-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 12,
            "toolId": "facebook-bio-add-years-date-calculator",
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
            "toolId": "garden-journal-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          },
          {
            "order": 14,
            "toolId": "form-payload-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 2
          },
          {
            "order": 15,
            "toolId": "invoice-memo-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 16,
            "toolId": "invoice-memo-sentence-case-converter",
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
            "toolId": "tool-url-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 18,
            "toolId": "domain-list-add-years-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 2
          },
          {
            "order": 19,
            "toolId": "blog-post-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 3
          },
          {
            "order": 20,
            "toolId": "webhook-body-csv-to-json-converter",
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
            "toolId": "ebook-chapter-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 22,
            "toolId": "url-slug-text-reverser",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 23,
            "toolId": "environment-value-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 24,
            "toolId": "csv-export-add-years-date-calculator",
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
            "toolId": "meta-description-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          },
          {
            "order": 26,
            "toolId": "press-release-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 2
          },
          {
            "order": 27,
            "toolId": "video-script-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 28,
            "toolId": "instagram-caption-uppercase-converter",
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
            "toolId": "product-listing-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 30,
            "toolId": "brand-name-add-years-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 2
          },
          {
            "order": 31,
            "toolId": "folder-name-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 3
          },
          {
            "order": 32,
            "toolId": "error-message-csv-to-json-converter",
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
            "toolId": "newsletter-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 34,
            "toolId": "url-slug-extra-space-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 35,
            "toolId": "xml-node-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 36,
            "toolId": "ad-copy-add-years-date-calculator",
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
            "toolId": "ad-copy-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          },
          {
            "order": 38,
            "toolId": "user-message-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 2
          },
          {
            "order": 39,
            "toolId": "hashtag-set-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 40,
            "toolId": "instagram-caption-sentence-case-converter",
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
            "toolId": "header-value-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 42,
            "toolId": "url-slug-add-years-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 2
          },
          {
            "order": 43,
            "toolId": "markdown-doc-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 3
          },
          {
            "order": 44,
            "toolId": "pages-url-csv-to-json-converter",
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
            "toolId": "csv-export-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 46,
            "toolId": "support-ticket-text-reverser",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 47,
            "toolId": "regex-pattern-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 48,
            "toolId": "recipe-notes-add-years-date-calculator",
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
            "toolId": "file-name-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          },
          {
            "order": 50,
            "toolId": "email-subject-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 2
          },
          {
            "order": 51,
            "toolId": "resume-bullet-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 52,
            "toolId": "html-block-uppercase-converter",
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
            "toolId": "callback-url-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 54,
            "toolId": "press-release-add-years-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 2
          },
          {
            "order": 55,
            "toolId": "youtube-description-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 3
          },
          {
            "order": 56,
            "toolId": "tool-url-csv-to-json-converter",
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
            "toolId": "landing-page-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 58,
            "toolId": "support-ticket-extra-space-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 59,
            "toolId": "javascript-string-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 60,
            "toolId": "newsletter-add-years-date-calculator",
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
            "toolId": "landing-page-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          },
          {
            "order": 62,
            "toolId": "newsletter-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 2
          },
          {
            "order": 63,
            "toolId": "file-name-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 64,
            "toolId": "html-block-sentence-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 4
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-inventory-intake-to-output-021",
    "title": "Online courses inventory intake-to-output workflow",
    "field": "Online courses",
    "businessFunction": "inventory",
    "groupId": "group-inventory-intake-to-output",
    "outcome": "Use compatible inventory tools to turn raw input into a ready-to-use output for Online courses.",
    "prompt": "Build a micro workflow for Online courses: turn raw input into a ready-to-use output using inventory tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible inventory chain.",
    "complexity": "micro-2-4",
    "layout": "1x1",
    "executionMode": "compact-waterfall",
    "toolCount": 3,
    "panelCount": 1,
    "maxNestedUiDepth": 3,
    "tags": [
      "online-courses",
      "inventory",
      "intake-to-output",
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
            "toolId": "instagram-caption-title-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "plant-care-notes-add-days-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 2
          },
          {
            "order": 3,
            "toolId": "redirect-url-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 3
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-pricing-intake-to-output-022",
    "title": "Online courses pricing intake-to-output workflow",
    "field": "Online courses",
    "businessFunction": "pricing",
    "groupId": "group-pricing-intake-to-output",
    "outcome": "Use compatible pricing tools to turn raw input into a ready-to-use output for Online courses.",
    "prompt": "Build a 8-panel workflow for Online courses: turn raw input into a ready-to-use output using pricing tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible pricing chain.",
    "complexity": "mid-8",
    "layout": "2x4",
    "executionMode": "hybrid",
    "toolCount": 8,
    "panelCount": 8,
    "maxNestedUiDepth": 1,
    "tags": [
      "online-courses",
      "pricing",
      "intake-to-output",
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
            "toolId": "cookie-value-markdown-table-generator",
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
            "toolId": "folder-name-percent-change-calculator",
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
            "toolId": "instagram-caption-percentage-calculator",
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
            "toolId": "json-snippet-division-calculator",
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
            "toolId": "log-line-markdown-table-generator",
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
            "toolId": "brand-name-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-outreach-intake-to-output-023",
    "title": "Online courses outreach intake-to-output workflow",
    "field": "Online courses",
    "businessFunction": "outreach",
    "groupId": "group-outreach-intake-to-output",
    "outcome": "Use compatible outreach tools to turn raw input into a ready-to-use output for Online courses.",
    "prompt": "Build a 16-panel workflow for Online courses: turn raw input into a ready-to-use output using outreach tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible outreach chain.",
    "complexity": "standard-16",
    "layout": "4x4",
    "executionMode": "waterfall",
    "toolCount": 16,
    "panelCount": 16,
    "maxNestedUiDepth": 1,
    "tags": [
      "online-courses",
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
            "toolId": "shipping-note-slug-generator",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "category-page-meta-length-checker",
            "role": "check title and description length for web publishing",
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
            "toolId": "plant-profile-utm-link-builder",
            "role": "create trackable campaign URLs",
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
            "toolId": "javascript-string-url-encoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
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
            "toolId": "tool-page-keyword-density-checker",
            "role": "extract keyword usage from project text",
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
            "toolId": "base-url-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "garden-journal-trim-whitespace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "plant-profile-meta-length-checker",
            "role": "check title and description length for web publishing",
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
            "toolId": "garden-guide-utm-link-builder",
            "role": "create trackable campaign URLs",
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
            "toolId": "css-class-url-encoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
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
            "toolId": "pinterest-pin-keyword-density-checker",
            "role": "extract keyword usage from project text",
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
            "toolId": "invoice-memo-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "shipping-note-blank-line-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "converter-page-meta-length-checker",
            "role": "check title and description length for web publishing",
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
            "toolId": "calculator-page-utm-link-builder",
            "role": "create trackable campaign URLs",
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
            "toolId": "user-message-url-encoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-research-intake-to-output-024",
    "title": "Online courses research intake-to-output workflow",
    "field": "Online courses",
    "businessFunction": "research",
    "groupId": "group-research-intake-to-output",
    "outcome": "Use compatible research tools to turn raw input into a ready-to-use output for Online courses.",
    "prompt": "Build a 8-panel workflow for Online courses: turn raw input into a ready-to-use output using research tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible research chain.",
    "complexity": "mid-8",
    "layout": "4x2",
    "executionMode": "hybrid",
    "toolCount": 8,
    "panelCount": 8,
    "maxNestedUiDepth": 1,
    "tags": [
      "online-courses",
      "research",
      "intake-to-output",
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
            "toolId": "pinterest-pin-keyword-density-checker",
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
            "toolId": "tracking-link-markdown-table-generator",
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
            "toolId": "youtube-description-json-to-csv-converter",
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
            "toolId": "json-config-json-minifier",
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
            "toolId": "instagram-caption-lowercase-converter",
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
            "toolId": "free-pdf-page-keyword-density-checker",
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
            "toolId": "error-message-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-project-management-intake-to-output-025",
    "title": "Online courses project management intake-to-output workflow",
    "field": "Online courses",
    "businessFunction": "project management",
    "groupId": "group-project-management-intake-to-output",
    "outcome": "Use compatible project management tools to turn raw input into a ready-to-use output for Online courses.",
    "prompt": "Build a 32-tool nested workbench for Online courses: turn raw input into a ready-to-use output using project management tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible project management chain.",
    "complexity": "advanced-32",
    "layout": "4x4",
    "executionMode": "hybrid-waterfall",
    "toolCount": 32,
    "panelCount": 16,
    "maxNestedUiDepth": 2,
    "tags": [
      "online-courses",
      "project-management",
      "intake-to-output",
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
            "toolId": "file-name-sentence-case-converter",
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
        "uiTitle": "Project management node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 3,
            "toolId": "jwt-payload-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 4,
            "toolId": "ebook-chapter-percentage-calculator",
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
            "toolId": "garden-journal-add-years-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          },
          {
            "order": 6,
            "toolId": "folder-name-days-between-dates-calculator",
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
            "toolId": "resume-bullet-text-reverser",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 8,
            "toolId": "image-alt-text-markdown-table-generator",
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
            "toolId": "commit-message-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 10,
            "toolId": "video-script-percentage-calculator",
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
            "toolId": "file-name-add-weeks-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          },
          {
            "order": 12,
            "toolId": "ad-copy-days-between-dates-calculator",
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
            "toolId": "facebook-bio-uppercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 14,
            "toolId": "robots-rule-markdown-table-generator",
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
            "toolId": "search-query-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 16,
            "toolId": "newsletter-percentage-calculator",
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
            "toolId": "email-subject-add-weeks-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          },
          {
            "order": 18,
            "toolId": "markdown-doc-days-between-dates-calculator",
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
            "toolId": "resume-bullet-extra-space-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 20,
            "toolId": "cloudflare-rule-markdown-table-generator",
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
            "toolId": "javascript-string-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 22,
            "toolId": "hashtag-set-percentage-calculator",
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
            "toolId": "customer-reply-add-weeks-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          },
          {
            "order": 24,
            "toolId": "file-name-days-between-dates-calculator",
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
            "toolId": "facebook-bio-sentence-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 26,
            "toolId": "jwt-payload-markdown-table-generator",
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
            "toolId": "canonical-url-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 28,
            "toolId": "csv-export-percentage-calculator",
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
            "toolId": "code-comment-add-weeks-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          },
          {
            "order": 30,
            "toolId": "youtube-description-days-between-dates-calculator",
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
            "toolId": "recipe-notes-text-reverser",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 32,
            "toolId": "sql-snippet-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 2
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-marketing-audit-026",
    "title": "Online courses marketing audit workflow",
    "field": "Online courses",
    "businessFunction": "marketing",
    "groupId": "group-marketing-audit",
    "outcome": "Use compatible marketing tools to audit the current state and create a prioritized fix list for Online courses.",
    "prompt": "Build a 16-panel workflow for Online courses: audit the current state and create a prioritized fix list using marketing tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible marketing chain.",
    "complexity": "standard-16",
    "layout": "4x4",
    "executionMode": "waterfall",
    "toolCount": 16,
    "panelCount": 16,
    "maxNestedUiDepth": 1,
    "tags": [
      "online-courses",
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
            "toolId": "blog-article-utm-link-builder",
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
            "toolId": "commit-message-markdown-table-generator",
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
            "toolId": "error-message-base64-encoder",
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
            "toolId": "recipe-notes-sentence-case-converter",
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
            "toolId": "free-pdf-page-meta-length-checker",
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
            "toolId": "plant-profile-keyword-density-checker",
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
            "toolId": "raffle-campaign-utm-link-builder",
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
            "toolId": "landing-page-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "api-token-base64-encoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
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
            "toolId": "email-subject-title-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "tool-page-meta-length-checker",
            "role": "check title and description length for web publishing",
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
            "toolId": "garden-guide-keyword-density-checker",
            "role": "extract keyword usage from project text",
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
            "toolId": "instagram-reel-utm-link-builder",
            "role": "create trackable campaign URLs",
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
            "toolId": "store-url-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "sitemap-url-base64-encoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
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
            "toolId": "project-brief-uppercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-sales-audit-027",
    "title": "Online courses sales audit workflow",
    "field": "Online courses",
    "businessFunction": "sales",
    "groupId": "group-sales-audit",
    "outcome": "Use compatible sales tools to audit the current state and create a prioritized fix list for Online courses.",
    "prompt": "Build a micro workflow for Online courses: audit the current state and create a prioritized fix list using sales tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible sales chain.",
    "complexity": "micro-2-4",
    "layout": "2x1",
    "executionMode": "compact-waterfall",
    "toolCount": 4,
    "panelCount": 2,
    "maxNestedUiDepth": 2,
    "tags": [
      "online-courses",
      "sales",
      "audit",
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
            "toolId": "query-string-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "log-line-base64-encoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
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
            "toolId": "header-value-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 4,
            "toolId": "ad-copy-lowercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-support-audit-028",
    "title": "Online courses customer support audit workflow",
    "field": "Online courses",
    "businessFunction": "customer support",
    "groupId": "group-support-audit",
    "outcome": "Use compatible customer support tools to audit the current state and create a prioritized fix list for Online courses.",
    "prompt": "Build a 8-panel workflow for Online courses: audit the current state and create a prioritized fix list using customer support tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible customer support chain.",
    "complexity": "mid-8",
    "layout": "4x2",
    "executionMode": "hybrid",
    "toolCount": 8,
    "panelCount": 8,
    "maxNestedUiDepth": 1,
    "tags": [
      "online-courses",
      "support",
      "audit",
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
            "toolId": "webhook-body-json-minifier",
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
            "toolId": "cover-letter-slug-generator",
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
            "toolId": "json-config-markdown-table-generator",
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
            "toolId": "hashtag-set-add-days-date-calculator",
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
            "toolId": "press-release-csv-to-json-converter",
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
            "toolId": "json-config-json-key-extractor",
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
    "id": "project-online-courses-operations-audit-029",
    "title": "Online courses operations audit workflow",
    "field": "Online courses",
    "businessFunction": "operations",
    "groupId": "group-operations-audit",
    "outcome": "Use compatible operations tools to audit the current state and create a prioritized fix list for Online courses.",
    "prompt": "Build a 16-panel workflow for Online courses: audit the current state and create a prioritized fix list using operations tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible operations chain.",
    "complexity": "standard-16",
    "layout": "4x4",
    "executionMode": "waterfall",
    "toolCount": 16,
    "panelCount": 16,
    "maxNestedUiDepth": 1,
    "tags": [
      "online-courses",
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
            "toolId": "press-release-add-days-date-calculator",
            "role": "project deadlines and future dates",
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
            "toolId": "plant-care-notes-days-between-dates-calculator",
            "role": "measure durations between dates",
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
            "toolId": "video-script-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
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
            "toolId": "log-line-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
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
            "toolId": "commit-message-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "newsletter-text-reverser",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "newsletter-add-days-date-calculator",
            "role": "project deadlines and future dates",
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
            "toolId": "hashtag-set-days-between-dates-calculator",
            "role": "measure durations between dates",
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
            "toolId": "newsletter-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
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
            "toolId": "css-class-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
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
            "toolId": "landing-page-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "community-rule-trim-whitespace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "markdown-doc-add-days-date-calculator",
            "role": "project deadlines and future dates",
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
            "toolId": "brand-name-days-between-dates-calculator",
            "role": "measure durations between dates",
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
            "toolId": "hashtag-set-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
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
            "toolId": "seo-title-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-finance-audit-030",
    "title": "Online courses finance audit workflow",
    "field": "Online courses",
    "businessFunction": "finance",
    "groupId": "group-finance-audit",
    "outcome": "Use compatible finance tools to audit the current state and create a prioritized fix list for Online courses.",
    "prompt": "Build a 64-tool nested waterfall for Online courses: audit the current state and create a prioritized fix list using finance tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible finance chain.",
    "complexity": "nested-64",
    "layout": "4x4",
    "executionMode": "nested-waterfall",
    "toolCount": 64,
    "panelCount": 16,
    "maxNestedUiDepth": 4,
    "tags": [
      "online-courses",
      "finance",
      "audit",
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
            "toolId": "url-slug-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "blog-post-percent-change-calculator",
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
            "toolId": "blog-post-subtraction-calculator",
            "role": "run a lightweight business formula",
            "uiDepth": 1
          },
          {
            "order": 6,
            "toolId": "service-quote-total-calculator",
            "role": "calculate invoice totals from line-item assumptions",
            "uiDepth": 2
          },
          {
            "order": 7,
            "toolId": "meta-description-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 8,
            "toolId": "press-release-percent-change-calculator",
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
            "toolId": "ad-copy-multiplication-calculator",
            "role": "run a lightweight business formula",
            "uiDepth": 3
          },
          {
            "order": 12,
            "toolId": "shipping-invoice-total-calculator",
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
            "toolId": "garden-journal-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 14,
            "toolId": "invoice-memo-percent-change-calculator",
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
            "toolId": "youtube-description-box-volume-calculator",
            "role": "run a lightweight business formula",
            "uiDepth": 1
          },
          {
            "order": 18,
            "toolId": "sponsor-invoice-total-calculator",
            "role": "calculate invoice totals from line-item assumptions",
            "uiDepth": 2
          },
          {
            "order": 19,
            "toolId": "code-comment-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 20,
            "toolId": "ebook-chapter-percent-change-calculator",
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
            "toolId": "video-script-addition-calculator",
            "role": "run a lightweight business formula",
            "uiDepth": 3
          },
          {
            "order": 24,
            "toolId": "store-order-total-calculator",
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
            "toolId": "recipe-notes-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 26,
            "toolId": "video-script-percent-change-calculator",
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
            "toolId": "seo-title-rectangle-area-calculator",
            "role": "run a lightweight business formula",
            "uiDepth": 1
          },
          {
            "order": 30,
            "toolId": "subscription-invoice-total-calculator",
            "role": "calculate invoice totals from line-item assumptions",
            "uiDepth": 2
          },
          {
            "order": 31,
            "toolId": "keyword-list-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 32,
            "toolId": "newsletter-percent-change-calculator",
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
            "toolId": "resume-bullet-division-calculator",
            "role": "run a lightweight business formula",
            "uiDepth": 3
          },
          {
            "order": 36,
            "toolId": "tool-sale-order-total-calculator",
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
            "toolId": "facebook-bio-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 38,
            "toolId": "hashtag-set-percent-change-calculator",
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
            "toolId": "recipe-notes-average-calculator",
            "role": "run a lightweight business formula",
            "uiDepth": 1
          },
          {
            "order": 42,
            "toolId": "wholesale-order-total-calculator",
            "role": "calculate invoice totals from line-item assumptions",
            "uiDepth": 2
          },
          {
            "order": 43,
            "toolId": "ad-copy-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 44,
            "toolId": "csv-export-percent-change-calculator",
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
            "toolId": "press-release-subtraction-calculator",
            "role": "run a lightweight business formula",
            "uiDepth": 3
          },
          {
            "order": 48,
            "toolId": "workshop-invoice-total-calculator",
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
            "toolId": "podcast-notes-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 50,
            "toolId": "resume-bullet-percent-change-calculator",
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
            "toolId": "podcast-notes-multiplication-calculator",
            "role": "run a lightweight business formula",
            "uiDepth": 1
          },
          {
            "order": 54,
            "toolId": "client-invoice-total-calculator",
            "role": "calculate invoice totals from line-item assumptions",
            "uiDepth": 2
          },
          {
            "order": 55,
            "toolId": "instagram-caption-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 56,
            "toolId": "landing-page-percent-change-calculator",
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
            "toolId": "plant-care-notes-box-volume-calculator",
            "role": "run a lightweight business formula",
            "uiDepth": 3
          },
          {
            "order": 60,
            "toolId": "community-order-total-calculator",
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
            "toolId": "domain-list-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 62,
            "toolId": "file-name-percent-change-calculator",
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
    "id": "project-online-courses-hr-audit-031",
    "title": "Online courses HR audit workflow",
    "field": "Online courses",
    "businessFunction": "HR",
    "groupId": "group-hr-audit",
    "outcome": "Use compatible HR tools to audit the current state and create a prioritized fix list for Online courses.",
    "prompt": "Build a micro workflow for Online courses: audit the current state and create a prioritized fix list using HR tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible HR chain.",
    "complexity": "micro-2-4",
    "layout": "2x1",
    "executionMode": "compact-waterfall",
    "toolCount": 4,
    "panelCount": 2,
    "maxNestedUiDepth": 2,
    "tags": [
      "online-courses",
      "hr",
      "audit",
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
            "toolId": "email-subject-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "sitemap-url-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
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
            "toolId": "file-name-password-generator",
            "role": "create secure passwords for the project",
            "uiDepth": 1
          },
          {
            "order": 4,
            "toolId": "search-query-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 2
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-content-audit-032",
    "title": "Online courses content audit workflow",
    "field": "Online courses",
    "businessFunction": "content",
    "groupId": "group-content-audit",
    "outcome": "Use compatible content tools to audit the current state and create a prioritized fix list for Online courses.",
    "prompt": "Build a 16-panel workflow for Online courses: audit the current state and create a prioritized fix list using content tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible content chain.",
    "complexity": "standard-16",
    "layout": "4x4",
    "executionMode": "waterfall",
    "toolCount": 16,
    "panelCount": 16,
    "maxNestedUiDepth": 1,
    "tags": [
      "online-courses",
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
            "toolId": "faq-page-keyword-density-checker",
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
            "toolId": "schema-markup-markdown-table-generator",
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
            "toolId": "local-service-page-utm-link-builder",
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
            "toolId": "community-rule-uppercase-converter",
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
            "toolId": "garden-guide-meta-length-checker",
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
            "toolId": "blog-article-keyword-density-checker",
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
            "toolId": "commit-message-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "facebook-post-utm-link-builder",
            "role": "create trackable campaign URLs",
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
            "toolId": "newsletter-find-and-replace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
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
            "toolId": "youtube-description-meta-length-checker",
            "role": "check title and description length for web publishing",
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
            "toolId": "raffle-campaign-keyword-density-checker",
            "role": "extract keyword usage from project text",
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
            "toolId": "landing-page-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "affiliate-page-utm-link-builder",
            "role": "create trackable campaign URLs",
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
            "toolId": "community-rule-sentence-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-seo-audit-033",
    "title": "Online courses SEO audit workflow",
    "field": "Online courses",
    "businessFunction": "SEO",
    "groupId": "group-seo-audit",
    "outcome": "Use compatible SEO tools to audit the current state and create a prioritized fix list for Online courses.",
    "prompt": "Build a micro workflow for Online courses: audit the current state and create a prioritized fix list using SEO tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible SEO chain.",
    "complexity": "micro-2-4",
    "layout": "1x1",
    "executionMode": "compact-waterfall",
    "toolCount": 3,
    "panelCount": 1,
    "maxNestedUiDepth": 3,
    "tags": [
      "online-courses",
      "seo",
      "audit",
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
            "toolId": "code-comment-title-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "svg-snippet-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 2
          },
          {
            "order": 3,
            "toolId": "homepage-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 3
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-social-audit-034",
    "title": "Online courses social media audit workflow",
    "field": "Online courses",
    "businessFunction": "social media",
    "groupId": "group-social-audit",
    "outcome": "Use compatible social media tools to audit the current state and create a prioritized fix list for Online courses.",
    "prompt": "Build a 8-panel workflow for Online courses: audit the current state and create a prioritized fix list using social media tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible social media chain.",
    "complexity": "mid-8",
    "layout": "2x4",
    "executionMode": "hybrid",
    "toolCount": 8,
    "panelCount": 8,
    "maxNestedUiDepth": 1,
    "tags": [
      "online-courses",
      "social",
      "audit",
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
            "toolId": "invoice-memo-markdown-table-generator",
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
            "toolId": "hashtag-set-sentence-case-converter",
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
            "toolId": "raffle-campaign-meta-length-checker",
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
            "toolId": "calculator-page-keyword-density-checker",
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
            "toolId": "developer-tool-page-utm-link-builder",
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
            "toolId": "email-body-base64-decoder",
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
            "toolId": "search-query-markdown-table-generator",
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
            "toolId": "shipping-note-text-reverser",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-email-audit-035",
    "title": "Online courses email audit workflow",
    "field": "Online courses",
    "businessFunction": "email",
    "groupId": "group-email-audit",
    "outcome": "Use compatible email tools to audit the current state and create a prioritized fix list for Online courses.",
    "prompt": "Build a 32-tool nested workbench for Online courses: audit the current state and create a prioritized fix list using email tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible email chain.",
    "complexity": "advanced-32",
    "layout": "4x4",
    "executionMode": "hybrid-waterfall",
    "toolCount": 32,
    "panelCount": 16,
    "maxNestedUiDepth": 2,
    "tags": [
      "online-courses",
      "email",
      "audit",
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
            "toolId": "landing-page-text-reverser",
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
            "toolId": "calculator-page-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 1
          },
          {
            "order": 4,
            "toolId": "faq-page-utm-link-builder",
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
            "toolId": "json-config-base64-decoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 1
          },
          {
            "order": 6,
            "toolId": "garden-journal-markdown-table-generator",
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
            "toolId": "ad-copy-trim-whitespace-tool",
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
            "toolId": "pinterest-pin-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 1
          },
          {
            "order": 10,
            "toolId": "blog-article-utm-link-builder",
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
            "toolId": "csv-cell-base64-decoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 1
          },
          {
            "order": 12,
            "toolId": "recipe-notes-markdown-table-generator",
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
            "toolId": "landing-page-extra-space-remover",
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
            "toolId": "contact-page-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 1
          },
          {
            "order": 16,
            "toolId": "raffle-campaign-utm-link-builder",
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
            "toolId": "uuid-list-base64-decoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 1
          },
          {
            "order": 18,
            "toolId": "base-url-markdown-table-generator",
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
            "toolId": "ad-copy-lowercase-converter",
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
            "toolId": "policy-page-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 1
          },
          {
            "order": 22,
            "toolId": "instagram-reel-utm-link-builder",
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
            "toolId": "response-text-base64-decoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 1
          },
          {
            "order": 24,
            "toolId": "invoice-memo-markdown-table-generator",
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
            "toolId": "keyword-list-text-reverser",
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
            "toolId": "developer-tool-page-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 1
          },
          {
            "order": 28,
            "toolId": "developer-tool-page-utm-link-builder",
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
            "toolId": "ip-allowlist-base64-decoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 1
          },
          {
            "order": 30,
            "toolId": "search-query-markdown-table-generator",
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
            "toolId": "youtube-description-trim-whitespace-tool",
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
    "id": "project-online-courses-data-audit-036",
    "title": "Online courses data cleanup audit workflow",
    "field": "Online courses",
    "businessFunction": "data cleanup",
    "groupId": "group-data-audit",
    "outcome": "Use compatible data cleanup tools to audit the current state and create a prioritized fix list for Online courses.",
    "prompt": "Build a 8-panel workflow for Online courses: audit the current state and create a prioritized fix list using data cleanup tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible data cleanup chain.",
    "complexity": "mid-8",
    "layout": "4x2",
    "executionMode": "hybrid",
    "toolCount": 8,
    "panelCount": 8,
    "maxNestedUiDepth": 1,
    "tags": [
      "online-courses",
      "data",
      "audit",
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
            "toolId": "jwt-payload-json-minifier",
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
            "toolId": "customer-reply-markdown-table-generator",
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
            "toolId": "sitemap-entry-uppercase-converter",
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
            "toolId": "regex-pattern-base64-decoder",
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
            "toolId": "landing-page-uuid-generator",
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
            "toolId": "cookie-value-csv-to-json-converter",
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
            "toolId": "webhook-body-json-formatter",
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
            "toolId": "newsletter-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-reporting-audit-037",
    "title": "Online courses reporting audit workflow",
    "field": "Online courses",
    "businessFunction": "reporting",
    "groupId": "group-reporting-audit",
    "outcome": "Use compatible reporting tools to audit the current state and create a prioritized fix list for Online courses.",
    "prompt": "Build a micro workflow for Online courses: audit the current state and create a prioritized fix list using reporting tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible reporting chain.",
    "complexity": "micro-2-4",
    "layout": "1x1",
    "executionMode": "compact-waterfall",
    "toolCount": 3,
    "panelCount": 1,
    "maxNestedUiDepth": 3,
    "tags": [
      "online-courses",
      "reporting",
      "audit",
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
            "toolId": "hashtag-set-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "json-snippet-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 2
          },
          {
            "order": 3,
            "toolId": "coupon-text-trim-whitespace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 3
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-compliance-audit-038",
    "title": "Online courses compliance audit workflow",
    "field": "Online courses",
    "businessFunction": "compliance",
    "groupId": "group-compliance-audit",
    "outcome": "Use compatible compliance tools to audit the current state and create a prioritized fix list for Online courses.",
    "prompt": "Build a 16-panel workflow for Online courses: audit the current state and create a prioritized fix list using compliance tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible compliance chain.",
    "complexity": "standard-16",
    "layout": "4x4",
    "executionMode": "waterfall",
    "toolCount": 16,
    "panelCount": 16,
    "maxNestedUiDepth": 1,
    "tags": [
      "online-courses",
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
            "toolId": "press-release-add-years-date-calculator",
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
            "toolId": "instagram-caption-markdown-table-generator",
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
            "toolId": "sitemap-url-json-minifier",
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
            "toolId": "landing-page-find-and-replace-tool",
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
            "toolId": "facebook-bio-days-between-dates-calculator",
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
            "toolId": "newsletter-add-years-date-calculator",
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
            "toolId": "schema-markup-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "html-snippet-json-key-extractor",
            "role": "format, validate, or extract useful keys from JSON",
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
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
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
            "toolId": "ad-copy-sentence-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "url-slug-days-between-dates-calculator",
            "role": "measure durations between dates",
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
            "toolId": "markdown-doc-add-years-date-calculator",
            "role": "project deadlines and future dates",
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
            "toolId": "commit-message-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "robots-rule-json-minifier",
            "role": "format, validate, or extract useful keys from JSON",
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
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-scheduling-audit-039",
    "title": "Online courses scheduling audit workflow",
    "field": "Online courses",
    "businessFunction": "scheduling",
    "groupId": "group-scheduling-audit",
    "outcome": "Use compatible scheduling tools to audit the current state and create a prioritized fix list for Online courses.",
    "prompt": "Build a micro workflow for Online courses: audit the current state and create a prioritized fix list using scheduling tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible scheduling chain.",
    "complexity": "micro-2-4",
    "layout": "2x1",
    "executionMode": "compact-waterfall",
    "toolCount": 4,
    "panelCount": 2,
    "maxNestedUiDepth": 2,
    "tags": [
      "online-courses",
      "scheduling",
      "audit",
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
            "toolId": "html-block-lowercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "header-value-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
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
            "toolId": "product-listing-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          },
          {
            "order": 4,
            "toolId": "html-block-add-months-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 2
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-product-audit-040",
    "title": "Online courses product audit workflow",
    "field": "Online courses",
    "businessFunction": "product",
    "groupId": "group-product-audit",
    "outcome": "Use compatible product tools to audit the current state and create a prioritized fix list for Online courses.",
    "prompt": "Build a 64-tool nested waterfall for Online courses: audit the current state and create a prioritized fix list using product tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible product chain.",
    "complexity": "nested-64",
    "layout": "4x4",
    "executionMode": "nested-waterfall",
    "toolCount": 64,
    "panelCount": 16,
    "maxNestedUiDepth": 4,
    "tags": [
      "online-courses",
      "product",
      "audit",
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
            "toolId": "environment-value-json-minifier",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "press-release-uppercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 3,
            "toolId": "blog-post-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 3
          },
          {
            "order": 4,
            "toolId": "response-text-markdown-table-generator",
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
            "toolId": "json-snippet-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 6,
            "toolId": "meta-description-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 2
          },
          {
            "order": 7,
            "toolId": "robots-rule-json-formatter",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 3
          },
          {
            "order": 8,
            "toolId": "domain-list-extra-space-remover",
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
            "toolId": "regex-pattern-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 10,
            "toolId": "canonical-url-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 2
          },
          {
            "order": 11,
            "toolId": "email-subject-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 12,
            "toolId": "garden-journal-percent-change-calculator",
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
            "toolId": "css-class-json-key-extractor",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 1
          },
          {
            "order": 14,
            "toolId": "press-release-sentence-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 15,
            "toolId": "image-alt-text-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 3
          },
          {
            "order": 16,
            "toolId": "json-config-markdown-table-generator",
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
            "toolId": "youtube-description-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 18,
            "toolId": "code-comment-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 2
          },
          {
            "order": 19,
            "toolId": "python-string-json-formatter",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 3
          },
          {
            "order": 20,
            "toolId": "customer-reply-text-reverser",
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
            "toolId": "api-token-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 22,
            "toolId": "sitemap-url-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 2
          },
          {
            "order": 23,
            "toolId": "plant-care-notes-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 24,
            "toolId": "recipe-notes-percent-change-calculator",
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
            "toolId": "api-token-json-key-extractor",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 1
          },
          {
            "order": 26,
            "toolId": "podcast-notes-uppercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 27,
            "toolId": "recipe-notes-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 3
          },
          {
            "order": 28,
            "toolId": "customer-reply-markdown-table-generator",
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
            "toolId": "html-block-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 30,
            "toolId": "keyword-list-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 2
          },
          {
            "order": 31,
            "toolId": "jwt-payload-json-formatter",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 3
          },
          {
            "order": 32,
            "toolId": "customer-reply-extra-space-remover",
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
            "toolId": "header-value-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 34,
            "toolId": "newsletter-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 2
          },
          {
            "order": 35,
            "toolId": "customer-reply-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 36,
            "toolId": "facebook-bio-percent-change-calculator",
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
            "toolId": "sql-snippet-json-key-extractor",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 1
          },
          {
            "order": 38,
            "toolId": "podcast-notes-sentence-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 39,
            "toolId": "yaml-value-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 3
          },
          {
            "order": 40,
            "toolId": "tracking-link-markdown-table-generator",
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
            "toolId": "seo-title-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 42,
            "toolId": "ad-copy-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 2
          },
          {
            "order": 43,
            "toolId": "javascript-string-json-formatter",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 3
          },
          {
            "order": 44,
            "toolId": "csv-export-text-reverser",
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
            "toolId": "python-string-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 46,
            "toolId": "error-message-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 2
          },
          {
            "order": 47,
            "toolId": "markdown-doc-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 48,
            "toolId": "podcast-notes-percent-change-calculator",
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
            "toolId": "schema-markup-json-key-extractor",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 1
          },
          {
            "order": 50,
            "toolId": "plant-care-notes-uppercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 51,
            "toolId": "garden-journal-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 3
          },
          {
            "order": 52,
            "toolId": "prompt-text-markdown-table-generator",
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
            "toolId": "folder-name-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 54,
            "toolId": "instagram-caption-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 2
          },
          {
            "order": 55,
            "toolId": "environment-value-json-formatter",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 3
          },
          {
            "order": 56,
            "toolId": "csv-export-extra-space-remover",
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
            "toolId": "worker-route-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 58,
            "toolId": "yaml-value-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 2
          },
          {
            "order": 59,
            "toolId": "brand-name-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 60,
            "toolId": "domain-list-percent-change-calculator",
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
            "toolId": "query-string-json-key-extractor",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 1
          },
          {
            "order": 62,
            "toolId": "plant-care-notes-sentence-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 63,
            "toolId": "product-listing-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 3
          },
          {
            "order": 64,
            "toolId": "html-snippet-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 4
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-ux-audit-041",
    "title": "Online courses UX/UI audit workflow",
    "field": "Online courses",
    "businessFunction": "UX/UI",
    "groupId": "group-ux-audit",
    "outcome": "Use compatible UX/UI tools to audit the current state and create a prioritized fix list for Online courses.",
    "prompt": "Build a 16-panel workflow for Online courses: audit the current state and create a prioritized fix list using UX/UI tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible UX/UI chain.",
    "complexity": "standard-16",
    "layout": "4x4",
    "executionMode": "waterfall",
    "toolCount": 16,
    "panelCount": 16,
    "maxNestedUiDepth": 1,
    "tags": [
      "online-courses",
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
            "toolId": "video-script-hex-to-rgb-converter",
            "role": "convert brand colors and palette values",
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
            "toolId": "garden-journal-color-contrast-checker",
            "role": "check readability and accessibility contrast",
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
            "toolId": "ad-copy-slug-generator",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "sql-snippet-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "developer-tool-page-meta-length-checker",
            "role": "check title and description length for web publishing",
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
            "toolId": "sitemap-page-keyword-density-checker",
            "role": "extract keyword usage from project text",
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
            "toolId": "order-note-hex-to-rgb-converter",
            "role": "convert brand colors and palette values",
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
            "toolId": "product-sku-color-contrast-checker",
            "role": "check readability and accessibility contrast",
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
            "toolId": "keyword-list-trim-whitespace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "dns-record-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "product-page-meta-length-checker",
            "role": "check title and description length for web publishing",
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
            "toolId": "local-service-page-keyword-density-checker",
            "role": "extract keyword usage from project text",
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
            "toolId": "facebook-bio-hex-to-rgb-converter",
            "role": "convert brand colors and palette values",
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
            "toolId": "customer-reply-color-contrast-checker",
            "role": "check readability and accessibility contrast",
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
            "toolId": "ad-copy-blank-line-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "oauth-state-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-web-launch-audit-042",
    "title": "Online courses web launch audit workflow",
    "field": "Online courses",
    "businessFunction": "web launch",
    "groupId": "group-web-launch-audit",
    "outcome": "Use compatible web launch tools to audit the current state and create a prioritized fix list for Online courses.",
    "prompt": "Build a 8-panel workflow for Online courses: audit the current state and create a prioritized fix list using web launch tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible web launch chain.",
    "complexity": "mid-8",
    "layout": "2x4",
    "executionMode": "hybrid",
    "toolCount": 8,
    "panelCount": 8,
    "maxNestedUiDepth": 1,
    "tags": [
      "online-courses",
      "web-launch",
      "audit",
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
            "toolId": "product-sku-color-contrast-checker",
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
            "toolId": "facebook-bio-meta-length-checker",
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
            "toolId": "policy-page-keyword-density-checker",
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
            "toolId": "review-page-utm-link-builder",
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
            "toolId": "callback-url-json-minifier",
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
            "toolId": "blog-post-hex-to-rgb-converter",
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
            "toolId": "customer-reply-color-contrast-checker",
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
            "toolId": "review-page-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-developer-audit-043",
    "title": "Online courses developer audit workflow",
    "field": "Online courses",
    "businessFunction": "developer",
    "groupId": "group-developer-audit",
    "outcome": "Use compatible developer tools to audit the current state and create a prioritized fix list for Online courses.",
    "prompt": "Build a micro workflow for Online courses: audit the current state and create a prioritized fix list using developer tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible developer chain.",
    "complexity": "micro-2-4",
    "layout": "2x1",
    "executionMode": "compact-waterfall",
    "toolCount": 4,
    "panelCount": 2,
    "maxNestedUiDepth": 2,
    "tags": [
      "online-courses",
      "developer",
      "audit",
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
            "toolId": "community-rule-uuid-generator",
            "role": "create unique IDs for assets, records, or tasks",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "search-index-password-generator",
            "role": "create secure passwords for the project",
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
            "toolId": "instagram-caption-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 4,
            "toolId": "base-url-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 2
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-security-audit-044",
    "title": "Online courses security audit workflow",
    "field": "Online courses",
    "businessFunction": "security",
    "groupId": "group-security-audit",
    "outcome": "Use compatible security tools to audit the current state and create a prioritized fix list for Online courses.",
    "prompt": "Build a 16-panel workflow for Online courses: audit the current state and create a prioritized fix list using security tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible security chain.",
    "complexity": "standard-16",
    "layout": "4x4",
    "executionMode": "waterfall",
    "toolCount": 16,
    "panelCount": 16,
    "maxNestedUiDepth": 1,
    "tags": [
      "online-courses",
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
            "toolId": "api-token-json-key-extractor",
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
            "toolId": "meta-description-text-reverser",
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
            "toolId": "plant-care-notes-markdown-table-generator",
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
            "toolId": "email-subject-password-generator",
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
            "toolId": "youtube-description-uuid-generator",
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
            "toolId": "jwt-payload-url-decoder",
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
            "toolId": "jwt-payload-json-formatter",
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
            "toolId": "code-comment-trim-whitespace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "webhook-body-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "product-listing-password-generator",
            "role": "create secure passwords for the project",
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
            "toolId": "json-snippet-uuid-generator",
            "role": "create unique IDs for assets, records, or tasks",
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
            "toolId": "dns-record-url-decoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
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
            "toolId": "sql-snippet-json-key-extractor",
            "role": "format, validate, or extract useful keys from JSON",
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
            "toolId": "meta-description-extra-space-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "garden-journal-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "cover-letter-password-generator",
            "role": "create secure passwords for the project",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-training-audit-045",
    "title": "Online courses training audit workflow",
    "field": "Online courses",
    "businessFunction": "training",
    "groupId": "group-training-audit",
    "outcome": "Use compatible training tools to audit the current state and create a prioritized fix list for Online courses.",
    "prompt": "Build a 32-tool nested workbench for Online courses: audit the current state and create a prioritized fix list using training tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible training chain.",
    "complexity": "advanced-32",
    "layout": "4x4",
    "executionMode": "hybrid-waterfall",
    "toolCount": 32,
    "panelCount": 16,
    "maxNestedUiDepth": 2,
    "tags": [
      "online-courses",
      "training",
      "audit",
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
            "toolId": "regex-pattern-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "ebook-chapter-percentage-calculator",
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
            "toolId": "sitemap-entry-find-and-replace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 4,
            "toolId": "environment-value-markdown-table-generator",
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
            "toolId": "press-release-add-days-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          },
          {
            "order": 6,
            "toolId": "url-slug-days-between-dates-calculator",
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
            "toolId": "image-alt-text-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 8,
            "toolId": "video-script-percentage-calculator",
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
            "toolId": "hashtag-set-slug-generator",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 10,
            "toolId": "product-listing-markdown-table-generator",
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
            "toolId": "newsletter-add-days-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          },
          {
            "order": 12,
            "toolId": "keyword-list-days-between-dates-calculator",
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
            "toolId": "api-token-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 14,
            "toolId": "newsletter-percentage-calculator",
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
            "toolId": "shipping-note-title-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 16,
            "toolId": "xml-node-markdown-table-generator",
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
            "toolId": "markdown-doc-add-days-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          },
          {
            "order": 18,
            "toolId": "email-subject-days-between-dates-calculator",
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
            "toolId": "recipe-notes-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 20,
            "toolId": "hashtag-set-percentage-calculator",
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
            "toolId": "hashtag-set-blank-line-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 22,
            "toolId": "header-value-markdown-table-generator",
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
            "toolId": "keyword-list-add-days-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          },
          {
            "order": 24,
            "toolId": "seo-title-days-between-dates-calculator",
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
            "toolId": "header-value-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 26,
            "toolId": "csv-export-percentage-calculator",
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
            "toolId": "shipping-note-find-and-replace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 28,
            "toolId": "regex-pattern-markdown-table-generator",
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
            "toolId": "invoice-memo-add-days-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          },
          {
            "order": 30,
            "toolId": "json-snippet-days-between-dates-calculator",
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
            "toolId": "yaml-value-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 32,
            "toolId": "resume-bullet-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 2
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-inventory-audit-046",
    "title": "Online courses inventory audit workflow",
    "field": "Online courses",
    "businessFunction": "inventory",
    "groupId": "group-inventory-audit",
    "outcome": "Use compatible inventory tools to audit the current state and create a prioritized fix list for Online courses.",
    "prompt": "Build a 8-panel workflow for Online courses: audit the current state and create a prioritized fix list using inventory tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible inventory chain.",
    "complexity": "mid-8",
    "layout": "2x4",
    "executionMode": "hybrid",
    "toolCount": 8,
    "panelCount": 8,
    "maxNestedUiDepth": 1,
    "tags": [
      "online-courses",
      "inventory",
      "audit",
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
            "toolId": "customer-reply-add-days-date-calculator",
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
            "toolId": "javascript-string-csv-to-json-converter",
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
            "toolId": "keyword-list-percentage-calculator",
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
            "toolId": "inch-to-nanometer-converter",
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
            "toolId": "user-message-markdown-table-generator",
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
            "toolId": "garden-journal-lowercase-converter",
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
            "toolId": "code-comment-add-days-date-calculator",
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
            "toolId": "canonical-url-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-pricing-audit-047",
    "title": "Online courses pricing audit workflow",
    "field": "Online courses",
    "businessFunction": "pricing",
    "groupId": "group-pricing-audit",
    "outcome": "Use compatible pricing tools to audit the current state and create a prioritized fix list for Online courses.",
    "prompt": "Build a 16-panel workflow for Online courses: audit the current state and create a prioritized fix list using pricing tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible pricing chain.",
    "complexity": "standard-16",
    "layout": "4x4",
    "executionMode": "waterfall",
    "toolCount": 16,
    "panelCount": 16,
    "maxNestedUiDepth": 1,
    "tags": [
      "online-courses",
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
            "toolId": "json-snippet-percent-change-calculator",
            "role": "compare before/after values",
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
            "toolId": "meta-description-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
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
            "toolId": "client-invoice-total-calculator",
            "role": "calculate invoice totals from line-item assumptions",
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
            "toolId": "email-subject-subtraction-calculator",
            "role": "run a lightweight business formula",
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
            "toolId": "compound-interest-calculator",
            "role": "model long-term growth or recurring gains",
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
            "toolId": "plant-care-notes-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "email-subject-percent-change-calculator",
            "role": "compare before/after values",
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
            "toolId": "garden-journal-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
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
            "toolId": "community-order-total-calculator",
            "role": "calculate invoice totals from line-item assumptions",
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
            "toolId": "ebook-chapter-multiplication-calculator",
            "role": "run a lightweight business formula",
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
            "toolId": "compound-interest-calculator",
            "role": "model long-term growth or recurring gains",
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
            "toolId": "webhook-body-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "youtube-description-percent-change-calculator",
            "role": "compare before/after values",
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
            "toolId": "code-comment-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
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
            "toolId": "consulting-invoice-total-calculator",
            "role": "calculate invoice totals from line-item assumptions",
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
            "toolId": "domain-list-box-volume-calculator",
            "role": "run a lightweight business formula",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-outreach-audit-048",
    "title": "Online courses outreach audit workflow",
    "field": "Online courses",
    "businessFunction": "outreach",
    "groupId": "group-outreach-audit",
    "outcome": "Use compatible outreach tools to audit the current state and create a prioritized fix list for Online courses.",
    "prompt": "Build a 8-panel workflow for Online courses: audit the current state and create a prioritized fix list using outreach tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible outreach chain.",
    "complexity": "mid-8",
    "layout": "4x2",
    "executionMode": "hybrid",
    "toolCount": 8,
    "panelCount": 8,
    "maxNestedUiDepth": 1,
    "tags": [
      "online-courses",
      "outreach",
      "audit",
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
            "toolId": "category-page-meta-length-checker",
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
            "toolId": "sitemap-page-utm-link-builder",
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
            "toolId": "image-alt-text-url-encoder",
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
            "toolId": "blog-post-keyword-density-checker",
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
            "toolId": "cookie-value-markdown-table-generator",
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
            "toolId": "resume-bullet-extra-space-remover",
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
            "toolId": "plant-profile-meta-length-checker",
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
            "toolId": "local-service-page-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-research-audit-049",
    "title": "Online courses research audit workflow",
    "field": "Online courses",
    "businessFunction": "research",
    "groupId": "group-research-audit",
    "outcome": "Use compatible research tools to audit the current state and create a prioritized fix list for Online courses.",
    "prompt": "Build a micro workflow for Online courses: audit the current state and create a prioritized fix list using research tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible research chain.",
    "complexity": "micro-2-4",
    "layout": "1x1",
    "executionMode": "compact-waterfall",
    "toolCount": 3,
    "panelCount": 1,
    "maxNestedUiDepth": 3,
    "tags": [
      "online-courses",
      "research",
      "audit",
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
            "toolId": "yaml-value-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "robots-rule-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 2
          },
          {
            "order": 3,
            "toolId": "csv-cell-json-minifier",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 3
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-project-management-audit-050",
    "title": "Online courses project management audit workflow",
    "field": "Online courses",
    "businessFunction": "project management",
    "groupId": "group-project-management-audit",
    "outcome": "Use compatible project management tools to audit the current state and create a prioritized fix list for Online courses.",
    "prompt": "Build a 64-tool nested waterfall for Online courses: audit the current state and create a prioritized fix list using project management tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible project management chain.",
    "complexity": "nested-64",
    "layout": "4x4",
    "executionMode": "nested-waterfall",
    "toolCount": 64,
    "panelCount": 16,
    "maxNestedUiDepth": 4,
    "tags": [
      "online-courses",
      "project-management",
      "audit",
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
            "toolId": "cloudflare-rule-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "dns-record-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 2
          },
          {
            "order": 3,
            "toolId": "hashtag-set-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 4,
            "toolId": "press-release-add-years-date-calculator",
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
            "toolId": "json-snippet-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          },
          {
            "order": 6,
            "toolId": "ebook-chapter-blank-line-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 7,
            "toolId": "jwt-payload-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 8,
            "toolId": "store-url-csv-to-json-converter",
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
            "toolId": "csv-export-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 10,
            "toolId": "newsletter-add-years-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 2
          },
          {
            "order": 11,
            "toolId": "domain-list-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 3
          },
          {
            "order": 12,
            "toolId": "product-sku-find-and-replace-tool",
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
            "toolId": "sql-snippet-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 14,
            "toolId": "markdown-doc-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 2
          },
          {
            "order": 15,
            "toolId": "resume-bullet-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 16,
            "toolId": "markdown-doc-add-years-date-calculator",
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
            "toolId": "recipe-notes-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          },
          {
            "order": 18,
            "toolId": "donation-page-slug-generator",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 19,
            "toolId": "dns-record-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 20,
            "toolId": "csv-cell-csv-to-json-converter",
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
            "toolId": "landing-page-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 22,
            "toolId": "keyword-list-add-years-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 2
          },
          {
            "order": 23,
            "toolId": "invoice-memo-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 3
          },
          {
            "order": 24,
            "toolId": "product-listing-title-case-converter",
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
            "toolId": "oauth-state-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 26,
            "toolId": "sitemap-url-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 2
          },
          {
            "order": 27,
            "toolId": "file-name-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 28,
            "toolId": "invoice-memo-add-years-date-calculator",
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
            "toolId": "customer-reply-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          },
          {
            "order": 30,
            "toolId": "domain-list-uppercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 31,
            "toolId": "user-message-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 32,
            "toolId": "landing-page-csv-to-json-converter",
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
            "toolId": "blog-post-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 34,
            "toolId": "html-block-add-years-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 2
          },
          {
            "order": 35,
            "toolId": "product-listing-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 3
          },
          {
            "order": 36,
            "toolId": "product-listing-find-and-replace-tool",
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
            "toolId": "facebook-bio-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 38,
            "toolId": "cookie-value-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 2
          },
          {
            "order": 39,
            "toolId": "press-release-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 40,
            "toolId": "garden-journal-add-years-date-calculator",
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
            "toolId": "instagram-caption-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          },
          {
            "order": 42,
            "toolId": "domain-list-sentence-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 43,
            "toolId": "python-string-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 44,
            "toolId": "secret-placeholder-csv-to-json-converter",
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
            "toolId": "invoice-memo-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 46,
            "toolId": "file-name-add-weeks-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 2
          },
          {
            "order": 47,
            "toolId": "csv-export-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 3
          },
          {
            "order": 48,
            "toolId": "press-release-title-case-converter",
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
            "toolId": "youtube-description-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 50,
            "toolId": "json-config-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 2
          },
          {
            "order": 51,
            "toolId": "ebook-chapter-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 52,
            "toolId": "email-subject-add-weeks-date-calculator",
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
            "toolId": "press-release-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          },
          {
            "order": 54,
            "toolId": "customer-reply-uppercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 55,
            "toolId": "image-alt-text-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 56,
            "toolId": "cloudflare-rule-csv-to-json-converter",
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
            "toolId": "video-script-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 58,
            "toolId": "customer-reply-add-weeks-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 2
          },
          {
            "order": 59,
            "toolId": "html-block-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 3
          },
          {
            "order": 60,
            "toolId": "press-release-find-and-replace-tool",
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
            "toolId": "robots-rule-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 62,
            "toolId": "schema-markup-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 2
          },
          {
            "order": 63,
            "toolId": "newsletter-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 64,
            "toolId": "code-comment-add-weeks-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 4
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-marketing-campaign-051",
    "title": "Online courses marketing campaign workflow",
    "field": "Online courses",
    "businessFunction": "marketing",
    "groupId": "group-marketing-campaign",
    "outcome": "Use compatible marketing tools to prepare a launch campaign with trackable outputs for Online courses.",
    "prompt": "Build a micro workflow for Online courses: prepare a launch campaign with trackable outputs using marketing tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible marketing chain.",
    "complexity": "micro-2-4",
    "layout": "2x1",
    "executionMode": "compact-waterfall",
    "toolCount": 4,
    "panelCount": 2,
    "maxNestedUiDepth": 2,
    "tags": [
      "online-courses",
      "marketing",
      "campaign",
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
            "toolId": "docker-tag-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "email-body-base64-encoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
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
            "toolId": "domain-list-title-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 4,
            "toolId": "free-pdf-page-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 2
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-sales-campaign-052",
    "title": "Online courses sales campaign workflow",
    "field": "Online courses",
    "businessFunction": "sales",
    "groupId": "group-sales-campaign",
    "outcome": "Use compatible sales tools to prepare a launch campaign with trackable outputs for Online courses.",
    "prompt": "Build a 8-panel workflow for Online courses: prepare a launch campaign with trackable outputs using sales tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible sales chain.",
    "complexity": "mid-8",
    "layout": "4x2",
    "executionMode": "hybrid",
    "toolCount": 8,
    "panelCount": 8,
    "maxNestedUiDepth": 1,
    "tags": [
      "online-courses",
      "sales",
      "campaign",
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
            "toolId": "json-config-base64-encoder",
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
            "toolId": "callback-url-csv-to-json-converter",
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
            "toolId": "instagram-caption-title-case-converter",
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
            "toolId": "youtube-description-utm-link-builder",
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
            "toolId": "brand-name-percentage-calculator",
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
            "toolId": "commit-message-markdown-table-generator",
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
            "toolId": "csv-cell-base64-encoder",
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
            "toolId": "response-text-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-support-campaign-053",
    "title": "Online courses customer support campaign workflow",
    "field": "Online courses",
    "businessFunction": "customer support",
    "groupId": "group-support-campaign",
    "outcome": "Use compatible customer support tools to prepare a launch campaign with trackable outputs for Online courses.",
    "prompt": "Build a 16-panel workflow for Online courses: prepare a launch campaign with trackable outputs using customer support tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible customer support chain.",
    "complexity": "standard-16",
    "layout": "4x4",
    "executionMode": "waterfall",
    "toolCount": 16,
    "panelCount": 16,
    "maxNestedUiDepth": 1,
    "tags": [
      "online-courses",
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
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
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
            "toolId": "meeting-notes-uppercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "newsletter-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "product-listing-add-days-date-calculator",
            "role": "project deadlines and future dates",
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
            "toolId": "header-value-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
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
            "toolId": "csv-cell-json-formatter",
            "role": "format, validate, or extract useful keys from JSON",
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
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
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
            "toolId": "code-comment-extra-space-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "tracking-link-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "plant-care-notes-add-days-date-calculator",
            "role": "project deadlines and future dates",
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
            "toolId": "yaml-value-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
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
            "toolId": "python-string-json-minifier",
            "role": "format, validate, or extract useful keys from JSON",
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
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
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
            "toolId": "meeting-notes-sentence-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "error-message-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "meta-description-add-days-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-operations-campaign-054",
    "title": "Online courses operations campaign workflow",
    "field": "Online courses",
    "businessFunction": "operations",
    "groupId": "group-operations-campaign",
    "outcome": "Use compatible operations tools to prepare a launch campaign with trackable outputs for Online courses.",
    "prompt": "Build a 8-panel workflow for Online courses: prepare a launch campaign with trackable outputs using operations tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible operations chain.",
    "complexity": "mid-8",
    "layout": "2x4",
    "executionMode": "hybrid",
    "toolCount": 8,
    "panelCount": 8,
    "maxNestedUiDepth": 1,
    "tags": [
      "online-courses",
      "operations",
      "campaign",
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
            "toolId": "youtube-description-days-between-dates-calculator",
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
            "toolId": "csv-export-percentage-calculator",
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
            "toolId": "email-body-json-to-csv-converter",
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
            "toolId": "docker-tag-markdown-table-generator",
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
            "toolId": "blog-post-uppercase-converter",
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
            "toolId": "csv-export-add-days-date-calculator",
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
            "toolId": "landing-page-days-between-dates-calculator",
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
            "toolId": "resume-bullet-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-finance-campaign-055",
    "title": "Online courses finance campaign workflow",
    "field": "Online courses",
    "businessFunction": "finance",
    "groupId": "group-finance-campaign",
    "outcome": "Use compatible finance tools to prepare a launch campaign with trackable outputs for Online courses.",
    "prompt": "Build a 32-tool nested workbench for Online courses: prepare a launch campaign with trackable outputs using finance tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible finance chain.",
    "complexity": "advanced-32",
    "layout": "4x4",
    "executionMode": "hybrid-waterfall",
    "toolCount": 32,
    "panelCount": 16,
    "maxNestedUiDepth": 2,
    "tags": [
      "online-courses",
      "finance",
      "campaign",
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
            "toolId": "ebook-chapter-percent-change-calculator",
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
            "toolId": "product-listing-box-volume-calculator",
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
            "toolId": "service-quote-total-calculator",
            "role": "calculate invoice totals from line-item assumptions",
            "uiDepth": 1
          },
          {
            "order": 6,
            "toolId": "recipe-notes-percentage-calculator",
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
            "toolId": "video-script-percent-change-calculator",
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
            "toolId": "press-release-addition-calculator",
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
            "toolId": "shipping-invoice-total-calculator",
            "role": "calculate invoice totals from line-item assumptions",
            "uiDepth": 1
          },
          {
            "order": 12,
            "toolId": "keyword-list-percentage-calculator",
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
            "toolId": "newsletter-percent-change-calculator",
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
            "toolId": "plant-care-notes-rectangle-area-calculator",
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
            "toolId": "sponsor-invoice-total-calculator",
            "role": "calculate invoice totals from line-item assumptions",
            "uiDepth": 1
          },
          {
            "order": 18,
            "toolId": "facebook-bio-percentage-calculator",
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
            "toolId": "hashtag-set-percent-change-calculator",
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
            "toolId": "newsletter-division-calculator",
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
            "toolId": "store-order-total-calculator",
            "role": "calculate invoice totals from line-item assumptions",
            "uiDepth": 1
          },
          {
            "order": 24,
            "toolId": "ad-copy-percentage-calculator",
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
            "toolId": "csv-export-percent-change-calculator",
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
            "toolId": "meta-description-average-calculator",
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
            "toolId": "subscription-invoice-total-calculator",
            "role": "calculate invoice totals from line-item assumptions",
            "uiDepth": 1
          },
          {
            "order": 30,
            "toolId": "podcast-notes-percentage-calculator",
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
            "toolId": "resume-bullet-percent-change-calculator",
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
    "id": "project-online-courses-hr-campaign-056",
    "title": "Online courses HR campaign workflow",
    "field": "Online courses",
    "businessFunction": "HR",
    "groupId": "group-hr-campaign",
    "outcome": "Use compatible HR tools to prepare a launch campaign with trackable outputs for Online courses.",
    "prompt": "Build a 16-panel workflow for Online courses: prepare a launch campaign with trackable outputs using HR tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible HR chain.",
    "complexity": "standard-16",
    "layout": "4x4",
    "executionMode": "waterfall",
    "toolCount": 16,
    "panelCount": 16,
    "maxNestedUiDepth": 1,
    "tags": [
      "online-courses",
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
            "toolId": "newsletter-json-to-csv-converter",
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
            "toolId": "brand-name-password-generator",
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
            "toolId": "svg-snippet-markdown-table-generator",
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
            "toolId": "html-block-extra-space-remover",
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
            "toolId": "csv-export-add-weeks-date-calculator",
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
            "toolId": "code-comment-days-between-dates-calculator",
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
            "toolId": "docker-tag-json-to-csv-converter",
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
            "toolId": "markdown-doc-password-generator",
            "role": "create secure passwords for the project",
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
            "toolId": "email-body-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "sitemap-entry-lowercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "brand-name-add-weeks-date-calculator",
            "role": "project deadlines and future dates",
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
            "toolId": "plant-care-notes-days-between-dates-calculator",
            "role": "measure durations between dates",
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
            "toolId": "svg-snippet-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
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
            "toolId": "support-ticket-password-generator",
            "role": "create secure passwords for the project",
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
            "toolId": "plant-care-notes-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "hashtag-set-text-reverser",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-content-campaign-057",
    "title": "Online courses content campaign workflow",
    "field": "Online courses",
    "businessFunction": "content",
    "groupId": "group-content-campaign",
    "outcome": "Use compatible content tools to prepare a launch campaign with trackable outputs for Online courses.",
    "prompt": "Build a micro workflow for Online courses: prepare a launch campaign with trackable outputs using content tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible content chain.",
    "complexity": "micro-2-4",
    "layout": "1x1",
    "executionMode": "compact-waterfall",
    "toolCount": 3,
    "panelCount": 1,
    "maxNestedUiDepth": 3,
    "tags": [
      "online-courses",
      "content",
      "campaign",
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
            "toolId": "store-url-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "product-page-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 2
          },
          {
            "order": 3,
            "toolId": "markdown-doc-lowercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 3
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-seo-campaign-058",
    "title": "Online courses SEO campaign workflow",
    "field": "Online courses",
    "businessFunction": "SEO",
    "groupId": "group-seo-campaign",
    "outcome": "Use compatible SEO tools to prepare a launch campaign with trackable outputs for Online courses.",
    "prompt": "Build a 8-panel workflow for Online courses: prepare a launch campaign with trackable outputs using SEO tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible SEO chain.",
    "complexity": "mid-8",
    "layout": "2x4",
    "executionMode": "hybrid",
    "toolCount": 8,
    "panelCount": 8,
    "maxNestedUiDepth": 1,
    "tags": [
      "online-courses",
      "seo",
      "campaign",
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
            "toolId": "webhook-body-markdown-table-generator",
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
            "toolId": "homepage-meta-length-checker",
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
            "toolId": "blog-post-keyword-density-checker",
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
            "toolId": "converter-page-utm-link-builder",
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
            "toolId": "tool-url-url-encoder",
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
            "toolId": "ad-copy-lowercase-converter",
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
            "toolId": "garden-journal-markdown-table-generator",
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
            "toolId": "about-page-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-social-campaign-059",
    "title": "Online courses social media campaign workflow",
    "field": "Online courses",
    "businessFunction": "social media",
    "groupId": "group-social-campaign",
    "outcome": "Use compatible social media tools to prepare a launch campaign with trackable outputs for Online courses.",
    "prompt": "Build a 16-panel workflow for Online courses: prepare a launch campaign with trackable outputs using social media tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible social media chain.",
    "complexity": "standard-16",
    "layout": "4x4",
    "executionMode": "waterfall",
    "toolCount": 16,
    "panelCount": 16,
    "maxNestedUiDepth": 1,
    "tags": [
      "online-courses",
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
            "toolId": "resume-bullet-title-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "raffle-campaign-meta-length-checker",
            "role": "check title and description length for web publishing",
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
            "toolId": "facebook-post-keyword-density-checker",
            "role": "extract keyword usage from project text",
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
            "toolId": "google-result-utm-link-builder",
            "role": "create trackable campaign URLs",
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
            "toolId": "dns-record-base64-decoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
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
            "toolId": "svg-snippet-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "file-name-blank-line-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "facebook-post-meta-length-checker",
            "role": "check title and description length for web publishing",
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
            "toolId": "affiliate-page-keyword-density-checker",
            "role": "extract keyword usage from project text",
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
            "toolId": "category-page-utm-link-builder",
            "role": "create trackable campaign URLs",
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
            "toolId": "webhook-body-base64-decoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
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
            "toolId": "email-body-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "resume-bullet-find-and-replace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "sitemap-page-meta-length-checker",
            "role": "check title and description length for web publishing",
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
            "toolId": "product-page-keyword-density-checker",
            "role": "extract keyword usage from project text",
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
            "toolId": "tiktok-caption-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-email-campaign-060",
    "title": "Online courses email campaign workflow",
    "field": "Online courses",
    "businessFunction": "email",
    "groupId": "group-email-campaign",
    "outcome": "Use compatible email tools to prepare a launch campaign with trackable outputs for Online courses.",
    "prompt": "Build a 64-tool nested waterfall for Online courses: prepare a launch campaign with trackable outputs using email tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible email chain.",
    "complexity": "nested-64",
    "layout": "4x4",
    "executionMode": "nested-waterfall",
    "toolCount": 64,
    "panelCount": 16,
    "maxNestedUiDepth": 4,
    "tags": [
      "online-courses",
      "email",
      "campaign",
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
            "toolId": "calculator-page-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 2
          },
          {
            "order": 3,
            "toolId": "instagram-reel-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 3
          },
          {
            "order": 4,
            "toolId": "ip-allowlist-base64-decoder",
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
            "toolId": "invoice-memo-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 6,
            "toolId": "invoice-memo-find-and-replace-tool",
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
            "toolId": "pinterest-pin-meta-length-checker",
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
            "toolId": "developer-tool-page-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 1
          },
          {
            "order": 10,
            "toolId": "cookie-value-base64-decoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 2
          },
          {
            "order": 11,
            "toolId": "search-query-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 12,
            "toolId": "url-slug-sentence-case-converter",
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
            "toolId": "contact-page-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 2
          },
          {
            "order": 15,
            "toolId": "youtube-video-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 3
          },
          {
            "order": 16,
            "toolId": "tracking-link-base64-decoder",
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
            "toolId": "cookie-value-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 18,
            "toolId": "instagram-caption-title-case-converter",
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
            "toolId": "policy-page-meta-length-checker",
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
            "toolId": "policy-page-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 1
          },
          {
            "order": 22,
            "toolId": "redirect-url-base64-decoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 2
          },
          {
            "order": 23,
            "toolId": "log-line-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 24,
            "toolId": "support-ticket-uppercase-converter",
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
            "toolId": "developer-tool-page-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 2
          },
          {
            "order": 27,
            "toolId": "google-result-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 3
          },
          {
            "order": 28,
            "toolId": "html-snippet-base64-decoder",
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
            "toolId": "svg-snippet-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 30,
            "toolId": "instagram-caption-find-and-replace-tool",
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
            "toolId": "product-page-meta-length-checker",
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
            "toolId": "category-page-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 1
          },
          {
            "order": 34,
            "toolId": "cloudflare-rule-base64-decoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 2
          },
          {
            "order": 35,
            "toolId": "email-body-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 36,
            "toolId": "support-ticket-sentence-case-converter",
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
            "toolId": "facebook-bio-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 2
          },
          {
            "order": 39,
            "toolId": "tiktok-caption-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 3
          },
          {
            "order": 40,
            "toolId": "system-message-base64-decoder",
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
            "toolId": "plant-care-notes-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 42,
            "toolId": "html-block-title-case-converter",
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
            "toolId": "review-page-meta-length-checker",
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
            "toolId": "newsletter-campaign-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 1
          },
          {
            "order": 46,
            "toolId": "python-string-base64-decoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 2
          },
          {
            "order": 47,
            "toolId": "webhook-body-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 48,
            "toolId": "sitemap-entry-uppercase-converter",
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
            "toolId": "faq-page-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 2
          },
          {
            "order": 51,
            "toolId": "faq-page-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 3
          },
          {
            "order": 52,
            "toolId": "git-branch-base64-decoder",
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
            "toolId": "garden-journal-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 54,
            "toolId": "html-block-find-and-replace-tool",
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
            "toolId": "tiktok-caption-meta-length-checker",
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
            "toolId": "blog-article-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 1
          },
          {
            "order": 58,
            "toolId": "callback-url-base64-decoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 2
          },
          {
            "order": 59,
            "toolId": "recipe-notes-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 60,
            "toolId": "sitemap-entry-sentence-case-converter",
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
            "toolId": "garden-guide-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 2
          },
          {
            "order": 63,
            "toolId": "raffle-campaign-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 3
          },
          {
            "order": 64,
            "toolId": "store-url-base64-decoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 4
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-data-campaign-061",
    "title": "Online courses data cleanup campaign workflow",
    "field": "Online courses",
    "businessFunction": "data cleanup",
    "groupId": "group-data-campaign",
    "outcome": "Use compatible data cleanup tools to prepare a launch campaign with trackable outputs for Online courses.",
    "prompt": "Build a micro workflow for Online courses: prepare a launch campaign with trackable outputs using data cleanup tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible data cleanup chain.",
    "complexity": "micro-2-4",
    "layout": "1x1",
    "executionMode": "compact-waterfall",
    "toolCount": 3,
    "panelCount": 1,
    "maxNestedUiDepth": 3,
    "tags": [
      "online-courses",
      "data",
      "campaign",
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
            "toolId": "error-message-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "folder-name-lowercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 3,
            "toolId": "query-string-base64-decoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 3
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-reporting-campaign-062",
    "title": "Online courses reporting campaign workflow",
    "field": "Online courses",
    "businessFunction": "reporting",
    "groupId": "group-reporting-campaign",
    "outcome": "Use compatible reporting tools to prepare a launch campaign with trackable outputs for Online courses.",
    "prompt": "Build a 16-panel workflow for Online courses: prepare a launch campaign with trackable outputs using reporting tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible reporting chain.",
    "complexity": "standard-16",
    "layout": "4x4",
    "executionMode": "waterfall",
    "toolCount": 16,
    "panelCount": 16,
    "maxNestedUiDepth": 1,
    "tags": [
      "online-courses",
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
            "toolId": "plant-care-notes-percent-change-calculator",
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
            "toolId": "meeting-notes-find-and-replace-tool",
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
            "toolId": "invoice-memo-add-weeks-date-calculator",
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
            "toolId": "api-token-csv-to-json-converter",
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
            "toolId": "product-listing-markdown-table-generator",
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
            "toolId": "file-name-percentage-calculator",
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
            "toolId": "html-block-percent-change-calculator",
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
            "toolId": "brand-name-sentence-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "html-block-add-weeks-date-calculator",
            "role": "project deadlines and future dates",
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
            "toolId": "recipe-notes-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
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
            "toolId": "xml-node-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "blog-post-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
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
            "toolId": "customer-reply-percent-change-calculator",
            "role": "compare before/after values",
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
            "toolId": "markdown-doc-title-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "garden-journal-add-weeks-date-calculator",
            "role": "project deadlines and future dates",
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
            "toolId": "header-value-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-compliance-campaign-063",
    "title": "Online courses compliance campaign workflow",
    "field": "Online courses",
    "businessFunction": "compliance",
    "groupId": "group-compliance-campaign",
    "outcome": "Use compatible compliance tools to prepare a launch campaign with trackable outputs for Online courses.",
    "prompt": "Build a micro workflow for Online courses: prepare a launch campaign with trackable outputs using compliance tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible compliance chain.",
    "complexity": "micro-2-4",
    "layout": "2x1",
    "executionMode": "compact-waterfall",
    "toolCount": 4,
    "panelCount": 2,
    "maxNestedUiDepth": 2,
    "tags": [
      "online-courses",
      "compliance",
      "campaign",
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
            "toolId": "landing-page-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "python-string-json-minifier",
            "role": "format, validate, or extract useful keys from JSON",
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
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
            "uiDepth": 1
          },
          {
            "order": 4,
            "toolId": "url-slug-slug-generator",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-scheduling-campaign-064",
    "title": "Online courses scheduling campaign workflow",
    "field": "Online courses",
    "businessFunction": "scheduling",
    "groupId": "group-scheduling-campaign",
    "outcome": "Use compatible scheduling tools to prepare a launch campaign with trackable outputs for Online courses.",
    "prompt": "Build a 8-panel workflow for Online courses: prepare a launch campaign with trackable outputs using scheduling tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible scheduling chain.",
    "complexity": "mid-8",
    "layout": "4x2",
    "executionMode": "hybrid",
    "toolCount": 8,
    "panelCount": 8,
    "maxNestedUiDepth": 1,
    "tags": [
      "online-courses",
      "scheduling",
      "campaign",
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
            "toolId": "callback-url-json-to-csv-converter",
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
            "toolId": "blog-post-days-between-dates-calculator",
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
            "toolId": "recipe-notes-add-months-date-calculator",
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
            "toolId": "hashtag-set-date-to-unix-timestamp",
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
            "toolId": "sql-snippet-markdown-table-generator",
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
            "toolId": "file-name-uppercase-converter",
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
            "toolId": "response-text-json-to-csv-converter",
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
            "toolId": "meta-description-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-product-campaign-065",
    "title": "Online courses product campaign workflow",
    "field": "Online courses",
    "businessFunction": "product",
    "groupId": "group-product-campaign",
    "outcome": "Use compatible product tools to prepare a launch campaign with trackable outputs for Online courses.",
    "prompt": "Build a 32-tool nested workbench for Online courses: prepare a launch campaign with trackable outputs using product tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible product chain.",
    "complexity": "advanced-32",
    "layout": "4x4",
    "executionMode": "hybrid-waterfall",
    "toolCount": 32,
    "panelCount": 16,
    "maxNestedUiDepth": 2,
    "tags": [
      "online-courses",
      "product",
      "campaign",
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
            "toolId": "cover-letter-find-and-replace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "secret-placeholder-json-to-csv-converter",
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
            "toolId": "sitemap-url-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 4,
            "toolId": "plant-care-notes-percentage-calculator",
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
            "toolId": "recipe-notes-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 1
          },
          {
            "order": 6,
            "toolId": "jwt-payload-json-formatter",
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
            "toolId": "order-note-slug-generator",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 8,
            "toolId": "json-config-json-to-csv-converter",
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
            "toolId": "customer-reply-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 10,
            "toolId": "html-block-percentage-calculator",
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
            "toolId": "keyword-list-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 1
          },
          {
            "order": 12,
            "toolId": "sql-snippet-json-key-extractor",
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
            "toolId": "coupon-text-title-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 14,
            "toolId": "cloudflare-rule-json-to-csv-converter",
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
            "toolId": "newsletter-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 16,
            "toolId": "customer-reply-percentage-calculator",
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
            "toolId": "facebook-bio-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 1
          },
          {
            "order": 18,
            "toolId": "javascript-string-json-formatter",
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
            "toolId": "order-note-blank-line-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 20,
            "toolId": "schema-markup-json-to-csv-converter",
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
            "toolId": "tracking-link-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 22,
            "toolId": "seo-title-percentage-calculator",
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
            "toolId": "ad-copy-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 1
          },
          {
            "order": 24,
            "toolId": "schema-markup-json-key-extractor",
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
            "toolId": "coupon-text-find-and-replace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 26,
            "toolId": "ip-allowlist-json-to-csv-converter",
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
            "toolId": "error-message-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 28,
            "toolId": "markdown-doc-percentage-calculator",
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
            "toolId": "podcast-notes-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 1
          },
          {
            "order": 30,
            "toolId": "environment-value-json-formatter",
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
            "toolId": "newsletter-slug-generator",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 32,
            "toolId": "callback-url-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 2
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-ux-campaign-066",
    "title": "Online courses UX/UI campaign workflow",
    "field": "Online courses",
    "businessFunction": "UX/UI",
    "groupId": "group-ux-campaign",
    "outcome": "Use compatible UX/UI tools to prepare a launch campaign with trackable outputs for Online courses.",
    "prompt": "Build a 8-panel workflow for Online courses: prepare a launch campaign with trackable outputs using UX/UI tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible UX/UI chain.",
    "complexity": "mid-8",
    "layout": "2x4",
    "executionMode": "hybrid",
    "toolCount": 8,
    "panelCount": 8,
    "maxNestedUiDepth": 1,
    "tags": [
      "online-courses",
      "ux",
      "campaign",
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
            "toolId": "hashtag-set-color-contrast-checker",
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
            "toolId": "instagram-caption-uppercase-converter",
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
            "toolId": "user-message-markdown-table-generator",
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
            "toolId": "developer-tool-page-meta-length-checker",
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
            "toolId": "affiliate-page-keyword-density-checker",
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
            "toolId": "sitemap-entry-hex-to-rgb-converter",
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
            "toolId": "project-brief-color-contrast-checker",
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
            "toolId": "url-slug-extra-space-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-web-launch-campaign-067",
    "title": "Online courses web launch campaign workflow",
    "field": "Online courses",
    "businessFunction": "web launch",
    "groupId": "group-web-launch-campaign",
    "outcome": "Use compatible web launch tools to prepare a launch campaign with trackable outputs for Online courses.",
    "prompt": "Build a micro workflow for Online courses: prepare a launch campaign with trackable outputs using web launch tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible web launch chain.",
    "complexity": "micro-2-4",
    "layout": "2x1",
    "executionMode": "compact-waterfall",
    "toolCount": 4,
    "panelCount": 2,
    "maxNestedUiDepth": 2,
    "tags": [
      "online-courses",
      "web-launch",
      "campaign",
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
            "toolId": "facebook-bio-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "tiktok-caption-keyword-density-checker",
            "role": "extract keyword usage from project text",
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
            "toolId": "about-page-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 1
          },
          {
            "order": 4,
            "toolId": "sitemap-url-json-minifier",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 2
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-developer-campaign-068",
    "title": "Online courses developer campaign workflow",
    "field": "Online courses",
    "businessFunction": "developer",
    "groupId": "group-developer-campaign",
    "outcome": "Use compatible developer tools to prepare a launch campaign with trackable outputs for Online courses.",
    "prompt": "Build a 16-panel workflow for Online courses: prepare a launch campaign with trackable outputs using developer tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible developer chain.",
    "complexity": "standard-16",
    "layout": "4x4",
    "executionMode": "waterfall",
    "toolCount": 16,
    "panelCount": 16,
    "maxNestedUiDepth": 1,
    "tags": [
      "online-courses",
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
            "toolId": "page-heading-password-generator",
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
            "toolId": "commit-message-csv-to-json-converter",
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
            "toolId": "cookie-value-markdown-table-generator",
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
            "toolId": "schema-markup-json-minifier",
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
            "toolId": "cloudflare-rule-html-unescaper",
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
            "toolId": "file-name-uuid-generator",
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
            "toolId": "blog-post-password-generator",
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
            "toolId": "search-query-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
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
            "toolId": "log-line-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "environment-value-json-key-extractor",
            "role": "format, validate, or extract useful keys from JSON",
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
            "toolId": "system-message-html-unescaper",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
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
            "toolId": "project-brief-uuid-generator",
            "role": "create unique IDs for assets, records, or tasks",
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
            "toolId": "landing-page-password-generator",
            "role": "create secure passwords for the project",
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
            "toolId": "javascript-string-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
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
            "toolId": "svg-snippet-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "query-string-json-minifier",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-security-campaign-069",
    "title": "Online courses security campaign workflow",
    "field": "Online courses",
    "businessFunction": "security",
    "groupId": "group-security-campaign",
    "outcome": "Use compatible security tools to prepare a launch campaign with trackable outputs for Online courses.",
    "prompt": "Build a micro workflow for Online courses: prepare a launch campaign with trackable outputs using security tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible security chain.",
    "complexity": "micro-2-4",
    "layout": "1x1",
    "executionMode": "compact-waterfall",
    "toolCount": 3,
    "panelCount": 1,
    "maxNestedUiDepth": 3,
    "tags": [
      "online-courses",
      "security",
      "campaign",
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
            "toolId": "ad-copy-uppercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "recipe-notes-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 2
          },
          {
            "order": 3,
            "toolId": "ad-copy-password-generator",
            "role": "create secure passwords for the project",
            "uiDepth": 3
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-training-campaign-070",
    "title": "Online courses training campaign workflow",
    "field": "Online courses",
    "businessFunction": "training",
    "groupId": "group-training-campaign",
    "outcome": "Use compatible training tools to prepare a launch campaign with trackable outputs for Online courses.",
    "prompt": "Build a 64-tool nested waterfall for Online courses: prepare a launch campaign with trackable outputs using training tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible training chain.",
    "complexity": "nested-64",
    "layout": "4x4",
    "executionMode": "nested-waterfall",
    "toolCount": 64,
    "panelCount": 16,
    "maxNestedUiDepth": 4,
    "tags": [
      "online-courses",
      "training",
      "campaign",
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
            "toolId": "hashtag-set-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "file-name-text-reverser",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 3,
            "toolId": "header-value-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 4,
            "toolId": "domain-list-add-days-date-calculator",
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
            "toolId": "csv-export-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          },
          {
            "order": 6,
            "toolId": "cloudflare-rule-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 2
          },
          {
            "order": 7,
            "toolId": "csv-export-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 8,
            "toolId": "resume-bullet-trim-whitespace-tool",
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
            "toolId": "regex-pattern-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 10,
            "toolId": "csv-export-add-days-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 2
          },
          {
            "order": 11,
            "toolId": "press-release-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 3
          },
          {
            "order": 12,
            "toolId": "schema-markup-csv-to-json-converter",
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
            "toolId": "resume-bullet-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 14,
            "toolId": "file-name-extra-space-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 15,
            "toolId": "callback-url-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 16,
            "toolId": "brand-name-add-days-date-calculator",
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
            "toolId": "html-block-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          },
          {
            "order": 18,
            "toolId": "ip-allowlist-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 2
          },
          {
            "order": 19,
            "toolId": "landing-page-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 20,
            "toolId": "resume-bullet-lowercase-converter",
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
            "toolId": "javascript-string-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 22,
            "toolId": "ad-copy-add-days-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 2
          },
          {
            "order": 23,
            "toolId": "code-comment-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 3
          },
          {
            "order": 24,
            "toolId": "callback-url-csv-to-json-converter",
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
            "toolId": "file-name-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 26,
            "toolId": "facebook-bio-text-reverser",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 27,
            "toolId": "seo-title-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 28,
            "toolId": "url-slug-add-days-date-calculator",
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
            "toolId": "plant-care-notes-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          },
          {
            "order": 30,
            "toolId": "response-text-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 2
          },
          {
            "order": 31,
            "toolId": "blog-post-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 32,
            "toolId": "recipe-notes-trim-whitespace-tool",
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
            "toolId": "csv-cell-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 34,
            "toolId": "recipe-notes-add-days-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 2
          },
          {
            "order": 35,
            "toolId": "hashtag-set-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 3
          },
          {
            "order": 36,
            "toolId": "instagram-caption-csv-to-json-converter",
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
            "toolId": "press-release-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 38,
            "toolId": "facebook-bio-extra-space-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 39,
            "toolId": "meta-description-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 40,
            "toolId": "press-release-add-days-date-calculator",
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
            "toolId": "brand-name-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          },
          {
            "order": 42,
            "toolId": "base-url-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 2
          },
          {
            "order": 43,
            "toolId": "invoice-memo-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 44,
            "toolId": "recipe-notes-lowercase-converter",
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
            "toolId": "tool-url-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 46,
            "toolId": "newsletter-add-days-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 2
          },
          {
            "order": 47,
            "toolId": "newsletter-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 3
          },
          {
            "order": 48,
            "toolId": "redirect-url-csv-to-json-converter",
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
            "toolId": "ebook-chapter-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 50,
            "toolId": "email-subject-text-reverser",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 51,
            "toolId": "environment-value-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 52,
            "toolId": "markdown-doc-add-days-date-calculator",
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
            "toolId": "garden-journal-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          },
          {
            "order": 54,
            "toolId": "html-snippet-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 2
          },
          {
            "order": 55,
            "toolId": "video-script-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 56,
            "toolId": "project-brief-trim-whitespace-tool",
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
            "toolId": "product-listing-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 58,
            "toolId": "keyword-list-add-days-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 2
          },
          {
            "order": 59,
            "toolId": "blog-post-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 3
          },
          {
            "order": 60,
            "toolId": "youtube-description-csv-to-json-converter",
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
            "toolId": "newsletter-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 62,
            "toolId": "email-subject-extra-space-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 63,
            "toolId": "xml-node-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 64,
            "toolId": "invoice-memo-add-days-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 4
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-inventory-campaign-071",
    "title": "Online courses inventory campaign workflow",
    "field": "Online courses",
    "businessFunction": "inventory",
    "groupId": "group-inventory-campaign",
    "outcome": "Use compatible inventory tools to prepare a launch campaign with trackable outputs for Online courses.",
    "prompt": "Build a 16-panel workflow for Online courses: prepare a launch campaign with trackable outputs using inventory tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible inventory chain.",
    "complexity": "standard-16",
    "layout": "4x4",
    "executionMode": "waterfall",
    "toolCount": 16,
    "panelCount": 16,
    "maxNestedUiDepth": 1,
    "tags": [
      "online-courses",
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
            "toolId": "csv-cell-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
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
            "toolId": "podcast-notes-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
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
            "toolId": "pascal-to-atmosphere-converter",
            "role": "convert operational measurements",
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
            "toolId": "youtube-description-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "recipe-notes-text-reverser",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "invoice-memo-add-months-date-calculator",
            "role": "project deadlines and future dates",
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
            "toolId": "sitemap-url-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
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
            "toolId": "instagram-caption-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
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
            "toolId": "day-to-hour-converter",
            "role": "convert operational measurements",
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
            "toolId": "image-alt-text-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "email-subject-uppercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "html-block-add-months-date-calculator",
            "role": "project deadlines and future dates",
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
            "toolId": "landing-page-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
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
            "toolId": "domain-list-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
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
            "toolId": "metric-ton-to-ounce-converter",
            "role": "convert operational measurements",
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
            "toolId": "robots-rule-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-pricing-campaign-072",
    "title": "Online courses pricing campaign workflow",
    "field": "Online courses",
    "businessFunction": "pricing",
    "groupId": "group-pricing-campaign",
    "outcome": "Use compatible pricing tools to prepare a launch campaign with trackable outputs for Online courses.",
    "prompt": "Build a 8-panel workflow for Online courses: prepare a launch campaign with trackable outputs using pricing tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible pricing chain.",
    "complexity": "mid-8",
    "layout": "4x2",
    "executionMode": "hybrid",
    "toolCount": 8,
    "panelCount": 8,
    "maxNestedUiDepth": 1,
    "tags": [
      "online-courses",
      "pricing",
      "campaign",
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
            "toolId": "recipe-notes-percentage-calculator",
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
            "toolId": "client-invoice-total-calculator",
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
            "toolId": "ad-copy-box-volume-calculator",
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
            "toolId": "recipe-notes-markdown-table-generator",
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
            "toolId": "html-block-percent-change-calculator",
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
            "toolId": "keyword-list-percentage-calculator",
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
            "toolId": "community-order-total-calculator",
            "role": "calculate invoice totals from line-item assumptions",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-outreach-campaign-073",
    "title": "Online courses outreach campaign workflow",
    "field": "Online courses",
    "businessFunction": "outreach",
    "groupId": "group-outreach-campaign",
    "outcome": "Use compatible outreach tools to prepare a launch campaign with trackable outputs for Online courses.",
    "prompt": "Build a micro workflow for Online courses: prepare a launch campaign with trackable outputs using outreach tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible outreach chain.",
    "complexity": "micro-2-4",
    "layout": "1x1",
    "executionMode": "compact-waterfall",
    "toolCount": 3,
    "panelCount": 1,
    "maxNestedUiDepth": 3,
    "tags": [
      "online-courses",
      "outreach",
      "campaign",
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
            "toolId": "affiliate-page-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "header-value-url-encoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 2
          },
          {
            "order": 3,
            "toolId": "donation-campaign-keyword-density-checker",
            "role": "extract keyword usage from project text",
            "uiDepth": 3
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-research-campaign-074",
    "title": "Online courses research campaign workflow",
    "field": "Online courses",
    "businessFunction": "research",
    "groupId": "group-research-campaign",
    "outcome": "Use compatible research tools to prepare a launch campaign with trackable outputs for Online courses.",
    "prompt": "Build a 16-panel workflow for Online courses: prepare a launch campaign with trackable outputs using research tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible research chain.",
    "complexity": "standard-16",
    "layout": "4x4",
    "executionMode": "waterfall",
    "toolCount": 16,
    "panelCount": 16,
    "maxNestedUiDepth": 1,
    "tags": [
      "online-courses",
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
            "toolId": "landing-page-json-to-csv-converter",
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
            "toolId": "webhook-body-json-key-extractor",
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
            "toolId": "facebook-bio-blank-line-remover",
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
            "toolId": "product-listing-keyword-density-checker",
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
            "toolId": "json-config-markdown-table-generator",
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
            "toolId": "cookie-value-json-to-csv-converter",
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
            "toolId": "json-config-json-formatter",
            "role": "format, validate, or extract useful keys from JSON",
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
            "toolId": "recipe-notes-find-and-replace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
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
            "toolId": "homepage-keyword-density-checker",
            "role": "extract keyword usage from project text",
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
            "toolId": "sitemap-url-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
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
            "toolId": "secret-placeholder-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
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
            "toolId": "sitemap-url-json-key-extractor",
            "role": "format, validate, or extract useful keys from JSON",
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
            "toolId": "email-subject-slug-generator",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-project-management-campaign-075",
    "title": "Online courses project management campaign workflow",
    "field": "Online courses",
    "businessFunction": "project management",
    "groupId": "group-project-management-campaign",
    "outcome": "Use compatible project management tools to prepare a launch campaign with trackable outputs for Online courses.",
    "prompt": "Build a 32-tool nested workbench for Online courses: prepare a launch campaign with trackable outputs using project management tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible project management chain.",
    "complexity": "advanced-32",
    "layout": "4x4",
    "executionMode": "hybrid-waterfall",
    "toolCount": 32,
    "panelCount": 16,
    "maxNestedUiDepth": 2,
    "tags": [
      "online-courses",
      "project-management",
      "campaign",
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
            "toolId": "user-message-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "landing-page-percentage-calculator",
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
            "toolId": "domain-list-add-years-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          },
          {
            "order": 4,
            "toolId": "plant-care-notes-days-between-dates-calculator",
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
            "toolId": "podcast-notes-lowercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 6,
            "toolId": "oauth-state-markdown-table-generator",
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
            "toolId": "pages-url-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 8,
            "toolId": "file-name-percentage-calculator",
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
            "toolId": "csv-export-add-years-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          },
          {
            "order": 10,
            "toolId": "hashtag-set-days-between-dates-calculator",
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
            "toolId": "csv-export-slug-generator",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 12,
            "toolId": "user-message-markdown-table-generator",
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
            "toolId": "email-subject-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 14,
            "toolId": "blog-post-percentage-calculator",
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
            "toolId": "brand-name-add-years-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          },
          {
            "order": 16,
            "toolId": "brand-name-days-between-dates-calculator",
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
            "toolId": "plant-care-notes-trim-whitespace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 18,
            "toolId": "facebook-bio-markdown-table-generator",
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
            "toolId": "tool-url-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 20,
            "toolId": "press-release-percentage-calculator",
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
            "toolId": "ad-copy-add-years-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          },
          {
            "order": 22,
            "toolId": "newsletter-days-between-dates-calculator",
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
            "toolId": "csv-export-blank-line-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 24,
            "toolId": "python-string-markdown-table-generator",
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
            "toolId": "newsletter-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 26,
            "toolId": "invoice-memo-percentage-calculator",
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
            "toolId": "url-slug-add-years-date-calculator",
            "role": "project deadlines and future dates",
            "uiDepth": 1
          },
          {
            "order": 28,
            "toolId": "garden-journal-days-between-dates-calculator",
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
            "toolId": "plant-care-notes-lowercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 30,
            "toolId": "youtube-description-markdown-table-generator",
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
            "toolId": "docker-tag-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 32,
            "toolId": "ebook-chapter-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 2
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-marketing-daily-checklist-076",
    "title": "Online courses marketing daily checklist workflow",
    "field": "Online courses",
    "businessFunction": "marketing",
    "groupId": "group-marketing-daily-checklist",
    "outcome": "Use compatible marketing tools to create a repeatable daily operating checklist for Online courses.",
    "prompt": "Build a 8-panel workflow for Online courses: create a repeatable daily operating checklist using marketing tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible marketing chain.",
    "complexity": "mid-8",
    "layout": "4x2",
    "executionMode": "hybrid",
    "toolCount": 8,
    "panelCount": 8,
    "maxNestedUiDepth": 1,
    "tags": [
      "online-courses",
      "marketing",
      "daily-checklist",
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
            "toolId": "dns-record-base64-encoder",
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
            "toolId": "plant-care-notes-extra-space-remover",
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
            "toolId": "free-pdf-page-meta-length-checker",
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
            "toolId": "affiliate-page-keyword-density-checker",
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
            "toolId": "category-page-utm-link-builder",
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
            "toolId": "query-string-markdown-table-generator",
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
            "toolId": "webhook-body-base64-encoder",
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
            "toolId": "cover-letter-lowercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-sales-daily-checklist-077",
    "title": "Online courses sales daily checklist workflow",
    "field": "Online courses",
    "businessFunction": "sales",
    "groupId": "group-sales-daily-checklist",
    "outcome": "Use compatible sales tools to create a repeatable daily operating checklist for Online courses.",
    "prompt": "Build a 16-panel workflow for Online courses: create a repeatable daily operating checklist using sales tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible sales chain.",
    "complexity": "standard-16",
    "layout": "4x4",
    "executionMode": "waterfall",
    "toolCount": 16,
    "panelCount": 16,
    "maxNestedUiDepth": 1,
    "tags": [
      "online-courses",
      "sales",
      "daily-checklist",
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
            "toolId": "seo-title-csv-to-json-converter",
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
            "toolId": "shipping-note-blank-line-remover",
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
            "toolId": "calculator-page-utm-link-builder",
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
            "toolId": "email-subject-percentage-calculator",
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
            "toolId": "docker-tag-markdown-table-generator",
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
            "toolId": "cookie-value-base64-encoder",
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
            "toolId": "jwt-payload-csv-to-json-converter",
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
            "toolId": "garden-journal-lowercase-converter",
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
            "toolId": "sitemap-page-utm-link-builder",
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
            "toolId": "youtube-description-percentage-calculator",
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
            "toolId": "pages-url-markdown-table-generator",
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
            "toolId": "tracking-link-base64-encoder",
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
            "toolId": "commit-message-csv-to-json-converter",
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
            "toolId": "seo-title-slug-generator",
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
            "toolId": "local-service-page-utm-link-builder",
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
            "toolId": "plant-care-notes-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-support-daily-checklist-078",
    "title": "Online courses customer support daily checklist workflow",
    "field": "Online courses",
    "businessFunction": "customer support",
    "groupId": "group-support-daily-checklist",
    "outcome": "Use compatible customer support tools to create a repeatable daily operating checklist for Online courses.",
    "prompt": "Build a 8-panel workflow for Online courses: create a repeatable daily operating checklist using customer support tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible customer support chain.",
    "complexity": "mid-8",
    "layout": "2x4",
    "executionMode": "hybrid",
    "toolCount": 8,
    "panelCount": 8,
    "maxNestedUiDepth": 1,
    "tags": [
      "online-courses",
      "support",
      "daily-checklist",
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
            "toolId": "ad-copy-find-and-replace-tool",
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
            "toolId": "prompt-text-markdown-table-generator",
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
            "toolId": "callback-url-csv-to-json-converter",
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
            "toolId": "webhook-body-json-formatter",
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
            "toolId": "keyword-list-slug-generator",
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
            "toolId": "yaml-value-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-operations-daily-checklist-079",
    "title": "Online courses operations daily checklist workflow",
    "field": "Online courses",
    "businessFunction": "operations",
    "groupId": "group-operations-daily-checklist",
    "outcome": "Use compatible operations tools to create a repeatable daily operating checklist for Online courses.",
    "prompt": "Build a micro workflow for Online courses: create a repeatable daily operating checklist using operations tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible operations chain.",
    "complexity": "micro-2-4",
    "layout": "2x1",
    "executionMode": "compact-waterfall",
    "toolCount": 4,
    "panelCount": 2,
    "maxNestedUiDepth": 2,
    "tags": [
      "online-courses",
      "operations",
      "daily-checklist",
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
            "toolId": "file-name-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "webhook-body-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
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
            "toolId": "form-payload-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 4,
            "toolId": "json-snippet-lowercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-finance-daily-checklist-080",
    "title": "Online courses finance daily checklist workflow",
    "field": "Online courses",
    "businessFunction": "finance",
    "groupId": "group-finance-daily-checklist",
    "outcome": "Use compatible finance tools to create a repeatable daily operating checklist for Online courses.",
    "prompt": "Build a 64-tool nested waterfall for Online courses: create a repeatable daily operating checklist using finance tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible finance chain.",
    "complexity": "nested-64",
    "layout": "4x4",
    "executionMode": "nested-waterfall",
    "toolCount": 64,
    "panelCount": 16,
    "maxNestedUiDepth": 4,
    "tags": [
      "online-courses",
      "finance",
      "daily-checklist",
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
            "toolId": "json-snippet-rectangle-area-calculator",
            "role": "run a lightweight business formula",
            "uiDepth": 3
          },
          {
            "order": 4,
            "toolId": "service-quote-total-calculator",
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
            "toolId": "ad-copy-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 6,
            "toolId": "csv-export-percent-change-calculator",
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
            "toolId": "invoice-memo-division-calculator",
            "role": "run a lightweight business formula",
            "uiDepth": 1
          },
          {
            "order": 10,
            "toolId": "shipping-invoice-total-calculator",
            "role": "calculate invoice totals from line-item assumptions",
            "uiDepth": 2
          },
          {
            "order": 11,
            "toolId": "podcast-notes-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 12,
            "toolId": "resume-bullet-percent-change-calculator",
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
            "toolId": "instagram-caption-average-calculator",
            "role": "run a lightweight business formula",
            "uiDepth": 3
          },
          {
            "order": 16,
            "toolId": "sponsor-invoice-total-calculator",
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
            "toolId": "instagram-caption-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 18,
            "toolId": "landing-page-percent-change-calculator",
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
            "toolId": "hashtag-set-subtraction-calculator",
            "role": "run a lightweight business formula",
            "uiDepth": 1
          },
          {
            "order": 22,
            "toolId": "store-order-total-calculator",
            "role": "calculate invoice totals from line-item assumptions",
            "uiDepth": 2
          },
          {
            "order": 23,
            "toolId": "domain-list-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 24,
            "toolId": "file-name-percent-change-calculator",
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
            "toolId": "garden-journal-multiplication-calculator",
            "role": "run a lightweight business formula",
            "uiDepth": 3
          },
          {
            "order": 28,
            "toolId": "subscription-invoice-total-calculator",
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
            "toolId": "url-slug-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 30,
            "toolId": "blog-post-percent-change-calculator",
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
            "toolId": "folder-name-box-volume-calculator",
            "role": "run a lightweight business formula",
            "uiDepth": 1
          },
          {
            "order": 34,
            "toolId": "tool-sale-order-total-calculator",
            "role": "calculate invoice totals from line-item assumptions",
            "uiDepth": 2
          },
          {
            "order": 35,
            "toolId": "meta-description-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 36,
            "toolId": "press-release-percent-change-calculator",
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
            "toolId": "file-name-addition-calculator",
            "role": "run a lightweight business formula",
            "uiDepth": 3
          },
          {
            "order": 40,
            "toolId": "wholesale-order-total-calculator",
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
            "toolId": "garden-journal-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 42,
            "toolId": "invoice-memo-percent-change-calculator",
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
            "toolId": "email-subject-rectangle-area-calculator",
            "role": "run a lightweight business formula",
            "uiDepth": 1
          },
          {
            "order": 46,
            "toolId": "workshop-invoice-total-calculator",
            "role": "calculate invoice totals from line-item assumptions",
            "uiDepth": 2
          },
          {
            "order": 47,
            "toolId": "code-comment-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 48,
            "toolId": "ebook-chapter-percent-change-calculator",
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
            "toolId": "ebook-chapter-division-calculator",
            "role": "run a lightweight business formula",
            "uiDepth": 3
          },
          {
            "order": 52,
            "toolId": "client-invoice-total-calculator",
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
            "toolId": "recipe-notes-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 54,
            "toolId": "video-script-percent-change-calculator",
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
            "toolId": "domain-list-average-calculator",
            "role": "run a lightweight business formula",
            "uiDepth": 1
          },
          {
            "order": 58,
            "toolId": "community-order-total-calculator",
            "role": "calculate invoice totals from line-item assumptions",
            "uiDepth": 2
          },
          {
            "order": 59,
            "toolId": "keyword-list-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 60,
            "toolId": "newsletter-percent-change-calculator",
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
            "toolId": "csv-export-subtraction-calculator",
            "role": "run a lightweight business formula",
            "uiDepth": 3
          },
          {
            "order": 64,
            "toolId": "consulting-invoice-total-calculator",
            "role": "calculate invoice totals from line-item assumptions",
            "uiDepth": 4
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-hr-daily-checklist-081",
    "title": "Online courses HR daily checklist workflow",
    "field": "Online courses",
    "businessFunction": "HR",
    "groupId": "group-hr-daily-checklist",
    "outcome": "Use compatible HR tools to create a repeatable daily operating checklist for Online courses.",
    "prompt": "Build a micro workflow for Online courses: create a repeatable daily operating checklist using HR tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible HR chain.",
    "complexity": "micro-2-4",
    "layout": "1x1",
    "executionMode": "compact-waterfall",
    "toolCount": 3,
    "panelCount": 1,
    "maxNestedUiDepth": 3,
    "tags": [
      "online-courses",
      "hr",
      "daily-checklist",
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
            "toolId": "schema-text-password-generator",
            "role": "create secure passwords for the project",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "webhook-body-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 2
          },
          {
            "order": 3,
            "toolId": "schema-text-sentence-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 3
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-content-daily-checklist-082",
    "title": "Online courses content daily checklist workflow",
    "field": "Online courses",
    "businessFunction": "content",
    "groupId": "group-content-daily-checklist",
    "outcome": "Use compatible content tools to create a repeatable daily operating checklist for Online courses.",
    "prompt": "Build a 8-panel workflow for Online courses: create a repeatable daily operating checklist using content tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible content chain.",
    "complexity": "mid-8",
    "layout": "2x4",
    "executionMode": "hybrid",
    "toolCount": 8,
    "panelCount": 8,
    "maxNestedUiDepth": 1,
    "tags": [
      "online-courses",
      "content",
      "daily-checklist",
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
            "toolId": "youtube-description-utm-link-builder",
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
            "toolId": "video-script-text-reverser",
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
            "toolId": "garden-guide-meta-length-checker",
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
            "toolId": "google-result-keyword-density-checker",
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
            "toolId": "form-payload-markdown-table-generator",
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
            "toolId": "plant-profile-utm-link-builder",
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
            "toolId": "invoice-memo-uppercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-seo-daily-checklist-083",
    "title": "Online courses SEO daily checklist workflow",
    "field": "Online courses",
    "businessFunction": "SEO",
    "groupId": "group-seo-daily-checklist",
    "outcome": "Use compatible SEO tools to create a repeatable daily operating checklist for Online courses.",
    "prompt": "Build a 16-panel workflow for Online courses: create a repeatable daily operating checklist using SEO tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible SEO chain.",
    "complexity": "standard-16",
    "layout": "4x4",
    "executionMode": "waterfall",
    "toolCount": 16,
    "panelCount": 16,
    "maxNestedUiDepth": 1,
    "tags": [
      "online-courses",
      "seo",
      "daily-checklist",
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
            "toolId": "homepage-meta-length-checker",
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
            "toolId": "donation-campaign-keyword-density-checker",
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
            "toolId": "garden-guide-utm-link-builder",
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
            "toolId": "svg-snippet-url-encoder",
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
            "toolId": "instagram-caption-title-case-converter",
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
            "toolId": "invoice-memo-markdown-table-generator",
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
            "toolId": "about-page-meta-length-checker",
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
            "toolId": "about-page-keyword-density-checker",
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
            "toolId": "calculator-page-utm-link-builder",
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
            "toolId": "prompt-text-url-encoder",
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
            "toolId": "support-ticket-uppercase-converter",
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
            "toolId": "search-query-markdown-table-generator",
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
            "toolId": "instagram-reel-meta-length-checker",
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
            "toolId": "product-listing-keyword-density-checker",
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
            "toolId": "sitemap-page-utm-link-builder",
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
            "toolId": "form-payload-url-encoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-social-daily-checklist-084",
    "title": "Online courses social media daily checklist workflow",
    "field": "Online courses",
    "businessFunction": "social media",
    "groupId": "group-social-daily-checklist",
    "outcome": "Use compatible social media tools to create a repeatable daily operating checklist for Online courses.",
    "prompt": "Build a 8-panel workflow for Online courses: create a repeatable daily operating checklist using social media tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible social media chain.",
    "complexity": "mid-8",
    "layout": "4x2",
    "executionMode": "hybrid",
    "toolCount": 8,
    "panelCount": 8,
    "maxNestedUiDepth": 1,
    "tags": [
      "online-courses",
      "social",
      "daily-checklist",
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
            "toolId": "raffle-campaign-meta-length-checker",
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
            "toolId": "image-tool-page-keyword-density-checker",
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
            "toolId": "newsletter-campaign-utm-link-builder",
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
            "toolId": "css-class-base64-decoder",
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
            "toolId": "webhook-body-markdown-table-generator",
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
            "toolId": "product-sku-lowercase-converter",
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
            "toolId": "facebook-post-meta-length-checker",
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
            "toolId": "converter-page-keyword-density-checker",
            "role": "extract keyword usage from project text",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-email-daily-checklist-085",
    "title": "Online courses email daily checklist workflow",
    "field": "Online courses",
    "businessFunction": "email",
    "groupId": "group-email-daily-checklist",
    "outcome": "Use compatible email tools to create a repeatable daily operating checklist for Online courses.",
    "prompt": "Build a 32-tool nested workbench for Online courses: create a repeatable daily operating checklist using email tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible email chain.",
    "complexity": "advanced-32",
    "layout": "4x4",
    "executionMode": "hybrid-waterfall",
    "toolCount": 32,
    "panelCount": 16,
    "maxNestedUiDepth": 2,
    "tags": [
      "online-courses",
      "email",
      "daily-checklist",
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
            "toolId": "calculator-page-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "policy-page-utm-link-builder",
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
            "toolId": "html-snippet-base64-decoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 1
          },
          {
            "order": 4,
            "toolId": "log-line-markdown-table-generator",
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
            "toolId": "shipping-note-slug-generator",
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
            "toolId": "pinterest-pin-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 1
          },
          {
            "order": 8,
            "toolId": "google-result-utm-link-builder",
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
            "toolId": "cloudflare-rule-base64-decoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 1
          },
          {
            "order": 10,
            "toolId": "svg-snippet-markdown-table-generator",
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
            "toolId": "garden-journal-trim-whitespace-tool",
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
            "toolId": "contact-page-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 1
          },
          {
            "order": 14,
            "toolId": "category-page-utm-link-builder",
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
            "toolId": "system-message-base64-decoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 1
          },
          {
            "order": 16,
            "toolId": "email-body-markdown-table-generator",
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
            "toolId": "shipping-note-blank-line-remover",
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
            "toolId": "policy-page-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 1
          },
          {
            "order": 20,
            "toolId": "tiktok-caption-utm-link-builder",
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
            "toolId": "python-string-base64-decoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 1
          },
          {
            "order": 22,
            "toolId": "plant-care-notes-markdown-table-generator",
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
            "toolId": "garden-journal-lowercase-converter",
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
            "toolId": "developer-tool-page-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 1
          },
          {
            "order": 26,
            "toolId": "newsletter-campaign-utm-link-builder",
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
            "toolId": "git-branch-base64-decoder",
            "role": "encode or decode URLs, Base64, or HTML-safe text",
            "uiDepth": 1
          },
          {
            "order": 28,
            "toolId": "webhook-body-markdown-table-generator",
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
            "toolId": "seo-title-slug-generator",
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
            "toolId": "product-page-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 1
          },
          {
            "order": 32,
            "toolId": "faq-page-utm-link-builder",
            "role": "create trackable campaign URLs",
            "uiDepth": 2
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-data-daily-checklist-086",
    "title": "Online courses data cleanup daily checklist workflow",
    "field": "Online courses",
    "businessFunction": "data cleanup",
    "groupId": "group-data-daily-checklist",
    "outcome": "Use compatible data cleanup tools to create a repeatable daily operating checklist for Online courses.",
    "prompt": "Build a 16-panel workflow for Online courses: create a repeatable daily operating checklist using data cleanup tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible data cleanup chain.",
    "complexity": "standard-16",
    "layout": "4x4",
    "executionMode": "waterfall",
    "toolCount": 16,
    "panelCount": 16,
    "maxNestedUiDepth": 1,
    "tags": [
      "online-courses",
      "data",
      "daily-checklist",
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
            "toolId": "project-brief-text-reverser",
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
            "toolId": "prompt-text-base64-decoder",
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
            "toolId": "youtube-description-uuid-generator",
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
            "toolId": "plant-care-notes-csv-to-json-converter",
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
            "toolId": "jwt-payload-json-formatter",
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
            "toolId": "response-text-markdown-table-generator",
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
            "toolId": "ebook-chapter-uppercase-converter",
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
            "toolId": "form-payload-base64-decoder",
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
            "toolId": "json-snippet-uuid-generator",
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
            "toolId": "environment-value-csv-to-json-converter",
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
            "toolId": "sql-snippet-json-key-extractor",
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
            "toolId": "canonical-url-markdown-table-generator",
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
            "toolId": "project-brief-extra-space-remover",
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
            "toolId": "base-url-base64-decoder",
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
            "toolId": "shipping-note-uuid-generator",
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
            "toolId": "tracking-link-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-reporting-daily-checklist-087",
    "title": "Online courses reporting daily checklist workflow",
    "field": "Online courses",
    "businessFunction": "reporting",
    "groupId": "group-reporting-daily-checklist",
    "outcome": "Use compatible reporting tools to create a repeatable daily operating checklist for Online courses.",
    "prompt": "Build a micro workflow for Online courses: create a repeatable daily operating checklist using reporting tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible reporting chain.",
    "complexity": "micro-2-4",
    "layout": "2x1",
    "executionMode": "compact-waterfall",
    "toolCount": 4,
    "panelCount": 2,
    "maxNestedUiDepth": 2,
    "tags": [
      "online-courses",
      "reporting",
      "daily-checklist",
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
            "toolId": "youtube-description-slug-generator",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "url-slug-add-weeks-date-calculator",
            "role": "project deadlines and future dates",
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
            "toolId": "schema-markup-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 4,
            "toolId": "regex-pattern-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 2
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-compliance-daily-checklist-088",
    "title": "Online courses compliance daily checklist workflow",
    "field": "Online courses",
    "businessFunction": "compliance",
    "groupId": "group-compliance-daily-checklist",
    "outcome": "Use compatible compliance tools to create a repeatable daily operating checklist for Online courses.",
    "prompt": "Build a 8-panel workflow for Online courses: create a repeatable daily operating checklist using compliance tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible compliance chain.",
    "complexity": "mid-8",
    "layout": "4x2",
    "executionMode": "hybrid",
    "toolCount": 8,
    "panelCount": 8,
    "maxNestedUiDepth": 1,
    "tags": [
      "online-courses",
      "compliance",
      "daily-checklist",
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
            "toolId": "javascript-string-json-minifier",
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
            "toolId": "garden-journal-uppercase-converter",
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
            "toolId": "meta-description-days-between-dates-calculator",
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
            "toolId": "uuid-list-markdown-table-generator",
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
            "toolId": "sitemap-url-json-formatter",
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
    "id": "project-online-courses-scheduling-daily-checklist-089",
    "title": "Online courses scheduling daily checklist workflow",
    "field": "Online courses",
    "businessFunction": "scheduling",
    "groupId": "group-scheduling-daily-checklist",
    "outcome": "Use compatible scheduling tools to create a repeatable daily operating checklist for Online courses.",
    "prompt": "Build a 16-panel workflow for Online courses: create a repeatable daily operating checklist using scheduling tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible scheduling chain.",
    "complexity": "standard-16",
    "layout": "4x4",
    "executionMode": "waterfall",
    "toolCount": 16,
    "panelCount": 16,
    "maxNestedUiDepth": 1,
    "tags": [
      "online-courses",
      "scheduling",
      "daily-checklist",
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
            "toolId": "email-subject-days-between-dates-calculator",
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
            "toolId": "product-listing-date-to-unix-timestamp",
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
            "toolId": "user-message-markdown-table-generator",
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
            "toolId": "project-brief-find-and-replace-tool",
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
            "toolId": "jwt-payload-json-to-csv-converter",
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
            "toolId": "seo-title-days-between-dates-calculator",
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
            "toolId": "press-release-date-to-unix-timestamp",
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
            "toolId": "facebook-bio-markdown-table-generator",
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
            "toolId": "ebook-chapter-slug-generator",
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
            "toolId": "commit-message-json-to-csv-converter",
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
            "toolId": "json-snippet-days-between-dates-calculator",
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
            "toolId": "plant-care-notes-date-to-unix-timestamp",
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
            "toolId": "python-string-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-product-daily-checklist-090",
    "title": "Online courses product daily checklist workflow",
    "field": "Online courses",
    "businessFunction": "product",
    "groupId": "group-product-daily-checklist",
    "outcome": "Use compatible product tools to create a repeatable daily operating checklist for Online courses.",
    "prompt": "Build a 64-tool nested waterfall for Online courses: create a repeatable daily operating checklist using product tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible product chain.",
    "complexity": "nested-64",
    "layout": "4x4",
    "executionMode": "nested-waterfall",
    "toolCount": 64,
    "panelCount": 16,
    "maxNestedUiDepth": 4,
    "tags": [
      "online-courses",
      "product",
      "daily-checklist",
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
            "toolId": "markdown-link-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "tracking-link-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 2
          },
          {
            "order": 3,
            "toolId": "seo-title-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 4,
            "toolId": "ad-copy-percent-change-calculator",
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
            "toolId": "environment-value-json-formatter",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 1
          },
          {
            "order": 6,
            "toolId": "brand-name-trim-whitespace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 7,
            "toolId": "customer-reply-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 3
          },
          {
            "order": 8,
            "toolId": "error-message-markdown-table-generator",
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
            "toolId": "markdown-doc-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 10,
            "toolId": "podcast-notes-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 2
          },
          {
            "order": 11,
            "toolId": "query-string-json-key-extractor",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 3
          },
          {
            "order": 12,
            "toolId": "meeting-notes-extra-space-remover",
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
            "toolId": "sql-snippet-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 14,
            "toolId": "prompt-text-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 2
          },
          {
            "order": 15,
            "toolId": "folder-name-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 16,
            "toolId": "instagram-caption-percent-change-calculator",
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
            "toolId": "callback-url-json-minifier",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 1
          },
          {
            "order": 18,
            "toolId": "brand-name-lowercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 19,
            "toolId": "log-line-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 3
          },
          {
            "order": 20,
            "toolId": "yaml-value-markdown-table-generator",
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
            "toolId": "brand-name-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 22,
            "toolId": "domain-list-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 2
          },
          {
            "order": 23,
            "toolId": "oauth-state-json-key-extractor",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 3
          },
          {
            "order": 24,
            "toolId": "markdown-doc-text-reverser",
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
            "toolId": "css-class-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 26,
            "toolId": "html-snippet-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 2
          },
          {
            "order": 27,
            "toolId": "product-listing-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 28,
            "toolId": "url-slug-percent-change-calculator",
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
            "toolId": "webhook-body-json-minifier",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 1
          },
          {
            "order": 30,
            "toolId": "blog-post-trim-whitespace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 31,
            "toolId": "seo-title-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 3
          },
          {
            "order": 32,
            "toolId": "response-text-markdown-table-generator",
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
            "toolId": "json-snippet-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 34,
            "toolId": "meta-description-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 2
          },
          {
            "order": 35,
            "toolId": "json-config-json-key-extractor",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 3
          },
          {
            "order": 36,
            "toolId": "markdown-doc-extra-space-remover",
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
            "toolId": "jwt-payload-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 38,
            "toolId": "canonical-url-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 2
          },
          {
            "order": 39,
            "toolId": "email-subject-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 40,
            "toolId": "garden-journal-percent-change-calculator",
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
            "toolId": "sitemap-url-json-minifier",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 1
          },
          {
            "order": 42,
            "toolId": "blog-post-lowercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 43,
            "toolId": "commit-message-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 3
          },
          {
            "order": 44,
            "toolId": "json-config-markdown-table-generator",
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
            "toolId": "youtube-description-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 46,
            "toolId": "code-comment-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 2
          },
          {
            "order": 47,
            "toolId": "html-snippet-json-key-extractor",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 3
          },
          {
            "order": 48,
            "toolId": "landing-page-text-reverser",
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
            "toolId": "search-query-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 50,
            "toolId": "sitemap-url-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 2
          },
          {
            "order": 51,
            "toolId": "plant-care-notes-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 52,
            "toolId": "recipe-notes-percent-change-calculator",
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
            "toolId": "robots-rule-json-minifier",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 1
          },
          {
            "order": 54,
            "toolId": "ad-copy-trim-whitespace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 55,
            "toolId": "javascript-string-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 3
          },
          {
            "order": 56,
            "toolId": "customer-reply-markdown-table-generator",
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
            "toolId": "html-block-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 1
          },
          {
            "order": 58,
            "toolId": "keyword-list-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 2
          },
          {
            "order": 59,
            "toolId": "csv-cell-json-formatter",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 3
          },
          {
            "order": 60,
            "toolId": "landing-page-extra-space-remover",
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
            "toolId": "canonical-url-json-to-csv-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 62,
            "toolId": "newsletter-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 2
          },
          {
            "order": 63,
            "toolId": "customer-reply-percentage-calculator",
            "role": "calculate a share, discount, or completion rate",
            "uiDepth": 3
          },
          {
            "order": 64,
            "toolId": "facebook-bio-percent-change-calculator",
            "role": "compare before/after values",
            "uiDepth": 4
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-ux-daily-checklist-091",
    "title": "Online courses UX/UI daily checklist workflow",
    "field": "Online courses",
    "businessFunction": "UX/UI",
    "groupId": "group-ux-daily-checklist",
    "outcome": "Use compatible UX/UI tools to create a repeatable daily operating checklist for Online courses.",
    "prompt": "Build a micro workflow for Online courses: create a repeatable daily operating checklist using UX/UI tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible UX/UI chain.",
    "complexity": "micro-2-4",
    "layout": "2x1",
    "executionMode": "compact-waterfall",
    "toolCount": 4,
    "panelCount": 2,
    "maxNestedUiDepth": 2,
    "tags": [
      "online-courses",
      "ux",
      "daily-checklist",
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
            "toolId": "shipping-note-find-and-replace-tool",
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
        "uiTitle": "UX/UI node 2",
        "mode": "waterfall",
        "tools": [
          {
            "order": 3,
            "toolId": "developer-tool-page-meta-length-checker",
            "role": "check title and description length for web publishing",
            "uiDepth": 1
          },
          {
            "order": 4,
            "toolId": "converter-page-keyword-density-checker",
            "role": "extract keyword usage from project text",
            "uiDepth": 2
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-web-launch-daily-checklist-092",
    "title": "Online courses web launch daily checklist workflow",
    "field": "Online courses",
    "businessFunction": "web launch",
    "groupId": "group-web-launch-daily-checklist",
    "outcome": "Use compatible web launch tools to create a repeatable daily operating checklist for Online courses.",
    "prompt": "Build a 16-panel workflow for Online courses: create a repeatable daily operating checklist using web launch tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible web launch chain.",
    "complexity": "standard-16",
    "layout": "4x4",
    "executionMode": "waterfall",
    "toolCount": 16,
    "panelCount": 16,
    "maxNestedUiDepth": 1,
    "tags": [
      "online-courses",
      "web-launch",
      "daily-checklist",
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
            "toolId": "blog-article-keyword-density-checker",
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
            "toolId": "contact-page-utm-link-builder",
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
            "toolId": "python-string-json-minifier",
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
            "toolId": "order-note-hex-to-rgb-converter",
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
            "toolId": "ebook-chapter-color-contrast-checker",
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
            "toolId": "review-page-meta-length-checker",
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
            "toolId": "raffle-campaign-keyword-density-checker",
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
            "toolId": "tool-page-utm-link-builder",
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
            "toolId": "callback-url-json-formatter",
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
            "toolId": "facebook-bio-hex-to-rgb-converter",
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
            "toolId": "order-note-color-contrast-checker",
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
            "toolId": "faq-page-meta-length-checker",
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
            "toolId": "instagram-reel-keyword-density-checker",
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
            "toolId": "pinterest-pin-utm-link-builder",
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
            "toolId": "jwt-payload-json-minifier",
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
            "toolId": "sitemap-entry-hex-to-rgb-converter",
            "role": "convert brand colors and palette values",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-developer-daily-checklist-093",
    "title": "Online courses developer daily checklist workflow",
    "field": "Online courses",
    "businessFunction": "developer",
    "groupId": "group-developer-daily-checklist",
    "outcome": "Use compatible developer tools to create a repeatable daily operating checklist for Online courses.",
    "prompt": "Build a micro workflow for Online courses: create a repeatable daily operating checklist using developer tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible developer chain.",
    "complexity": "micro-2-4",
    "layout": "1x1",
    "executionMode": "compact-waterfall",
    "toolCount": 3,
    "panelCount": 1,
    "maxNestedUiDepth": 3,
    "tags": [
      "online-courses",
      "developer",
      "daily-checklist",
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
            "toolId": "store-url-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "email-body-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 2
          },
          {
            "order": 3,
            "toolId": "oauth-state-json-minifier",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 3
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-security-daily-checklist-094",
    "title": "Online courses security daily checklist workflow",
    "field": "Online courses",
    "businessFunction": "security",
    "groupId": "group-security-daily-checklist",
    "outcome": "Use compatible security tools to create a repeatable daily operating checklist for Online courses.",
    "prompt": "Build a 8-panel workflow for Online courses: create a repeatable daily operating checklist using security tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible security chain.",
    "complexity": "mid-8",
    "layout": "2x4",
    "executionMode": "hybrid",
    "toolCount": 8,
    "panelCount": 8,
    "maxNestedUiDepth": 1,
    "tags": [
      "online-courses",
      "security",
      "daily-checklist",
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
            "toolId": "search-query-markdown-table-generator",
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
            "toolId": "recipe-notes-password-generator",
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
            "toolId": "meeting-notes-uuid-generator",
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
            "toolId": "image-alt-text-url-decoder",
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
            "toolId": "webhook-body-json-minifier",
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
            "toolId": "url-slug-slug-generator",
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
            "toolId": "cookie-value-markdown-table-generator",
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
            "toolId": "donation-page-password-generator",
            "role": "create secure passwords for the project",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-training-daily-checklist-095",
    "title": "Online courses training daily checklist workflow",
    "field": "Online courses",
    "businessFunction": "training",
    "groupId": "group-training-daily-checklist",
    "outcome": "Use compatible training tools to create a repeatable daily operating checklist for Online courses.",
    "prompt": "Build a 32-tool nested workbench for Online courses: create a repeatable daily operating checklist using training tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible training chain.",
    "complexity": "advanced-32",
    "layout": "4x4",
    "executionMode": "hybrid-waterfall",
    "toolCount": 32,
    "panelCount": 16,
    "maxNestedUiDepth": 2,
    "tags": [
      "online-courses",
      "training",
      "daily-checklist",
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
            "toolId": "product-sku-uppercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "javascript-string-markdown-table-generator",
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
            "toolId": "folder-name-days-between-dates-calculator",
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
            "toolId": "sql-snippet-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 6,
            "toolId": "file-name-percentage-calculator",
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
            "toolId": "ebook-chapter-find-and-replace-tool",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 8,
            "toolId": "seo-title-markdown-table-generator",
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
            "toolId": "ad-copy-days-between-dates-calculator",
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
            "toolId": "log-line-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 12,
            "toolId": "blog-post-percentage-calculator",
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
            "toolId": "product-sku-sentence-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 14,
            "toolId": "csv-cell-markdown-table-generator",
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
            "toolId": "markdown-doc-days-between-dates-calculator",
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
            "toolId": "css-class-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 18,
            "toolId": "press-release-percentage-calculator",
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
            "toolId": "donation-page-title-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 20,
            "toolId": "meta-description-markdown-table-generator",
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
            "toolId": "file-name-days-between-dates-calculator",
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
            "toolId": "seo-title-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 24,
            "toolId": "invoice-memo-percentage-calculator",
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
            "toolId": "product-listing-uppercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 26,
            "toolId": "tool-url-markdown-table-generator",
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
            "toolId": "youtube-description-days-between-dates-calculator",
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
            "toolId": "jwt-payload-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 1
          },
          {
            "order": 30,
            "toolId": "ebook-chapter-percentage-calculator",
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
            "toolId": "donation-page-extra-space-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          },
          {
            "order": 32,
            "toolId": "environment-value-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 2
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-inventory-daily-checklist-096",
    "title": "Online courses inventory daily checklist workflow",
    "field": "Online courses",
    "businessFunction": "inventory",
    "groupId": "group-inventory-daily-checklist",
    "outcome": "Use compatible inventory tools to create a repeatable daily operating checklist for Online courses.",
    "prompt": "Build a 8-panel workflow for Online courses: create a repeatable daily operating checklist using inventory tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible inventory chain.",
    "complexity": "mid-8",
    "layout": "4x2",
    "executionMode": "hybrid",
    "toolCount": 8,
    "panelCount": 8,
    "maxNestedUiDepth": 1,
    "tags": [
      "online-courses",
      "inventory",
      "daily-checklist",
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
            "toolId": "url-slug-percentage-calculator",
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
            "toolId": "day-to-year-365-day-converter",
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
            "toolId": "cloudflare-rule-markdown-table-generator",
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
            "toolId": "domain-list-uppercase-converter",
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
            "toolId": "newsletter-csv-to-json-converter",
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
            "toolId": "meta-description-percentage-calculator",
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
            "toolId": "micrometer-to-inch-converter",
            "role": "convert operational measurements",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-pricing-daily-checklist-097",
    "title": "Online courses pricing daily checklist workflow",
    "field": "Online courses",
    "businessFunction": "pricing",
    "groupId": "group-pricing-daily-checklist",
    "outcome": "Use compatible pricing tools to create a repeatable daily operating checklist for Online courses.",
    "prompt": "Build a micro workflow for Online courses: create a repeatable daily operating checklist using pricing tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible pricing chain.",
    "complexity": "micro-2-4",
    "layout": "1x1",
    "executionMode": "compact-waterfall",
    "toolCount": 3,
    "panelCount": 1,
    "maxNestedUiDepth": 3,
    "tags": [
      "online-courses",
      "pricing",
      "daily-checklist",
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
            "toolId": "client-invoice-total-calculator",
            "role": "calculate invoice totals from line-item assumptions",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "podcast-notes-rectangle-area-calculator",
            "role": "run a lightweight business formula",
            "uiDepth": 2
          },
          {
            "order": 3,
            "toolId": "compound-interest-calculator",
            "role": "model long-term growth or recurring gains",
            "uiDepth": 3
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-outreach-daily-checklist-098",
    "title": "Online courses outreach daily checklist workflow",
    "field": "Online courses",
    "businessFunction": "outreach",
    "groupId": "group-outreach-daily-checklist",
    "outcome": "Use compatible outreach tools to create a repeatable daily operating checklist for Online courses.",
    "prompt": "Build a 16-panel workflow for Online courses: create a repeatable daily operating checklist using outreach tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible outreach chain.",
    "complexity": "standard-16",
    "layout": "4x4",
    "executionMode": "waterfall",
    "toolCount": 16,
    "panelCount": 16,
    "maxNestedUiDepth": 1,
    "tags": [
      "online-courses",
      "outreach",
      "daily-checklist",
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
            "toolId": "form-payload-url-encoder",
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
            "toolId": "homepage-keyword-density-checker",
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
            "toolId": "garden-journal-markdown-table-generator",
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
            "toolId": "plant-care-notes-trim-whitespace-tool",
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
            "toolId": "plant-profile-meta-length-checker",
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
            "toolId": "youtube-description-utm-link-builder",
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
            "toolId": "base-url-url-encoder",
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
            "toolId": "contact-page-keyword-density-checker",
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
            "toolId": "recipe-notes-markdown-table-generator",
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
            "toolId": "csv-export-blank-line-remover",
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
            "toolId": "converter-page-meta-length-checker",
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
            "toolId": "plant-profile-utm-link-builder",
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
            "toolId": "sql-snippet-url-encoder",
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
            "toolId": "tool-page-keyword-density-checker",
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
            "toolId": "base-url-markdown-table-generator",
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
            "toolId": "plant-care-notes-lowercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 1
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-research-daily-checklist-099",
    "title": "Online courses research daily checklist workflow",
    "field": "Online courses",
    "businessFunction": "research",
    "groupId": "group-research-daily-checklist",
    "outcome": "Use compatible research tools to create a repeatable daily operating checklist for Online courses.",
    "prompt": "Build a micro workflow for Online courses: create a repeatable daily operating checklist using research tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible research chain.",
    "complexity": "micro-2-4",
    "layout": "2x1",
    "executionMode": "compact-waterfall",
    "toolCount": 4,
    "panelCount": 2,
    "maxNestedUiDepth": 2,
    "tags": [
      "online-courses",
      "research",
      "daily-checklist",
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
            "toolId": "robots-rule-json-key-extractor",
            "role": "format, validate, or extract useful keys from JSON",
            "uiDepth": 1
          },
          {
            "order": 2,
            "toolId": "product-listing-lowercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
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
            "toolId": "all-stats-word-counter",
            "role": "measure the payload and expose readability-style text statistics",
            "uiDepth": 1
          },
          {
            "order": 4,
            "toolId": "tool-page-keyword-density-checker",
            "role": "extract keyword usage from project text",
            "uiDepth": 2
          }
        ]
      }
    ]
  },
  {
    "id": "project-online-courses-project-management-daily-checklist-100",
    "title": "Online courses project management daily checklist workflow",
    "field": "Online courses",
    "businessFunction": "project management",
    "groupId": "group-project-management-daily-checklist",
    "outcome": "Use compatible project management tools to create a repeatable daily operating checklist for Online courses.",
    "prompt": "Build a 64-tool nested waterfall for Online courses: create a repeatable daily operating checklist using project management tools, linked project data, and a visible completion trail.",
    "inputHint": "Paste Online courses notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible project management chain.",
    "complexity": "nested-64",
    "layout": "4x4",
    "executionMode": "nested-waterfall",
    "toolCount": 64,
    "panelCount": 16,
    "maxNestedUiDepth": 4,
    "tags": [
      "online-courses",
      "project-management",
      "daily-checklist",
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
            "toolId": "press-release-percentage-calculator",
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
            "toolId": "youtube-description-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 3
          },
          {
            "order": 4,
            "toolId": "community-rule-text-reverser",
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
            "toolId": "python-string-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 6,
            "toolId": "garden-journal-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 2
          },
          {
            "order": 7,
            "toolId": "invoice-memo-percentage-calculator",
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
            "toolId": "landing-page-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          },
          {
            "order": 10,
            "toolId": "meta-description-uppercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 11,
            "toolId": "youtube-description-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 12,
            "toolId": "worker-route-csv-to-json-converter",
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
            "toolId": "ebook-chapter-percentage-calculator",
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
            "toolId": "facebook-bio-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 3
          },
          {
            "order": 16,
            "toolId": "community-rule-extra-space-remover",
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
            "toolId": "image-alt-text-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 18,
            "toolId": "product-listing-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 2
          },
          {
            "order": 19,
            "toolId": "video-script-percentage-calculator",
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
            "toolId": "url-slug-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          },
          {
            "order": 22,
            "toolId": "meta-description-sentence-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 23,
            "toolId": "robots-rule-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 24,
            "toolId": "facebook-bio-csv-to-json-converter",
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
            "toolId": "newsletter-percentage-calculator",
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
            "toolId": "keyword-list-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 3
          },
          {
            "order": 28,
            "toolId": "code-comment-text-reverser",
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
            "toolId": "cloudflare-rule-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 30,
            "toolId": "uuid-list-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 2
          },
          {
            "order": 31,
            "toolId": "hashtag-set-percentage-calculator",
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
            "toolId": "email-subject-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          },
          {
            "order": 34,
            "toolId": "meeting-notes-uppercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 35,
            "toolId": "jwt-payload-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 36,
            "toolId": "plant-care-notes-csv-to-json-converter",
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
            "toolId": "csv-export-percentage-calculator",
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
            "toolId": "seo-title-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 3
          },
          {
            "order": 40,
            "toolId": "code-comment-extra-space-remover",
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
            "toolId": "sql-snippet-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 42,
            "toolId": "environment-value-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 2
          },
          {
            "order": 43,
            "toolId": "resume-bullet-percentage-calculator",
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
            "toolId": "json-snippet-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          },
          {
            "order": 46,
            "toolId": "meeting-notes-sentence-case-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 47,
            "toolId": "dns-record-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 48,
            "toolId": "tracking-link-csv-to-json-converter",
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
            "toolId": "landing-page-percentage-calculator",
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
            "toolId": "domain-list-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 3
          },
          {
            "order": 52,
            "toolId": "brand-name-text-reverser",
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
            "toolId": "oauth-state-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 1
          },
          {
            "order": 54,
            "toolId": "oauth-state-csv-to-json-converter",
            "role": "convert CSV, inspect tabular rows, or prepare structured data",
            "uiDepth": 2
          },
          {
            "order": 55,
            "toolId": "file-name-percentage-calculator",
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
            "toolId": "recipe-notes-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 1
          },
          {
            "order": 58,
            "toolId": "markdown-doc-uppercase-converter",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 2
          },
          {
            "order": 59,
            "toolId": "user-message-markdown-table-generator",
            "role": "turn data into a readable Markdown table",
            "uiDepth": 3
          },
          {
            "order": 60,
            "toolId": "email-body-csv-to-json-converter",
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
            "toolId": "blog-post-percentage-calculator",
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
            "toolId": "invoice-memo-days-between-dates-calculator",
            "role": "measure durations between dates",
            "uiDepth": 3
          },
          {
            "order": 64,
            "toolId": "brand-name-extra-space-remover",
            "role": "rewrite, summarize, clean, or format the shared text payload",
            "uiDepth": 4
          }
        ]
      }
    ]
  }
];

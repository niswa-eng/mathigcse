import { Unit } from '../types/content';

export const unit17: Unit = {
  "id": 17,
  "title": "Managing money",
  "learningObjectives": [
    "C17.1, E17.1: Simple interest I = (P * R * T) / 100",
    "C17.2, E17.2: Compound interest formula A = P(1 + r/100)^n and depreciation",
    "C17.3, E17.3: Currency conversions, percentage profit and loss, discounts, and reverse percentages in financial contexts"
  ],
  "subtopics": [
    {
      "id": "17.1",
      "number": "17.1",
      "title": "Simple & compound interest",
      "type": "lesson",
      "level": "both",
      "steps": [
        {
          "id": "17.1-1",
          "title": "Concept & Intuition: Simple vs Compound Interest",
          "type": "concept",
          "level": "both",
          "badgeText": "Concept & Intuition",
          "summary": "- **Simple Interest**: Interest is calculated ONLY on the original principal $P$ every year.\n- **Compound Interest**: Interest is added to the principal, so you earn 'interest on your interest' each subsequent year.\n- **Depreciation**: Value decreases each year by a fixed percentage (multiplier $< 1$).",
          "analogy": "A snowball rolling downhill: simple interest adds a fixed handful of snow each second; compound interest grows faster and faster as the snowball itself gets bigger.",
          "terms": [
            {
              "term": "Principal (P)",
              "definition": "The initial sum of money invested or borrowed.",
              "example": "Investing $5000 initially."
            },
            {
              "term": "Compound Multiplier",
              "definition": "For an interest rate of $r\\%$, the multiplier is $\\left(1 + \\frac{r}{100}\\right)$. For depreciation, it is $\\left(1 - \\frac{r}{100}\\right)$.",
              "example": "$5\\%$ interest $\\implies 1.05$; $10\\%$ depreciation $\\implies 0.90$."
            }
          ],
          "rules": [
            {
              "title": "Simple Interest Formula",
              "latex": "I = \\frac{P \\times R \\times T}{100}, \\quad \\text{Total} = P + I",
              "explanation": "$P$ = principal, $R$ = rate (%), $T$ = time (years)."
            },
            {
              "title": "Compound Interest Formula",
              "latex": "A = P\\left(1 + \\frac{r}{100}\\right)^n",
              "explanation": "$A$ is the total amount after $n$ periods."
            }
          ]
        },
        {
          "id": "17.1-2",
          "title": "Worked Example: Comparing Simple & Compound Interest",
          "type": "worked_example",
          "level": "both",
          "badgeText": "Worked Example",
          "workedProblem": {
            "statement": "Zara invests $4000 for 3 years at 5% per annum.\n(a) Calculate the total value under Simple Interest.\n(b) Calculate the total value under Compound Interest.\n(c) A car bought for $18,000 depreciates by 12% per year. Find its value after 4 years.",
            "steps": [
              {
                "stepNumber": 1,
                "instruction": "For simple interest: $I = \\frac{4000 \\times 5 \\times 3}{100} = 600$.",
                "latex": "\\text{Total} = 4000 + 600 = \\$4600",
                "note": "Add interest to principal."
              },
              {
                "stepNumber": 2,
                "instruction": "For compound interest, multiplier is $1 + 0.05 = 1.05$.",
                "latex": "A = 4000 \\times (1.05)^3 = 4000 \\times 1.157625 = \\$4630.50",
                "note": "Exponential multiplier."
              },
              {
                "stepNumber": 3,
                "instruction": "For depreciation, multiplier is $1 - 0.12 = 0.88$.",
                "latex": "\\text{Value} = 18000 \\times (0.88)^4 = 18000 \\times 0.599695 \\approx \\$10,794.52",
                "note": "Depreciation reduces value."
              }
            ],
            "finalAnswer": "(a) $4600; (b) $4630.50; (c) $10,794.52"
          }
        },
        {
          "id": "17.1-3",
          "title": "Common Mistake & Pro Tip: Interest vs Total Amount",
          "type": "common_mistakes",
          "level": "both",
          "badgeText": "Common Mistake & Pro Tip",
          "commonMistakes": [
            {
              "mistake": "Confusing total amount $A$ with interest $I$. In compound interest, $A = P(1+r/100)^n$ gives the TOTAL, not the interest alone.",
              "correction": "To find compound interest earned, subtract the principal: $I = A - P$.",
              "examinerTip": "Always round currency to 2 decimal places (cents) unless the question states otherwise (e.g. nearest dollar).",
              "memoryTrick": "$A$ = All together (Total); $I$ = Interest alone."
            }
          ]
        },
        {
          "id": "17.1-4",
          "title": "Exercise: Level 1 (Basic)",
          "type": "exercise_1",
          "level": "both",
          "badgeText": "Exercise: Level 1 (Basic)",
          "questions": [
            {
              "id": "17.1-q1",
              "number": 1,
              "question": "Calculate the simple interest on $800 at 4% per year for 3 years.",
              "working": [
                "I = (800 * 4 * 3) / 100 = 96"
              ],
              "answer": "$96"
            },
            {
              "id": "17.1-q2",
              "number": 2,
              "question": "State the single decimal multiplier for: (a) 6% increase, (b) 15% decrease.",
              "working": [
                "(a) 1 + 0.06 = 1.06",
                "(b) 1 - 0.15 = 0.85"
              ],
              "answer": "(a) 1.06; (b) 0.85"
            },
            {
              "id": "17.1-q3",
              "number": 3,
              "question": "Work out $1200 invested at 3% compound interest for 2 years.",
              "working": [
                "1200 * (1.03)^2 = 1200 * 1.0609 = $1273.08"
              ],
              "answer": "$1273.08"
            }
          ]
        },
        {
          "id": "17.1-5",
          "title": "Exercise: Level 2 (Real-World Scenarios)",
          "type": "exercise_2",
          "level": "both",
          "badgeText": "Exercise: Level 2 (Real-World)",
          "questions": [
            {
              "id": "17.1-q4",
              "number": 1,
              "question": "Maya deposits $5000 in a savings account paying 4.5% compound interest per year. How much interest in total has she earned after 3 years?",
              "working": [
                "A = 5000 * (1.045)^3 = 5000 * 1.141166 = $5705.83",
                "Interest = 5705.83 - 5000 = $705.83"
              ],
              "answer": "$705.83"
            },
            {
              "id": "17.1-q5",
              "number": 2,
              "question": "A company computer system depreciates by 20% each year. If bought for $15,000, what is its value after 3 years?",
              "working": [
                "15000 * (0.80)^3 = 15000 * 0.512 = $7680"
              ],
              "answer": "$7680"
            },
            {
              "id": "17.1-q6",
              "number": 3,
              "question": "Exchange rate: $1 USD = 0.82 EUR. Convert: (a) $350 USD to EUR, (b) 410 EUR to USD.",
              "working": [
                "(a) 350 * 0.82 = 287 EUR",
                "(b) 410 / 0.82 = $500 USD"
              ],
              "answer": "(a) 287 EUR; (b) $500 USD"
            }
          ]
        },
        {
          "id": "17.1-6",
          "title": "Exercise: Level 3 (Exam-Style)",
          "type": "exercise_3",
          "level": "both",
          "badgeText": "Exercise: Level 3 (Exam-Style)",
          "questions": [
            {
              "id": "17.1-q7",
              "number": 1,
              "marks": 3,
              "question": "In a sale, a coat is reduced by 25% to $135.\nCalculate the original price of the coat before the sale. [3 marks]",
              "working": [
                "75% of original = $135",
                "Original = 135 / 0.75 = $180"
              ],
              "answer": "$180",
              "markBreakdown": "M1 for 0.75 * original = 135, M1 for 135 / 0.75, A1 for $180"
            },
            {
              "id": "17.1-q8",
              "number": 2,
              "marks": 4,
              "question": "Daniel invests $P at 3.5% per annum compound interest.\nAfter 2 years, the total amount in the account is $8573.05.\nCalculate the original amount invested $P. [4 marks]",
              "working": [
                "P * (1.035)^2 = 8573.05",
                "P * 1.071225 = 8573.05",
                "P = 8573.05 / 1.071225 = $8000"
              ],
              "answer": "$8000",
              "markBreakdown": "M2 for P * (1.035)^2 = 8573.05, M1 for division, A1 for $8000"
            },
            {
              "id": "17.1-q9",
              "number": 3,
              "marks": 4,
              "question": "Bank A offers 4% simple interest for 5 years. Bank B offers 3.8% compound interest for 5 years.\nWhich bank yields more interest on an investment of $10,000, and by how much? [4 marks]",
              "working": [
                "Bank A: I = (10000 * 4 * 5) / 100 = $2000",
                "Bank B: A = 10000 * (1.038)^5 = 10000 * 1.20501 = $12,050.10 => Interest = $2050.10",
                "Bank B gives more by 2050.10 - 2000 = $50.10"
              ],
              "answer": "Bank B gives $50.10 more interest",
              "markBreakdown": "M1 for Bank A interest $2000, M1 for Bank B interest $2050.10, M1 for difference, A1 for Bank B by $50.10"
            }
          ]
        }
      ]
    },
    {
      "id": "17.test",
      "number": "Test 17",
      "title": "Chapter 17 Test: Managing money",
      "type": "chapterTest",
      "level": "both",
      "steps": [
        {
          "id": "17.test-1",
          "title": "Chapter 17 Test: Part A (Basic Recall)",
          "type": "test_part_a",
          "level": "both",
          "badgeText": "Test Part A: Core Recall",
          "questions": [
            {
              "id": "17.t-1",
              "number": 1,
              "marks": 2,
              "question": "Work out the simple interest on $500 at 6% for 2 years.",
              "working": [
                "I = (500 * 6 * 2) / 100 = $60"
              ],
              "answer": "$60",
              "markBreakdown": "M1 for formula, A1 for $60"
            },
            {
              "id": "17.t-2",
              "number": 2,
              "marks": 2,
              "question": "A jacket costs $80 and is discounted by 15%. What is the sale price?",
              "working": [
                "80 * 0.85 = $68"
              ],
              "answer": "$68",
              "markBreakdown": "M1 for 80 * 0.85, A1 for $68"
            },
            {
              "id": "17.t-3",
              "number": 3,
              "marks": 2,
              "question": "Convert 200 GBP to USD at an exchange rate of 1 GBP = 1.30 USD.",
              "working": [
                "200 * 1.30 = $260"
              ],
              "answer": "$260",
              "markBreakdown": "M1 for 200 * 1.30, A1 for $260"
            }
          ]
        },
        {
          "id": "17.test-2",
          "title": "Chapter 17 Test: Part B (Real-World Problems)",
          "type": "test_part_b",
          "level": "both",
          "badgeText": "Test Part B: Multi-Step Real-World Application",
          "questions": [
            {
              "id": "17.t-4",
              "number": 1,
              "marks": 3,
              "question": "A trader buys a phone for $240 and sells it for $300. Calculate the percentage profit.",
              "working": [
                "Profit = 300 - 240 = $60",
                "Percentage profit = (60 / 240) * 100 = 25%"
              ],
              "answer": "25%",
              "markBreakdown": "M1 for profit $60, M1 for 60/240 * 100, A1 for 25%"
            },
            {
              "id": "17.t-5",
              "number": 2,
              "marks": 3,
              "question": "A diamond ring appreciated in value by 8% to $5400. Find its original value.",
              "working": [
                "1.08 * original = 5400 => original = 5400 / 1.08 = $5000"
              ],
              "answer": "$5000",
              "markBreakdown": "M1 for 1.08 * orig = 5400, M1 for division, A1 for $5000"
            },
            {
              "id": "17.t-6",
              "number": 3,
              "marks": 4,
              "question": "A car loses 15% of its value in year 1 and 10% of its remaining value in year 2. If it was bought for $20,000, what is its value after 2 years?",
              "working": [
                "Year 1: 20000 * 0.85 = $17,000",
                "Year 2: 17000 * 0.90 = $15,300"
              ],
              "answer": "$15,300",
              "markBreakdown": "M2 for 20000 * 0.85, M1 for * 0.90, A1 for $15,300"
            }
          ]
        },
        {
          "id": "17.test-3",
          "title": "Chapter 17 Test: Part C (Exam-Style Challenge)",
          "type": "test_part_c",
          "level": "both",
          "badgeText": "Test Part C: Exam Challenge",
          "questions": [
            {
              "id": "17.t-7",
              "number": 1,
              "marks": 4,
              "question": "An investment of $6000 grows to $6988.91 at $r\\%$ compound interest over 3 years. Find the annual interest rate $r$. [4 marks]",
              "working": [
                "6000 * (1 + r/100)^3 = 6988.91",
                "(1 + r/100)^3 = 6988.91 / 6000 ≈ 1.164818",
                "1 + r/100 = 1.164818^(1/3) ≈ 1.052 => r = 5.2%"
              ],
              "answer": "5.2%",
              "markBreakdown": "M1 for formula setup, M1 for ratio 1.1648, M1 for cube root 1.052, A1 for r = 5.2%"
            },
            {
              "id": "17.t-8",
              "number": 2,
              "marks": 5,
              "question": "Elena converts 1500 USD to Euros at 1 USD = 0.84 EUR, paying 2% commission fee taken from the USD amount before conversion. How many Euros does she receive? [5 marks]",
              "working": [
                "Commission = 2% of 1500 = $30",
                "Amount converted = 1500 - 30 = $1470",
                "Euros received = 1470 * 0.84 = 1234.80 EUR"
              ],
              "answer": "1234.80 EUR",
              "markBreakdown": "M1 for 2% = $30, M1 for $1470, M2 for 1470 * 0.84, A1 for 1234.80 EUR"
            },
            {
              "id": "17.t-9",
              "number": 3,
              "marks": 4,
              "question": "A house was bought for $250,000. It increases by 5% per year for 4 years, then decreases by 3% in year 5. Find the final value to the nearest dollar. [4 marks]",
              "working": [
                "After 4 years: 250000 * (1.05)^4 = 250000 * 1.215506 = $303,876.56",
                "After year 5: 303876.56 * 0.97 = $294,760.26 => $294,760"
              ],
              "answer": "$294,760",
              "markBreakdown": "M2 for (1.05)^4, M1 for * 0.97, A1 for $294,760"
            }
          ]
        }
      ]
    }
  ]
};

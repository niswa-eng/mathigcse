import { Unit } from '../types/content';

export const unit16: Unit = {
  "id": 16,
  "title": "Scatter diagrams and correlation",
  "learningObjectives": [
    "C16.1, E16.1: Plotting scatter diagrams and identifying types of correlation (positive, negative, zero)",
    "C16.2, E16.2: Drawing a line of best fit by eye through the mean point (x̄, ȳ)",
    "C16.3, E16.3: Estimating values using interpolation and understanding the dangers of extrapolation"
  ],
  "subtopics": [
    {
      "id": "16.1",
      "number": "16.1",
      "title": "Scatter diagrams, correlation & line of best fit",
      "type": "lesson",
      "level": "both",
      "steps": [
        {
          "id": "16.1-1",
          "title": "Concept & Intuition: Scatter Plots & Line of Best Fit",
          "type": "concept",
          "level": "both",
          "badgeText": "Concept & Intuition",
          "summary": "A scatter diagram investigates the relationship between two bivariate variables.\n- **Positive correlation**: As $x$ increases, $y$ increases (slopes upward).\n- **Negative correlation**: As $x$ increases, $y$ decreases (slopes downward).\n- **Zero correlation**: Points are scattered randomly with no trend.\nThe **Line of Best Fit** must pass through the mean point $(\\bar{x}, \\bar{y})$ and balance points roughly equally on either side.",
          "analogy": "Hours spent studying vs test score is positive correlation. Temperature outside vs heating bill is negative correlation.",
          "terms": [
            {
              "term": "Correlation",
              "definition": "A statistical relationship between two variables. (Note: correlation does not imply causation!).",
              "example": "Taller people generally have larger shoe sizes."
            },
            {
              "term": "Interpolation vs Extrapolation",
              "definition": "Interpolation: estimating WITHIN data range (reliable). Extrapolation: estimating OUTSIDE data range (unreliable).",
              "example": "Predicting weight of a 50-year-old from a baby growth chart is extrapolation."
            }
          ],
          "rules": [
            {
              "title": "Line of Best Fit Properties",
              "latex": "(\\bar{x}, \\bar{y}) \\text{ must lie on the line}",
              "explanation": "A straight line that follows the trend with an even balance of points above and below."
            }
          ]
        },
        {
          "id": "16.1-2",
          "title": "Worked Example: Plotting, Interpreting & Estimating",
          "type": "worked_example",
          "level": "both",
          "badgeText": "Worked Example",
          "workedProblem": {
            "statement": "The table shows revision hours $h$ and exam marks $m$ for 8 students:\n$h$: $2, 4, 5, 6, 8, 9, 10, 12$\n$m$: $42, 50, 58, 65, 74, 80, 85, 94$\n(a) Describe the type of correlation.\n(b) The mean hours is $\\bar{h} = 7$ and mean mark is $\\bar{m} = 68.5$. Use a line of best fit to estimate the mark for a student who revised for 7 hours.",
            "steps": [
              {
                "stepNumber": 1,
                "instruction": "As hours increase, marks increase consistently.",
                "latex": "\\text{Type: Strong positive correlation}",
                "note": "Upward trend."
              },
              {
                "stepNumber": 2,
                "instruction": "The line of best fit must pass through the mean point $(7, 68.5)$.",
                "latex": "(7, 68.5)",
                "note": "Anchor point."
              },
              {
                "stepNumber": 3,
                "instruction": "At $h = 7$, reading directly from the mean point gives $m = 68.5 \\approx 69$ marks.",
                "latex": "\\text{Estimated mark } \\approx 68.5",
                "note": "Interpolation."
              }
            ],
            "finalAnswer": "(a) Positive correlation; (b) Approx 68.5 marks"
          }
        },
        {
          "id": "16.1-3",
          "title": "Common Mistake & Pro Tip: Forcing Through the Origin (0,0)",
          "type": "common_mistakes",
          "level": "both",
          "badgeText": "Common Mistake & Pro Tip",
          "commonMistakes": [
            {
              "mistake": "Forcing the line of best fit through $(0, 0)$ or joining the first and last points together.",
              "correction": "The line of best fit does NOT need to pass through $(0, 0)$. It must follow the overall trend and pass through $(\\bar{x}, \\bar{y})$.",
              "examinerTip": "When asked why an estimate is unreliable, if the value is outside the given range of data, write: 'It is extrapolation outside the range of data.'",
              "memoryTrick": "Don't force to zero, go through $(\\bar{x}, \\bar{y})$!"
            }
          ]
        },
        {
          "id": "16.1-4",
          "title": "Exercise: Level 1 (Basic)",
          "type": "exercise_1",
          "level": "both",
          "badgeText": "Exercise: Level 1 (Basic)",
          "questions": [
            {
              "id": "16.1-q1",
              "number": 1,
              "question": "State the type of correlation expected between a car's age and its market value.",
              "working": [
                "As age increases, value decreases => Negative correlation"
              ],
              "answer": "Negative correlation"
            },
            {
              "id": "16.1-q2",
              "number": 2,
              "question": "State the type of correlation between a person's shoe size and their score in a history exam.",
              "working": [
                "No relationship between shoe size and exam score => Zero correlation"
              ],
              "answer": "Zero correlation (no correlation)"
            },
            {
              "id": "16.1-q3",
              "number": 3,
              "question": "What specific point MUST the line of best fit pass through?",
              "working": [
                "The mean point (\\bar{x}, \\bar{y})"
              ],
              "answer": "The mean point (\\bar{x}, \\bar{y})"
            }
          ]
        },
        {
          "id": "16.1-5",
          "title": "Exercise: Level 2 (Real-World Scenarios)",
          "type": "exercise_2",
          "level": "both",
          "badgeText": "Exercise: Level 2 (Real-World)",
          "questions": [
            {
              "id": "16.1-q4",
              "number": 1,
              "question": "An ice cream vendor plots daily temperature ($18^\\circ\\text{C}$ to $32^\\circ\\text{C}$) against ice cream sales ($200 to $800). Why would using this line to predict sales at $48^\\circ\\text{C}$ be unreliable?",
              "working": [
                "48°C is well outside the data range (18°C to 32°C). This is extrapolation."
              ],
              "answer": "It is extrapolation beyond the range of recorded data"
            },
            {
              "id": "16.1-q5",
              "number": 2,
              "question": "A line of best fit has equation $y = 2.5x + 10$, where $x$ is study hours and $y$ is test mark. Estimate the score of a student who studied for 24 hours.",
              "working": [
                "y = 2.5(24) + 10 = 60 + 10 = 70 marks"
              ],
              "answer": "70 marks"
            },
            {
              "id": "16.1-q6",
              "number": 3,
              "question": "Does a strong correlation between ice cream sales and shark attacks mean eating ice cream causes shark attacks? Explain.",
              "working": [
                "No. Correlation does not imply causation. Both are caused by a third variable (hot summer weather)."
              ],
              "answer": "No, correlation does not imply causation (both increase in hot weather)"
            }
          ]
        },
        {
          "id": "16.1-6",
          "title": "Exercise: Level 3 (Exam-Style)",
          "type": "exercise_3",
          "level": "both",
          "badgeText": "Exercise: Level 3 (Exam-Style)",
          "questions": [
            {
              "id": "16.1-q7",
              "number": 1,
              "marks": 3,
              "question": "Ten runners record their weekly training distance $x$ km and 5 km race time $y$ minutes.\n$\\sum x = 320$ and $\\sum y = 240$.\n(a) Work out the coordinates of the mean point $(\\bar{x}, \\bar{y})$. [2 marks]\n(b) State the type of correlation between training distance and race time. [1 mark]",
              "working": [
                "(a) \\bar{x} = 320 / 10 = 32 km, \\bar{y} = 240 / 10 = 24 minutes => (32, 24)",
                "(b) More training leads to faster (lower) race times => Negative correlation"
              ],
              "answer": "(a) (32, 24); (b) Negative correlation",
              "markBreakdown": "M1 for 320/10 and 240/10, A1 for (32, 24); B1 for Negative correlation"
            },
            {
              "id": "16.1-q8",
              "number": 2,
              "marks": 3,
              "question": "A line of best fit passes through $(20, 45)$ and $(60, 85)$.\n(a) Find the gradient of this line. [2 marks]\n(b) Interpret what this gradient means in context if $x$ is temperature in $^\\circ\\text{F}$ and $y$ is sales. [1 mark]",
              "working": [
                "(a) m = (85 - 45) / (60 - 20) = 40 / 40 = 1",
                "(b) Sales increase by 1 unit for every 1°F rise in temperature"
              ],
              "answer": "(a) 1; (b) Sales increase by 1 for every 1°F rise in temperature",
              "markBreakdown": "M1 for (85 - 45)/(60 - 20), A1 for 1; B1 for contextual interpretation"
            },
            {
              "id": "16.1-q9",
              "number": 3,
              "marks": 4,
              "question": "The data shows engine size (litres) vs fuel efficiency (km/litre) for 8 cars. The line of best fit has equation $E = -3.2s + 22$.\n(a) Predict the efficiency of a 2.0-litre car. [2 marks]\n(b) Explain why predicting the efficiency of an 8.0-litre car using this formula may give a meaningless answer. [2 marks]",
              "working": [
                "(a) E = -3.2(2.0) + 22 = -6.4 + 22 = 15.6 km/L",
                "(b) For s = 8.0: E = -3.2(8) + 22 = -25.6 + 22 = -3.6 km/L. A negative fuel efficiency is physically impossible (extrapolation error)."
              ],
              "answer": "(a) 15.6 km/L; (b) Gives negative fuel consumption (-3.6 km/L) which is impossible due to extreme extrapolation",
              "markBreakdown": "M1 for substitution, A1 for 15.6; M1 for calculating -3.6 km/L, A1 for noting extrapolation and impossibility"
            }
          ]
        }
      ]
    },
    {
      "id": "16.test",
      "number": "Test 16",
      "title": "Chapter 16 Test: Scatter diagrams",
      "type": "chapterTest",
      "level": "both",
      "steps": [
        {
          "id": "16.test-1",
          "title": "Chapter 16 Test: Part A (Basic Recall)",
          "type": "test_part_a",
          "level": "both",
          "badgeText": "Test Part A: Core Recall",
          "questions": [
            {
              "id": "16.t-1",
              "number": 1,
              "marks": 1,
              "question": "Define positive correlation in terms of variables $x$ and $y$.",
              "working": [
                "As x increases, y increases."
              ],
              "answer": "As x increases, y increases",
              "markBreakdown": "B1 for correct definition"
            },
            {
              "id": "16.t-2",
              "number": 2,
              "marks": 2,
              "question": "Five points have $x$-values $2, 4, 6, 8, 10$ and $y$-values $10, 15, 20, 25, 30$. Find the mean point.",
              "working": [
                "\\bar{x} = 30 / 5 = 6, \\bar{y} = 100 / 5 = 20 => (6, 20)"
              ],
              "answer": "(6, 20)",
              "markBreakdown": "M1 for sums, A1 for (6, 20)"
            },
            {
              "id": "16.t-3",
              "number": 3,
              "marks": 2,
              "question": "What word describes estimating a value outside the range of given data?",
              "working": [
                "Extrapolation"
              ],
              "answer": "Extrapolation",
              "markBreakdown": "B2 for Extrapolation"
            }
          ]
        },
        {
          "id": "16.test-2",
          "title": "Chapter 16 Test: Part B (Real-World Problems)",
          "type": "test_part_b",
          "level": "both",
          "badgeText": "Test Part B: Multi-Step Real-World Application",
          "questions": [
            {
              "id": "16.t-4",
              "number": 1,
              "marks": 3,
              "question": "A company tracks advertising budget $A$ ($000s) vs sales $S$ ($000s). A line of best fit has equation $S = 4.2A + 15$. Estimate sales if the budget is $12,000.",
              "working": [
                "A = 12 (in thousands)",
                "S = 4.2(12) + 15 = 50.4 + 15 = 65.4 ($000s) = $65,400"
              ],
              "answer": "$65,400 (or 65.4)",
              "markBreakdown": "M1 for A = 12, M1 for 4.2(12) + 15, A1 for $65,400"
            },
            {
              "id": "16.t-5",
              "number": 2,
              "marks": 3,
              "question": "A scatter plot shows height vs mass for 50 trees. The heights range from 3 m to 14 m. A forester uses the line to estimate the mass of a 25 m tree. Explain why this estimate is unreliable.",
              "working": [
                "25 m is far outside the recorded range (3 m to 14 m), which makes it extrapolation."
              ],
              "answer": "Unreliable because it is extrapolation far beyond the maximum observed data (14 m)",
              "markBreakdown": "B1 for identifying extrapolation, B2 for referencing the 14 m data limit"
            },
            {
              "id": "16.t-6",
              "number": 3,
              "marks": 4,
              "question": "Explain the difference between positive correlation and a causal relationship using an example.",
              "working": [
                "Positive correlation means two variables increase together, but does not prove one causes the other (e.g. shoe size and reading age both increase with biological age)."
              ],
              "answer": "Correlation shows an association between variables, whereas causation proves one directly causes the other (e.g. shoe size and reading ability both increase with age, but big feet don't cause better reading)",
              "markBreakdown": "B2 for defining distinction, B2 for a clear valid example"
            }
          ]
        },
        {
          "id": "16.test-3",
          "title": "Chapter 16 Test: Part C (Exam-Style Challenge)",
          "type": "test_part_c",
          "level": "both",
          "badgeText": "Test Part C: Exam Challenge",
          "questions": [
            {
              "id": "16.t-7",
              "number": 1,
              "marks": 4,
              "question": "The table shows age $x$ (years) and value $y$ ($000s) for 6 vintage guitars:\n$x$: 10, 20, 30, 40, 50, 60\n$y$: 3, 5, 8, 12, 17, 25\n(a) Does this relationship appear linear or non-linear? Justify. [2 marks]\n(b) Describe the correlation. [2 marks]",
              "working": [
                "(a) The differences in y are 2, 3, 4, 5, 8 (accelerating growth). It curves upwards, so it is non-linear (exponential growth).",
                "(b) Positive correlation, as guitar value increases with age."
              ],
              "answer": "(a) Non-linear (curved/accelerating growth); (b) Positive correlation",
              "markBreakdown": "M1 for inspecting differences, A1 for non-linear; B2 for positive correlation"
            },
            {
              "id": "16.t-8",
              "number": 2,
              "marks": 5,
              "question": "A scatter graph plots rainfall $r$ (mm) vs sunshine hours $s$. The line of best fit passes through $(20, 9.5)$ and $(80, 3.5)$.\n(a) Find the equation of the line of best fit in the form $s = mr + c$. [3 marks]\n(b) State the value of $s$ when $r = 0$ and interpret its physical meaning. [2 marks]",
              "working": [
                "(a) m = (3.5 - 9.5) / (80 - 20) = -6 / 60 = -0.1",
                "9.5 = -0.1(20) + c => 9.5 = -2 + c => c = 11.5",
                "Equation: s = -0.1r + 11.5",
                "(b) When r = 0, s = 11.5. On a day with zero rain, there are expected to be 11.5 hours of sunshine."
              ],
              "answer": "(a) s = -0.1r + 11.5; (b) 11.5 hours; maximum expected sunshine on a dry day",
              "markBreakdown": "M1 for m = -0.1, M1 for c = 11.5, A1 for equation; B1 for 11.5, B1 for physical meaning"
            },
            {
              "id": "16.t-9",
              "number": 3,
              "marks": 4,
              "question": "An outlier point is recorded at $(15, 95)$ when all other points lie close to $y = 2x + 10$ (where $x = 15$ corresponds to $y \\approx 40$).\nExplain two possible reasons for this outlier in a scientific experiment. [4 marks]",
              "working": [
                "1. Measurement or recording error (e.g. transposing digits). 2. Unusual experimental condition or faulty equipment."
              ],
              "answer": "1. Human error in recording or measuring data (e.g. typo); 2. A genuine anomaly or malfunctioning instrument",
              "markBreakdown": "B2 for measurement/recording error, B2 for equipment fault or genuine external anomaly"
            }
          ]
        }
      ]
    }
  ]
};

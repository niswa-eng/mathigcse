import { Unit } from '../types/content';

export const unit20: Unit = {
  "id": 20,
  "title": "Histograms and cumulative frequency diagrams",
  "learningObjectives": [
    "C20.1, E20.1: Cumulative frequency tables, plotting ogives, reading median, quartiles (Q1, Q3), and IQR",
    "E20.2: Histograms with unequal class widths: frequency density = frequency / class width",
    "E20.3: Calculating frequencies from histogram bar areas"
  ],
  "subtopics": [
    {
      "id": "20.1",
      "number": "20.1",
      "title": "Cumulative frequency curves & quartiles",
      "type": "lesson",
      "level": "both",
      "steps": [
        {
          "id": "20.1-1",
          "title": "Concept & Intuition: Running Totals and Percentiles",
          "type": "concept",
          "level": "both",
          "badgeText": "Concept & Intuition",
          "summary": "A **cumulative frequency diagram** (ogive) plots running totals against upper class boundaries.\n- **Median ($Q_2$)**: 50% mark (at $\\frac{n}{2}$)\n- **Lower Quartile ($Q_1$)**: 25% mark (at $\\frac{n}{4}$)\n- **Upper Quartile ($Q_3$)**: 75% mark (at $\\frac{3n}{4}$)\n- **Interquartile Range ($IQR$)**: $Q_3 - Q_1$ (spread of middle 50% of data).",
          "analogy": "Like a leaderboard: the median is the runner who beats half the field; the IQR measures how closely clustered the middle competitors are.",
          "terms": [
            {
              "term": "Cumulative Frequency",
              "definition": "The running total of frequencies up to the upper boundary of each class.",
              "example": "Totals: 4, 15, 32, 50."
            },
            {
              "term": "Interquartile Range (IQR)",
              "definition": "$Q_3 - Q_1$: A measure of spread resistant to extreme outliers.",
              "example": "If $Q_3 = 68$ and $Q_1 = 42$, $IQR = 26$."
            }
          ],
          "rules": [
            {
              "title": "Plotting Rule",
              "explanation": "Always plot cumulative frequency against the UPPER class boundary, and start at the lower boundary of the first class with frequency 0."
            },
            {
              "title": "Quartile Positions",
              "latex": "Q_1 = \\frac{n}{4}, \\quad Q_2 = \\frac{n}{2}, \\quad Q_3 = \\frac{3n}{4}",
              "explanation": "Read horizontally from these cumulative frequency values across to the curve and down to the $x$-axis."
            }
          ],
          "interactiveTool": {
            "type": "histogram_cf",
            "title": "Cumulative Frequency Interactive Curve"
          }
        },
        {
          "id": "20.1-2",
          "title": "Worked Example: Drawing Ogive & Finding IQR",
          "type": "worked_example",
          "level": "both",
          "badgeText": "Worked Example",
          "workedProblem": {
            "statement": "The table shows marks of 80 students:\n$0 < m \\le 20$ (8), $20 < m \\le 40$ (16), $40 < m \\le 60$ (32), $60 < m \\le 80$ (18), $80 < m \\le 100$ (6).\n(a) Complete the cumulative frequency table.\n(b) Find the median mark.\n(c) Find the Interquartile Range ($IQR$).",
            "steps": [
              {
                "stepNumber": 1,
                "instruction": "Compute running totals: 8, 24, 56, 74, 80.",
                "latex": "\\text{CF: } 8, 24, 56, 74, 80",
                "note": "Upper boundaries: 20, 40, 60, 80, 100."
              },
              {
                "stepNumber": 2,
                "instruction": "Locate Median at $n/2 = 80/2 = 40$. Reading from curve gives $m \\approx 50$.",
                "latex": "Q_2 \\approx 50",
                "note": "Median mark."
              },
              {
                "stepNumber": 3,
                "instruction": "Locate $Q_1$ at $n/4 = 20 \\implies Q_1 \\approx 35$.",
                "latex": "Q_1 \\approx 35",
                "note": "Lower quartile."
              },
              {
                "stepNumber": 4,
                "instruction": "Locate $Q_3$ at $3n/4 = 60 \\implies Q_3 \\approx 64$.",
                "latex": "Q_3 \\approx 64",
                "note": "Upper quartile."
              },
              {
                "stepNumber": 5,
                "instruction": "Calculate $IQR = Q_3 - Q_1 = 64 - 35 = 29$.",
                "latex": "IQR = 29",
                "note": "Interquartile spread."
              }
            ],
            "finalAnswer": "(a) CF: 8, 24, 56, 74, 80; (b) Median approx 50; (c) IQR approx 29"
          }
        },
        {
          "id": "20.1-3",
          "title": "Common Mistake & Pro Tip: Upper vs Midpoint Plotting",
          "type": "common_mistakes",
          "level": "both",
          "badgeText": "Common Mistake & Pro Tip",
          "commonMistakes": [
            {
              "mistake": "Plotting cumulative frequency at the class midpoints instead of the upper class boundaries.",
              "correction": "The cumulative frequency represents all data UP TO that point, so it MUST be plotted at the UPPER boundary.",
              "examinerTip": "When asked 'how many scored MORE than 70 marks', read up at 70 to find $CF$, then subtract from total: $80 - CF$.",
              "memoryTrick": "CF = Upper boundary always!"
            }
          ]
        },
        {
          "id": "20.1-4",
          "title": "Exercise: Level 1 (Basic)",
          "type": "exercise_1",
          "level": "both",
          "badgeText": "Exercise: Level 1 (Basic)",
          "questions": [
            {
              "id": "20.1-q1",
              "number": 1,
              "question": "If a sample has 120 students, at what cumulative frequency value do you read: (a) Median, (b) Lower Quartile, (c) Upper Quartile?",
              "working": [
                "(a) 120 / 2 = 60",
                "(b) 120 / 4 = 30",
                "(c) 3 * 120 / 4 = 90"
              ],
              "answer": "(a) 60; (b) 30; (c) 90"
            },
            {
              "id": "20.1-q2",
              "number": 2,
              "question": "Given $Q_1 = 24$ and $Q_3 = 58$, calculate the interquartile range.",
              "working": [
                "IQR = 58 - 24 = 34"
              ],
              "answer": "34"
            },
            {
              "id": "20.1-q3",
              "number": 3,
              "question": "Why does an ogive always slope upwards from left to right?",
              "working": [
                "Because frequencies are non-negative, running totals can only increase or stay constant"
              ],
              "answer": "Because cumulative frequency is a running total that never decreases"
            }
          ]
        },
        {
          "id": "20.1-5",
          "title": "Exercise: Level 2 (Real-World Scenarios)",
          "type": "exercise_2",
          "level": "both",
          "badgeText": "Exercise: Level 2 (Real-World)",
          "questions": [
            {
              "id": "20.1-q4",
              "number": 1,
              "question": "On a cumulative frequency curve of 200 light bulb lifetimes, the median is 1200 hours and $Q_3 = 1450$ hours. Estimate how many bulbs lasted more than 1450 hours.",
              "working": [
                "Q3 is at CF = 150 (75%)",
                "Bulbs lasting longer = 200 - 150 = 50 bulbs"
              ],
              "answer": "50 bulbs"
            },
            {
              "id": "20.1-q5",
              "number": 2,
              "question": "A driving test pass mark is 30 out of 50. From 160 candidates, the cumulative frequency at 30 marks is 64. How many candidates passed?",
              "working": [
                "Passed = Total - Failed = 160 - 64 = 96 candidates"
              ],
              "answer": "96 candidates"
            },
            {
              "id": "20.1-q6",
              "number": 3,
              "question": "Two schools have the same median score of 62. School A has $IQR = 12$ and School B has $IQR = 28$. Compare the spread of middle marks.",
              "working": [
                "School A's middle 50% are much more consistent and tightly clustered around the median than School B"
              ],
              "answer": "School A is much more consistent in the middle 50% than School B (IQR 12 vs 28)"
            }
          ]
        },
        {
          "id": "20.1-6",
          "title": "Exercise: Level 3 (Exam-Style)",
          "type": "exercise_3",
          "level": "both",
          "badgeText": "Exercise: Level 3 (Exam-Style)",
          "questions": [
            {
              "id": "20.1-q7",
              "number": 1,
              "marks": 3,
              "question": "The masses of 100 apples have $Q_1 = 110$ g, Median $= 130$ g, and $Q_3 = 155$ g.\n(a) Work out the IQR. [1 mark]\n(b) An apple is considered 'extra large' if its mass exceeds 170 g. If the cumulative frequency at 170 g is 88, find the percentage of extra large apples. [2 marks]",
              "working": [
                "(a) IQR = 155 - 110 = 45 g",
                "(b) Number > 170 g is 100 - 88 = 12 apples => 12%"
              ],
              "answer": "(a) 45 g; (b) 12%",
              "markBreakdown": "B1 for 45 g; M1 for 100 - 88 = 12, A1 for 12%"
            },
            {
              "id": "20.1-q8",
              "number": 2,
              "marks": 4,
              "question": "The 90th percentile of waiting times for 200 patients is 45 minutes.\n(a) At what cumulative frequency value was this read? [1 mark]\n(b) Estimate how many patients waited longer than 45 minutes. [1 mark]\n(c) The hospital targets having less than 15% of patients wait over 45 minutes. Did they meet this target? Justify. [2 marks]",
              "working": [
                "(a) 90% of 200 = 180",
                "(b) 200 - 180 = 20 patients",
                "(c) 20 / 200 = 10%. Since 10% < 15%, yes, they met the target."
              ],
              "answer": "(a) 180; (b) 20 patients; (c) Yes, 10% waited > 45 mins, which is below the 15% target",
              "markBreakdown": "B1 for 180; B1 for 20; M1 for 10%, A1 for valid conclusion"
            },
            {
              "id": "20.1-q9",
              "number": 3,
              "marks": 3,
              "question": "Construct a 5-figure summary (Min, $Q_1$, Median, $Q_3$, Max) for a data set where:\nMin = 15, Max = 95, $n = 80$, $Q_1 = 38$, Median $= 54$, $IQR = 30$. [3 marks]",
              "working": [
                "Q3 = Q1 + IQR = 38 + 30 = 68",
                "Summary: Min = 15, Q1 = 38, Median = 54, Q3 = 68, Max = 95"
              ],
              "answer": "Min = 15, Q1 = 38, Median = 54, Q3 = 68, Max = 95",
              "markBreakdown": "M1 for Q3 = 68, A2 for complete 5-figure summary"
            }
          ]
        }
      ]
    },
    {
      "id": "20.2",
      "number": "20.2",
      "title": "Histograms & frequency density",
      "type": "lesson",
      "level": "extended",
      "steps": [
        {
          "id": "20.2-1",
          "title": "Concept & Intuition: Area Represents Frequency",
          "type": "concept",
          "level": "extended",
          "badgeText": "Concept & Intuition",
          "summary": "In a histogram with unequal class widths:\n- **Area of the bar represents frequency** (not the height!).\n- The vertical axis is **Frequency Density (FD)**.\n$$\\text{Frequency Density} = \\frac{\\text{Frequency}}{\\text{Class Width}}$$\n$$\\text{Frequency} = \\text{Area} = \\text{Class Width} \\times \\text{Frequency Density}$$",
          "analogy": "Like spreading butter on toast: a wider piece of bread (class width) gets thinner butter (height) for the same total amount of butter (frequency).",
          "terms": [
            {
              "term": "Frequency Density",
              "definition": "Frequency per unit width: $\\text{FD} = \\frac{\\text{Frequency}}{\\text{Class Width}}$.",
              "example": "Class $10-30$ (width 20), frequency 40 $\\implies \\text{FD} = 40/20 = 2$."
            },
            {
              "term": "Class Width",
              "definition": "$\\text{Upper boundary} - \\text{Lower boundary}$.",
              "example": "For $20 < x \\le 50$, width $= 50 - 20 = 30$."
            }
          ],
          "rules": [
            {
              "title": "Histogram Area Formula",
              "latex": "\\text{Frequency} = \\text{Width} \\times \\text{Frequency Density}",
              "explanation": "Calculate the area of each rectangular bar to find its frequency."
            }
          ]
        },
        {
          "id": "20.2-2",
          "title": "Worked Example: Drawing & Reading a Histogram",
          "type": "worked_example",
          "level": "extended",
          "badgeText": "Worked Example",
          "workedProblem": {
            "statement": "The table shows the time $t$ (seconds) taken by athletes:\n\n| Time ($t$) | Frequency |\n|---|---|\n| $0 < t \\le 10$ | 15 |\n| $10 < t \\le 20$ | 25 |\n| $20 < t \\le 40$ | 30 |\n| $40 < t \\le 70$ | 18 |\n\n(a) Calculate the frequency density for each interval.\n(b) How many athletes took between 15 and 30 seconds?",
            "steps": [
              {
                "stepNumber": 1,
                "instruction": "Calculate class widths: 10, 10, 20, 30.",
                "latex": "w \\in \\{10, 10, 20, 30\\}",
                "note": "Interval widths."
              },
              {
                "stepNumber": 2,
                "instruction": "Compute $\\text{FD} = \\text{Freq} / \\text{Width}$:\n- $15 / 10 = 1.5$\n- $25 / 10 = 2.5$\n- $30 / 20 = 1.5$\n- $18 / 30 = 0.6$",
                "latex": "\\text{FD} \\in \\{1.5, 2.5, 1.5, 0.6\\}",
                "note": "Vertical heights."
              },
              {
                "stepNumber": 3,
                "instruction": "For $15 < t \\le 30$:\nFrom 15 to 20: width $= 5$, $\\text{FD} = 2.5 \\implies 5 \\times 2.5 = 12.5$.\nFrom 20 to 30: width $= 10$, $\\text{FD} = 1.5 \\implies 10 \\times 1.5 = 15$.",
                "latex": "\\text{Total} = 12.5 + 15 = 27.5",
                "note": "Sum partial areas."
              }
            ],
            "finalAnswer": "(a) FDs: 1.5, 2.5, 1.5, 0.6; (b) 27 or 28 athletes (exact area 27.5)"
          }
        },
        {
          "id": "20.2-3",
          "title": "Common Mistake & Pro Tip: Height vs Frequency",
          "type": "common_mistakes",
          "level": "extended",
          "badgeText": "Common Mistake & Pro Tip",
          "commonMistakes": [
            {
              "mistake": "Plotting raw frequency on the vertical axis for unequal class widths.",
              "correction": "A bar chart has frequency on the $y$-axis; a histogram MUST have Frequency Density on the $y$-axis so area represents frequency.",
              "examinerTip": "Always count the small grid squares if no scale is given on the vertical axis: $\\text{Total frequency} = k \\times \\text{Total small squares}$.",
              "memoryTrick": "Histogram = Area is King!"
            }
          ]
        },
        {
          "id": "20.2-4",
          "title": "Exercise: Level 1 (Basic)",
          "type": "exercise_1",
          "level": "extended",
          "badgeText": "Exercise: Level 1 (Basic)",
          "questions": [
            {
              "id": "20.2-q1",
              "number": 1,
              "question": "A class interval is $30 < x \\le 50$ with frequency 28. Calculate its frequency density.",
              "working": [
                "Width = 50 - 30 = 20",
                "FD = 28 / 20 = 1.4"
              ],
              "answer": "1.4"
            },
            {
              "id": "20.2-q2",
              "number": 2,
              "question": "On a histogram, a bar has width 15 and height (FD) 2.4. Work out the frequency.",
              "working": [
                "Frequency = Width * FD = 15 * 2.4 = 36"
              ],
              "answer": "36"
            },
            {
              "id": "20.2-q3",
              "number": 3,
              "question": "What does the area of each bar in a histogram represent?",
              "working": [
                "Frequency"
              ],
              "answer": "The frequency of the class interval"
            }
          ]
        },
        {
          "id": "20.2-5",
          "title": "Exercise: Level 2 (Real-World Scenarios)",
          "type": "exercise_2",
          "level": "extended",
          "badgeText": "Exercise: Level 2 (Real-World)",
          "questions": [
            {
              "id": "20.2-q4",
              "number": 1,
              "question": "The salaries of 60 employees are shown in a histogram. The bar for $40,000 < s \\le 60,000 has width 20 (in $000s) and height 1.8. How many employees earn between $40k and $60k?",
              "working": [
                "Frequency = 20 * 1.8 = 36 employees"
              ],
              "answer": "36 employees"
            },
            {
              "id": "20.2-q5",
              "number": 2,
              "question": "In the salary histogram above, how many employees earn between $40,000 and $50,000?",
              "working": [
                "Width = 10, Height = 1.8 => 10 * 1.8 = 18 employees"
              ],
              "answer": "18 employees"
            },
            {
              "id": "20.2-q6",
              "number": 3,
              "question": "Why are histograms preferred over ordinary bar charts for continuous data such as human height or vehicle speed?",
              "working": [
                "Because continuous data grouped into unequal intervals requires area-proportional representation to avoid visual distortion"
              ],
              "answer": "They correctly represent varying interval widths without distorting the visual density of the data"
            }
          ]
        },
        {
          "id": "20.2-6",
          "title": "Exercise: Level 3 (Exam-Style)",
          "type": "exercise_3",
          "level": "extended",
          "badgeText": "Exercise: Level 3 (Exam-Style)",
          "questions": [
            {
              "id": "20.2-q7",
              "number": 1,
              "marks": 3,
              "question": "A histogram has two bars:\nBar 1: $0 < x \\le 20$, Frequency 40\nBar 2: $20 < x \\le 50$, Frequency $F$\nIf Bar 2 has the same height (FD) as Bar 1, calculate the value of $F$. [3 marks]",
              "working": [
                "FD for Bar 1 = 40 / 20 = 2.0",
                "FD for Bar 2 = 2.0. Width of Bar 2 = 50 - 20 = 30",
                "F = 30 * 2.0 = 60"
              ],
              "answer": "F = 60",
              "markBreakdown": "M1 for FD = 2.0, M1 for Width = 30, A1 for F = 60"
            },
            {
              "id": "20.2-q8",
              "number": 2,
              "marks": 4,
              "question": "On a histogram with no scale on the vertical axis, a bar of width 10 cm and height 4 cm represents 80 people. Another bar has width 15 cm and height 6 cm. How many people does this second bar represent? [4 marks]",
              "working": [
                "Area 1 = 10 * 4 = 40 cm^2 represents 80 people => 1 cm^2 = 2 people",
                "Area 2 = 15 * 6 = 90 cm^2",
                "People = 90 * 2 = 180 people"
              ],
              "answer": "180 people",
              "markBreakdown": "M1 for Area 1 = 40, M1 for 1 cm^2 = 2 people, M1 for Area 2 = 90, A1 for 180 people"
            },
            {
              "id": "20.2-q9",
              "number": 3,
              "marks": 4,
              "question": "The speeds of 200 cars are recorded:\n$40-60$ (freq 50), $60-70$ (freq 80), $70-90$ (freq 70).\n(a) Find the frequency densities. [2 marks]\n(b) Estimate how many cars exceeded 65 km/h. [2 marks]",
              "working": [
                "(a) 50/20 = 2.5; 80/10 = 8.0; 70/20 = 3.5",
                "(b) From 65 to 70: width 5 * 8.0 = 40. From 70 to 90: 70 cars. Total = 40 + 70 = 110 cars"
              ],
              "answer": "(a) FDs: 2.5, 8.0, 3.5; (b) 110 cars",
              "markBreakdown": "B2 for FDs; M1 for 5 * 8.0 + 70, A1 for 110 cars"
            }
          ]
        }
      ]
    },
    {
      "id": "20.test",
      "number": "Test 20",
      "title": "Chapter 20 Test: Histograms & CF",
      "type": "chapterTest",
      "level": "both",
      "steps": [
        {
          "id": "20.test-1",
          "title": "Chapter 20 Test: Part A (Basic Recall)",
          "type": "test_part_a",
          "level": "both",
          "badgeText": "Test Part A: Core Recall",
          "questions": [
            {
              "id": "20.t-1",
              "number": 1,
              "marks": 2,
              "question": "State the formula for Frequency Density in a histogram.",
              "working": [
                "Frequency Density = Frequency / Class Width"
              ],
              "answer": "Frequency Density = Frequency / Class Width",
              "markBreakdown": "B2 for correct formula"
            },
            {
              "id": "20.t-2",
              "number": 2,
              "marks": 2,
              "question": "Given $Q_1 = 35$ and $IQR = 22$, find the upper quartile $Q_3$.",
              "working": [
                "Q3 = Q1 + IQR = 35 + 22 = 57"
              ],
              "answer": "57",
              "markBreakdown": "M1 for 35 + 22, A1 for 57"
            },
            {
              "id": "20.t-3",
              "number": 3,
              "marks": 2,
              "question": "At what point of each class interval is cumulative frequency plotted?",
              "working": [
                "At the upper class boundary"
              ],
              "answer": "At the upper class boundary",
              "markBreakdown": "B2 for Upper boundary"
            }
          ]
        },
        {
          "id": "20.test-2",
          "title": "Chapter 20 Test: Part B (Real-World Problems)",
          "type": "test_part_b",
          "level": "both",
          "badgeText": "Test Part B: Multi-Step Real-World Application",
          "questions": [
            {
              "id": "20.t-4",
              "number": 1,
              "marks": 3,
              "question": "From 120 marathon runners, the median time is 3 hours 45 mins, $Q_1 = 3$ hours 20 mins, and $Q_3 = 4$ hours 15 mins. Find the interquartile range in minutes.",
              "working": [
                "Q3 = 4 hr 15 min = 255 mins",
                "Q1 = 3 hr 20 min = 200 mins",
                "IQR = 255 - 200 = 55 minutes"
              ],
              "answer": "55 minutes",
              "markBreakdown": "M1 for converting to mins, M1 for subtraction, A1 for 55 mins"
            },
            {
              "id": "20.t-5",
              "number": 2,
              "marks": 3,
              "question": "A histogram bar for weekly pocket money $10 < m \\le 25$ has height 4.2. How many children are in this category?",
              "working": [
                "Width = 25 - 10 = 15",
                "Frequency = 15 * 4.2 = 63 children"
              ],
              "answer": "63 children",
              "markBreakdown": "M1 for width 15, M1 for 15 * 4.2, A1 for 63"
            },
            {
              "id": "20.t-6",
              "number": 3,
              "marks": 4,
              "question": "In an exam, the pass mark is 45. From a cumulative frequency curve of 200 students, the CF at 45 marks is 50. What percentage of students passed?",
              "working": [
                "Passed = 200 - 50 = 150 students",
                "Percentage = (150 / 200) * 100 = 75%"
              ],
              "answer": "75%",
              "markBreakdown": "M1 for 200 - 50 = 150, M2 for 150/200 * 100, A1 for 75%"
            }
          ]
        },
        {
          "id": "20.test-3",
          "title": "Chapter 20 Test: Part C (Exam-Style Challenge)",
          "type": "test_part_c",
          "level": "both",
          "badgeText": "Test Part C: Exam Challenge",
          "questions": [
            {
              "id": "20.t-7",
              "number": 1,
              "marks": 5,
              "question": "The masses of 80 parcels are shown in a histogram:\n$0 < m \\le 2$ (height 12), $2 < m \\le 5$ (height 8), $5 < m \\le 10$ (height $h$).\nCalculate the value of $h$. [5 marks]",
              "working": [
                "Area 1 = 2 * 12 = 24 parcels",
                "Area 2 = 3 * 8 = 24 parcels",
                "Remaining parcels = 80 - (24 + 24) = 32 parcels",
                "Width 3 = 10 - 5 = 5",
                "5 * h = 32 => h = 6.4"
              ],
              "answer": "h = 6.4",
              "markBreakdown": "M1 for Area 1 = 24, M1 for Area 2 = 24, M1 for Remaining = 32, M1 for 5h = 32, A1 for h = 6.4"
            },
            {
              "id": "20.t-8",
              "number": 2,
              "marks": 4,
              "question": "A cumulative frequency curve of test scores shows $Q_1 = 44$, Median $= 56$, and $Q_3 = 68$.\n(a) State the semi-interquartile range. [1 mark]\n(b) Draw and label a box-and-whisker plot if minimum is 20 and maximum is 90. [3 marks]",
              "working": [
                "(a) Semi-IQR = (68 - 44) / 2 = 12",
                "(b) Box from 44 to 68, line at 56, whiskers to 20 and 90"
              ],
              "answer": "(a) 12; (b) Box from 44 to 68 with median at 56, whiskers from 20 to 90",
              "markBreakdown": "B1 for 12; M2 for box from Q1 to Q3 with median, A1 for whiskers"
            },
            {
              "id": "20.t-9",
              "number": 3,
              "marks": 4,
              "question": "From a cumulative frequency curve of 150 battery lives, 15 batteries lasted less than 40 hours and 135 batteries lasted less than 100 hours. Calculate the 80% inter-percentile range (from 10th to 90th percentile). [4 marks]",
              "working": [
                "10th percentile is at CF = 15 => 40 hours",
                "90th percentile is at CF = 135 => 100 hours",
                "Range = 100 - 40 = 60 hours"
              ],
              "answer": "60 hours",
              "markBreakdown": "M1 for 10% = 15, M1 for 90% = 135, M1 for 100 - 40, A1 for 60 hours"
            }
          ]
        }
      ]
    }
  ]
};

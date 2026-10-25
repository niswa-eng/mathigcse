import { Unit } from '../types/content';

export const unit12: Unit = {
  "id": 12,
  "title": "Averages and measures of spread",
  "learningObjectives": [
    "C12.1, E12.1: Mean, median, mode, and range for a set of raw discrete data",
    "C12.2, E12.2: Mean and modal class from frequency tables for discrete data",
    "C12.3, E12.3: Estimating the mean from grouped continuous data using midpoints sum(fx)/sum(f)",
    "C12.4: Stem-and-leaf diagrams and back-to-back stem-and-leaf diagrams",
    "C12.5: Comparing distributions using appropriate average and measure of spread"
  ],
  "subtopics": [
    {
      "id": "12.1",
      "number": "12.1",
      "title": "Mean, median, mode and range (raw data)",
      "type": "lesson",
      "level": "core",
      "steps": [
        {
          "id": "12.1-1",
          "title": "Concept & Intuition: Central Tendency and Spread",
          "type": "concept",
          "level": "core",
          "badgeText": "Concept & Intuition",
          "summary": "Averages summarize data with a single representative value:\n- **Mean** $\\bar{x} = \\frac{\\sum x}{n}$ (fair share/balance point)\n- **Median**: Middle value in an ordered list\n- **Mode**: Most frequent value\n- **Range**: $x_{\\max} - x_{\\min}$ (measure of spread, NOT an average).",
          "analogy": "If 5 friends pool all their money and split it equally, everyone gets the Mean. If they stand in height order, the middle person is the Median.",
          "terms": [
            {
              "term": "Mean (x̄)",
              "definition": "Sum of all values divided by count $n$.",
              "example": "$(4 + 6 + 11) / 3 = 7$"
            },
            {
              "term": "Median",
              "definition": "The value at position $(n + 1)/2$ after ordering.",
              "example": "In $2, 5, 9$, median is 5."
            },
            {
              "term": "Range",
              "definition": "$\\text{Highest} - \\text{Lowest}$. Measures spread/consistency.",
              "example": "$18 - 4 = 14$"
            }
          ],
          "rules": [
            {
              "title": "Mean Formula",
              "latex": "\\bar{x} = \\frac{\\sum x}{n}",
              "explanation": "Sum all numbers and divide by the number of numbers."
            },
            {
              "title": "Even Count Median Rule",
              "latex": "\\text{Median} = \\frac{x_{n/2} + x_{n/2 + 1}}{2}",
              "explanation": "Average the two middle numbers when $n$ is even."
            }
          ]
        },
        {
          "id": "12.1-2",
          "title": "Worked Example: Calculating All 4 Summary Statistics",
          "type": "worked_example",
          "level": "core",
          "badgeText": "Worked Example",
          "workedProblem": {
            "statement": "A student scored these marks in 9 maths tests: $14, 18, 12, 15, 18, 20, 16, 11, 18$.\nFind the (a) Mode, (b) Median, (c) Mean, (d) Range.",
            "steps": [
              {
                "stepNumber": 1,
                "instruction": "Sort the data in ascending order.",
                "latex": "11, 12, 14, 15, 16, 18, 18, 18, 20",
                "note": "Essential for median."
              },
              {
                "stepNumber": 2,
                "instruction": "Identify the mode (most common).",
                "latex": "\\text{Mode} = 18",
                "note": "Appears 3 times."
              },
              {
                "stepNumber": 3,
                "instruction": "Locate the middle value at position $(9 + 1)/2 = 5^{\\text{th}}$ item.",
                "latex": "\\text{Median} = 16",
                "note": "5th number."
              },
              {
                "stepNumber": 4,
                "instruction": "Sum all marks: $11+12+14+15+16+18+18+18+20 = 142$.",
                "latex": "\\text{Mean} = \\frac{142}{9} = 15.78 \\dots",
                "note": "Divide by 9."
              },
              {
                "stepNumber": 5,
                "instruction": "Range $= \\text{highest} - \\text{lowest} = 20 - 11 = 9$.",
                "latex": "\\text{Range} = 9",
                "note": "Spread."
              }
            ],
            "finalAnswer": "(a) Mode = 18; (b) Median = 16; (c) Mean = 15.8 (or 142/9); (d) Range = 9"
          }
        },
        {
          "id": "12.1-3",
          "title": "Common Mistake & Pro Tip: Unsorted Median Trap",
          "type": "common_mistakes",
          "level": "core",
          "badgeText": "Common Mistake & Pro Tip",
          "commonMistakes": [
            {
              "mistake": "Picking the middle number from the raw list without sorting in ascending order first.",
              "correction": "You must ALWAYS sort numbers from smallest to largest before locating the median.",
              "examinerTip": "When choosing an average in the presence of extreme outliers (like house prices or billionaire salaries), recommend the MEDIAN because it is not distorted by extreme values.",
              "memoryTrick": "Order first, or the median is cursed!"
            }
          ]
        },
        {
          "id": "12.1-4",
          "title": "Exercise: Level 1 (Basic)",
          "type": "exercise_1",
          "level": "core",
          "badgeText": "Exercise: Level 1 (Basic)",
          "questions": [
            {
              "id": "12.1-q1",
              "number": 1,
              "question": "Find the median of the numbers: $8, 3, 9, 2, 6, 7, 5$.",
              "working": [
                "Sort: 2, 3, 5, 6, 7, 8, 9",
                "Middle (4th) number = 6"
              ],
              "answer": "6"
            },
            {
              "id": "12.1-q2",
              "number": 2,
              "question": "Find the mean of the numbers: $4, 7, 10, 11, 13$.",
              "working": [
                "Sum = 4 + 7 + 10 + 11 + 13 = 45",
                "Mean = 45 / 5 = 9"
              ],
              "answer": "9"
            },
            {
              "id": "12.1-q3",
              "number": 3,
              "question": "Find the mode and range of: $6, 2, 9, 6, 1, 6, 8, 4$.",
              "working": [
                "6 appears 3 times => Mode = 6",
                "Range = 9 - 1 = 8"
              ],
              "answer": "Mode = 6, Range = 8"
            }
          ]
        },
        {
          "id": "12.1-5",
          "title": "Exercise: Level 2 (Real-World Scenarios)",
          "type": "exercise_2",
          "level": "core",
          "badgeText": "Exercise: Level 2 (Real-World)",
          "questions": [
            {
              "id": "12.1-q4",
              "number": 1,
              "question": "A basketball team scored an average of 78 points across 5 games. In game 6, they score 96 points. What is their new mean?",
              "working": [
                "Total in 5 games = 78 * 5 = 390",
                "Total in 6 games = 390 + 96 = 486",
                "New mean = 486 / 6 = 81 points"
              ],
              "answer": "81 points"
            },
            {
              "id": "12.1-q5",
              "number": 2,
              "question": "Five workers earn monthly salaries of $2200, $2400, $2500, $2600, and $15000 (CEO). Explain whether the mean or median is more representative.",
              "working": [
                "Mean = $4940 (distorted by the single $15000 salary)",
                "Median = $2500 accurately represents typical worker income"
              ],
              "answer": "Median, because the $15000 outlier skews the mean too high"
            },
            {
              "id": "12.1-q6",
              "number": 3,
              "question": "Four friends have a mean height of 165 cm. A fifth friend joins and the new mean height is 167 cm. How tall is the fifth friend?",
              "working": [
                "Total of 4 = 165 * 4 = 660 cm",
                "Total of 5 = 167 * 5 = 835 cm",
                "Fifth friend = 835 - 660 = 175 cm"
              ],
              "answer": "175 cm"
            }
          ]
        },
        {
          "id": "12.1-6",
          "title": "Exercise: Level 3 (Exam-Style)",
          "type": "exercise_3",
          "level": "core",
          "badgeText": "Exercise: Level 3 (Exam-Style)",
          "questions": [
            {
              "id": "12.1-q7",
              "number": 1,
              "marks": 3,
              "question": "Seven numbers have a mean of 12. Six of the numbers are $8, 14, 9, 16, 11, 7$. Find the seventh number. [3 marks]",
              "working": [
                "Total = 7 * 12 = 84",
                "Sum of 6 known = 8 + 14 + 9 + 16 + 11 + 7 = 65",
                "Seventh number = 84 - 65 = 19"
              ],
              "answer": "19",
              "markBreakdown": "M1 for 7 * 12 = 84, M1 for sum 65, A1 for 19"
            },
            {
              "id": "12.1-q8",
              "number": 2,
              "marks": 3,
              "question": "The numbers $3, 5, x, 12, 14, 18$ are ordered. The median is 9.5.\n(a) Find $x$. [2 marks]\n(b) Find the mean. [1 mark]",
              "working": [
                "(a) (x + 12) / 2 = 9.5 => x + 12 = 19 => x = 7",
                "(b) Sum = 3+5+7+12+14+18 = 59. Mean = 59/6 ≈ 9.83"
              ],
              "answer": "(a) x = 7; (b) 9.83 (or 59/6)",
              "markBreakdown": "M1 for (x + 12)/2 = 9.5, A1 for x = 7; B1 for 9.83"
            },
            {
              "id": "12.1-q9",
              "number": 3,
              "marks": 4,
              "question": "A set of five positive integers has a unique mode of 4, a median of 6, and a mean of 7. Find a valid set of five numbers. [4 marks]",
              "working": [
                "Median is 3rd number = 6",
                "Mode is 4 => first two numbers are 4, 4",
                "Sum = 5 * 7 = 35",
                "Remaining two numbers sum to 35 - 14 = 21 (e.g. 10 and 11)"
              ],
              "answer": "4, 4, 6, 10, 11 (or 4, 4, 6, 9, 12)",
              "markBreakdown": "B1 for 6 in middle, M1 for 4, 4 at start, M1 for sum 35, A1 for valid pair like 10, 11"
            }
          ]
        }
      ]
    },
    {
      "id": "12.2",
      "number": "12.2",
      "title": "Frequency tables & estimated mean",
      "type": "lesson",
      "level": "both",
      "steps": [
        {
          "id": "12.2-1",
          "title": "Concept & Intuition: Estimating Mean from Grouped Data",
          "type": "concept",
          "level": "both",
          "badgeText": "Concept & Intuition",
          "summary": "When data is grouped into intervals (e.g. $10 \\le t < 20$), individual values are unknown. We use the midpoint $x$ of each class as our best estimate for every observation in that group. The estimated mean is $\\frac{\\sum fx}{\\sum f}$.",
          "analogy": "Like estimating the total weight of a herd of 50 cattle by assuming each cow weighs the group average of 400 kg.",
          "terms": [
            {
              "term": "Class Midpoint (x)",
              "definition": "$\\frac{\\text{Lower boundary} + \\text{Upper boundary}}{2}$.",
              "example": "Midpoint of $20 \\le t < 30$ is $\\frac{20 + 30}{2} = 25$."
            },
            {
              "term": "Modal Class",
              "definition": "The class interval with the highest frequency.",
              "example": "Class with largest $f$ value."
            }
          ],
          "rules": [
            {
              "title": "Estimated Mean Formula",
              "latex": "\\bar{x} = \\frac{\\sum f x}{\\sum f}",
              "explanation": "Multiply each class midpoint $x$ by its frequency $f$, sum the products, and divide by the total frequency."
            }
          ]
        },
        {
          "id": "12.2-2",
          "title": "Worked Example: Grouped Continuous Frequency Table",
          "type": "worked_example",
          "level": "both",
          "badgeText": "Worked Example",
          "workedProblem": {
            "statement": "The table shows the time $t$ (minutes) taken by 50 students to complete a test:\n- $0 \\le t < 10$: freq 8\n- $10 \\le t < 20$: freq 16\n- $20 \\le t < 30$: freq 18\n- $30 \\le t < 40$: freq 8\n(a) State the modal class.\n(b) Calculate an estimate of the mean time.",
            "steps": [
              {
                "stepNumber": 1,
                "instruction": "Modal class has highest frequency (18).",
                "latex": "\\text{Modal class: } 20 \\le t < 30",
                "note": "Frequency 18."
              },
              {
                "stepNumber": 2,
                "instruction": "Find midpoints $x$: 5, 15, 25, 35.",
                "latex": "x \\in \\{5, 15, 25, 35\\}",
                "note": "Class midpoints."
              },
              {
                "stepNumber": 3,
                "instruction": "Compute $f \\times x$: $8(5)=40$, $16(15)=240$, $18(25)=450$, $8(35)=280$.",
                "latex": "\\sum fx = 40 + 240 + 450 + 280 = 1010",
                "note": "Sum of products."
              },
              {
                "stepNumber": 4,
                "instruction": "Divide by total frequency $\\sum f = 50$.",
                "latex": "\\bar{x} = \\frac{1010}{50} = 20.2\\text{ minutes}",
                "note": "Estimated mean."
              }
            ],
            "finalAnswer": "(a) 20 <= t < 30; (b) 20.2 minutes"
          }
        },
        {
          "id": "12.2-3",
          "title": "Common Mistake & Pro Tip: Dividing by Number of Rows",
          "type": "common_mistakes",
          "level": "both",
          "badgeText": "Common Mistake & Pro Tip",
          "commonMistakes": [
            {
              "mistake": "Dividing $\\sum fx$ by the number of class rows (e.g. 4) instead of the total frequency $\\sum f = 50$.",
              "correction": "Always divide by the total number of items $\\sum f$. The number of rows in the table has no bearing on the total count.",
              "examinerTip": "Why is it an 'estimate'? Because exact data values within each interval are unknown and approximated by midpoints.",
              "memoryTrick": "Divide by $\\sum f$, NEVER by number of rows!"
            }
          ]
        },
        {
          "id": "12.2-4",
          "title": "Exercise: Level 1 (Basic)",
          "type": "exercise_1",
          "level": "both",
          "badgeText": "Exercise: Level 1 (Basic)",
          "questions": [
            {
              "id": "12.2-q1",
              "number": 1,
              "question": "Find the midpoint of the class interval $40 \\le m < 60$.",
              "working": [
                "(40 + 60) / 2 = 50"
              ],
              "answer": "50"
            },
            {
              "id": "12.2-q2",
              "number": 2,
              "question": "For a frequency table, $\\sum f = 20$ and $\\sum fx = 140$. Calculate the mean.",
              "working": [
                "Mean = 140 / 20 = 7"
              ],
              "answer": "7"
            },
            {
              "id": "12.2-q3",
              "number": 3,
              "question": "Class intervals are 0-9 (freq 4), 10-19 (freq 11), 20-29 (freq 7). State the modal class.",
              "working": [
                "Highest frequency is 11, corresponding to class 10-19"
              ],
              "answer": "10-19"
            }
          ]
        },
        {
          "id": "12.2-5",
          "title": "Exercise: Level 2 (Real-World Scenarios)",
          "type": "exercise_2",
          "level": "both",
          "badgeText": "Exercise: Level 2 (Real-World)",
          "questions": [
            {
              "id": "12.2-q4",
              "number": 1,
              "question": "Customer spend: $0-4 (freq 10), $4-8 (freq 25), $8-12 (freq 15). Calculate the estimated mean spend.",
              "working": [
                "Midpoints: 2, 6, 10",
                "fx: 10(2) + 25(6) + 15(10) = 20 + 150 + 150 = 320",
                "Total f = 50 => Mean = 320 / 50 = $6.40"
              ],
              "answer": "$6.40"
            },
            {
              "id": "12.2-q5",
              "number": 2,
              "question": "The masses of 100 components have estimated mean 45.2 g. If each component is packed with a 5 g protective cap, what is the new mean?",
              "working": [
                "Adding 5 g to every item adds 5 g to the mean",
                "New mean = 45.2 + 5 = 50.2 g"
              ],
              "answer": "50.2 g"
            },
            {
              "id": "12.2-q6",
              "number": 3,
              "question": "Explain in one sentence why the mean calculated from grouped continuous data is an estimate.",
              "working": [
                "Exact values are unknown, so midpoints are used as approximations"
              ],
              "answer": "Because individual values within each interval are unknown and approximated by the midpoint"
            }
          ]
        },
        {
          "id": "12.2-6",
          "title": "Exercise: Level 3 (Exam-Style)",
          "type": "exercise_3",
          "level": "both",
          "badgeText": "Exercise: Level 3 (Exam-Style)",
          "questions": [
            {
              "id": "12.2-q7",
              "number": 1,
              "marks": 4,
              "question": "Distance walked by 40 students:\n$0 < d \\le 2$ (freq 7), $2 < d \\le 4$ (freq 13), $4 < d \\le 6$ (freq 14), $6 < d \\le 8$ (freq 6).\nCalculate an estimate of the mean distance. [4 marks]",
              "working": [
                "Midpoints: 1, 3, 5, 7",
                "fx: 7(1) + 13(3) + 14(5) + 6(7) = 7 + 39 + 70 + 42 = 158",
                "Mean = 158 / 40 = 3.95 km"
              ],
              "answer": "3.95 km",
              "markBreakdown": "M1 for midpoints, M1 for fx products, M1 for sum 158, A1 for 3.95 km"
            },
            {
              "id": "12.2-q8",
              "number": 2,
              "marks": 4,
              "question": "Goals scored in 30 matches: 0 (6 matches), 1 (11), 2 (8), 3 (3), 4 (2).\n(a) Write down the median number of goals. [2 marks]\n(b) Calculate the mean number of goals scored. [2 marks]",
              "working": [
                "(a) Position (30+1)/2 = 15.5. Cumulative: 0 (6), 1 (17) => Median = 1",
                "(b) Total goals = 0(6)+1(11)+2(8)+3(3)+4(2) = 44. Mean = 44 / 30 ≈ 1.47"
              ],
              "answer": "(a) 1 goal; (b) 1.47 goals (or 22/15)",
              "markBreakdown": "M1 for cumulative frequency, A1 for Median = 1; M1 for total 44, A1 for 1.47"
            },
            {
              "id": "12.2-q9",
              "number": 3,
              "marks": 4,
              "question": "The estimated mean of 60 items is 24.5. The sum of $fx$ for the first 3 groups is 1190. The 4th group has midpoint 35 and frequency $k$. Find $k$. [4 marks]",
              "working": [
                "Total fx = 60 * 24.5 = 1470",
                "1190 + 35k = 1470 => 35k = 280 => k = 8"
              ],
              "answer": "k = 8",
              "markBreakdown": "M1 for total fx = 1470, M2 for 35k = 280, A1 for k = 8"
            }
          ]
        }
      ]
    },
    {
      "id": "12.test",
      "number": "Test 12",
      "title": "Chapter 12 Test: Averages & spread",
      "type": "chapterTest",
      "level": "both",
      "steps": [
        {
          "id": "12.test-1",
          "title": "Chapter 12 Test: Part A (Basic Recall)",
          "type": "test_part_a",
          "level": "both",
          "badgeText": "Test Part A: Core Recall",
          "questions": [
            {
              "id": "12.t-1",
              "number": 1,
              "marks": 2,
              "question": "Find the median and range of: $12, 5, 8, 19, 14, 7, 10$.",
              "working": [
                "Sort: 5, 7, 8, 10, 12, 14, 19",
                "Median = 10, Range = 19 - 5 = 14"
              ],
              "answer": "Median = 10, Range = 14",
              "markBreakdown": "B1 for Median = 10, B1 for Range = 14"
            },
            {
              "id": "12.t-2",
              "number": 2,
              "marks": 2,
              "question": "Five numbers have a mean of 9. What is their total sum?",
              "working": [
                "Sum = 5 * 9 = 45"
              ],
              "answer": "45",
              "markBreakdown": "M1 for 5 * 9, A1 for 45"
            },
            {
              "id": "12.t-3",
              "number": 3,
              "marks": 2,
              "question": "Write down the midpoint of the class interval $150 \\le h < 160$.",
              "working": [
                "(150 + 160) / 2 = 155"
              ],
              "answer": "155",
              "markBreakdown": "M1 for formula, A1 for 155"
            }
          ]
        },
        {
          "id": "12.test-2",
          "title": "Chapter 12 Test: Part B (Real-World Problems)",
          "type": "test_part_b",
          "level": "both",
          "badgeText": "Test Part B: Multi-Step Real-World Application",
          "questions": [
            {
              "id": "12.t-4",
              "number": 1,
              "marks": 3,
              "question": "The mean mark of 12 girls is 75. The mean mark of 8 boys is 70. Find the combined mean for all 20 students.",
              "working": [
                "Girls total = 12 * 75 = 900",
                "Boys total = 8 * 70 = 560",
                "Combined = (900 + 560) / 20 = 1460 / 20 = 73"
              ],
              "answer": "73",
              "markBreakdown": "M1 for 900, M1 for 560, A1 for 73"
            },
            {
              "id": "12.t-5",
              "number": 2,
              "marks": 3,
              "question": "Customer waiting times: $0-4$ (freq 6), $4-8$ (freq 14), $8-12$ (freq 10). Calculate an estimate of the mean waiting time.",
              "working": [
                "Midpoints: 2, 6, 10",
                "fx: 6(2) + 14(6) + 10(10) = 12 + 84 + 100 = 196",
                "Mean = 196 / 30 ≈ 6.53 minutes"
              ],
              "answer": "6.53 minutes (or 98/15 min)",
              "markBreakdown": "M1 for midpoints, M1 for sum 196, A1 for 6.53 min"
            },
            {
              "id": "12.t-6",
              "number": 3,
              "marks": 4,
              "question": "Class A: Median 68, Range 15. Class B: Median 68, Range 32. Compare the performances in context.",
              "working": [
                "Both classes had identical average performance (same median 68)",
                "Class A was much more consistent (smaller range 15 vs 32)"
              ],
              "answer": "Both classes performed equally on average (median 68), but Class A was significantly more consistent (range 15 vs 32)",
              "markBreakdown": "B2 for average comparison, B2 for spread/consistency comparison"
            }
          ]
        },
        {
          "id": "12.test-3",
          "title": "Chapter 12 Test: Part C (Exam-Style Challenge)",
          "type": "test_part_c",
          "level": "both",
          "badgeText": "Test Part C: Exam Challenge",
          "questions": [
            {
              "id": "12.t-7",
              "number": 1,
              "marks": 4,
              "question": "A data set of four integers has a mode of 5, a median of 6.5, and a range of 8. Find all four numbers. [4 marks]",
              "working": [
                "Mode = 5 => first two are 5, 5",
                "Median = 6.5 => (5 + x3)/2 = 6.5 => x3 = 8",
                "Range = 8 => x4 - 5 = 8 => x4 = 13"
              ],
              "answer": "5, 5, 8, 13",
              "markBreakdown": "M1 for 5, 5, M1 for x3 = 8, M1 for x4 = 13, A1 for 5, 5, 8, 13"
            },
            {
              "id": "12.t-8",
              "number": 2,
              "marks": 5,
              "question": "100 sheep masses: $40-50$ (18), $50-60$ (32), $60-70$ ($p$), $70-80$ ($q$). Estimated mean is 58.5 kg. Find $p$ and $q$. [5 marks]",
              "working": [
                "18 + 32 + p + q = 100 => p + q = 50",
                "fx: 18(45) + 32(55) + 65p + 75q = 810 + 1760 + 65p + 75q = 2570 + 65p + 75q",
                "Total = 5850 => 65p + 75q = 3280",
                "65(50 - q) + 75q = 3280 => 3250 + 10q = 3280 => 10q = 30 => q = 3, p = 47"
              ],
              "answer": "p = 47, q = 3",
              "markBreakdown": "M1 for p + q = 50, M2 for 65p + 75q = 3280, M1 for solving system, A1 for p = 47, q = 3"
            },
            {
              "id": "12.t-9",
              "number": 3,
              "marks": 4,
              "question": "For 24 students, the mean score was 62. One score recorded as 48 was corrected to 84. Calculate the correct mean. [4 marks]",
              "working": [
                "Original total = 24 * 62 = 1488",
                "Change = 84 - 48 = +36",
                "Correct total = 1488 + 36 = 1524",
                "Correct mean = 1524 / 24 = 63.5"
              ],
              "answer": "63.5",
              "markBreakdown": "M1 for total 1488, M1 for +36, M1 for 1524/24, A1 for 63.5"
            }
          ]
        }
      ]
    }
  ]
};

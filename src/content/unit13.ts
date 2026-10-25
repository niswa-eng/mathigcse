import { Unit } from '../types/content';

export const unit13: Unit = {
  "id": 13,
  "title": "Understanding measurement",
  "learningObjectives": [
    "C13.1, E13.1: Metric unit conversions for length, mass, and capacity",
    "C13.2, E13.2: Compound measures: speed = distance/time, density = mass/volume, pressure = force/area",
    "E13.3: Upper and lower bounds: error intervals, finding limits of accuracy for calculations (+, -, *, /)"
  ],
  "subtopics": [
    {
      "id": "13.1",
      "number": "13.1",
      "title": "Units of measurement & compound measures",
      "type": "lesson",
      "level": "both",
      "steps": [
        {
          "id": "13.1-1",
          "title": "Concept & Intuition: Speed, Density, and Pressure",
          "type": "concept",
          "level": "both",
          "badgeText": "Concept & Intuition",
          "summary": "A compound measure combines two or more different standard units. The primary compound measures in IGCSE are:\n- **Speed** = $\\frac{\\text{Distance}}{\\text{Time}}$ (e.g. km/h, m/s)\n- **Density** = $\\frac{\\text{Mass}}{\\text{Volume}}$ (e.g. $\\text{g/cm}^3$, $\\text{kg/m}^3$)\n- **Pressure** = $\\frac{\\text{Force}}{\\text{Area}}$ (e.g. $\\text{N/m}^2$ or Pa).",
          "analogy": "Formula triangles: Cover up what you want to calculate to reveal the formula.",
          "terms": [
            {
              "term": "Compound Measure",
              "definition": "A rate that compares two quantities measured in different units.",
              "example": "Speed in km/h is distance per unit of time."
            },
            {
              "term": "Metric Conversions",
              "definition": "$1\\text{ m} = 100\\text{ cm} = 1000\\text{ mm}$; $1\\text{ km} = 1000\\text{ m}$; $1\\text{ kg} = 1000\\text{ g}$; $1\\text{ litre} = 1000\\text{ ml} = 1000\\text{ cm}^3$.",
              "example": "$2.5\\text{ km} = 2500\\text{ m}$"
            }
          ],
          "rules": [
            {
              "title": "The 3 Compound Measure Formulae",
              "latex": "s = \\frac{d}{t}, \\quad \\rho = \\frac{m}{V}, \\quad P = \\frac{F}{A}",
              "explanation": "Speed = Distance/Time; Density = Mass/Volume; Pressure = Force/Area."
            },
            {
              "title": "Time Decimal Conversion Trap",
              "latex": "2\\text{ hours } 15\\text{ mins} = 2.25\\text{ hours} \\quad (\\ne 2.15)",
              "explanation": "Always divide minutes by 60 to convert into decimal hours."
            }
          ]
        },
        {
          "id": "13.1-2",
          "title": "Worked Example: Compound Measures & Time Conversion",
          "type": "worked_example",
          "level": "both",
          "badgeText": "Worked Example",
          "workedProblem": {
            "statement": "(a) A car travels 180 km in 2 hours and 24 minutes. Calculate its average speed in km/h.\n(b) A block of aluminium has volume $120\\text{ cm}^3$ and density $2.7\\text{ g/cm}^3$. Calculate its mass in grams.",
            "steps": [
              {
                "stepNumber": 1,
                "instruction": "Convert 2 hours 24 mins to decimal hours.",
                "latex": "2 + \\frac{24}{60} = 2 + 0.4 = 2.4\\text{ hours}",
                "note": "Divide 24 by 60."
              },
              {
                "stepNumber": 2,
                "instruction": "Calculate speed: $s = d/t$.",
                "latex": "s = \\frac{180}{2.4} = 75\\text{ km/h}",
                "note": "Distance divided by time."
              },
              {
                "stepNumber": 3,
                "instruction": "For mass, rearrange density: $m = \\rho \\times V$.",
                "latex": "m = 2.7 \\times 120 = 324\\text{ g}",
                "note": "Density multiplied by volume."
              }
            ],
            "finalAnswer": "(a) 75 km/h; (b) 324 g"
          }
        },
        {
          "id": "13.1-3",
          "title": "Common Mistake & Pro Tip: Decimal Time Trap",
          "type": "common_mistakes",
          "level": "both",
          "badgeText": "Common Mistake & Pro Tip",
          "commonMistakes": [
            {
              "mistake": "Writing 3 hours 45 minutes as 3.45 hours instead of $3 + 45/60 = 3.75$ hours.",
              "correction": "Time is base 60, not base 10! Always divide minutes by 60.",
              "examinerTip": "When converting m/s to km/h, multiply by 3.6 (since $1\\text{ m/s} = \\frac{1/1000}{1/3600}\\text{ km/h} = 3.6\\text{ km/h}$).",
              "memoryTrick": "Minutes over 60, never decimal direct."
            }
          ]
        },
        {
          "id": "13.1-4",
          "title": "Exercise: Level 1 (Basic)",
          "type": "exercise_1",
          "level": "both",
          "badgeText": "Exercise: Level 1 (Basic)",
          "questions": [
            {
              "id": "13.1-q1",
              "number": 1,
              "question": "A train travels 210 km in 3 hours. Calculate its average speed.",
              "working": [
                "Speed = Distance / Time = 210 / 3 = 70 km/h"
              ],
              "answer": "70 km/h"
            },
            {
              "id": "13.1-q2",
              "number": 2,
              "question": "Convert 1 hour and 36 minutes into decimal hours.",
              "working": [
                "1 + 36/60 = 1 + 0.6 = 1.6 hours"
              ],
              "answer": "1.6 hours"
            },
            {
              "id": "13.1-q3",
              "number": 3,
              "question": "A solid cube of side 4 cm has mass 512 g. Work out its density in $\\text{g/cm}^3$.",
              "working": [
                "Volume = 4^3 = 64 cm^3",
                "Density = Mass / Volume = 512 / 64 = 8 g/cm^3"
              ],
              "answer": "8 g/cm^3"
            }
          ]
        },
        {
          "id": "13.1-5",
          "title": "Exercise: Level 2 (Real-World Scenarios)",
          "type": "exercise_2",
          "level": "both",
          "badgeText": "Exercise: Level 2 (Real-World)",
          "questions": [
            {
              "id": "13.1-q4",
              "number": 1,
              "question": "A plane flies 1350 km at an average speed of 600 km/h. How long does the flight take in hours and minutes?",
              "working": [
                "Time = 1350 / 600 = 2.25 hours",
                "0.25 * 60 = 15 minutes => 2 hours 15 minutes"
              ],
              "answer": "2 hours 15 minutes"
            },
            {
              "id": "13.1-q5",
              "number": 2,
              "question": "A block of metal weighs 1.95 kg and has volume $250\\text{ cm}^3$. Find its density in $\\text{g/cm}^3$.",
              "working": [
                "Mass = 1.95 kg = 1950 g",
                "Density = 1950 / 250 = 7.8 g/cm^3"
              ],
              "answer": "7.8 g/cm^3"
            },
            {
              "id": "13.1-q6",
              "number": 3,
              "question": "A crate exerts a force of 450 N on a flat floor over a contact area of $1.5\\text{ m}^2$. Calculate the pressure exerted on the floor.",
              "working": [
                "Pressure = Force / Area = 450 / 1.5 = 300 N/m^2 (or 300 Pa)"
              ],
              "answer": "300 N/m^2 (or 300 Pa)"
            }
          ]
        },
        {
          "id": "13.1-6",
          "title": "Exercise: Level 3 (Exam-Style)",
          "type": "exercise_3",
          "level": "both",
          "badgeText": "Exercise: Level 3 (Exam-Style)",
          "questions": [
            {
              "id": "13.1-q7",
              "number": 1,
              "marks": 3,
              "question": "Convert a speed of $72\\text{ km/h}$ into metres per second (m/s). [3 marks]",
              "working": [
                "72 km = 72000 m",
                "1 hour = 3600 seconds",
                "Speed = 72000 / 3600 = 20 m/s"
              ],
              "answer": "20 m/s",
              "markBreakdown": "M1 for 72000 m, M1 for 3600 s, A1 for 20 m/s"
            },
            {
              "id": "13.1-q8",
              "number": 2,
              "marks": 4,
              "question": "A cyclist travels 12 km at $15\\text{ km/h}$, rests for 12 minutes, then cycles another 18 km at $24\\text{ km/h}$. Calculate the average speed for the whole journey in km/h. [4 marks]",
              "working": [
                "Time 1 = 12 / 15 = 0.8 hours (48 mins)",
                "Rest = 12 mins = 0.2 hours",
                "Time 2 = 18 / 24 = 0.75 hours (45 mins)",
                "Total time = 0.8 + 0.2 + 0.75 = 1.75 hours",
                "Total distance = 12 + 18 = 30 km",
                "Average speed = 30 / 1.75 = 17.14 km/h"
              ],
              "answer": "17.1 km/h (or 120/7 km/h)",
              "markBreakdown": "M1 for T1=0.8, M1 for T2=0.75, M1 for total time=1.75, A1 for 17.1 km/h"
            },
            {
              "id": "13.1-q9",
              "number": 3,
              "marks": 3,
              "question": "Gold has a density of $19.3\\text{ g/cm}^3$. A solid gold bar measures 10 cm by 5 cm by 4 cm. Work out the mass of the gold bar in kilograms. [3 marks]",
              "working": [
                "Volume = 10 * 5 * 4 = 200 cm^3",
                "Mass = 19.3 * 200 = 3860 g",
                "In kg = 3860 / 1000 = 3.86 kg"
              ],
              "answer": "3.86 kg",
              "markBreakdown": "M1 for Volume = 200, M1 for Mass = 3860 g, A1 for 3.86 kg"
            }
          ]
        }
      ]
    },
    {
      "id": "13.2",
      "number": "13.2",
      "title": "Upper and lower bounds",
      "type": "lesson",
      "level": "extended",
      "steps": [
        {
          "id": "13.2-1",
          "title": "Concept & Intuition: Limits of Accuracy and Bounds",
          "type": "concept",
          "level": "extended",
          "badgeText": "Concept & Intuition",
          "summary": "When a quantity is rounded to a given unit of precision, the true value lies within an error interval bounded by the Lower Bound ($LB$) and Upper Bound ($UB$).\n- Step: Halve the degree of accuracy, then add and subtract.",
          "analogy": "A speed limit radar rounded to the nearest 10 km/h: a reading of 80 km/h means you were actually travelling anywhere from 75 to 85 km/h.",
          "terms": [
            {
              "term": "Lower Bound (LB)",
              "definition": "The smallest possible value that rounds to the recorded number: $\\text{Value} - \\frac{\\text{accuracy}}{2}$.",
              "example": "8.4 cm to 1 d.p. $\\implies LB = 8.35$ cm."
            },
            {
              "term": "Upper Bound (UB)",
              "definition": "The upper limit of the interval: $\\text{Value} + \\frac{\\text{accuracy}}{2}$.",
              "example": "8.4 cm to 1 d.p. $\\implies UB = 8.45$ cm."
            }
          ],
          "rules": [
            {
              "title": "Bounds for Arithmetic Operations",
              "latex": "\\text{UB of } (A - B) = A_{UB} - B_{LB}, \\quad \\text{UB of } \\left(\\frac{A}{B}\\right) = \\frac{A_{UB}}{B_{LB}}",
              "explanation": "To maximize a fraction or difference, use maximum numerator/first term and minimum denominator/second term."
            },
            {
              "title": "Lower Bound of Division",
              "latex": "\\text{LB of } \\left(\\frac{A}{B}\\right) = \\frac{A_{LB}}{B_{UB}}",
              "explanation": "To minimize a fraction, divide the smallest numerator by the largest denominator."
            }
          ]
        },
        {
          "id": "13.2-2",
          "title": "Worked Example: Calculating Bounds for a Calculation",
          "type": "worked_example",
          "level": "extended",
          "badgeText": "Worked Example",
          "workedProblem": {
            "statement": "The distance $d$ is 120 metres correct to the nearest 10 metres.\nThe time $t$ is 8.0 seconds correct to 1 decimal place.\nCalculate:\n(a) The upper bound for the speed $s = d/t$.\n(b) The lower bound for the speed $s = d/t$.",
            "steps": [
              {
                "stepNumber": 1,
                "instruction": "Find bounds for $d$ (nearest 10 m $\\implies \\pm 5$): $d_{LB} = 115$, $d_{UB} = 125$.",
                "latex": "115 \\le d < 125",
                "note": "Half of 10 is 5."
              },
              {
                "stepNumber": 2,
                "instruction": "Find bounds for $t$ (nearest 0.1 s $\\implies \\pm 0.05$): $t_{LB} = 7.95$, $t_{UB} = 8.05$.",
                "latex": "7.95 \\le t < 8.05",
                "note": "Half of 0.1 is 0.05."
              },
              {
                "stepNumber": 3,
                "instruction": "Upper bound of speed requires $d_{UB} / t_{LB}$.",
                "latex": "s_{UB} = \\frac{125}{7.95} \\approx 15.72\\text{ m/s}",
                "note": "Max distance / min time."
              },
              {
                "stepNumber": 4,
                "instruction": "Lower bound of speed requires $d_{LB} / t_{UB}$.",
                "latex": "s_{LB} = \\frac{115}{8.05} \\approx 14.29\\text{ m/s}",
                "note": "Min distance / max time."
              }
            ],
            "finalAnswer": "(a) UB = 15.72 m/s; (b) LB = 14.29 m/s (to 2 d.p.)"
          }
        },
        {
          "id": "13.2-3",
          "title": "Common Mistake & Pro Tip: Subtraction and Division Trap",
          "type": "common_mistakes",
          "level": "extended",
          "badgeText": "Common Mistake & Pro Tip",
          "commonMistakes": [
            {
              "mistake": "Calculating the upper bound of $A/B$ as $A_{UB} / B_{UB}$.",
              "correction": "Dividing by a larger number makes the result SMALLER. To get the maximum result, divide $A_{UB}$ by $B_{LB}$.",
              "examinerTip": "When asked for an answer 'to an appropriate degree of accuracy', calculate both UB and LB and round to the last digit where both bounds agree.",
              "memoryTrick": "Max fraction = Biggest Top / Smallest Bottom."
            }
          ]
        },
        {
          "id": "13.2-4",
          "title": "Exercise: Level 1 (Basic)",
          "type": "exercise_1",
          "level": "extended",
          "badgeText": "Exercise: Level 1 (Basic)",
          "questions": [
            {
              "id": "13.2-q1",
              "number": 1,
              "question": "A length is given as 14 cm correct to the nearest cm. Write down its lower bound and upper bound.",
              "working": [
                "Half of 1 cm = 0.5 cm",
                "LB = 14 - 0.5 = 13.5 cm; UB = 14 + 0.5 = 14.5 cm"
              ],
              "answer": "LB = 13.5 cm, UB = 14.5 cm"
            },
            {
              "id": "13.2-q2",
              "number": 2,
              "question": "The mass of a bag of apples is 2.4 kg correct to 1 decimal place. Write down the error interval for the mass $m$.",
              "working": [
                "Half of 0.1 = 0.05",
                "2.35 <= m < 2.45"
              ],
              "answer": "2.35 <= m < 2.45 kg"
            },
            {
              "id": "13.2-q3",
              "number": 3,
              "question": "A rectangle has length 8 cm and width 5 cm, both correct to the nearest cm. Work out the upper bound of the perimeter.",
              "working": [
                "Length UB = 8.5 cm, Width UB = 5.5 cm",
                "Perimeter UB = 2(8.5 + 5.5) = 2(14) = 28 cm"
              ],
              "answer": "28 cm"
            }
          ]
        },
        {
          "id": "13.2-5",
          "title": "Exercise: Level 2 (Real-World Scenarios)",
          "type": "exercise_2",
          "level": "extended",
          "badgeText": "Exercise: Level 2 (Real-World)",
          "questions": [
            {
              "id": "13.2-q4",
              "number": 1,
              "question": "A runner completes a 400 m race (exact) in 48 seconds correct to the nearest second. Calculate the runner's maximum possible average speed to 2 decimal places.",
              "working": [
                "Time LB = 47.5 s",
                "Max speed = 400 / 47.5 ≈ 8.42 m/s"
              ],
              "answer": "8.42 m/s"
            },
            {
              "id": "13.2-q5",
              "number": 2,
              "question": "A container holds 50 litres of juice correct to the nearest litre. Cups hold 200 ml correct to the nearest 10 ml. Calculate the minimum number of cups that can definitely be filled completely.",
              "working": [
                "Juice LB = 49.5 L = 49500 ml",
                "Cup UB = 205 ml",
                "Minimum cups = 49500 / 205 = 241.46 => 241 full cups"
              ],
              "answer": "241 cups"
            },
            {
              "id": "13.2-q6",
              "number": 3,
              "question": "A square field has sides of 30 m correct to the nearest 5 metres. Work out the lower bound for the area of the field.",
              "working": [
                "Side LB = 30 - 2.5 = 27.5 m",
                "Area LB = 27.5^2 = 756.25 m^2"
              ],
              "answer": "756.25 m^2"
            }
          ]
        },
        {
          "id": "13.2-6",
          "title": "Exercise: Level 3 (Exam-Style)",
          "type": "exercise_3",
          "level": "extended",
          "badgeText": "Exercise: Level 3 (Exam-Style)",
          "questions": [
            {
              "id": "13.2-q7",
              "number": 1,
              "marks": 3,
              "question": "A car travels a distance $d = 200\\text{ km}$ (to the nearest 10 km) in time $t = 2.5\\text{ hours}$ (to the nearest 0.1 hour).\nCalculate the lower bound for the car's speed. [3 marks]",
              "working": [
                "d_LB = 195 km",
                "t_UB = 2.55 hours",
                "Speed LB = 195 / 2.55 ≈ 76.47 km/h"
              ],
              "answer": "76.5 km/h (or 76.47 km/h)",
              "markBreakdown": "M1 for d_LB = 195, M1 for t_UB = 2.55, A1 for 76.5 km/h"
            },
            {
              "id": "13.2-q8",
              "number": 2,
              "marks": 4,
              "question": "$m = \\frac{p - q}{r}$. $p = 68$ (nearest integer), $q = 23$ (nearest integer), $r = 5.4$ (1 decimal place).\nCalculate the upper bound for $m$, giving your answer to 3 significant figures. [4 marks]",
              "working": [
                "To maximize m: need max numerator and min denominator",
                "p_UB = 68.5, q_LB = 22.5 => Numerator UB = 68.5 - 22.5 = 46",
                "r_LB = 5.35",
                "m_UB = 46 / 5.35 ≈ 8.598 ≈ 8.60"
              ],
              "answer": "8.60 (to 3 s.f.)",
              "markBreakdown": "M1 for p_UB = 68.5, q_LB = 22.5, M1 for numerator = 46, M1 for r_LB = 5.35, A1 for 8.60"
            },
            {
              "id": "13.2-q9",
              "number": 3,
              "marks": 4,
              "question": "The acceleration formula is $a = \\frac{v - u}{t}$.\n$v = 28.4$ m/s, $u = 12.6$ m/s (both to 1 d.p.), and $t = 4.2$ s (to 1 d.p.).\nCalculate the lower bound for the acceleration $a$. [4 marks]",
              "working": [
                "v_LB = 28.35, u_UB = 12.65 => Min numerator = 28.35 - 12.65 = 15.70",
                "t_UB = 4.25 s",
                "a_LB = 15.70 / 4.25 ≈ 3.694 m/s^2"
              ],
              "answer": "3.69 m/s^2 (or 3.694 m/s^2)",
              "markBreakdown": "M1 for v_LB and u_UB, M1 for numerator = 15.70, M1 for t_UB = 4.25, A1 for 3.69 m/s^2"
            }
          ]
        }
      ]
    },
    {
      "id": "13.test",
      "number": "Test 13",
      "title": "Chapter 13 Test: Measurement & bounds",
      "type": "chapterTest",
      "level": "both",
      "steps": [
        {
          "id": "13.test-1",
          "title": "Chapter 13 Test: Part A (Basic Recall)",
          "type": "test_part_a",
          "level": "both",
          "badgeText": "Test Part A: Core Recall",
          "questions": [
            {
              "id": "13.t-1",
              "number": 1,
              "marks": 2,
              "question": "Convert 2 hours and 45 minutes into decimal hours.",
              "working": [
                "2 + 45/60 = 2 + 0.75 = 2.75 hours"
              ],
              "answer": "2.75 hours",
              "markBreakdown": "M1 for 45/60, A1 for 2.75"
            },
            {
              "id": "13.t-2",
              "number": 2,
              "marks": 2,
              "question": "A metal block has mass 540 g and volume $60\\text{ cm}^3$. Find its density.",
              "working": [
                "Density = 540 / 60 = 9 g/cm^3"
              ],
              "answer": "9 g/cm^3",
              "markBreakdown": "M1 for 540/60, A1 for 9 g/cm^3"
            },
            {
              "id": "13.t-3",
              "number": 3,
              "marks": 2,
              "question": "A value $x$ is 65 to the nearest 5. Write down the lower bound and upper bound.",
              "working": [
                "Half of 5 = 2.5",
                "LB = 65 - 2.5 = 62.5; UB = 65 + 2.5 = 67.5"
              ],
              "answer": "LB = 62.5, UB = 67.5",
              "markBreakdown": "B1 for 62.5, B1 for 67.5"
            }
          ]
        },
        {
          "id": "13.test-2",
          "title": "Chapter 13 Test: Part B (Real-World Problems)",
          "type": "test_part_b",
          "level": "both",
          "badgeText": "Test Part B: Multi-Step Real-World Application",
          "questions": [
            {
              "id": "13.t-4",
              "number": 1,
              "marks": 3,
              "question": "A train travels at $90\\text{ km/h}$ for 1 hour 40 minutes. How far does it travel in kilometres?",
              "working": [
                "1 hr 40 mins = 1 + 40/60 = 5/3 hours",
                "Distance = 90 * (5/3) = 150 km"
              ],
              "answer": "150 km",
              "markBreakdown": "M1 for 5/3 hours, M1 for 90 * (5/3), A1 for 150 km"
            },
            {
              "id": "13.t-5",
              "number": 2,
              "marks": 3,
              "question": "A box has dimensions 12 cm, 8 cm, and 5 cm (all to the nearest cm). Find the upper bound of its volume.",
              "working": [
                "UBs: 12.5 cm, 8.5 cm, 5.5 cm",
                "Volume UB = 12.5 * 8.5 * 5.5 = 584.375 cm^3"
              ],
              "answer": "584.375 cm^3",
              "markBreakdown": "M1 for UBs 12.5, 8.5, 5.5, M1 for product, A1 for 584.375 cm^3"
            },
            {
              "id": "13.t-6",
              "number": 3,
              "marks": 4,
              "question": "A car uses 45 litres of fuel (nearest litre) to travel 620 km (nearest 10 km). Calculate the maximum possible fuel consumption in km per litre.",
              "working": [
                "Distance UB = 625 km",
                "Fuel LB = 44.5 litres",
                "Max km/L = 625 / 44.5 ≈ 14.04 km/L"
              ],
              "answer": "14.0 km/L (or 14.04 km/L)",
              "markBreakdown": "M1 for 625, M1 for 44.5, M1 for division, A1 for 14.0 km/L"
            }
          ]
        },
        {
          "id": "13.test-3",
          "title": "Chapter 13 Test: Part C (Exam-Style Challenge)",
          "type": "test_part_c",
          "level": "both",
          "badgeText": "Test Part C: Exam Challenge",
          "questions": [
            {
              "id": "13.t-7",
              "number": 1,
              "marks": 4,
              "question": "A cylinder has height $h = 10.0$ cm and radius $r = 4.0$ cm, both correct to 1 decimal place.\nCalculate the difference between the upper and lower bounds of its volume $V = \\pi r^2 h$. [4 marks]",
              "working": [
                "r_UB = 4.05, h_UB = 10.05 => V_UB = \\pi * 4.05^2 * 10.05 ≈ 518.23 cm^3",
                "r_LB = 3.95, h_LB = 9.95 => V_LB = \\pi * 3.95^2 * 9.95 ≈ 487.65 cm^3",
                "Difference = 518.23 - 487.65 = 30.58 cm^3"
              ],
              "answer": "30.6 cm^3 (or 30.58 cm^3)",
              "markBreakdown": "M1 for V_UB setup, M1 for V_LB setup, M1 for subtraction, A1 for 30.6 cm^3"
            },
            {
              "id": "13.t-8",
              "number": 2,
              "marks": 5,
              "question": "Pressure $P = F / A$. Force $F = 850$ N to nearest 10 N. Area $A = 0.24\\text{ m}^2$ to 2 decimal places.\n(a) Work out the upper bound of $P$. [2 marks]\n(b) Work out the lower bound of $P$. [2 marks]\n(c) State the value of $P$ to a suitable degree of accuracy. [1 mark]",
              "working": [
                "F_LB = 845, F_UB = 855; A_LB = 0.235, A_UB = 0.245",
                "(a) P_UB = 855 / 0.235 ≈ 3638.3 Pa",
                "(b) P_LB = 845 / 0.245 ≈ 3449.0 Pa",
                "(c) Both round to 3500 Pa (or 3600 / 3400), both agree to 1 sig fig: 4000 or 3500 Pa"
              ],
              "answer": "(a) 3640 Pa; (b) 3450 Pa; (c) 3500 Pa",
              "markBreakdown": "M1 for 855/0.235, A1 for 3640; M1 for 845/0.245, A1 for 3450; B1 for 3500 Pa"
            },
            {
              "id": "13.t-9",
              "number": 3,
              "marks": 4,
              "question": "Light travels at $3.0 \\times 10^8$ m/s. The distance from the Sun to Earth is $1.50 \\times 10^8$ km. How many minutes and seconds does it take for sunlight to reach Earth? [4 marks]",
              "working": [
                "Distance in metres = 1.50 * 10^8 * 1000 = 1.50 * 10^11 m",
                "Time in seconds = (1.50 * 10^11) / (3.0 * 10^8) = 500 seconds",
                "500 / 60 = 8 with remainder 20 => 8 minutes 20 seconds"
              ],
              "answer": "8 minutes 20 seconds",
              "markBreakdown": "M1 for distance in metres, M2 for time = 500 s, A1 for 8 min 20 s"
            }
          ]
        }
      ]
    }
  ]
};

import { Unit } from '../types/content';

export const unit21: Unit = {
  "id": 21,
  "title": "Ratio, rate and proportion",
  "learningObjectives": [
    "C21.1, E21.1: Direct proportion: y = kx, y = kx^2, y = k sqrt(x)",
    "E21.2: Inverse proportion: y = k/x, y = k/x^2",
    "C21.3, E21.3: Speed-time graphs, calculating acceleration from gradient, and distance from area under curve"
  ],
  "subtopics": [
    {
      "id": "21.1",
      "number": "21.1",
      "title": "Direct and inverse proportion",
      "type": "lesson",
      "level": "extended",
      "steps": [
        {
          "id": "21.1-1",
          "title": "Concept & Intuition: The Constant of Proportionality (k)",
          "type": "concept",
          "level": "extended",
          "badgeText": "Concept & Intuition",
          "summary": "Proportionality connects variables through a constant multiplier $k$:\n- **Direct Proportion**: $y \\propto x \\implies y = kx$; $y \\propto x^2 \\implies y = kx^2$\n- **Inverse Proportion**: $y \\propto \\frac{1}{x} \\implies y = \\frac{k}{x}$; $y \\propto \\frac{1}{x^2} \\implies y = \\frac{k}{x^2}$.\nAlways find $k$ first using the given pair of initial conditions!",
          "analogy": "Direct proportion: 3 painters paint 3 walls; doubling painters doubles walls painted. Inverse proportion: doubling painters halves the time needed.",
          "terms": [
            {
              "term": "Direct Proportion (y ∝ x)",
              "definition": "As $x$ is multiplied by $n$, $y$ is multiplied by $n$. Graph is a straight line through the origin.",
              "example": "$y = kx$"
            },
            {
              "term": "Inverse Proportion (y ∝ 1/x)",
              "definition": "As $x$ is multiplied by $n$, $y$ is divided by $n$. Product $xy = k$ is constant.",
              "example": "$y = \\frac{k}{x}$"
            }
          ],
          "rules": [
            {
              "title": "The 3-Step Proportionality Method",
              "explanation": "1. Write the equation with $k$ (e.g. $y = kx^2$ or $y = k/x$).\n2. Substitute the given values of $x$ and $y$ to solve for $k$.\n3. Rewrite the equation with numerical $k$ and solve for the unknown."
            }
          ]
        },
        {
          "id": "21.1-2",
          "title": "Worked Example: Direct Square & Inverse Proportion",
          "type": "worked_example",
          "level": "extended",
          "badgeText": "Worked Example",
          "workedProblem": {
            "statement": "(a) $y$ is directly proportional to $x^2$. When $x = 3$, $y = 36$. Find $y$ when $x = 5$.\n(b) $P$ is inversely proportional to $V$. When $V = 4$, $P = 15$. Find $P$ when $V = 10$.",
            "steps": [
              {
                "stepNumber": 1,
                "instruction": "For (a), write formula: $y = kx^2$.",
                "latex": "36 = k(3^2) = 9k \\implies k = 4",
                "note": "Find $k$."
              },
              {
                "stepNumber": 2,
                "instruction": "Formula is $y = 4x^2$. Substitute $x = 5$.",
                "latex": "y = 4(5^2) = 4(25) = 100",
                "note": "Direct square result."
              },
              {
                "stepNumber": 3,
                "instruction": "For (b), write formula: $P = \\frac{k}{V}$.",
                "latex": "15 = \\frac{k}{4} \\implies k = 60",
                "note": "Find $k$ for inverse."
              },
              {
                "stepNumber": 4,
                "instruction": "Formula is $P = \\frac{60}{V}$. When $V = 10$: $P = \\frac{60}{10} = 6$.",
                "latex": "P = 6",
                "note": "Inverse result."
              }
            ],
            "finalAnswer": "(a) y = 100; (b) P = 6"
          }
        },
        {
          "id": "21.1-3",
          "title": "Common Mistake & Pro Tip: Missing Powers and Roots",
          "type": "common_mistakes",
          "level": "extended",
          "badgeText": "Common Mistake & Pro Tip",
          "commonMistakes": [
            {
              "mistake": "Writing $y = kx$ when the question clearly states 'proportional to the square of $x$' ($x^2$) or 'square root of $x$' ($\\sqrt{x}$).",
              "correction": "Read the power carefully! Square $= x^2$, Cube $= x^3$, Square root $= \\sqrt{x}$.",
              "examinerTip": "In inverse proportion, check that your answer makes sense: as $x$ increases, $y$ MUST decrease.",
              "memoryTrick": "Direct: $y = k \\times f(x)$; Inverse: $y = k / f(x)$."
            }
          ]
        },
        {
          "id": "21.1-4",
          "title": "Exercise: Level 1 (Basic)",
          "type": "exercise_1",
          "level": "extended",
          "badgeText": "Exercise: Level 1 (Basic)",
          "questions": [
            {
              "id": "21.1-q1",
              "number": 1,
              "question": "If $y \\propto x$ and $y = 20$ when $x = 4$, find $y$ when $x = 9$.",
              "working": [
                "k = 20 / 4 = 5 => y = 5x",
                "x = 9 => y = 5(9) = 45"
              ],
              "answer": "45"
            },
            {
              "id": "21.1-q2",
              "number": 2,
              "question": "If $y \\propto \\frac{1}{x}$ and $y = 8$ when $x = 3$, find $k$.",
              "working": [
                "k = y * x = 8 * 3 = 24"
              ],
              "answer": "k = 24"
            },
            {
              "id": "21.1-q3",
              "number": 3,
              "question": "Write an algebraic formula for: '$M$ is inversely proportional to the square of $d$'.",
              "working": [
                "M = k / d^2"
              ],
              "answer": "M = k / d^2"
            }
          ]
        },
        {
          "id": "21.1-5",
          "title": "Exercise: Level 2 (Real-World Scenarios)",
          "type": "exercise_2",
          "level": "extended",
          "badgeText": "Exercise: Level 2 (Real-World)",
          "questions": [
            {
              "id": "21.1-q4",
              "number": 1,
              "question": "The stopping distance $d$ of a car is directly proportional to the square of its speed $v$. At 30 km/h, stopping distance is 9 m. Find the stopping distance at 60 km/h.",
              "working": [
                "d = k v^2 => 9 = k(900) => k = 0.01",
                "At v = 60: d = 0.01 * 3600 = 36 m (doubling speed quadruples distance!)"
              ],
              "answer": "36 m"
            },
            {
              "id": "21.1-q5",
              "number": 2,
              "question": "The time $T$ hours taken to build a brick wall is inversely proportional to the number of bricklayers $n$. If 3 bricklayers take 16 hours, how long do 4 bricklayers take?",
              "working": [
                "T = k / n => k = 3 * 16 = 48 man-hours",
                "For n = 4: T = 48 / 4 = 12 hours"
              ],
              "answer": "12 hours"
            },
            {
              "id": "21.1-q6",
              "number": 3,
              "question": "The brightness $B$ of a light source is inversely proportional to the square of distance $d$. If distance is tripled, by what factor does brightness change?",
              "working": [
                "d -> 3d => d^2 -> 9d^2 => Brightness is divided by 9 (or 1/9 of original)"
              ],
              "answer": "Divided by 9 (or multiplied by 1/9)"
            }
          ]
        },
        {
          "id": "21.1-6",
          "title": "Exercise: Level 3 (Exam-Style)",
          "type": "exercise_3",
          "level": "extended",
          "badgeText": "Exercise: Level 3 (Exam-Style)",
          "questions": [
            {
              "id": "21.1-q7",
              "number": 1,
              "marks": 3,
              "question": "$y$ is inversely proportional to $\\sqrt{x}$.\nWhen $x = 16$, $y = 3$.\nFind $y$ when $x = 64$. [3 marks]",
              "working": [
                "y = k / \\sqrt{x} => 3 = k / \\sqrt{16} = k / 4 => k = 12",
                "When x = 64: y = 12 / \\sqrt{64} = 12 / 8 = 1.5"
              ],
              "answer": "1.5 (or 3/2)",
              "markBreakdown": "M1 for y = k/\\sqrt{x}, M1 for k = 12, A1 for 1.5"
            },
            {
              "id": "21.1-q8",
              "number": 2,
              "marks": 3,
              "question": "$T$ is directly proportional to $l^3$.\nWhen $l = 2$, $T = 24$.\nFind the value of $l$ when $T = 375$. [3 marks]",
              "working": [
                "T = k l^3 => 24 = k(8) => k = 3",
                "375 = 3 l^3 => l^3 = 125 => l = 5"
              ],
              "answer": "l = 5",
              "markBreakdown": "M1 for k = 3, M1 for l^3 = 125, A1 for l = 5"
            },
            {
              "id": "21.1-q9",
              "number": 3,
              "marks": 4,
              "question": "$z$ is proportional to $x$ and inversely proportional to $y^2$.\nWhen $x = 8$ and $y = 2$, $z = 6$.\nFind $z$ when $x = 18$ and $y = 3$. [4 marks]",
              "working": [
                "z = k x / y^2 => 6 = k(8) / 4 = 2k => k = 3",
                "Formula: z = 3x / y^2",
                "x = 18, y = 3 => z = 3(18) / 3^2 = 54 / 9 = 6"
              ],
              "answer": "z = 6",
              "markBreakdown": "M1 for z = kx/y^2, M1 for k = 3, M1 for substitution, A1 for z = 6"
            }
          ]
        }
      ]
    },
    {
      "id": "21.2",
      "number": "21.2",
      "title": "Speed-time graphs & distance travelled",
      "type": "lesson",
      "level": "both",
      "steps": [
        {
          "id": "21.2-1",
          "title": "Concept & Intuition: Gradients and Areas in Kinematics",
          "type": "concept",
          "level": "both",
          "badgeText": "Concept & Intuition",
          "summary": "On a **Speed-Time graph**:\n- **Gradient** = **Acceleration** (rate of change of speed)\n$$\\text{Acceleration} = \\frac{\\Delta v}{\\Delta t} = \\frac{v - u}{t}$$\n- A negative gradient represents **deceleration** (retardation).\n- **Area under the graph** = **Total Distance Travelled** (split into triangles, rectangles, and trapeziums).",
          "analogy": "Like odometer and speedometer: the speedometer shows the height of the graph, and the accumulated area under the curve is the odometer distance counter.",
          "terms": [
            {
              "term": "Acceleration",
              "definition": "Gradient of the speed-time graph: $\\text{Rise}/\\text{Run}$ in $\\text{m/s}^2$.",
              "example": "Accelerating from 0 to 20 m/s in 5 s $\\implies a = 4\\text{ m/s}^2$."
            },
            {
              "term": "Distance Travelled",
              "definition": "Total area enclosed between the speed-time graph and the time axis.",
              "example": "Trapezium area: $\\frac{1}{2}(a + b)h$."
            }
          ],
          "rules": [
            {
              "title": "Trapezium Area Shortcut",
              "latex": "\\text{Distance} = \\frac{1}{2}(a + b)h",
              "explanation": "$a$ = top steady speed duration, $b$ = total journey time, $h$ = maximum speed."
            }
          ]
        },
        {
          "id": "21.2-2",
          "title": "Worked Example: Trapezoidal Speed-Time Profile",
          "type": "worked_example",
          "level": "both",
          "badgeText": "Worked Example",
          "workedProblem": {
            "statement": "A car accelerates from rest to $24\\text{ m/s}$ in 8 seconds, maintains this speed for 20 seconds, and decelerates uniformly to rest in 12 seconds.\n(a) Calculate the acceleration in the first 8 seconds.\n(b) Calculate the total distance travelled.",
            "steps": [
              {
                "stepNumber": 1,
                "instruction": "Gradient during first 8 seconds: $a = \\frac{24 - 0}{8} = 3\\text{ m/s}^2$.",
                "latex": "a = 3\\text{ m/s}^2",
                "note": "Acceleration."
              },
              {
                "stepNumber": 2,
                "instruction": "Total time $b = 8 + 20 + 12 = 40$ seconds. Steady speed time $a = 20$ seconds.",
                "latex": "a = 20\\text{ s}, \\quad b = 40\\text{ s}, \\quad h = 24\\text{ m/s}",
                "note": "Trapezium dimensions."
              },
              {
                "stepNumber": 3,
                "instruction": "Distance = area of trapezium $= \\frac{1}{2}(a + b)h = \\frac{1}{2}(20 + 40)(24) = 30 \\times 24 = 720\\text{ metres}$.",
                "latex": "\\text{Distance} = 720\\text{ m}",
                "note": "Total area."
              }
            ],
            "finalAnswer": "(a) 3 m/s^2; (b) 720 metres"
          }
        },
        {
          "id": "21.2-3",
          "title": "Common Mistake & Pro Tip: Speed-Time vs Distance-Time",
          "type": "common_mistakes",
          "level": "both",
          "badgeText": "Common Mistake & Pro Tip",
          "commonMistakes": [
            {
              "mistake": "Confusing distance-time graphs (where gradient = speed) with speed-time graphs (where gradient = acceleration and area = distance).",
              "correction": "Always check the vertical axis label first! If $y$ is Speed, area is distance.",
              "examinerTip": "Deceleration is positive acceleration in the opposite direction. If asked for deceleration, give a positive number: e.g. $2\\text{ m/s}^2$, not $-2\\text{ m/s}^2$.",
              "memoryTrick": "Speed-Time: Gradient = Accel, Area = Distance."
            }
          ]
        },
        {
          "id": "21.2-4",
          "title": "Exercise: Level 1 (Basic)",
          "type": "exercise_1",
          "level": "both",
          "badgeText": "Exercise: Level 1 (Basic)",
          "questions": [
            {
              "id": "21.2-q1",
              "number": 1,
              "question": "A train accelerates from 0 to 30 m/s in 15 seconds. Calculate its acceleration.",
              "working": [
                "a = 30 / 15 = 2 m/s^2"
              ],
              "answer": "2 m/s^2"
            },
            {
              "id": "21.2-q2",
              "number": 2,
              "question": "A car travels at a constant speed of 18 m/s for 25 seconds. Find the distance travelled.",
              "working": [
                "Area of rectangle = 18 * 25 = 450 m"
              ],
              "answer": "450 m"
            },
            {
              "id": "21.2-q3",
              "number": 3,
              "question": "What does a horizontal line on a speed-time graph represent?",
              "working": [
                "Speed is constant (acceleration = 0)"
              ],
              "answer": "Constant speed (zero acceleration)"
            }
          ]
        },
        {
          "id": "21.2-5",
          "title": "Exercise: Level 2 (Real-World Scenarios)",
          "type": "exercise_2",
          "level": "both",
          "badgeText": "Exercise: Level 2 (Real-World)",
          "questions": [
            {
              "id": "21.2-q4",
              "number": 1,
              "question": "An electric car accelerates from 0 to 28 m/s in 4 seconds. Find its acceleration.",
              "working": [
                "a = 28 / 4 = 7 m/s^2"
              ],
              "answer": "7 m/s^2"
            },
            {
              "id": "21.2-q5",
              "number": 2,
              "question": "A sprinter accelerates uniformly for 3 seconds reaching 10 m/s, then runs at 10 m/s for 7 seconds. Find the total distance run.",
              "working": [
                "Triangle: (1/2) * 3 * 10 = 15 m",
                "Rectangle: 7 * 10 = 70 m",
                "Total = 15 + 70 = 85 m"
              ],
              "answer": "85 m"
            },
            {
              "id": "21.2-q6",
              "number": 3,
              "question": "A subway train takes 60 seconds between two stations. It accelerates for 10 s to 20 m/s, cruises for 40 s, and brakes for 10 s. Find the distance between stations.",
              "working": [
                "Trapezium: (1/2) * (40 + 60) * 20 = 50 * 20 = 1000 m (1 km)"
              ],
              "answer": "1000 m (or 1 km)"
            }
          ]
        },
        {
          "id": "21.2-6",
          "title": "Exercise: Level 3 (Exam-Style)",
          "type": "exercise_3",
          "level": "both",
          "badgeText": "Exercise: Level 3 (Exam-Style)",
          "questions": [
            {
              "id": "21.2-q7",
              "number": 1,
              "marks": 3,
              "question": "A vehicle travelling at $V\\text{ m/s}$ brakes to a halt in 6 seconds with deceleration $3.5\\text{ m/s}^2$. Calculate $V$. [3 marks]",
              "working": [
                "Deceleration = V / 6 = 3.5 => V = 3.5 * 6 = 21 m/s"
              ],
              "answer": "21 m/s",
              "markBreakdown": "M2 for V / 6 = 3.5, A1 for V = 21 m/s"
            },
            {
              "id": "21.2-q8",
              "number": 2,
              "marks": 4,
              "question": "A motorcyclist travels for $T$ seconds. She accelerates uniformly from rest for 10 seconds to $30\\text{ m/s}$, and then travels at $30\\text{ m/s}$ for $(T - 10)$ seconds.\nThe total distance travelled is 750 metres. Find the value of $T$. [4 marks]",
              "working": [
                "Triangle area = (1/2) * 10 * 30 = 150 m",
                "Rectangle area = 30 * (T - 10) = 30T - 300",
                "Total = 150 + 30T - 300 = 30T - 150 = 750",
                "30T = 900 => T = 30 seconds"
              ],
              "answer": "T = 30 seconds",
              "markBreakdown": "M1 for triangle 150 m, M1 for rectangle 30(T - 10), M1 for setting sum to 750, A1 for T = 30 s"
            },
            {
              "id": "21.2-q9",
              "number": 3,
              "marks": 4,
              "question": "Calculate the average speed of the motorcyclist across the whole 30-second journey in km/h. [4 marks]",
              "working": [
                "Total distance = 750 m = 0.75 km",
                "Total time = 30 s = 30 / 3600 = 1/120 hr",
                "Speed = 750 / 30 = 25 m/s",
                "In km/h = 25 * 3.6 = 90 km/h"
              ],
              "answer": "90 km/h",
              "markBreakdown": "M1 for average speed = 750/30 = 25 m/s, M2 for * 3.6, A1 for 90 km/h"
            }
          ]
        }
      ]
    },
    {
      "id": "21.test",
      "number": "Test 21",
      "title": "Chapter 21 Test: Ratio, rate & proportion",
      "type": "chapterTest",
      "level": "both",
      "steps": [
        {
          "id": "21.test-1",
          "title": "Chapter 21 Test: Part A (Basic Recall)",
          "type": "test_part_a",
          "level": "both",
          "badgeText": "Test Part A: Core Recall",
          "questions": [
            {
              "id": "21.t-1",
              "number": 1,
              "marks": 2,
              "question": "If $y \\propto x$ and $y = 15$ when $x = 3$, find the formula connecting $y$ and $x$.",
              "working": [
                "k = 15 / 3 = 5 => y = 5x"
              ],
              "answer": "y = 5x",
              "markBreakdown": "M1 for k = 5, A1 for y = 5x"
            },
            {
              "id": "21.t-2",
              "number": 2,
              "marks": 2,
              "question": "On a speed-time graph, what physical quantities are represented by (a) the gradient, (b) the area?",
              "working": [
                "(a) Acceleration, (b) Distance travelled"
              ],
              "answer": "(a) Acceleration; (b) Distance travelled",
              "markBreakdown": "B1 for Acceleration, B1 for Distance"
            },
            {
              "id": "21.t-3",
              "number": 3,
              "marks": 2,
              "question": "Write an equation showing that $y$ is inversely proportional to $x$.",
              "working": [
                "y = k / x"
              ],
              "answer": "y = k / x",
              "markBreakdown": "B2 for y = k / x"
            }
          ]
        },
        {
          "id": "21.test-2",
          "title": "Chapter 21 Test: Part B (Real-World Problems)",
          "type": "test_part_b",
          "level": "both",
          "badgeText": "Test Part B: Multi-Step Real-World Application",
          "questions": [
            {
              "id": "21.t-4",
              "number": 1,
              "marks": 3,
              "question": "The weight $W$ of a hanging cable is directly proportional to its length $L$. A 15 m cable weighs 12 kg. How much does a 25 m cable weigh?",
              "working": [
                "k = 12 / 15 = 0.8 kg/m",
                "For L = 25: W = 0.8 * 25 = 20 kg"
              ],
              "answer": "20 kg",
              "markBreakdown": "M1 for k = 0.8, M1 for 0.8 * 25, A1 for 20 kg"
            },
            {
              "id": "21.t-5",
              "number": 2,
              "marks": 3,
              "question": "A bullet train accelerates uniformly from 0 to 80 m/s in 20 seconds. How far does it travel during this time?",
              "working": [
                "Distance = (1/2) * 20 * 80 = 800 metres"
              ],
              "answer": "800 m",
              "markBreakdown": "M2 for (1/2)*20*80, A1 for 800 m"
            },
            {
              "id": "21.t-6",
              "number": 3,
              "marks": 4,
              "question": "The time $t$ taken for ice to melt is inversely proportional to temperature $T^\\circ\\text{C}$. At $20^\\circ\\text{C}$, it takes 6 hours. How long does it take at $30^\\circ\\text{C}$?",
              "working": [
                "t = k / T => k = 20 * 6 = 120",
                "At T = 30: t = 120 / 30 = 4 hours"
              ],
              "answer": "4 hours",
              "markBreakdown": "M1 for k = 120, M2 for 120 / 30, A1 for 4 hours"
            }
          ]
        },
        {
          "id": "21.test-3",
          "title": "Chapter 21 Test: Part C (Exam-Style Challenge)",
          "type": "test_part_c",
          "level": "both",
          "badgeText": "Test Part C: Exam Challenge",
          "questions": [
            {
              "id": "21.t-7",
              "number": 1,
              "marks": 5,
              "question": "A rocket starts from rest and accelerates at $8\\text{ m/s}^2$ for 15 seconds. It then travels at constant speed for 40 seconds before coasting to a halt with deceleration $6\\text{ m/s}^2$.\n(a) Find the maximum speed reached. [1 mark]\n(b) Find the deceleration time. [1 mark]\n(c) Calculate the total distance travelled. [3 marks]",
              "working": [
                "(a) V = 8 * 15 = 120 m/s",
                "(b) t_dec = 120 / 6 = 20 s",
                "(c) Dist 1 = (1/2)*15*120 = 900 m; Dist 2 = 40*120 = 4800 m; Dist 3 = (1/2)*20*120 = 1200 m; Total = 900 + 4800 + 1200 = 6900 m"
              ],
              "answer": "(a) 120 m/s; (b) 20 s; (c) 6900 m (6.9 km)",
              "markBreakdown": "B1 for 120 m/s; B1 for 20 s; M2 for 3-part area, A1 for 6900 m"
            },
            {
              "id": "21.t-8",
              "number": 2,
              "marks": 4,
              "question": "$y$ is inversely proportional to the square of $x$. When $x = a$, $y = 16$.\nFind $y$ in terms of $a$ when $x = 2a$. [4 marks]",
              "working": [
                "y = k / x^2 => 16 = k / a^2 => k = 16a^2",
                "When x = 2a: y = 16a^2 / (2a)^2 = 16a^2 / (4a^2) = 4"
              ],
              "answer": "y = 4",
              "markBreakdown": "M1 for y = k/x^2, M1 for k = 16a^2, M1 for substituting 2a, A1 for y = 4"
            },
            {
              "id": "21.t-9",
              "number": 3,
              "marks": 4,
              "question": "If $y$ is directly proportional to $x^2$, and $x$ increases by 20%, find the percentage increase in $y$. [4 marks]",
              "working": [
                "New x = 1.2x",
                "New y = k(1.2x)^2 = 1.44 k x^2 = 1.44 y",
                "Percentage increase = 44%"
              ],
              "answer": "44% increase",
              "markBreakdown": "M1 for 1.2x, M2 for (1.2)^2 = 1.44, A1 for 44%"
            }
          ]
        }
      ]
    }
  ]
};

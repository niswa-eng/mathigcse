import { Unit } from '../types/content';

export const unit10: Unit = {
  "id": 10,
  "title": "Straight lines and quadratic equations",
  "learningObjectives": [
    "C10.1, E10.1: Gradient-intercept form y = mx + c, gradient m = (y2 - y1)/(x2 - x1)",
    "E10.1: Parallel lines (m1 = m2) and perpendicular lines (m1 * m2 = -1)",
    "C10.2, E10.2: Solving quadratic equations by factorisation",
    "E10.3: Solving quadratic equations using the quadratic formula and completing the square"
  ],
  "subtopics": [
    {
      "id": "10.1",
      "number": "10.1",
      "title": "Straight line equations (y = mx + c)",
      "type": "lesson",
      "level": "both",
      "steps": [
        {
          "id": "10.1-1",
          "title": "Concept & Intuition: Slope and Intercept",
          "type": "concept",
          "level": "both",
          "badgeText": "Concept & Intuition",
          "summary": "A straight line on Cartesian axes is defined by $y = mx + c$, where $m$ is the gradient (rate of vertical change per unit horizontal step) and $c$ is the $y$-intercept (where $x = 0$). Parallel lines have the same gradient. Perpendicular lines meet at $90^\\circ$ with negative reciprocal gradients: $m_1 \\times m_2 = -1$.",
          "analogy": "A ski slope: gradient $m$ measures the steepness, and $c$ is your starting elevation at the resort entrance.",
          "terms": [
            {
              "term": "Gradient (m)",
              "definition": "$\\frac{\\text{Rise}}{\\text{Run}} = \\frac{y_2 - y_1}{x_2 - x_1}$.",
              "example": "Points $(2, 3)$ and $(6, 11) \\implies m = \\frac{11 - 3}{6 - 2} = 2$."
            },
            {
              "term": "Perpendicular Gradient",
              "definition": "Negative reciprocal: $m_2 = -\\frac{1}{m_1}$.",
              "example": "If $m_1 = \\frac{2}{3}$, then $m_2 = -\\frac{3}{2}$."
            }
          ],
          "rules": [
            {
              "title": "Straight Line Equation",
              "latex": "y = mx + c \\quad \\text{or} \\quad y - y_1 = m(x - x_1)",
              "explanation": "Use known gradient and one point $(x_1, y_1)$."
            },
            {
              "title": "Perpendicularity Condition",
              "latex": "m_1 \\times m_2 = -1",
              "explanation": "Gradients multiply to $-1$."
            }
          ],
          "interactiveTool": {
            "type": "coordinate_grid",
            "title": "Interactive Line Plotter"
          }
        },
        {
          "id": "10.1-2",
          "title": "Worked Example: Finding Equations & Perpendiculars",
          "type": "worked_example",
          "level": "both",
          "badgeText": "Worked Example",
          "workedProblem": {
            "statement": "(a) Find the equation of the line passing through $A(2, 5)$ and $B(6, 13)$.\n(b) Find the equation of the line perpendicular to $AB$ passing through $(4, 1)$.",
            "steps": [
              {
                "stepNumber": 1,
                "instruction": "Calculate gradient $m$ of $AB$.",
                "latex": "m = \\frac{13 - 5}{6 - 2} = \\frac{8}{4} = 2",
                "note": "Rise over run."
              },
              {
                "stepNumber": 2,
                "instruction": "Use $y = mx + c$ with $(2, 5)$.",
                "latex": "5 = 2(2) + c \\implies c = 1",
                "note": "Line is $y = 2x + 1$."
              },
              {
                "stepNumber": 3,
                "instruction": "Perpendicular gradient is negative reciprocal.",
                "latex": "m_\\perp = -\\frac{1}{2}",
                "note": "Flip and negate 2."
              },
              {
                "stepNumber": 4,
                "instruction": "Use $y = mx + c$ with point $(4, 1)$.",
                "latex": "1 = -\\frac{1}{2}(4) + c \\implies 1 = -2 + c \\implies c = 3",
                "note": "Equation: $y = -\\frac{1}{2}x + 3$."
              }
            ],
            "finalAnswer": "(a) y = 2x + 1; (b) y = -1/2 x + 3 (or x + 2y = 6)"
          }
        },
        {
          "id": "10.1-3",
          "title": "Common Mistake & Pro Tip: Inverting Gradient Ratio",
          "type": "common_mistakes",
          "level": "both",
          "badgeText": "Common Mistake & Pro Tip",
          "commonMistakes": [
            {
              "mistake": "Computing gradient as $(x_2 - x_1)/(y_2 - y_1)$ instead of $(y_2 - y_1)/(x_2 - x_1)$.",
              "correction": "Always remember: $y$ goes in the sky! It is vertical change divided by horizontal change.",
              "examinerTip": "When perpendicular gradient is needed, change the sign AND invert the fraction. $-2/5 \\to +5/2$.",
              "memoryTrick": "Rise over run; flip and swap sign."
            }
          ]
        },
        {
          "id": "10.1-4",
          "title": "Exercise: Level 1 (Basic)",
          "type": "exercise_1",
          "level": "both",
          "badgeText": "Exercise: Level 1 (Basic)",
          "questions": [
            {
              "id": "10.1-q1",
              "number": 1,
              "question": "Find the gradient and $y$-intercept of the straight line $y = 4x - 7$.",
              "working": [
                "Comparing with y = mx + c: m = 4, c = -7"
              ],
              "answer": "Gradient = 4, y-intercept = -7 (or (0, -7))"
            },
            {
              "id": "10.1-q2",
              "number": 2,
              "question": "Calculate the gradient of the line joining the points $(1, 3)$ and $(5, 11)$.",
              "working": [
                "m = (11 - 3) / (5 - 1) = 8 / 4 = 2"
              ],
              "answer": "2"
            },
            {
              "id": "10.1-q3",
              "number": 3,
              "question": "State the gradient of any line that is parallel to $2y = 6x + 5$.",
              "working": [
                "Divide by 2: y = 3x + 2.5",
                "Gradient is 3; parallel lines have the same gradient"
              ],
              "answer": "3"
            }
          ]
        },
        {
          "id": "10.1-5",
          "title": "Exercise: Level 2 (Real-World Scenarios)",
          "type": "exercise_2",
          "level": "both",
          "badgeText": "Exercise: Level 2 (Real-World)",
          "questions": [
            {
              "id": "10.1-q4",
              "number": 1,
              "question": "A taxi ride costs a fixed charge of $5 plus $2.50 per kilometre. (a) Write a formula for cost $C$ in terms of distance $d$. (b) Find the cost of a 14 km journey.",
              "working": [
                "(a) C = 2.5d + 5",
                "(b) C = 2.5(14) + 5 = 35 + 5 = 40"
              ],
              "answer": "(a) C = 2.5d + 5; (b) $40"
            },
            {
              "id": "10.1-q5",
              "number": 2,
              "question": "A plumber charges $110 for 2 hours and $230 for 5 hours. Find the plumber's hourly rate and call-out fee.",
              "working": [
                "Gradient = (230 - 110) / (5 - 2) = 120 / 3 = $40/hr",
                "Call-out fee = 110 - 2(40) = $30"
              ],
              "answer": "Hourly rate = $40/hr, Call-out fee = $30"
            },
            {
              "id": "10.1-q6",
              "number": 3,
              "question": "A line has equation $3x + 4y = 24$. Find the coordinates of the points where this line intersects the $x$-axis and the $y$-axis.",
              "working": [
                "y = 0: 3x = 24 => x = 8 => (8, 0)",
                "x = 0: 4y = 24 => y = 6 => (0, 6)"
              ],
              "answer": "x-intercept (8, 0), y-intercept (0, 6)"
            }
          ]
        },
        {
          "id": "10.1-6",
          "title": "Exercise: Level 3 (Exam-Style)",
          "type": "exercise_3",
          "level": "both",
          "badgeText": "Exercise: Level 3 (Exam-Style)",
          "questions": [
            {
              "id": "10.1-q7",
              "number": 1,
              "marks": 3,
              "question": "Point $P$ is $(1, 4)$ and point $Q$ is $(7, 16)$.\n(a) Find the midpoint of $PQ$. [1 mark]\n(b) Find the equation of the line passing through $P$ and $Q$. [2 marks]",
              "working": [
                "(a) Midpoint = ((1+7)/2, (4+16)/2) = (4, 10)",
                "(b) m = (16 - 4)/(7 - 1) = 12/6 = 2. y - 4 = 2(x - 1) => y = 2x + 2"
              ],
              "answer": "(a) (4, 10); (b) y = 2x + 2",
              "markBreakdown": "B1 for (4, 10); M1 for m = 2, A1 for y = 2x + 2"
            },
            {
              "id": "10.1-q8",
              "number": 2,
              "marks": 3,
              "question": "Line $L_1$ has equation $y = -3x + 7$.\nLine $L_2$ is perpendicular to $L_1$ and passes through $(6, 5)$.\nFind the equation of $L_2$ in the form $y = mx + c$. [3 marks]",
              "working": [
                "m_1 = -3 => m_2 = 1/3",
                "5 = (1/3)(6) + c => 5 = 2 + c => c = 3",
                "Equation: y = 1/3 x + 3"
              ],
              "answer": "y = 1/3 x + 3",
              "markBreakdown": "M1 for m_2 = 1/3, M1 for substituting (6, 5), A1 for y = 1/3 x + 3"
            },
            {
              "id": "10.1-q9",
              "number": 3,
              "marks": 4,
              "question": "Find the coordinates of the intersection of $y = 2x - 1$ and $3x + 2y = 12$. [4 marks]",
              "working": [
                "Substitute: 3x + 2(2x - 1) = 12",
                "3x + 4x - 2 = 12 => 7x = 14 => x = 2",
                "y = 2(2) - 1 = 3"
              ],
              "answer": "(2, 3)",
              "markBreakdown": "M1 for substitution, M1 for 7x = 14, A1 for x = 2, A1 for y = 3"
            }
          ]
        }
      ]
    },
    {
      "id": "10.2",
      "number": "10.2",
      "title": "Solving quadratic equations",
      "type": "lesson",
      "level": "both",
      "steps": [
        {
          "id": "10.2-1",
          "title": "Concept & Intuition: Quadratics and Their Roots",
          "type": "concept",
          "level": "both",
          "badgeText": "Concept & Intuition",
          "summary": "A quadratic equation has the form $ax^2 + bx + c = 0$ ($a \\ne 0$). We can solve it by:\n1. Factorisation (finding factors $(px + q)(rx + s) = 0$)\n2. Quadratic Formula ($x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$)\n3. Completing the square ($(x + p)^2 + q = 0$).",
          "analogy": "The path of a basketball is a parabola: the roots are the two points where the ball touches the ground.",
          "terms": [
            {
              "term": "Roots",
              "definition": "The values of $x$ for which $ax^2 + bx + c = 0$.",
              "example": "$x^2 - 5x + 6 = 0 \\implies x = 2 \\text{ or } 3$."
            },
            {
              "term": "Discriminant",
              "definition": "$\\Delta = b^2 - 4ac$. If $> 0$: 2 real roots; if $= 0$: 1 repeated root; if $< 0$: no real roots.",
              "example": "Used to determine nature of roots."
            }
          ],
          "rules": [
            {
              "title": "Quadratic Formula",
              "latex": "x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}",
              "explanation": "Always rearrange to $ax^2 + bx + c = 0$ first."
            }
          ]
        },
        {
          "id": "10.2-2",
          "title": "Worked Example: Factorisation & Quadratic Formula",
          "type": "worked_example",
          "level": "both",
          "badgeText": "Worked Example",
          "workedProblem": {
            "statement": "(a) Solve $x^2 - 7x + 12 = 0$ by factorisation.\n(b) Solve $2x^2 + 5x - 4 = 0$ using the quadratic formula, giving solutions to 2 decimal places.",
            "steps": [
              {
                "stepNumber": 1,
                "instruction": "Find two numbers multiplying to +12 and adding to -7: -3 and -4.",
                "latex": "(x - 3)(x - 4) = 0",
                "note": "Factorisation."
              },
              {
                "stepNumber": 2,
                "instruction": "Set each bracket to zero: $x = 3$ or $x = 4$.",
                "latex": "x = 3, \\quad x = 4",
                "note": "Exact integer roots."
              },
              {
                "stepNumber": 3,
                "instruction": "For (b), identify $a = 2, b = 5, c = -4$.",
                "latex": "x = \\frac{-5 \\pm \\sqrt{5^2 - 4(2)(-4)}}{2(2)} = \\frac{-5 \\pm \\sqrt{57}}{4}",
                "note": "Formula substitution."
              },
              {
                "stepNumber": 4,
                "instruction": "Calculate decimal roots using $\\sqrt{57} \\approx 7.5498$.",
                "latex": "x = \\frac{-5 + 7.5498}{4} = 0.64, \\quad x = \\frac{-5 - 7.5498}{4} = -3.14",
                "note": "Rounded to 2 d.p."
              }
            ],
            "finalAnswer": "(a) x = 3 or x = 4; (b) x = 0.64 or x = -3.14 (to 2 d.p.)"
          }
        },
        {
          "id": "10.2-3",
          "title": "Common Mistake & Pro Tip: Negative b Signs in Formula",
          "type": "common_mistakes",
          "level": "both",
          "badgeText": "Common Mistake & Pro Tip",
          "commonMistakes": [
            {
              "mistake": "Computing $(-5)^2$ as $-25$ on calculators, or forgetting that $-b$ becomes positive when $b$ is negative.",
              "correction": "Always write $b^2$ in brackets: $(-5)^2 = +25$. If $b = -5$, $-b = -(-5) = +5$.",
              "examinerTip": "When exam questions say 'give your answers to 2 decimal places', that is a direct clue that it does not factorise: use the formula immediately!",
              "memoryTrick": "'2 d.p.' = Use the Formula!"
            }
          ]
        },
        {
          "id": "10.2-4",
          "title": "Exercise: Level 1 (Basic)",
          "type": "exercise_1",
          "level": "both",
          "badgeText": "Exercise: Level 1 (Basic)",
          "questions": [
            {
              "id": "10.2-q1",
              "number": 1,
              "question": "Solve $(x + 5)(x - 2) = 0$.",
              "working": [
                "x + 5 = 0 => x = -5",
                "x - 2 = 0 => x = 2"
              ],
              "answer": "x = -5, x = 2"
            },
            {
              "id": "10.2-q2",
              "number": 2,
              "question": "Solve $x^2 - 9 = 0$.",
              "working": [
                "(x - 3)(x + 3) = 0 => x = ±3"
              ],
              "answer": "x = 3, x = -3"
            },
            {
              "id": "10.2-q3",
              "number": 3,
              "question": "Solve by factorisation: $x^2 + 8x + 15 = 0$.",
              "working": [
                "(x + 3)(x + 5) = 0 => x = -3, x = -5"
              ],
              "answer": "x = -3, x = -5"
            }
          ]
        },
        {
          "id": "10.2-5",
          "title": "Exercise: Level 2 (Real-World Scenarios)",
          "type": "exercise_2",
          "level": "both",
          "badgeText": "Exercise: Level 2 (Real-World)",
          "questions": [
            {
              "id": "10.2-q4",
              "number": 1,
              "question": "The length of a garden is 3 m longer than its width $w$. The area is $70\\text{ m}^2$. (a) Form a quadratic equation in $w$. (b) Solve it to find the dimensions.",
              "working": [
                "(a) w(w + 3) = 70 => w^2 + 3w - 70 = 0",
                "(b) (w + 10)(w - 7) = 0 => w = 7 (width > 0). Length = 7 + 3 = 10 m"
              ],
              "answer": "(a) w^2 + 3w - 70 = 0; (b) width = 7 m, length = 10 m"
            },
            {
              "id": "10.2-q5",
              "number": 2,
              "question": "A ball thrown upwards reaches height $h = 20t - 5t^2$ metres after $t$ seconds. Find the times when its height is 15 m.",
              "working": [
                "20t - 5t^2 = 15 => 5t^2 - 20t + 15 = 0 => t^2 - 4t + 3 = 0",
                "(t - 1)(t - 3) = 0 => t = 1 s and t = 3 s"
              ],
              "answer": "t = 1 s and t = 3 s"
            },
            {
              "id": "10.2-q6",
              "number": 3,
              "question": "The product of two consecutive positive odd integers is 143. Find the integers.",
              "working": [
                "x(x + 2) = 143 => x^2 + 2x - 143 = 0",
                "(x + 13)(x - 11) = 0 => x = 11. Next odd = 13"
              ],
              "answer": "11 and 13"
            }
          ]
        },
        {
          "id": "10.2-6",
          "title": "Exercise: Level 3 (Exam-Style)",
          "type": "exercise_3",
          "level": "both",
          "badgeText": "Exercise: Level 3 (Exam-Style)",
          "questions": [
            {
              "id": "10.2-q7",
              "number": 1,
              "marks": 3,
              "question": "Solve the equation: $3x^2 - 11x - 4 = 0$. Show your working clearly. [3 marks]",
              "working": [
                "Factorise: (3x + 1)(x - 4) = 0",
                "3x + 1 = 0 => x = -1/3; x - 4 = 0 => x = 4"
              ],
              "answer": "x = 4 or x = -1/3",
              "markBreakdown": "M2 for (3x + 1)(x - 4) = 0, A1 for x = 4 and x = -1/3"
            },
            {
              "id": "10.2-q8",
              "number": 2,
              "marks": 4,
              "question": "Solve the equation $2x^2 - 7x - 3 = 0$. Give your answers correct to 2 decimal places. [4 marks]",
              "working": [
                "a = 2, b = -7, c = -3",
                "x = (7 ± \\sqrt{49 - 4(2)(-3)}) / 4 = (7 ± \\sqrt{73}) / 4",
                "\\sqrt{73} ≈ 8.544 => x = 15.544/4 ≈ 3.89; x = -1.544/4 ≈ -0.39"
              ],
              "answer": "x = 3.89 or x = -0.39",
              "markBreakdown": "M1 for formula setup, M1 for discriminant 73, M1 for evaluation, A1 for 3.89 and -0.39"
            },
            {
              "id": "10.2-q9",
              "number": 3,
              "marks": 4,
              "question": "Write $x^2 + 6x - 11$ in the form $(x + p)^2 + q$. Hence solve $x^2 + 6x - 11 = 0$ in exact surd form. [4 marks]",
              "working": [
                "(x + 3)^2 - 9 - 11 = (x + 3)^2 - 20",
                "(x + 3)^2 = 20 => x + 3 = ±\\sqrt{20} = ±2\\sqrt{5}",
                "x = -3 ± 2\\sqrt{5}"
              ],
              "answer": "(x + 3)^2 - 20; x = -3 ± 2\\sqrt{5}",
              "markBreakdown": "M2 for (x + 3)^2 - 20, M1 for x + 3 = ±\\sqrt{20}, A1 for x = -3 ± 2\\sqrt{5}"
            }
          ]
        }
      ]
    },
    {
      "id": "10.test",
      "number": "Test 10",
      "title": "Chapter 10 Test: Straight lines & quadratics",
      "type": "chapterTest",
      "level": "both",
      "steps": [
        {
          "id": "10.test-1",
          "title": "Chapter 10 Test: Part A (Basic Recall)",
          "type": "test_part_a",
          "level": "both",
          "badgeText": "Test Part A: Core Recall",
          "questions": [
            {
              "id": "10.t-1",
              "number": 1,
              "marks": 2,
              "question": "Find the gradient of the line joining $(-2, 1)$ and $(4, 13)$.",
              "working": [
                "m = (13 - 1) / (4 - (-2)) = 12 / 6 = 2"
              ],
              "answer": "2",
              "markBreakdown": "M1 for (13 - 1)/(4 - (-2)), A1 for 2"
            },
            {
              "id": "10.t-2",
              "number": 2,
              "marks": 2,
              "question": "Solve by factorisation: $x^2 - 10x + 21 = 0$.",
              "working": [
                "(x - 3)(x - 7) = 0 => x = 3 or x = 7"
              ],
              "answer": "x = 3, x = 7",
              "markBreakdown": "M1 for (x - 3)(x - 7), A1 for x = 3, 7"
            },
            {
              "id": "10.t-3",
              "number": 3,
              "marks": 2,
              "question": "State the gradient of a line perpendicular to $y = -\\frac{3}{4}x + 2$.",
              "working": [
                "Negative reciprocal of -3/4 is +4/3"
              ],
              "answer": "4/3",
              "markBreakdown": "M1 for negative reciprocal concept, A1 for 4/3"
            }
          ]
        },
        {
          "id": "10.test-2",
          "title": "Chapter 10 Test: Part B (Real-World Problems)",
          "type": "test_part_b",
          "level": "both",
          "badgeText": "Test Part B: Multi-Step Real-World Application",
          "questions": [
            {
              "id": "10.t-4",
              "number": 1,
              "marks": 3,
              "question": "A candle is 25 cm tall and burns down at 1.5 cm/hr. (a) Write a formula for height $h$ in terms of hours $t$. (b) What is its height after 6 hours?",
              "working": [
                "(a) h = 25 - 1.5t",
                "(b) h = 25 - 1.5(6) = 25 - 9 = 16 cm"
              ],
              "answer": "(a) h = 25 - 1.5t; (b) 16 cm",
              "markBreakdown": "M1 for h = 25 - 1.5t; M1 for 25 - 9, A1 for 16 cm"
            },
            {
              "id": "10.t-5",
              "number": 2,
              "marks": 3,
              "question": "A farmer encloses a rectangular pen using an existing wall for one side and 40 m of fencing for 3 sides. The area is $200\\text{ m}^2$. Find the dimensions.",
              "working": [
                "Let width = x, length = 40 - 2x",
                "x(40 - 2x) = 200 => 40x - 2x^2 = 200 => x^2 - 20x + 100 = 0",
                "(x - 10)^2 = 0 => x = 10 m, length = 20 m"
              ],
              "answer": "10 m by 20 m",
              "markBreakdown": "M1 for x(40 - 2x) = 200, M1 for (x - 10)^2 = 0, A1 for 10 m by 20 m"
            },
            {
              "id": "10.t-6",
              "number": 3,
              "marks": 4,
              "question": "The cost $C$ of producing $x$ items is $C = 2x^2 - 28x + 150$. Find the number of items that minimizes cost and state the minimum cost.",
              "working": [
                "Minimum occurs at vertex x = -b / (2a) = 28 / 4 = 7 items",
                "C(7) = 2(49) - 28(7) + 150 = 98 - 196 + 150 = $52"
              ],
              "answer": "7 items, minimum cost = $52",
              "markBreakdown": "M2 for x = 7, M1 for substituting 7, A1 for $52"
            }
          ]
        },
        {
          "id": "10.test-3",
          "title": "Chapter 10 Test: Part C (Exam-Style Challenge)",
          "type": "test_part_c",
          "level": "both",
          "badgeText": "Test Part C: Exam Challenge",
          "questions": [
            {
              "id": "10.t-7",
              "number": 1,
              "marks": 4,
              "question": "The line $L$ passes through $(1, 2)$ and is perpendicular to $2x + 5y = 10$. Find the equation of $L$ in the form $ax + by + c = 0$, where $a, b, c$ are integers. [4 marks]",
              "working": [
                "5y = -2x + 10 => m_1 = -2/5 => m_perp = 5/2",
                "y - 2 = (5/2)(x - 1) => 2y - 4 = 5x - 5 => 5x - 2y - 1 = 0"
              ],
              "answer": "5x - 2y - 1 = 0",
              "markBreakdown": "M1 for m_1 = -2/5, M1 for m_perp = 5/2, M1 for line equation, A1 for 5x - 2y - 1 = 0"
            },
            {
              "id": "10.t-8",
              "number": 2,
              "marks": 5,
              "question": "Solve the equation: $\\frac{3}{x+1} + \\frac{2}{x-2} = 1$. Give answers to 2 decimal places. [5 marks]",
              "working": [
                "3(x - 2) + 2(x + 1) = (x + 1)(x - 2)",
                "5x - 4 = x^2 - x - 2 => x^2 - 6x + 2 = 0",
                "x = (6 ± \\sqrt{36 - 8}) / 2 = 3 ± \\sqrt{7}",
                "\\sqrt{7} ≈ 2.646 => x = 5.65 or x = 0.35"
              ],
              "answer": "x = 5.65 or x = 0.35",
              "markBreakdown": "M1 for clearing fractions, M1 for quadratic x^2 - 6x + 2 = 0, M2 for formula, A1 for 5.65 and 0.35"
            },
            {
              "id": "10.t-9",
              "number": 3,
              "marks": 4,
              "question": "Find the values of $k$ for which the equation $x^2 + kx + (k + 3) = 0$ has equal roots. [4 marks]",
              "working": [
                "Equal roots => b^2 - 4ac = 0",
                "k^2 - 4(1)(k + 3) = 0 => k^2 - 4k - 12 = 0",
                "(k - 6)(k + 2) = 0 => k = 6 or k = -2"
              ],
              "answer": "k = 6 or k = -2",
              "markBreakdown": "M1 for b^2 - 4ac = 0, M1 for k^2 - 4k - 12 = 0, M1 for factorising, A1 for k = 6, -2"
            }
          ]
        }
      ]
    }
  ]
};

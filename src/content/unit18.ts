import { Unit } from '../types/content';

export const unit18: Unit = {
  "id": 18,
  "title": "Curved graphs",
  "learningObjectives": [
    "C18.1, E18.1: Drawing and recognising quadratic (parabola), cubic, and reciprocal curves",
    "E18.2: Estimating gradients of curves by drawing tangents and calculating rise/run",
    "C18.3, E18.3: Solving equations graphically by finding intersection points of lines and curves"
  ],
  "subtopics": [
    {
      "id": "18.1",
      "number": "18.1",
      "title": "Recognising & plotting curved graphs",
      "type": "lesson",
      "level": "both",
      "steps": [
        {
          "id": "18.1-1",
          "title": "Concept & Intuition: The 4 Core Curve Families",
          "type": "concept",
          "level": "both",
          "badgeText": "Concept & Intuition",
          "summary": "In IGCSE Mathematics, you must recognize, plot, and interpret:\n- **Quadratic** ($y = ax^2 + bx + c$): U-shaped (smile) if $a > 0$; $\\cap$-shaped (frown) if $a < 0$.\n- **Cubic** ($y = ax^3 + \\dots$): S-shaped curve with up to two turning points.\n- **Reciprocal** ($y = \\frac{a}{x}$): Hyperbola with two asymptotic branches.\n- **Exponential** ($y = a^x$): Rapidly growing curve passing through $(0, 1)$ with $x$-axis as asymptote.",
          "analogy": "Like a roller coaster: curves have summits (maxima), valleys (minima), and slopes that change continuously at every single point.",
          "terms": [
            {
              "term": "Turning Point (Vertex)",
              "definition": "The maximum or minimum point where the gradient of the curve equals zero.",
              "example": "Minimum of $y = x^2$ is at $(0, 0)$."
            },
            {
              "term": "Asymptote",
              "definition": "A straight line that a curve approaches closer and closer to, but never touches.",
              "example": "Axes $x = 0$ and $y = 0$ for $y = 1/x$."
            }
          ],
          "rules": [
            {
              "title": "Smooth Curve Rule",
              "explanation": "Always draw curves freehand with a sharp pencil as a single, smooth, continuous line. Never use a ruler to connect curve points!"
            }
          ],
          "interactiveTool": {
            "type": "coordinate_grid",
            "title": "Curved Graphs Explorer"
          }
        },
        {
          "id": "18.1-2",
          "title": "Worked Example: Table of Values & Tangent Gradient",
          "type": "worked_example",
          "level": "both",
          "badgeText": "Worked Example",
          "workedProblem": {
            "statement": "For the curve $y = x^2 - 3x$:\n(a) Complete the table for $x = -1, 0, 1, 2, 3, 4$.\n(b) Estimate the gradient of the curve at $x = 3$ by drawing a tangent.",
            "steps": [
              {
                "stepNumber": 1,
                "instruction": "Compute $y$-values: $(-1)^2 - 3(-1) = 1 + 3 = 4$; $0 - 0 = 0$; $1 - 3 = -2$; $4 - 6 = -2$; $9 - 9 = 0$; $16 - 12 = 4$.",
                "latex": "y \\in \\{4, 0, -2, -2, 0, 4\\}",
                "note": "Table points."
              },
              {
                "stepNumber": 2,
                "instruction": "Plot points and join with a smooth symmetrical parabola.",
                "latex": "\\text{Minimum at } (1.5, -2.25)",
                "note": "Smooth curve."
              },
              {
                "stepNumber": 3,
                "instruction": "Draw a straight tangent touching the curve at $(3, 0)$.",
                "latex": "\\text{Tangent passes through } (3, 0) \\text{ and } (5, 6)",
                "note": "Tangent line."
              },
              {
                "stepNumber": 4,
                "instruction": "Gradient $m = \\frac{\\text{Rise}}{\\text{Run}} = \\frac{6 - 0}{5 - 3} = \\frac{6}{2} = 3$.",
                "latex": "m = 3",
                "note": "Gradient at $x = 3$ is 3."
              }
            ],
            "finalAnswer": "(a) Values: 4, 0, -2, -2, 0, 4; (b) Gradient approx 3"
          }
        },
        {
          "id": "18.1-3",
          "title": "Common Mistake & Pro Tip: The Tangent Ruler Angle",
          "type": "common_mistakes",
          "level": "both",
          "badgeText": "Common Mistake & Pro Tip",
          "commonMistakes": [
            {
              "mistake": "Drawing a secant line cutting through the curve instead of a tangent that only grazes it at the exact point.",
              "correction": "A tangent must only touch the curve at that single point without crossing inside the curve.",
              "examinerTip": "When calculating the gradient of your drawn tangent, draw a large triangle with $\\text{Run} \\ge 4$ units to reduce reading errors.",
              "memoryTrick": "Graze the curve, don't slice through it!"
            }
          ]
        },
        {
          "id": "18.1-4",
          "title": "Exercise: Level 1 (Basic)",
          "type": "exercise_1",
          "level": "both",
          "badgeText": "Exercise: Level 1 (Basic)",
          "questions": [
            {
              "id": "18.1-q1",
              "number": 1,
              "question": "What is the shape of the graph of $y = -x^2 + 4$?",
              "working": [
                "Negative x^2 coefficient => Inverted parabola (frown / cap-shaped) with maximum at (0, 4)"
              ],
              "answer": "Inverted parabola (cap-shaped / n-shaped) with maximum at (0, 4)"
            },
            {
              "id": "18.1-q2",
              "number": 2,
              "question": "State the coordinates of the turning point of $y = (x - 3)^2 + 5$.",
              "working": [
                "Vertex is at (3, 5)"
              ],
              "answer": "(3, 5)"
            },
            {
              "id": "18.1-q3",
              "number": 3,
              "question": "Why is $y = \\frac{6}{x}$ undefined at $x = 0$?",
              "working": [
                "Division by zero is mathematically undefined, creating a vertical asymptote at x = 0"
              ],
              "answer": "Division by zero is undefined (x = 0 is a vertical asymptote)"
            }
          ]
        },
        {
          "id": "18.1-5",
          "title": "Exercise: Level 2 (Real-World Scenarios)",
          "type": "exercise_2",
          "level": "both",
          "badgeText": "Exercise: Level 2 (Real-World)",
          "questions": [
            {
              "id": "18.1-q4",
              "number": 1,
              "question": "A rocket's height is $h = 40t - 5t^2$ metres. Find the time at which the rocket reaches its maximum height.",
              "working": [
                "Vertex at t = -b / (2a) = -40 / (2 * -5) = 4 seconds"
              ],
              "answer": "4 seconds"
            },
            {
              "id": "18.1-q5",
              "number": 2,
              "question": "Using the rocket formula above, calculate the maximum height reached.",
              "working": [
                "h(4) = 40(4) - 5(16) = 160 - 80 = 80 metres"
              ],
              "answer": "80 metres"
            },
            {
              "id": "18.1-q6",
              "number": 3,
              "question": "Boyle's Law states pressure and volume satisfy $P = \\frac{100}{V}$. If the volume is $25\\text{ cm}^3$, find the pressure.",
              "working": [
                "P = 100 / 25 = 4 N/cm^2"
              ],
              "answer": "4 N/cm^2"
            }
          ]
        },
        {
          "id": "18.1-6",
          "title": "Exercise: Level 3 (Exam-Style)",
          "type": "exercise_3",
          "level": "both",
          "badgeText": "Exercise: Level 3 (Exam-Style)",
          "questions": [
            {
              "id": "18.1-q7",
              "number": 1,
              "marks": 3,
              "question": "The diagram shows the curve $y = x^2 - 2x - 8$.\n(a) Find the coordinates of the $x$-intercepts. [2 marks]\n(b) Write down the equation of the line of symmetry. [1 mark]",
              "working": [
                "(a) x^2 - 2x - 8 = 0 => (x - 4)(x + 2) = 0 => (4, 0) and (-2, 0)",
                "(b) Line of symmetry halfway between roots: x = (4 + (-2))/2 = 1"
              ],
              "answer": "(a) (4, 0) and (-2, 0); (b) x = 1",
              "markBreakdown": "M1 for factorising, A1 for (4, 0) and (-2, 0); B1 for x = 1"
            },
            {
              "id": "18.1-q8",
              "number": 2,
              "marks": 4,
              "question": "By drawing a suitable straight line on the graph of $y = x^2 - 3x$, solve the equation $x^2 - 3x = x - 1$. [4 marks]",
              "working": [
                "The curve is y = x^2 - 3x. Draw the line y = x - 1",
                "Intersection points: x^2 - 4x + 1 = 0 => x = (4 ± \\sqrt{12}) / 2 = 2 ± \\sqrt{3}",
                "x ≈ 3.73 or x ≈ 0.27"
              ],
              "answer": "x ≈ 3.7 and x ≈ 0.3 (or 2 ± \\sqrt{3})",
              "markBreakdown": "M1 for identifying line y = x - 1, M1 for drawing line, A2 for x ≈ 3.7 and 0.3"
            },
            {
              "id": "18.1-q9",
              "number": 3,
              "marks": 3,
              "question": "A tangent is drawn to the curve $y = x^3 - 3x$ at the point where $x = 2$. The tangent passes through $(2, 2)$ and $(0, -10)$. Calculate the gradient of the curve at $x = 2$. [3 marks]",
              "working": [
                "Gradient m = (2 - (-10)) / (2 - 0) = 12 / 2 = 6"
              ],
              "answer": "6",
              "markBreakdown": "M1 for (2 - (-10))/(2 - 0), M1 for 12/2, A1 for 6"
            }
          ]
        }
      ]
    },
    {
      "id": "18.test",
      "number": "Test 18",
      "title": "Chapter 18 Test: Curved graphs",
      "type": "chapterTest",
      "level": "both",
      "steps": [
        {
          "id": "18.test-1",
          "title": "Chapter 18 Test: Part A (Basic Recall)",
          "type": "test_part_a",
          "level": "both",
          "badgeText": "Test Part A: Core Recall",
          "questions": [
            {
              "id": "18.t-1",
              "number": 1,
              "marks": 2,
              "question": "Find the coordinates of the $y$-intercept of $y = 2x^2 - 5x + 7$.",
              "working": [
                "x = 0 => y = 7 => (0, 7)"
              ],
              "answer": "(0, 7)",
              "markBreakdown": "M1 for x = 0, A1 for (0, 7)"
            },
            {
              "id": "18.t-2",
              "number": 2,
              "marks": 2,
              "question": "What is the gradient of a curve at its local maximum turning point?",
              "working": [
                "At any turning point, the gradient is 0."
              ],
              "answer": "0",
              "markBreakdown": "B2 for 0"
            },
            {
              "id": "18.t-3",
              "number": 3,
              "marks": 2,
              "question": "Identify the type of curve represented by $y = \\frac{4}{x}$.",
              "working": [
                "Reciprocal (hyperbola)"
              ],
              "answer": "Reciprocal (hyperbola)",
              "markBreakdown": "B2 for Reciprocal or Hyperbola"
            }
          ]
        },
        {
          "id": "18.test-2",
          "title": "Chapter 18 Test: Part B (Real-World Problems)",
          "type": "test_part_b",
          "level": "both",
          "badgeText": "Test Part B: Multi-Step Real-World Application",
          "questions": [
            {
              "id": "18.t-4",
              "number": 1,
              "marks": 3,
              "question": "A bridge arch is modelled by $y = 12 - 0.75x^2$ where $y$ is height and $x$ is horizontal distance from center in metres. (a) What is the maximum height? (b) Find the width of the arch at water level ($y = 0$).",
              "working": [
                "(a) At x = 0, max height = 12 m",
                "(b) 12 - 0.75x^2 = 0 => 0.75x^2 = 12 => x^2 = 16 => x = ±4 m. Width = 4 - (-4) = 8 m"
              ],
              "answer": "(a) 12 m; (b) 8 m",
              "markBreakdown": "B1 for 12 m; M1 for 0.75x^2 = 12, A1 for 8 m"
            },
            {
              "id": "18.t-5",
              "number": 2,
              "marks": 3,
              "question": "The speed-time graph of a car accelerating is curved. A tangent drawn at $t = 5$ seconds has a gradient of 3.4. What physical quantity does this gradient represent, and what are its units?",
              "working": [
                "Gradient of speed-time graph is acceleration. Units are m/s^2."
              ],
              "answer": "Acceleration, 3.4 m/s^2",
              "markBreakdown": "B2 for Acceleration, B1 for m/s^2"
            },
            {
              "id": "18.t-6",
              "number": 3,
              "marks": 4,
              "question": "A company's profit $P$ ($000s) from selling $x$ units is $P = -2x^2 + 20x - 18$. Find the number of units $x$ that gives zero profit (break-even points).",
              "working": [
                "-2x^2 + 20x - 18 = 0 => x^2 - 10x + 9 = 0",
                "(x - 1)(x - 9) = 0 => x = 1 or x = 9 units"
              ],
              "answer": "1 unit and 9 units",
              "markBreakdown": "M1 for setting P = 0, M1 for x^2 - 10x + 9 = 0, M1 for factorising, A1 for 1 and 9"
            }
          ]
        },
        {
          "id": "18.test-3",
          "title": "Chapter 18 Test: Part C (Exam-Style Challenge)",
          "type": "test_part_c",
          "level": "both",
          "badgeText": "Test Part C: Exam Challenge",
          "questions": [
            {
              "id": "18.t-7",
              "number": 1,
              "marks": 5,
              "question": "The graph of $y = x^3 - 4x$ is plotted.\n(a) Show that the curve crosses the $x$-axis at $x = -2, 0, 2$. [2 marks]\n(b) By drawing the line $y = 2x$, solve the equation $x^3 - 6x = 0$. [3 marks]",
              "working": [
                "(a) x^3 - 4x = 0 => x(x^2 - 4) = 0 => x(x - 2)(x + 2) = 0 => x = -2, 0, 2",
                "(b) x^3 - 4x = 2x => x^3 - 6x = 0. Roots are where line y = 2x intersects curve. x(x^2 - 6) = 0 => x = 0, ±\\sqrt{6} ≈ ±2.45"
              ],
              "answer": "(a) x = -2, 0, 2; (b) x = 0, x ≈ 2.45, x ≈ -2.45",
              "markBreakdown": "M1 for factorising x(x^2-4), A1 for roots; M1 for line y = 2x, M1 for x^2 = 6, A1 for x = 0, ±2.45"
            },
            {
              "id": "18.t-8",
              "number": 2,
              "marks": 4,
              "question": "The curve $y = \\frac{12}{x}$ and the line $y = 8 - x$ intersect at points $A$ and $B$.\nFind the coordinates of $A$ and $B$. [4 marks]",
              "working": [
                "12 / x = 8 - x => 12 = 8x - x^2 => x^2 - 8x + 12 = 0",
                "(x - 2)(x - 6) = 0 => x = 2 or x = 6",
                "When x = 2: y = 8 - 2 = 6 => (2, 6)",
                "When x = 6: y = 8 - 6 = 2 => (6, 2)"
              ],
              "answer": "(2, 6) and (6, 2)",
              "markBreakdown": "M1 for equating, M1 for x^2 - 8x + 12 = 0, A1 for x = 2, 6, A1 for (2, 6) and (6, 2)"
            },
            {
              "id": "18.t-9",
              "number": 3,
              "marks": 4,
              "question": "The tangent to the curve $y = x^2 + ax + b$ at the point $(3, 4)$ has gradient 5.\nFind the values of $a$ and $b$. [4 marks]",
              "working": [
                "Gradient of y = x^2 + ax is 2x + a. At x = 3: 2(3) + a = 5 => 6 + a = 5 => a = -1",
                "Curve passes through (3, 4): 4 = 3^2 + (-1)(3) + b => 4 = 9 - 3 + b => 4 = 6 + b => b = -2"
              ],
              "answer": "a = -1, b = -2",
              "markBreakdown": "M2 for 2(3) + a = 5 => a = -1, M1 for substituting (3, 4), A1 for b = -2"
            }
          ]
        }
      ]
    }
  ]
};

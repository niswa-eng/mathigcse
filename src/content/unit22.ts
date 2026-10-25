import { Unit } from '../types/content';

export const unit22: Unit = {
  "id": 22,
  "title": "More equations, formulae and functions",
  "learningObjectives": [
    "E22.1: Function notation f(x), domain and range, composite functions fg(x) = f(g(x))",
    "E22.2: Inverse functions f^(-1)(x) found by swapping variables and solving",
    "C22.3, E22.3: Rearranging complex formulae where the subject appears twice",
    "E22.4: Algebraic fractions: simplifying, combining, and solving equations"
  ],
  "subtopics": [
    {
      "id": "22.1",
      "number": "22.1",
      "title": "Functions: evaluation, composite & inverse",
      "type": "lesson",
      "level": "extended",
      "steps": [
        {
          "id": "22.1-1",
          "title": "Concept & Intuition: Functions as Mathematical Machines",
          "type": "concept",
          "level": "extended",
          "badgeText": "Concept & Intuition",
          "summary": "A function $f(x)$ maps an input $x$ to an output:\n- **Composite Function $fg(x)$**: Apply function $g$ FIRST, then feed the result into function $f$: $fg(x) = f(g(x))$. (Right-to-left order!).\n- **Inverse Function $f^{-1}(x)$**: Reverses the effect of $f(x)$ back to $x$. Found by setting $y = f(x)$, swapping $x$ and $y$, and making $y$ the subject.",
          "analogy": "Putting on socks ($g$) and shoes ($f$): $fg(x)$ means socks first, shoes second. The inverse $f^{-1}$ takes off shoes first, then socks.",
          "terms": [
            {
              "term": "Composite Function fg(x)",
              "definition": "Evaluate inner function $g(x)$ first, then substitute into outer function $f$.",
              "example": "If $f(x) = 2x, g(x) = x + 3 \\implies fg(x) = 2(x + 3) = 2x + 6$."
            },
            {
              "term": "Inverse Function f^(-1)(x)",
              "definition": "The reverse operation satisfying $f(f^{-1}(x)) = x$.",
              "example": "If $f(x) = 3x - 1 \\implies f^{-1}(x) = \\frac{x + 1}{3}$."
            }
          ],
          "rules": [
            {
              "title": "Inverse Function 3-Step Recipe",
              "explanation": "1. Write $y = f(x)$.\n2. Rearrange to make $x$ the subject.\n3. Swap $x$ and $y$ to write $f^{-1}(x)$."
            }
          ]
        },
        {
          "id": "22.1-2",
          "title": "Worked Example: Evaluating fg(x) & Finding f^(-1)(x)",
          "type": "worked_example",
          "level": "extended",
          "badgeText": "Worked Example",
          "workedProblem": {
            "statement": "Given $f(x) = 3x - 5$ and $g(x) = x^2 + 1$:\n(a) Work out $f(4)$ and $g(-3)$.\n(b) Find the composite function $fg(x)$.\n(c) Find $f^{-1}(x)$.",
            "steps": [
              {
                "stepNumber": 1,
                "instruction": "$f(4) = 3(4) - 5 = 12 - 5 = 7$.",
                "latex": "f(4) = 7",
                "note": "Direct evaluation."
              },
              {
                "stepNumber": 2,
                "instruction": "$g(-3) = (-3)^2 + 1 = 9 + 1 = 10$.",
                "latex": "g(-3) = 10",
                "note": "Square of negative is positive."
              },
              {
                "stepNumber": 3,
                "instruction": "$fg(x) = f(g(x)) = f(x^2 + 1) = 3(x^2 + 1) - 5 = 3x^2 + 3 - 5 = 3x^2 - 2$.",
                "latex": "fg(x) = 3x^2 - 2",
                "note": "Composite function."
              },
              {
                "stepNumber": 4,
                "instruction": "Set $y = 3x - 5 \\implies y + 5 = 3x \\implies x = \\frac{y + 5}{3}$. Swap variables.",
                "latex": "f^{-1}(x) = \\frac{x + 5}{3}",
                "note": "Inverse function."
              }
            ],
            "finalAnswer": "(a) f(4) = 7, g(-3) = 10; (b) fg(x) = 3x^2 - 2; (c) f^(-1)(x) = (x + 5)/3"
          }
        },
        {
          "id": "22.1-3",
          "title": "Common Mistake & Pro Tip: The fg vs gf Order Trap",
          "type": "common_mistakes",
          "level": "extended",
          "badgeText": "Common Mistake & Pro Tip",
          "commonMistakes": [
            {
              "mistake": "Evaluating $fg(x)$ from left to right as $f(x) \\times g(x)$ or applying $f$ first.",
              "correction": "$fg(x)$ means $f(g(x))$ — the function on the RIGHT ($g$) is applied FIRST to the input.",
              "examinerTip": "Notice that $f^{-1}(x)$ never means $1 / f(x)$! In function notation, $-1$ denotes the inverse function, not a reciprocal.",
              "memoryTrick": "Work from the inside out (right to left)!"
            }
          ]
        },
        {
          "id": "22.1-4",
          "title": "Exercise: Level 1 (Basic)",
          "type": "exercise_1",
          "level": "extended",
          "badgeText": "Exercise: Level 1 (Basic)",
          "questions": [
            {
              "id": "22.1-q1",
              "number": 1,
              "question": "If $f(x) = 2x + 7$, find $f(5)$ and $f(-3)$.",
              "working": [
                "f(5) = 2(5) + 7 = 17",
                "f(-3) = 2(-3) + 7 = 1"
              ],
              "answer": "f(5) = 17, f(-3) = 1"
            },
            {
              "id": "22.1-q2",
              "number": 2,
              "question": "If $f(x) = 4x - 1$, find the inverse function $f^{-1}(x)$.",
              "working": [
                "y = 4x - 1 => y + 1 = 4x => x = (y + 1)/4",
                "f^-1(x) = (x + 1)/4"
              ],
              "answer": "f^-1(x) = (x + 1)/4"
            },
            {
              "id": "22.1-q3",
              "number": 3,
              "question": "If $g(x) = x^2$, work out $gg(2)$.",
              "working": [
                "g(2) = 2^2 = 4",
                "gg(2) = g(4) = 4^2 = 16"
              ],
              "answer": "16"
            }
          ]
        },
        {
          "id": "22.1-5",
          "title": "Exercise: Level 2 (Real-World Scenarios)",
          "type": "exercise_2",
          "level": "extended",
          "badgeText": "Exercise: Level 2 (Real-World)",
          "questions": [
            {
              "id": "22.1-q4",
              "number": 1,
              "question": "Temperature conversion: $C(F) = \\frac{5}{9}(F - 32)$. Find $C^{-1}(x)$ and explain what it converts.",
              "working": [
                "y = 5/9(F - 32) => 9/5 y = F - 32 => F = 9/5 y + 32",
                "C^-1(x) = 9/5 x + 32 (converts Celsius to Fahrenheit)"
              ],
              "answer": "C^-1(x) = 9/5 x + 32 (converts Celsius to Fahrenheit)"
            },
            {
              "id": "22.1-q5",
              "number": 2,
              "question": "A store applies a $10 coupon $g(x) = x - 10$ and then a 20% discount $f(x) = 0.8x$. Find $fg(x)$ for an item priced at $60.",
              "working": [
                "g(60) = 60 - 10 = $50",
                "f(50) = 0.8 * 50 = $40"
              ],
              "answer": "$40"
            },
            {
              "id": "22.1-q6",
              "number": 3,
              "question": "In the store above, what would the customer pay if the discount was applied before the coupon ($gf(60)$)?",
              "working": [
                "f(60) = 0.8 * 60 = $48",
                "g(48) = 48 - 10 = $38"
              ],
              "answer": "$38 (customer saves $2 more!)"
            }
          ]
        },
        {
          "id": "22.1-6",
          "title": "Exercise: Level 3 (Exam-Style)",
          "type": "exercise_3",
          "level": "extended",
          "badgeText": "Exercise: Level 3 (Exam-Style)",
          "questions": [
            {
              "id": "22.1-q7",
              "number": 1,
              "marks": 3,
              "question": "Given $f(x) = \\frac{2x + 1}{x - 3}$ ($x \\ne 3$).\nFind $f^{-1}(x)$. [3 marks]",
              "working": [
                "y = (2x + 1)/(x - 3) => y(x - 3) = 2x + 1",
                "yx - 3y = 2x + 1 => yx - 2x = 3y + 1",
                "x(y - 2) = 3y + 1 => x = (3y + 1)/(y - 2)",
                "f^-1(x) = (3x + 1)/(x - 2)"
              ],
              "answer": "f^-1(x) = (3x + 1)/(x - 2)",
              "markBreakdown": "M1 for y(x - 3) = 2x + 1, M1 for factorising x(y - 2), A1 for f^-1(x) = (3x + 1)/(x - 2)"
            },
            {
              "id": "22.1-q8",
              "number": 2,
              "marks": 4,
              "question": "Functions $f(x) = x^2 - 3$ and $g(x) = 2x + 1$.\nSolve the equation $fg(x) = 33$. [4 marks]",
              "working": [
                "fg(x) = (2x + 1)^2 - 3 = 4x^2 + 4x + 1 - 3 = 4x^2 + 4x - 2",
                "4x^2 + 4x - 2 = 33 => 4x^2 + 4x - 35 = 0",
                "(2x - 5)(2x + 7) = 0 => x = 2.5 or x = -3.5"
              ],
              "answer": "x = 2.5 or x = -3.5",
              "markBreakdown": "M1 for (2x + 1)^2 - 3, M1 for 4x^2 + 4x - 35 = 0, M1 for factorising, A1 for x = 2.5, -3.5"
            },
            {
              "id": "22.1-q9",
              "number": 3,
              "marks": 3,
              "question": "Show that $ff^{-1}(x) = x$ for $f(x) = 5x - 4$. [3 marks]",
              "working": [
                "f^-1(x) = (x + 4)/5",
                "f(f^-1(x)) = 5((x + 4)/5) - 4 = x + 4 - 4 = x"
              ],
              "answer": "Proof verified: 5((x + 4)/5) - 4 = x",
              "markBreakdown": "M1 for f^-1(x) = (x+4)/5, M1 for substituting into f, A1 for reaching x"
            }
          ]
        }
      ]
    },
    {
      "id": "22.2",
      "number": "22.2",
      "title": "Rearranging complex formulae & algebraic fractions",
      "type": "lesson",
      "level": "extended",
      "steps": [
        {
          "id": "22.2-1",
          "title": "Concept & Intuition: Subject Appearing Twice & Algebraic Fractions",
          "type": "concept",
          "level": "extended",
          "badgeText": "Concept & Intuition",
          "summary": "When rearranging a formula where the subject $x$ appears twice:\n1. Clear fractions (multiply by denominators).\n2. Expand all brackets.\n3. Collect all terms containing $x$ on one side, and all other terms on the opposite side.\n4. **Factorise out $x$** as a common factor: $x(\\dots) = \\dots$\n5. Divide by the bracket.",
          "analogy": "Like packing luggage: you gather all your clothes into one compartment (factorise) before zipping it up.",
          "terms": [
            {
              "term": "Subject of Formula",
              "definition": "The variable isolated alone on one side with coefficient $+1$.",
              "example": "$x = \\frac{3y + 1}{y - 2}$"
            },
            {
              "term": "Algebraic Fraction",
              "definition": "A fraction whose numerator and/or denominator contain variables.",
              "example": "$\\frac{x+2}{x-3} + \\frac{1}{x} = 2$"
            }
          ],
          "rules": [
            {
              "title": "Subject Appears Twice Protocol",
              "explanation": "Clear fractions $\\to$ Expand $\\to$ Collect $x$-terms on one side $\\to$ Factorise $x(A - B) \\to$ Divide."
            }
          ]
        },
        {
          "id": "22.2-2",
          "title": "Worked Example: Subject Appearing Twice",
          "type": "worked_example",
          "level": "extended",
          "badgeText": "Worked Example",
          "workedProblem": {
            "statement": "Make $x$ the subject of the formula:\n$$y = \\frac{ax + 5}{x - b}$$",
            "steps": [
              {
                "stepNumber": 1,
                "instruction": "Multiply both sides by $(x - b)$ to eliminate the fraction.",
                "latex": "y(x - b) = ax + 5",
                "note": "Clear denominator."
              },
              {
                "stepNumber": 2,
                "instruction": "Expand the bracket.",
                "latex": "yx - yb = ax + 5",
                "note": "Expand."
              },
              {
                "stepNumber": 3,
                "instruction": "Move all terms with $x$ to the left, and non-$x$ terms to the right.",
                "latex": "yx - ax = yb + 5",
                "note": "Collect $x$-terms."
              },
              {
                "stepNumber": 4,
                "instruction": "Factorise $x$ out on the left side.",
                "latex": "x(y - a) = yb + 5",
                "note": "Crucial factorisation step."
              },
              {
                "stepNumber": 5,
                "instruction": "Divide by $(y - a)$.",
                "latex": "x = \\frac{yb + 5}{y - a}",
                "note": "Isolated subject."
              }
            ],
            "finalAnswer": "x = (yb + 5) / (y - a)"
          }
        },
        {
          "id": "22.2-3",
          "title": "Common Mistake & Pro Tip: Dividing Before Collecting",
          "type": "common_mistakes",
          "level": "extended",
          "badgeText": "Common Mistake & Pro Tip",
          "commonMistakes": [
            {
              "mistake": "Writing $x = \\frac{yx - 5}{a}$ and thinking $x$ is isolated.",
              "correction": "The subject $x$ cannot appear on both sides of the final formula! You MUST collect all $x$'s on one side and factorise.",
              "examinerTip": "When solving $\\frac{2}{x+1} + \\frac{3}{x-2} = 1$, multiply every single term by the common denominator $(x+1)(x-2)$.",
              "memoryTrick": "Group, Factorise, Divide!"
            }
          ]
        },
        {
          "id": "22.2-4",
          "title": "Exercise: Level 1 (Basic)",
          "type": "exercise_1",
          "level": "extended",
          "badgeText": "Exercise: Level 1 (Basic)",
          "questions": [
            {
              "id": "22.2-q1",
              "number": 1,
              "question": "Make $r$ the subject of the area formula $A = \\pi r^2$.",
              "working": [
                "r^2 = A / \\pi => r = \\sqrt{A / \\pi}"
              ],
              "answer": "r = \\sqrt{A / \\pi}"
            },
            {
              "id": "22.2-q2",
              "number": 2,
              "question": "Simplify $\\frac{x^2 - 9}{x + 3}$.",
              "working": [
                "Factorise numerator: (x - 3)(x + 3) / (x + 3) = x - 3"
              ],
              "answer": "x - 3"
            },
            {
              "id": "22.2-q3",
              "number": 3,
              "question": "Combine into a single fraction: $\\frac{2}{x} + \\frac{3}{y}$.",
              "working": [
                "Common denominator xy: (2y + 3x) / (xy)"
              ],
              "answer": "\\frac{2y + 3x}{xy}"
            }
          ]
        },
        {
          "id": "22.2-5",
          "title": "Exercise: Level 2 (Real-World Scenarios)",
          "type": "exercise_2",
          "level": "extended",
          "badgeText": "Exercise: Level 2 (Real-World)",
          "questions": [
            {
              "id": "22.2-q4",
              "number": 1,
              "question": "In optics, lens formula is $\\frac{1}{f} = \\frac{1}{u} + \\frac{1}{v}$. Make focal length $f$ the subject.",
              "working": [
                "1/f = (v + u)/(uv) => f = (uv)/(u + v)"
              ],
              "answer": "f = \\frac{uv}{u + v}"
            },
            {
              "id": "22.2-q5",
              "number": 2,
              "question": "Kinetic energy formula is $E = \\frac{1}{2}mv^2$. Make velocity $v$ the subject.",
              "working": [
                "2E = mv^2 => v^2 = 2E/m => v = \\sqrt{2E / m}"
              ],
              "answer": "v = \\sqrt{\\frac{2E}{m}}"
            },
            {
              "id": "22.2-q6",
              "number": 3,
              "question": "The period of a pendulum is $T = 2\\pi\\sqrt{\\frac{L}{g}}$. Make length $L$ the subject.",
              "working": [
                "T / (2\\pi) = \\sqrt{L/g} => T^2 / (4\\pi^2) = L/g => L = (g T^2) / (4\\pi^2)"
              ],
              "answer": "L = \\frac{g T^2}{4\\pi^2}"
            }
          ]
        },
        {
          "id": "22.2-6",
          "title": "Exercise: Level 3 (Exam-Style)",
          "type": "exercise_3",
          "level": "extended",
          "badgeText": "Exercise: Level 3 (Exam-Style)",
          "questions": [
            {
              "id": "22.2-q7",
              "number": 1,
              "marks": 4,
              "question": "Make $p$ the subject of the formula:\n$$m = \\frac{3p + 2}{5 - p}$$ [4 marks]",
              "working": [
                "m(5 - p) = 3p + 2 => 5m - mp = 3p + 2",
                "5m - 2 = 3p + mp = p(3 + m)",
                "p = (5m - 2) / (3 + m)"
              ],
              "answer": "p = \\frac{5m - 2}{3 + m}",
              "markBreakdown": "M1 for m(5 - p) = 3p + 2, M1 for 5m - 2 = p(3 + m), M1 for factorising p, A1 for p = (5m - 2)/(m + 3)"
            },
            {
              "id": "22.2-q8",
              "number": 2,
              "marks": 4,
              "question": "Simplify fully:\n$$\\frac{2x^2 + 5x - 3}{4x^2 - 1}$$ [4 marks]",
              "working": [
                "Numerator: (2x - 1)(x + 3)",
                "Denominator: (2x - 1)(2x + 1) (difference of squares)",
                "Cancel (2x - 1): (x + 3) / (2x + 1)"
              ],
              "answer": "\\frac{x + 3}{2x + 1}",
              "markBreakdown": "M1 for (2x - 1)(x + 3), M1 for (2x - 1)(2x + 1), M1 for cancelling factor, A1 for (x + 3)/(2x + 1)"
            },
            {
              "id": "22.2-q9",
              "number": 3,
              "marks": 4,
              "question": "Solve the equation:\n$$\\frac{4}{x-1} - \\frac{3}{x+2} = 1$$ [4 marks]",
              "working": [
                "4(x + 2) - 3(x - 1) = (x - 1)(x + 2)",
                "4x + 8 - 3x + 3 = x^2 + x - 2 => x + 11 = x^2 + x - 2",
                "x^2 - 13 = 0 => x^2 = 13 => x = ±\\sqrt{13} ≈ ±3.61"
              ],
              "answer": "x = ±\\sqrt{13} (or x ≈ ±3.61)",
              "markBreakdown": "M1 for multiplying by (x-1)(x+2), M1 for 4x + 8 - 3x + 3, M1 for x^2 = 13, A1 for x = ±\\sqrt{13}"
            }
          ]
        }
      ]
    },
    {
      "id": "22.test",
      "number": "Test 22",
      "title": "Chapter 22 Test: Formulae & functions",
      "type": "chapterTest",
      "level": "both",
      "steps": [
        {
          "id": "22.test-1",
          "title": "Chapter 22 Test: Part A (Basic Recall)",
          "type": "test_part_a",
          "level": "both",
          "badgeText": "Test Part A: Core Recall",
          "questions": [
            {
              "id": "22.t-1",
              "number": 1,
              "marks": 2,
              "question": "If $f(x) = 3x - 4$, find $f(6)$.",
              "working": [
                "f(6) = 3(6) - 4 = 14"
              ],
              "answer": "14",
              "markBreakdown": "M1 for 3(6) - 4, A1 for 14"
            },
            {
              "id": "22.t-2",
              "number": 2,
              "marks": 2,
              "question": "Make $x$ the subject of $y = 5x - 2$.",
              "working": [
                "y + 2 = 5x => x = (y + 2)/5"
              ],
              "answer": "x = \\frac{y + 2}{5}",
              "markBreakdown": "M1 for y + 2 = 5x, A1 for x = (y + 2)/5"
            },
            {
              "id": "22.t-3",
              "number": 3,
              "marks": 2,
              "question": "Simplify $\\frac{6x^3}{2x}$.",
              "working": [
                "6/2 = 3, x^3 / x = x^2 => 3x^2"
              ],
              "answer": "3x^2",
              "markBreakdown": "B2 for 3x^2"
            }
          ]
        },
        {
          "id": "22.test-2",
          "title": "Chapter 22 Test: Part B (Real-World Problems)",
          "type": "test_part_b",
          "level": "both",
          "badgeText": "Test Part B: Multi-Step Real-World Application",
          "questions": [
            {
              "id": "22.t-4",
              "number": 1,
              "marks": 3,
              "question": "A taxi fare formula is $F(d) = 3.50d + 4.00$, where $d$ is distance in km. (a) Work out $F^{-1}(x)$. (b) What does $F^{-1}(25)$ represent?",
              "working": [
                "(a) y = 3.5d + 4 => d = (y - 4)/3.5. F^-1(x) = (x - 4)/3.5",
                "(b) Distance travelled for a fare of $25: (25 - 4)/3.5 = 6 km"
              ],
              "answer": "(a) F^-1(x) = (x - 4)/3.5; (b) The distance travelled for $25 (6 km)",
              "markBreakdown": "M1 for F^-1 formula, A1 for correct inverse, B1 for meaning and 6 km"
            },
            {
              "id": "22.t-5",
              "number": 2,
              "marks": 3,
              "question": "Resistance $R$ in parallel circuit satisfies $\\frac{1}{R} = \\frac{1}{R_1} + \\frac{1}{R_2}$. If $R_1 = 6$ and $R_2 = 12$, find $R$.",
              "working": [
                "1/R = 1/6 + 1/12 = 2/12 + 1/12 = 3/12 = 1/4 => R = 4 ohms"
              ],
              "answer": "4 ohms",
              "markBreakdown": "M1 for 1/6 + 1/12 = 3/12, M1 for 1/4, A1 for 4 ohms"
            },
            {
              "id": "22.t-6",
              "number": 3,
              "marks": 4,
              "question": "A factory cost function is $C(x) = 500 + 12x$ and revenue is $R(x) = 20x$. Form profit function $P(x) = R(x) - C(x)$ and find break-even point $P(x) = 0$.",
              "working": [
                "P(x) = 20x - (500 + 12x) = 8x - 500",
                "8x - 500 = 0 => 8x = 500 => x = 62.5 => 63 units"
              ],
              "answer": "P(x) = 8x - 500; Break-even at 62.5 units (or 63 units)",
              "markBreakdown": "M1 for P(x) = 8x - 500, M2 for 8x = 500, A1 for 62.5 units"
            }
          ]
        },
        {
          "id": "22.test-3",
          "title": "Chapter 22 Test: Part C (Exam-Style Challenge)",
          "type": "test_part_c",
          "level": "both",
          "badgeText": "Test Part C: Exam Challenge",
          "questions": [
            {
              "id": "22.t-7",
              "number": 1,
              "marks": 5,
              "question": "Make $t$ the subject of the formula:\n$$w = \\frac{2t - 1}{t + 3}$$ [5 marks]",
              "working": [
                "w(t + 3) = 2t - 1 => wt + 3w = 2t - 1",
                "3w + 1 = 2t - wt = t(2 - w)",
                "t = (3w + 1) / (2 - w)"
              ],
              "answer": "t = \\frac{3w + 1}{2 - w}",
              "markBreakdown": "M1 for clearing fraction, M1 for expanding, M1 for collecting t-terms, M1 for factorising t, A1 for final formula"
            },
            {
              "id": "22.t-8",
              "number": 2,
              "marks": 4,
              "question": "Solve the equation:\n$$\\frac{5}{x+3} + \\frac{2}{x-1} = 2$$ [4 marks]",
              "working": [
                "5(x - 1) + 2(x + 3) = 2(x + 3)(x - 1)",
                "5x - 5 + 2x + 6 = 2(x^2 + 2x - 3) => 7x + 1 = 2x^2 + 4x - 6",
                "2x^2 - 3x - 7 = 0",
                "x = (3 ± \\sqrt{9 - 4(2)(-7)}) / 4 = (3 ± \\sqrt{65}) / 4",
                "\\sqrt{65} ≈ 8.062 => x = 11.062/4 ≈ 2.77 or x = -5.062/4 ≈ -1.27"
              ],
              "answer": "x = 2.77 or x = -1.27 (to 2 d.p.)",
              "markBreakdown": "M1 for clearing fractions, M1 for 2x^2 - 3x - 7 = 0, M1 for formula setup, A1 for 2.77 and -1.27"
            },
            {
              "id": "22.t-9",
              "number": 3,
              "marks": 4,
              "question": "Given $f(x) = 2x + 3$ and $g(x) = x^2$.\n(a) Find $gf(x)$. [2 marks]\n(b) Solve $gf(x) = 25$. [2 marks]",
              "working": [
                "(a) gf(x) = g(2x + 3) = (2x + 3)^2 = 4x^2 + 12x + 9",
                "(b) (2x + 3)^2 = 25 => 2x + 3 = ±5 => 2x = 2 or 2x = -8 => x = 1 or x = -4"
              ],
              "answer": "(a) (2x + 3)^2 (or 4x^2 + 12x + 9); (b) x = 1 or x = -4",
              "markBreakdown": "M1 for (2x + 3)^2, A1 for expansion; M1 for 2x + 3 = ±5, A1 for x = 1, -4"
            }
          ]
        }
      ]
    }
  ]
};

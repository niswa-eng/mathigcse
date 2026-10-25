import { Unit } from '../types/content';

export const unit9: Unit = {
  "id": 9,
  "title": "Sequences, surds and sets",
  "learningObjectives": [
    "C9.1, E9.1: Linear sequences and nth term dn + c",
    "E9.2: Quadratic sequences, second differences and nth term an^2 + bn + c",
    "E9.3: Surds, simplifying square roots, rationalising denominators a/sqrt(b) and a/(b + sqrt(c))",
    "C9.4, E9.4: Sets and Venn diagrams: union, intersection, complement, subset, universal set, element of"
  ],
  "subtopics": [
    {
      "id": "9.1",
      "number": "9.1",
      "title": "Linear sequences and the nth term",
      "type": "lesson",
      "level": "core",
      "steps": [
        {
          "id": "9.1-1",
          "title": "Concept & Intuition: Constant Step and the Zero-Term",
          "type": "concept",
          "level": "core",
          "badgeText": "Concept & Intuition",
          "summary": "In a linear sequence, the difference between consecutive terms is constant ($d$). The position-to-term rule allows us to calculate any term $T_n$ directly using $T_n = dn + c$, where $c$ is the zero-th term ($T_1 - d$).",
          "analogy": "Like climbing a staircase: each step is of equal height $d$, and $c$ is the starting ground height.",
          "terms": [
            {
              "term": "Common Difference (d)",
              "definition": "The constant amount added (or subtracted) between consecutive terms.",
              "example": "In $7, 11, 15, \\dots$, $d = +4$."
            },
            {
              "term": "nth term (Tn)",
              "definition": "An algebraic formula representing the value of the term in position $n$.",
              "example": "$T_n = 4n + 3$"
            }
          ],
          "rules": [
            {
              "title": "Linear nth Term Rule",
              "latex": "T_n = dn + c \\quad (c = T_1 - d)",
              "explanation": "Multiply the common difference by $n$, then adjust by adding or subtracting the difference to match $T_1$."
            }
          ]
        },
        {
          "id": "9.1-2",
          "title": "Worked Example: Finding the nth Term and Term Positions",
          "type": "worked_example",
          "level": "core",
          "badgeText": "Worked Example",
          "workedProblem": {
            "statement": "For the sequence $7, 11, 15, 19, 23, \\dots$:\n(a) Find an expression for the $n^{\\text{th}}$ term.\n(b) Work out the $50^{\\text{th}}$ term.\n(c) Determine whether 203 is a term in this sequence.",
            "steps": [
              {
                "stepNumber": 1,
                "instruction": "Find the common difference $d$: $11 - 7 = 4$.",
                "latex": "d = 4",
                "note": "The formula begins with $4n$."
              },
              {
                "stepNumber": 2,
                "instruction": "Calculate $c$: compare $4n$ ($4, 8, 12$) with our terms ($7, 11, 15$). We add 3.",
                "latex": "T_n = 4n + 3",
                "note": "Zero-th term is $7 - 4 = +3$."
              },
              {
                "stepNumber": 3,
                "instruction": "Substitute $n = 50$ into $T_n = 4n + 3$.",
                "latex": "T_{50} = 4(50) + 3 = 203",
                "note": "Direct calculation."
              },
              {
                "stepNumber": 4,
                "instruction": "Solve $4n + 3 = 203$ to check if $n$ is an integer.",
                "latex": "4n = 200 \\implies n = 50",
                "note": "Since $n$ is a positive integer, 203 is the 50th term."
              }
            ],
            "finalAnswer": "(a) 4n + 3; (b) 203; (c) Yes, 203 is the 50th term"
          }
        },
        {
          "id": "9.1-3",
          "title": "Common Mistake & Pro Tip: Decreasing Sequences",
          "type": "common_mistakes",
          "level": "core",
          "badgeText": "Common Mistake & Pro Tip",
          "commonMistakes": [
            {
              "mistake": "Writing $n + 4$ instead of $4n$, or forgetting the minus sign in decreasing sequences like $20, 17, 14$ where $d = -3$.",
              "correction": "The difference always multiplies $n$. If decreasing by 3, the rule is $-3n + c$ with $c = 20 - (-3) = 23$, giving $23 - 3n$.",
              "examinerTip": "Always test your formula with $n = 1$ and $n = 2$ before moving on to the next question.",
              "memoryTrick": "Difference multiplies $n$, adjustment fixes $T_1$."
            }
          ]
        },
        {
          "id": "9.1-4",
          "title": "Exercise: Level 1 (Basic)",
          "type": "exercise_1",
          "level": "core",
          "badgeText": "Exercise: Level 1 (Basic)",
          "questions": [
            {
              "id": "9.1-q1",
              "number": 1,
              "question": "Find the next two terms and the $n^{\\text{th}}$ term of the sequence $5, 9, 13, 17, \\dots$",
              "working": [
                "Common difference = +4",
                "Next terms: 17 + 4 = 21, 21 + 4 = 25",
                "c = 5 - 4 = 1 => Tn = 4n + 1"
              ],
              "answer": "21, 25; nth term = 4n + 1"
            },
            {
              "id": "9.1-q2",
              "number": 2,
              "question": "The $n^{\\text{th}}$ term of a sequence is given by $T_n = 6n - 2$. Work out the $10^{\\text{th}}$ term.",
              "working": [
                "T_10 = 6(10) - 2 = 60 - 2 = 58"
              ],
              "answer": "58"
            },
            {
              "id": "9.1-q3",
              "number": 3,
              "question": "Find the $n^{\\text{th}}$ term of the decreasing sequence $30, 24, 18, 12, \\dots$",
              "working": [
                "Difference = -6",
                "c = 30 - (-6) = 36",
                "Tn = 36 - 6n"
              ],
              "answer": "36 - 6n (or -6n + 36)"
            }
          ]
        },
        {
          "id": "9.1-5",
          "title": "Exercise: Level 2 (Real-World Scenarios)",
          "type": "exercise_2",
          "level": "core",
          "badgeText": "Exercise: Level 2 (Real-World)",
          "questions": [
            {
              "id": "9.1-q4",
              "number": 1,
              "question": "An auditorium has 24 seats in row 1, 28 seats in row 2, 32 seats in row 3, and so on. (a) Find the formula for the number of seats in row $n$. (b) How many seats are in row 20?",
              "working": [
                "(a) d = 4, c = 24 - 4 = 20 => Tn = 4n + 20",
                "(b) T_20 = 4(20) + 20 = 80 + 20 = 100"
              ],
              "answer": "(a) 4n + 20; (b) 100 seats"
            },
            {
              "id": "9.1-q5",
              "number": 2,
              "question": "Matchsticks form a row of squares: 1 square uses 4 sticks, 2 squares use 7 sticks, 3 squares use 10 sticks. How many matchsticks are needed for a row of 35 squares?",
              "working": [
                "Sequence: 4, 7, 10 => d = 3, c = 4 - 3 = 1 => Tn = 3n + 1",
                "For n = 35: 3(35) + 1 = 105 + 1 = 106"
              ],
              "answer": "106 sticks"
            },
            {
              "id": "9.1-q6",
              "number": 3,
              "question": "A water reservoir loses 25 litres per minute through an irrigation valve. At minute 1 it holds 550 litres, at minute 2 it holds 525 litres. At what minute will it be completely empty?",
              "working": [
                "Tn = 575 - 25n",
                "Set 575 - 25n = 0 => 25n = 575 => n = 23"
              ],
              "answer": "Minute 23"
            }
          ]
        },
        {
          "id": "9.1-6",
          "title": "Exercise: Level 3 (Exam-Style)",
          "type": "exercise_3",
          "level": "core",
          "badgeText": "Exercise: Level 3 (Exam-Style)",
          "questions": [
            {
              "id": "9.1-q7",
              "number": 1,
              "marks": 2,
              "question": "Here are the first four terms of an arithmetic sequence: $19, 15, 11, 7$.\nFind the $n^{\\text{th}}$ term. [2 marks]",
              "working": [
                "d = -4",
                "c = 19 - (-4) = 23",
                "Tn = 23 - 4n"
              ],
              "answer": "23 - 4n (or -4n + 23)",
              "markBreakdown": "M1 for -4n, A1 for 23 - 4n"
            },
            {
              "id": "9.1-q8",
              "number": 2,
              "marks": 3,
              "question": "The $n^{\\text{th}}$ term of a sequence is $3n + 8$.\n(a) Show that 95 is a term in this sequence. [2 marks]\n(b) Find the position of 95. [1 mark]",
              "working": [
                "(a) 3n + 8 = 95 => 3n = 87 => n = 29",
                "(b) Since n = 29 is an integer, it is the 29th term"
              ],
              "answer": "(a) 3n + 8 = 95 => n = 29; (b) 29th term",
              "markBreakdown": "M1 for 3n = 87, A1 for n = 29; B1 for 29th term"
            },
            {
              "id": "9.1-q9",
              "number": 3,
              "marks": 3,
              "question": "The $k^{\\text{th}}$ term of the sequence $7, 12, 17, 22, \\dots$ is 182. Work out the value of $k$. [3 marks]",
              "working": [
                "d = 5, c = 7 - 5 = 2 => Tn = 5n + 2",
                "5k + 2 = 182 => 5k = 180 => k = 36"
              ],
              "answer": "k = 36",
              "markBreakdown": "M1 for 5n + 2, M1 for 5k = 180, A1 for k = 36"
            }
          ]
        }
      ]
    },
    {
      "id": "9.2",
      "number": "9.2",
      "title": "Quadratic & geometric sequences",
      "type": "lesson",
      "level": "extended",
      "steps": [
        {
          "id": "9.2-1",
          "title": "Concept & Intuition: Second Differences and Quadratic Sequences",
          "type": "concept",
          "level": "extended",
          "badgeText": "Concept & Intuition",
          "summary": "In a quadratic sequence $T_n = an^2 + bn + c$, the first differences are not constant, but the second differences are constant and equal to $2a$. Once $a$ is found, subtracting $an^2$ leaves a linear sequence $bn + c$.",
          "analogy": "Acceleration: position is quadratic in time, velocity is linear (1st difference), and acceleration is constant (2nd difference).",
          "terms": [
            {
              "term": "Second Difference",
              "definition": "The difference between consecutive first differences. In $an^2 + bn + c$, constant 2nd difference = $2a$.",
              "example": "If 2nd diff = 6, then $2a = 6 \\implies a = 3$."
            },
            {
              "term": "Geometric Sequence",
              "definition": "A sequence where each term is multiplied by a common ratio $r$: $T_n = a \\cdot r^{n-1}$.",
              "example": "$3, 6, 12, 24, \\dots$ ($a = 3, r = 2$)."
            }
          ],
          "rules": [
            {
              "title": "Quadratic nth Term Method",
              "latex": "2a = \\text{2nd difference} \\implies a = \\frac{\\text{2nd diff}}{2}",
              "explanation": "Subtract $an^2$ from the sequence; then find the linear rule $bn + c$ for the residuals."
            }
          ]
        },
        {
          "id": "9.2-2",
          "title": "Worked Example: Step-by-Step an^2 + bn + c",
          "type": "worked_example",
          "level": "extended",
          "badgeText": "Worked Example",
          "workedProblem": {
            "statement": "Find the $n^{\\text{th}}$ term of the sequence $4, 11, 22, 37, 56, \\dots$",
            "steps": [
              {
                "stepNumber": 1,
                "instruction": "Calculate 1st differences: $11-4=7, 22-11=11, 37-22=15, 56-37=19$.",
                "latex": "7, 11, 15, 19",
                "note": "Not constant."
              },
              {
                "stepNumber": 2,
                "instruction": "Calculate 2nd differences: $11-7=4, 15-11=4, 19-15=4$.",
                "latex": "2a = 4 \\implies a = 2",
                "note": "Quadratic term is $2n^2$."
              },
              {
                "stepNumber": 3,
                "instruction": "Values of $2n^2$ for $n=1,2,3,4$: $2, 8, 18, 32$.",
                "latex": "2n^2 \\in \\{2, 8, 18, 32\\}",
                "note": "Base quadratic values."
              },
              {
                "stepNumber": 4,
                "instruction": "Subtract $2n^2$ from original terms: $(4-2)=2, (11-8)=3, (22-18)=4, (37-32)=5$.",
                "latex": "\\text{Residuals: } 2, 3, 4, 5 \\dots",
                "note": "Linear sequence with $d=1, c=1$."
              },
              {
                "stepNumber": 5,
                "instruction": "Combine terms.",
                "latex": "T_n = 2n^2 + n + 1",
                "note": "Complete formula."
              }
            ],
            "finalAnswer": "T_n = 2n^2 + n + 1"
          }
        },
        {
          "id": "9.2-3",
          "title": "Common Mistake & Pro Tip: Dividing 2nd Difference",
          "type": "common_mistakes",
          "level": "extended",
          "badgeText": "Common Mistake & Pro Tip",
          "commonMistakes": [
            {
              "mistake": "Setting $a$ equal to the second difference instead of dividing it by 2.",
              "correction": "The formula is $2a = \\text{second difference}$, so $a = \\frac{\\text{second difference}}{2}$.",
              "examinerTip": "Always verify your quadratic formula for $n = 3$. If it matches the 3rd term, it is almost certainly correct.",
              "memoryTrick": "Half the second difference is $a$."
            }
          ]
        },
        {
          "id": "9.2-4",
          "title": "Exercise: Level 1 (Basic)",
          "type": "exercise_1",
          "level": "extended",
          "badgeText": "Exercise: Level 1 (Basic)",
          "questions": [
            {
              "id": "9.2-q1",
              "number": 1,
              "question": "The $n^{\\text{th}}$ term of a sequence is $n^2 + 3$. Work out the first three terms.",
              "working": [
                "n=1: 1^2 + 3 = 4",
                "n=2: 2^2 + 3 = 7",
                "n=3: 3^2 + 3 = 12"
              ],
              "answer": "4, 7, 12"
            },
            {
              "id": "9.2-q2",
              "number": 2,
              "question": "Find the constant second difference for the sequence $1, 6, 15, 28, 45, \\dots$",
              "working": [
                "1st diffs: 5, 9, 13, 17",
                "2nd diffs: 4, 4, 4"
              ],
              "answer": "4"
            },
            {
              "id": "9.2-q3",
              "number": 3,
              "question": "State whether the sequence $2, 6, 18, 54, \\dots$ is linear, quadratic, or geometric, and write its common ratio.",
              "working": [
                "6/2 = 3, 18/6 = 3, 54/18 = 3",
                "Constant multiplier => Geometric, common ratio r = 3"
              ],
              "answer": "Geometric, common ratio r = 3"
            }
          ]
        },
        {
          "id": "9.2-5",
          "title": "Exercise: Level 2 (Real-World Scenarios)",
          "type": "exercise_2",
          "level": "extended",
          "badgeText": "Exercise: Level 2 (Real-World)",
          "questions": [
            {
              "id": "9.2-q4",
              "number": 1,
              "question": "A viral video has 5 views on day 1, 15 views on day 2, 45 views on day 3, tripling each day. How many views does it receive on day 6?",
              "working": [
                "Geometric sequence: a = 5, r = 3",
                "T_6 = 5 * 3^5 = 5 * 243 = 1215"
              ],
              "answer": "1215 views"
            },
            {
              "id": "9.2-q5",
              "number": 2,
              "question": "In a tournament of $n$ players, each player plays every other player once. The number of matches is $M = \\frac{n(n-1)}{2}$. How many matches take place if 12 players enter?",
              "working": [
                "M = (12 * 11) / 2 = 6 * 11 = 66"
              ],
              "answer": "66 matches"
            },
            {
              "id": "9.2-q6",
              "number": 3,
              "question": "A dropped ball falls $d = 4.9t^2$ metres in $t$ seconds. Calculate the distance fallen during the 4th second alone.",
              "working": [
                "d(4) = 4.9 * 16 = 78.4 m",
                "d(3) = 4.9 * 9 = 44.1 m",
                "During 4th second = 78.4 - 44.1 = 34.3 m"
              ],
              "answer": "34.3 m"
            }
          ]
        },
        {
          "id": "9.2-6",
          "title": "Exercise: Level 3 (Exam-Style)",
          "type": "exercise_3",
          "level": "extended",
          "badgeText": "Exercise: Level 3 (Exam-Style)",
          "questions": [
            {
              "id": "9.2-q7",
              "number": 1,
              "marks": 3,
              "question": "Find the $n^{\\text{th}}$ term of the sequence $3, 9, 19, 33, 51, \\dots$ [3 marks]",
              "working": [
                "1st diffs: 6, 10, 14, 18",
                "2nd diffs: 4 => 2a = 4 => a = 2",
                "Subtract 2n^2 (2, 8, 18, 32, 50): 1, 1, 1, 1, 1 => Tn = 2n^2 + 1"
              ],
              "answer": "2n^2 + 1",
              "markBreakdown": "M1 for 2a = 4, M1 for subtracting 2n^2, A1 for 2n^2 + 1"
            },
            {
              "id": "9.2-q8",
              "number": 2,
              "marks": 3,
              "question": "The $n^{\\text{th}}$ term of a sequence is $3n^2 - 5n$. Work out the difference between the $6^{\\text{th}}$ term and the $5^{\\text{th}}$ term. [3 marks]",
              "working": [
                "T_6 = 3(36) - 5(6) = 108 - 30 = 78",
                "T_5 = 3(25) - 5(5) = 75 - 25 = 50",
                "Difference = 78 - 50 = 28"
              ],
              "answer": "28",
              "markBreakdown": "M1 for T_6 = 78, M1 for T_5 = 50, A1 for 28"
            },
            {
              "id": "9.2-q9",
              "number": 3,
              "marks": 4,
              "question": "Find the $n^{\\text{th}}$ term of the sequence $2, 7, 16, 29, 46, \\dots$ [4 marks]",
              "working": [
                "1st diffs: 5, 9, 13, 17",
                "2nd diffs: 4 => a = 2",
                "Subtract 2n^2 (2, 8, 18, 32, 50): 0, -1, -2, -3, -4",
                "Residual linear rule: -n + 1",
                "Combined: Tn = 2n^2 - n + 1"
              ],
              "answer": "2n^2 - n + 1",
              "markBreakdown": "M1 for a = 2, M1 for residuals 0, -1, -2, M1 for -n + 1, A1 for 2n^2 - n + 1"
            }
          ]
        }
      ]
    },
    {
      "id": "9.3",
      "number": "9.3",
      "title": "Surds and rationalising denominators",
      "type": "lesson",
      "level": "extended",
      "steps": [
        {
          "id": "9.3-1",
          "title": "Concept & Intuition: Exact Arithmetic with Surds",
          "type": "concept",
          "level": "extended",
          "badgeText": "Concept & Intuition",
          "summary": "A surd is an irrational root, such as $\\sqrt{2}$ or $\\sqrt{7}$, which cannot be expressed as an exact fraction. We simplify surds by extracting square factors using $\\sqrt{ab} = \\sqrt{a}\\sqrt{b}$. Rationalising a denominator eliminates square roots from the bottom of a fraction.",
          "analogy": "Simplifying surds is like factoring currency: you extract all whole dollar bills and keep the exact change inside the root.",
          "terms": [
            {
              "term": "Surd",
              "definition": "An irrational root of an integer that cannot be expressed as a rational number.",
              "example": "$\\sqrt{48} = \\sqrt{16 \\times 3} = 4\\sqrt{3}$"
            },
            {
              "term": "Conjugate Pair",
              "definition": "Expressions of the form $(a + \\sqrt{b})$ and $(a - \\sqrt{b})$ whose product is rational: $a^2 - b$.",
              "example": "$(3 + \\sqrt{5})(3 - \\sqrt{5}) = 9 - 5 = 4$"
            }
          ],
          "rules": [
            {
              "title": "Surd Multiplication & Division",
              "latex": "\\sqrt{ab} = \\sqrt{a}\\sqrt{b}, \\quad \\sqrt{\\frac{a}{b}} = \\frac{\\sqrt{a}}{\\sqrt{b}}",
              "explanation": "Roots multiply and divide factor by factor."
            },
            {
              "title": "Rationalising Monomial Denominator",
              "latex": "\\frac{a}{\\sqrt{b}} \\times \\frac{\\sqrt{b}}{\\sqrt{b}} = \\frac{a\\sqrt{b}}{b}",
              "explanation": "Multiply top and bottom by $\\sqrt{b}$."
            }
          ]
        },
        {
          "id": "9.3-2",
          "title": "Worked Example: Simplifying Surds & Conjugates",
          "type": "worked_example",
          "level": "extended",
          "badgeText": "Worked Example",
          "workedProblem": {
            "statement": "(a) Simplify $\\sqrt{72} + \\sqrt{50}$.\n(b) Rationalise the denominator of $\\frac{6}{\\sqrt{3}}$.\n(c) Rationalise the denominator of $\\frac{4}{3 - \\sqrt{5}}$.",
            "steps": [
              {
                "stepNumber": 1,
                "instruction": "Simplify $\\sqrt{72} = \\sqrt{36 \\times 2} = 6\\sqrt{2}$.",
                "latex": "\\sqrt{72} = 6\\sqrt{2}",
                "note": "Extract largest square 36."
              },
              {
                "stepNumber": 2,
                "instruction": "Simplify $\\sqrt{50} = \\sqrt{25 \\times 2} = 5\\sqrt{2}$.",
                "latex": "\\sqrt{50} = 5\\sqrt{2}",
                "note": "Extract largest square 25."
              },
              {
                "stepNumber": 3,
                "instruction": "Combine like surds: $6\\sqrt{2} + 5\\sqrt{2} = 11\\sqrt{2}$.",
                "latex": "11\\sqrt{2}",
                "note": "Add coefficients."
              },
              {
                "stepNumber": 4,
                "instruction": "Multiply top and bottom of $\\frac{6}{\\sqrt{3}}$ by $\\sqrt{3}$: $\\frac{6\\sqrt{3}}{3} = 2\\sqrt{3}$.",
                "latex": "\\frac{6\\sqrt{3}}{3} = 2\\sqrt{3}",
                "note": "Cancel 6/3 = 2."
              },
              {
                "stepNumber": 5,
                "instruction": "Multiply $\\frac{4}{3 - \\sqrt{5}}$ top and bottom by conjugate $(3 + \\sqrt{5})$.",
                "latex": "\\frac{4(3 + \\sqrt{5})}{9 - 5} = \\frac{12 + 4\\sqrt{5}}{4} = 3 + \\sqrt{5}",
                "note": "Denominator becomes $3^2 - 5 = 4$."
              }
            ],
            "finalAnswer": "(a) 11\\sqrt{2}; (b) 2\\sqrt{3}; (c) 3 + \\sqrt{5}"
          }
        },
        {
          "id": "9.3-3",
          "title": "Common Mistake & Pro Tip: Addition Under Roots",
          "type": "common_mistakes",
          "level": "extended",
          "badgeText": "Common Mistake & Pro Tip",
          "commonMistakes": [
            {
              "mistake": "Splitting addition under a square root: writing $\\sqrt{a + b} = \\sqrt{a} + \\sqrt{b}$ (e.g. $\\sqrt{9 + 16} = 3 + 4 = 7$).",
              "correction": "Roots NEVER split over addition! $\\sqrt{9 + 16} = \\sqrt{25} = 5$, not 7.",
              "examinerTip": "When rationalising $a / (b + \\sqrt{c})$, always use brackets when multiplying the numerator and denominator by $(b - \\sqrt{c})$.",
              "memoryTrick": "Roots distribute over $\\times$ and $\\div$, NEVER over $+$ or $-$."
            }
          ]
        },
        {
          "id": "9.3-4",
          "title": "Exercise: Level 1 (Basic)",
          "type": "exercise_1",
          "level": "extended",
          "badgeText": "Exercise: Level 1 (Basic)",
          "questions": [
            {
              "id": "9.3-q1",
              "number": 1,
              "question": "Simplify $\\sqrt{48}$ in the form $k\\sqrt{3}$.",
              "working": [
                "\\sqrt{48} = \\sqrt{16 * 3} = 4\\sqrt{3}"
              ],
              "answer": "4\\sqrt{3}"
            },
            {
              "id": "9.3-q2",
              "number": 2,
              "question": "Work out $\\sqrt{5} \\times \\sqrt{20}$.",
              "working": [
                "\\sqrt{5 * 20} = \\sqrt{100} = 10"
              ],
              "answer": "10"
            },
            {
              "id": "9.3-q3",
              "number": 3,
              "question": "Rationalise the denominator of $\\frac{10}{\\sqrt{5}}$.",
              "working": [
                "(10 / \\sqrt{5}) * (\\sqrt{5} / \\sqrt{5}) = 10\\sqrt{5} / 5 = 2\\sqrt{5}"
              ],
              "answer": "2\\sqrt{5}"
            }
          ]
        },
        {
          "id": "9.3-5",
          "title": "Exercise: Level 2 (Real-World Scenarios)",
          "type": "exercise_2",
          "level": "extended",
          "badgeText": "Exercise: Level 2 (Real-World)",
          "questions": [
            {
              "id": "9.3-q4",
              "number": 1,
              "question": "A square tile has an area of $108\\text{ cm}^2$. Write the exact perimeter of the tile in the form $a\\sqrt{3}$.",
              "working": [
                "Side length s = \\sqrt{108} = \\sqrt{36 * 3} = 6\\sqrt{3} cm",
                "Perimeter = 4s = 4 * 6\\sqrt{3} = 24\\sqrt{3} cm"
              ],
              "answer": "24\\sqrt{3} cm"
            },
            {
              "id": "9.3-q5",
              "number": 2,
              "question": "A right triangle has legs of length $2\\sqrt{3}$ cm and 4 cm. Calculate the exact length of the hypotenuse in simplest surd form.",
              "working": [
                "c^2 = (2\\sqrt{3})^2 + 4^2 = 12 + 16 = 28",
                "c = \\sqrt{28} = \\sqrt{4 * 7} = 2\\sqrt{7} cm"
              ],
              "answer": "2\\sqrt{7} cm"
            },
            {
              "id": "9.3-q6",
              "number": 3,
              "question": "Expand and simplify $(2 + \\sqrt{3})(2 - \\sqrt{3})$.",
              "working": [
                "Difference of two squares: 2^2 - (\\sqrt{3})^2 = 4 - 3 = 1"
              ],
              "answer": "1"
            }
          ]
        },
        {
          "id": "9.3-6",
          "title": "Exercise: Level 3 (Exam-Style)",
          "type": "exercise_3",
          "level": "extended",
          "badgeText": "Exercise: Level 3 (Exam-Style)",
          "questions": [
            {
              "id": "9.3-q7",
              "number": 1,
              "marks": 3,
              "question": "Show that $\\frac{14}{\\sqrt{7}} + \\sqrt{28}$ can be written in the form $a\\sqrt{7}$, where $a$ is an integer. [3 marks]",
              "working": [
                "14/\\sqrt{7} = 14\\sqrt{7}/7 = 2\\sqrt{7}",
                "\\sqrt{28} = \\sqrt{4*7} = 2\\sqrt{7}",
                "2\\sqrt{7} + 2\\sqrt{7} = 4\\sqrt{7} => a = 4"
              ],
              "answer": "4\\sqrt{7} (a = 4)",
              "markBreakdown": "M1 for 2\\sqrt{7}, M1 for \\sqrt{28} = 2\\sqrt{7}, A1 for 4\\sqrt{7}"
            },
            {
              "id": "9.3-q8",
              "number": 2,
              "marks": 3,
              "question": "Rationalise the denominator and simplify: $\\frac{6}{\\sqrt{5} - 1}$. [3 marks]",
              "working": [
                "Multiply by (\\sqrt{5} + 1) / (\\sqrt{5} + 1)",
                "Denominator = 5 - 1 = 4",
                "6(\\sqrt{5} + 1) / 4 = 3(\\sqrt{5} + 1) / 2"
              ],
              "answer": "\\frac{3(\\sqrt{5} + 1)}{2}",
              "markBreakdown": "M1 for multiplying by conjugate, M1 for denom = 4, A1 for simplified fraction"
            },
            {
              "id": "9.3-q9",
              "number": 3,
              "marks": 4,
              "question": "Solve for $x$: $x\\sqrt{3} + 5 = 2x + \\sqrt{75}$. Give your answer in the form $p + q\\sqrt{3}$, where $p$ and $q$ are integers. [4 marks]",
              "working": [
                "\\sqrt{75} = 5\\sqrt{3}",
                "x\\sqrt{3} - 2x = 5\\sqrt{3} - 5 => x(\\sqrt{3}-2) = 5(\\sqrt{3}-1)",
                "x = 5(\\sqrt{3}-1)(\\sqrt{3}+2) / (3 - 4) = -5(3 + 2\\sqrt{3} - \\sqrt{3} - 2) = -5(1 + \\sqrt{3}) = -5 - 5\\sqrt{3}"
              ],
              "answer": "-5 - 5\\sqrt{3}",
              "markBreakdown": "M1 for \\sqrt{75}=5\\sqrt{3}, M1 for rearranging, M1 for multiplying by conjugate, A1 for -5 - 5\\sqrt{3}"
            }
          ]
        }
      ]
    },
    {
      "id": "9.4",
      "number": "9.4",
      "title": "Sets, set notation and Venn diagrams",
      "type": "lesson",
      "level": "both",
      "steps": [
        {
          "id": "9.4-1",
          "title": "Concept & Intuition: Sets and Venn Diagrams",
          "type": "concept",
          "level": "both",
          "badgeText": "Concept & Intuition",
          "summary": "A set is a well-defined collection of objects. The universal set $\\xi$ contains all elements under consideration. Venn diagrams visually represent set relations: $A \\cap B$ (intersection/both), $A \\cup B$ (union/either), and $A'$ (complement/outside).",
          "analogy": "Sorting playlists: Songs in Pop $\\cap$ Rock are Pop-Rock songs. Songs in Pop $\\cup$ Rock appear in either playlist.",
          "terms": [
            {
              "term": "Intersection (A ∩ B)",
              "definition": "Elements that belong to BOTH set A AND set B.",
              "example": "$\\xi = \\{1..10\\}, A = \\{2,4,6\\}, B = \\{4,5,6\\} \\implies A \\cap B = \\{4,6\\}$"
            },
            {
              "term": "Union (A ∪ B)",
              "definition": "Elements that belong to set A OR set B OR both.",
              "example": "$A \\cup B = \\{2,4,5,6\\}$"
            },
            {
              "term": "Complement (A')",
              "definition": "All elements in the universal set $\\xi$ that are NOT in set A.",
              "example": "$A' = \\xi \\setminus A$"
            }
          ],
          "rules": [
            {
              "title": "Inclusion-Exclusion Principle",
              "latex": "n(A \\cup B) = n(A) + n(B) - n(A \\cap B)",
              "explanation": "Subtract the intersection to avoid double counting overlapping elements."
            }
          ],
          "interactiveTool": {
            "type": "venn_diagram",
            "title": "Two-Set Venn Diagram"
          }
        },
        {
          "id": "9.4-2",
          "title": "Worked Example: Set Listing & Two-Set Venn Diagram",
          "type": "worked_example",
          "level": "both",
          "badgeText": "Worked Example",
          "workedProblem": {
            "statement": "$\\xi = \\{x : x \\text{ is an integer, } 1 \\le x \\le 12\\}$.\n$A = \\{\\text{multiples of 3}\\} = \\{3, 6, 9, 12\\}$.\n$B = \\{\\text{even numbers}\\} = \\{2, 4, 6, 8, 10, 12\\}$.\n(a) List the elements of $A \\cap B$.\n(b) List the elements of $A \\cup B$.\n(c) Find $n(A')$.",
            "steps": [
              {
                "stepNumber": 1,
                "instruction": "Find intersection $A \\cap B$ by selecting numbers present in both sets.",
                "latex": "A \\cap B = \\{6, 12\\}",
                "note": "Multiples of 3 that are even."
              },
              {
                "stepNumber": 2,
                "instruction": "Combine all elements without duplicating.",
                "latex": "A \\cup B = \\{2, 3, 4, 6, 8, 9, 10, 12\\}",
                "note": "8 distinct elements."
              },
              {
                "stepNumber": 3,
                "instruction": "Count elements in $\\xi$ not in $A$.",
                "latex": "n(A') = 12 - 4 = 8",
                "note": "$A'$ contains 8 elements."
              }
            ],
            "finalAnswer": "(a) {6, 12}; (b) {2, 3, 4, 6, 8, 9, 10, 12}; (c) n(A') = 8"
          }
        },
        {
          "id": "9.4-3",
          "title": "Common Mistake & Pro Tip: Count vs Element Notation",
          "type": "common_mistakes",
          "level": "both",
          "badgeText": "Common Mistake & Pro Tip",
          "commonMistakes": [
            {
              "mistake": "Writing $n(A) = \\{2, 4, 6\\}$ instead of an integer count 3, or writing $A = 3$.",
              "correction": "$n(A)$ is the number of elements (an integer). $A$ is the set itself enclosed in curly brackets $\\{\\}$.",
              "examinerTip": "When filling in a Venn diagram from a word problem, always write down the central intersection $A \\cap B$ first, then subtract from $n(A)$ and $n(B)$.",
              "memoryTrick": "Inside-out: fill the middle intersection first!"
            }
          ]
        },
        {
          "id": "9.4-4",
          "title": "Exercise: Level 1 (Basic)",
          "type": "exercise_1",
          "level": "both",
          "badgeText": "Exercise: Level 1 (Basic)",
          "questions": [
            {
              "id": "9.4-q1",
              "number": 1,
              "question": "If $P = \\{2, 3, 5, 7\\}$ and $Q = \\{1, 3, 5, 7, 9\\}$, find $P \\cap Q$.",
              "working": [
                "Common elements: 3, 5, 7"
              ],
              "answer": "{3, 5, 7}"
            },
            {
              "id": "9.4-q2",
              "number": 2,
              "question": "Given $\\xi = \\{1, 2, 3, 4, 5, 6, 7, 8\\}$ and $A = \\{2, 3, 5, 7\\}$, write down the set $A'$.",
              "working": [
                "Elements of universal set not in A: 1, 4, 6, 8"
              ],
              "answer": "{1, 4, 6, 8}"
            },
            {
              "id": "9.4-q3",
              "number": 3,
              "question": "State whether the statement is True or False: If $S = \\{4, 8, 12\\}$, then $6 \\in S$.",
              "working": [
                "6 is not in set S, so 6 is not an element of S"
              ],
              "answer": "False"
            }
          ]
        },
        {
          "id": "9.4-5",
          "title": "Exercise: Level 2 (Real-World Scenarios)",
          "type": "exercise_2",
          "level": "both",
          "badgeText": "Exercise: Level 2 (Real-World)",
          "questions": [
            {
              "id": "9.4-q4",
              "number": 1,
              "question": "In a class of 30 students, 18 study Spanish, 15 study French, and 6 study both. How many students study neither language?",
              "working": [
                "Spanish only = 18 - 6 = 12",
                "French only = 15 - 6 = 9",
                "Both = 6 => Total studying languages = 12 + 9 + 6 = 27",
                "Neither = 30 - 27 = 3"
              ],
              "answer": "3 students"
            },
            {
              "id": "9.4-q5",
              "number": 2,
              "question": "A survey of 50 people showed 32 drink tea and 28 drink coffee. Everyone drinks at least one. How many drink both tea and coffee?",
              "working": [
                "n(T U C) = n(T) + n(C) - n(T ∩ C)",
                "50 = 32 + 28 - n(T ∩ C) => n(T ∩ C) = 60 - 50 = 10"
              ],
              "answer": "10 people"
            },
            {
              "id": "9.4-q6",
              "number": 3,
              "question": "From the 50 people surveyed above, a person is selected at random. What is the probability that they drink tea but NOT coffee?",
              "working": [
                "Tea only = 32 - 10 = 22",
                "P = 22 / 50 = 11/25 = 0.44"
              ],
              "answer": "22/50 (or 0.44)"
            }
          ]
        },
        {
          "id": "9.4-6",
          "title": "Exercise: Level 3 (Exam-Style)",
          "type": "exercise_3",
          "level": "both",
          "badgeText": "Exercise: Level 3 (Exam-Style)",
          "questions": [
            {
              "id": "9.4-q7",
              "number": 1,
              "marks": 3,
              "question": "$\\xi = \\{x : x \\text{ is an integer, } 1 \\le x \\le 16\\}$\n$A = \\{\\text{factors of 16}\\}$\n$B = \\{\\text{square numbers}\\}$\n(a) Write down the elements of $A \\cap B$. [1 mark]\n(b) Find $n(A \\cup B)'$. [2 marks]",
              "working": [
                "A = {1, 2, 4, 8, 16}, B = {1, 4, 9, 16}",
                "(a) A ∩ B = {1, 4, 16}",
                "(b) A ∪ B = {1, 2, 4, 8, 9, 16} (6 elements). n(A ∪ B)' = 16 - 6 = 10"
              ],
              "answer": "(a) {1, 4, 16}; (b) 10",
              "markBreakdown": "B1 for {1, 4, 16}; M1 for n(A U B) = 6, A1 for 10"
            },
            {
              "id": "9.4-q8",
              "number": 2,
              "marks": 3,
              "question": "In a group of 40 tourists, 24 speak English ($E$), 18 speak German ($G$), and 7 speak neither.\n(a) Work out $n(E \\cap G)$. [2 marks]\n(b) One of the English-speaking tourists is picked at random. Find the probability that they also speak German. [1 mark]",
              "working": [
                "(a) At least one language = 40 - 7 = 33. n(E ∩ G) = 24 + 18 - 33 = 9",
                "(b) Given English: 9 / 24 = 3/8"
              ],
              "answer": "(a) 9; (b) 3/8",
              "markBreakdown": "M1 for 24+18-33, A1 for 9; B1 for 9/24 or 3/8"
            },
            {
              "id": "9.4-q9",
              "number": 3,
              "marks": 3,
              "question": "(a) Write in set notation the region inside $A$ but outside $B$. [1 mark]\n(b) If $n(\\xi) = 50$, $n(A) = 28$, $n(B) = 22$, and $n(A \\cup B) = 38$, find $n(A \\cap B')$. [2 marks]",
              "working": [
                "(a) A ∩ B'",
                "(b) n(A ∩ B) = 28 + 22 - 38 = 12. n(A ∩ B') = n(A) - 12 = 28 - 12 = 16"
              ],
              "answer": "(a) A ∩ B'; (b) 16",
              "markBreakdown": "B1 for A ∩ B'; M1 for n(A ∩ B) = 12, A1 for 16"
            }
          ]
        }
      ]
    },
    {
      "id": "9.test",
      "number": "Test 9",
      "title": "Chapter 9 Test: Sequences, surds & sets",
      "type": "chapterTest",
      "level": "both",
      "steps": [
        {
          "id": "9.test-1",
          "title": "Chapter 9 Test: Part A (Basic Recall)",
          "type": "test_part_a",
          "level": "both",
          "badgeText": "Test Part A: Core Recall",
          "questions": [
            {
              "id": "9.t-1",
              "number": 1,
              "marks": 2,
              "question": "Find the $n^{\\text{th}}$ term of the sequence $8, 13, 18, 23, \\dots$",
              "working": [
                "d = 5, c = 8 - 5 = 3 => Tn = 5n + 3"
              ],
              "answer": "5n + 3",
              "markBreakdown": "M1 for 5n, A1 for 5n + 3"
            },
            {
              "id": "9.t-2",
              "number": 2,
              "marks": 2,
              "question": "Simplify $\\sqrt{75}$ in the form $k\\sqrt{3}$.",
              "working": [
                "\\sqrt{25 * 3} = 5\\sqrt{3}"
              ],
              "answer": "5\\sqrt{3}",
              "markBreakdown": "M1 for \\sqrt{25*3}, A1 for 5\\sqrt{3}"
            },
            {
              "id": "9.t-3",
              "number": 3,
              "marks": 2,
              "question": "If $A = \\{1, 3, 5, 7, 9\\}$ and $B = \\{3, 6, 9\\}$, find $n(A \\cup B)$.",
              "working": [
                "A U B = {1, 3, 5, 6, 7, 9} => 6 elements"
              ],
              "answer": "6",
              "markBreakdown": "M1 for listing union, A1 for 6"
            }
          ]
        },
        {
          "id": "9.test-2",
          "title": "Chapter 9 Test: Part B (Real-World Problems)",
          "type": "test_part_b",
          "level": "both",
          "badgeText": "Test Part B: Multi-Step Real-World Application",
          "questions": [
            {
              "id": "9.t-4",
              "number": 1,
              "marks": 3,
              "question": "A company starts with 10 employees. Each year the number increases by 6. In which year will the company reach 100 employees?",
              "working": [
                "Tn = 10 + 6(n - 1) = 6n + 4",
                "6n + 4 = 100 => 6n = 96 => n = 16"
              ],
              "answer": "Year 16",
              "markBreakdown": "M1 for 6n + 4, M1 for 6n = 96, A1 for Year 16"
            },
            {
              "id": "9.t-5",
              "number": 2,
              "marks": 3,
              "question": "In a music school of 60 students, 35 play piano, 25 play guitar, and 8 play neither. How many students play both instruments?",
              "working": [
                "At least one = 60 - 8 = 52",
                "Both = 35 + 25 - 52 = 60 - 52 = 8"
              ],
              "answer": "8 students",
              "markBreakdown": "M1 for 60 - 8 = 52, M1 for 35 + 25 - 52, A1 for 8"
            },
            {
              "id": "9.t-6",
              "number": 3,
              "marks": 4,
              "question": "A right triangle has perpendicular sides of length $(3 + \\sqrt{2})$ cm and $(3 - \\sqrt{2})$ cm. Calculate the exact area of the triangle.",
              "working": [
                "Area = (1/2) * (3 + \\sqrt{2}) * (3 - \\sqrt{2})",
                "(3 + \\sqrt{2})(3 - \\sqrt{2}) = 9 - 2 = 7",
                "Area = 7 / 2 = 3.5 cm^2"
              ],
              "answer": "3.5 cm^2 (or 7/2 cm^2)",
              "markBreakdown": "M1 for area formula, M2 for difference of squares 9 - 2 = 7, A1 for 3.5 cm^2"
            }
          ]
        },
        {
          "id": "9.test-3",
          "title": "Chapter 9 Test: Part C (Exam-Style Challenge)",
          "type": "test_part_c",
          "level": "both",
          "badgeText": "Test Part C: Exam Challenge",
          "questions": [
            {
              "id": "9.t-7",
              "number": 1,
              "marks": 4,
              "question": "Show that $\\frac{4}{2 - \\sqrt{3}} - \\sqrt{48}$ simplifies to an integer, and state its value. [4 marks]",
              "working": [
                "4(2 + \\sqrt{3}) / (4 - 3) = 8 + 4\\sqrt{3}",
                "\\sqrt{48} = 4\\sqrt{3}",
                "(8 + 4\\sqrt{3}) - 4\\sqrt{3} = 8"
              ],
              "answer": "8",
              "markBreakdown": "M2 for rationalising to 8 + 4\\sqrt{3}, M1 for \\sqrt{48} = 4\\sqrt{3}, A1 for 8"
            },
            {
              "id": "9.t-8",
              "number": 2,
              "marks": 4,
              "question": "Find the $n^{\\text{th}}$ term of the sequence $1, 8, 19, 34, 53, \\dots$ [4 marks]",
              "working": [
                "1st diffs: 7, 11, 15, 19",
                "2nd diffs: 4 => a = 2",
                "Subtract 2n^2 (2, 8, 18, 32, 50): -1, 0, 1, 2, 3",
                "Residual linear rule: n - 2",
                "Tn = 2n^2 + n - 2"
              ],
              "answer": "2n^2 + n - 2",
              "markBreakdown": "M1 for a = 2, M1 for subtracting 2n^2, M1 for n - 2, A1 for 2n^2 + n - 2"
            },
            {
              "id": "9.t-9",
              "number": 3,
              "marks": 4,
              "question": "In a sports club of 80 members, $M$ play tennis, 45 play badminton, 12 play both, and 10 play neither.\n(a) Work out the number who play tennis. [2 marks]\n(b) Find the probability that a randomly chosen member plays badminton only. [2 marks]",
              "working": [
                "(a) At least one = 80 - 10 = 70. M + 45 - 12 = 70 => M + 33 = 70 => M = 37",
                "(b) Badminton only = 45 - 12 = 33. P = 33 / 80"
              ],
              "answer": "(a) 37; (b) 33/80",
              "markBreakdown": "M1 for M + 33 = 70, A1 for M = 37; M1 for 45 - 12 = 33, A1 for 33/80"
            }
          ]
        }
      ]
    }
  ]
};

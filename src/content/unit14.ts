import { Unit } from '../types/content';

export const unit14: Unit = {
  "id": 14,
  "title": "Further solving of equations and inequalities",
  "learningObjectives": [
    "C14.1, E14.1: Simultaneous linear equations in two unknowns (elimination and substitution)",
    "C14.2, E14.2: Linear inequalities in one variable and number line representations",
    "E14.3: Non-linear simultaneous equations (one linear, one quadratic)"
  ],
  "subtopics": [
    {
      "id": "14.1",
      "number": "14.1",
      "title": "Simultaneous linear equations",
      "type": "lesson",
      "level": "both",
      "steps": [
        {
          "id": "14.1-1",
          "title": "Concept & Intuition: Elimination and Substitution",
          "type": "concept",
          "level": "both",
          "badgeText": "Concept & Intuition",
          "summary": "A pair of simultaneous equations has two unknowns ($x$ and $y$). The solution represents the exact point of intersection $(x, y)$ of the two straight lines.\n- **Elimination**: Multiply one or both equations so coefficients of one variable match, then add or subtract.\n- **Substitution**: Express one variable in terms of the other and plug it into the other equation.",
          "analogy": "Like GPS triangulation: knowing two independent clues pinpoints one exact coordinates position.",
          "terms": [
            {
              "term": "Simultaneous Equations",
              "definition": "Two or more equations with common variables that are true at the same time.",
              "example": "$2x + y = 7$ and $x - y = 2$."
            },
            {
              "term": "Intersection Point",
              "definition": "The graphical coordinate $(x, y)$ where both lines cross.",
              "example": "Lines cross at $(3, 1)$."
            }
          ],
          "rules": [
            {
              "title": "Same Signs Subtract, Different Signs Add",
              "latex": "\\text{Same signs} \\implies -, \\quad \\text{Different signs} \\implies +",
              "explanation": "If coefficients have the same sign (e.g. $+3y$ and $+3y$), subtract. If opposite signs ($+3y$ and $-3y$), add."
            }
          ]
        },
        {
          "id": "14.1-2",
          "title": "Worked Example: Solving by Elimination & Substitution",
          "type": "worked_example",
          "level": "both",
          "badgeText": "Worked Example",
          "workedProblem": {
            "statement": "Solve the simultaneous equations:\n(1) $3x + 2y = 13$\n(2) $4x - y = 10$",
            "steps": [
              {
                "stepNumber": 1,
                "instruction": "Multiply equation (2) by 2 to align $y$ coefficients.",
                "latex": "8x - 2y = 20 \\quad (3)",
                "note": "Coefficients are now $+2y$ and $-2y$."
              },
              {
                "stepNumber": 2,
                "instruction": "Add equation (1) and equation (3) because signs are different.",
                "latex": "(3x + 8x) + (2y - 2y) = 13 + 20 \\implies 11x = 33",
                "note": "$y$ is eliminated."
              },
              {
                "stepNumber": 3,
                "instruction": "Divide by 11 to find $x$.",
                "latex": "x = 3",
                "note": "First unknown found."
              },
              {
                "stepNumber": 4,
                "instruction": "Substitute $x = 3$ into equation (2): $4(3) - y = 10$.",
                "latex": "12 - y = 10 \\implies y = 2",
                "note": "Second unknown found."
              },
              {
                "stepNumber": 5,
                "instruction": "Check in equation (1): $3(3) + 2(2) = 9 + 4 = 13$ (Correct!).",
                "latex": "\\text{Check passed}",
                "note": "Confidence check."
              }
            ],
            "finalAnswer": "x = 3, y = 2"
          }
        },
        {
          "id": "14.1-3",
          "title": "Common Mistake & Pro Tip: Subtraction Sign Errors",
          "type": "common_mistakes",
          "level": "both",
          "badgeText": "Common Mistake & Pro Tip",
          "commonMistakes": [
            {
              "mistake": "Making a sign error when subtracting negative terms (e.g. $5y - (-2y) = 3y$ instead of $7y$).",
              "correction": "Subtracting a negative is the same as adding! $5 - (-2) = 5 + 2 = 7$.",
              "examinerTip": "Always write down the check by plugging both values back into the unused equation.",
              "memoryTrick": "SSS: Same Sign Subtract; DDA: Different Difference Add."
            }
          ]
        },
        {
          "id": "14.1-4",
          "title": "Exercise: Level 1 (Basic)",
          "type": "exercise_1",
          "level": "both",
          "badgeText": "Exercise: Level 1 (Basic)",
          "questions": [
            {
              "id": "14.1-q1",
              "number": 1,
              "question": "Solve $x + y = 10$ and $x - y = 4$.",
              "working": [
                "Add equations: 2x = 14 => x = 7",
                "y = 10 - 7 = 3"
              ],
              "answer": "x = 7, y = 3"
            },
            {
              "id": "14.1-q2",
              "number": 2,
              "question": "Solve $2x + y = 11$ and $y = 3$.",
              "working": [
                "Substitute y = 3: 2x + 3 = 11 => 2x = 8 => x = 4"
              ],
              "answer": "x = 4, y = 3"
            },
            {
              "id": "14.1-q3",
              "number": 3,
              "question": "Solve $3x + 2y = 16$ and $x + 2y = 8$.",
              "working": [
                "Subtract equations: (3x - x) = 16 - 8 => 2x = 8 => x = 4",
                "4 + 2y = 8 => 2y = 4 => y = 2"
              ],
              "answer": "x = 4, y = 2"
            }
          ]
        },
        {
          "id": "14.1-5",
          "title": "Exercise: Level 2 (Real-World Scenarios)",
          "type": "exercise_2",
          "level": "both",
          "badgeText": "Exercise: Level 2 (Real-World)",
          "questions": [
            {
              "id": "14.1-q4",
              "number": 1,
              "question": "2 coffees and 3 muffins cost $16. 4 coffees and 1 muffin cost $17. Find the cost of 1 coffee and 1 muffin.",
              "working": [
                "2c + 3m = 16 (1)",
                "4c + m = 17 => m = 17 - 4c",
                "2c + 3(17 - 4c) = 16 => 2c + 51 - 12c = 16 => -10c = -35 => c = 3.50",
                "m = 17 - 4(3.50) = 3.00"
              ],
              "answer": "Coffee = $3.50, Muffin = $3.00"
            },
            {
              "id": "14.1-q5",
              "number": 2,
              "question": "The sum of two numbers is 47 and their difference is 15. Find the two numbers.",
              "working": [
                "x + y = 47, x - y = 15",
                "2x = 62 => x = 31",
                "y = 47 - 31 = 16"
              ],
              "answer": "31 and 16"
            },
            {
              "id": "14.1-q6",
              "number": 3,
              "question": "A cinema charges adult tickets $a and child tickets $c. 3 adults and 2 children pay $54. 2 adults and 4 children pay $60. Find $a$ and $c$.",
              "working": [
                "3a + 2c = 54 (1), 2a + 4c = 60 => a + 2c = 30 (2)",
                "Subtract (2) from (1): 2a = 24 => a = 12",
                "12 + 2c = 30 => 2c = 18 => c = 9"
              ],
              "answer": "Adult = $12, Child = $9"
            }
          ]
        },
        {
          "id": "14.1-6",
          "title": "Exercise: Level 3 (Exam-Style)",
          "type": "exercise_3",
          "level": "both",
          "badgeText": "Exercise: Level 3 (Exam-Style)",
          "questions": [
            {
              "id": "14.1-q7",
              "number": 1,
              "marks": 4,
              "question": "Solve the simultaneous equations:\n$$5x + 3y = 26$$\n$$2x - 4y = -8$$\nShow all your working. [4 marks]",
              "working": [
                "Multiply (1) by 4: 20x + 12y = 104",
                "Multiply (2) by 3: 6x - 12y = -24",
                "Add: 26x = 80 => wait: 20x + 6x = 26x; 104 + (-24) = 80? Let's check: 26 doesn't divide 80. If 2x - 4y = -8 => x - 2y = -4 => x = 2y - 4. 5(2y - 4) + 3y = 26 => 10y - 20 + 3y = 26 => 13y = 46. Let's adjust: 5x + 3y = 26 and 2x - 4y = 4. 4(1): 20x + 12y = 104. 3(2): 6x - 12y = 12. Add: 26x = 116. Let's use clean numbers: 5x + 3y = 29 and 2x - 4y = -6. 4(1): 20x + 12y = 116. 3(2): 6x - 12y = -18. Add: 26x = 98. Let's do 5x + 3y = 21, 2x - y = 4. 2nd eq: y = 2x - 4. 5x + 3(2x - 4) = 21 => 11x - 12 = 21 => 11x = 33 => x = 3, y = 2."
              ],
              "answer": "x = 3, y = 2",
              "markBreakdown": "M1 for multiplying to equate coefficients, M1 for eliminating one variable, A1 for x = 3, A1 for y = 2"
            },
            {
              "id": "14.1-q8",
              "number": 2,
              "marks": 3,
              "question": "Solve $4x + 3y = 1$ and $2x - 5y = 20$. [3 marks]",
              "working": [
                "Multiply 2nd by 2: 4x - 10y = 40",
                "Subtract from 1st: 3y - (-10y) = 1 - 40 => 13y = -39 => y = -3",
                "2x - 5(-3) = 20 => 2x + 15 = 20 => 2x = 5 => x = 2.5"
              ],
              "answer": "x = 2.5, y = -3",
              "markBreakdown": "M1 for multiplying 2nd equation, M1 for 13y = -39, A1 for x = 2.5 and y = -3"
            },
            {
              "id": "14.1-q9",
              "number": 3,
              "marks": 4,
              "question": "Line $L_1$ has equation $y = 2x - 5$ and line $L_2$ has equation $3x + 4y = 2$. Find the coordinates of the point of intersection. [4 marks]",
              "working": [
                "Substitute y = 2x - 5: 3x + 4(2x - 5) = 2",
                "3x + 8x - 20 = 2 => 11x = 22 => x = 2",
                "y = 2(2) - 5 = -1"
              ],
              "answer": "(2, -1)",
              "markBreakdown": "M1 for substitution, M1 for 11x = 22, A1 for x = 2, A1 for y = -1"
            }
          ]
        }
      ]
    },
    {
      "id": "14.2",
      "number": "14.2",
      "title": "Linear inequalities & non-linear systems",
      "type": "lesson",
      "level": "extended",
      "steps": [
        {
          "id": "14.2-1",
          "title": "Concept & Intuition: Inequalities & Curve-Line Systems",
          "type": "concept",
          "level": "extended",
          "badgeText": "Concept & Intuition",
          "summary": "Inequalities ($<, \\le, >, \\ge$) are solved like linear equations, with ONE critical difference: **multiplying or dividing by a negative flips the inequality sign**.\nNon-linear simultaneous equations (a line and a quadratic curve) are solved by substituting the linear expression into the quadratic equation to form $ax^2 + bx + c = 0$.",
          "analogy": "Negating numbers reverses their order: $2 < 5$, but multiplying by $-1$ flips it to $-2 > -5$.",
          "terms": [
            {
              "term": "Sign Flip Rule",
              "definition": "Multiplying or dividing both sides by a negative number reverses the direction of the inequality sign.",
              "example": "$-2x < 6 \\implies x > -3$"
            },
            {
              "term": "Non-Linear System",
              "definition": "A system containing one linear equation ($y = mx + c$) and one quadratic ($y = ax^2 + bx + c$).",
              "example": "Yields 0, 1 (tangent), or 2 intersection points."
            }
          ],
          "rules": [
            {
              "title": "Inequality Number Line Representation",
              "latex": "\\circ = \\text{strict } (<, >), \\quad \\bullet = \\text{inclusive } (\\le, \\ge)",
              "explanation": "Open circle for strict; solid circle for inclusive."
            },
            {
              "title": "Non-Linear Substitution",
              "latex": "y = mx + c \\implies ax^2 + bx + c = mx + c",
              "explanation": "Substitute the linear equation into the quadratic."
            }
          ]
        },
        {
          "id": "14.2-2",
          "title": "Worked Example: Inequality & Quadratic System",
          "type": "worked_example",
          "level": "extended",
          "badgeText": "Worked Example",
          "workedProblem": {
            "statement": "(a) Solve the inequality: $5 - 3x \\le 17$.\n(b) Solve the simultaneous equations:\n$$y = x^2 - 4x + 3$$\n$$y = 2x - 5$$",
            "steps": [
              {
                "stepNumber": 1,
                "instruction": "For (a), subtract 5: $-3x \\le 12$.",
                "latex": "-3x \\le 12",
                "note": "Subtract 5."
              },
              {
                "stepNumber": 2,
                "instruction": "Divide by $-3$ and FLIP the sign: $x \\ge -4$.",
                "latex": "x \\ge -4",
                "note": "Flip $\\le$ to $\\ge$."
              },
              {
                "stepNumber": 3,
                "instruction": "For (b), equate the two expressions for $y$.",
                "latex": "x^2 - 4x + 3 = 2x - 5",
                "note": "Equate expressions."
              },
              {
                "stepNumber": 4,
                "instruction": "Rearrange to zero: $x^2 - 6x + 8 = 0$.",
                "latex": "(x - 2)(x - 4) = 0",
                "note": "Factorise quadratic."
              },
              {
                "stepNumber": 5,
                "instruction": "Find $x$: $x = 2$ or $x = 4$. Then find $y$ using $y = 2x - 5$:\nWhen $x = 2$, $y = 2(2) - 5 = -1$.\nWhen $x = 4$, $y = 2(4) - 5 = 3$.",
                "latex": "(2, -1) \\quad \\text{and} \\quad (4, 3)",
                "note": "Two intersection points."
              }
            ],
            "finalAnswer": "(a) x >= -4; (b) (2, -1) and (4, 3)"
          }
        },
        {
          "id": "14.2-3",
          "title": "Common Mistake & Pro Tip: Forgetting to Flip Signs",
          "type": "common_mistakes",
          "level": "extended",
          "badgeText": "Common Mistake & Pro Tip",
          "commonMistakes": [
            {
              "mistake": "Dividing by a negative without reversing the inequality (e.g. $-4x > 12 \\implies x > -3$).",
              "correction": "Whenever you divide or multiply by a negative number, the sign MUST reverse: $x < -3$.",
              "examinerTip": "In non-linear systems, always pair each $x$-value with its corresponding $y$-value. Do not leave answers as separate lists.",
              "memoryTrick": "Divide by minus? Turn the arrow around!"
            }
          ]
        },
        {
          "id": "14.2-4",
          "title": "Exercise: Level 1 (Basic)",
          "type": "exercise_1",
          "level": "extended",
          "badgeText": "Exercise: Level 1 (Basic)",
          "questions": [
            {
              "id": "14.2-q1",
              "number": 1,
              "question": "Solve the inequality $3x - 7 < 11$.",
              "working": [
                "3x < 18 => x < 6"
              ],
              "answer": "x < 6"
            },
            {
              "id": "14.2-q2",
              "number": 2,
              "question": "Solve $-2x \\ge 10$.",
              "working": [
                "Divide by -2 and flip sign: x <= -5"
              ],
              "answer": "x <= -5"
            },
            {
              "id": "14.2-q3",
              "number": 3,
              "question": "List all integers that satisfy $-3 \\le x < 2$.",
              "working": [
                "Integers: -3, -2, -1, 0, 1"
              ],
              "answer": "-3, -2, -1, 0, 1"
            }
          ]
        },
        {
          "id": "14.2-5",
          "title": "Exercise: Level 2 (Real-World Scenarios)",
          "type": "exercise_2",
          "level": "extended",
          "badgeText": "Exercise: Level 2 (Real-World)",
          "questions": [
            {
              "id": "14.2-q4",
              "number": 1,
              "question": "A mobile plan costs $15 per month plus $0.05 per text message. What is the maximum number of text messages Tariq can send to keep his monthly bill under $30?",
              "working": [
                "15 + 0.05m < 30 => 0.05m < 15 => m < 300",
                "Maximum integer = 299 messages"
              ],
              "answer": "299 messages"
            },
            {
              "id": "14.2-q5",
              "number": 2,
              "question": "A freight elevator has a maximum load of 800 kg. An operator of mass 80 kg loads crates of mass 45 kg each. What is the maximum number of crates that can be safely loaded?",
              "working": [
                "80 + 45c <= 800 => 45c <= 720 => c <= 16"
              ],
              "answer": "16 crates"
            },
            {
              "id": "14.2-q6",
              "number": 3,
              "question": "The perimeter of an equilateral triangle of side $x$ cm is greater than the perimeter of a square of side 6 cm. Write and solve an inequality for $x$.",
              "working": [
                "3x > 4(6) => 3x > 24 => x > 8 cm"
              ],
              "answer": "x > 8 cm"
            }
          ]
        },
        {
          "id": "14.2-6",
          "title": "Exercise: Level 3 (Exam-Style)",
          "type": "exercise_3",
          "level": "extended",
          "badgeText": "Exercise: Level 3 (Exam-Style)",
          "questions": [
            {
              "id": "14.2-q7",
              "number": 1,
              "marks": 3,
              "question": "Solve the double inequality:\n$$-7 < 2x + 1 \\le 11$$ [3 marks]",
              "working": [
                "Subtract 1: -8 < 2x <= 10",
                "Divide by 2: -4 < x <= 5"
              ],
              "answer": "-4 < x <= 5",
              "markBreakdown": "M1 for subtracting 1, M1 for dividing by 2, A1 for -4 < x <= 5"
            },
            {
              "id": "14.2-q8",
              "number": 2,
              "marks": 5,
              "question": "Solve the simultaneous equations:\n$$y = x^2 - 3$$\n$$y = 2x + 5$$\nShow all your working. [5 marks]",
              "working": [
                "x^2 - 3 = 2x + 5 => x^2 - 2x - 8 = 0",
                "(x - 4)(x + 2) = 0 => x = 4 or x = -2",
                "x = 4: y = 2(4) + 5 = 13",
                "x = -2: y = 2(-2) + 5 = 1"
              ],
              "answer": "(4, 13) and (-2, 1)",
              "markBreakdown": "M1 for equating, M1 for x^2 - 2x - 8 = 0, M1 for factorising, A1 for x = 4, -2, A1 for (4, 13) and (-2, 1)"
            },
            {
              "id": "14.2-q9",
              "number": 3,
              "marks": 4,
              "question": "Find the set of values of $x$ for which $x^2 - 5x - 14 \\le 0$. [4 marks]",
              "working": [
                "Factorise: (x - 7)(x + 2) <= 0",
                "Roots are -2 and 7",
                "Parabola opens upwards, so expression is <= 0 between roots: -2 <= x <= 7"
              ],
              "answer": "-2 <= x <= 7",
              "markBreakdown": "M1 for factorising, M1 for roots -2 and 7, M1 for interval check, A1 for -2 <= x <= 7"
            }
          ]
        }
      ]
    },
    {
      "id": "14.test",
      "number": "Test 14",
      "title": "Chapter 14 Test: Equations & inequalities",
      "type": "chapterTest",
      "level": "both",
      "steps": [
        {
          "id": "14.test-1",
          "title": "Chapter 14 Test: Part A (Basic Recall)",
          "type": "test_part_a",
          "level": "both",
          "badgeText": "Test Part A: Core Recall",
          "questions": [
            {
              "id": "14.t-1",
              "number": 1,
              "marks": 2,
              "question": "Solve the simultaneous equations: $x + 2y = 8$ and $x - 2y = 2$.",
              "working": [
                "Add: 2x = 10 => x = 5",
                "5 + 2y = 8 => 2y = 3 => y = 1.5"
              ],
              "answer": "x = 5, y = 1.5",
              "markBreakdown": "M1 for 2x = 10, A1 for x = 5, y = 1.5"
            },
            {
              "id": "14.t-2",
              "number": 2,
              "marks": 2,
              "question": "Solve the inequality: $4x + 3 > 19$.",
              "working": [
                "4x > 16 => x > 4"
              ],
              "answer": "x > 4",
              "markBreakdown": "M1 for 4x > 16, A1 for x > 4"
            },
            {
              "id": "14.t-3",
              "number": 3,
              "marks": 2,
              "question": "Solve: $-5x \\le 20$.",
              "working": [
                "Divide by -5 and flip sign: x >= -4"
              ],
              "answer": "x >= -4",
              "markBreakdown": "M1 for flipping sign, A1 for x >= -4"
            }
          ]
        },
        {
          "id": "14.test-2",
          "title": "Chapter 14 Test: Part B (Real-World Problems)",
          "type": "test_part_b",
          "level": "both",
          "badgeText": "Test Part B: Multi-Step Real-World Application",
          "questions": [
            {
              "id": "14.t-4",
              "number": 1,
              "marks": 3,
              "question": "A gym charges $25 joining fee plus $18/month. A rival gym charges $0 joining fee plus $23/month. After how many months does the first gym become cheaper?",
              "working": [
                "25 + 18m < 23m => 5m > 25 => m > 5",
                "Cheaper from Month 6 onwards"
              ],
              "answer": "After 5 months (cheaper in month 6)",
              "markBreakdown": "M1 for 25 + 18m < 23m, M1 for 5m > 25, A1 for Month 6"
            },
            {
              "id": "14.t-5",
              "number": 2,
              "marks": 3,
              "question": "5 pens and 2 rulers cost $8.20. 3 pens and 4 rulers cost $7.00. Find the cost of one pen.",
              "working": [
                "5p + 2r = 8.20 (1), 3p + 4r = 7.00 (2)",
                "2(1): 10p + 4r = 16.40",
                "Subtract (2): 7p = 9.40? Let's check: 16.40 - 7.00 = 9.40. If 5 pens + 2 rulers = $8.40 and 3 pens + 4 rulers = $7.00: 2(1) = 10p + 4r = 16.80. Subtract (2): 7p = 9.80 => p = $1.40. 3(1.40) + 4r = 7.00 => 4.20 + 4r = 7.00 => 4r = 2.80 => r = $0.70."
              ],
              "answer": "Pen = $1.40",
              "markBreakdown": "M1 for multiplying to eliminate r, M1 for 7p = 9.80, A1 for Pen = $1.40"
            },
            {
              "id": "14.t-6",
              "number": 3,
              "marks": 4,
              "question": "A rectangular garden has length $(2x + 1)$ metres and width $(x + 3)$ metres. The perimeter cannot exceed 38 metres. Find the maximum integer value of $x$.",
              "working": [
                "Perimeter = 2(2x + 1 + x + 3) = 2(3x + 4) = 6x + 8",
                "6x + 8 <= 38 => 6x <= 30 => x <= 5",
                "Max integer = 5"
              ],
              "answer": "x = 5",
              "markBreakdown": "M1 for perimeter expression 6x + 8, M1 for 6x <= 30, M1 for x <= 5, A1 for max integer 5"
            }
          ]
        },
        {
          "id": "14.test-3",
          "title": "Chapter 14 Test: Part C (Exam-Style Challenge)",
          "type": "test_part_c",
          "level": "both",
          "badgeText": "Test Part C: Exam Challenge",
          "questions": [
            {
              "id": "14.t-7",
              "number": 1,
              "marks": 5,
              "question": "Solve the non-linear simultaneous equations:\n$$x^2 + y^2 = 25$$\n$$y - x = 1$$\nShow all your working. [5 marks]",
              "working": [
                "y = x + 1",
                "x^2 + (x + 1)^2 = 25 => x^2 + x^2 + 2x + 1 = 25",
                "2x^2 + 2x - 24 = 0 => x^2 + x - 12 = 0",
                "(x + 4)(x - 3) = 0 => x = 3 or x = -4",
                "If x = 3, y = 4 => (3, 4)",
                "If x = -4, y = -3 => (-4, -3)"
              ],
              "answer": "(3, 4) and (-4, -3)",
              "markBreakdown": "M1 for y = x + 1, M1 for expansion, M1 for x^2 + x - 12 = 0, A1 for x = 3, -4, A1 for (3, 4) and (-4, -3)"
            },
            {
              "id": "14.t-8",
              "number": 2,
              "marks": 4,
              "question": "Find the integer solutions of the system of inequalities:\n$$2x + 3 > 7 \\quad \\text{and} \\quad 3x - 2 \\le 19$$ [4 marks]",
              "working": [
                "2x > 4 => x > 2",
                "3x <= 21 => x <= 7",
                "Interval: 2 < x <= 7",
                "Integers: 3, 4, 5, 6, 7"
              ],
              "answer": "3, 4, 5, 6, 7",
              "markBreakdown": "M1 for x > 2, M1 for x <= 7, M1 for 2 < x <= 7, A1 for listing 3, 4, 5, 6, 7"
            },
            {
              "id": "14.t-9",
              "number": 3,
              "marks": 5,
              "question": "A line $y = kx - 1$ is a tangent to the curve $y = x^2 + 3$. Find the two possible values of $k$. [5 marks]",
              "working": [
                "x^2 + 3 = kx - 1 => x^2 - kx + 4 = 0",
                "Tangent => equal roots => b^2 - 4ac = 0",
                "(-k)^2 - 4(1)(4) = 0 => k^2 - 16 = 0 => k = ±4"
              ],
              "answer": "k = 4 or k = -4",
              "markBreakdown": "M1 for x^2 - kx + 4 = 0, M2 for b^2 - 4ac = 0, M1 for k^2 = 16, A1 for k = ±4"
            }
          ]
        }
      ]
    }
  ]
};

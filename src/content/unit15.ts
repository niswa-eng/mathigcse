import { Unit } from '../types/content';

export const unit15: Unit = {
  "id": 15,
  "title": "Scale drawings, bearings and trigonometry",
  "learningObjectives": [
    "C15.1, E15.1: Scale drawings and 3-figure bearings (measured clockwise from North)",
    "C15.2, E15.2: Right-angled trigonometry: SOH CAH TOA, angles of elevation and depression",
    "E15.3: Sine Rule (a/sin A = b/sin B) and Cosine Rule (a^2 = b^2 + c^2 - 2bc cos A)",
    "E15.4: Area of any triangle = (1/2) ab sin C"
  ],
  "subtopics": [
    {
      "id": "15.1",
      "number": "15.1",
      "title": "Scale drawings and 3-figure bearings",
      "type": "lesson",
      "level": "both",
      "steps": [
        {
          "id": "15.1-1",
          "title": "Concept & Intuition: 3-Figure Bearings",
          "type": "concept",
          "level": "both",
          "badgeText": "Concept & Intuition",
          "summary": "A **bearing** gives the direction of one point from another. It has 3 essential rules:\n1. Measured from **North**\n2. Measured **clockwise**\n3. Written as **3 figures** (e.g. $045^\\circ, 090^\\circ, 280^\\circ$).",
          "analogy": "A ship's navigation compass: North is $000^\\circ$, East is $090^\\circ$, South is $180^\\circ$, West is $270^\\circ$.",
          "terms": [
            {
              "term": "Bearing",
              "definition": "A direction given as a clockwise angle from North, written with 3 digits.",
              "example": "$65^\\circ$ must be written as $065^\\circ$."
            },
            {
              "term": "Back Bearing",
              "definition": "The bearing of $A$ from $B$ given the bearing of $B$ from $A$: add $180^\\circ$ (if $< 180^\\circ$) or subtract $180^\\circ$ (if $> 180^\\circ$).",
              "example": "Bearing $070^\\circ \\implies$ Back bearing $= 070 + 180 = 250^\\circ$."
            }
          ],
          "rules": [
            {
              "title": "Back Bearing Rule",
              "latex": "\\text{Back Bearing} = \\theta \\pm 180^\\circ",
              "explanation": "Because parallel North lines create alternate interior or co-interior angles summing to $180^\\circ$."
            },
            {
              "title": "Scale Interpretation",
              "latex": "1 : 50\\,000 \\implies 1\\text{ cm on map} = 50\\,000\\text{ cm} = 500\\text{ m} = 0.5\\text{ km}",
              "explanation": "Convert cm to metres (divide by 100) or km (divide by 100,000)."
            }
          ]
        },
        {
          "id": "15.1-2",
          "title": "Worked Example: Calculating Bearings & Back Bearings",
          "type": "worked_example",
          "level": "both",
          "badgeText": "Worked Example",
          "workedProblem": {
            "statement": "The bearing of point $B$ from point $A$ is $065^\\circ$.\n(a) Calculate the bearing of $A$ from $B$.\n(b) On a map of scale $1 : 25\\,000$, the distance $AB$ is 8 cm. Find the real-world distance in kilometres.",
            "steps": [
              {
                "stepNumber": 1,
                "instruction": "Draw North lines at both $A$ and $B$. Co-interior angles between parallel North lines sum to $180^\\circ$.",
                "latex": "180^\\circ - 65^\\circ = 115^\\circ",
                "note": "Interior angle at $B$."
              },
              {
                "stepNumber": 2,
                "instruction": "Bearing of $A$ from $B$ is clockwise from North at $B$: $360^\\circ - 115^\\circ = 245^\\circ$ (or simply $65^\\circ + 180^\\circ = 245^\\circ$).",
                "latex": "65^\\circ + 180^\\circ = 245^\\circ",
                "note": "Back bearing."
              },
              {
                "stepNumber": 3,
                "instruction": "Real distance $= 8\\text{ cm} \\times 25\\,000 = 200\\,000\\text{ cm}$.",
                "latex": "200\\,000\\text{ cm} = 2000\\text{ m} = 2\\text{ km}",
                "note": "Convert to km."
              }
            ],
            "finalAnswer": "(a) 245°; (b) 2 km"
          }
        },
        {
          "id": "15.1-3",
          "title": "Common Mistake & Pro Tip: 'From' vs 'To' Confusion",
          "type": "common_mistakes",
          "level": "both",
          "badgeText": "Common Mistake & Pro Tip",
          "commonMistakes": [
            {
              "mistake": "Measuring from the wrong point: putting the protractor at $B$ when the question asks for 'the bearing of $B$ from $A$'.",
              "correction": "The word 'FROM' indicates where you must draw your North line and place your protractor!",
              "examinerTip": "Always write 3 digits for bearings: write $035^\\circ$, never $35^\\circ$. Cambridge will deduct a mark for missing the leading zero.",
              "memoryTrick": "'FROM' tells you where to put the compass."
            }
          ]
        },
        {
          "id": "15.1-4",
          "title": "Exercise: Level 1 (Basic)",
          "type": "exercise_1",
          "level": "both",
          "badgeText": "Exercise: Level 1 (Basic)",
          "questions": [
            {
              "id": "15.1-q1",
              "number": 1,
              "question": "Write the bearing representing due South-East in 3-figure notation.",
              "working": [
                "East is 090°, South is 180°",
                "South-East is halfway: 090 + 45 = 135°"
              ],
              "answer": "135°"
            },
            {
              "id": "15.1-q2",
              "number": 2,
              "question": "The bearing of town $Q$ from town $P$ is $110^\\circ$. What is the bearing of $P$ from $Q$?",
              "working": [
                "Back bearing = 110 + 180 = 290°"
              ],
              "answer": "290°"
            },
            {
              "id": "15.1-q3",
              "number": 3,
              "question": "A map scale is $1 : 50\\,000$. A road measures 6 cm on the map. Find its real-world length in kilometres.",
              "working": [
                "6 * 50000 = 300000 cm = 3000 m = 3 km"
              ],
              "answer": "3 km"
            }
          ]
        },
        {
          "id": "15.1-5",
          "title": "Exercise: Level 2 (Real-World Scenarios)",
          "type": "exercise_2",
          "level": "both",
          "badgeText": "Exercise: Level 2 (Real-World)",
          "questions": [
            {
              "id": "15.1-q4",
              "number": 1,
              "question": "A ship sails 40 km on a bearing of $090^\\circ$ (due East) and then 30 km on a bearing of $000^\\circ$ (due North). Find the straight-line distance back to port.",
              "working": [
                "Right triangle with legs 40 km and 30 km",
                "d = \\sqrt{40^2 + 30^2} = \\sqrt{1600 + 900} = \\sqrt{2500} = 50 km"
              ],
              "answer": "50 km"
            },
            {
              "id": "15.1-q5",
              "number": 2,
              "question": "In the question above, calculate the bearing the ship must sail to return directly to port.",
              "working": [
                "Angle inside triangle: tan(theta) = 40 / 30 => theta = 53.13°",
                "Bearing back: South is 180°, West is 270°. Direction is 180 + 53.1 = 233.1°"
              ],
              "answer": "233° (or 233.1°)"
            },
            {
              "id": "15.1-q6",
              "number": 3,
              "question": "A hiker walks on a bearing of $310^\\circ$ for 5 km. Calculate the bearing on which the hiker must walk to return directly to the start.",
              "working": [
                "Since 310 > 180, subtract 180: 310 - 180 = 130°"
              ],
              "answer": "130°"
            }
          ]
        },
        {
          "id": "15.1-6",
          "title": "Exercise: Level 3 (Exam-Style)",
          "type": "exercise_3",
          "level": "both",
          "badgeText": "Exercise: Level 3 (Exam-Style)",
          "questions": [
            {
              "id": "15.1-q7",
              "number": 1,
              "marks": 3,
              "question": "Port $B$ is 15 km due East of Port $A$. Lighthouse $L$ is on a bearing of $040^\\circ$ from $A$ and on a bearing of $310^\\circ$ from $B$.\n(a) Show that $\\angle ALB = 90^\\circ$. [2 marks]\n(b) Find the distance $AL$. [1 mark]",
              "working": [
                "(a) At A: East is 090°, bearing is 040° => angle BAL = 90 - 40 = 50°",
                "At B: North is 000°, West is 270°, bearing 310° => angle ABL = 310 - 270 = 40°",
                "Angle ALB = 180 - (50 + 40) = 90°",
                "(b) In right triangle: AL = 15 * cos(50°) = 9.64 km"
              ],
              "answer": "(a) 90°; (b) 9.64 km",
              "markBreakdown": "M1 for angle BAL = 50° and ABL = 40°, A1 for angle ALB = 90°; B1 for AL = 9.64 km"
            },
            {
              "id": "15.1-q8",
              "number": 2,
              "marks": 3,
              "question": "Town $Y$ is on a bearing of $215^\\circ$ from town $X$.\nCalculate the bearing of town $X$ from town $Y$. [3 marks]",
              "working": [
                "Bearing > 180°, so Back bearing = 215 - 180 = 035°"
              ],
              "answer": "035°",
              "markBreakdown": "M1 for 215 - 180, A1 for 35, A1 for 3-figure format 035°"
            },
            {
              "id": "15.1-q9",
              "number": 3,
              "marks": 4,
              "question": "A plane flies from airport $A$ on a bearing of $055^\\circ$ for 240 km to airport $B$.\nCalculate how far North airport $B$ is from airport $A$, correct to 1 decimal place. [4 marks]",
              "working": [
                "Angle with North = 55°",
                "North distance = 240 * cos(55°)",
                "240 * 0.573576 ≈ 137.66 ≈ 137.7 km"
              ],
              "answer": "137.7 km",
              "markBreakdown": "M1 for angle 55° with North, M2 for 240 * cos(55°), A1 for 137.7 km"
            }
          ]
        }
      ]
    },
    {
      "id": "15.2",
      "number": "15.2",
      "title": "Trigonometry: SOH CAH TOA & Sine/Cosine rules",
      "type": "lesson",
      "level": "both",
      "steps": [
        {
          "id": "15.2-1",
          "title": "Concept & Intuition: SOH CAH TOA & Non-Right Triangles",
          "type": "concept",
          "level": "both",
          "badgeText": "Concept & Intuition",
          "summary": "Right-angled trigonometry uses the ratios of sides:\n$$\\sin \\theta = \\frac{O}{H}, \\quad \\cos \\theta = \\frac{A}{H}, \\quad \\tan \\theta = \\frac{O}{A}$$\nFor non-right-angled triangles:\n- **Sine Rule**: $\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}$ (when you have an angle-side opposite pair)\n- **Cosine Rule**: $a^2 = b^2 + c^2 - 2bc\\cos A$ (when you have SAS or SSS)\n- **Area of Triangle**: $\\text{Area} = \\frac{1}{2}ab\\sin C$.",
          "analogy": "Trigonometry converts angles into lengths and lengths into angles, bridging geometry and arithmetic.",
          "terms": [
            {
              "term": "SOH CAH TOA",
              "definition": "Mnemonic for sine = opposite/hypotenuse, cosine = adjacent/hypotenuse, tangent = opposite/adjacent.",
              "example": "$\\tan 45^\\circ = 1$"
            },
            {
              "term": "Angle of Elevation",
              "definition": "The angle looking UP from the horizontal ground line.",
              "example": "Angle looking up at top of tower."
            }
          ],
          "rules": [
            {
              "title": "Sine & Cosine Rules",
              "latex": "\\frac{a}{\\sin A} = \\frac{b}{\\sin B}, \\quad a^2 = b^2 + c^2 - 2bc\\cos A",
              "explanation": "Use Sine rule for pairs; Cosine rule for SAS or 3 sides."
            },
            {
              "title": "Area of Triangle",
              "latex": "\\text{Area} = \\frac{1}{2}ab\\sin C",
              "explanation": "Requires two sides and the included angle."
            }
          ],
          "interactiveTool": {
            "type": "pythagoras_trig",
            "title": "Trigonometry & Triangle Solver"
          }
        },
        {
          "id": "15.2-2",
          "title": "Worked Example: Right-Angle & Cosine Rule",
          "type": "worked_example",
          "level": "both",
          "badgeText": "Worked Example",
          "workedProblem": {
            "statement": "(a) In a right triangle, angle $\\theta$ has opposite side 5 cm and adjacent side 12 cm. Find $\\theta$.\n(b) In triangle $ABC$, $b = 7\\text{ cm}, c = 9\\text{ cm}$, and $\\angle A = 48^\\circ$. Calculate side $a$ and the triangle's area.",
            "steps": [
              {
                "stepNumber": 1,
                "instruction": "For (a), use $\\tan \\theta = \\frac{O}{A} = \\frac{5}{12}$.",
                "latex": "\\theta = \\tan^{-1}\\left(\\frac{5}{12}\\right) \\approx 22.6^\\circ",
                "note": "Inverse tan."
              },
              {
                "stepNumber": 2,
                "instruction": "For (b), use Cosine Rule for SAS: $a^2 = b^2 + c^2 - 2bc\\cos A$.",
                "latex": "a^2 = 7^2 + 9^2 - 2(7)(9)\\cos 48^\\circ = 49 + 81 - 126(0.6691)",
                "note": "Cosine rule."
              },
              {
                "stepNumber": 3,
                "instruction": "Evaluate: $a^2 = 130 - 84.31 = 45.69 \\implies a = \\sqrt{45.69} \\approx 6.76\\text{ cm}$.",
                "latex": "a = 6.76\\text{ cm}",
                "note": "Square root."
              },
              {
                "stepNumber": 4,
                "instruction": "Calculate area: $\\frac{1}{2}bc\\sin A = \\frac{1}{2}(7)(9)\\sin 48^\\circ = 31.5(0.7431) \\approx 23.4\\text{ cm}^2$.",
                "latex": "\\text{Area} = 23.4\\text{ cm}^2",
                "note": "Area formula."
              }
            ],
            "finalAnswer": "(a) theta = 22.6°; (b) a = 6.76 cm, Area = 23.4 cm^2"
          }
        },
        {
          "id": "15.2-3",
          "title": "Common Mistake & Pro Tip: Calculator Degree Mode",
          "type": "common_mistakes",
          "level": "both",
          "badgeText": "Common Mistake & Pro Tip",
          "commonMistakes": [
            {
              "mistake": "Having your calculator in Radian (RAD) mode instead of Degree (DEG) mode, producing completely incorrect trig values.",
              "correction": "Always check the top of your calculator screen displays a small 'D' or 'DEG'. $\\sin 30^\\circ$ must equal 0.5.",
              "examinerTip": "When using Cosine Rule for an angle, remember: $\\cos A = \\frac{b^2 + c^2 - a^2}{2bc}$. Always subtract the side OPPOSITE angle $A$.",
              "memoryTrick": "Check your D (Degree mode) before you do Trig!"
            }
          ]
        },
        {
          "id": "15.2-4",
          "title": "Exercise: Level 1 (Basic)",
          "type": "exercise_1",
          "level": "both",
          "badgeText": "Exercise: Level 1 (Basic)",
          "questions": [
            {
              "id": "15.2-q1",
              "number": 1,
              "question": "In a right triangle, hypotenuse is 10 cm and angle is $30^\\circ$. Find the opposite side.",
              "working": [
                "Opposite = Hypotenuse * sin(30°) = 10 * 0.5 = 5 cm"
              ],
              "answer": "5 cm"
            },
            {
              "id": "15.2-q2",
              "number": 2,
              "question": "Calculate the value of $\\cos 60^\\circ$ as an exact fraction.",
              "working": [
                "cos(60°) = 1/2"
              ],
              "answer": "1/2"
            },
            {
              "id": "15.2-q3",
              "number": 3,
              "question": "A right triangle has adjacent 8 m and opposite 6 m. Find the angle $\\theta$ to 1 decimal place.",
              "working": [
                "tan(theta) = 6 / 8 = 0.75 => theta = tan^-1(0.75) ≈ 36.87° ≈ 36.9°"
              ],
              "answer": "36.9°"
            }
          ]
        },
        {
          "id": "15.2-5",
          "title": "Exercise: Level 2 (Real-World Scenarios)",
          "type": "exercise_2",
          "level": "both",
          "badgeText": "Exercise: Level 2 (Real-World)",
          "questions": [
            {
              "id": "15.2-q4",
              "number": 1,
              "question": "A surveyor stands 50 m from the base of a church tower. The angle of elevation to the top is $34^\\circ$. Find the height of the tower.",
              "working": [
                "tan(34°) = h / 50 => h = 50 * tan(34°) ≈ 50 * 0.6745 ≈ 33.7 m"
              ],
              "answer": "33.7 m"
            },
            {
              "id": "15.2-q5",
              "number": 2,
              "question": "A 6-metre ladder leans against a wall making an angle of $72^\\circ$ with the ground. How high up the wall does it reach?",
              "working": [
                "h = 6 * sin(72°) ≈ 6 * 0.9511 ≈ 5.71 m"
              ],
              "answer": "5.71 m"
            },
            {
              "id": "15.2-q6",
              "number": 3,
              "question": "Calculate the area of a triangular garden plot with sides 14 m and 18 m enclosing an angle of $65^\\circ$.",
              "working": [
                "Area = (1/2) * 14 * 18 * sin(65°) = 126 * 0.9063 ≈ 114.2 m^2"
              ],
              "answer": "114.2 m^2"
            }
          ]
        },
        {
          "id": "15.2-6",
          "title": "Exercise: Level 3 (Exam-Style)",
          "type": "exercise_3",
          "level": "both",
          "badgeText": "Exercise: Level 3 (Exam-Style)",
          "questions": [
            {
              "id": "15.2-q7",
              "number": 1,
              "marks": 3,
              "question": "In triangle $ABC$, $AB = 8$ cm, $\\angle B = 40^\\circ$, and $\\angle C = 65^\\circ$.\nCalculate the length of side $AC$ using the Sine Rule. [3 marks]",
              "working": [
                "AC / sin(40°) = 8 / sin(65°)",
                "AC = (8 * sin(40°)) / sin(65°) = (8 * 0.642788) / 0.906308 ≈ 5.67 cm"
              ],
              "answer": "5.67 cm",
              "markBreakdown": "M1 for Sine rule setup, M1 for evaluation, A1 for 5.67 cm"
            },
            {
              "id": "15.2-q8",
              "number": 2,
              "marks": 4,
              "question": "In triangle $PQR$, $PQ = 6$ cm, $QR = 7$ cm, and $PR = 9$ cm.\nCalculate the size of angle $\\angle PQR$, giving your answer to 1 decimal place. [4 marks]",
              "working": [
                "Cosine rule: cos(Q) = (6^2 + 7^2 - 9^2) / (2 * 6 * 7)",
                "cos(Q) = (36 + 49 - 81) / 84 = 4 / 84 ≈ 0.047619",
                "Q = cos^-1(0.047619) ≈ 87.27° ≈ 87.3°"
              ],
              "answer": "87.3°",
              "markBreakdown": "M2 for Cosine rule setup, M1 for cos(Q) = 4/84, A1 for 87.3°"
            },
            {
              "id": "15.2-q9",
              "number": 3,
              "marks": 4,
              "question": "A lighthouse keeper at height 45 m above sea level spots two boats due East. The angles of depression are $18^\\circ$ and $12^\\circ$.\nCalculate the distance between the two boats. [4 marks]",
              "working": [
                "Distance to boat 1: d1 = 45 / tan(18°) ≈ 45 / 0.3249 ≈ 138.5 m",
                "Distance to boat 2: d2 = 45 / tan(12°) ≈ 45 / 0.21256 ≈ 211.7 m",
                "Distance between = 211.7 - 138.5 = 73.2 m"
              ],
              "answer": "73.2 m",
              "markBreakdown": "M1 for d1 = 45/tan(18°), M1 for d2 = 45/tan(12°), M1 for difference, A1 for 73.2 m"
            }
          ]
        }
      ]
    },
    {
      "id": "15.test",
      "number": "Test 15",
      "title": "Chapter 15 Test: Bearings & trigonometry",
      "type": "chapterTest",
      "level": "both",
      "steps": [
        {
          "id": "15.test-1",
          "title": "Chapter 15 Test: Part A (Basic Recall)",
          "type": "test_part_a",
          "level": "both",
          "badgeText": "Test Part A: Core Recall",
          "questions": [
            {
              "id": "15.t-1",
              "number": 1,
              "marks": 2,
              "question": "The bearing of $B$ from $A$ is $075^\\circ$. Find the bearing of $A$ from $B$.",
              "working": [
                "Back bearing = 75 + 180 = 255°"
              ],
              "answer": "255°",
              "markBreakdown": "M1 for 75 + 180, A1 for 255°"
            },
            {
              "id": "15.t-2",
              "number": 2,
              "marks": 2,
              "question": "In a right triangle with hypotenuse 12 cm and angle $45^\\circ$, find the adjacent side.",
              "working": [
                "Adjacent = 12 * cos(45°) = 12 * 0.7071 ≈ 8.49 cm"
              ],
              "answer": "8.49 cm (or 6\\sqrt{2} cm)",
              "markBreakdown": "M1 for 12 * cos(45°), A1 for 8.49 cm"
            },
            {
              "id": "15.t-3",
              "number": 3,
              "marks": 2,
              "question": "State the Sine Rule formula for finding a side $a$.",
              "working": [
                "a / sin(A) = b / sin(B)"
              ],
              "answer": "a / sin(A) = b / sin(B)",
              "markBreakdown": "B2 for correct formula"
            }
          ]
        },
        {
          "id": "15.test-2",
          "title": "Chapter 15 Test: Part B (Real-World Problems)",
          "type": "test_part_b",
          "level": "both",
          "badgeText": "Test Part B: Multi-Step Real-World Application",
          "questions": [
            {
              "id": "15.t-4",
              "number": 1,
              "marks": 3,
              "question": "A ship sails 50 km on bearing $060^\\circ$. How far North has it travelled?",
              "working": [
                "North component = 50 * cos(60°) = 50 * 0.5 = 25 km"
              ],
              "answer": "25 km",
              "markBreakdown": "M2 for 50 * cos(60°), A1 for 25 km"
            },
            {
              "id": "15.t-5",
              "number": 2,
              "marks": 3,
              "question": "A kite is flying on a 40 m string at an angle of elevation of $52^\\circ$. How high is the kite above the ground?",
              "working": [
                "Height = 40 * sin(52°) ≈ 40 * 0.7880 ≈ 31.5 m"
              ],
              "answer": "31.5 m",
              "markBreakdown": "M2 for 40 * sin(52°), A1 for 31.5 m"
            },
            {
              "id": "15.t-6",
              "number": 3,
              "marks": 4,
              "question": "A triangular roof truss has sides of length 7 m and 8 m meeting at an apex angle of $80^\\circ$. Calculate the area of the triangular face.",
              "working": [
                "Area = (1/2) * 7 * 8 * sin(80°) = 28 * 0.9848 ≈ 27.6 m^2"
              ],
              "answer": "27.6 m^2",
              "markBreakdown": "M2 for (1/2)*7*8*sin(80°), A2 for 27.6 m^2"
            }
          ]
        },
        {
          "id": "15.test-3",
          "title": "Chapter 15 Test: Part C (Exam-Style Challenge)",
          "type": "test_part_c",
          "level": "both",
          "badgeText": "Test Part C: Exam Challenge",
          "questions": [
            {
              "id": "15.t-7",
              "number": 1,
              "marks": 5,
              "question": "In triangle $ABC$, $AB = 10$ cm, $BC = 12$ cm, and $AC = 14$ cm.\n(a) Show that $\\angle BAC \\approx 57.1^\\circ$. [3 marks]\n(b) Hence calculate the area of triangle $ABC$. [2 marks]",
              "working": [
                "(a) cos(A) = (10^2 + 14^2 - 12^2) / (2 * 10 * 14) = (100 + 196 - 144) / 280 = 152 / 280 ≈ 0.542857",
                "A = cos^-1(0.542857) ≈ 57.12° ≈ 57.1°",
                "(b) Area = (1/2) * 10 * 14 * sin(57.12°) = 70 * 0.8398 ≈ 58.8 cm^2"
              ],
              "answer": "(a) 57.1°; (b) 58.8 cm^2",
              "markBreakdown": "M2 for Cosine rule setup, A1 for 57.1°; M1 for area formula, A1 for 58.8 cm^2"
            },
            {
              "id": "15.t-8",
              "number": 2,
              "marks": 5,
              "question": "A ship leaves port $P$ and sails 35 km on bearing $040^\\circ$ to point $Q$. It then turns and sails 25 km on bearing $130^\\circ$ to point $R$.\n(a) Show that $\\angle PQR = 90^\\circ$. [2 marks]\n(b) Calculate the distance $PR$. [2 marks]\n(c) Find the bearing of $R$ from $P$. [1 mark]",
              "working": [
                "(a) Back bearing of Q from P is 040 + 180 = 220°. Angle PQR = 220° - 130° = 90°",
                "(b) PR = \\sqrt{35^2 + 25^2} = \\sqrt{1225 + 625} = \\sqrt{1850} ≈ 43.0 km",
                "(c) Angle QPR = tan^-1(25/35) ≈ 35.5°. Bearing = 40 + 35.5 = 075.5° ≈ 076°"
              ],
              "answer": "(a) 90°; (b) 43.0 km; (c) 076° (or 075.5°)",
              "markBreakdown": "M1 for back bearing 220°, A1 for 90°; M1 for Pythagoras, A1 for 43.0 km; B1 for 076°"
            },
            {
              "id": "15.t-9",
              "number": 3,
              "marks": 4,
              "question": "Two observation posts $A$ and $B$ are 500 m apart on flat ground. A hot air balloon is observed at angles of elevation $42^\\circ$ from $A$ and $58^\\circ$ from $B$. The balloon is vertically above a point on the line segment joining $A$ and $B$. Calculate the height of the balloon. [4 marks]",
              "working": [
                "Let height = h. Distance from A: d1 = h / tan(42°). Distance from B: d2 = h / tan(58°)",
                "d1 + d2 = 500 => h(1/tan(42°) + 1/tan(58°)) = 500",
                "1/tan(42°) ≈ 1.1106, 1/tan(58°) ≈ 0.6249 => Sum ≈ 1.7355",
                "h = 500 / 1.7355 ≈ 288.1 m"
              ],
              "answer": "288 m (or 288.1 m)",
              "markBreakdown": "M1 for h/tan(42°), M1 for h/tan(58°), M1 for summing to 500, A1 for 288 m"
            }
          ]
        }
      ]
    }
  ]
};

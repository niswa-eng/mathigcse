import { Unit } from '../types/content';

export const unit11: Unit = {
  "id": 11,
  "title": "Pythagoras' theorem and similar shapes",
  "learningObjectives": [
    "C11.1, E11.1: Pythagoras' theorem in 2D right-angled triangles a^2 + b^2 = c^2",
    "E11.1: Pythagoras' theorem in 3D cuboids and pyramids",
    "C11.2, E11.2: Similar triangles and length scale factors k",
    "E11.3: Area scale factor k^2 and volume scale factor k^3 for similar shapes and solids",
    "C11.4: Congruent shapes and criteria (SSS, SAS, ASA, RHS)"
  ],
  "subtopics": [
    {
      "id": "11.1",
      "number": "11.1",
      "title": "Pythagoras' theorem (2D and 3D)",
      "type": "lesson",
      "level": "both",
      "steps": [
        {
          "id": "11.1-1",
          "title": "Concept & Intuition: Right-Angled Triangles and 3D Diagonals",
          "type": "concept",
          "level": "both",
          "badgeText": "Concept & Intuition",
          "summary": "In any right-angled triangle, the area of the square on the hypotenuse equals the sum of the areas of the squares on the other two sides: $a^2 + b^2 = c^2$. In 3D space, the longest interior diagonal of a cuboid is given by $d = \\sqrt{l^2 + w^2 + h^2}$.",
          "analogy": "Walking directly diagonally across a football field is always shorter than walking along the two boundary edges.",
          "terms": [
            {
              "term": "Hypotenuse",
              "definition": "The longest side of a right-angled triangle, always located opposite the right angle ($90^\\circ$).",
              "example": "$c = \\sqrt{a^2 + b^2}$"
            },
            {
              "term": "3D Space Diagonal",
              "definition": "The line segment connecting two opposite vertices of a 3D box.",
              "example": "$d^2 = l^2 + w^2 + h^2$"
            }
          ],
          "rules": [
            {
              "title": "Pythagoras' Theorem",
              "latex": "c = \\sqrt{a^2 + b^2}, \\quad a = \\sqrt{c^2 - b^2}",
              "explanation": "Add squares to find hypotenuse; subtract squares to find a shorter leg."
            },
            {
              "title": "3D Space Diagonal",
              "latex": "d = \\sqrt{l^2 + w^2 + h^2}",
              "explanation": "Extended Pythagoras across 3 orthogonal dimensions."
            }
          ],
          "interactiveTool": {
            "type": "pythagoras_trig",
            "title": "Pythagoras Interactive Triangle"
          }
        },
        {
          "id": "11.1-2",
          "title": "Worked Example: 2D Leg & 3D Diagonal",
          "type": "worked_example",
          "level": "both",
          "badgeText": "Worked Example",
          "workedProblem": {
            "statement": "(a) A right-angled triangle has hypotenuse 13 cm and one side 5 cm. Find the third side.\n(b) A box measures 12 cm by 9 cm by 8 cm. Find the length of the longest pencil that can fit inside.",
            "steps": [
              {
                "stepNumber": 1,
                "instruction": "To find a shorter leg, subtract the squares.",
                "latex": "a = \\sqrt{13^2 - 5^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12\\text{ cm}",
                "note": "Short side calculation."
              },
              {
                "stepNumber": 2,
                "instruction": "For (b), calculate the 3D space diagonal.",
                "latex": "d = \\sqrt{12^2 + 9^2 + 8^2} = \\sqrt{144 + 81 + 64} = \\sqrt{289}",
                "note": "Sum of three squared dimensions."
              },
              {
                "stepNumber": 3,
                "instruction": "Evaluate square root: $\\sqrt{289} = 17\\text{ cm}$.",
                "latex": "d = 17\\text{ cm}",
                "note": "Longest pencil length."
              }
            ],
            "finalAnswer": "(a) 12 cm; (b) 17 cm"
          }
        },
        {
          "id": "11.1-3",
          "title": "Common Mistake & Pro Tip: Addition vs Subtraction Trap",
          "type": "common_mistakes",
          "level": "both",
          "badgeText": "Common Mistake & Pro Tip",
          "commonMistakes": [
            {
              "mistake": "Adding squares when finding a shorter side: $a = \\sqrt{13^2 + 5^2} = \\sqrt{194} \\approx 13.9$ cm (which is impossible since hypotenuse is 13 cm).",
              "correction": "The hypotenuse is always the longest side. To find any shorter side, always SUBTRACT: $\\sqrt{c^2 - b^2}$.",
              "examinerTip": "Memorise Pythagorean Triples: $(3,4,5)$, $(5,12,13)$, $(8,15,17)$, and $(7,24,25)$. They appear frequently in Cambridge exam papers.",
              "memoryTrick": "Finding Hypotenuse? Add! Finding a Leg? Subtract!"
            }
          ]
        },
        {
          "id": "11.1-4",
          "title": "Exercise: Level 1 (Basic)",
          "type": "exercise_1",
          "level": "both",
          "badgeText": "Exercise: Level 1 (Basic)",
          "questions": [
            {
              "id": "11.1-q1",
              "number": 1,
              "question": "Find the hypotenuse of a right-angled triangle with legs of length 6 cm and 8 cm.",
              "working": [
                "c = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10 cm"
              ],
              "answer": "10 cm"
            },
            {
              "id": "11.1-q2",
              "number": 2,
              "question": "A right triangle has hypotenuse 25 m and base 7 m. Find its vertical height.",
              "working": [
                "h = \\sqrt{25^2 - 7^2} = \\sqrt{625 - 49} = \\sqrt{576} = 24 m"
              ],
              "answer": "24 m"
            },
            {
              "id": "11.1-q3",
              "number": 3,
              "question": "Can a triangle with sides 9 cm, 40 cm, and 41 cm be right-angled? Justify with calculation.",
              "working": [
                "9^2 + 40^2 = 81 + 1600 = 1681",
                "41^2 = 1681. Since a^2 + b^2 = c^2, yes"
              ],
              "answer": "Yes, 9^2 + 40^2 = 41^2 (1681 = 1681)"
            }
          ]
        },
        {
          "id": "11.1-5",
          "title": "Exercise: Level 2 (Real-World Scenarios)",
          "type": "exercise_2",
          "level": "both",
          "badgeText": "Exercise: Level 2 (Real-World)",
          "questions": [
            {
              "id": "11.1-q4",
              "number": 1,
              "question": "A 5-metre ladder leans against a vertical wall with its foot 1.4 metres from the wall. How high up the wall does it reach?",
              "working": [
                "h = \\sqrt{5^2 - 1.4^2} = \\sqrt{25 - 1.96} = \\sqrt{23.04} = 4.8 m"
              ],
              "answer": "4.8 m"
            },
            {
              "id": "11.1-q5",
              "number": 2,
              "question": "A drone flies 6 km North, then 8 km East. How far is it from its takeoff point in a straight line?",
              "working": [
                "d = \\sqrt{6^2 + 8^2} = \\sqrt{100} = 10 km"
              ],
              "answer": "10 km"
            },
            {
              "id": "11.1-q6",
              "number": 3,
              "question": "Calculate the diagonal length of a square screen of side length 20 cm, correct to 1 decimal place.",
              "working": [
                "d = \\sqrt{20^2 + 20^2} = \\sqrt{800} ≈ 28.28 cm ≈ 28.3 cm"
              ],
              "answer": "28.3 cm"
            }
          ]
        },
        {
          "id": "11.1-6",
          "title": "Exercise: Level 3 (Exam-Style)",
          "type": "exercise_3",
          "level": "both",
          "badgeText": "Exercise: Level 3 (Exam-Style)",
          "questions": [
            {
              "id": "11.1-q7",
              "number": 1,
              "marks": 3,
              "question": "Calculate the distance between points $A(-3, 2)$ and $B(5, -4)$. [3 marks]",
              "working": [
                "dx = 5 - (-3) = 8, dy = -4 - 2 = -6",
                "d = \\sqrt{8^2 + (-6)^2} = \\sqrt{64 + 36} = \\sqrt{100} = 10"
              ],
              "answer": "10",
              "markBreakdown": "M1 for dx = 8, dy = -6, M1 for 8^2 + (-6)^2, A1 for 10"
            },
            {
              "id": "11.1-q8",
              "number": 2,
              "marks": 4,
              "question": "A cuboid has length 10 cm, width 6 cm, and height 4 cm. Calculate the length of the 3D space diagonal to 2 decimal places. [4 marks]",
              "working": [
                "d^2 = 10^2 + 6^2 + 4^2 = 100 + 36 + 16 = 152",
                "d = \\sqrt{152} ≈ 12.3288 ≈ 12.33 cm"
              ],
              "answer": "12.33 cm",
              "markBreakdown": "M2 for 10^2 + 6^2 + 4^2, M1 for \\sqrt{152}, A1 for 12.33 cm"
            },
            {
              "id": "11.1-q9",
              "number": 3,
              "marks": 4,
              "question": "An isosceles triangle has base 16 cm and equal sides of length 17 cm. Work out the area of the triangle. [4 marks]",
              "working": [
                "Height splits base into two 8 cm halves",
                "h = \\sqrt{17^2 - 8^2} = \\sqrt{289 - 64} = \\sqrt{225} = 15 cm",
                "Area = (1/2) * 16 * 15 = 120 cm^2"
              ],
              "answer": "120 cm^2",
              "markBreakdown": "M1 for base half = 8, M2 for h = 15 cm, A1 for Area = 120 cm^2"
            }
          ]
        }
      ]
    },
    {
      "id": "11.2",
      "number": "11.2",
      "title": "Similar shapes & scale factors",
      "type": "lesson",
      "level": "both",
      "steps": [
        {
          "id": "11.2-1",
          "title": "Concept & Intuition: Length, Area (k^2), and Volume (k^3)",
          "type": "concept",
          "level": "both",
          "badgeText": "Concept & Intuition",
          "summary": "Two shapes are mathematically similar if all corresponding angles are equal and corresponding sides are in constant ratio $k$. When length increases by linear factor $k$, surface area scales by $k^2$ and volume/mass scales by $k^3$.",
          "analogy": "Doubling the dimensions of a photo ($k = 2$) quadruples the paper area ($2^2 = 4$) and multiplies the weight of an album ($2^3 = 8$) if scaled in 3D.",
          "terms": [
            {
              "term": "Linear Scale Factor (k)",
              "definition": "Ratio of corresponding lengths: $k = \\frac{\\text{length}_2}{\\text{length}_1}$.",
              "example": "Enlarging 5 cm to 15 cm gives $k = 3$."
            },
            {
              "term": "Area Factor (k^2)",
              "definition": "Ratio of areas: $\\frac{A_2}{A_1} = k^2$.",
              "example": "If $k = 3$, area increases by $3^2 = 9$."
            },
            {
              "term": "Volume Factor (k^3)",
              "definition": "Ratio of volumes: $\\frac{V_2}{V_1} = k^3$.",
              "example": "If $k = 3$, volume increases by $3^3 = 27$."
            }
          ],
          "rules": [
            {
              "title": "Similarity Scale Ratios",
              "latex": "L_2/L_1 = k, \\quad A_2/A_1 = k^2, \\quad V_2/V_1 = k^3",
              "explanation": "Always find linear factor $k$ first by taking square roots of area ratios or cube roots of volume ratios."
            }
          ]
        },
        {
          "id": "11.2-2",
          "title": "Worked Example: Area and Volume Scale Factors",
          "type": "worked_example",
          "level": "both",
          "badgeText": "Worked Example",
          "workedProblem": {
            "statement": "Two geometrically similar bottles have heights 12 cm and 18 cm.\n(a) If the smaller bottle has a label area of $40\\text{ cm}^2$, find the label area of the larger bottle.\n(b) If the larger bottle holds $675\\text{ ml}$, find the capacity of the smaller bottle.",
            "steps": [
              {
                "stepNumber": 1,
                "instruction": "Find linear scale factor $k = \\frac{18}{12} = 1.5 = \\frac{3}{2}$.",
                "latex": "k = 1.5",
                "note": "Linear factor."
              },
              {
                "stepNumber": 2,
                "instruction": "Area scale factor is $k^2 = (1.5)^2 = 2.25$.",
                "latex": "\\text{Area} = 40 \\times 2.25 = 90\\text{ cm}^2",
                "note": "Multiply area by $k^2$."
              },
              {
                "stepNumber": 3,
                "instruction": "Volume scale factor is $k^3 = (1.5)^3 = 3.375$.",
                "latex": "\\text{Capacity} = \\frac{675}{3.375} = 200\\text{ ml}",
                "note": "Divide volume by $k^3$."
              }
            ],
            "finalAnswer": "(a) 90 cm^2; (b) 200 ml"
          }
        },
        {
          "id": "11.2-3",
          "title": "Common Mistake & Pro Tip: The Direct Area-Volume Jump",
          "type": "common_mistakes",
          "level": "both",
          "badgeText": "Common Mistake & Pro Tip",
          "commonMistakes": [
            {
              "mistake": "Multiplying volume by the area ratio or linear factor instead of $k^3$.",
              "correction": "Never jump directly from area to volume! Convert Area $\\to k = \\sqrt{\\text{Area ratio}} \\to$ Volume $= k^3$.",
              "examinerTip": "If given masses of objects made from identical material, treat the mass ratio exactly as a volume ratio ($k^3$).",
              "memoryTrick": "Length: $k$, Area: $k^2$, Volume: $k^3$."
            }
          ]
        },
        {
          "id": "11.2-4",
          "title": "Exercise: Level 1 (Basic)",
          "type": "exercise_1",
          "level": "both",
          "badgeText": "Exercise: Level 1 (Basic)",
          "questions": [
            {
              "id": "11.2-q1",
              "number": 1,
              "question": "The linear scale factor between two similar shapes is 3. What is the ratio of their areas?",
              "working": [
                "Area ratio = k^2 = 3^2 = 9 (or 1 : 9)"
              ],
              "answer": "9 (or 1 : 9)"
            },
            {
              "id": "11.2-q2",
              "number": 2,
              "question": "The linear scale factor between two similar solid cubes is 2. What is the ratio of their volumes?",
              "working": [
                "Volume ratio = k^3 = 2^3 = 8 (or 1 : 8)"
              ],
              "answer": "8 (or 1 : 8)"
            },
            {
              "id": "11.2-q3",
              "number": 3,
              "question": "Two similar triangles have areas $25\\text{ cm}^2$ and $100\\text{ cm}^2$. What is the linear scale factor?",
              "working": [
                "k^2 = 100 / 25 = 4 => k = \\sqrt{4} = 2"
              ],
              "answer": "2"
            }
          ]
        },
        {
          "id": "11.2-5",
          "title": "Exercise: Level 2 (Real-World Scenarios)",
          "type": "exercise_2",
          "level": "both",
          "badgeText": "Exercise: Level 2 (Real-World)",
          "questions": [
            {
              "id": "11.2-q4",
              "number": 1,
              "question": "A bronze statue is 2 m tall and weighs 400 kg. A miniature replica made of the exact same bronze is 20 cm tall. What is its mass?",
              "working": [
                "k = 0.20 / 2 = 0.1",
                "Mass ratio = k^3 = 0.1^3 = 0.001",
                "Mass = 400 * 0.001 = 0.4 kg (400 g)"
              ],
              "answer": "0.4 kg (or 400 g)"
            },
            {
              "id": "11.2-q5",
              "number": 2,
              "question": "A small coffee cup has height 8 cm and holds 250 ml. A similar large cup has height 12 cm. How many millilitres does the large cup hold?",
              "working": [
                "k = 12 / 8 = 1.5 => k^3 = 1.5^3 = 3.375",
                "Capacity = 250 * 3.375 = 843.75 ml"
              ],
              "answer": "843.75 ml (or 844 ml)"
            },
            {
              "id": "11.2-q6",
              "number": 3,
              "question": "A vertical pole of height 2 m casts a shadow of 3 m. At the same time, a tree casts an 18 m shadow. Find the height of the tree.",
              "working": [
                "Scale factor = 18 / 3 = 6",
                "Tree height = 2 * 6 = 12 m"
              ],
              "answer": "12 m"
            }
          ]
        },
        {
          "id": "11.2-6",
          "title": "Exercise: Level 3 (Exam-Style)",
          "type": "exercise_3",
          "level": "both",
          "badgeText": "Exercise: Level 3 (Exam-Style)",
          "questions": [
            {
              "id": "11.2-q7",
              "number": 1,
              "marks": 3,
              "question": "Two similar cones have volumes $64\\pi\\text{ cm}^3$ and $125\\pi\\text{ cm}^3$. The base radius of the smaller cone is 6 cm. Calculate the base radius of the larger cone. [3 marks]",
              "working": [
                "Volume ratio = 125/64",
                "k = (125/64)^(1/3) = 5/4 = 1.25",
                "Radius = 6 * 1.25 = 7.5 cm"
              ],
              "answer": "7.5 cm",
              "markBreakdown": "M1 for volume ratio, M1 for k = 1.25, A1 for 7.5 cm"
            },
            {
              "id": "11.2-q8",
              "number": 2,
              "marks": 4,
              "question": "Solid A and Solid B are similar. The surface areas are $96\\text{ cm}^2$ and $216\\text{ cm}^2$. The mass of Solid A is 640 g. Work out the mass of Solid B. [4 marks]",
              "working": [
                "Area ratio = 216 / 96 = 9/4 = 2.25",
                "k = \\sqrt{2.25} = 1.5 = 3/2",
                "Mass ratio = k^3 = 27/8",
                "Mass B = 640 * 27 / 8 = 2160 g"
              ],
              "answer": "2160 g (or 2.16 kg)",
              "markBreakdown": "M1 for area ratio 9/4, M1 for k = 1.5, M1 for k^3 = 27/8, A1 for 2160 g"
            },
            {
              "id": "11.2-q9",
              "number": 3,
              "marks": 4,
              "question": "A pyramid of height $h$ has volume $V$. A plane parallel to the base slices the pyramid at height $\\frac{1}{3}h$ from the apex. Express the volume of the small top pyramid and the bottom frustum in terms of $V$. [4 marks]",
              "working": [
                "Scale factor for top pyramid = 1/3",
                "Volume of top pyramid = (1/3)^3 * V = 1/27 V",
                "Volume of frustum = V - 1/27 V = 26/27 V"
              ],
              "answer": "Top pyramid = 1/27 V, Frustum = 26/27 V",
              "markBreakdown": "M1 for k = 1/3, M2 for (1/3)^3 = 1/27, A1 for Top = 1/27 V and Frustum = 26/27 V"
            }
          ]
        }
      ]
    },
    {
      "id": "11.test",
      "number": "Test 11",
      "title": "Chapter 11 Test: Pythagoras & similarity",
      "type": "chapterTest",
      "level": "both",
      "steps": [
        {
          "id": "11.test-1",
          "title": "Chapter 11 Test: Part A (Basic Recall)",
          "type": "test_part_a",
          "level": "both",
          "badgeText": "Test Part A: Core Recall",
          "questions": [
            {
              "id": "11.t-1",
              "number": 1,
              "marks": 2,
              "question": "Calculate the hypotenuse of a right-angled triangle with sides 9 cm and 12 cm.",
              "working": [
                "\\sqrt{9^2 + 12^2} = \\sqrt{81 + 144} = \\sqrt{225} = 15 cm"
              ],
              "answer": "15 cm",
              "markBreakdown": "M1 for 81 + 144, A1 for 15 cm"
            },
            {
              "id": "11.t-2",
              "number": 2,
              "marks": 2,
              "question": "Two similar shapes have linear scale factor 4. State the scale factor for their areas.",
              "working": [
                "Area factor = 4^2 = 16"
              ],
              "answer": "16",
              "markBreakdown": "M1 for 4^2, A1 for 16"
            },
            {
              "id": "11.t-3",
              "number": 3,
              "marks": 2,
              "question": "Name the 4 triangle congruence criteria.",
              "working": [
                "Side-Side-Side, Side-Angle-Side, Angle-Side-Angle, Right angle-Hypotenuse-Side"
              ],
              "answer": "SSS, SAS, ASA, RHS",
              "markBreakdown": "B2 for all 4"
            }
          ]
        },
        {
          "id": "11.test-2",
          "title": "Chapter 11 Test: Part B (Real-World Problems)",
          "type": "test_part_b",
          "level": "both",
          "badgeText": "Test Part B: Multi-Step Real-World Application",
          "questions": [
            {
              "id": "11.t-4",
              "number": 1,
              "marks": 3,
              "question": "A guy wire is anchored 9 m from the base of a 12 m vertical mast. Find the length of the wire.",
              "working": [
                "L = \\sqrt{9^2 + 12^2} = \\sqrt{81 + 144} = 15 m"
              ],
              "answer": "15 m",
              "markBreakdown": "M2 for \\sqrt{81+144}, A1 for 15 m"
            },
            {
              "id": "11.t-5",
              "number": 2,
              "marks": 3,
              "question": "A model boat has volume $50\\text{ cm}^3$. The actual boat has length 20 times that of the model. Calculate the actual volume in cubic metres.",
              "working": [
                "k = 20 => k^3 = 8000",
                "Volume = 50 * 8000 = 400000 cm^3",
                "In m^3: 400000 / 1000000 = 0.4 m^3"
              ],
              "answer": "0.4 m^3",
              "markBreakdown": "M1 for 20^3 = 8000, M1 for 400000 cm^3, A1 for 0.4 m^3"
            },
            {
              "id": "11.t-6",
              "number": 3,
              "marks": 4,
              "question": "A television screen has aspect ratio $16 : 9$ and a 50-inch diagonal. Find the width and height to the nearest inch.",
              "working": [
                "(16x)^2 + (9x)^2 = 50^2 => 256x^2 + 81x^2 = 337x^2 = 2500",
                "x^2 = 7.418 => x ≈ 2.724",
                "Width = 16(2.724) ≈ 44 in; Height = 9(2.724) ≈ 25 in"
              ],
              "answer": "Width = 44 in, Height = 25 in",
              "markBreakdown": "M1 for (16x)^2 + (9x)^2 = 2500, M1 for x ≈ 2.724, A1 for Width = 44 in, A1 for Height = 25 in"
            }
          ]
        },
        {
          "id": "11.test-3",
          "title": "Chapter 11 Test: Part C (Exam-Style Challenge)",
          "type": "test_part_c",
          "level": "both",
          "badgeText": "Test Part C: Exam Challenge",
          "questions": [
            {
              "id": "11.t-7",
              "number": 1,
              "marks": 5,
              "question": "A pyramid has a rectangular base $ABCD$ (8 cm by 6 cm) and apex $V$ directly above centre $M$. Slant edge $VA = 13\\text{ cm}$.\n(a) Show that diagonal $AC = 10\\text{ cm}$. [2 marks]\n(b) Calculate the vertical height $VM$. [3 marks]",
              "working": [
                "(a) AC = \\sqrt{8^2 + 6^2} = \\sqrt{64 + 36} = 10 cm",
                "(b) AM = 10 / 2 = 5 cm. VM = \\sqrt{13^2 - 5^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12 cm"
              ],
              "answer": "(a) AC = 10 cm; (b) VM = 12 cm",
              "markBreakdown": "M1 for \\sqrt{64+36}, A1 for 10 cm; M1 for AM = 5 cm, M1 for \\sqrt{169-25}, A1 for 12 cm"
            },
            {
              "id": "11.t-8",
              "number": 2,
              "marks": 5,
              "question": "Two similar buckets hold 5 litres and 40 litres.\n(a) Work out the ratio of their heights in the form $1 : n$. [2 marks]\n(b) The smaller bucket has surface area $600\\text{ cm}^2$. Find the surface area of the larger bucket. [3 marks]",
              "working": [
                "(a) Volume ratio = 40/5 = 8 => k = 8^(1/3) = 2 => Ratio 1 : 2",
                "(b) Area ratio = 2^2 = 4 => Area = 600 * 4 = 2400 cm^2"
              ],
              "answer": "(a) 1 : 2; (b) 2400 cm^2",
              "markBreakdown": "M1 for 8^(1/3) = 2, A1 for 1 : 2; M1 for 2^2 = 4, M1 for 600 * 4, A1 for 2400 cm^2"
            },
            {
              "id": "11.t-9",
              "number": 3,
              "marks": 4,
              "question": "A right triangle has sides $x$ cm, $(x + 7)$ cm, and hypotenuse $(x + 8)$ cm. Form an equation in $x$ and solve it to find the sides. [4 marks]",
              "working": [
                "x^2 + (x + 7)^2 = (x + 8)^2",
                "x^2 + x^2 + 14x + 49 = x^2 + 16x + 64 => x^2 - 2x - 15 = 0",
                "(x - 5)(x + 3) = 0 => x = 5 cm. Sides: 5 cm, 12 cm, 13 cm"
              ],
              "answer": "5 cm, 12 cm, 13 cm",
              "markBreakdown": "M1 for Pythagoras equation, M1 for x^2 - 2x - 15 = 0, M1 for x = 5, A1 for 5, 12, 13 cm"
            }
          ]
        }
      ]
    }
  ]
};

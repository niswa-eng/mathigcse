import { Unit } from '../types/content';

export const unit19: Unit = {
  "id": 19,
  "title": "Symmetry",
  "learningObjectives": [
    "C19.1, E19.1: Line symmetry (reflection axes) and rotational symmetry (order of symmetry) in 2D shapes",
    "C19.2, E19.2: Planes of symmetry in 3D solids (cubes, cuboids, prisms, pyramids)",
    "E19.3: Symmetry properties of circles, chords, tangents, and cyclic quadrilaterals"
  ],
  "subtopics": [
    {
      "id": "19.1",
      "number": "19.1",
      "title": "Line and rotational symmetry in 2D",
      "type": "lesson",
      "level": "core",
      "steps": [
        {
          "id": "19.1-1",
          "title": "Concept & Intuition: Mirror Lines & Order of Rotation",
          "type": "concept",
          "level": "core",
          "badgeText": "Concept & Intuition",
          "summary": "- **Line Symmetry (Reflection)**: A line dividing a shape into two congruent halves that match exactly when folded.\n- **Rotational Symmetry**: The number of times a shape looks identical to its original position during one full $360^\\circ$ rotation.\n- An order of 1 means the shape only matches once at $360^\\circ$ (often called 'no rotational symmetry').",
          "analogy": "A fidget spinner or ceiling fan: rotating it by equal fractional turns leaves the blades looking completely unchanged.",
          "terms": [
            {
              "term": "Order of Rotational Symmetry",
              "definition": "The count of matching orientations in one full turn of $360^\\circ$.",
              "example": "Equilateral triangle = 3; Rectangle = 2; Square = 4."
            },
            {
              "term": "Line of Symmetry",
              "definition": "A mirror axis: folding the shape along this line brings the two halves into perfect coincidence.",
              "example": "Isosceles triangle has 1 line; circle has infinitely many."
            }
          ],
          "rules": [
            {
              "title": "Regular Polygons Symmetry Rule",
              "explanation": "Any regular polygon with $n$ sides has exactly $n$ lines of symmetry and order of rotational symmetry $n$."
            }
          ]
        },
        {
          "id": "19.1-2",
          "title": "Worked Example: Symmetry of Common Polygons",
          "type": "worked_example",
          "level": "core",
          "badgeText": "Worked Example",
          "workedProblem": {
            "statement": "For each of the following shapes, state (i) the number of lines of symmetry and (ii) the order of rotational symmetry:\n(a) Parallelogram\n(b) Regular hexagon\n(c) Rhombus",
            "steps": [
              {
                "stepNumber": 1,
                "instruction": "For a parallelogram (non-rhombus): folding along any line does not align vertices. Lines = 0. Rotating $180^\\circ$ and $360^\\circ$ matches: Order = 2.",
                "latex": "\\text{Lines: } 0, \\quad \\text{Rotational: } 2",
                "note": "Parallelogram."
              },
              {
                "stepNumber": 2,
                "instruction": "For a regular hexagon: 6 sides $\\implies$ 6 lines of symmetry (3 through opposite vertices, 3 through opposite midpoints) and order 6.",
                "latex": "\\text{Lines: } 6, \\quad \\text{Rotational: } 6",
                "note": "Regular polygon rule."
              },
              {
                "stepNumber": 3,
                "instruction": "For a rhombus: diagonals are perpendicular mirror lines (2 lines). Rotates onto itself every $180^\\circ$ (order 2).",
                "latex": "\\text{Lines: } 2, \\quad \\text{Rotational: } 2",
                "note": "Rhombus."
              }
            ],
            "finalAnswer": "(a) Lines: 0, Order: 2; (b) Lines: 6, Order: 6; (c) Lines: 2, Order: 2"
          }
        },
        {
          "id": "19.1-3",
          "title": "Common Mistake & Pro Tip: Parallelogram Diagonal Trap",
          "type": "common_mistakes",
          "level": "core",
          "badgeText": "Common Mistake & Pro Tip",
          "commonMistakes": [
            {
              "mistake": "Assuming the diagonal of a general parallelogram is a line of symmetry.",
              "correction": "If you fold a paper parallelogram along its diagonal, the opposite corners do not match up! A general parallelogram has ZERO lines of symmetry.",
              "examinerTip": "Remember that an equilateral triangle has 3 lines of symmetry, an isosceles has 1, and a scalene has 0.",
              "memoryTrick": "Parallelograms have rotational symmetry 2, but ZERO mirror lines!"
            }
          ]
        },
        {
          "id": "19.1-4",
          "title": "Exercise: Level 1 (Basic)",
          "type": "exercise_1",
          "level": "core",
          "badgeText": "Exercise: Level 1 (Basic)",
          "questions": [
            {
              "id": "19.1-q1",
              "number": 1,
              "question": "State the number of lines of symmetry and the order of rotational symmetry of a square.",
              "working": [
                "Square: 4 lines of symmetry, order of rotational symmetry = 4"
              ],
              "answer": "4 lines of symmetry, rotational order 4"
            },
            {
              "id": "19.1-q2",
              "number": 2,
              "question": "State the number of lines of symmetry and the order of rotational symmetry of an isosceles trapezium.",
              "working": [
                "1 vertical line of symmetry; only matches at 360° (order 1)"
              ],
              "answer": "1 line of symmetry, rotational order 1"
            },
            {
              "id": "19.1-q3",
              "number": 3,
              "question": "A regular octagon has how many lines of symmetry?",
              "working": [
                "Regular n-gon has n lines of symmetry. 8 sides => 8 lines"
              ],
              "answer": "8 lines of symmetry"
            }
          ]
        },
        {
          "id": "19.1-5",
          "title": "Exercise: Level 2 (Real-World Scenarios)",
          "type": "exercise_2",
          "level": "core",
          "badgeText": "Exercise: Level 2 (Real-World)",
          "questions": [
            {
              "id": "19.1-q4",
              "number": 1,
              "question": "A company logo is shaped like a 5-pointed regular star. State its number of lines of symmetry and its order of rotational symmetry.",
              "working": [
                "5 symmetry lines (through each point), rotates into itself 5 times => Order 5"
              ],
              "answer": "5 lines of symmetry, rotational order 5"
            },
            {
              "id": "19.1-q5",
              "number": 2,
              "question": "A road sign is an equilateral triangle with an exclamation mark inside. What symmetry does the sign have?",
              "working": [
                "The exclamation mark breaks rotational symmetry. It only has 1 vertical line of symmetry, rotational order 1."
              ],
              "answer": "1 line of symmetry, rotational order 1"
            },
            {
              "id": "19.1-q6",
              "number": 3,
              "question": "A ceiling fan has 4 symmetrically spaced identical blades. What is the angle of rotation between successive matching positions?",
              "working": [
                "Angle = 360° / 4 = 90°"
              ],
              "answer": "90°"
            }
          ]
        },
        {
          "id": "19.1-6",
          "title": "Exercise: Level 3 (Exam-Style)",
          "type": "exercise_3",
          "level": "core",
          "badgeText": "Exercise: Level 3 (Exam-Style)",
          "questions": [
            {
              "id": "19.1-q7",
              "number": 1,
              "marks": 2,
              "question": "A quadrilateral has rotational symmetry of order 2 and no lines of symmetry. Name the quadrilateral. [2 marks]",
              "working": [
                "Parallelogram has order 2 and 0 lines of symmetry"
              ],
              "answer": "Parallelogram",
              "markBreakdown": "B2 for Parallelogram"
            },
            {
              "id": "19.1-q8",
              "number": 2,
              "marks": 2,
              "question": "A shape has exactly 2 lines of symmetry and rotational symmetry of order 2. Name two different quadrilaterals that satisfy this. [2 marks]",
              "working": [
                "Rectangle and Rhombus both have 2 lines and order 2"
              ],
              "answer": "Rectangle and Rhombus",
              "markBreakdown": "B1 for Rectangle, B1 for Rhombus"
            },
            {
              "id": "19.1-q9",
              "number": 3,
              "marks": 3,
              "question": "On a $3 \\times 3$ grid of 9 small squares, 3 squares are shaded. How many more squares must be shaded so that the grid has rotational symmetry of order 4? [3 marks]",
              "working": [
                "Order 4 requires shading in 4-fold orbits. Corners must be shaded in groups of 4; edge centers in groups of 4; center square is 1. If 3 corners are shaded, shading 1 more corner gives 4 corners."
              ],
              "answer": "1 square (or 5 squares depending on pattern)",
              "markBreakdown": "M1 for identifying 4-fold orbits, M1 for corner/edge symmetry, A1 for correct count"
            }
          ]
        }
      ]
    },
    {
      "id": "19.2",
      "number": "19.2",
      "title": "3D planes of symmetry & circle properties",
      "type": "lesson",
      "level": "extended",
      "steps": [
        {
          "id": "19.2-1",
          "title": "Concept & Intuition: 3D Planes of Symmetry",
          "type": "concept",
          "level": "extended",
          "badgeText": "Concept & Intuition",
          "summary": "- A **plane of symmetry** cuts a 3D solid into two congruent halves that are mirror images across the plane.\n- A **cuboid** (with 3 unequal dimensions) has **3 planes of symmetry** (parallel to each face).\n- A **cube** has **9 planes of symmetry** (3 parallel to faces, 6 diagonal planes connecting opposite edges).\n- A square-based pyramid has **4 planes of symmetry** (2 vertical planes bisecting opposite base edges, 2 diagonal planes through apex and opposite corners).",
          "analogy": "Like slicing a block of cheese: a plane of symmetry is a single flat knife cut that produces two identical halves.",
          "terms": [
            {
              "term": "Plane of Symmetry",
              "definition": "A flat 2D plane cutting a 3D solid into two halves that are mirror images.",
              "example": "A sphere has an infinite number of planes of symmetry."
            },
            {
              "term": "Cyclic Quadrilateral",
              "definition": "A 4-sided polygon whose four vertices all lie on a circle's circumference. Opposite angles sum to $180^\\circ$.",
              "example": "$A + C = 180^\\circ, B + D = 180^\\circ$."
            }
          ],
          "rules": [
            {
              "title": "Cube Symmetry Count",
              "explanation": "Cube = 9 planes of symmetry (3 face-parallel + 6 edge-diagonals)."
            },
            {
              "title": "Cuboid Symmetry Count",
              "explanation": "Cuboid (all dimensions unequal) = 3 planes of symmetry."
            }
          ]
        },
        {
          "id": "19.2-2",
          "title": "Worked Example: Planes of Symmetry in Prisms & Pyramids",
          "type": "worked_example",
          "level": "extended",
          "badgeText": "Worked Example",
          "workedProblem": {
            "statement": "(a) State the number of planes of symmetry in a right triangular prism whose cross-section is an equilateral triangle.\n(b) State the number of planes of symmetry in a cylinder of height $h$ and radius $r$.",
            "steps": [
              {
                "stepNumber": 1,
                "instruction": "For the triangular prism: 1 plane cuts halfway along the length parallel to the triangular faces.",
                "latex": "1 \\text{ cross-sectional plane}",
                "note": "Horizontal cut."
              },
              {
                "stepNumber": 2,
                "instruction": "3 vertical planes each pass through a vertex and the midpoint of the opposite base edge.",
                "latex": "3 \\text{ longitudinal planes}",
                "note": "3 vertical cuts."
              },
              {
                "stepNumber": 3,
                "instruction": "Total planes of symmetry for equilateral prism = $1 + 3 = 4$.",
                "latex": "\\text{Total: } 4",
                "note": "Equilateral prism."
              },
              {
                "stepNumber": 4,
                "instruction": "For a cylinder: 1 horizontal plane halfway up, plus infinitely many vertical planes passing through the central axis.",
                "latex": "\\text{Infinite}",
                "note": "Cylinder symmetry."
              }
            ],
            "finalAnswer": "(a) 4 planes of symmetry; (b) Infinitely many"
          }
        },
        {
          "id": "19.2-3",
          "title": "Common Mistake & Pro Tip: Cube vs Cuboid Planes",
          "type": "common_mistakes",
          "level": "extended",
          "badgeText": "Common Mistake & Pro Tip",
          "commonMistakes": [
            {
              "mistake": "Confusing the number of planes of symmetry of a cube (9) with a general cuboid (3).",
              "correction": "A rectangular cuboid with $l \\ne w \\ne h$ does NOT have diagonal planes of symmetry! It only has 3 face-bisecting planes.",
              "examinerTip": "When asked about a square-based pyramid, remember there are 4 planes of symmetry: 2 through the base diagonals, and 2 through opposite side midpoints.",
              "memoryTrick": "Cuboid has 3; Cube adds 6 diagonals = 9."
            }
          ]
        },
        {
          "id": "19.2-4",
          "title": "Exercise: Level 1 (Basic)",
          "type": "exercise_1",
          "level": "extended",
          "badgeText": "Exercise: Level 1 (Basic)",
          "questions": [
            {
              "id": "19.2-q1",
              "number": 1,
              "question": "State the number of planes of symmetry of a rectangular cuboid with dimensions 6 cm by 4 cm by 3 cm.",
              "working": [
                "All dimensions unequal => 3 planes of symmetry"
              ],
              "answer": "3 planes of symmetry"
            },
            {
              "id": "19.2-q2",
              "number": 2,
              "question": "How many planes of symmetry does a solid cube have?",
              "working": [
                "3 parallel to faces + 6 diagonal planes = 9"
              ],
              "answer": "9 planes of symmetry"
            },
            {
              "id": "19.2-q3",
              "number": 3,
              "question": "State the number of planes of symmetry of a right square-based pyramid.",
              "working": [
                "2 diagonal planes + 2 edge-midpoint planes = 4"
              ],
              "answer": "4 planes of symmetry"
            }
          ]
        },
        {
          "id": "19.2-5",
          "title": "Exercise: Level 2 (Real-World Scenarios)",
          "type": "exercise_2",
          "level": "extended",
          "badgeText": "Exercise: Level 2 (Real-World)",
          "questions": [
            {
              "id": "19.2-q4",
              "number": 1,
              "question": "A cereal box measures 20 cm by 30 cm by 8 cm. A baker wants to slice it in half with one straight flat cut so both halves are mirror images. How many different orientations of cut are possible?",
              "working": [
                "Number of planes of symmetry of cuboid = 3"
              ],
              "answer": "3 orientations (cuts)"
            },
            {
              "id": "19.2-q5",
              "number": 2,
              "question": "A tent is in the shape of a triangular prism with isosceles triangular cross-section. How many planes of symmetry does it have?",
              "working": [
                "1 vertical plane along length (bisecting isosceles end) + 1 transverse plane halfway along length = 2 planes"
              ],
              "answer": "2 planes of symmetry"
            },
            {
              "id": "19.2-q6",
              "number": 3,
              "question": "A circular pizza is cut into 8 equal slices. How many planes of symmetry does the whole 3D pizza have?",
              "working": [
                "1 horizontal plane splitting crust in half + infinitely many vertical cuts (or 8 vertical planes if toppings align)"
              ],
              "answer": "Infinitely many (or 1 horizontal + infinitely many vertical)"
            }
          ]
        },
        {
          "id": "19.2-6",
          "title": "Exercise: Level 3 (Exam-Style)",
          "type": "exercise_3",
          "level": "extended",
          "badgeText": "Exercise: Level 3 (Exam-Style)",
          "questions": [
            {
              "id": "19.2-q7",
              "number": 1,
              "marks": 3,
              "question": "A solid cylinder has radius 5 cm and height 10 cm.\n(a) Write down the number of planes of symmetry. [1 mark]\n(b) Describe the plane of symmetry that is perpendicular to the circular faces. [2 marks]",
              "working": [
                "(a) Infinitely many",
                "(b) Any plane containing the central axis (diameter line) of the cylinder"
              ],
              "answer": "(a) Infinitely many; (b) Any plane passing through the central vertical axis of the cylinder",
              "markBreakdown": "B1 for Infinitely many; M1 for mentioning central axis, A1 for passing through both circular centres"
            },
            {
              "id": "19.2-q8",
              "number": 2,
              "marks": 3,
              "question": "A tetrahedron has 4 faces, each of which is an equilateral triangle.\nState the number of planes of symmetry of this regular tetrahedron. [3 marks]",
              "working": [
                "Each of the 6 edges has 1 plane of symmetry passing through it and bisecting the opposite edge: 6 planes"
              ],
              "answer": "6 planes of symmetry",
              "markBreakdown": "M2 for counting planes per edge, A1 for 6"
            },
            {
              "id": "19.2-q9",
              "number": 3,
              "marks": 3,
              "question": "A cuboid has a square cross-section of 5 cm by 5 cm and height 12 cm.\nWork out the total number of planes of symmetry of this cuboid. [3 marks]",
              "working": [
                "Square ends add 2 diagonal planes to the 3 standard cuboid planes: 3 + 2 = 5 planes"
              ],
              "answer": "5 planes of symmetry",
              "markBreakdown": "M1 for 3 standard planes, M1 for 2 diagonal planes of square base, A1 for 5"
            }
          ]
        }
      ]
    },
    {
      "id": "19.test",
      "number": "Test 19",
      "title": "Chapter 19 Test: Symmetry",
      "type": "chapterTest",
      "level": "both",
      "steps": [
        {
          "id": "19.test-1",
          "title": "Chapter 19 Test: Part A (Basic Recall)",
          "type": "test_part_a",
          "level": "both",
          "badgeText": "Test Part A: Core Recall",
          "questions": [
            {
              "id": "19.t-1",
              "number": 1,
              "marks": 2,
              "question": "State the number of lines of symmetry and order of rotational symmetry of a regular pentagon.",
              "working": [
                "Regular 5-gon has 5 lines and order 5"
              ],
              "answer": "5 lines, rotational order 5",
              "markBreakdown": "B1 for 5 lines, B1 for order 5"
            },
            {
              "id": "19.t-2",
              "number": 2,
              "marks": 2,
              "question": "How many planes of symmetry does a standard brick (cuboid with 3 unequal sides) have?",
              "working": [
                "3 planes of symmetry"
              ],
              "answer": "3",
              "markBreakdown": "B2 for 3"
            },
            {
              "id": "19.t-3",
              "number": 3,
              "marks": 2,
              "question": "State the order of rotational symmetry of a rhombus.",
              "working": [
                "A rhombus has order 2"
              ],
              "answer": "2",
              "markBreakdown": "B2 for 2"
            }
          ]
        },
        {
          "id": "19.test-2",
          "title": "Chapter 19 Test: Part B (Real-World Problems)",
          "type": "test_part_b",
          "level": "both",
          "badgeText": "Test Part B: Multi-Step Real-World Application",
          "questions": [
            {
              "id": "19.t-4",
              "number": 1,
              "marks": 3,
              "question": "A decorative tile is a square with an equilateral triangle drawn on each of its 4 edges pointing outwards. Find the number of lines of symmetry and rotational order.",
              "working": [
                "Forms an 8-sided symmetrical star: 4 lines of symmetry (2 edge-bisectors, 2 diagonals), order 4"
              ],
              "answer": "4 lines of symmetry, rotational order 4",
              "markBreakdown": "M1 for 4 lines, M1 for order 4, A1 for complete answer"
            },
            {
              "id": "19.t-5",
              "number": 2,
              "marks": 3,
              "question": "A highway stop sign is a regular octagon. Calculate the angle through which it turns to reach its first matching position.",
              "working": [
                "Angle = 360° / 8 = 45°"
              ],
              "answer": "45°",
              "markBreakdown": "M2 for 360 / 8, A1 for 45°"
            },
            {
              "id": "19.t-6",
              "number": 3,
              "marks": 4,
              "question": "A solid wooden prism has an equilateral triangle base of side 6 cm and height 15 cm. Explain how its 4 planes of symmetry are positioned.",
              "working": [
                "1 plane bisects height at 7.5 cm parallel to triangular ends. 3 planes are vertical, each passing through one vertex of the triangle and bisecting the opposite side."
              ],
              "answer": "1 horizontal plane bisecting the length at 7.5 cm, and 3 vertical planes passing through each vertex and the opposite edge midpoint",
              "markBreakdown": "B2 for horizontal plane, B2 for 3 vertical planes"
            }
          ]
        },
        {
          "id": "19.test-3",
          "title": "Chapter 19 Test: Part C (Exam-Style Challenge)",
          "type": "test_part_c",
          "level": "both",
          "badgeText": "Test Part C: Exam Challenge",
          "questions": [
            {
              "id": "19.t-7",
              "number": 1,
              "marks": 4,
              "question": "A cube has side 10 cm. Find the area of one of its diagonal planes of symmetry. [4 marks]",
              "working": [
                "Face diagonal = \\sqrt{10^2 + 10^2} = \\sqrt{200} = 10\\sqrt{2} ≈ 14.14 cm",
                "Diagonal plane is a rectangle of width 10 cm and length 10\\sqrt{2} cm",
                "Area = 10 * 10\\sqrt{2} = 100\\sqrt{2} ≈ 141.4 cm^2"
              ],
              "answer": "100\\sqrt{2} cm^2 (or 141 cm^2)",
              "markBreakdown": "M2 for face diagonal 10\\sqrt{2}, M1 for Area = 10 * 10\\sqrt{2}, A1 for 141.4 cm^2"
            },
            {
              "id": "19.t-8",
              "number": 2,
              "marks": 5,
              "question": "A regular hexagon has vertices $A, B, C, D, E, F$. Triangle $ACE$ is shaded.\n(a) Find the number of lines of symmetry of the shaded figure. [2 marks]\n(b) Find the order of rotational symmetry of the shaded figure. [2 marks]\n(c) What fraction of the hexagon is shaded? [1 mark]",
              "working": [
                "(a) Triangle ACE is equilateral: 3 lines of symmetry",
                "(b) Rotational symmetry order = 3",
                "(c) Hexagon consists of 6 identical equilateral triangles; ACE has area equal to 3 of them => 3/6 = 1/2"
              ],
              "answer": "(a) 3 lines; (b) Order 3; (c) 1/2 (or 50%)",
              "markBreakdown": "B2 for 3 lines; B2 for Order 3; B1 for 1/2"
            },
            {
              "id": "19.t-9",
              "number": 3,
              "marks": 4,
              "question": "A rectangular cuboid has dimensions $x$ cm, $x$ cm, and $y$ cm ($x \\ne y$).\nState the number of planes of symmetry. Explain why this differs from a cube. [4 marks]",
              "working": [
                "5 planes of symmetry (3 standard planes + 2 diagonal planes through the square ends)",
                "A cube has 9 planes because all 3 pairs of opposite faces are squares, adding 6 diagonal planes. Here only 1 pair of opposite faces is square, adding only 2 diagonal planes."
              ],
              "answer": "5 planes of symmetry; only one pair of faces is square (adding 2 diagonals), whereas a cube has 3 pairs of square faces (adding 6 diagonals)",
              "markBreakdown": "B2 for 5 planes, B2 for clear explanation comparing square faces"
            }
          ]
        }
      ]
    }
  ]
};

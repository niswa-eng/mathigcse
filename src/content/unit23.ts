import { Unit } from '../types/content';

export const unit23: Unit = {
  "id": 23,
  "title": "Transformations and vectors",
  "learningObjectives": [
    "C23.1, E23.1: Transformations: Reflection, Rotation, Translation (column vector), Enlargement (centre, scale factor k including negative)",
    "C23.2, E23.2: Column vector addition, subtraction, scalar multiplication, and magnitude |v| = sqrt(x^2 + y^2)",
    "E23.3: Geometric vector proofs (collinear points, parallel vectors, ratios)"
  ],
  "subtopics": [
    {
      "id": "23.1",
      "number": "23.1",
      "title": "Transformations: reflect, rotate, translate, enlarge",
      "type": "lesson",
      "level": "both",
      "steps": [
        {
          "id": "23.1-1",
          "title": "Concept & Intuition: The 4 Geometric Transformations",
          "type": "concept",
          "level": "both",
          "badgeText": "Concept & Intuition",
          "summary": "Every transformation changes the position, orientation, or size of a shape:\n- **Translation**: Slide by vector $\\begin{pmatrix} x \\\\ y \\end{pmatrix}$ (top = right/left, bottom = up/down).\n- **Reflection**: Mirror flip across a line of reflection (e.g. $y = x$, $x = 2$, $y$-axis).\n- **Rotation**: Turn defined by Centre $(x, y)$, Angle ($90^\\circ, 180^\\circ$), and Direction (clockwise/anticlockwise).\n- **Enlargement**: Scaled by Centre and Scale Factor $k$. If $k < 0$, the image is inverted on the opposite side of the centre.",
          "analogy": "Computer graphics: panning is translation, mirroring a selfie is reflection, turning your phone is rotation, and zooming in is enlargement.",
          "terms": [
            {
              "term": "Column Vector",
              "definition": "$\\begin{pmatrix} x \\\\ y \\end{pmatrix}$: $x$ represents horizontal shift ($+$ right, $-$ left); $y$ represents vertical shift ($+$ up, $-$ down).",
              "example": "$\\begin{pmatrix} 3 \\\\ -4 \\end{pmatrix}$ shifts 3 right and 4 down."
            },
            {
              "term": "Negative Enlargement",
              "definition": "Enlargement through a centre where ray lines continue through the centre to the opposite side, producing an inverted image.",
              "example": "Scale factor $-2$ produces an upside-down image twice the size."
            }
          ],
          "rules": [
            {
              "title": "Describing Transformations Completely",
              "explanation": "- Translation: must state 'Translation by vector $\\begin{pmatrix} x \\\\ y \\end{pmatrix}$'.\n- Reflection: must state 'Reflection in line $y = \\dots$'.\n- Rotation: must state 'Rotation, [Angle], [Direction], Centre $(x, y)$'.\n- Enlargement: must state 'Enlargement, Scale factor $k$, Centre $(x, y)$'."
            }
          ]
        },
        {
          "id": "23.1-2",
          "title": "Worked Example: Describing & Performing Transformations",
          "type": "worked_example",
          "level": "both",
          "badgeText": "Worked Example",
          "workedProblem": {
            "statement": "(a) Triangle $A$ with vertices $(1, 2), (3, 2), (1, 5)$ is reflected in the line $x = 4$ to give triangle $B$. State the coordinates of triangle $B$.\n(b) Triangle $A$ is rotated $90^\\circ$ clockwise about the origin $(0, 0)$. Find the coordinates of the image.",
            "steps": [
              {
                "stepNumber": 1,
                "instruction": "For (a), the mirror line is vertical at $x = 4$.",
                "latex": "x = 4",
                "note": "Mirror line."
              },
              {
                "stepNumber": 2,
                "instruction": "Distance from $x = 4$: Point $(1, 2)$ is 3 units left $\\implies$ reflects to 3 units right: $(4 + 3, 2) = (7, 2)$.",
                "latex": "(1, 2) \\to (7, 2)",
                "note": "Horizontal reflection."
              },
              {
                "stepNumber": 3,
                "instruction": "Point $(3, 2)$ is 1 unit left $\\implies$ reflects to $(5, 2)$. Point $(1, 5)$ reflects to $(7, 5)$.",
                "latex": "(5, 2) \\text{ and } (7, 5)",
                "note": "Full triangle $B$."
              },
              {
                "stepNumber": 4,
                "instruction": "For (b), $90^\\circ$ clockwise rotation about $(0, 0)$ maps $(x, y) \\to (y, -x)$.",
                "latex": "(1, 2) \\to (2, -1), \\quad (3, 2) \\to (2, -3), \\quad (1, 5) \\to (5, -1)",
                "note": "Clockwise rotation."
              }
            ],
            "finalAnswer": "(a) (7, 2), (5, 2), (7, 5); (b) (2, -1), (2, -3), (5, -1)"
          }
        },
        {
          "id": "23.1-3",
          "title": "Common Mistake & Pro Tip: The Double Transformation Penalty",
          "type": "common_mistakes",
          "level": "both",
          "badgeText": "Common Mistake & Pro Tip",
          "commonMistakes": [
            {
              "mistake": "Describing a transformation using two words (e.g. 'rotated and translated' or 'reflected then shifted').",
              "correction": "Cambridge exam rules state that combining two transformations gives ZERO MARKS immediately. You must describe using ONE single transformation.",
              "examinerTip": "Tracing paper is your best friend in rotation questions! Trace the shape, pin your pencil at the centre, and rotate.",
              "memoryTrick": "Single transformation only: Rotate, Reflect, Translate, OR Enlarge."
            }
          ]
        },
        {
          "id": "23.1-4",
          "title": "Exercise: Level 1 (Basic)",
          "type": "exercise_1",
          "level": "both",
          "badgeText": "Exercise: Level 1 (Basic)",
          "questions": [
            {
              "id": "23.1-q1",
              "number": 1,
              "question": "Point $P(3, 4)$ is translated by vector $\\begin{pmatrix} -2 \\\\ 5 \\end{pmatrix}$. Find the coordinates of image $P'$.",
              "working": [
                "(3 + (-2), 4 + 5) = (1, 9)"
              ],
              "answer": "(1, 9)"
            },
            {
              "id": "23.1-q2",
              "number": 2,
              "question": "Reflect point $(2, 7)$ in the $x$-axis.",
              "working": [
                "Reflection in x-axis keeps x same, negates y => (2, -7)"
              ],
              "answer": "(2, -7)"
            },
            {
              "id": "23.1-q3",
              "number": 3,
              "question": "State the scale factor and centre needed to enlarge a 3 cm square to a 9 cm square with vertices expanding from the origin.",
              "working": [
                "Scale factor = 9 / 3 = 3, Centre = (0, 0)"
              ],
              "answer": "Scale factor 3, Centre (0, 0)"
            }
          ]
        },
        {
          "id": "23.1-5",
          "title": "Exercise: Level 2 (Real-World Scenarios)",
          "type": "exercise_2",
          "level": "both",
          "badgeText": "Exercise: Level 2 (Real-World)",
          "questions": [
            {
              "id": "23.1-q4",
              "number": 1,
              "question": "A video projector projects an image from centre $(0, 0)$ onto a screen with scale factor 5. If a slide corner is at $(4, 3)$, what are the coordinates on the screen?",
              "working": [
                "(5 * 4, 5 * 3) = (20, 15)"
              ],
              "answer": "(20, 15)"
            },
            {
              "id": "23.1-q5",
              "number": 2,
              "question": "A submarine moves 5 km East and 12 km North. Write this displacement as a column vector.",
              "working": [
                "Vector = (5, 12)^T"
              ],
              "answer": "\\begin{pmatrix} 5 \\\\ 12 \\end{pmatrix}"
            },
            {
              "id": "23.1-q6",
              "number": 3,
              "question": "A pinhole camera creates an inverted image with scale factor $-0.5$ through the pinhole at $(0, 0)$. Where does an object tip at $(-6, 10)$ appear?",
              "working": [
                "-0.5 * (-6) = 3; -0.5 * 10 = -5 => (3, -5)"
              ],
              "answer": "(3, -5)"
            }
          ]
        },
        {
          "id": "23.1-6",
          "title": "Exercise: Level 3 (Exam-Style)",
          "type": "exercise_3",
          "level": "both",
          "badgeText": "Exercise: Level 3 (Exam-Style)",
          "questions": [
            {
              "id": "23.1-q7",
              "number": 1,
              "marks": 3,
              "question": "Triangle $T$ has vertices $(1, 1), (3, 1), (1, 4)$. It is enlarged by scale factor $-2$ with centre $(1, 2)$.\nFind the coordinates of the image vertices. [3 marks]",
              "working": [
                "Vector from centre (1, 2) to (1, 1) is (0, -1). Multiply by -2 => (0, 2) => Point = (1, 2) + (0, 2) = (1, 4)",
                "To (3, 1): vector (2, -1) * -2 = (-4, 2) => Point = (1 - 4, 2 + 2) = (-3, 4)",
                "To (1, 4): vector (0, 2) * -2 = (0, -4) => Point = (1, 2 - 4) = (1, -2)"
              ],
              "answer": "(1, 4), (-3, 4), (1, -2)",
              "markBreakdown": "M1 for vectors from centre, M1 for multiplying by -2, A1 for (1, 4), (-3, 4), (1, -2)"
            },
            {
              "id": "23.1-q8",
              "number": 2,
              "marks": 3,
              "question": "Describe fully the single transformation that maps triangle $A$ with vertices $(1, 2), (4, 2), (1, 6)$ onto triangle $B$ with vertices $(-2, 1), (-2, 4), (-6, 1)$. [3 marks]",
              "working": [
                "Rotation 90° anticlockwise (or 270° clockwise) about the origin (0, 0)"
              ],
              "answer": "Rotation, 90° anticlockwise, centre (0, 0)",
              "markBreakdown": "B1 for Rotation, B1 for 90° anticlockwise (or 270° clockwise), B1 for centre (0, 0)"
            },
            {
              "id": "23.1-q9",
              "number": 3,
              "marks": 3,
              "question": "Describe fully the single transformation that maps the line $y = 2x$ onto the line $y = -2x$. [3 marks]",
              "working": [
                "Reflection in the x-axis (or y-axis)"
              ],
              "answer": "Reflection in the x-axis (or y-axis)",
              "markBreakdown": "B1 for Reflection, B2 for line y = 0 (x-axis) or x = 0 (y-axis)"
            }
          ]
        }
      ]
    },
    {
      "id": "23.2",
      "number": "23.2",
      "title": "Vectors: operations, magnitude & geometric proofs",
      "type": "lesson",
      "level": "extended",
      "steps": [
        {
          "id": "23.2-1",
          "title": "Concept & Intuition: Vectors and Geometric Proofs",
          "type": "concept",
          "level": "extended",
          "badgeText": "Concept & Intuition",
          "summary": "A vector has both **magnitude** (length) and **direction**.\n- Magnitude: $|\\mathbf{v}| = \\sqrt{x^2 + y^2}$\n- Parallel vectors: $\\mathbf{a} = k\\mathbf{b}$ (one is a scalar multiple of the other)\n- Collinear points: If $\\vec{AB} = k\\vec{BC}$, then vectors are parallel and share common point $B$, so $A, B, C$ lie on a single straight line.",
          "analogy": "Following directions: walk 4 blocks East and 3 blocks North. Your straight-line displacement is $\\sqrt{4^2 + 3^2} = 5$ blocks North-East.",
          "terms": [
            {
              "term": "Magnitude (|v|)",
              "definition": "Length of vector: $|\\mathbf{v}| = \\sqrt{x^2 + y^2}$.",
              "example": "$\\left|\\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}\\right| = \\sqrt{3^2 + 4^2} = 5$."
            },
            {
              "term": "Collinear",
              "definition": "Points that lie along the exact same straight line.",
              "example": "Proven by showing $\\vec{AB} = k\\vec{BC}$."
            }
          ],
          "rules": [
            {
              "title": "Vector Route Rule",
              "latex": "\\vec{AB} = \\vec{AO} + \\vec{OB} = -\\mathbf{a} + \\mathbf{b} = \\mathbf{b} - \\mathbf{a}",
              "explanation": "Vector from $A$ to $B$ is (end position vector) minus (start position vector)."
            }
          ]
        },
        {
          "id": "23.2-2",
          "title": "Worked Example: Vector Operations & Geometric Proof",
          "type": "worked_example",
          "level": "extended",
          "badgeText": "Worked Example",
          "workedProblem": {
            "statement": "In triangle $OAB$, $\\vec{OA} = \\mathbf{a}$ and $\\vec{OB} = \\mathbf{b}$. Point $M$ is the midpoint of $AB$.\n(a) Express $\\vec{AB}$ in terms of $\\mathbf{a}$ and $\\mathbf{b}$.\n(b) Express the position vector $\\vec{OM}$ in terms of $\\mathbf{a}$ and $\\mathbf{b}$.",
            "steps": [
              {
                "stepNumber": 1,
                "instruction": "Route for $\\vec{AB}$: go from $A$ to $O$, then $O$ to $B$.",
                "latex": "\\vec{AB} = -\\mathbf{a} + \\mathbf{b} = \\mathbf{b} - \\mathbf{a}",
                "note": "Vector subtraction."
              },
              {
                "stepNumber": 2,
                "instruction": "Since $M$ is the midpoint of $AB$, $\\vec{AM} = \\frac{1}{2}\\vec{AB} = \\frac{1}{2}(\\mathbf{b} - \\mathbf{a})$.",
                "latex": "\\vec{AM} = \\frac{1}{2}\\mathbf{b} - \\frac{1}{2}\\mathbf{a}",
                "note": "Halfway along $AB$."
              },
              {
                "stepNumber": 3,
                "instruction": "Route for $\\vec{OM}$: go $O \\to A \\to M$.",
                "latex": "\\vec{OM} = \\vec{OA} + \\vec{AM} = \\mathbf{a} + \\frac{1}{2}(\\mathbf{b} - \\mathbf{a}) = \\frac{1}{2}\\mathbf{a} + \\frac{1}{2}\\mathbf{b}",
                "note": "Average of position vectors."
              }
            ],
            "finalAnswer": "(a) AB = b - a; (b) OM = (1/2)(a + b)"
          }
        },
        {
          "id": "23.2-3",
          "title": "Common Mistake & Pro Tip: Missing Direction Arrows",
          "type": "common_mistakes",
          "level": "extended",
          "badgeText": "Common Mistake & Pro Tip",
          "commonMistakes": [
            {
              "mistake": "Writing $\\vec{AB} = \\mathbf{a} + \\mathbf{b}$ instead of $\\mathbf{b} - \\mathbf{a}$.",
              "correction": "Travelling backwards along vector $\\mathbf{a}$ requires a minus sign: $\\vec{AO} = -\\mathbf{a}$.",
              "examinerTip": "To prove points $P, Q, R$ are collinear, you must state TWO things: (1) $\\vec{PQ}$ is parallel to $\\vec{QR}$ because $\\vec{PQ} = k\\vec{QR}$, and (2) $Q$ is a common point.",
              "memoryTrick": "Destination minus Origin: $\\vec{AB} = \\mathbf{b} - \\mathbf{a}$."
            }
          ]
        },
        {
          "id": "23.2-4",
          "title": "Exercise: Level 1 (Basic)",
          "type": "exercise_1",
          "level": "extended",
          "badgeText": "Exercise: Level 1 (Basic)",
          "questions": [
            {
              "id": "23.2-q1",
              "number": 1,
              "question": "If $\\mathbf{a} = \\begin{pmatrix} 3 \\\\ -1 \\end{pmatrix}$ and $\\mathbf{b} = \\begin{pmatrix} -2 \\\\ 4 \\end{pmatrix}$, work out $2\\mathbf{a} + \\mathbf{b}$.",
              "working": [
                "2(3, -1) + (-2, 4) = (6, -2) + (-2, 4) = (4, 2)"
              ],
              "answer": "\\begin{pmatrix} 4 \\\\ 2 \\end{pmatrix}"
            },
            {
              "id": "23.2-q2",
              "number": 2,
              "question": "Calculate the magnitude of vector $\\mathbf{v} = \\begin{pmatrix} 6 \\\\ -8 \\end{pmatrix}$.",
              "working": [
                "|v| = \\sqrt{6^2 + (-8)^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10"
              ],
              "answer": "10"
            },
            {
              "id": "23.2-q3",
              "number": 3,
              "question": "Which of the following vectors is parallel to $\\begin{pmatrix} 2 \\\\ 5 \\end{pmatrix}$: $\\begin{pmatrix} 4 \\\\ 10 \\end{pmatrix}$ or $\\begin{pmatrix} 5 \\\\ 2 \\end{pmatrix}$?",
              "working": [
                "(4, 10) is 2 * (2, 5), so it is a scalar multiple and parallel"
              ],
              "answer": "\\begin{pmatrix} 4 \\\\ 10 \\end{pmatrix}"
            }
          ]
        },
        {
          "id": "23.2-5",
          "title": "Exercise: Level 2 (Real-World Scenarios)",
          "type": "exercise_2",
          "level": "extended",
          "badgeText": "Exercise: Level 2 (Real-World)",
          "questions": [
            {
              "id": "23.2-q4",
              "number": 1,
              "question": "An aircraft flies with velocity vector $\\mathbf{v} = \\begin{pmatrix} 120 \\\\ 50 \\end{pmatrix}$ km/h. What is the speed of the aircraft?",
              "working": [
                "Speed = |v| = \\sqrt{120^2 + 50^2} = \\sqrt{14400 + 2500} = \\sqrt{16900} = 130 km/h"
              ],
              "answer": "130 km/h"
            },
            {
              "id": "23.2-q5",
              "number": 2,
              "question": "A river current flows with vector $\\begin{pmatrix} 3 \\\\ 0 \\end{pmatrix}$ m/s. A swimmer swims with vector $\\begin{pmatrix} 0 \\\\ 4 \\end{pmatrix}$ m/s relative to water. Find the swimmer's resultant speed.",
              "working": [
                "Resultant vector = (3, 4). Magnitude = \\sqrt{3^2 + 4^2} = 5 m/s"
              ],
              "answer": "5 m/s"
            },
            {
              "id": "23.2-q6",
              "number": 3,
              "question": "Force $\\mathbf{F}_1 = \\begin{pmatrix} 10 \\\\ -4 \\end{pmatrix}$ N and $\\mathbf{F}_2 = \\begin{pmatrix} -6 \\\\ 7 \\end{pmatrix}$ N act on an object. Find the resultant force vector.",
              "working": [
                "F_total = (10 - 6, -4 + 7) = (4, 3) N"
              ],
              "answer": "\\begin{pmatrix} 4 \\\\ 3 \\end{pmatrix} N"
            }
          ]
        },
        {
          "id": "23.2-6",
          "title": "Exercise: Level 3 (Exam-Style)",
          "type": "exercise_3",
          "level": "extended",
          "badgeText": "Exercise: Level 3 (Exam-Style)",
          "questions": [
            {
              "id": "23.2-q7",
              "number": 1,
              "marks": 4,
              "question": "$OABC$ is a parallelogram. $\\vec{OA} = \\mathbf{a}$ and $\\vec{OC} = \\mathbf{c}$. Point $P$ lies on $AC$ such that $AP : PC = 1 : 2$.\n(a) Find $\\vec{AC}$ in terms of $\\mathbf{a}$ and $\\mathbf{c}$. [1 mark]\n(b) Find $\\vec{OP}$ in terms of $\\mathbf{a}$ and $\\mathbf{c}$ in simplest form. [3 marks]",
              "working": [
                "(a) AC = c - a",
                "(b) OP = OA + AP = a + (1/3)(c - a) = a + (1/3)c - (1/3)a = (2/3)a + (1/3)c"
              ],
              "answer": "(a) AC = c - a; (b) OP = (2/3)a + (1/3)c",
              "markBreakdown": "B1 for c - a; M1 for a + (1/3)(c - a), M1 for collecting terms, A1 for (2/3)a + (1/3)c"
            },
            {
              "id": "23.2-q8",
              "number": 2,
              "marks": 4,
              "question": "Given $\\vec{AB} = 3\\mathbf{p} + 6\\mathbf{q}$ and $\\vec{BC} = 2\\mathbf{p} + 4\\mathbf{q}$.\nProve that $A, B$, and $C$ lie on a straight line. [4 marks]",
              "working": [
                "AB = 3(p + 2q)",
                "BC = 2(p + 2q) => AB = 1.5 BC",
                "Since AB is a scalar multiple of BC, AB is parallel to BC. Since B is a common point, A, B, and C are collinear."
              ],
              "answer": "AB = 1.5 BC, meaning vectors are parallel. Since they share point B, A, B, C are collinear",
              "markBreakdown": "M1 for factoring AB, M1 for factoring BC, M1 for showing AB = 1.5 BC, A1 for concluding parallel with common point B"
            },
            {
              "id": "23.2-q9",
              "number": 3,
              "marks": 3,
              "question": "Vector $\\mathbf{u} = \\begin{pmatrix} k \\\\ 12 \\end{pmatrix}$ has magnitude 13.\nFind the two possible values of $k$. [3 marks]",
              "working": [
                "|u|^2 = k^2 + 12^2 = 13^2 => k^2 + 144 = 169 => k^2 = 25 => k = ±5"
              ],
              "answer": "k = 5 or k = -5",
              "markBreakdown": "M1 for k^2 + 144 = 169, M1 for k^2 = 25, A1 for k = ±5"
            }
          ]
        }
      ]
    },
    {
      "id": "23.test",
      "number": "Test 23",
      "title": "Chapter 23 Test: Transformations & vectors",
      "type": "chapterTest",
      "level": "both",
      "steps": [
        {
          "id": "23.test-1",
          "title": "Chapter 23 Test: Part A (Basic Recall)",
          "type": "test_part_a",
          "level": "both",
          "badgeText": "Test Part A: Core Recall",
          "questions": [
            {
              "id": "23.t-1",
              "number": 1,
              "marks": 2,
              "question": "Translate point $(4, -2)$ by vector $\\begin{pmatrix} 3 \\\\ -5 \\end{pmatrix}$.",
              "working": [
                "(4 + 3, -2 - 5) = (7, -7)"
              ],
              "answer": "(7, -7)",
              "markBreakdown": "M1 for addition, A1 for (7, -7)"
            },
            {
              "id": "23.t-2",
              "number": 2,
              "marks": 2,
              "question": "Calculate the magnitude of vector $\\begin{pmatrix} 5 \\\\ 12 \\end{pmatrix}$.",
              "working": [
                "\\sqrt{5^2 + 12^2} = \\sqrt{25 + 144} = 13"
              ],
              "answer": "13",
              "markBreakdown": "M1 for \\sqrt{25+144}, A1 for 13"
            },
            {
              "id": "23.t-3",
              "number": 3,
              "marks": 2,
              "question": "State the equation of the line when point $(3, 5)$ reflects onto $(3, -5)$.",
              "working": [
                "y-coordinates flipped sign => Reflected in x-axis (line y = 0)"
              ],
              "answer": "y = 0 (x-axis)",
              "markBreakdown": "B2 for y = 0 or x-axis"
            }
          ]
        },
        {
          "id": "23.test-2",
          "title": "Chapter 23 Test: Part B (Real-World Problems)",
          "type": "test_part_b",
          "level": "both",
          "badgeText": "Test Part B: Multi-Step Real-World Application",
          "questions": [
            {
              "id": "23.t-4",
              "number": 1,
              "marks": 3,
              "question": "A drone starts at $(10, 20)$ and executes translations $\\mathbf{v}_1 = \\begin{pmatrix} 15 \\\\ -8 \\end{pmatrix}$ followed by $\\mathbf{v}_2 = \\begin{pmatrix} -5 \\\\ 12 \\end{pmatrix}$. Find its final position.",
              "working": [
                "(10 + 15 - 5, 20 - 8 + 12) = (20, 24)"
              ],
              "answer": "(20, 24)",
              "markBreakdown": "M2 for summing vectors, A1 for (20, 24)"
            },
            {
              "id": "23.t-5",
              "number": 2,
              "marks": 3,
              "question": "A robotic arm rotates an electronic component $180^\\circ$ about centre $(2, 3)$. If a corner is at $(4, 7)$, find its new position.",
              "working": [
                "Vector from centre: (4 - 2, 7 - 3) = (2, 4)",
                "180° rotation negates vector: (-2, -4)",
                "New point = (2 - 2, 3 - 4) = (0, -1)"
              ],
              "answer": "(0, -1)",
              "markBreakdown": "M1 for vector (2, 4), M1 for (-2, -4), A1 for (0, -1)"
            },
            {
              "id": "23.t-6",
              "number": 3,
              "marks": 4,
              "question": "Two tugboats pull a ship with forces $\\mathbf{F}_1 = \\begin{pmatrix} 8 \\\\ 6 \\end{pmatrix}$ kN and $\\mathbf{F}_2 = \\begin{pmatrix} 7 \\\\ -6 \\end{pmatrix}$ kN. Calculate the magnitude and direction of the resultant force.",
              "working": [
                "Resultant = (8 + 7, 6 - 6) = (15, 0) kN",
                "Magnitude = 15 kN due East (direction 090°)"
              ],
              "answer": "15 kN due East (bearing 090°)",
              "markBreakdown": "M2 for resultant (15, 0), A1 for 15 kN, A1 for due East"
            }
          ]
        },
        {
          "id": "23.test-3",
          "title": "Chapter 23 Test: Part C (Exam-Style Challenge)",
          "type": "test_part_c",
          "level": "both",
          "badgeText": "Test Part C: Exam Challenge",
          "questions": [
            {
              "id": "23.t-7",
              "number": 1,
              "marks": 5,
              "question": "Triangle $T$ has vertices $(2, 2), (4, 2), (2, 5)$.\n(a) Enlarge triangle $T$ by scale factor $-3$, centre $(3, 3)$. [3 marks]\n(b) State the ratio of Area(Image) to Area($T$). [2 marks]",
              "working": [
                "(a) Vectors from (3, 3): (2, 2) is (-1, -1) * -3 = (3, 3) => (6, 6). (4, 2) is (1, -1) * -3 = (-3, 3) => (0, 6). (2, 5) is (-1, 2) * -3 = (3, -6) => (6, -3)",
                "(b) Area ratio = k^2 = (-3)^2 = 9 (ratio 9 : 1)"
              ],
              "answer": "(a) (6, 6), (0, 6), (6, -3); (b) 9 : 1",
              "markBreakdown": "M2 for vector calculations, A1 for coordinates; M1 for k^2, A1 for 9 : 1"
            },
            {
              "id": "23.t-8",
              "number": 2,
              "marks": 5,
              "question": "$OABC$ is a trapezium with $AB$ parallel to $OC$ and $OC = 3AB$.\n$\\vec{OA} = \\mathbf{a}$ and $\\vec{AB} = \\mathbf{b}$. Point $M$ is the midpoint of $BC$.\nFind $\\vec{OM}$ in terms of $\\mathbf{a}$ and $\\mathbf{b}$. [5 marks]",
              "working": [
                "OC = 3b => C is position 3b",
                "B is position a + b",
                "M is midpoint of B and C: OM = (1/2)(OB + OC) = (1/2)(a + b + 3b) = (1/2)(a + 4b) = (1/2)a + 2b"
              ],
              "answer": "\\vec{OM} = \\frac{1}{2}\\mathbf{a} + 2\\mathbf{b}",
              "markBreakdown": "M1 for OC = 3b, M1 for OB = a + b, M2 for midpoint formula, A1 for (1/2)a + 2b"
            },
            {
              "id": "23.t-9",
              "number": 3,
              "marks": 4,
              "question": "Describe fully the single transformation that maps the shape with vertices $(1, 2), (3, 2), (3, 4)$ onto $(-2, -1), (-2, -3), (-4, -3)$. [4 marks]",
              "working": [
                "Reflection in the line y = -x"
              ],
              "answer": "Reflection in the line y = -x",
              "markBreakdown": "B2 for Reflection, B2 for line y = -x"
            }
          ]
        }
      ]
    }
  ]
};

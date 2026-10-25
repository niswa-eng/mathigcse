import { Unit } from '../types/content';

export const unit7: Unit = {
  id: 7,
  title: 'Perimeter, area and volume',
  learningObjectives: [
    'C5.2, E5.2: Perimeter and area of rectangles, triangles, parallelograms and trapeziums.',
    'C5.4, E5.4: Surface area and volume of cuboids, prisms, cylinders, spheres, pyramids and cones.'
  ],
  subtopics: [
    {
      id: '7.1',
      number: '7.1',
      title: 'Perimeter and area in two dimensions',
      type: 'lesson',
      level: 'both',
      steps: [
        {
          id: '7.1-1',
          title: 'Concept & Intuition: 2D Perimeter and Area Formulas',
          type: 'concept',
          level: 'both',
          badgeText: 'Concept & Intuition',
          summary: 'Perimeter is the continuous boundary distance around a shape. Area is the quantity of 2D surface space enclosed inside.',
          analogy: 'Perimeter is the length of fence needed around a yard; area is the amount of grass seed needed to cover the yard.',
          terms: [
            { term: 'Perimeter', definition: 'The total distance around the outside edge of a 2D closed polygon.', example: '$P = 2(l + w)$' },
            { term: 'Area of Parallelogram', definition: 'Base multiplied by perpendicular height: $A = b \\times h$.', example: 'Base 8 cm, height 5 cm: Area = $40\\text{ cm}^2$' },
            { term: 'Area of Trapezium', definition: 'Half the sum of parallel bases multiplied by perpendicular height: $A = \\frac{1}{2}(a + b)h$.', example: 'Bases 6 cm and 10 cm, height 4 cm: Area = $32\\text{ cm}^2$' }
          ],
          rules: [
            { title: 'Perpendicular Height Rule', explanation: 'NEVER use the slanted side length for area! Always use the strictly perpendicular height ($90^\\circ$ to the base).' }
          ]
        },
        {
          id: '7.1-2',
          title: 'Worked Example: Area and Perimeter of Compound Shapes',
          type: 'worked_example',
          level: 'both',
          badgeText: 'Worked Example',
          workedProblem: {
            statement: 'A running track consists of a rectangle measuring $100\\text{ m}$ by $64\\text{ m}$ with semicircular ends on the two shorter sides. Calculate: (a) the total perimeter of the track, (b) the total enclosed area.',
            steps: [
              { stepNumber: 1, instruction: 'The two semicircular ends combine to form one full circle of diameter $d = 64\\text{ m}$. Radius $r = 32\\text{ m}$.', latex: 'C = \\pi d = 64\\pi \\approx 201.06\\text{ m}', note: 'Perimeter consists of two 100m straight edges + circle circumference.' },
              { stepNumber: 2, instruction: 'Total perimeter: $100 + 100 + 64\\pi = 200 + 201.06 = 401\\text{ m}$ (3 s.f.).', latex: 'P = 200 + 64\\pi \\approx 401\\text{ m}', note: 'Do not include inner boundary lines.' },
              { stepNumber: 3, instruction: 'Calculate area of rectangular section: $100 \\times 64 = 6400\\text{ m}^2$.', latex: 'A_{\\text{rect}} = 6400\\text{ m}^2', note: 'Base * Height.' },
              { stepNumber: 4, instruction: 'Calculate area of circular ends: $\\pi r^2 = \\pi (32^2) = 1024\\pi \\approx 3217\\text{ m}^2$.', latex: 'A_{\\text{circle}} = 1024\\pi \\approx 3217\\text{ m}^2', note: 'Area of full circle.' },
              { stepNumber: 5, instruction: 'Total area $= 6400 + 3217 = 9617 \\approx 9620\\text{ m}^2$ (3 s.f.).', latex: 'A = 6400 + 1024\\pi \\approx 9620\\text{ m}^2', note: 'Sum both components.' }
            ],
            finalAnswer: '(a) 401\\text{ m}; \\quad (b) 9620\\text{ m}^2'
          }
        },
        {
          id: '7.1-3',
          title: 'Common Mistake & Pro Tip: Slanted Height vs Perpendicular Height',
          type: 'common_mistakes',
          level: 'both',
          badgeText: 'Common Mistake & Pro Tip',
          commonMistakes: [
            {
              mistake: 'Using the slanted edge length instead of the vertical height when calculating parallelogram or triangle area.',
              correction: 'Area formulas strictly require PERPENDICULAR height at $90^\\circ$ to the chosen base.',
              examinerTip: 'Look for the right-angle square marker ($90^\\circ$) to identify the correct height.',
              memoryTrick: 'Perpendicular height stands upright like a lamppost, never leaning!'
            }
          ]
        },
        {
          id: '7.1-4',
          title: 'Exercise: Level 1 (Basic)',
          type: 'exercise_1',
          level: 'both',
          badgeText: 'Exercise: Level 1 (Basic)',
          questions: [
            { id: '7.1-q1', number: 1, question: 'Calculate the area of a triangle with base $14\\text{ cm}$ and perpendicular height $9\\text{ cm}$.', working: ['Area $= \\frac{1}{2} \\times 14 \\times 9 = 7 \\times 9 = 63\\text{ cm}^2$.'], answer: '63\\text{ cm}^2', hint: 'Area = 0.5 * base * height.' },
            { id: '7.1-q2', number: 2, question: 'Calculate the area of a trapezium with parallel bases $8\\text{ cm}$ and $12\\text{ cm}$, and height $5\\text{ cm}$.', working: ['Area $= \\frac{1}{2}(8 + 12) \\times 5 = \\frac{1}{2}(20) \\times 5 = 10 \\times 5 = 50\\text{ cm}^2$.'], answer: '50\\text{ cm}^2', hint: 'Area = 0.5 * (a + b) * h.' },
            { id: '7.1-q3', number: 3, question: 'Calculate the circumference and area of a circle of radius $7\\text{ cm}$ using $\\pi = \\frac{22}{7}$.', working: ['Circumference $= 2 \\times \\frac{22}{7} \\times 7 = 44\\text{ cm}$.', 'Area $= \\frac{22}{7} \\times 7^2 = 22 \\times 7 = 154\\text{ cm}^2$.'], answer: 'C = 44\\text{ cm}, \\; A = 154\\text{ cm}^2', hint: 'C = 2*pi*r, A = pi*r^2.' }
          ]
        },
        {
          id: '7.1-5',
          title: 'Exercise: Level 2 (Real-World Scenarios)',
          type: 'exercise_2',
          level: 'both',
          badgeText: 'Exercise: Level 2 (Real-World)',
          questions: [
            { id: '7.1-q4', number: 1, question: 'A landscape gardener turf a lawn in the shape of a parallelogram with base $16\\text{ m}$ and perpendicular width $8.5\\text{ m}$. Turf rolls cost $\\$4.50$ per square metre. Calculate the total cost to turf the lawn.', working: ['Area $= 16 \\times 8.5 = 136\\text{ m}^2$.', 'Cost $= 136 \\times 4.50 = \\$612$.'], answer: '\\$612', hint: 'Area = base * height; then multiply by cost per m^2.' },
            { id: '7.1-q5', number: 2, question: 'A circular pizza has diameter $30\\text{ cm}$. A rectangular pizza has dimensions $28\\text{ cm}$ by $24\\text{ cm}$. Which pizza provides more food surface area, and by how much?', working: ['Circular pizza radius $= 15\\text{ cm}$. Area $= \\pi(15^2) = 225\\pi \\approx 706.9\\text{ cm}^2$.', 'Rectangular pizza area $= 28 \\times 24 = 672\\text{ cm}^2$.', 'Difference $= 706.9 - 672 = 34.9\\text{ cm}^2$.', 'The circular pizza is larger.'], answer: '\\text{Circular pizza by } 34.9\\text{ cm}^2', hint: 'Radius is 15 cm. Area = pi * r^2.' },
            { id: '7.1-q6', number: 3, question: 'A bicycle wheel has diameter $66\\text{ cm}$. Calculate how many complete revolutions the wheel makes in travelling a distance of $1\\text{ km}$ ($1000\\text{ m}$).', working: ['Circumference in metres: $C = \\pi \\times 0.66\\text{ m} \\approx 2.0735\\text{ m}$.', 'Revolutions $= \\frac{1000}{2.0735} \\approx 482.3$.', 'Complete revolutions $= 482$.'], answer: '482\\text{ complete revolutions}', hint: 'Revolutions = Total distance / Circumference.' }
          ]
        },
        {
          id: '7.1-6',
          title: 'Exercise: Level 3 (Exam-Style Challenge)',
          type: 'exercise_3',
          level: 'both',
          badgeText: 'Exercise: Level 3 (Exam-Style)',
          questions: [
            { id: '7.1-q7', number: 1, question: 'A sector of a circle of radius $9\\text{ cm}$ has an angle of $140^\\circ$. Calculate: (a) the arc length, (b) the perimeter of the sector, (c) the area of the sector. Give all answers to 3 significant figures.', marks: 4, working: ['(a) Arc length $= \\frac{140}{360} \\times 2\\pi(9) = \\frac{7}{18} \\times 18\\pi = 7\\pi \\approx 22.0\\text{ cm}$.', '(b) Perimeter $= \\text{Arc} + 2r = 7\\pi + 18 \\approx 22.0 + 18 = 40.0\\text{ cm}$.', '(c) Area $= \\frac{140}{360} \\times \\pi(9^2) = \\frac{7}{18} \\times 81\\pi = 31.5\\pi \\approx 98.96 \\to 99.0\\text{ cm}^2$.'], answer: '(a) 22.0\\text{ cm}; \\quad (b) 40.0\\text{ cm}; \\quad (c) 99.0\\text{ cm}^2', markBreakdown: 'M1 for $(140/360) \\times 2\\pi(9)$; A1 for 22.0 cm; B1 for perimeter adding $2r$ (40.0 cm); A1 for area 99.0 cm^2.' },
            { id: '7.1-q8', number: 2, question: 'A square has the same perimeter as a circle of radius $r$. Show that the ratio of the area of the square to the area of the circle is $\\pi : 4$.', marks: 3, working: ['Circumference of circle $= 2\\pi r$.', 'Square perimeter $= 4s = 2\\pi r \\implies s = \\frac{\\pi r}{2}$.', 'Area of square $= s^2 = \\left(\\frac{\\pi r}{2}\\right)^2 = \\frac{\\pi^2 r^2}{4}$.', 'Area of circle $= \\pi r^2$.', 'Ratio $\\frac{\\text{Square Area}}{\\text{Circle Area}} = \\frac{\\frac{\\pi^2 r^2}{4}}{\\pi r^2} = \\frac{\\pi}{4}$. Ratio is $\\pi : 4$.'], answer: '\\pi : 4', markBreakdown: 'M1 for side $s = \\pi r / 2$; M1 for square area $\\pi^2 r^2 / 4$; A1 for dividing areas to deduce $\\pi : 4$.' },
            { id: '7.1-q9', number: 3, question: 'The perimeter of an isosceles trapezium is $50\\text{ cm}$. The parallel sides are $12\\text{ cm}$ and $24\\text{ cm}$. Calculate the area of the trapezium.', marks: 4, working: ['Sum of parallel sides $= 12 + 24 = 36\\text{ cm}$.', 'Sum of two slanted sides $= 50 - 36 = 14\\text{ cm} \\implies$ each slanted side is $7\\text{ cm}$.', 'Drop perpendiculars: horizontal overhang on each side is $\\frac{24 - 12}{2} = 6\\text{ cm}$.', 'By Pythagoras: $h^2 + 6^2 = 7^2 \\implies h^2 + 36 = 49 \\implies h = \\sqrt{13} \\approx 3.6056\\text{ cm}$.', 'Area $= \\frac{1}{2}(12 + 24) \\times \\sqrt{13} = 18 \\times 3.6056 \\approx 64.9\\text{ cm}^2$.'], answer: '64.9\\text{ cm}^2 \; (\\text{or } 18\\sqrt{13}\\text{ cm}^2)', markBreakdown: 'M1 for slanted side 7 cm; M1 for base overhang 6 cm; M1 for Pythagoras $h = \\sqrt{13}$; A1 for $64.9\\text{ cm}^2$.' }
          ]
        }
      ]
    },
    {
      id: '7.2',
      number: '7.2',
      title: 'Three dimensional objects',
      type: 'lesson',
      level: 'both',
      steps: [
        {
          id: '7.2-1',
          title: 'Concept & Intuition: 3D Solids, Nets, and Plans',
          type: 'concept',
          level: 'both',
          badgeText: 'Concept & Intuition',
          summary: '3D solids possess faces, edges, and vertices. Prisms maintain a uniform cross-section throughout their length. Nets are 2D fold-out patterns that assemble into 3D shapes.',
          analogy: 'A prism is like a loaf of sliced bread: every single slice (cross-section) has the exact same size and shape from front to back.',
          terms: [
            { term: 'Prism', definition: 'A 3D solid with identical parallel end faces (cross-section) and rectangular sides.', example: 'Triangular prism, cuboid, cylinder' },
            { term: 'Euler\'s Formula', definition: 'For any convex polyhedron: $\\text{Faces} - \\text{Edges} + \\text{Vertices} = 2$.', example: 'Cube: $6 - 12 + 8 = 2$' },
            { term: 'Plan and Elevations', definition: 'Orthographic projections: Plan is view from above; Front/Side elevations are views from the sides.', example: 'Architectural blueprints' }
          ],
          rules: [
            { title: 'Volume of Any Prism', latex: 'V = \\text{Area of Cross-section} \\times \\text{Length}', explanation: 'Always identify the cross-section face and multiply its 2D area by the solid\'s length.' }
          ]
        },
        {
          id: '7.2-2',
          title: 'Worked Example: Volume and Surface Area of a Triangular Prism',
          type: 'worked_example',
          level: 'both',
          badgeText: 'Worked Example',
          workedProblem: {
            statement: 'A triangular prism has length $15\\text{ cm}$. Its cross-section is a right-angled triangle with base $6\\text{ cm}$ and height $8\\text{ cm}$. (a) Calculate the hypotenuse of the triangular face. (b) Calculate the volume. (c) Calculate the total surface area.',
            steps: [
              { stepNumber: 1, instruction: 'Find the hypotenuse $c$ of the right triangle using Pythagoras.', latex: 'c = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10\\text{ cm}', note: '3-4-5 Pythagorean triple scaled by 2.' },
              { stepNumber: 2, instruction: 'Calculate cross-sectional area: $\\frac{1}{2} \\times 6 \\times 8 = 24\\text{ cm}^2$.', latex: 'A_{\\text{cross}} = 24\\text{ cm}^2', note: 'Area of right triangle.' },
              { stepNumber: 3, instruction: 'Calculate volume: $\\text{Cross-section} \\times \\text{Length} = 24 \\times 15 = 360\\text{ cm}^3$.', latex: 'V = 24 \\times 15 = 360\\text{ cm}^3', note: 'Prism volume rule.' },
              { stepNumber: 4, instruction: 'Calculate surface area: two triangular ends plus three rectangular faces.', latex: '2(24) + (6 \\times 15) + (8 \\times 15) + (10 \\times 15) = 48 + 90 + 120 + 150 = 408\\text{ cm}^2', note: 'Perimeter of triangle * length gives rectangular faces.' }
            ],
            finalAnswer: '(a) 10\\text{ cm}; \\quad (b) 360\\text{ cm}^3; \\quad (c) 408\\text{ cm}^2'
          }
        },
        {
          id: '7.2-3',
          title: 'Common Mistake & Pro Tip: Missing Faces in Surface Area',
          type: 'common_mistakes',
          level: 'both',
          badgeText: 'Common Mistake & Pro Tip',
          commonMistakes: [
            {
              mistake: 'Forgetting to include all faces (e.g., omitting the two triangular ends or the bottom base) when finding surface area.',
              correction: 'Sketch the 2D unfold net of the solid first and tick off each face as you calculate its area.',
              examinerTip: 'A triangular prism always has 5 faces (2 triangles + 3 rectangles). Count them!',
              memoryTrick: 'Count the faces before you add!'
            }
          ]
        },
        {
          id: '7.2-4',
          title: 'Exercise: Level 1 (Basic)',
          type: 'exercise_1',
          level: 'both',
          badgeText: 'Exercise: Level 1 (Basic)',
          questions: [
            { id: '7.2-q1', number: 1, question: 'State the number of faces, edges, and vertices for: (a) a cuboid, (b) a square-based pyramid.', working: ['(a) Cuboid: 6 faces, 12 edges, 8 vertices.', '(b) Square pyramid: 5 faces, 8 edges, 5 vertices.'], answer: '(a) F = 6, E = 12, V = 8; \\quad (b) F = 5, E = 8, V = 5', hint: 'Count top, base, and sides.' },
            { id: '7.2-q2', number: 2, question: 'A prism has a cross-sectional area of $35\\text{ cm}^2$ and a length of $12\\text{ cm}$. Calculate its volume.', working: ['Volume $= 35 \\times 12 = 420\\text{ cm}^3$.'], answer: '420\\text{ cm}^3', hint: 'Volume = Area * Length.' },
            { id: '7.2-q3', number: 3, question: 'Calculate the total surface area of a cube of edge length $5\\text{ cm}$.', working: ['Area of 1 face $= 5^2 = 25\\text{ cm}^2$.', '6 faces $= 6 \\times 25 = 150\\text{ cm}^2$.'], answer: '150\\text{ cm}^2', hint: 'A cube has 6 identical square faces.' }
          ]
        },
        {
          id: '7.2-5',
          title: 'Exercise: Level 2 (Real-World Scenarios)',
          type: 'exercise_2',
          level: 'both',
          badgeText: 'Exercise: Level 2 (Real-World)',
          questions: [
            { id: '7.2-q4', number: 1, question: 'A concrete drainage pipe is a hollow cylinder with outer radius $30\\text{ cm}$, inner radius $20\\text{ cm}$, and length $2\\text{ metres}$ ($200\\text{ cm}$). Calculate the volume of concrete required in terms of $\\pi$.', working: ['Cross-section area of ring $= \\pi(30^2 - 20^2) = \\pi(900 - 400) = 500\\pi\\text{ cm}^2$.', 'Volume $= 500\\pi \\times 200 = 100,000\\pi\\text{ cm}^3 \; (\\approx 0.314\\text{ m}^3)$.'], answer: '100,000\\pi\\text{ cm}^3 \; (\\approx 0.314\\text{ m}^3)', hint: 'Area of cross section = pi * (R^2 - r^2).' },
            { id: '7.2-q5', number: 2, question: 'A chocolate bar is shaped as a triangular prism of length $20\\text{ cm}$ with an equilateral triangle cross-section of area $12\\text{ cm}^2$. Calculate the mass of the bar if the density of chocolate is $1.3\\text{ g/cm}^3$.', working: ['Volume $= 12 \\times 20 = 240\\text{ cm}^3$.', 'Mass $= \\text{Volume} \\times \\text{Density} = 240 \\times 1.3 = 312\\text{ g}$.'], answer: '312\\text{ g}', hint: 'Mass = Volume * Density.' },
            { id: '7.2-q6', number: 3, question: 'A swimming pool is $25\\text{ m}$ long. It slopes uniformly from a shallow end depth of $1\\text{ m}$ to a deep end depth of $2.5\\text{ m}$. The pool is $10\\text{ m}$ wide. Calculate the capacity of the pool in cubic metres.', working: ['The longitudinal cross-section is a trapezium of bases $1\\text{ m}$ and $2.5\\text{ m}$, and length $25\\text{ m}$.', 'Cross-section area $= \\frac{1 + 2.5}{2} \\times 25 = 1.75 \\times 25 = 43.75\\text{ m}^2$.', 'Volume $= \\text{Area} \\times \\text{width} = 43.75 \\times 10 = 437.5\\text{ m}^3$.'], answer: '437.5\\text{ m}^3', hint: 'Cross-section is a trapezium.' }
          ]
        },
        {
          id: '7.2-6',
          title: 'Exercise: Level 3 (Exam-Style Challenge)',
          type: 'exercise_3',
          level: 'both',
          badgeText: 'Exercise: Level 3 (Exam-Style)',
          questions: [
            { id: '7.2-q7', number: 1, question: 'A metal ingot in the shape of a cuboid measuring $12\\text{ cm} \\times 8\\text{ cm} \\times 5\\text{ cm}$ is melted down and recast into identical solid cubes of edge length $2\\text{ cm}$. How many complete cubes can be made?', marks: 3, working: ['Volume of ingot $= 12 \\times 8 \\times 5 = 480\\text{ cm}^3$.', 'Volume of 1 cube $= 2^3 = 8\\text{ cm}^3$.', 'Number of cubes $= \\frac{480}{8} = 60\\text{ cubes}$.'], answer: '60\\text{ cubes}', markBreakdown: 'M1 for $12 \\times 8 \\times 5 = 480$; M1 for $2^3 = 8$; A1 for 60.' },
            { id: '7.2-q8', number: 2, question: 'The diagonal of a cuboid connects opposite corners through the interior. A box has length $9\\text{ cm}$, width $12\\text{ cm}$, and height $8\\text{ cm}$. Calculate the length of the internal 3D space diagonal.', marks: 3, working: ['3D Pythagoras: $d^2 = l^2 + w^2 + h^2$.', '$d^2 = 9^2 + 12^2 + 8^2 = 81 + 144 + 64 = 289$.', '$d = \\sqrt{289} = 17\\text{ cm}$.'], answer: '17\\text{ cm}', markBreakdown: 'M1 for $9^2 + 12^2 + 8^2$; A1 for $d^2 = 289$; A1 for $d = 17\\text{ cm}$.' },
            { id: '7.2-q9', number: 3, question: 'A cylindrical water tank of radius $1.4\\text{ m}$ is filled with water to a depth of $3.5\\text{ m}$. Water is pumped out at a rate of $250\\text{ litres per minute}$. Calculate the time in minutes to empty the tank completely. ($1\\text{ m}^3 = 1000\\text{ litres}$).', marks: 4, working: ['Volume $= \\pi r^2 h = \\pi(1.4^2)(3.5) = \\pi(1.96)(3.5) = 6.86\\pi\\text{ m}^3 \\approx 21.551\\text{ m}^3$.', 'Litres $= 21.551 \\times 1000 = 21,551\\text{ litres}$.', 'Time $= \\frac{21,551}{250} \\approx 86.2\\text{ minutes}$.'], answer: '86.2\\text{ minutes}', markBreakdown: 'M1 for volume formula $\\pi(1.4^2)(3.5)$; A1 for volume $\\approx 21.55\\text{ m}^3$; M1 for converting to litres and dividing by 250; A1 for 86.2 min.' }
          ]
        }
      ]
    },
    {
      id: '7.3',
      number: '7.3',
      title: 'Surface areas and volume of solids',
      type: 'lesson',
      level: 'both',
      steps: [
        {
          id: '7.3-1',
          title: 'Concept & Intuition: Cylinders, Cones, Pyramids, and Spheres',
          type: 'concept',
          level: 'both',
          badgeText: 'Concept & Intuition',
          summary: 'Curved and pointed 3D solids follow specific geometric formulas provided on the Cambridge formula sheet: cylinders, cones, pyramids, and spheres.',
          analogy: 'A cone is exactly $\\frac{1}{3}$ the volume of a cylinder with the same base and height. A pyramid is $\\frac{1}{3}$ the volume of a matching prism.',
          terms: [
            { term: 'Cylinder', definition: 'Volume: $V = \\pi r^2 h$; Curved Surface: $A = 2\\pi rh$; Total Area: $2\\pi r^2 + 2\\pi rh$.', example: 'Drink can' },
            { term: 'Cone', definition: 'Volume: $V = \\frac{1}{3}\\pi r^2 h$; Curved Surface: $A = \\pi r l$ where $l = \\sqrt{r^2 + h^2}$.', example: 'Ice cream cone' },
            { term: 'Sphere', definition: 'Volume: $V = \\frac{4}{3}\\pi r^3$; Surface Area: $A = 4\\pi r^2$.', example: 'Basketball' },
            { term: 'Pyramid', definition: 'Volume: $V = \\frac{1}{3} \\times \\text{Base Area} \\times h$.', example: 'Great Pyramid of Giza' }
          ],
          rules: [
            { title: 'Slant Height vs Vertical Height', latex: 'l^2 = r^2 + h^2', explanation: 'For curved surface area of a cone, use the slant height $l$. For volume, use the vertical height $h$.' }
          ]
        },
        {
          id: '7.3-2',
          title: 'Worked Example: Multi-Component Curved Solids',
          type: 'worked_example',
          level: 'both',
          badgeText: 'Worked Example',
          workedProblem: {
            statement: 'A silo consists of a cylinder of radius $3\\text{ m}$ and height $10\\text{ m}$, topped by a cone of height $4\\text{ m}$. (a) Calculate the slant height $l$ of the conical roof. (b) Calculate the total volume of the silo.',
            steps: [
              { stepNumber: 1, instruction: 'Find slant height $l$ of cone using Pythagoras: $r = 3, h = 4$.', latex: 'l = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = 5\\text{ m}', note: '3-4-5 right triangle.' },
              { stepNumber: 2, instruction: 'Calculate volume of cylindrical part: $\\pi r^2 h_1 = \\pi(3^2)(10) = 90\\pi\\text{ m}^3$.', latex: 'V_{\\text{cyl}} = 90\\pi\\text{ m}^3', note: 'Height is 10m.' },
              { stepNumber: 3, instruction: 'Calculate volume of conical roof: $\\frac{1}{3}\\pi r^2 h_2 = \\frac{1}{3}\\pi(3^2)(4) = 12\\pi\\text{ m}^3$.', latex: 'V_{\\text{cone}} = 12\\pi\\text{ m}^3', note: 'Height is 4m.' },
              { stepNumber: 4, instruction: 'Total volume $= 90\\pi + 12\\pi = 102\\pi \\approx 320.4 \\to 320\\text{ m}^3$ (3 s.f.).', latex: 'V = 102\\pi \\approx 320\\text{ m}^3', note: 'Sum both volumes.' }
            ],
            finalAnswer: '(a) 5\\text{ m}; \\quad (b) 102\\pi\\text{ m}^3 \; (\\approx 320\\text{ m}^3)'
          }
        },
        {
          id: '7.3-3',
          title: 'Common Mistake & Pro Tip: Hemisphere Surface Area Trap',
          type: 'common_mistakes',
          level: 'both',
          badgeText: 'Common Mistake & Pro Tip',
          commonMistakes: [
            {
              mistake: 'Taking the total surface area of a solid hemisphere as $2\\pi r^2$.',
              correction: 'A solid hemisphere has a curved surface ($2\\pi r^2$) PLUS a flat circular base ($\\pi r^2$): Total Surface Area $= 3\\pi r^2$!',
              examinerTip: 'Check whether the question specifies an \"open bowl\" ($2\\pi r^2$) or a \"solid hemisphere\" ($3\\pi r^2$).',
              memoryTrick: 'A solid hemisphere has a lid: $2\\pi r^2 + \\pi r^2 = 3\\pi r^2$!'
            }
          ]
        },
        {
          id: '7.3-4',
          title: 'Exercise: Level 1 (Basic)',
          type: 'exercise_1',
          level: 'both',
          badgeText: 'Exercise: Level 1 (Basic)',
          questions: [
            { id: '7.3-q1', number: 1, question: 'Calculate the volume of a sphere with radius $6\\text{ cm}$ in terms of $\\pi$.', working: ['$V = \\frac{4}{3}\\pi (6^3) = \\frac{4}{3}\\pi (216) = 288\\pi\\text{ cm}^3$.'], answer: '288\\pi\\text{ cm}^3', hint: 'V = (4/3)*pi*r^3.' },
            { id: '7.3-q2', number: 2, question: 'Calculate the curved surface area of a cone with radius $5\\text{ cm}$ and slant height $13\\text{ cm}$.', working: ['Curved Area $= \\pi r l = \\pi(5)(13) = 65\\pi \\approx 204\\text{ cm}^2$.'], answer: '65\\pi\\text{ cm}^2 \; (\\approx 204\\text{ cm}^2)', hint: 'Curved area = pi * r * l.' },
            { id: '7.3-q3', number: 3, question: 'Calculate the volume of a square pyramid with base side $9\\text{ cm}$ and vertical height $10\\text{ cm}$.', working: ['Base Area $= 9 \\times 9 = 81\\text{ cm}^2$.', 'Volume $= \\frac{1}{3} \\times 81 \\times 10 = 270\\text{ cm}^3$.'], answer: '270\\text{ cm}^3', hint: 'Volume = (1/3) * base area * height.' }
          ]
        },
        {
          id: '7.3-5',
          title: 'Exercise: Level 2 (Real-World Scenarios)',
          type: 'exercise_2',
          level: 'both',
          badgeText: 'Exercise: Level 2 (Real-World)',
          questions: [
            { id: '7.3-q4', number: 1, question: 'An ice cream cone has radius $3\\text{ cm}$ and height $12\\text{ cm}$. A hemispherical scoop of ice cream of radius $3\\text{ cm}$ sits on top. Calculate the total volume of ice cream.', working: ['Cone: $V = \\frac{1}{3}\\pi(3^2)(12) = 36\\pi\\text{ cm}^3$.', 'Hemisphere: $V = \\frac{2}{3}\\pi(3^3) = 18\\pi\\text{ cm}^3$.', 'Total $= 36\\pi + 18\\pi = 54\\pi \\approx 170\\text{ cm}^3$.'], answer: '54\\pi\\text{ cm}^3 \; (\\approx 170\\text{ cm}^3)', hint: 'Add cone volume and hemisphere volume.' },
            { id: '7.3-q5', number: 2, question: 'A spherical weather balloon is inflated from radius $1\\text{ m}$ to radius $2\\text{ m}$. (a) By what factor does its surface area increase? (b) By what factor does its volume increase?', working: ['(a) Area scales by $k^2 = 2^2 = 4$ times.', '(b) Volume scales by $k^3 = 2^3 = 8$ times.'], answer: '(a) 4\\text{ times}; \\quad (b) 8\\text{ times}', hint: 'Length ratio k = 2; Area ratio = k^2, Volume ratio = k^3.' },
            { id: '7.3-q6', number: 3, question: 'A glass paperweight is a solid cone of radius $4\\text{ cm}$ and vertical height $9\\text{ cm}$. If glass has density $2.5\\text{ g/cm}^3$, calculate the mass of the paperweight.', working: ['Volume $= \\frac{1}{3}\\pi(4^2)(9) = 48\\pi \\approx 150.8\\text{ cm}^3$.', 'Mass $= 150.8 \\times 2.5 \\approx 377\\text{ g}$.'], answer: '377\\text{ g}', hint: 'Mass = Volume * Density.' }
          ]
        },
        {
          id: '7.3-6',
          title: 'Exercise: Level 3 (Exam-Style Challenge)',
          type: 'exercise_3',
          level: 'extended',
          badgeText: 'Exercise: Level 3 (Exam-Style)',
          questions: [
            { id: '7.3-q7', number: 1, question: 'A solid metal sphere of radius $r$ is melted down and recast into a solid cone of base radius $r$. Find the height of the cone in terms of $r$.', marks: 3, working: ['Sphere volume $= \\frac{4}{3}\\pi r^3$.', 'Cone volume $= \\frac{1}{3}\\pi r^2 h$.', 'Set equal: $\\frac{1}{3}\\pi r^2 h = \\frac{4}{3}\\pi r^3$.', 'Divide both sides by $\\frac{1}{3}\\pi r^2$: $h = 4r$.'], answer: 'h = 4r', markBreakdown: 'M1 for equating volumes $(1/3)\\pi r^2 h = (4/3)\\pi r^3$; M1 for cancelling $\\pi$ and $r^2$; A1 for $h = 4r$.' },
            { id: '7.3-q8', number: 2, question: 'A hollow hemisphere bowl has inner radius $8\\text{ cm}$. Calculate the volume of soup in the bowl when filled to a depth equal to the radius.', marks: 3, working: ['Hemisphere volume $= \\frac{2}{3}\\pi r^3 = \\frac{2}{3}\\pi(8^3) = \\frac{2}{3}\\pi(512) = \\frac{1024}{3}\\pi \\approx 1072\\text{ cm}^3$.', 'To 3 s.f.: $1070\\text{ cm}^3$.'], answer: '1070\\text{ cm}^3 \; (\\text{or } \\frac{1024\\pi}{3})', markBreakdown: 'M1 for $(2/3)\\pi(8^3)$; A1 for $1024\\pi / 3$; A1 for 1070 cm^3.' },
            { id: '7.3-q9', number: 3, question: 'The total surface area of a solid cone of radius $r$ and slant height $3r$ is $64\\pi\\text{ cm}^2$. Calculate the value of $r$.', marks: 3, working: ['Total Surface Area $= \\pi r^2 + \\pi r l$.', 'Given $l = 3r$: Area $= \\pi r^2 + \\pi r(3r) = \\pi r^2 + 3\\pi r^2 = 4\\pi r^2$.', 'Set equal: $4\\pi r^2 = 64\\pi \\implies 4r^2 = 64 \\implies r^2 = 16$.', '$r = 4\\text{ cm}$.'], answer: 'r = 4\\text{ cm}', markBreakdown: 'M1 for $\\pi r^2 + \\pi r(3r) = 4\\pi r^2$; M1 for $4\\pi r^2 = 64\\pi$; A1 for $r = 4$.' }
          ]
        }
      ]
    },
    {
      id: 'test-7',
      number: 'Test 7',
      title: 'Chapter-end Test 7',
      type: 'chapterTest',
      level: 'both',
      steps: [
        {
          id: 'test-7-a',
          title: 'Test Part A: Core Knowledge & Recall',
          type: 'test_part_a',
          level: 'both',
          badgeText: 'Test Part A: Core Recall',
          summary: 'Part A tests standard 2D area formulas, prism volume rules, and cylinder surface area.',
          questions: [
            { id: 'test-7-q1', number: 1, question: 'Calculate the area of a parallelogram with base $9\\text{ cm}$ and perpendicular height $4.5\\text{ cm}$.', marks: 2, working: ['Area $= 9 \\times 4.5 = 40.5\\text{ cm}^2$.'], answer: '40.5\\text{ cm}^2', markBreakdown: 'M1 for $9 \\times 4.5$; A1 for $40.5$.' },
            { id: 'test-7-q2', number: 2, question: 'Calculate the volume of a cylinder with radius $3\\text{ cm}$ and height $8\\text{ cm}$ in terms of $\\pi$.', marks: 2, working: ['$V = \\pi r^2 h = \\pi(3^2)(8) = 72\\pi\\text{ cm}^3$.'], answer: '72\\pi\\text{ cm}^3', markBreakdown: 'M1 for $\\pi(3^2)(8)$; A1 for $72\\pi$.' },
            { id: 'test-7-q3', number: 3, question: 'Calculate the surface area of a sphere of radius $5\\text{ cm}$ in terms of $\\pi$.', marks: 2, working: ['Area $= 4\\pi r^2 = 4\\pi(5^2) = 100\\pi\\text{ cm}^2$.'], answer: '100\\pi\\text{ cm}^2', markBreakdown: 'M1 for $4\\pi(5^2)$; A1 for $100\\pi$.' }
          ]
        },
        {
          id: 'test-7-b',
          title: 'Test Part B: Multi-Step Real-World Application',
          type: 'test_part_b',
          level: 'both',
          badgeText: 'Test Part B: Applications',
          summary: 'Part B applies composite volume, tank capacities, and sector perimeters to realistic engineering contexts.',
          questions: [
            { id: 'test-7-q4', number: 1, question: 'A cylindrical storage tank of diameter $4\\text{ m}$ and height $6\\text{ m}$ is filled with oil. If 1 cubic metre of oil weighs $850\\text{ kg}$, calculate the total mass of oil in the tank in tonnes ($1\\text{ tonne} = 1000\\text{ kg}$).', marks: 3, working: ['Radius $r = 2\\text{ m}$. Volume $= \\pi(2^2)(6) = 24\\pi \\approx 75.398\\text{ m}^3$.', 'Mass $= 75.398 \\times 850 = 64,088\\text{ kg}$.', 'Tonnes $= 64.1\\text{ tonnes}$.'], answer: '64.1\\text{ tonnes}', markBreakdown: 'M1 for volume $24\\pi$; M1 for multiplying by 850; A1 for 64.1 tonnes.' },
            { id: 'test-7-q5', number: 2, question: 'A decorative garden arch is a sector of a circle of radius $4\\text{ m}$ with angle $60^\\circ$. Calculate the total perimeter of the wooden framework needed to enclose this sector.', marks: 3, working: ['Arc length $= \\frac{60}{360} \\times 2\\pi(4) = \\frac{1}{6} \\times 8\\pi = \\frac{4\\pi}{3} \\approx 4.19\\text{ m}$.', 'Total perimeter $= \\text{Arc} + 2r = 4.19 + 8 = 12.19\\text{ m} \\approx 12.2\\text{ m}$.'], answer: '12.2\\text{ m}', markBreakdown: 'M1 for arc length $(60/360) \\times 8\\pi$; M1 for adding $2r = 8$; A1 for 12.2 m.' },
            { id: 'test-7-q6', number: 3, question: 'A gold bar is in the shape of a prism with trapezium cross-section (parallel bases $6\\text{ cm}$ and $4\\text{ cm}$, height $3\\text{ cm}$) and length $10\\text{ cm}$. Gold density is $19.3\\text{ g/cm}^3$. Calculate the mass of the gold bar.', marks: 3, working: ['Cross section $= \\frac{6 + 4}{2} \\times 3 = 5 \\times 3 = 15\\text{ cm}^2$.', 'Volume $= 15 \\times 10 = 150\\text{ cm}^3$.', 'Mass $= 150 \\times 19.3 = 2895\\text{ g} \\approx 2.90\\text{ kg}$.'], answer: '2895\\text{ g} \; (\\text{or } 2.90\\text{ kg})', markBreakdown: 'M1 for cross section area 15; M1 for volume 150; A1 for 2895 g.' }
          ]
        },
        {
          id: 'test-7-c',
          title: 'Test Part C: Exam-Style Challenge Problems',
          type: 'test_part_c',
          level: 'both',
          badgeText: 'Test Part C: Exam Challenge',
          summary: 'Part C features high-tariff Cambridge 0580 cone and sphere volume recast problems and frustum calculations.',
          questions: [
            { id: 'test-7-q7', number: 1, question: 'A cone of base radius $6\\text{ cm}$ and height $12\\text{ cm}$ is cut parallel to its base at half its height ($6\\text{ cm}$) to form a frustum. Calculate the volume of the frustum in terms of $\\pi$.', marks: 4, working: ['Full cone volume: $\\frac{1}{3}\\pi(6^2)(12) = 144\\pi\\text{ cm}^3$.', 'Small removed cone has height 6 cm and by similar triangles radius 3 cm.', 'Small cone volume: $\\frac{1}{3}\\pi(3^2)(6) = 18\\pi\\text{ cm}^3$.', 'Frustum volume $= 144\\pi - 18\\pi = 126\\pi\\text{ cm}^3 \; (\\approx 396\\text{ cm}^3)$.'], answer: '126\\pi\\text{ cm}^3 \; (\\approx 396\\text{ cm}^3)', markBreakdown: 'M1 for full cone volume $144\\pi$; M1 for small cone radius 3 and volume $18\\pi$; M1 for subtracting volumes; A1 for $126\\pi$.' },
            { id: 'test-7-q8', number: 2, question: 'A solid hemisphere of radius $r$ has a total surface area of $108\\pi\\text{ cm}^2$. Calculate the volume of the hemisphere in terms of $\\pi$.', marks: 4, working: ['Total Surface Area of solid hemisphere $= 3\\pi r^2 = 108\\pi$.', '$3r^2 = 108 \\implies r^2 = 36 \\implies r = 6\\text{ cm}$.', 'Volume $= \\frac{2}{3}\\pi r^3 = \\frac{2}{3}\\pi (6^3) = \\frac{2}{3}\\pi(216) = 144\\pi\\text{ cm}^3$.'], answer: '144\\pi\\text{ cm}^3', markBreakdown: 'M1 for $3\\pi r^2 = 108\\pi$; A1 for $r = 6$; M1 for $(2/3)\\pi(6^3)$; A1 for $144\\pi$.' },
            { id: 'test-7-q9', number: 3, question: 'Two mathematically similar solid statues have heights $15\\text{ cm}$ and $25\\text{ cm}$. The mass of the smaller statue is $540\\text{ g}$. Calculate the mass of the larger statue.', marks: 3, working: ['Linear scale factor $k = \\frac{25}{15} = \\frac{5}{3}$.', 'Volume/mass ratio is $k^3 = \\left(\\frac{5}{3}\\right)^3 = \\frac{125}{27}$.', 'Mass of larger $= 540 \\times \\frac{125}{27} = 20 \\times 125 = 2500\\text{ g} = 2.5\\text{ kg}$.'], answer: '2500\\text{ g} \; (\\text{or } 2.5\\text{ kg})', markBreakdown: 'M1 for scale factor $5/3$; M1 for $(5/3)^3 = 125/27$; A1 for 2500 g.' }
          ]
        }
      ]
    }
  ]
};

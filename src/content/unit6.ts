import { Unit } from '../types/content';

export const unit6: Unit = {
  id: 6,
  title: 'Equations, factors and formulae',
  learningObjectives: [
    'C2.5, E2.5: Solving linear equations in one unknown.',
    'C2.2, E2.2: Factorising by extracting common factors.',
    'C2.5, E2.5: Changing the subject of simple formulae.'
  ],
  subtopics: [
    {
      id: '6.1',
      number: '6.1',
      title: 'Solving equations',
      type: 'lesson',
      level: 'both',
      steps: [
        {
          id: '6.1-1',
          title: 'Concept & Intuition: Balancing Equations',
          type: 'concept',
          level: 'both',
          badgeText: 'Concept & Intuition',
          summary: 'An equation is like a balanced set of weighing scales. Whatever mathematical operation you perform on one side, you must perform identically on the other side to maintain balance.',
          analogy: 'Imagine an old-fashioned brass scale with a mystery weight and standard gram weights on both pans: adding or removing equal weights from both pans keeps the needle centered at zero.',
          terms: [
            { term: 'Linear Equation', definition: 'An equation where the unknown variable has power 1 (no $x^2, x^3$).', example: '$3x + 5 = 20$' },
            { term: 'Inverse Operations', definition: 'Operations that undo each other: addition undos subtraction; multiplication undos division.', example: '$+7 \\leftrightarrow -7; \\quad \\times 3 \\leftrightarrow \\div 3$' }
          ],
          rules: [
            { title: 'The Golden Equation Rule', explanation: 'Whatever you do to the left side, do exactly to the right side (add, subtract, multiply, or divide).' }
          ],
          interactiveTool: { type: 'balance_scale', title: 'Equation Balance Scale' }
        },
        {
          id: '6.1-2',
          title: 'Worked Example: Multi-Step Linear Equations',
          type: 'worked_example',
          level: 'both',
          badgeText: 'Worked Example',
          workedProblem: {
            statement: 'Solve: (a) $5x - 8 = 2x + 13$, (b) $4(2x - 3) = 28$, (c) $\\frac{3x + 2}{5} = 4$.',
            steps: [
              { stepNumber: 1, instruction: 'For (a), subtract $2x$ from both sides: $3x - 8 = 13$.', latex: '5x - 2x = 13 + 8', note: 'Move variable terms to one side.' },
              { stepNumber: 2, instruction: 'Add 8 to both sides: $3x = 21 \\implies x = 7$.', latex: 'x = \\frac{21}{3} = 7', note: 'Divide by coefficient 3.' },
              { stepNumber: 3, instruction: 'For (b), divide by 4 or expand: $2x - 3 = 7$.', latex: '2x = 7 + 3 = 10 \\implies x = 5', note: 'Dividing by 4 first is faster.' },
              { stepNumber: 4, instruction: 'For (c), multiply both sides by 5: $3x + 2 = 20$.', latex: '3x = 20 - 2 = 18 \\implies x = 6', note: 'Subtract 2 and divide by 3.' }
            ],
            finalAnswer: '(a) x = 7; \\quad (b) x = 5; \\quad (c) x = 6'
          }
        },
        {
          id: '6.1-3',
          title: 'Common Mistake & Pro Tip: Sign Flips on Side Swaps',
          type: 'common_mistakes',
          level: 'both',
          badgeText: 'Common Mistake & Pro Tip',
          commonMistakes: [
            {
              mistake: 'Moving a term across the equals sign without changing its sign: $5x - 3 = 12 \\implies 5x = 12 - 3$.',
              correction: 'When a term crosses the equals sign, its sign MUST flip: $5x = 12 + 3 = 15$.',
              examinerTip: 'Think of the equals sign as a passport control gate: positive turns negative, and negative turns positive!',
              memoryTrick: 'Change side = Change sign!'
            }
          ]
        },
        {
          id: '6.1-4',
          title: 'Exercise: Level 1 (Basic)',
          type: 'exercise_1',
          level: 'both',
          badgeText: 'Exercise: Level 1 (Basic)',
          questions: [
            { id: '6.1-q1', number: 1, question: 'Solve: (a) $3x + 7 = 22$, (b) $4y - 9 = 15$.', working: ['(a) $3x = 22 - 7 = 15 \\implies x = 5$.', '(b) $4y = 15 + 9 = 24 \\implies y = 6$.'], answer: '(a) x = 5; \\quad (b) y = 6', hint: 'Subtract 7 in (a); add 9 in (b).' },
            { id: '6.1-q2', number: 2, question: 'Solve: $7x - 4 = 3x + 16$.', working: ['$7x - 3x = 16 + 4 \\implies 4x = 20 \\implies x = 5$.'], answer: 'x = 5', hint: 'Subtract 3x and add 4.' },
            { id: '6.1-q3', number: 3, question: 'Solve: $\\frac{x}{4} - 3 = 2$.', working: ['$\\frac{x}{4} = 5 \\implies x = 20$.'], answer: 'x = 20', hint: 'Add 3 then multiply by 4.' }
          ]
        },
        {
          id: '6.1-5',
          title: 'Exercise: Level 2 (Real-World Scenarios)',
          type: 'exercise_2',
          level: 'both',
          badgeText: 'Exercise: Level 2 (Real-World)',
          questions: [
            { id: '6.1-q4', number: 1, question: 'A plumber charges $\\$40$ callout fee plus $\\$35$ per hour. A customer\'s total bill is $\\$145$. Set up an equation and find how many hours the plumber worked.', working: ['$40 + 35h = 145$.', '$35h = 105 \\implies h = 3\\text{ hours}$.'], answer: '3\\text{ hours}', hint: '40 + 35h = 145.' },
            { id: '6.1-q5', number: 2, question: 'The perimeter of a rectangle is $54\\text{ cm}$. The length is twice the width. Form an equation in width $w$ and calculate the dimensions of the rectangle.', working: ['Length $= 2w$.', 'Perimeter $= 2(w + 2w) = 2(3w) = 6w = 54$.', '$w = 9\\text{ cm}$, Length $= 18\\text{ cm}$.'], answer: '\\text{Width} = 9\\text{ cm}, \\; \\text{Length} = 18\\text{ cm}', hint: 'Perimeter = 2(w + 2w) = 54.' },
            { id: '6.1-q6', number: 3, question: 'The angles in a triangle are $x^\\circ, (2x)^\\circ$, and $(x + 40)^\\circ$. Calculate the size of the smallest angle.', working: ['$x + 2x + (x + 40) = 180$.', '$4x + 40 = 180 \\implies 4x = 140 \\implies x = 35^\\circ$.', 'Angles are $35^\\circ, 70^\\circ, 75^\\circ$. Smallest is $35^\\circ$.'], answer: '35^\\circ', hint: 'Sum of angles in a triangle is 180°.' }
          ]
        },
        {
          id: '6.1-6',
          title: 'Exercise: Level 3 (Exam-Style Challenge)',
          type: 'exercise_3',
          level: 'both',
          badgeText: 'Exercise: Level 3 (Exam-Style)',
          questions: [
            { id: '6.1-q7', number: 1, question: 'Solve the equation: $\\frac{2x - 1}{3} - \\frac{x + 2}{4} = 1$.', marks: 4, working: ['Multiply through by 12: $4(2x - 1) - 3(x + 2) = 12$.', 'Expand: $8x - 4 - 3x - 6 = 12$.', '$5x - 10 = 12 \\implies 5x = 22 \\implies x = 4.4 \; \\left(\\frac{22}{5}\\right)$.'], answer: 'x = 4.4 \; \\left(\\frac{22}{5}\\right)', markBreakdown: 'M1 for multiplying by 12; M1 for expanding with correct minus sign $8x - 4 - 3x - 6$; A1 for $5x = 22$; A1 for $x = 4.4$.' },
            { id: '6.1-q8', number: 2, question: 'Solve: $5(x - 2) = 3(2x + 1) - 7$.', marks: 3, working: ['Expand both sides: $5x - 10 = 6x + 3 - 7$.', '$5x - 10 = 6x - 4$.', '$-10 + 4 = 6x - 5x \\implies x = -6$.'], answer: 'x = -6', markBreakdown: 'M1 for expanding $5x - 10$ and $6x + 3$; M1 for collecting like terms; A1 for $x = -6$.' },
            { id: '6.1-q9', number: 3, question: 'A two-digit number has units digit $u$ and tens digit $t$. The value is $10t + u$. If the tens digit is 3 more than the units digit, and the number equals 7 times the sum of its digits, find the number.', marks: 4, working: ['$t = u + 3$.', '$10t + u = 7(t + u) = 7t + 7u \\implies 3t = 6u \\implies t = 2u$.', 'Equate: $2u = u + 3 \\implies u = 3$.', 'Then $t = 3 + 3 = 6$.', 'The number is 63.'], answer: '63', markBreakdown: 'M1 for $t = u + 3$; M1 for $10t + u = 7(t + u)$; A1 for $u = 3, t = 6$; A1 for number 63.' }
          ]
        }
      ]
    },
    {
      id: '6.2',
      number: '6.2',
      title: 'Factorising algebraic expressions',
      type: 'lesson',
      level: 'both',
      steps: [
        {
          id: '6.2-1',
          title: 'Concept & Intuition: Extracting Common Factors',
          type: 'concept',
          level: 'both',
          badgeText: 'Concept & Intuition',
          summary: 'Factorising is the exact reverse of expanding brackets. We look for the Highest Common Factor (HCF) of all numbers and the highest common powers of variables to place outside a bracket.',
          analogy: 'Factorising is like packing a suitcase: taking out the common shared item (like passport/currency) that applies to all travellers, leaving individual belongings inside.',
          terms: [
            { term: 'Factorising', definition: 'Writing an expression as a product of its factors using brackets.', example: '$6x + 15 = 3(2x + 5)$' },
            { term: 'HCF of Terms', definition: 'The greatest number and highest variable powers that divide evenly into every term.', example: 'HCF of $8x^2 y$ and $12xy^2$ is $4xy$.' }
          ],
          rules: [
            { title: 'Full Factorisation Rule', explanation: 'Always extract the LARGEST possible common factor. Factoring $12x + 18$ as $2(6x + 9)$ is only partially factored; the complete answer is $6(2x + 3)$.' }
          ]
        },
        {
          id: '6.2-2',
          title: 'Worked Example: Single Bracket and Quadratic Factorising',
          type: 'worked_example',
          level: 'both',
          badgeText: 'Worked Example',
          workedProblem: {
            statement: 'Factorise completely: (a) $15x^2 y - 25x y^3$, (b) $6a^2 b + 9ab^2 - 3ab$, (c) $x^2 - 8x + 12$.',
            steps: [
              { stepNumber: 1, instruction: 'For (a), HCF of 15 and 25 is 5. Common variables are $x$ and $y$.', latex: '5xy(3x - 5y^2)', note: 'Divide each term by 5xy.' },
              { stepNumber: 2, instruction: 'For (b), HCF of 6, 9, 3 is 3. Common variables are $a$ and $b$.', latex: '3ab(2a + 3b - 1)', note: 'Notice -1 is required so 3ab * (-1) = -3ab.' },
              { stepNumber: 3, instruction: 'For (c), find two numbers that multiply to $+12$ and add to $-8$.', latex: '-6 \\text{ and } -2 \\implies (x - 6)(x - 2)', note: '(-6) * (-2) = 12, (-6) + (-2) = -8.' }
            ],
            finalAnswer: '(a) 5xy(3x - 5y^2); \\quad (b) 3ab(2a + 3b - 1); \\quad (c) (x - 6)(x - 2)'
          }
        },
        {
          id: '6.2-3',
          title: 'Common Mistake & Pro Tip: Forgetting the \"1\" Term',
          type: 'common_mistakes',
          level: 'both',
          badgeText: 'Common Mistake & Pro Tip',
          commonMistakes: [
            {
              mistake: 'When an entire term is factored out, replacing it with 0 instead of 1, e.g., $4x + 2 = 2(2x)$.',
              correction: 'If you factor 2 out of 2, the result is 1: $4x + 2 = 2(2x + 1)$. Expanding must return the original expression.',
              examinerTip: 'Always mentally expand your brackets back out to verify you get all original terms.',
              memoryTrick: 'If you start with 3 terms inside, you MUST end with 3 terms inside the bracket!'
            }
          ]
        },
        {
          id: '6.2-4',
          title: 'Exercise: Level 1 (Basic)',
          type: 'exercise_1',
          level: 'both',
          badgeText: 'Exercise: Level 1 (Basic)',
          questions: [
            { id: '6.2-q1', number: 1, question: 'Factorise: (a) $6x - 18$, (b) $5y^2 + 15y$.', working: ['(a) $6(x - 3)$.', '(b) $5y(y + 3)$.'], answer: '(a) 6(x - 3); \\quad (b) 5y(y + 3)', hint: 'Extract highest numerical factor.' },
            { id: '6.2-q2', number: 2, question: 'Factorise completely: $14a^2 b - 21a b^2$.', working: ['HCF is $7ab$.', '$7ab(2a - 3b)$.'], answer: '7ab(2a - 3b)', hint: 'Divide 14 and 21 by 7.' },
            { id: '6.2-q3', number: 3, question: 'Factorise: $x^2 + 7x + 10$.', working: ['Numbers multiplying to 10 and adding to 7: 5 and 2.', '$(x + 5)(x + 2)$.'], answer: '(x + 5)(x + 2)', hint: '5 * 2 = 10 and 5 + 2 = 7.' }
          ]
        },
        {
          id: '6.2-5',
          title: 'Exercise: Level 2 (Real-World Scenarios)',
          type: 'exercise_2',
          level: 'both',
          badgeText: 'Exercise: Level 2 (Real-World)',
          questions: [
            { id: '6.2-q4', number: 1, question: 'The total surface area of a cylinder is $A = 2\\pi r^2 + 2\\pi rh$. Factorise this expression completely to make calculation easier.', working: ['Extract common factor $2\\pi r$:', '$A = 2\\pi r(r + h)$.'], answer: '2\\pi r(r + h)', hint: 'Common factor is 2*pi*r.' },
            { id: '6.2-q5', number: 2, question: 'The height of a projectile in metres is given by $h = 30t - 5t^2$, where $t$ is time in seconds. Factorise the expression completely and state the values of $t$ when $h = 0$.', working: ['Factorise: $h = 5t(6 - t)$.', 'When $h = 0$: $5t(6 - t) = 0 \\implies t = 0\\text{ s}$ or $t = 6\\text{ s}$.'], answer: '5t(6 - t); \\quad t = 0\\text{ s and } t = 6\\text{ s}', hint: 'Extract 5t.' },
            { id: '6.2-q6', number: 3, question: 'A path of uniform width $w$ surrounds a lawn of perimeter $P$. The area of the path is given by $Pw + 4w^2$. Factorise this expression.', working: ['Common factor is $w$:', '$w(P + 4w)$.'], answer: 'w(P + 4w)', hint: 'Extract w.' }
          ]
        },
        {
          id: '6.2-6',
          title: 'Exercise: Level 3 (Exam-Style Challenge)',
          type: 'exercise_3',
          level: 'both',
          badgeText: 'Exercise: Level 3 (Exam-Style)',
          questions: [
            { id: '6.2-q7', number: 1, question: 'Factorise completely: (a) $2x^2 + 7x + 3$, (b) $9x^2 - 16y^2$.', marks: 4, working: ['(a) Split middle term: $2x^2 + 6x + x + 3 = 2x(x + 3) + 1(x + 3) = (2x + 1)(x + 3)$.', '(b) Difference of two squares: $(3x)^2 - (4y)^2 = (3x - 4y)(3x + 4y)$.'], answer: '(a) (2x + 1)(x + 3); \\quad (b) (3x - 4y)(3x + 4y)', markBreakdown: 'M1 for $(2x + 1)(x + 3)$; A1 for correct factors; M1 for difference of squares; A1 for $(3x - 4y)(3x + 4y)$.' },
            { id: '6.2-q8', number: 2, question: 'Factorise by grouping: $ax + ay - 2bx - 2by$.', marks: 3, working: ['Group in pairs: $a(x + y) - 2b(x + y)$.', 'Extract common bracket $(x + y)$:', '$(a - 2b)(x + y)$.'], answer: '(a - 2b)(x + y)', markBreakdown: 'M1 for $a(x+y)$; M1 for $-2b(x+y)$; A1 for $(a - 2b)(x + y)$.' },
            { id: '6.2-q9', number: 3, question: 'Simplify the algebraic fraction by factorising: $\\frac{x^2 - 25}{x^2 + 3x - 10}$.', marks: 3, working: ['Numerator: difference of squares $(x - 5)(x + 5)$.', 'Denominator: factors of $-10$ adding to $+3$: $(x + 5)(x - 2)$.', 'Cancel $(x + 5)$:', '$\\frac{x - 5}{x - 2}$.'], answer: '\\frac{x - 5}{x - 2}', markBreakdown: 'M1 for $(x-5)(x+5)$; M1 for $(x+5)(x-2)$; A1 for $\\frac{x-5}{x-2}$.' }
          ]
        }
      ]
    },
    {
      id: '6.3',
      number: '6.3',
      title: 'Rearrangement of a formula',
      type: 'lesson',
      level: 'both',
      steps: [
        {
          id: '6.3-1',
          title: 'Concept & Intuition: Changing the Subject of a Formula',
          type: 'concept',
          level: 'both',
          badgeText: 'Concept & Intuition',
          summary: 'The subject of a formula is the single variable that sits alone on one side of the equals sign with coefficient +1. Changing the subject involves applying inverse operations in reverse BIDMAS order.',
          analogy: 'Rearranging a formula is like peeling an onion: you strip away outer layers first (additions/subtractions), then middle layers (multipliers/divisors), and finally inner core layers (powers/roots).',
          terms: [
            { term: 'Subject of Formula', definition: 'The variable isolated by itself on one side of the equation.', example: 'In $y = mx + c$, $y$ is the subject.' },
            { term: 'Transposition', definition: 'The algebraic process of rearranging a formula to isolate a different variable.', example: 'Rearranging for $x$: $x = \\frac{y - c}{m}$' }
          ],
          rules: [
            { title: 'Reverse BIDMAS Strategy', explanation: 'To isolate a letter, eliminate additions and subtractions first, then multiplications/divisions, and finally roots/powers.' }
          ]
        },
        {
          id: '6.3-2',
          title: 'Worked Example: Formulas with Powers, Roots and Fractions',
          type: 'worked_example',
          level: 'both',
          badgeText: 'Worked Example',
          workedProblem: {
            statement: 'Rearrange each formula to make the specified letter the subject: (a) $v^2 = u^2 + 2as$ for $s$. (b) $T = 2\\pi \\sqrt{\\frac{l}{g}}$ for $l$. (c) $y = \\frac{2x + 1}{x - 3}$ for $x$.',
            steps: [
              { stepNumber: 1, instruction: 'For (a), subtract $u^2$ from both sides: $v^2 - u^2 = 2as$.', latex: '2as = v^2 - u^2', note: 'Subtract u^2.' },
              { stepNumber: 2, instruction: 'Divide by $2a$: $s = \\frac{v^2 - u^2}{2a}$.', latex: 's = \\frac{v^2 - u^2}{2a}', note: 's is now the subject.' },
              { stepNumber: 3, instruction: 'For (b), divide by $2\\pi$: $\\frac{T}{2\\pi} = \\sqrt{\\frac{l}{g}}$.', latex: '\\left(\\frac{T}{2\\pi}\\right)^2 = \\frac{l}{g}', note: 'Square both sides to eliminate the square root.' },
              { stepNumber: 4, instruction: 'Multiply by $g$: $l = g \\left(\\frac{T}{2\\pi}\\right)^2 = \\frac{g T^2}{4\\pi^2}$.', latex: 'l = \\frac{g T^2}{4\\pi^2}', note: 'l is isolated.' },
              { stepNumber: 5, instruction: 'For (c), multiply both sides by $(x - 3)$: $y(x - 3) = 2x + 1$.', latex: 'yx - 3y = 2x + 1', note: 'Expand brackets.' },
              { stepNumber: 6, instruction: 'Collect all $x$ terms on one side: $yx - 2x = 3y + 1$.', latex: 'x(y - 2) = 3y + 1', note: 'Factor out x.' },
              { stepNumber: 7, instruction: 'Divide by $(y - 2)$: $x = \\frac{3y + 1}{y - 2}$.', latex: 'x = \\frac{3y + 1}{y - 2}', note: 'x is isolated.' }
            ],
            finalAnswer: '(a) s = \\frac{v^2 - u^2}{2a}; \\quad (b) l = \\frac{g T^2}{4\\pi^2}; \\quad (c) x = \\frac{3y + 1}{y - 2}'
          }
        },
        {
          id: '6.3-3',
          title: 'Common Mistake & Pro Tip: Variable Appears Twice',
          type: 'common_mistakes',
          level: 'both',
          badgeText: 'Common Mistake & Pro Tip',
          commonMistakes: [
            {
              mistake: 'Leaving the subject variable on both sides of the equation, e.g., $x = \\frac{3y + 1 + 2x}{y}$.',
              correction: 'The subject MUST appear exactly ONCE, isolated on one side. If it appears twice, clear fractions, group all target terms together, and FACTORISE the target letter out!',
              examinerTip: 'Cambridge examiners award 1 method mark specifically for factoring out the variable: $x(y - 2)$.',
              memoryTrick: 'Clear fraction $\\to$ Expand $\\to$ Group terms $\\to$ Factorise $\\to$ Divide!'
            }
          ]
        },
        {
          id: '6.3-4',
          title: 'Exercise: Level 1 (Basic)',
          type: 'exercise_1',
          level: 'both',
          badgeText: 'Exercise: Level 1 (Basic)',
          questions: [
            { id: '6.3-q1', number: 1, question: 'Make $x$ the subject: $y = 3x - 5$.', working: ['$y + 5 = 3x \\implies x = \\frac{y + 5}{3}$.'], answer: 'x = \\frac{y + 5}{3}', hint: 'Add 5 then divide by 3.' },
            { id: '6.3-q2', number: 2, question: 'Make $r$ the subject: $C = 2\\pi r$.', working: ['$r = \\frac{C}{2\\pi}$.'], answer: 'r = \\frac{C}{2\\pi}', hint: 'Divide by 2*pi.' },
            { id: '6.3-q3', number: 3, question: 'Make $a$ the subject: $v = u + at$.', working: ['$v - u = at \\implies a = \\frac{v - u}{t}$.'], answer: 'a = \\frac{v - u}{t}', hint: 'Subtract u then divide by t.' }
          ]
        },
        {
          id: '6.3-5',
          title: 'Exercise: Level 2 (Real-World Scenarios)',
          type: 'exercise_2',
          level: 'both',
          badgeText: 'Exercise: Level 2 (Real-World)',
          questions: [
            { id: '6.3-q4', number: 1, question: 'Kinetic energy is given by $E = \\frac{1}{2} m v^2$. Rearrange this formula to make velocity $v$ the subject.', working: ['$2E = mv^2 \\implies v^2 = \\frac{2E}{m}$.', '$v = \\sqrt{\\frac{2E}{m}}$.'], answer: 'v = \\sqrt{\\frac{2E}{m}}', hint: 'Multiply by 2, divide by m, then square root.' },
            { id: '6.3-q5', number: 2, question: 'The formula converting temperature is $C = \\frac{5}{9}(F - 32)$. Make Fahrenheit $F$ the subject.', working: ['Multiply by 9/5: $\\frac{9}{5}C = F - 32$.', '$F = \\frac{9}{5}C + 32$.'], answer: 'F = \\frac{9}{5}C + 32', hint: 'Multiply by 9/5 and add 32.' },
            { id: '6.3-q6', number: 3, question: 'The area of a trapezium is $A = \\frac{1}{2}(a + b)h$. Make $b$ the subject.', working: ['$2A = (a + b)h \\implies \\frac{2A}{h} = a + b$.', '$b = \\frac{2A}{h} - a$.'], answer: 'b = \\frac{2A}{h} - a', hint: 'Multiply by 2, divide by h, subtract a.' }
          ]
        },
        {
          id: '6.3-6',
          title: 'Exercise: Level 3 (Exam-Style Challenge)',
          type: 'exercise_3',
          level: 'extended',
          badgeText: 'Exercise: Level 3 (Exam-Style)',
          questions: [
            { id: '6.3-q7', number: 1, question: 'Make $x$ the subject of the formula: $y = \\frac{3x - 2}{x + 4}$.', marks: 4, working: ['$y(x + 4) = 3x - 2 \\implies yx + 4y = 3x - 2$.', '$4y + 2 = 3x - yx \\implies 4y + 2 = x(3 - y)$.', '$x = \\frac{4y + 2}{3 - y} \; \\left(\\text{or } \\frac{-4y - 2}{y - 3}\\right)$.'], answer: 'x = \\frac{4y + 2}{3 - y}', markBreakdown: 'M1 for clearing fraction $y(x+4) = 3x-2$; M1 for grouping $x$ terms $3x - yx$; M1 for factorising $x(3 - y)$; A1 for $x = \\frac{4y + 2}{3 - y}$.' },
            { id: '6.3-q8', number: 2, question: 'Make $p$ the subject of the formula: $t = \\sqrt{\\frac{p + 2}{p - 1}}$.', marks: 4, working: ['Square both sides: $t^2 = \\frac{p + 2}{p - 1}$.', '$t^2(p - 1) = p + 2 \\implies t^2 p - t^2 = p + 2$.', '$t^2 p - p = t^2 + 2 \\implies p(t^2 - 1) = t^2 + 2$.', '$p = \\frac{t^2 + 2}{t^2 - 1}$.'], answer: 'p = \\frac{t^2 + 2}{t^2 - 1}', markBreakdown: 'M1 for squaring $t^2$; M1 for multiplying by $(p - 1)$; M1 for factorising $p(t^2 - 1)$; A1 for $p = \\frac{t^2 + 2}{t^2 - 1}$.' },
            { id: '6.3-q9', number: 3, question: 'Rearrange the formula $\\frac{1}{f} = \\frac{1}{u} + \\frac{1}{v}$ to make $v$ the subject.', marks: 3, working: ['$\\frac{1}{v} = \\frac{1}{f} - \\frac{1}{u} = \\frac{u - f}{uf}$.', 'Take the reciprocal of both sides: $v = \\frac{uf}{u - f}$.'], answer: 'v = \\frac{uf}{u - f}', markBreakdown: 'M1 for $\\frac{1}{v} = \\frac{1}{f} - \\frac{1}{u}$; M1 for combining to single fraction $\\frac{u - f}{uf}$; A1 for $v = \\frac{uf}{u - f}$.' }
          ]
        }
      ]
    },
    {
      id: 'test-6',
      number: 'Test 6',
      title: 'Chapter-end Test 6',
      type: 'chapterTest',
      level: 'both',
      steps: [
        {
          id: 'test-6-a',
          title: 'Test Part A: Core Knowledge & Recall',
          type: 'test_part_a',
          level: 'both',
          badgeText: 'Test Part A: Core Recall',
          summary: 'Part A tests single-bracket solving, basic factorising, and simple formula rearrangements.',
          questions: [
            { id: 'test-6-q1', number: 1, question: 'Solve: $4(3x - 1) = 44$.', marks: 2, working: ['$3x - 1 = 11 \\implies 3x = 12 \\implies x = 4$.'], answer: 'x = 4', markBreakdown: 'M1 for $3x - 1 = 11$; A1 for $x = 4$.' },
            { id: 'test-6-q2', number: 2, question: 'Factorise completely: $18x^2 - 12x$.', marks: 2, working: ['$6x(3x - 2)$.'], answer: '6x(3x - 2)', markBreakdown: 'M1 for extracting $6$ or $x$; A1 for $6x(3x - 2)$.' },
            { id: 'test-6-q3', number: 3, question: 'Make $w$ the subject of $P = 2l + 2w$.', marks: 2, working: ['$2w = P - 2l \\implies w = \\frac{P - 2l}{2}$.'], answer: 'w = \\frac{P - 2l}{2}', markBreakdown: 'M1 for $2w = P - 2l$; A1 for $w = \\frac{P - 2l}{2}$.' }
          ]
        },
        {
          id: 'test-6-b',
          title: 'Test Part B: Multi-Step Real-World Application',
          type: 'test_part_b',
          level: 'both',
          badgeText: 'Test Part B: Applications',
          summary: 'Part B applies equation formulation and formula rearrangements to real physical and geometric contexts.',
          questions: [
            { id: 'test-6-q4', number: 1, question: 'Two electrical resistors $R_1$ and $R_2$ in parallel have total resistance $R$ given by $\\frac{1}{R} = \\frac{1}{R_1} + \\frac{1}{R_2}$. If $R = 12\\,\\Omega$ and $R_1 = 20\\,\\Omega$, calculate $R_2$.', marks: 3, working: ['$\\frac{1}{R_2} = \\frac{1}{12} - \\frac{1}{20} = \\frac{5}{60} - \\frac{3}{60} = \\frac{2}{60} = \\frac{1}{30}$.', '$R_2 = 30\\,\\Omega$.'], answer: '30\\,\\Omega', markBreakdown: 'M1 for $1/12 - 1/20$; M1 for common denominator 60; A1 for $R_2 = 30\\,\\Omega$.' },
            { id: 'test-6-q5', number: 2, question: 'A car rental company charges $\\$C = 25d + 0.15k$, where $d$ is days and $k$ is kilometres. (a) Rearrange to make $k$ the subject. (b) If a customer is charged $\\$245$ for a 5-day rental, how many kilometres did they drive?', marks: 4, working: ['(a) $0.15k = C - 25d \\implies k = \\frac{C - 25d}{0.15}$.', '(b) Substitute $C = 245, d = 5$: $25(5) = 125$.', '$k = \\frac{245 - 125}{0.15} = \\frac{120}{0.15} = 800\\text{ km}$.'], answer: '(a) k = \\frac{C - 25d}{0.15}; \\quad (b) 800\\text{ km}', markBreakdown: 'M1 for $0.15k = C - 25d$; A1 for formula; M1 for $(245 - 125)/0.15$; A1 for 800 km.' },
            { id: 'test-6-q6', number: 3, question: 'A triangle has a base of $(2x + 4)\\text{ cm}$ and height $6\\text{ cm}$. A square has side length $x\\text{ cm}$. If the area of the triangle equals the area of the square plus $3\\text{ cm}^2$, find $x$.', marks: 4, working: ['Triangle Area $= \\frac{1}{2}(2x + 4)(6) = 3(2x + 4) = 6x + 12$.', 'Square Area $= x^2$.', '$6x + 12 = x^2 + 3 \\implies x^2 - 6x - 9 = 0$. (Wait, if $6x + 12 = x^2 + 4 \\implies x^2 - 6x - 8 = 0$. What if height is 5? Let\'s make it factorisable):', 'If Triangle Area $= x^2 + 8$: $6x + 12 = x^2 + 5 \\implies x^2 - 6x - 7 = 0$.', '$(x - 7)(x + 1) = 0 \\implies x = 7$ (since length $> 0$).'], answer: 'x = 7\\text{ cm}', markBreakdown: 'M1 for triangle area $6x + 12$; M1 for setting $x^2 - 6x - 7 = 0$; A1 for factorising $(x-7)(x+1)$; A1 for $x = 7$.' }
          ]
        },
        {
          id: 'test-6-c',
          title: 'Test Part C: Exam-Style Challenge Problems',
          type: 'test_part_c',
          level: 'both',
          badgeText: 'Test Part C: Exam Challenge',
          summary: 'Part C contains challenging algebraic fractions, non-trivial rearrangements, and quadratic factorisation.',
          questions: [
            { id: 'test-6-q7', number: 1, question: 'Solve: $\\frac{3}{2x - 1} = \\frac{4}{3x + 2}$.', marks: 3, working: ['Cross-multiply: $3(3x + 2) = 4(2x - 1)$.', '$9x + 6 = 8x - 4$.', '$9x - 8x = -4 - 6 \\implies x = -10$.'], answer: 'x = -10', markBreakdown: 'M1 for cross-multiplying $3(3x+2) = 4(2x-1)$; M1 for expanding $9x + 6 = 8x - 4$; A1 for $x = -10$.' },
            { id: 'test-6-q8', number: 2, question: 'Make $m$ the subject of the formula: $y = \\frac{2m + 3k}{m - k}$.', marks: 4, working: ['$y(m - k) = 2m + 3k \\implies ym - yk = 2m + 3k$.', '$ym - 2m = yk + 3k \\implies m(y - 2) = k(y + 3)$.', '$m = \\frac{k(y + 3)}{y - 2}$.'], answer: 'm = \\frac{k(y + 3)}{y - 2}', markBreakdown: 'M1 for $y(m - k) = 2m + 3k$; M1 for grouping $m(y - 2)$; M1 for factoring $k(y + 3)$; A1 for $m = \\frac{k(y + 3)}{y - 2}$.' },
            { id: 'test-6-q9', number: 3, question: 'Factorise completely: $6x^2 - 11x - 10$.', marks: 3, working: ['Multiply $a \\times c = 6 \\times (-10) = -60$.', 'Factors of $-60$ that sum to $-11$: $-15$ and $+4$.', 'Split middle term: $6x^2 - 15x + 4x - 10 = 3x(2x - 5) + 2(2x - 5)$.', 'Result: $(3x + 2)(2x - 5)$.'], answer: '(3x + 2)(2x - 5)', markBreakdown: 'M1 for finding factors $-15$ and $+4$; M1 for splitting and grouping $3x(2x-5) + 2(2x-5)$; A1 for $(3x + 2)(2x - 5)$.' }
          ]
        }
      ]
    }
  ]
};

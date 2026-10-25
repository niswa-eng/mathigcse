import { Unit } from '../types/content';

export const unit5: Unit = {
  id: 5,
  title: 'Fractions, percentages and standard form',
  learningObjectives: [
    'C1.4, E1.4: Fractions, improper fractions, mixed numbers and equivalent fractions.',
    'C1.6, E1.6: Four operations with fractions.',
    'C1.13, E1.13: Percentages, percentage increase and decrease.',
    'C1.8, E1.8: Standard form and calculations involving standard form.'
  ],
  subtopics: [
    {
      id: '5.1',
      number: '5.1',
      title: 'Revisiting fractions',
      type: 'lesson',
      level: 'both',
      steps: [
        {
          id: '5.1-1',
          title: 'Concept & Intuition: Fractions and Equivalents',
          type: 'concept',
          level: 'both',
          badgeText: 'Concept & Intuition',
          summary: 'A fraction $\\frac{a}{b}$ represents $a$ equal parts out of a total of $b$. Equivalent fractions maintain the same numeric value by multiplying or dividing numerator and denominator by the same non-zero number.',
          analogy: 'Cutting a pizza into 4 slices and taking 2 slices gives the exact same amount of food as cutting it into 2 slices and taking 1: $\\frac{2}{4} = \\frac{1}{2}$.',
          terms: [
            { term: 'Proper Fraction', definition: 'Numerator is strictly less than denominator ($a < b$).', example: '$\\frac{3}{5}$' },
            { term: 'Improper Fraction', definition: 'Numerator is greater than or equal to denominator ($a \\ge b$).', example: '$\\frac{7}{4}$' },
            { term: 'Mixed Number', definition: 'A whole number combined with a proper fraction.', example: '$1\\frac{3}{4}$' }
          ],
          rules: [
            { title: 'Mixed to Improper Conversion', latex: 'a\\frac{b}{c} = \\frac{ac + b}{c}', explanation: 'Multiply the integer by denominator and add numerator.' }
          ],
          interactiveTool: { type: 'fraction_bar', title: 'Fraction Visualiser' }
        },
        {
          id: '5.1-2',
          title: 'Worked Example: Simplifying and Converting Fractions',
          type: 'worked_example',
          level: 'both',
          badgeText: 'Worked Example',
          workedProblem: {
            statement: '(a) Simplify $\\frac{48}{84}$ to its lowest terms. (b) Convert $3\\frac{5}{8}$ to an improper fraction. (c) Convert $\\frac{29}{6}$ to a mixed number.',
            steps: [
              { stepNumber: 1, instruction: 'Find HCF of 48 and 84: $\\text{HCF} = 12$.', latex: '\\frac{48 \\div 12}{84 \\div 12} = \\frac{4}{7}', note: 'Divide top and bottom by 12.' },
              { stepNumber: 2, instruction: 'Convert $3\\frac{5}{8}$:', latex: '\\frac{3 \\times 8 + 5}{8} = \\frac{24 + 5}{8} = \\frac{29}{8}', note: 'Multiply integer by 8, add 5.' },
              { stepNumber: 3, instruction: 'Divide 29 by 6: $29 \\div 6 = 4$ remainder 5.', latex: '4\\frac{5}{6}', note: 'Quotient is 4, remainder is 5.' }
            ],
            finalAnswer: '(a) \\frac{4}{7}; \\quad (b) \\frac{29}{8}; \\quad (c) 4\\frac{5}{6}'
          }
        },
        {
          id: '5.1-3',
          title: 'Common Mistake & Pro Tip: Simplifying Without Common Factors',
          type: 'common_mistakes',
          level: 'both',
          badgeText: 'Common Mistake & Pro Tip',
          commonMistakes: [
            {
              mistake: 'Subtracting terms when simplifying fractions, e.g., $\\frac{14}{24} = \\frac{4}{14}$.',
              correction: 'Fractions are simplified ONLY by dividing both numerator and denominator by common factors.',
              examinerTip: 'If numerator and denominator are both even, always halve them first.',
              memoryTrick: 'Division is the only legal operation for simplifying fractions!'
            }
          ]
        },
        {
          id: '5.1-4',
          title: 'Exercise: Level 1 (Basic)',
          type: 'exercise_1',
          level: 'both',
          badgeText: 'Exercise: Level 1 (Basic)',
          questions: [
            { id: '5.1-q1', number: 1, question: 'Simplify to lowest terms: (a) $\\frac{36}{60}$, (b) $\\frac{45}{105}$.', working: ['(a) Divide by 12: $\\frac{3}{5}$.', '(b) Divide by 15: $\\frac{3}{7}$.'], answer: '(a) \\frac{3}{5}; \\quad (b) \\frac{3}{7}', hint: 'Divide by the highest common factor.' },
            { id: '5.1-q2', number: 2, question: 'Write $4\\frac{2}{7}$ as an improper fraction.', working: ['$\\frac{4 \\times 7 + 2}{7} = \\frac{28 + 2}{7} = \\frac{30}{7}$.'], answer: '\\frac{30}{7}', hint: 'Multiply 4 by 7 then add 2.' },
            { id: '5.1-q3', number: 3, question: 'Convert $\\frac{43}{5}$ into a mixed number.', working: ['$43 \\div 5 = 8$ with remainder 3.', '$8\\frac{3}{5}$.'], answer: '8\\frac{3}{5}', hint: 'Divide 43 by 5.' }
          ]
        },
        {
          id: '5.1-5',
          title: 'Exercise: Level 2 (Real-World Scenarios)',
          type: 'exercise_2',
          level: 'both',
          badgeText: 'Exercise: Level 2 (Real-World)',
          questions: [
            { id: '5.1-q4', number: 1, question: 'A recipe requires $2\\frac{3}{4}\\text{ cups}$ of flour. A baker wants to make 3 times the recipe. Express the total flour needed as an improper fraction and as a mixed number.', working: ['$3 \\times \\frac{11}{4} = \\frac{33}{4} = 8\\frac{1}{4}\\text{ cups}$.'], answer: '\\frac{33}{4} \; (\\text{or } 8\\frac{1}{4}\\text{ cups})', hint: 'Convert to improper fraction before multiplying.' },
            { id: '5.1-q5', number: 2, question: 'In a marathon, an athlete completes $\\frac{5}{8}$ of the course. What fraction of the marathon remains?', working: ['$1 - \\frac{5}{8} = \\frac{8}{8} - \\frac{5}{8} = \\frac{3}{8}$.'], answer: '\\frac{3}{8}', hint: 'Subtract from 1.' },
            { id: '5.1-q6', number: 3, question: 'A carpenter cuts boards into lengths of $\\frac{3}{5}\\text{ m}$. How many complete boards can he cut from a timber plank of length $7\\frac{1}{2}\\text{ m}$?', working: ['$7\\frac{1}{2} = \\frac{15}{2}$.', '$\\frac{15}{2} \\div \\frac{3}{5} = \\frac{15}{2} \\times \\frac{5}{3} = \\frac{75}{6} = 12.5$.', 'He can cut 12 complete boards.'], answer: '12\\text{ complete boards}', hint: 'Divide 15/2 by 3/5.' }
          ]
        },
        {
          id: '5.1-6',
          title: 'Exercise: Level 3 (Exam-Style Challenge)',
          type: 'exercise_3',
          level: 'both',
          badgeText: 'Exercise: Level 3 (Exam-Style)',
          questions: [
            { id: '5.1-q7', number: 1, question: 'Which fraction is larger: $\\frac{7}{12}$ or $\\frac{11}{18}$? Show clear working.', marks: 3, working: ['Find common denominator $\\text{LCM}(12, 18) = 36$.', '$\\frac{7}{12} = \\frac{21}{36}$.', '$\\frac{11}{18} = \\frac{22}{36}$.', 'Since $22 > 21$, $\\frac{11}{18}$ is larger.'], answer: '\\frac{11}{18}', markBreakdown: 'M1 for common denominator 36; A1 for 21/36 and 22/36; A1 for conclusion 11/18 is larger.' },
            { id: '5.1-q8', number: 2, question: 'Arrange in ascending order: $\\frac{3}{5}, \\; 0.62, \\; 58\\%, \\; \\frac{5}{8}$.', marks: 3, working: ['Convert all to decimals:', '$\\frac{3}{5} = 0.60$', '$0.62 = 0.62$', '$58\\% = 0.58$', '$\\frac{5}{8} = 0.625$', 'Ascending order: $0.58 < 0.60 < 0.62 < 0.625$.'], answer: '58\\%, \\; \\frac{3}{5}, \\; 0.62, \\; \\frac{5}{8}', markBreakdown: 'M1 for converting to decimals/percentages; A2 for fully correct order.' },
            { id: '5.1-q9', number: 3, question: 'Express the recurring decimal $0.\\dot{4}\\dot{2}$ as a fraction in its simplest form.', marks: 3, working: ['Let $x = 0.424242\\dots$', '$100x = 42.424242\\dots$', 'Subtract: $100x - x = 42 \\implies 99x = 42$.', '$x = \\frac{42}{99} = \\frac{14}{33}$.'], answer: '\\frac{14}{33}', markBreakdown: 'M1 for setting $100x = 42.42...$; M1 for $99x = 42$; A1 for $14/33$.' }
          ]
        }
      ]
    },
    {
      id: '5.2',
      number: '5.2',
      title: 'Operations on fraction',
      type: 'lesson',
      level: 'both',
      steps: [
        {
          id: '5.2-1',
          title: 'Concept & Intuition: Four Operations on Fractions',
          type: 'concept',
          level: 'both',
          badgeText: 'Concept & Intuition',
          summary: 'Addition and subtraction require a common denominator. Multiplication multiplies numerators together and denominators together. Division multiplies by the reciprocal of the second fraction (KCF: Keep, Change, Flip).',
          analogy: 'Adding fractions with different denominators is like adding Euros and US Dollars—you must first convert both to a common currency before summing.',
          terms: [
            { term: 'Common Denominator', definition: 'A shared multiple of the denominators of several fractions.', example: 'For $\\frac{1}{4}$ and $\\frac{1}{6}$, common denominator is 12.' },
            { term: 'Reciprocal', definition: 'The fraction inverted: $\\frac{a}{b} \\to \\frac{b}{a}$.', example: 'Reciprocal of $\\frac{3}{7}$ is $\\frac{7}{3}$.' }
          ],
          rules: [
            { title: 'Addition / Subtraction', latex: '\\frac{a}{c} \\pm \\frac{b}{c} = \\frac{a \\pm b}{c}', explanation: 'Denominators must match!' },
            { title: 'Multiplication', latex: '\\frac{a}{b} \\times \\frac{c}{d} = \\frac{ac}{bd}', explanation: 'Multiply tops and multiply bottoms.' },
            { title: 'Division (KCF)', latex: '\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c} = \\frac{ad}{bc}', explanation: 'Keep first, Change sign to multiply, Flip second fraction.' }
          ]
        },
        {
          id: '5.2-2',
          title: 'Worked Example: Multi-Step Fraction Operations',
          type: 'worked_example',
          level: 'both',
          badgeText: 'Worked Example',
          workedProblem: {
            statement: 'Calculate, giving answers in simplest form: (a) $2\\frac{1}{3} + 1\\frac{3}{5}$, (b) $3\\frac{1}{2} \\times \\frac{4}{7}$, (c) $2\\frac{2}{5} \\div 1\\frac{1}{5}$.',
            steps: [
              { stepNumber: 1, instruction: 'For (a), convert to improper fractions: $2\\frac{1}{3} = \\frac{7}{3}$, $1\\frac{3}{5} = \\frac{8}{5}$.', latex: '\\frac{7}{3} + \\frac{8}{5}', note: 'Common denominator is 15.' },
              { stepNumber: 2, instruction: 'Convert to denominator 15: $\\frac{35}{15} + \\frac{24}{15} = \\frac{59}{15} = 3\\frac{14}{15}$.', latex: '\\frac{59}{15} = 3\\frac{14}{15}', note: '35 + 24 = 59.' },
              { stepNumber: 3, instruction: 'For (b), $3\\frac{1}{2} = \\frac{7}{2}$. Multiply: $\\frac{7}{2} \\times \\frac{4}{7}$.', latex: '\\frac{7 \\times 4}{2 \\times 7} = \\frac{28}{14} = 2', note: 'Cancel the 7s and simplify 4/2 = 2.' },
              { stepNumber: 4, instruction: 'For (c), convert: $2\\frac{2}{5} = \\frac{12}{5}$ and $1\\frac{1}{5} = \\frac{6}{5}$.', latex: '\\frac{12}{5} \\div \\frac{6}{5} = \\frac{12}{5} \\times \\frac{5}{6} = \\frac{12}{6} = 2', note: 'Invert second fraction and multiply.' }
            ],
            finalAnswer: '(a) 3\\frac{14}{15}; \\quad (b) 2; \\quad (c) 2'
          }
        },
        {
          id: '5.2-3',
          title: 'Common Mistake & Pro Tip: Adding Denominators Directly',
          type: 'common_mistakes',
          level: 'both',
          badgeText: 'Common Mistake & Pro Tip',
          commonMistakes: [
            {
              mistake: 'Adding denominators directly: $\\frac{1}{2} + \\frac{1}{3} = \\frac{2}{5}$.',
              correction: 'NEVER add denominators! $\\frac{1}{2} + \\frac{1}{3} = \\frac{3}{6} + \\frac{2}{6} = \\frac{5}{6}$.',
              examinerTip: 'Denominators name the size of the pieces. If you add half a pizza to a third of a pizza, you definitely have more than half!',
              memoryTrick: 'Top numbers add, bottom numbers stay the same once matched!'
            }
          ]
        },
        {
          id: '5.2-4',
          title: 'Exercise: Level 1 (Basic)',
          type: 'exercise_1',
          level: 'both',
          badgeText: 'Exercise: Level 1 (Basic)',
          questions: [
            { id: '5.2-q1', number: 1, question: 'Work out: (a) $\\frac{3}{8} + \\frac{1}{4}$, (b) $\\frac{5}{6} - \\frac{2}{3}$.', working: ['(a) $\\frac{3}{8} + \\frac{2}{8} = \\frac{5}{8}$.', '(b) $\\frac{5}{6} - \\frac{4}{6} = \\frac{1}{6}$.'], answer: '(a) \\frac{5}{8}; \\quad (b) \\frac{1}{6}', hint: 'Find common denominators 8 and 6.' },
            { id: '5.2-q2', number: 2, question: 'Calculate: $\\frac{4}{9} \\times \\frac{3}{8}$.', working: ['Cancel: divide 4 and 8 by 4 (giving 1 and 2); divide 3 and 9 by 3 (giving 1 and 3).', '$\\frac{1 \\times 1}{3 \\times 2} = \\frac{1}{6}$.'], answer: '\\frac{1}{6}', hint: 'Cross-cancel before multiplying.' },
            { id: '5.2-q3', number: 3, question: 'Evaluate: $\\frac{5}{12} \\div \\frac{10}{3}$.', working: ['$\\frac{5}{12} \\times \\frac{3}{10} = \\frac{1}{4} \\times \\frac{1}{2} = \\frac{1}{8}$.'], answer: '\\frac{1}{8}', hint: 'Multiply by reciprocal 3/10.' }
          ]
        },
        {
          id: '5.2-5',
          title: 'Exercise: Level 2 (Real-World Scenarios)',
          type: 'exercise_2',
          level: 'both',
          badgeText: 'Exercise: Level 2 (Real-World)',
          questions: [
            { id: '5.2-q4', number: 1, question: 'A fuel tank is $\\frac{2}{3}$ full. After a trip, it is $\\frac{1}{4}$ full. What fraction of the fuel tank capacity was used on the trip?', working: ['$\\frac{2}{3} - \\frac{1}{4} = \\frac{8}{12} - \\frac{3}{12} = \\frac{5}{12}$.'], answer: '\\frac{5}{12}', hint: 'Subtract 1/4 from 2/3.' },
            { id: '5.2-q5', number: 2, question: 'A plot of land has area $4\\frac{1}{2}\\text{ hectares}$. It is divided equally among 6 heirs. What area does each heir receive?', working: ['$4\\frac{1}{2} \\div 6 = \\frac{9}{2} \\times \\frac{1}{6} = \\frac{9}{12} = \\frac{3}{4}\\text{ hectares}$.'], answer: '\\frac{3}{4}\\text{ hectare}', hint: 'Divide 9/2 by 6.' },
            { id: '5.2-q6', number: 3, question: 'A bottle holds $\\frac{3}{4}\\text{ litres}$ of water. How many such bottles can be completely filled from a container holding $18\\text{ litres}$?', working: ['$18 \\div \\frac{3}{4} = 18 \\times \\frac{4}{3} = 6 \\times 4 = 24\\text{ bottles}$.'], answer: '24\\text{ bottles}', hint: 'Divide 18 by 3/4.' }
          ]
        },
        {
          id: '5.2-6',
          title: 'Exercise: Level 3 (Exam-Style Challenge)',
          type: 'exercise_3',
          level: 'both',
          badgeText: 'Exercise: Level 3 (Exam-Style)',
          questions: [
            { id: '5.2-q7', number: 1, question: 'Without using a calculator, work out $2\\frac{2}{3} \\times 1\\frac{1}{8} - \\frac{5}{6}$. Show all your working and give your answer as a fraction in simplest form.', marks: 4, working: ['$2\\frac{2}{3} = \\frac{8}{3}$; $1\\frac{1}{8} = \\frac{9}{8}$.', 'Product: $\\frac{8}{3} \\times \\frac{9}{8} = 3$.', 'Subtract: $3 - \\frac{5}{6} = \\frac{18}{6} - \\frac{5}{6} = \\frac{13}{6} = 2\\frac{1}{6}$.'], answer: '2\\frac{1}{6} \; \\left(\\frac{13}{6}\\right)', markBreakdown: 'M1 for converting to improper fractions 8/3 and 9/8; A1 for product = 3; M1 for subtracting 5/6; A1 for 2 1/6.' },
            { id: '5.2-q8', number: 2, question: 'Calculate $\\frac{3\\frac{1}{4} - 1\\frac{2}{3}}{2\\frac{1}{2}}$. Show full working.', marks: 3, working: ['Numerator: $3\\frac{1}{4} - 1\\frac{2}{3} = \\frac{13}{4} - \\frac{5}{3} = \\frac{39 - 20}{12} = \\frac{19}{12}$.', 'Divide by denominator $2\\frac{1}{2} = \\frac{5}{2}$:', '$\\frac{19}{12} \\div \\frac{5}{2} = \\frac{19}{12} \\times \\frac{2}{5} = \\frac{19}{30}$.'], answer: '\\frac{19}{30}', markBreakdown: 'M1 for numerator = 19/12; M1 for multiplying by 2/5; A1 for 19/30.' },
            { id: '5.2-q9', number: 3, question: 'Solve for $x$: $\\frac{2}{3}x + \\frac{1}{4} = \\frac{5}{6}$.', marks: 3, working: ['Subtract 1/4: $\\frac{2}{3}x = \\frac{5}{6} - \\frac{1}{4} = \\frac{10}{12} - \\frac{3}{12} = \\frac{7}{12}$.', 'Multiply by $\\frac{3}{2}$: $x = \\frac{7}{12} \\times \\frac{3}{2} = \\frac{7 \\times 1}{4 \\times 2} = \\frac{7}{8}$.'], answer: 'x = \\frac{7}{8}', markBreakdown: 'M1 for subtracting 1/4; M1 for dividing by 2/3; A1 for $x = 7/8$.' }
          ]
        }
      ]
    },
    {
      id: '5.3',
      number: '5.3',
      title: 'Percentages',
      type: 'lesson',
      level: 'both',
      steps: [
        {
          id: '5.3-1',
          title: 'Concept & Intuition: Percentage Multipliers and Change',
          type: 'concept',
          level: 'both',
          badgeText: 'Concept & Intuition',
          summary: 'A percentage is a fraction out of 100. Percentage changes (increases and decreases) are executed rapidly using single decimal multipliers.',
          analogy: 'A multiplier is like an audio volume slider: 1.0 is original volume (100%). Increasing by 15% slides it up to 1.15; a 20% discount slides it down to 0.80.',
          terms: [
            { term: 'Multiplier', definition: 'The decimal factor used to calculate percentage change in one step.', example: '+12% = 1.12; -15% = 0.85' },
            { term: 'Percentage Change', definition: '$\\frac{\\text{Change}}{\\text{Original}} \\times 100\\%$.', example: 'Increase from 50 to 60 is $\\frac{10}{50} \\times 100 = 20\\%$.' },
            { term: 'Reverse Percentage', definition: 'Finding the original value before a percentage increase or decrease.', example: '$\\text{Original} = \\frac{\\text{New Value}}{\\text{Multiplier}}$' }
          ],
          rules: [
            { title: 'Reverse Percentage Rule', latex: '\\text{Original} = \\frac{\\text{New Value}}{1 \\pm \\frac{r}{100}}', explanation: 'NEVER subtract the percentage from the new value! Always divide by the multiplier.' }
          ]
        },
        {
          id: '5.3-2',
          title: 'Worked Example: Multipliers, Percentage Change and Reverse',
          type: 'worked_example',
          level: 'both',
          badgeText: 'Worked Example',
          workedProblem: {
            statement: '(a) Increase $\\$350$ by $18\\%$. (b) An item priced at $\\$80$ is reduced to $\\$68$. Calculate the percentage discount. (c) A jacket is sold for $\\$153$ after a $15\\%$ discount. Calculate the original price before the sale.',
            steps: [
              { stepNumber: 1, instruction: 'For (a), multiplier for $+18\\%$ is $1 + 0.18 = 1.18$.', latex: '350 \\times 1.18 = \\$413', note: 'Single-step multiplication.' },
              { stepNumber: 2, instruction: 'For (b), calculate decrease: $80 - 68 = \\$12$.', latex: '\\text{Percentage discount} = \\frac{12}{80} \\times 100\\% = 15\\%', note: 'Always divide by original price $80, not 68.' },
              { stepNumber: 3, instruction: 'For (c), let original price be $P$. Multiplier for $-15\\%$ is $0.85$.', latex: 'P \\times 0.85 = 153 \\implies P = \\frac{153}{0.85} = \\$180', note: 'Divide new price by 0.85.' }
            ],
            finalAnswer: '(a) \\$413; \\quad (b) 15\\%; \\quad (c) \\$180'
          }
        },
        {
          id: '5.3-3',
          title: 'Common Mistake & Pro Tip: The Reverse Percentage Trap',
          type: 'common_mistakes',
          level: 'both',
          badgeText: 'Common Mistake & Pro Tip',
          commonMistakes: [
            {
              mistake: 'Calculating original price by finding 15% of $153 and adding it back ($153 + 22.95 = $175.95).',
              correction: 'The 15% was calculated on the ORIGINAL price, not the sale price! You must DIVIDE by 0.85: $\\frac{153}{0.85} = \\$180$.',
              examinerTip: 'Whenever a question says \"after a discount/tax\", it is a reverse percentage question: DIVIDE by multiplier.',
              memoryTrick: 'Going backwards in time? DIVIDE by the multiplier!'
            }
          ]
        },
        {
          id: '5.3-4',
          title: 'Exercise: Level 1 (Basic)',
          type: 'exercise_1',
          level: 'both',
          badgeText: 'Exercise: Level 1 (Basic)',
          questions: [
            { id: '5.3-q1', number: 1, question: 'Calculate: (a) 15% of $240, (b) 7.5% of $600.', working: ['(a) $0.15 \\times 240 = \\$36$.', '(b) $0.075 \\times 600 = \\$45$.'], answer: '(a) \\$36; \\quad (b) \\$45', hint: 'Multiply by decimal equivalent.' },
            { id: '5.3-q2', number: 2, question: 'Increase $\\$80$ by $25\\%$.', working: ['$80 \\times 1.25 = \\$100$.'], answer: '\\$100', hint: 'Multiplier is 1.25.' },
            { id: '5.3-q3', number: 3, question: 'Decrease $\\$140$ by $15\\%$.', working: ['$140 \\times 0.85 = \\$119$.'], answer: '\\$119', hint: 'Multiplier is 1 - 0.15 = 0.85.' }
          ]
        },
        {
          id: '5.3-5',
          title: 'Exercise: Level 2 (Real-World Scenarios)',
          type: 'exercise_2',
          level: 'both',
          badgeText: 'Exercise: Level 2 (Real-World)',
          questions: [
            { id: '5.3-q4', number: 1, question: 'A smartphone originally priced at $\\$650$ is reduced to $\\$533$ in a Black Friday sale. Calculate the percentage discount.', working: ['Discount $= 650 - 533 = \\$117$.', '$\\frac{117}{650} \\times 100\\% = 18\\%$.'], answer: '18\\%', hint: 'Divide reduction by original 650.' },
            { id: '5.3-q5', number: 2, question: 'A restaurant bill includes a 10% service charge and 8% VAT applied on the subtotal. If the subtotal is $\\$120$, calculate the total bill.', working: ['Total tax & service $= 18\\%$. Multiplier $= 1.18$.', '$120 \\times 1.18 = \\$141.60$.'], answer: '\\$141.60', hint: 'Multiply by 1.18.' },
            { id: '5.3-q6', number: 3, question: 'The population of an endangered rhino reserve increased by $4\\%$ per year for 2 consecutive years. If the starting population was 500, calculate the population after 2 years.', working: ['$500 \\times (1.04)^2 = 500 \\times 1.0816 = 540.8 \\to 541$ rhinos.'], answer: '541\\text{ rhinos (or 540.8)}', hint: 'Multiply by 1.04 squared.' }
          ]
        },
        {
          id: '5.3-6',
          title: 'Exercise: Level 3 (Exam-Style Challenge)',
          type: 'exercise_3',
          level: 'both',
          badgeText: 'Exercise: Level 3 (Exam-Style)',
          questions: [
            { id: '5.3-q7', number: 1, question: 'A house is sold for $\\$276,000$, yielding a profit of $15\\%$ on the purchase price. Calculate the original purchase price of the house.', marks: 3, working: ['Multiplier for 15% profit is 1.15.', '$\\text{Purchase price} = \\frac{276,000}{1.15} = \\$240,000$.'], answer: '\\$240,000', markBreakdown: 'M1 for $P \\times 1.15 = 276,000$; M1 for $276,000 / 1.15$; A1 for $\\$240,000$.' },
            { id: '5.3-q8', number: 2, question: 'In a retail clearance, a jacket is reduced by 20%. When it fails to sell, it is reduced by a further 10% on the sale price. Show that the overall percentage discount is 28%, not 30%.', marks: 3, working: ['First reduction: multiplier 0.80.', 'Second reduction: multiplier 0.90.', 'Combined multiplier: $0.80 \\times 0.90 = 0.72$.', 'Overall discount $= 1 - 0.72 = 0.28 = 28\\%$.'], answer: '0.80 \\times 0.90 = 0.72 \\implies 1 - 0.72 = 28\\%', markBreakdown: 'M1 for 0.80 and 0.90; M1 for product 0.72; A1 for deduction of 28% overall discount.' },
            { id: '5.3-q9', number: 3, question: 'A car depreciates in value by $12\\%$ each year. If it is worth $\\$15,488$ after 2 years, calculate its original price when brand new.', marks: 3, working: ['Annual multiplier $= 1 - 0.12 = 0.88$.', 'After 2 years: $P \\times (0.88)^2 = 15,488$.', '$P \\times 0.7744 = 15,488 \\implies P = \\frac{15,488}{0.7744} = \\$20,000$.'], answer: '\\$20,000', markBreakdown: 'M1 for $P \\times 0.88^2 = 15,488$; M1 for dividing by 0.7744; A1 for $\\$20,000$.' }
          ]
        }
      ]
    },
    {
      id: '5.4',
      number: '5.4',
      title: 'Standard form',
      type: 'lesson',
      level: 'both',
      steps: [
        {
          id: '5.4-1',
          title: 'Concept & Intuition: Scientific Notation (Standard Form)',
          type: 'concept',
          level: 'both',
          badgeText: 'Concept & Intuition',
          summary: 'Standard form (scientific notation) writes very large or very small numbers in the format $A \\times 10^n$, where $1 \\le A < 10$ and $n$ is an integer.',
          analogy: 'Standard form is like zooming in on a microscope or telescope: $A$ gives the significant digits, and $10^n$ tells you how many decimal zoom steps to take.',
          terms: [
            { term: 'Standard Form', definition: 'A number written as $A \\times 10^n$, where $1 \\le A < 10$ and $n \\in \\mathbb{Z}$.', example: '$45,000 = 4.5 \\times 10^4$; $0.0072 = 7.2 \\times 10^{-3}$' },
            { term: 'Positive Index ($n > 0$)', definition: 'Represents large numbers (greater than or equal to 10).', example: '$3.8 \\times 10^6$' },
            { term: 'Negative Index ($n < 0$)', definition: 'Represents small numbers (between 0 and 1).', example: '$5.1 \\times 10^{-4}$' }
          ],
          rules: [
            { title: 'The Coefficient Boundary Rule', latex: '1 \\le A < 10', explanation: '$A$ must NEVER be 10 or greater, and must never be less than 1. (e.g. $42 \\times 10^3$ is NOT in standard form; write $4.2 \\times 10^4$).' }
          ]
        },
        {
          id: '5.4-2',
          title: 'Worked Example: Calculations in Standard Form',
          type: 'worked_example',
          level: 'both',
          badgeText: 'Worked Example',
          workedProblem: {
            statement: 'Evaluate, giving each answer in standard form: (a) $(3.2 \\times 10^5) \\times (4.5 \\times 10^3)$, (b) $\\frac{6.4 \\times 10^7}{8.0 \\times 10^2}$, (c) $(2.4 \\times 10^4) + (5.1 \\times 10^3)$.',
            steps: [
              { stepNumber: 1, instruction: 'For (a), multiply coefficients and add powers of 10.', latex: '(3.2 \\times 4.5) \\times 10^{5+3} = 14.4 \\times 10^8', note: '14.4 is not yet in standard form because 14.4 >= 10.' },
              { stepNumber: 2, instruction: 'Adjust to standard form: $14.4 = 1.44 \\times 10^1$.', latex: '1.44 \\times 10^1 \\times 10^8 = 1.44 \\times 10^9', note: 'Increment index by 1.' },
              { stepNumber: 3, instruction: 'For (b), divide coefficients and subtract powers.', latex: '\\frac{6.4}{8.0} \\times 10^{7-2} = 0.8 \\times 10^5', note: '0.8 is not yet in standard form because 0.8 < 1.' },
              { stepNumber: 4, instruction: 'Adjust to standard form: $0.8 = 8.0 \\times 10^{-1}$.', latex: '8.0 \\times 10^{-1} \\times 10^5 = 8.0 \\times 10^4', note: 'Decrement index by 1.' },
              { stepNumber: 5, instruction: 'For (c), express in the same power of 10 before adding.', latex: '2.4 \\times 10^4 + 0.51 \\times 10^4 = (2.4 + 0.51) \\times 10^4 = 2.91 \\times 10^4', note: 'Factor out 10^4.' }
            ],
            finalAnswer: '(a) 1.44 \\times 10^9; \\quad (b) 8.0 \\times 10^4; \\quad (c) 2.91 \\times 10^4'
          }
        },
        {
          id: '5.4-3',
          title: 'Common Mistake & Pro Tip: The Coefficient Out-of-Bounds Error',
          type: 'common_mistakes',
          level: 'both',
          badgeText: 'Common Mistake & Pro Tip',
          commonMistakes: [
            {
              mistake: 'Leaving answers as $35 \\times 10^4$ or $0.72 \\times 10^{-3}$.',
              correction: 'Standard form strictly requires $1 \\le A < 10$. Write $35 \\times 10^4$ as $3.5 \\times 10^5$, and $0.72 \\times 10^{-3}$ as $7.2 \\times 10^{-4}$.',
              examinerTip: 'Cambridge mark schemes penalise answers where the coefficient is not between 1 and 10.',
              memoryTrick: 'One non-zero digit before the decimal point—no more, no less!'
            }
          ]
        },
        {
          id: '5.4-4',
          title: 'Exercise: Level 1 (Basic)',
          type: 'exercise_1',
          level: 'both',
          badgeText: 'Exercise: Level 1 (Basic)',
          questions: [
            { id: '5.4-q1', number: 1, question: 'Write in standard form: (a) 480,000, (b) 0.00035.', working: ['(a) Shift decimal 5 places left: $4.8 \\times 10^5$.', '(b) Shift decimal 4 places right: $3.5 \\times 10^{-4}$.'], answer: '(a) 4.8 \\times 10^5; \\quad (b) 3.5 \\times 10^{-4}', hint: 'Count decimal shifts.' },
            { id: '5.4-q2', number: 2, question: 'Write as ordinary numbers: (a) $7.12 \\times 10^4$, (b) $6.05 \\times 10^{-3}$.', working: ['(a) $71,200$.', '(b) $0.00605$.'], answer: '(a) 71,200; \\quad (b) 0.00605', hint: 'Shift decimal point by the power of 10.' },
            { id: '5.4-q3', number: 3, question: 'Calculate $(2 \\times 10^3) \\times (3 \\times 10^4)$ in standard form.', working: ['$(2 \\times 3) \\times 10^{3+4} = 6 \\times 10^7$.'], answer: '6 \\times 10^7', hint: 'Multiply 2 by 3 and add powers.' }
          ]
        },
        {
          id: '5.4-5',
          title: 'Exercise: Level 2 (Real-World Scenarios)',
          type: 'exercise_2',
          level: 'both',
          badgeText: 'Exercise: Level 2 (Real-World)',
          questions: [
            { id: '5.4-q4', number: 1, question: 'Light travels at $3.0 \\times 10^8\\text{ m/s}$. The distance from the Earth to the Sun is $1.5 \\times 10^{11}\\text{ m}$. Calculate the time in seconds taken for light to reach Earth.', working: ['$\\text{Time} = \\frac{\\text{Distance}}{\\text{Speed}} = \\frac{1.5 \\times 10^{11}}{3.0 \\times 10^8} = 0.5 \\times 10^3 = 500\\text{ seconds}$.'], answer: '500\\text{ seconds (or } 5.0 \\times 10^2\\text{ s)}', hint: 'Divide distance by speed.' },
            { id: '5.4-q5', number: 2, question: 'A human red blood cell has a diameter of $7.5 \\times 10^{-6}\\text{ m}$. How many red blood cells placed edge-to-edge would span a distance of $1.5\\text{ cm}$ ($1.5 \\times 10^{-2}\\text{ m}$)?', working: ['$\\frac{1.5 \\times 10^{-2}}{7.5 \\times 10^{-6}} = \\frac{1.5}{7.5} \\times 10^4 = 0.2 \\times 10^4 = 2000\\text{ cells}$.'], answer: '2000\\text{ cells (or } 2.0 \\times 10^3\\text{)}', hint: 'Divide total length by cell diameter.' },
            { id: '5.4-q6', number: 3, question: 'The population of Country X is $4.8 \\times 10^7$ and Country Y is $1.2 \\times 10^6$. How many times larger is the population of Country X than Country Y?', working: ['$\\frac{4.8 \\times 10^7}{1.2 \\times 10^6} = \\frac{4.8}{1.2} \\times 10^{7-6} = 4 \\times 10^1 = 40\\text{ times}$.'], answer: '40\\text{ times}', hint: 'Divide the two populations.' }
          ]
        },
        {
          id: '5.4-6',
          title: 'Exercise: Level 3 (Exam-Style Challenge)',
          type: 'exercise_3',
          level: 'both',
          badgeText: 'Exercise: Level 3 (Exam-Style)',
          questions: [
            { id: '5.4-q7', number: 1, question: 'Evaluate $\\frac{(4.8 \\times 10^{-3}) \\times (5.0 \\times 10^8)}{1.2 \\times 10^2}$, giving your answer in standard form.', marks: 3, working: ['Numerator: $(4.8 \\times 5.0) \\times 10^{-3+8} = 24.0 \\times 10^5 = 2.4 \\times 10^6$.', 'Divide: $\\frac{2.4 \\times 10^6}{1.2 \\times 10^2} = \\frac{2.4}{1.2} \\times 10^{6-2} = 2.0 \\times 10^4$.'], answer: '2.0 \\times 10^4', markBreakdown: 'M1 for numerator $2.4 \\times 10^6$; M1 for dividing by $1.2 \\times 10^2$; A1 for $2.0 \\times 10^4$.' },
            { id: '5.4-q8', number: 2, question: 'Given $p = 4 \\times 10^5$ and $q = 8 \\times 10^4$, calculate in standard form: (a) $p + q$, (b) $p^2$.', marks: 4, working: ['(a) $p = 4.0 \\times 10^5$; $q = 0.8 \\times 10^5$. Sum $= (4.0 + 0.8) \\times 10^5 = 4.8 \\times 10^5$.', '(b) $p^2 = (4 \\times 10^5)^2 = 16 \\times 10^{10} = 1.6 \\times 10^{11}$.'], answer: '(a) 4.8 \\times 10^5; \\quad (b) 1.6 \\times 10^{11}', markBreakdown: 'M1 for $(4 + 0.8) \\times 10^5$; A1 for $4.8 \\times 10^5$; M1 for $16 \\times 10^{10}$; A1 for $1.6 \\times 10^{11}$.' },
            { id: '5.4-q9', number: 3, question: 'A supercomputer executes $4.5 \\times 10^{12}$ calculations per second. Calculate how many calculations it performs in 1 hour (3600 seconds), giving your answer in standard form.', marks: 3, working: ['Total $= (4.5 \\times 10^{12}) \\times 3600$.', '$3600 = 3.6 \\times 10^3$.', '$(4.5 \\times 3.6) \\times 10^{15} = 16.2 \\times 10^{15} = 1.62 \\times 10^{16}$.'], answer: '1.62 \\times 10^{16}', markBreakdown: 'M1 for multiplying by 3600; M1 for $16.2 \\times 10^{15}$; A1 for $1.62 \\times 10^{16}$.' }
          ]
        }
      ]
    },
    {
      id: 'test-5',
      number: 'Test 5',
      title: 'Chapter-end Test 5',
      type: 'chapterTest',
      level: 'both',
      steps: [
        {
          id: 'test-5-a',
          title: 'Test Part A: Core Knowledge & Recall',
          type: 'test_part_a',
          level: 'both',
          badgeText: 'Test Part A: Core Recall',
          summary: 'Part A tests fraction arithmetic, percentage conversions, and standard form representation.',
          questions: [
            { id: 'test-5-q1', number: 1, question: 'Calculate: $\\frac{3}{5} \\div \\frac{9}{10}$.', marks: 2, working: ['$\\frac{3}{5} \\times \\frac{10}{9} = \\frac{1 \\times 2}{1 \\times 3} = \\frac{2}{3}$.'], answer: '\\frac{2}{3}', markBreakdown: 'M1 for inverting; A1 for 2/3.' },
            { id: 'test-5-q2', number: 2, question: 'Write 0.000074 in standard form.', marks: 1, working: ['Shift decimal 5 places right: $7.4 \\times 10^{-5}$.'], answer: '7.4 \\times 10^{-5}', markBreakdown: 'B1 for $7.4 \\times 10^{-5}$.' },
            { id: 'test-5-q3', number: 3, question: 'Work out 12% of $\\$450$.', marks: 1, working: ['$0.12 \\times 450 = \\$54$.'], answer: '\\$54', markBreakdown: 'B1 for 54.' }
          ]
        },
        {
          id: 'test-5-b',
          title: 'Test Part B: Multi-Step Real-World Application',
          type: 'test_part_b',
          level: 'both',
          badgeText: 'Test Part B: Applications',
          summary: 'Part B applies fractional division, percentage discounts, and scientific calculations to practical contexts.',
          questions: [
            { id: 'test-5-q4', number: 1, question: 'A TV priced at $\\$560$ is reduced by $15\\%$ in a sale. Customers paying cash receive an additional $5\\%$ discount on the sale price. What is the final cash price?', marks: 3, working: ['Sale price: $560 \\times 0.85 = \\$476$.', 'Cash price: $476 \\times 0.95 = \\$452.20$.'], answer: '\\$452.20', markBreakdown: 'M1 for $560 \\times 0.85$; M1 for multiplying by 0.95; A1 for $\\$452.20$.' },
            { id: 'test-5-q5', number: 2, question: 'A water pipe delivers $2\\frac{1}{4}\\text{ litres}$ of water per minute. How long will it take to fill a $45\\text{-litre}$ tank?', marks: 3, working: ['$45 \\div 2\\frac{1}{4} = 45 \\div \\frac{9}{4} = 45 \\times \\frac{4}{9} = 5 \\times 4 = 20\\text{ minutes}$.'], answer: '20\\text{ minutes}', markBreakdown: 'M1 for $45 \\div (9/4)$; M1 for $45 \\times (4/9)$; A1 for 20 minutes.' },
            { id: 'test-5-q6', number: 3, question: 'A star is $4.2 \\times 10^{13}\\text{ km}$ from Earth. A space probe travels at $6.0 \\times 10^4\\text{ km/h}$. Calculate the travel time in hours in standard form.', marks: 3, working: ['$\\text{Time} = \\frac{4.2 \\times 10^{13}}{6.0 \\times 10^4} = \\frac{4.2}{6.0} \\times 10^9 = 0.7 \\times 10^9 = 7.0 \\times 10^8\\text{ hours}$.'], answer: '7.0 \\times 10^8\\text{ hours}', markBreakdown: 'M1 for division; M1 for index arithmetic; A1 for $7.0 \\times 10^8$.' }
          ]
        },
        {
          id: 'test-5-c',
          title: 'Test Part C: Exam-Style Challenge Problems',
          type: 'test_part_c',
          level: 'both',
          badgeText: 'Test Part C: Exam Challenge',
          summary: 'Part C features high-tariff Cambridge 0580 reverse percentage problems, compound operations, and standard form powers.',
          questions: [
            { id: 'test-5-q7', number: 1, question: 'An antique clock was sold for $\\$4140$, making a profit of 15% on the dealer\'s cost price. Calculate the dealer\'s cost price.', marks: 3, working: ['$\\text{Cost price} = \\frac{4140}{1.15} = \\$3600$.'], answer: '\\$3600', markBreakdown: 'M1 for $P \\times 1.15 = 4140$; M1 for $4140 / 1.15$; A1 for $\\$3600$.' },
            { id: 'test-5-q8', number: 2, question: 'Without a calculator, evaluate $\\frac{2\\frac{1}{2} - \\frac{7}{8}}{1\\frac{3}{4} \\times \\frac{2}{3}}$, giving your answer as a mixed number in simplest form.', marks: 4, working: ['Numerator: $\\frac{5}{2} - \\frac{7}{8} = \\frac{20}{8} - \\frac{7}{8} = \\frac{13}{8}$.', 'Denominator: $\\frac{7}{4} \\times \\frac{2}{3} = \\frac{14}{12} = \\frac{7}{6}$.', 'Divide: $\\frac{13}{8} \\div \\frac{7}{6} = \\frac{13}{8} \\times \\frac{6}{7} = \\frac{13 \\times 3}{4 \\times 7} = \\frac{39}{28} = 1\\frac{11}{28}$.'], answer: '1\\frac{11}{28}', markBreakdown: 'M1 for numerator 13/8; M1 for denominator 7/6; M1 for multiplying by reciprocal 6/7; A1 for $1\\frac{11}{28}$.' },
            { id: 'test-5-q9', number: 3, question: 'Given $A = 3.6 \\times 10^4$ and $B = 4.8 \\times 10^3$, calculate in standard form: (a) $A - B$, (b) $\\sqrt{A}$.', marks: 4, working: ['(a) $A = 3.6 \\times 10^4$, $B = 0.48 \\times 10^4$. $A - B = (3.6 - 0.48) \\times 10^4 = 3.12 \\times 10^4$.', '(b) $\\sqrt{3.6 \\times 10^4} = \\sqrt{36,000} \\approx 189.7$ or $\\sqrt{3.6} \\times 10^2 \\approx 1.897 \\times 10^2$. (If $A = 3.6 \\times 10^5 = 360,000$, $\\sqrt{A} = 600 = 6.0 \\times 10^2$). With $3.6 \\times 10^4 = 36000$, $\\sqrt{36000} \\approx 1.90 \\times 10^2$.'], answer: '(a) 3.12 \\times 10^4; \\quad (b) 1.90 \\times 10^2 \; (\\text{or } 189.7)', markBreakdown: 'M1 for aligning powers $0.48 \\times 10^4$; A1 for $3.12 \\times 10^4$; M1 for taking square root; A1 for $1.90 \\times 10^2$.' }
          ]
        }
      ]
    }
  ]
};

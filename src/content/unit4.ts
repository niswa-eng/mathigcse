import { Unit } from '../types/content';

export const unit4: Unit = {
  id: 4,
  title: 'Collecting, organising and displaying data',
  learningObjectives: [
    'C9.1, E9.1: Classifying and tabulating statistical data.',
    'C9.4, E9.4: Drawing and interpreting statistical charts and diagrams.',
    'C9.4, E9.4: Bar charts, pie charts, pictograms, stem-and-leaf diagrams and frequency distributions.'
  ],
  subtopics: [
    {
      id: '4.1',
      number: '4.1',
      title: 'Collecting and displaying data',
      type: 'lesson',
      level: 'both',
      steps: [
        {
          id: '4.1-1',
          title: 'Concept & Intuition: Types of Data and Collection',
          type: 'concept',
          level: 'both',
          badgeText: 'Concept & Intuition',
          summary: 'Statistical data is classified into discrete (counted) or continuous (measured), and qualitative (categorical) or quantitative (numerical). Appropriate collection requires unbiased sampling and tally charts.',
          analogy: 'Discrete data is like stepping up a staircase—you can be on step 1, 2, or 3, but not on step 2.47. Continuous data is like walking up a smooth ramp—you can be at any measurement along the gradient.',
          terms: [
            { term: 'Discrete Data', definition: 'Data that can only take specific isolated values, usually from counting.', example: 'Number of students in a class: 28' },
            { term: 'Continuous Data', definition: 'Data that can take any real value within a given interval, obtained from measuring.', example: 'Height of a student: $164.5\\text{ cm}$' },
            { term: 'Frequency Table', definition: 'A table recording tally counts and total frequencies for categories or intervals.', example: 'Scores grouped into intervals $0 \\le x < 10$' }
          ],
          rules: [
            { title: 'Tallying Rule', explanation: 'Group tallies in bundles of 5 (four vertical bars crossed by a diagonal) to ensure fast, error-free counting.' }
          ]
        },
        {
          id: '4.1-2',
          title: 'Worked Example: Tally Charts and Data Classification',
          type: 'worked_example',
          level: 'both',
          badgeText: 'Worked Example',
          workedProblem: {
            statement: 'Classify each variable as discrete or continuous, and qualitative or quantitative: (a) Number of cars passing a toll gate in an hour. (b) Time taken to run 400m. (c) Hair color of students.',
            steps: [
              { stepNumber: 1, instruction: 'Examine (a): Cars are counted in whole numbers.', latex: '\\text{Discrete and Quantitative}', note: 'You cannot have 3.5 cars.' },
              { stepNumber: 2, instruction: 'Examine (b): Time is measured along a continuous scale.', latex: '\\text{Continuous and Quantitative}', note: 'Time depends on stopwatch precision.' },
              { stepNumber: 3, instruction: 'Examine (c): Hair color describes a category, not a number.', latex: '\\text{Qualitative (Categorical)}', note: 'Categories like black, brown, blonde.' }
            ],
            finalAnswer: '(a) Quantitative Discrete; \\quad (b) Quantitative Continuous; \\quad (c) Qualitative'
          }
        },
        {
          id: '4.1-3',
          title: 'Common Mistake & Pro Tip: Time and Money Classification',
          type: 'common_mistakes',
          level: 'both',
          badgeText: 'Common Mistake & Pro Tip',
          commonMistakes: [
            {
              mistake: 'Classifying time as discrete because a digital watch shows fixed seconds.',
              correction: 'Time is ALWAYS continuous because real time flows smoothly without gaps between fractions of a second.',
              examinerTip: 'If a quantity is measured using an instrument (ruler, thermometer, stopwatch, balance), it is continuous.',
              memoryTrick: 'Counted = Discrete. Measured = Continuous.'
            }
          ]
        },
        {
          id: '4.1-4',
          title: 'Exercise: Level 1 (Basic)',
          type: 'exercise_1',
          level: 'both',
          badgeText: 'Exercise: Level 1 (Basic)',
          questions: [
            {
              id: '4.1-q1',
              number: 1,
              question: 'State whether each of the following is discrete or continuous: (a) The mass of an orange. (b) The number of pages in a book. (c) The temperature of an oven.',
              working: ['Mass is measured (continuous).', 'Pages are counted in integers (discrete).', 'Temperature is measured (continuous).'],
              answer: '(a) Continuous; \\quad (b) Discrete; \\quad (c) Continuous',
              hint: 'Ask yourself: is it counted or measured?'
            },
            {
              id: '4.1-q2',
              number: 2,
              question: 'A survey asked 20 students how many pets they own: 0, 1, 2, 0, 1, 3, 1, 0, 2, 1, 4, 1, 0, 2, 1, 0, 1, 2, 1, 0. Find the frequency of students who own exactly 1 pet.',
              working: ['Count the occurrences of 1 in the list: there are 8 ones.', 'Frequency is 8.'],
              answer: '8',
              hint: 'Count how many times 1 appears.'
            },
            {
              id: '4.1-q3',
              number: 3,
              question: 'Explain why a question asking \"Do you agree that our school cafeteria serves terrible food?\" is biased, and rewrite it as a fair question.',
              working: ['The word \"terrible\" leads the respondent toward a negative answer.', 'Fair phrasing: \"How would you rate the quality of the cafeteria food? (Excellent / Good / Fair / Poor)\"'],
              answer: '\\text{Biased because it leads respondents; fair alternative: \"How would you rate the food on a scale of 1 to 5?\"}',
              hint: 'Leading words influence opinions.'
            }
          ]
        },
        {
          id: '4.1-5',
          title: 'Exercise: Level 2 (Real-World Scenarios)',
          type: 'exercise_2',
          level: 'both',
          badgeText: 'Exercise: Level 2 (Real-World)',
          questions: [
            {
              id: '4.1-q4',
              number: 1,
              question: 'A quality control inspector records the weight of 50 loaves of bread in grams. (a) Is this data discrete or continuous? (b) The target mass is $800\\text{ g} \\pm 15\\text{ g}$. What interval of loaf masses is acceptable?',
              working: ['(a) Mass is measured using scales, so it is continuous.', '(b) $800 - 15 = 785\\text{ g}$ and $800 + 15 = 815\\text{ g}$. Interval is $785\\text{ g} \\le m \\le 815\\text{ g}$.'],
              answer: '(a) Continuous; \\quad (b) 785\\text{ g} \\le m \\le 815\\text{ g}',
              hint: 'Weight is measured with scales.'
            },
            {
              id: '4.1-q5',
              number: 2,
              question: 'A transport planner counts passenger arrivals per minute on subway platform A: $12, 15, 18, 22, 14, 19$. Calculate the total passenger count and average arrival rate per minute.',
              working: ['Total $= 12 + 15 + 18 + 22 + 14 + 19 = 100$ passengers.', 'Mean rate $= 100 \\div 6 = 16.\\dot{6} \\approx 16.7$ passengers/min.'],
              answer: '\\text{Total} = 100; \\quad \\text{Mean} \\approx 16.7\\text{ passengers/min}',
              hint: 'Add all counts and divide by 6.'
            },
            {
              id: '4.1-q6',
              number: 3,
              question: 'A wildlife researcher wants to estimate fish population in a lake using capture-recapture. She tags 120 fish and releases them. Later, she catches 90 fish and finds 15 are tagged. Estimate the total fish population.',
              working: ['Proportion of tagged fish: $\\frac{15}{90} = \\frac{1}{6}$.', 'Set equal to total tagged: $\\frac{120}{N} = \\frac{1}{6} \\implies N = 120 \\times 6 = 720$.'],
              answer: '720\\text{ fish}',
              hint: 'Tagged in sample / Sample size = Total tagged / Total population.'
            }
          ]
        },
        {
          id: '4.1-6',
          title: 'Exercise: Level 3 (Exam-Style Challenge)',
          type: 'exercise_3',
          level: 'both',
          badgeText: 'Exercise: Level 3 (Exam-Style)',
          questions: [
            {
              id: '4.1-q7',
              number: 1,
              question: 'A frequency table shows the marks scored by 40 students: marks $0-9$ (freq 4), $10-19$ (freq 11), $20-29$ (freq 15), $30-39$ (freq 8), $40-49$ (freq 2). (a) State the modal class. (b) Find the class interval containing the median.',
              marks: 3,
              working: [
                '(a) Modal class has the highest frequency: 15 students in $20-29$.',
                '(b) Median position: $\\frac{40 + 1}{2} = 20.5^{\\text{th}}$ value.',
                'Cumulative frequencies: $0-9$: 4; $10-19$: $4+11=15$; $20-29$: $15+15=30$.',
                'The $20.5^{\\text{th}}$ value lies in the $20-29$ interval.'
              ],
              answer: '(a) 20-29; \\quad (b) 20-29',
              markBreakdown: 'B1 for modal class 20-29; M1 for identifying median position 20th-21st; A1 for median class 20-29.'
            },
            {
              id: '4.1-q8',
              number: 2,
              question: 'Explain the difference between random sampling and stratified sampling, and calculate how many Year 10 students should be selected in a stratified sample of 60 students from a school with 180 Year 10s, 160 Year 11s, and 140 Year 12s.',
              marks: 3,
              working: [
                'Total students $= 180 + 160 + 140 = 480$.',
                'Proportion of Year 10 $= \\frac{180}{480} = \\frac{3}{8}$.',
                'Number in sample $= 60 \\times \\frac{3}{8} = 22.5 \\to 22$ or $23$ students (round to 23).',
                'Stratified sampling ensures subgroups are represented in exact proportion to their size in the population.'
              ],
              answer: '23\\text{ Year 10 students (or 22.5)}',
              markBreakdown: 'B1 for total 480; M1 for $(180/480) \\times 60$; A1 for 23.'
            },
            {
              id: '4.1-q9',
              number: 3,
              question: 'A two-way table categorises 100 gym members into Male/Female and Cardio/Weights. 45 members are Male, 38 prefer Cardio (of which 20 are Female). Complete the deduction and find the probability that a randomly chosen member is a Female who prefers Weights.',
              marks: 4,
              working: [
                'Total Female $= 100 - 45 = 55$.',
                'Female Cardio $= 20 \\implies$ Female Weights $= 55 - 20 = 35$.',
                'Total preferring Weights $= 100 - 38 = 62$. Male Weights $= 62 - 35 = 27$.',
                'Probability Female Weights $= \\frac{35}{100} = 0.35 = \\frac{7}{20}$.'
              ],
              answer: '\\frac{35}{100} = \\frac{7}{20} \; (0.35)',
              markBreakdown: 'M1 for Total Female = 55; M1 for Female Weights = 35; A2 for probability 35/100 = 7/20.'
            }
          ]
        }
      ]
    },
    {
      id: '4.2',
      number: '4.2',
      title: 'Organising Data',
      type: 'lesson',
      level: 'both',
      steps: [
        {
          id: '4.2-1',
          title: 'Concept & Intuition: Stem-and-Leaf Diagrams',
          type: 'concept',
          level: 'both',
          badgeText: 'Concept & Intuition',
          summary: 'A stem-and-leaf diagram organizes numerical data while preserving every single individual raw data value. It displays distribution shape, rank order, median, and range.',
          analogy: 'Think of a tree branch (stem) holding several leaves. The stem gives the tens digit (branch position) and each leaf gives the units digit.',
          terms: [
            { term: 'Stem', definition: 'The leading digit(s) placed vertically on the left.', example: 'For numbers in the 40s, stem is 4.' },
            { term: 'Leaf', definition: 'The trailing single unit digit placed horizontally on the right in ascending numerical order.', example: 'For 43, 47, 48: leaves are 3, 7, 8.' },
            { term: 'Key', definition: 'An essential explanatory legend showing what the stem and leaf represent.', example: 'Key: $4 \\mid 3 = 43\\text{ marks}$' }
          ],
          rules: [
            { title: 'The Ordered Leaf Rule', explanation: 'Leaves on each row must ALWAYS be arranged in ascending order from left to right, evenly spaced.' },
            { title: 'The Mandatory Key Rule', explanation: 'Always include a key! A stem of 2 and leaf of 5 could mean 25, 2.5, 0.25, or 250 depending on the key.' }
          ]
        },
        {
          id: '4.2-2',
          title: 'Worked Example: Constructing an Ordered Stem-and-Leaf',
          type: 'worked_example',
          level: 'both',
          badgeText: 'Worked Example',
          workedProblem: {
            statement: 'Here are test scores of 15 students: 34, 18, 25, 42, 31, 28, 19, 34, 25, 47, 36, 29, 34, 21, 38. (a) Construct an ordered stem-and-leaf diagram with a key. (b) Find the median score. (c) Find the range.',
            steps: [
              { stepNumber: 1, instruction: 'Identify the smallest (18) and largest (47) values. Stems are 1, 2, 3, 4.', latex: '\\text{Stems: } 1, 2, 3, 4', note: 'Values span 10s to 40s.' },
              { stepNumber: 2, instruction: 'Sort leaves in ascending order for each row.', latex: '1 \\mid 8, 9 \\quad 2 \\mid 1, 5, 5, 8, 9 \\quad 3 \\mid 1, 4, 4, 4, 6, 8 \\quad 4 \\mid 2, 7', note: 'Row 3 has three 4s.' },
              { stepNumber: 3, instruction: 'Find the median position: $\\frac{15 + 1}{2} = 8^{\\text{th}}$ value.', latex: '\\text{Median} = 8^{\\text{th}} \\text{ value} = 31', note: 'Count 8 values from the top.' },
              { stepNumber: 4, instruction: 'Calculate range: highest minus lowest.', latex: '\\text{Range} = 47 - 18 = 29', note: 'Max 47, Min 18.' }
            ],
            finalAnswer: '(a) Ordered diagram with Key: $2 \\mid 5 = 25$; \\quad (b) \\text{Median} = 31; \\quad (c) \\text{Range} = 29'
          }
        },
        {
          id: '4.2-3',
          title: 'Common Mistake & Pro Tip: Missing Keys and Unordered Leaves',
          type: 'common_mistakes',
          level: 'both',
          badgeText: 'Common Mistake & Pro Tip',
          commonMistakes: [
            {
              mistake: 'Leaving the leaves unordered or forgetting to provide the Key.',
              correction: 'Cambridge mark schemes deduct 1 mark for unordered leaves and 1 mark for a missing key. Always double check both.',
              examinerTip: 'Draw a rough unordered diagram first in pencil, then write the final ordered version with the key.',
              memoryTrick: 'No key = Locked out of full marks!'
            }
          ]
        },
        {
          id: '4.2-4',
          title: 'Exercise: Level 1 (Basic)',
          type: 'exercise_1',
          level: 'both',
          badgeText: 'Exercise: Level 1 (Basic)',
          questions: [
            {
              id: '4.2-q1',
              number: 1,
              question: 'A stem-and-leaf has row $3 \\mid 2 \\; 5 \\; 7 \\; 9$ with Key: $3 \\mid 2 = 32\\text{ kg}$. Write down the 4 data values in this row.',
              working: ['Read each leaf with the stem 3: 32, 35, 37, 39.'],
              answer: '32\\text{ kg}, 35\\text{ kg}, 37\\text{ kg}, 39\\text{ kg}',
              hint: 'Combine the stem with each leaf.'
            },
            {
              id: '4.2-q2',
              number: 2,
              question: 'Find the mode of the values in the stem-and-leaf row: $5 \\mid 1 \\; 3 \\; 3 \\; 3 \\; 7 \\; 8$ where Key: $5 \\mid 1 = 5.1$.',
              working: ['Leaf 3 appears three times.', 'Value is 5.3.'],
              answer: '5.3',
              hint: 'The most frequent leaf is 3.'
            },
            {
              id: '4.2-q3',
              number: 3,
              question: 'Given the list $12, 16, 23, 27, 31, 35$, find the median.',
              working: ['There are 6 values (even count).', 'Middle values are 23 and 27.', 'Median $= \\frac{23 + 27}{2} = 25$.'],
              answer: '25',
              hint: 'Average the two middle values.'
            }
          ]
        },
        {
          id: '4.2-5',
          title: 'Exercise: Level 2 (Real-World Scenarios)',
          type: 'exercise_2',
          level: 'both',
          badgeText: 'Exercise: Level 2 (Real-World)',
          questions: [
            {
              id: '4.2-q4',
              number: 1,
              question: 'A speed camera records vehicle speeds in km/h: $48, 52, 55, 61, 58, 64, 49, 53, 55, 68, 56, 51$. (a) State the median speed. (b) How many vehicles exceeded the $60\\text{ km/h}$ speed limit?',
              working: [
                'Order speeds: 48, 49, 51, 52, 53, 55, 55, 56, 58, 61, 64, 68.',
                '(a) 12 values: median is mean of 6th and 7th values: $\\frac{55 + 55}{2} = 55\\text{ km/h}$.',
                '(b) Speeds $> 60$: 61, 64, 68 (3 vehicles).'
              ],
              answer: '(a) 55\\text{ km/h}; \\quad (b) 3\\text{ vehicles}',
              hint: 'Put values in ascending order first.'
            },
            {
              id: '4.2-q5',
              number: 2,
              question: 'A back-to-back stem-and-leaf compares pulse rates of athletes before and after exercise. Before: median $= 68\\text{ bpm}$, range $= 18\\text{ bpm}$. After: median $= 134\\text{ bpm}$, range $= 32\\text{ bpm}$. Compare the two distributions in two sentences.',
              working: ['Comment on average: Pulse rates after exercise are on average much higher (median 134 bpm vs 68 bpm).', 'Comment on spread: Pulse rates after exercise show greater variation (range 32 bpm vs 18 bpm).'],
              answer: '\\text{On average, pulse rates were much higher after exercise (median 134 vs 68 bpm) and more spread out (range 32 vs 18 bpm).}',
              hint: 'Compare median (centre) and range (spread).'
            },
            {
              id: '4.2-q6',
              number: 3,
              question: 'A supermarket manager records daily bread waste across 20 days. The stem shows tens and leaf shows units: $0\\mid 4, 8, 9 \\; 1\\mid 2, 4, 5, 8 \\; 2\\mid 1, 3, 3, 6, 7 \\; 3\\mid 0, 2, 5$. Find the interquartile range (IQR).',
              working: [
                'Total values $= 15$. (Wait, list has 15 items: 4, 8, 9, 12, 14, 15, 18, 21, 23, 23, 26, 27, 30, 32, 35).',
                '$Q_1$ is 4th value: 12.',
                '$Q_3$ is 12th value: 27.',
                '\\text{IQR} $= Q_3 - Q_1 = 27 - 12 = 15$.'
              ],
              answer: '15\\text{ loaves}',
              hint: 'IQR = Upper quartile - Lower quartile.'
            }
          ]
        },
        {
          id: '4.2-6',
          title: 'Exercise: Level 3 (Exam-Style Challenge)',
          type: 'exercise_3',
          level: 'both',
          badgeText: 'Exercise: Level 3 (Exam-Style)',
          questions: [
            {
              id: '4.2-q7',
              number: 1,
              question: 'The masses of 21 parcels are displayed in an ordered stem-and-leaf diagram. The lower quartile is $3.2\\text{ kg}$ and the upper quartile is $4.8\\text{ kg}$. (a) Calculate the interquartile range. (b) Explain why the interquartile range is often preferred over the range when comparing data.',
              marks: 3,
              working: [
                '(a) $\\text{IQR} = Q_3 - Q_1 = 4.8 - 3.2 = 1.6\\text{ kg}$.',
                '(b) The IQR measures the spread of the middle 50% of the data and is not distorted by extreme outliers or anomalous values, whereas the range is heavily affected by extreme values.'
              ],
              answer: '(a) 1.6\\text{ kg}; \\quad (b) \\text{IQR is resistant to extreme outliers and anomalous values.}',
              markBreakdown: 'B1 for IQR = 1.6 kg; B2 for explaining resilience to outliers compared to range.'
            },
            {
              id: '4.2-q8',
              number: 2,
              question: 'A back-to-back stem-and-leaf diagram has 15 data items for Class X and 15 for Class Y. For Class X: sum of values is 450. For Class Y: median is 32, range is 24. Calculate the mean of Class X and state which class had a higher central mark if Class X median is 29.',
              marks: 3,
              working: [
                'Mean of Class X $= \\frac{450}{15} = 30$.',
                'Compare medians: Class Y median (32) > Class X median (29).',
                'Class Y had the higher central mark on average.'
              ],
              answer: '\\text{Mean of Class X} = 30; \\quad \\text{Class Y had a higher median (32 vs 29)}',
              markBreakdown: 'M1 for $450 / 15$; A1 for mean = 30; B1 for comparing medians (Class Y higher).'
            },
            {
              id: '4.2-q9',
              number: 3,
              question: 'Twenty students take a science test. The scores are shown in a stem-and-leaf with Key: $5 \\mid 4 = 54\\%$. One score is recorded as $x$. Given that the range of the scores is 48 and the lowest score is 42, calculate the value of $x$ if $x$ is the highest score.',
              marks: 3,
              working: [
                'Range $= \\text{Highest} - \\text{Lowest}$.',
                '$48 = x - 42 \\implies x = 48 + 42 = 90$.'
              ],
              answer: 'x = 90',
              markBreakdown: 'M1 for $\\text{Range} = \\text{Max} - \\text{Min}$; M1 for $x - 42 = 48$; A1 for $x = 90$.'
            }
          ]
        }
      ]
    },
    {
      id: '4.3',
      number: '4.3',
      title: 'Using charts to display data',
      type: 'lesson',
      level: 'both',
      steps: [
        {
          id: '4.3-1',
          title: 'Concept & Intuition: Bar Charts and Pie Charts',
          type: 'concept',
          level: 'both',
          badgeText: 'Concept & Intuition',
          summary: 'Bar charts display frequencies of discrete or categorical data using bars of equal width and equal gaps. Pie charts represent proportions of a whole divided into $360^\\circ$ sectors.',
          analogy: 'A pie chart is like slicing a pizza to share among friends: if a friend gets half the pizza, their slice has an angle of $180^\\circ$ ($50\\%$ of $360^\\circ$).',
          terms: [
            { term: 'Bar Chart', definition: 'A graphical chart with bars of equal width where height represents frequency.', example: 'Bar chart of favorite sports' },
            { term: 'Pie Chart', definition: 'A circular statistical graphic divided into sectors proportional to quantity.', example: 'Sector angle $= \\frac{\\text{frequency}}{\\text{total}} \\times 360^\\circ$' },
            { term: 'Pictogram', definition: 'A chart using visual symbols with a declared key to represent frequency.', example: 'Symbol $= 4$ books' }
          ],
          rules: [
            { title: 'Pie Chart Angle Formula', latex: '\\text{Angle} = \\frac{\\text{Category Frequency}}{\\text{Total Frequency}} \\times 360^\\circ', explanation: 'Multiply the fraction of the total by 360° to get the sector angle.' }
          ]
        },
        {
          id: '4.3-2',
          title: 'Worked Example: Calculating Sector Angles for a Pie Chart',
          type: 'worked_example',
          level: 'both',
          badgeText: 'Worked Example',
          workedProblem: {
            statement: '72 students were asked how they travel to school: Bus (30), Walk (18), Car (16), Bicycle (8). Calculate the sector angle for each travel method in a pie chart.',
            steps: [
              { stepNumber: 1, instruction: 'Find degrees per student: $360^\\circ \\div 72$.', latex: '\\frac{360^\\circ}{72} = 5^\\circ \\text{ per student}', note: 'Each student accounts for 5°.' },
              { stepNumber: 2, instruction: 'Calculate Bus angle: $30 \\times 5^\\circ$.', latex: '30 \\times 5^\\circ = 150^\\circ', note: 'Largest sector.' },
              { stepNumber: 3, instruction: 'Calculate Walk angle: $18 \\times 5^\\circ$.', latex: '18 \\times 5^\\circ = 90^\\circ', note: 'A right angle.' },
              { stepNumber: 4, instruction: 'Calculate Car angle: $16 \\times 5^\\circ$.', latex: '16 \\times 5^\\circ = 80^\\circ', note: 'Car sector.' },
              { stepNumber: 5, instruction: 'Calculate Bicycle angle: $8 \\times 5^\\circ$.', latex: '8 \\times 5^\\circ = 40^\\circ', note: 'Smallest sector.' },
              { stepNumber: 6, instruction: 'Check sum of angles: $150 + 90 + 80 + 40 = 360^\\circ$.', latex: '150^\\circ + 90^\\circ + 80^\\circ + 40^\\circ = 360^\\circ', note: 'Must equal exactly 360°.' }
            ],
            finalAnswer: '\\text{Bus: } 150^\\circ, \\; \\text{Walk: } 90^\\circ, \\; \\text{Car: } 80^\\circ, \\; \\text{Bicycle: } 40^\\circ'
          }
        },
        {
          id: '4.3-3',
          title: 'Common Mistake & Pro Tip: Unequal Bar Widths and Scaling',
          type: 'common_mistakes',
          level: 'both',
          badgeText: 'Common Mistake & Pro Tip',
          commonMistakes: [
            {
              mistake: 'Drawing bars of different widths or omitting the equal gaps between bars for discrete data.',
              correction: 'In a standard bar chart, all bars must have identical widths and equal spaces between them. Bars only touch in a histogram.',
              examinerTip: 'Label both axes clearly: vertical axis must be \"Frequency\" starting from 0.',
              memoryTrick: 'Discrete bars need breathing room (gaps) between them!'
            }
          ]
        },
        {
          id: '4.3-4',
          title: 'Exercise: Level 1 (Basic)',
          type: 'exercise_1',
          level: 'both',
          badgeText: 'Exercise: Level 1 (Basic)',
          questions: [
            {
              id: '4.3-q1',
              number: 1,
              question: 'In a pie chart, a sector represents 25% of the total frequency. What is the angle of this sector?',
              working: ['25% of $360^\\circ = 0.25 \\times 360 = 90^\\circ$.'],
              answer: '90^\\circ',
              hint: 'A quarter of 360°.'
            },
            {
              id: '4.3-q2',
              number: 2,
              question: 'A pie chart sector of $72^\\circ$ represents 14 students. How many students are there in the entire sample?',
              working: ['Fraction of circle: $\\frac{72}{360} = \\frac{1}{5}$.', 'Total students $= 14 \\times 5 = 70$.'],
              answer: '70\\text{ students}',
              hint: '72° is one fifth of 360°.'
            },
            {
              id: '4.3-q3',
              number: 3,
              question: 'In a pictogram, a circle symbol represents 8 bicycles. How many bicycles are represented by 3 full circles and one quarter-circle?',
              working: ['3 full circles $= 3 \\times 8 = 24$.', 'Quarter circle $= \\frac{1}{4} \\times 8 = 2$.', 'Total $= 24 + 2 = 26$.'],
              answer: '26\\text{ bicycles}',
              hint: 'Each full circle is 8, a quarter circle is 2.'
            }
          ]
        },
        {
          id: '4.3-5',
          title: 'Exercise: Level 2 (Real-World Scenarios)',
          type: 'exercise_2',
          level: 'both',
          badgeText: 'Exercise: Level 2 (Real-World)',
          questions: [
            {
              id: '4.3-q4',
              number: 1,
              question: 'A monthly household budget of $\\$2400$ is represented on a pie chart. Rent accounts for $\\$800$, Food $\\$600$, Utilities $\\$400$, and Savings $\\$600$. Calculate the sector angle for Rent.',
              working: ['Fraction for Rent: $\\frac{800}{2400} = \\frac{1}{3}$.', 'Sector angle $= \\frac{1}{3} \\times 360^\\circ = 120^\\circ$.'],
              answer: '120^\\circ',
              hint: 'Rent is 1/3 of the total budget.'
            },
            {
              id: '4.3-q5',
              number: 2,
              question: 'Two pie charts show book sales for Shop A (total sales 1200 books) and Shop B (total sales 2400 books). Fiction has a $90^\\circ$ sector in Shop A and a $60^\\circ$ sector in Shop B. Which shop sold more Fiction books?',
              working: [
                'Shop A: $\\frac{90}{360} \\times 1200 = \\frac{1}{4} \\times 1200 = 300$ books.',
                'Shop B: $\\frac{60}{360} \\times 2400 = \\frac{1}{6} \\times 2400 = 400$ books.',
                'Shop B sold more (400 vs 300).'
              ],
              answer: '\\text{Shop B (400 books vs 300 books in Shop A)}',
              hint: 'Compare actual frequencies, not just sector angles.'
            },
            {
              id: '4.3-q6',
              number: 3,
              question: 'A company reports quarterly profits: Q1 $\\$40k$, Q2 $\\$60k$, Q3 $\\$50k$, Q4 $\\$90k$. What sector angle represents Q4 in an annual profit pie chart?',
              working: [
                'Total profit $= 40 + 60 + 50 + 90 = 240\\text{k}$.',
                'Q4 angle $= \\frac{90}{240} \\times 360^\\circ = \\frac{3}{8} \\times 360 = 135^\\circ$.'
              ],
              answer: '135^\\circ',
              hint: 'Divide 90 by 240, then multiply by 360°.'
            }
          ]
        },
        {
          id: '4.3-6',
          title: 'Exercise: Level 3 (Exam-Style Challenge)',
          type: 'exercise_3',
          level: 'both',
          badgeText: 'Exercise: Level 3 (Exam-Style)',
          questions: [
            {
              id: '4.3-q7',
              number: 1,
              question: 'In a survey of 180 university students regarding preferred study locations: Library ($120^\\circ$), Dormitory ($100^\\circ$), Café ($x^\\circ$), and Outdoors ($60^\\circ$). (a) Find the value of $x$. (b) Calculate how many students chose the Library. (c) Calculate the percentage of students who chose the Café.',
              marks: 4,
              working: [
                '(a) $120 + 100 + x + 60 = 360 \\implies 280 + x = 360 \\implies x = 80^\\circ$.',
                '(b) Library: $\\frac{120}{360} \\times 180 = \\frac{1}{3} \\times 180 = 60$ students.',
                '(c) Café: $\\frac{80}{360} \\times 100\\% = \\frac{2}{9} \\times 100\\% \\approx 22.2\\%$.'
              ],
              answer: '(a) x = 80^\\circ; \\quad (b) 60\\text{ students}; \\quad (c) 22.2\\%',
              markBreakdown: 'B1 for $x = 80^\\circ$; M1 for Library calculation; A1 for 60 students; A1 for $22.2\\%$.'
            },
            {
              id: '4.3-q8',
              number: 2,
              question: 'A bar chart shows grades of students: Grade A (height 6), Grade B (height 12), Grade C (height 10), Grade D (height 4). (a) How many students took the exam? (b) What fraction of students scored Grade B or higher?',
              marks: 3,
              working: [
                '(a) Total $= 6 + 12 + 10 + 4 = 32$ students.',
                '(b) Grade B or higher (A or B): $6 + 12 = 18$ students.',
                'Fraction $= \\frac{18}{32} = \\frac{9}{16}$.'
              ],
              answer: '(a) 32\\text{ students}; \\quad (b) \\frac{9}{16}',
              markBreakdown: 'B1 for 32; M1 for $6 + 12 = 18$; A1 for $9/16$.'
            },
            {
              id: '4.3-q9',
              number: 3,
              question: 'A pie chart has three sectors representing apples, bananas, and oranges in the ratio $3 : 4 : 5$. Calculate the angle of each sector in degrees.',
              marks: 3,
              working: [
                'Total ratio parts $= 3 + 4 + 5 = 12$ parts.',
                'Degrees per part $= \\frac{360^\\circ}{12} = 30^\\circ$.',
                'Apples: $3 \\times 30^\\circ = 90^\\circ$.',
                'Bananas: $4 \\times 30^\\circ = 120^\\circ$.',
                'Oranges: $5 \\times 30^\\circ = 150^\\circ$.'
              ],
              answer: '\\text{Apples: } 90^\\circ, \\; \\text{Bananas: } 120^\\circ, \\; \\text{Oranges: } 150^\\circ',
              markBreakdown: 'M1 for $360 / 12 = 30^\\circ$; A2 for all three correct angles.'
            }
          ]
        }
      ]
    },
    {
      id: 'test-4',
      number: 'Test 4',
      title: 'Chapter-end Test 4',
      type: 'chapterTest',
      level: 'both',
      steps: [
        {
          id: 'test-4-a',
          title: 'Test Part A: Core Knowledge & Recall',
          type: 'test_part_a',
          level: 'both',
          badgeText: 'Test Part A: Core Recall',
          summary: 'Part A tests data classifications, basic stem-and-leaf interpretation, and sector angle calculations.',
          questions: [
            {
              id: 'test-4-q1',
              number: 1,
              question: 'Classify as discrete or continuous: (a) Number of goals scored in a match. (b) Volume of water in a bottle.',
              marks: 2,
              working: ['(a) Counted goals: discrete.', '(b) Measured volume: continuous.'],
              answer: '(a) Discrete; \\quad (b) Continuous',
              markBreakdown: 'B1 for discrete; B1 for continuous.'
            },
            {
              id: 'test-4-q2',
              number: 2,
              question: 'A pie chart shows that 45 students chose Football from a total of 180 students. Calculate the sector angle for Football.',
              marks: 2,
              working: ['Fraction $= \\frac{45}{180} = \\frac{1}{4}$.', 'Angle $= \\frac{1}{4} \\times 360^\\circ = 90^\\circ$.'],
              answer: '90^\\circ',
              markBreakdown: 'M1 for $(45/180) \\times 360$; A1 for $90^\\circ$.'
            },
            {
              id: 'test-4-q3',
              number: 3,
              question: 'Write down the mode from the stem-and-leaf: $2 \\mid 3 \\; 3 \\; 5 \\; 8$ where Key: $2 \\mid 3 = 23$.',
              marks: 1,
              working: ['Leaf 3 occurs twice: 23.'],
              answer: '23',
              markBreakdown: 'B1 for 23.'
            }
          ]
        },
        {
          id: 'test-4-b',
          title: 'Test Part B: Multi-Step Real-World Application',
          type: 'test_part_b',
          level: 'both',
          badgeText: 'Test Part B: Applications',
          summary: 'Part B applies stem-and-leaf analysis and pie chart comparisons to realistic practical situations.',
          questions: [
            {
              id: 'test-4-q4',
              number: 1,
              question: 'A store records daily customer footfall over 14 days: $102, 115, 98, 120, 105, 118, 122, 115, 108, 95, 114, 115, 125, 110$. (a) Find the median footfall. (b) Calculate the range.',
              marks: 3,
              working: [
                'Ordered list: 95, 98, 102, 105, 108, 110, 114, 115, 115, 115, 118, 120, 122, 125.',
                'Median is mean of 7th and 8th: $\\frac{114 + 115}{2} = 114.5$.',
                'Range $= 125 - 95 = 30$.'
              ],
              answer: '(a) 114.5; \\quad (b) 30',
              markBreakdown: 'M1 for ordering list; A1 for median 114.5; A1 for range 30.'
            },
            {
              id: 'test-4-q5',
              number: 2,
              question: 'In a school election, candidate X received 240 votes, Y received 180 votes, and Z received 120 votes. (a) What percentage of the vote did candidate X win? (b) What sector angle represents candidate Y?',
              marks: 3,
              working: [
                'Total votes $= 240 + 180 + 120 = 540$.',
                '(a) Candidate X: $\\frac{240}{540} \\times 100\\% = \\frac{4}{9} \\times 100\\% \\approx 44.4\\%$.',
                '(b) Candidate Y angle: $\\frac{180}{540} \\times 360^\\circ = \\frac{1}{3} \\times 360^\\circ = 120^\\circ$.'
              ],
              answer: '(a) 44.4\\%; \\quad (b) 120^\\circ',
              markBreakdown: 'B1 for total 540; A1 for $44.4\\%$; A1 for $120^\\circ$.'
            },
            {
              id: 'test-4-q6',
              number: 3,
              question: 'A two-way table shows 50 car sales: 28 are Petrol, 15 are Diesel, and 7 are Electric. 12 of the Petrol cars are Automatic, and 6 of the Diesel cars are Automatic. If 21 cars in total are Automatic, how many Electric cars are Automatic?',
              marks: 3,
              working: [
                'Automatic cars from Petrol and Diesel: $12 + 6 = 18$.',
                'Total Automatic cars $= 21$.',
                'Electric Automatic cars $= 21 - 18 = 3$.'
              ],
              answer: '3\\text{ Electric cars are Automatic}',
              markBreakdown: 'M1 for $12 + 6 = 18$; M1 for $21 - 18$; A1 for 3.'
            }
          ]
        },
        {
          id: 'test-4-c',
          title: 'Test Part C: Exam-Style Challenge Problems',
          type: 'test_part_c',
          level: 'both',
          badgeText: 'Test Part C: Exam Challenge',
          summary: 'Part C features Cambridge exam questions on reverse pie chart calculations, IQR, and sampling proportions.',
          questions: [
            {
              id: 'test-4-q7',
              number: 1,
              question: 'A pie chart represents the nationalities of tourists in a hotel. The sector for French tourists has an angle of $54^\\circ$ and represents 36 tourists. (a) Calculate the total number of tourists in the hotel. (b) German tourists represent $126^\\circ$. Calculate the number of German tourists.',
              marks: 4,
              working: [
                '(a) Tourists per degree: $\\frac{36}{54} = \\frac{2}{3}$ tourists/degree.',
                'Total tourists $= 360 \\times \\frac{2}{3} = 240$.',
                '(b) German tourists $= 126 \\times \\frac{2}{3} = 84$ tourists.'
              ],
              answer: '(a) 240\\text{ tourists}; \\quad (b) 84\\text{ German tourists}',
              markBreakdown: 'M1 for finding ratio $36/54$; A1 for total = 240; M1 for $(126/360) \\times 240$; A1 for 84.'
            },
            {
              id: 'test-4-q8',
              number: 2,
              question: 'A grouped frequency table has intervals $0 < t \\le 10$ (freq 8), $10 < t \\le 20$ (freq 14), $20 < t \\le 30$ (freq 12), $30 < t \\le 40$ (freq 6). Calculate an estimate of the mean time $t$.',
              marks: 4,
              working: [
                'Midpoints ($m$): 5, 15, 25, 35.',
                'Products ($f \\times m$): $8(5) = 40$; $14(15) = 210$; $12(25) = 300$; $6(35) = 210$.',
                'Sum of $f \\times m = 40 + 210 + 300 + 210 = 760$.',
                'Total frequency $= 8 + 14 + 12 + 6 = 40$.',
                'Estimated mean $= \\frac{760}{40} = 19$.'
              ],
              answer: '19',
              markBreakdown: 'M1 for midpoints 5, 15, 25, 35; M1 for sum of $f \\times m = 760$; M1 for dividing by 40; A1 for 19.'
            },
            {
              id: 'test-4-q9',
              number: 3,
              question: 'The mean of four numbers $a, b, c, d$ is 12. When a fifth number $e = 22$ is added, calculate the new mean of the five numbers.',
              marks: 3,
              working: [
                'Original sum of four numbers $= 4 \\times 12 = 48$.',
                'New sum with 22 added $= 48 + 22 = 70$.',
                'New mean $= \\frac{70}{5} = 14$.'
              ],
              answer: '14',
              markBreakdown: 'M1 for $4 \\times 12 = 48$; M1 for $48 + 22 = 70$; A1 for $70 / 5 = 14$.'
            }
          ]
        }
      ]
    }
  ]
};

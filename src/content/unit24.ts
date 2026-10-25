import { Unit } from '../types/content';

export const unit24: Unit = {
  "id": 24,
  "title": "Probability using tree diagrams and Venn diagrams",
  "learningObjectives": [
    "C24.1, E24.1: Probability tree diagrams with replacement (independent events)",
    "E24.2: Probability tree diagrams without replacement (dependent conditional events)",
    "E24.3: Conditional probability using Venn diagrams P(A|B) = P(A ∩ B) / P(B)",
    "E24.4: Multi-stage probability problem solving across complex real-world systems"
  ],
  "subtopics": [
    {
      "id": "24.1",
      "number": "24.1",
      "title": "Tree diagrams: with & without replacement",
      "type": "lesson",
      "level": "both",
      "steps": [
        {
          "id": "24.1-1",
          "title": "Concept & Intuition: Branching Outcomes and Multiplications",
          "type": "concept",
          "level": "both",
          "badgeText": "Concept & Intuition",
          "summary": "A tree diagram maps sequential multi-stage events:\n- **Multiply along the branches** to find the probability of a combined sequence: $P(A \\text{ and } B) = P(A) \\times P(B|A)$.\n- **Add the results of separate branch outcomes** for 'OR' combinations.\n- **Without Replacement**: The total number of items decreases by 1 on the second draw (e.g. from 10 to 9), and the number of that colour also decreases by 1.",
          "analogy": "Like walking along a branching garden path: the probability of reaching any final path end is the product of decisions made at each fork.",
          "terms": [
            {
              "term": "Independent Events",
              "definition": "The outcome of the first event does NOT affect the probability of the second (with replacement).",
              "example": "Flipping a coin twice."
            },
            {
              "term": "Conditional / Dependent Events",
              "definition": "The outcome of the first event changes the probabilities for the second event (without replacement).",
              "example": "Drawing two socks from a drawer."
            }
          ],
          "rules": [
            {
              "title": "Tree Diagram Multiplications",
              "latex": "P(A \\cap B) = P(A) \\times P(B|A), \\quad P(\\text{At least one}) = 1 - P(\\text{None})",
              "explanation": "Multiply along branches; add distinct path ends."
            }
          ],
          "interactiveTool": {
            "type": "tree_diagram",
            "title": "Interactive Probability Tree"
          }
        },
        {
          "id": "24.1-2",
          "title": "Worked Example: Without Replacement Calculation",
          "type": "worked_example",
          "level": "both",
          "badgeText": "Worked Example",
          "workedProblem": {
            "statement": "A bag contains 7 red and 3 green marbles. Two marbles are drawn at random without replacement.\n(a) Draw and label a tree diagram.\n(b) Find the probability that both marbles are red.\n(c) Find the probability that at least one marble is green.",
            "steps": [
              {
                "stepNumber": 1,
                "instruction": "First draw: $P(R_1) = 7/10$, $P(G_1) = 3/10$.",
                "latex": "P(R_1) = \\frac{7}{10}, \\quad P(G_1) = \\frac{3}{10}",
                "note": "First branch."
              },
              {
                "stepNumber": 2,
                "instruction": "Second draw (9 marbles left):\nIf Red 1st: $P(R_2) = 6/9$, $P(G_2) = 3/9$.\nIf Green 1st: $P(R_2) = 7/9$, $P(G_2) = 2/9$.",
                "latex": "P(R_2|R_1) = \\frac{6}{9}, \\quad P(G_2|G_1) = \\frac{2}{9}",
                "note": "Conditional branches."
              },
              {
                "stepNumber": 3,
                "instruction": "Both red: $P(RR) = \\frac{7}{10} \\times \\frac{6}{9} = \\frac{42}{90} = \\frac{7}{15}$.",
                "latex": "P(RR) = \\frac{7}{15}",
                "note": "Multiply along RR branch."
              },
              {
                "stepNumber": 4,
                "instruction": "At least one green $= 1 - P(\\text{no green}) = 1 - P(RR) = 1 - \\frac{7}{15} = \\frac{8}{15}$.",
                "latex": "P(\\ge 1 \\text{ green}) = 1 - \\frac{7}{15} = \\frac{8}{15}",
                "note": "Complement method."
              }
            ],
            "finalAnswer": "(b) 7/15; (c) 8/15"
          }
        },
        {
          "id": "24.1-3",
          "title": "Common Mistake & Pro Tip: Forgetting the Denominator Drop",
          "type": "common_mistakes",
          "level": "both",
          "badgeText": "Common Mistake & Pro Tip",
          "commonMistakes": [
            {
              "mistake": "Keeping the denominator as 10 on the second draw when items are NOT replaced.",
              "correction": "Without replacement means 1 item is gone! The denominator drops from 10 to 9.",
              "examinerTip": "When asked for 'one of each colour', remember there are TWO paths: (Red then Green) OR (Green then Red). Add them together!",
              "memoryTrick": "Without replacement = Denominator decreases by 1!"
            }
          ]
        },
        {
          "id": "24.1-4",
          "title": "Exercise: Level 1 (Basic)",
          "type": "exercise_1",
          "level": "both",
          "badgeText": "Exercise: Level 1 (Basic)",
          "questions": [
            {
              "id": "24.1-q1",
              "number": 1,
              "question": "A fair coin is tossed twice. What is the probability of getting two Heads?",
              "working": [
                "P(H) = 1/2. P(HH) = 1/2 * 1/2 = 1/4"
              ],
              "answer": "1/4 (or 0.25)"
            },
            {
              "id": "24.1-q2",
              "number": 2,
              "question": "A bag has 4 red and 6 blue counters. One is chosen, replaced, and another is chosen. Find $P(\\text{both blue})$.",
              "working": [
                "With replacement: (6/10) * (6/10) = 36/100 = 9/25"
              ],
              "answer": "9/25 (or 0.36)"
            },
            {
              "id": "24.1-q3",
              "number": 3,
              "question": "If $P(A) = 0.6$ and $P(B|A) = 0.4$, find $P(A \\text{ and } B)$.",
              "working": [
                "P(A and B) = 0.6 * 0.4 = 0.24"
              ],
              "answer": "0.24"
            }
          ]
        },
        {
          "id": "24.1-5",
          "title": "Exercise: Level 2 (Real-World Scenarios)",
          "type": "exercise_2",
          "level": "both",
          "badgeText": "Exercise: Level 2 (Real-World)",
          "questions": [
            {
              "id": "24.1-q4",
              "number": 1,
              "question": "The probability that it rains on Saturday is 0.4. If it rains on Saturday, the probability it rains on Sunday is 0.7. If it is dry on Saturday, the probability of rain on Sunday is 0.2. Find the probability of rain on both days.",
              "working": [
                "P(Rain Sat and Rain Sun) = 0.4 * 0.7 = 0.28"
              ],
              "answer": "0.28"
            },
            {
              "id": "24.1-q5",
              "number": 2,
              "question": "In the weather question above, find the probability that it rains on Sunday.",
              "working": [
                "Path 1 (Rain Sat, Rain Sun) = 0.4 * 0.7 = 0.28",
                "Path 2 (Dry Sat, Rain Sun) = 0.6 * 0.2 = 0.12",
                "Total = 0.28 + 0.12 = 0.40"
              ],
              "answer": "0.40"
            },
            {
              "id": "24.1-q6",
              "number": 3,
              "question": "A quality checker tests 2 components drawn without replacement from a box of 18 good and 2 defective components. What is the probability that both components are good?",
              "working": [
                "Total = 20 components",
                "P(GG) = (18/20) * (17/19) = 306 / 380 = 153 / 190 ≈ 0.805"
              ],
              "answer": "153/190 (or approx 0.805)"
            }
          ]
        },
        {
          "id": "24.1-6",
          "title": "Exercise: Level 3 (Exam-Style)",
          "type": "exercise_3",
          "level": "both",
          "badgeText": "Exercise: Level 3 (Exam-Style)",
          "questions": [
            {
              "id": "24.1-q7",
              "number": 1,
              "marks": 4,
              "question": "A box contains 5 red pens and 3 blue pens. Two pens are taken at random without replacement.\nCalculate the probability that:\n(a) Both pens are the same colour [2 marks]\n(b) The pens are of different colours [2 marks]",
              "working": [
                "Total = 8 pens",
                "(a) P(RR) = (5/8)*(4/7) = 20/56. P(BB) = (3/8)*(2/7) = 6/56. Same colour = (20 + 6)/56 = 26/56 = 13/28",
                "(b) Different colours = 1 - 13/28 = 15/28"
              ],
              "answer": "(a) 13/28; (b) 15/28",
              "markBreakdown": "M1 for 20/56 + 6/56, A1 for 13/28; M1 for 1 - 13/28, A1 for 15/28"
            },
            {
              "id": "24.1-q8",
              "number": 2,
              "marks": 4,
              "question": "A bag has $n$ sweets, of which 6 are orange. Hannah takes a sweet, eats it, and takes a second sweet.\nThe probability that both sweets are orange is $\\frac{1}{3}$.\nShow that $n^2 - n - 90 = 0$ and find $n$. [4 marks]",
              "working": [
                "P(OO) = (6/n) * (5/(n - 1)) = 30 / (n(n - 1)) = 1/3",
                "30 * 3 = n(n - 1) => 90 = n^2 - n => n^2 - n - 90 = 0",
                "(n - 10)(n + 9) = 0 => n = 10 (since n > 0)"
              ],
              "answer": "n^2 - n - 90 = 0 shown; n = 10 sweets",
              "markBreakdown": "M1 for (6/n)*(5/(n-1)), M1 for equating to 1/3, M1 for expanding n(n-1)=90, A1 for n = 10"
            },
            {
              "id": "24.1-q9",
              "number": 3,
              "marks": 4,
              "question": "Sarah attempts a target twice. $P(\\text{hit}) = 0.75$ independently on each shot.\nFind the probability that she hits the target at least once. [4 marks]",
              "working": [
                "P(miss) = 1 - 0.75 = 0.25",
                "P(miss both) = 0.25 * 0.25 = 0.0625",
                "P(at least one hit) = 1 - 0.0625 = 0.9375 (or 15/16)"
              ],
              "answer": "0.9375 (or 15/16)",
              "markBreakdown": "M1 for P(miss) = 0.25, M1 for 0.25^2 = 0.0625, M1 for 1 - 0.0625, A1 for 0.9375"
            }
          ]
        }
      ]
    },
    {
      "id": "24.2",
      "number": "24.2",
      "title": "Venn diagrams & conditional probability",
      "type": "lesson",
      "level": "extended",
      "steps": [
        {
          "id": "24.2-1",
          "title": "Concept & Intuition: Conditional Probability P(A|B)",
          "type": "concept",
          "level": "extended",
          "badgeText": "Concept & Intuition",
          "summary": "Conditional probability $P(A | B)$ means: **'The probability that event $A$ happens, GIVEN that event $B$ has already occurred.'**\n- Restrict your entire sample space solely to Set $B$!\n$$P(A | B) = \\frac{n(A \\cap B)}{n(B)} = \\frac{P(A \\cap B)}{P(B)}$$",
          "analogy": "Like zooming in: if you are given that a student studies French (Set $B$), ignore everyone else in the school and look only inside the French circle.",
          "terms": [
            {
              "term": "Conditional Probability P(A|B)",
              "definition": "The probability of $A$ occurring given that $B$ is known to occur: $\\frac{P(A \\cap B)}{P(B)}$.",
              "example": "Given even number on die, $P(2) = 1/3$ (since evens are 2, 4, 6)."
            },
            {
              "term": "Reduced Sample Space",
              "definition": "Conditioning on $B$ reduces the total possible outcomes to $n(B)$.",
              "example": "Denominator becomes $n(B)$."
            }
          ],
          "rules": [
            {
              "title": "Conditional Probability Formula",
              "latex": "P(A | B) = \\frac{P(A \\cap B)}{P(B)} = \\frac{n(A \\cap B)}{n(B)}",
              "explanation": "Intersection count divided by the given condition's total count."
            }
          ],
          "interactiveTool": {
            "type": "venn_diagram",
            "title": "Conditional Probability Venn Diagram"
          }
        },
        {
          "id": "24.2-2",
          "title": "Worked Example: Venn Diagram Conditional Probability",
          "type": "worked_example",
          "level": "extended",
          "badgeText": "Worked Example",
          "workedProblem": {
            "statement": "In a group of 50 students, 30 study Art ($A$), 25 study Biology ($B$), and 12 study both.\n(a) Draw and populate a Venn diagram.\n(b) Find $P(A \\cup B)$.\n(c) Find $P(A | B)$ (probability a student studies Art given they study Biology).",
            "steps": [
              {
                "stepNumber": 1,
                "instruction": "Middle intersection $A \\cap B = 12$.",
                "latex": "n(A \\cap B) = 12",
                "note": "Fill overlap first."
              },
              {
                "stepNumber": 2,
                "instruction": "Art only: $30 - 12 = 18$. Biology only: $25 - 12 = 13$. Neither: $50 - (18 + 12 + 13) = 7$.",
                "latex": "18, \\quad 12, \\quad 13, \\quad 7",
                "note": "Four regions."
              },
              {
                "stepNumber": 3,
                "instruction": "Union $A \\cup B = 18 + 12 + 13 = 43$. $P(A \\cup B) = 43/50 = 0.86$.",
                "latex": "P(A \\cup B) = \\frac{43}{50} = 0.86",
                "note": "Total studying at least one."
              },
              {
                "stepNumber": 4,
                "instruction": "Given Biology: sample space is $n(B) = 25$. Art students within Biology is $n(A \\cap B) = 12$.",
                "latex": "P(A | B) = \\frac{n(A \\cap B)}{n(B)} = \\frac{12}{25} = 0.48",
                "note": "Reduced sample space."
              }
            ],
            "finalAnswer": "(b) 43/50 (0.86); (c) 12/25 (0.48)"
          }
        },
        {
          "id": "24.2-3",
          "title": "Common Mistake & Pro Tip: The Denominator in Given Condition",
          "type": "common_mistakes",
          "level": "extended",
          "badgeText": "Common Mistake & Pro Tip",
          "commonMistakes": [
            {
              "mistake": "Dividing by the overall universal total $n(\\xi) = 50$ instead of $n(B) = 25$ when calculating $P(A | B)$.",
              "correction": "The word 'GIVEN' means the total pool is now strictly Set $B$. The denominator MUST be $n(B)$.",
              "examinerTip": "Notice that $P(A|B) \\ne P(B|A)$. In this example, $P(A|B) = 12/25 = 0.48$, whereas $P(B|A) = 12/30 = 0.40$.",
              "memoryTrick": "The letter after the bar '|' goes in the denominator!"
            }
          ]
        },
        {
          "id": "24.2-4",
          "title": "Exercise: Level 1 (Basic)",
          "type": "exercise_1",
          "level": "extended",
          "badgeText": "Exercise: Level 1 (Basic)",
          "questions": [
            {
              "id": "24.2-q1",
              "number": 1,
              "question": "If $n(A \\cap B) = 8$ and $n(B) = 20$, calculate $P(A | B)$.",
              "working": [
                "P(A | B) = 8 / 20 = 2/5 = 0.4"
              ],
              "answer": "2/5 (or 0.4)"
            },
            {
              "id": "24.2-q2",
              "number": 2,
              "question": "If $n(A) = 16$ and $n(A \\cap B) = 8$, calculate $P(B | A)$.",
              "working": [
                "P(B | A) = 8 / 16 = 1/2 = 0.5"
              ],
              "answer": "1/2 (or 0.5)"
            },
            {
              "id": "24.2-q3",
              "number": 3,
              "question": "A fair die is rolled. Given that the number rolled is odd, find the probability that it is 5.",
              "working": [
                "Odd numbers = {1, 3, 5} (3 outcomes)",
                "P(5 | odd) = 1/3"
              ],
              "answer": "1/3"
            }
          ]
        },
        {
          "id": "24.2-5",
          "title": "Exercise: Level 2 (Real-World Scenarios)",
          "type": "exercise_2",
          "level": "extended",
          "badgeText": "Exercise: Level 2 (Real-World)",
          "questions": [
            {
              "id": "24.2-q4",
              "number": 1,
              "question": "In a medical study of 100 patients, 40 had a cough, 30 had a fever, and 20 had both. Given that a patient has a fever, what is the probability they also have a cough?",
              "working": [
                "P(cough | fever) = n(cough ∩ fever) / n(fever) = 20 / 30 = 2/3"
              ],
              "answer": "2/3"
            },
            {
              "id": "24.2-q5",
              "number": 2,
              "question": "In the study above, given that a patient has a cough, what is the probability they have a fever?",
              "working": [
                "P(fever | cough) = 20 / 40 = 1/2"
              ],
              "answer": "1/2"
            },
            {
              "id": "24.2-q6",
              "number": 3,
              "question": "From 60 music students, 36 play strings, 24 play brass, and 8 play both. Find the probability that a randomly chosen brass player also plays strings.",
              "working": [
                "Given brass: total = 24. Both = 8 => P = 8 / 24 = 1/3"
              ],
              "answer": "1/3"
            }
          ]
        },
        {
          "id": "24.2-6",
          "title": "Exercise: Level 3 (Exam-Style)",
          "type": "exercise_3",
          "level": "extended",
          "badgeText": "Exercise: Level 3 (Exam-Style)",
          "questions": [
            {
              "id": "24.2-q7",
              "number": 1,
              "marks": 3,
              "question": "In a school of 120 students:\n- 70 take History ($H$)\n- 55 take Geography ($G$)\n- 25 take both\nFind $P(H' | G)$. [3 marks]",
              "working": [
                "Geography only = 55 - 25 = 30 students",
                "n(G) = 55",
                "P(H' | G) = n(H' ∩ G) / n(G) = 30 / 55 = 6/11"
              ],
              "answer": "6/11",
              "markBreakdown": "M1 for n(H' ∩ G) = 30, M1 for denominator 55, A1 for 6/11"
            },
            {
              "id": "24.2-q8",
              "number": 2,
              "marks": 4,
              "question": "Two events $A$ and $B$ satisfy $P(A) = 0.6$, $P(B) = 0.5$, and $P(A \\cup B) = 0.85$.\n(a) Work out $P(A \\cap B)$. [2 marks]\n(b) Work out $P(B | A)$. [2 marks]",
              "working": [
                "(a) P(A ∩ B) = P(A) + P(B) - P(A ∪ B) = 0.6 + 0.5 - 0.85 = 0.25",
                "(b) P(B | A) = P(A ∩ B) / P(A) = 0.25 / 0.60 = 25/60 = 5/12 ≈ 0.417"
              ],
              "answer": "(a) 0.25; (b) 5/12 (or approx 0.417)",
              "markBreakdown": "M1 for 0.6 + 0.5 - 0.85, A1 for 0.25; M1 for 0.25 / 0.60, A1 for 5/12"
            },
            {
              "id": "24.2-q9",
              "number": 3,
              "marks": 4,
              "question": "A company produces bolts on two machines: Machine 1 makes 60% of bolts with 2% defect rate; Machine 2 makes 40% with 5% defect rate.\nA bolt is chosen at random and found to be defective. Find the probability it was produced by Machine 1. [4 marks]",
              "working": [
                "P(Defective from M1) = 0.60 * 0.02 = 0.012",
                "P(Defective from M2) = 0.40 * 0.05 = 0.020",
                "Total P(Defective) = 0.012 + 0.020 = 0.032",
                "P(M1 | Defective) = 0.012 / 0.032 = 12 / 32 = 3/8 = 0.375"
              ],
              "answer": "3/8 (or 0.375, 37.5%)",
              "markBreakdown": "M1 for 0.012, M1 for 0.020, M1 for Total = 0.032, A1 for 3/8"
            }
          ]
        }
      ]
    },
    {
      "id": "24.test",
      "number": "Test 24",
      "title": "Chapter 24 Test: Tree & Venn probability",
      "type": "chapterTest",
      "level": "both",
      "steps": [
        {
          "id": "24.test-1",
          "title": "Chapter 24 Test: Part A (Basic Recall)",
          "type": "test_part_a",
          "level": "both",
          "badgeText": "Test Part A: Core Recall",
          "questions": [
            {
              "id": "24.t-1",
              "number": 1,
              "marks": 2,
              "question": "State the formula for conditional probability $P(A | B)$ in terms of $P(A \\cap B)$ and $P(B)$.",
              "working": [
                "P(A | B) = P(A ∩ B) / P(B)"
              ],
              "answer": "P(A | B) = P(A ∩ B) / P(B)",
              "markBreakdown": "B2 for correct formula"
            },
            {
              "id": "24.t-2",
              "number": 2,
              "marks": 2,
              "question": "A card is drawn from a standard 52-card deck. Given that it is a red card, find the probability that it is a King.",
              "working": [
                "Red cards = 26. Red Kings = 2. P = 2 / 26 = 1/13"
              ],
              "answer": "1/13",
              "markBreakdown": "M1 for 2/26, A1 for 1/13"
            },
            {
              "id": "24.t-3",
              "number": 3,
              "marks": 2,
              "question": "Two fair coins are flipped. What is the probability of getting at least one head?",
              "working": [
                "1 - P(TT) = 1 - 1/4 = 3/4"
              ],
              "answer": "3/4 (or 0.75)",
              "markBreakdown": "M1 for 1 - 1/4, A1 for 3/4"
            }
          ]
        },
        {
          "id": "24.test-2",
          "title": "Chapter 24 Test: Part B (Real-World Problems)",
          "type": "test_part_b",
          "level": "both",
          "badgeText": "Test Part B: Multi-Step Real-World Application",
          "questions": [
            {
              "id": "24.t-4",
              "number": 1,
              "marks": 3,
              "question": "A commuter catches bus A with probability 0.7. If on bus A, probability of being late is 0.1. If on bus B, probability of being late is 0.4. Find the probability of being on time.",
              "working": [
                "P(on time) = P(Bus A and on time) + P(Bus B and on time)",
                "= 0.7 * 0.9 + 0.3 * 0.6 = 0.63 + 0.18 = 0.81"
              ],
              "answer": "0.81",
              "markBreakdown": "M1 for 0.7 * 0.9 = 0.63, M1 for 0.3 * 0.6 = 0.18, A1 for 0.81"
            },
            {
              "id": "24.t-5",
              "number": 2,
              "marks": 3,
              "question": "In a class of 28 pupils, 16 study chemistry, 14 study physics, and 6 study both. Find the probability that a physics student chosen at random does NOT study chemistry.",
              "working": [
                "Physics only = 14 - 6 = 8. Total physics = 14. P = 8 / 14 = 4/7"
              ],
              "answer": "4/7",
              "markBreakdown": "M1 for 14 - 6 = 8, M1 for denominator 14, A1 for 4/7"
            },
            {
              "id": "24.t-6",
              "number": 3,
              "marks": 4,
              "question": "There are 5 red apples and 3 green apples in a fruit bowl. Two apples are picked without replacement. What is the probability that both apples are of the same colour?",
              "working": [
                "P(RR) = (5/8) * (4/7) = 20/56",
                "P(GG) = (3/8) * (2/7) = 6/56",
                "Total = (20 + 6)/56 = 26/56 = 13/28"
              ],
              "answer": "13/28",
              "markBreakdown": "M1 for (5/8)*(4/7), M1 for (3/8)*(2/7), M1 for sum, A1 for 13/28"
            }
          ]
        },
        {
          "id": "24.test-3",
          "title": "Chapter 24 Test: Part C (Exam-Style Challenge)",
          "type": "test_part_c",
          "level": "both",
          "badgeText": "Test Part C: Exam Challenge",
          "questions": [
            {
              "id": "24.t-7",
              "number": 1,
              "marks": 5,
              "question": "A bag has 10 coins: 7 silver and 3 gold. Two coins are taken without replacement.\n(a) Work out the probability of getting exactly one gold coin. [3 marks]\n(b) If a player wins $5 for each gold coin and pays $3 to play, find the expected profit/loss per game. [2 marks]",
              "working": [
                "(a) P(SG) + P(GS) = (7/10)*(3/9) + (3/10)*(7/9) = 21/90 + 21/90 = 42/90 = 7/15",
                "(b) P(2 gold) = (3/10)*(2/9) = 6/90 = 1/15. P(0 gold) = (7/10)*(6/9) = 42/90 = 7/15. Expected winnings = 0*(7/15) + 5*(7/15) + 10*(1/15) = (35 + 10)/15 = 45/15 = $3.00. Cost = $3.00 => Expected profit = $0.00 (Fair game)"
              ],
              "answer": "(a) 7/15; (b) $0.00 (Fair game)",
              "markBreakdown": "M1 for (7/10)*(3/9), M1 for adding two branches, A1 for 7/15; M1 for expected return $3.00, A1 for profit = $0.00"
            },
            {
              "id": "24.t-8",
              "number": 2,
              "marks": 5,
              "question": "In a sports academy of 100 students, 60 play football ($F$), 40 play tennis ($T$), and 10 play neither.\n(a) Show that $n(F \\cap T) = 10$. [2 marks]\n(b) Find $P(F | T')$. [3 marks]",
              "working": [
                "(a) At least one sport = 100 - 10 = 90. n(F ∩ T) = 60 + 40 - 90 = 10",
                "(b) T' = 100 - 40 = 60 students who do not play tennis. F ∩ T' = 60 - 10 = 50 students who play football only. P(F | T') = 50 / 60 = 5/6"
              ],
              "answer": "(a) 10 shown; (b) 5/6",
              "markBreakdown": "M1 for 60 + 40 - 90, A1 for 10; M1 for n(T') = 60, M1 for n(F ∩ T') = 50, A1 for 5/6"
            },
            {
              "id": "24.t-9",
              "number": 3,
              "marks": 4,
              "question": "Three lightbulbs are tested. Each bulb has an independent failure probability of 0.05.\nCalculate the probability that at least one bulb fails. [4 marks]",
              "working": [
                "P(works) = 1 - 0.05 = 0.95",
                "P(all 3 work) = 0.95^3 = 0.857375",
                "P(at least one fails) = 1 - 0.857375 = 0.142625 ≈ 0.143"
              ],
              "answer": "0.143 (or 0.142625)",
              "markBreakdown": "M1 for 0.95, M2 for 0.95^3, A1 for 0.143"
            }
          ]
        }
      ]
    }
  ]
};

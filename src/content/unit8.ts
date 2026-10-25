import { Unit } from '../types/content';

export const unit8: Unit = {
  "id": 8,
  "title": "Introduction to probability",
  "learningObjectives": [
    "C8.1, E8.1: Probability scale 0 to 1, impossibility, certainty, even chance",
    "C8.2, E8.2: Calculating theoretical probabilities for single events P(E) = n(E)/n(S)",
    "C8.3, E8.3: Relative frequency, experimental probability, and expected frequency",
    "C8.4, E8.4: Mutually exclusive outcomes and complementary events P(A') = 1 - P(A)"
  ],
  "subtopics": [
    {
      "id": "8.1",
      "number": "8.1",
      "title": "The probability scale",
      "type": "lesson",
      "level": "core",
      "steps": [
        {
          "id": "8.1-1",
          "title": "Concept & Intuition: The 0 to 1 Probability Continuum",
          "type": "concept",
          "level": "core",
          "badgeText": "Concept & Intuition",
          "summary": "Probability quantifies how likely an event is to happen. It is always bounded between 0 (impossible) and 1 (certain). An event with probability 0.5 (or 1/2, 50%) has an even chance.",
          "analogy": "A fuel gauge goes from 0% (empty) to 100% (full). Probability cannot be less than 0 or more than 1.",
          "terms": [
            {
              "term": "Probability Scale",
              "definition": "A continuum from 0 (impossible) to 1 (certain).",
              "example": "$P(\\text{heads on fair coin}) = 0.5$"
            },
            {
              "term": "Event",
              "definition": "A collection of one or more outcomes of an experiment.",
              "example": "Rolling an even number on a die."
            }
          ],
          "rules": [
            {
              "title": "Probability Range",
              "explanation": "$0 \\le P(A) \\le 1$. Never write a probability as a ratio (e.g. 1:4) or a number $> 1$."
            }
          ]
        },
        {
          "id": "8.1-2",
          "title": "Worked Example: Describing & Ordering Likelihoods",
          "type": "worked_example",
          "level": "core",
          "badgeText": "Worked Example",
          "workedProblem": {
            "statement": "State the probability (as fraction, decimal, and descriptor) of:\n(a) Rolling an 8 on an ordinary fair 6-sided die.\n(b) Getting tails on a fair coin.\n(c) Choosing a red ball from a bag of 3 red and 1 blue balls.",
            "steps": [
              {
                "stepNumber": 1,
                "instruction": "For (a), the faces are 1, 2, 3, 4, 5, 6. An 8 cannot occur.",
                "latex": "P(8) = 0",
                "note": "Descriptor: Impossible"
              },
              {
                "stepNumber": 2,
                "instruction": "For (b), there is 1 tail out of 2 equally likely faces.",
                "latex": "P(\\text{tails}) = \\frac{1}{2} = 0.5 = 50\\%",
                "note": "Descriptor: Even chance"
              },
              {
                "stepNumber": 3,
                "instruction": "For (c), there are 3 red out of 4 total balls.",
                "latex": "P(\\text{red}) = \\frac{3}{4} = 0.75 = 75\\%",
                "note": "Descriptor: Likely"
              }
            ],
            "finalAnswer": "(a) 0 (Impossible); (b) 1/2 or 0.5 (Even chance); (c) 3/4 or 0.75 (Likely)"
          }
        },
        {
          "id": "8.1-3",
          "title": "Common Mistake & Pro Tip: Ratio Notation vs Probabilities",
          "type": "common_mistakes",
          "level": "core",
          "badgeText": "Common Mistake & Pro Tip",
          "commonMistakes": [
            {
              "mistake": "Writing a probability as a ratio such as '1 in 4' or '1 : 4'.",
              "correction": "Cambridge exam mark schemes reject ratio notation. Write strictly as a fraction 1/4, a decimal 0.25, or 25%.",
              "examinerTip": "Fractions do not always have to be in simplest form unless requested, but simplifying to lowest terms is best practice.",
              "memoryTrick": "FDP rule: Fractions, Decimals, Percentages only."
            }
          ]
        },
        {
          "id": "8.1-4",
          "title": "Exercise: Level 1 (Basic)",
          "type": "exercise_1",
          "level": "core",
          "badgeText": "Exercise: Level 1 (Basic)",
          "questions": [
            {
              "id": "8.1-q1",
              "number": 1,
              "question": "Write down the probability of rolling an odd number on a standard fair 6-sided die as a simplified fraction.",
              "working": [
                "Odd numbers are 1, 3, 5 (3 outcomes)",
                "Total outcomes = 6",
                "P(odd) = 3/6 = 1/2"
              ],
              "answer": "1/2"
            },
            {
              "id": "8.1-q2",
              "number": 2,
              "question": "A spinner has 5 equal sectors numbered 1, 2, 3, 4, 5. Write down the probability of spinning a number less than 6 as a decimal.",
              "working": [
                "Numbers less than 6 are 1, 2, 3, 4, 5 (all 5 sectors)",
                "P(< 6) = 5/5 = 1.0"
              ],
              "answer": "1 (or 1.0)"
            },
            {
              "id": "8.1-q3",
              "number": 3,
              "question": "Which of the following values cannot represent a probability: -0.2, 0, 5/4, 0.85, 120%?",
              "working": [
                "Probabilities must lie strictly in [0, 1]",
                "-0.2 < 0; 5/4 = 1.25 > 1; 120% = 1.2 > 1"
              ],
              "answer": "-0.2, 5/4, 120%"
            }
          ]
        },
        {
          "id": "8.1-5",
          "title": "Exercise: Level 2 (Real-World Scenarios)",
          "type": "exercise_2",
          "level": "core",
          "badgeText": "Exercise: Level 2 (Real-World)",
          "questions": [
            {
              "id": "8.1-q4",
              "number": 1,
              "question": "A weather forecaster reports an 80% chance of rain in Cambridge tomorrow. Express this probability as a fraction in its simplest form.",
              "working": [
                "80% = 80/100",
                "Divide numerator and denominator by 20: 4/5"
              ],
              "answer": "4/5"
            },
            {
              "id": "8.1-q5",
              "number": 2,
              "question": "A quality control batch contains 100 lightbulbs, of which 3 are defective. What is the probability that a randomly picked bulb works, expressed as a decimal?",
              "working": [
                "Working bulbs = 100 - 3 = 97",
                "P(working) = 97/100 = 0.97"
              ],
              "answer": "0.97"
            },
            {
              "id": "8.1-q6",
              "number": 3,
              "question": "In a raffle of 200 tickets, Maria buys 10 tickets. What is the probability that she wins the first prize drawn?",
              "working": [
                "Favourable outcomes = 10",
                "Total tickets = 200",
                "P(win) = 10/200 = 1/20 (or 0.05)"
              ],
              "answer": "1/20 (or 0.05)"
            }
          ]
        },
        {
          "id": "8.1-6",
          "title": "Exercise: Level 3 (Exam-Style)",
          "type": "exercise_3",
          "level": "core",
          "badgeText": "Exercise: Level 3 (Exam-Style)",
          "questions": [
            {
              "id": "8.1-q7",
              "number": 1,
              "marks": 2,
              "question": "A card is drawn at random from a standard 52-card deck. Find the probability that the card is:\n(a) A Queen [1 mark]\n(b) A red Ace [1 mark]",
              "working": [
                "(a) There are 4 Queens in 52 cards: 4/52 = 1/13",
                "(b) There are 2 red Aces (Hearts, Diamonds): 2/52 = 1/26"
              ],
              "answer": "(a) 1/13; (b) 1/26",
              "markBreakdown": "B1 for 1/13, B1 for 1/26"
            },
            {
              "id": "8.1-q8",
              "number": 2,
              "marks": 2,
              "question": "A letter is chosen at random from the word 'MATHEMATICS'. Find the probability that the letter is:\n(a) An 'M' [1 mark]\n(b) A vowel [1 mark]",
              "working": [
                "Total letters = 11",
                "(a) Letters 'M' appear 2 times: 2/11",
                "(b) Vowels are A, E, A, I (4 vowels): 4/11"
              ],
              "answer": "(a) 2/11; (b) 4/11",
              "markBreakdown": "B1 for 2/11, B1 for 4/11"
            },
            {
              "id": "8.1-q9",
              "number": 3,
              "marks": 3,
              "question": "A bag contains $n$ counters, of which 6 are green and the remainder are yellow.\nThe probability of picking a green counter is 2/9.\n(a) Show that $n = 27$. [2 marks]\n(b) Find the number of yellow counters. [1 mark]",
              "working": [
                "(a) P(green) = 6/n = 2/9. 2n = 54 => n = 27",
                "(b) Yellow counters = 27 - 6 = 21"
              ],
              "answer": "(a) n = 27; (b) 21",
              "markBreakdown": "M1 for 6/n = 2/9, A1 for n = 27; B1 for 21"
            }
          ]
        }
      ]
    },
    {
      "id": "8.2",
      "number": "8.2",
      "title": "Relative frequency & expected outcomes",
      "type": "lesson",
      "level": "both",
      "steps": [
        {
          "id": "8.2-1",
          "title": "Concept & Intuition: Relative Frequency & Expected Value",
          "type": "concept",
          "level": "both",
          "badgeText": "Concept & Intuition",
          "summary": "Theoretical probability assumes perfectly fair conditions. Experimental probability (relative frequency) is calculated from actual trials. As the number of trials increases, relative frequency converges towards theoretical probability.",
          "analogy": "Tossing a coin 4 times might yield 4 heads, but tossing it 10,000 times will be extremely close to 5,000 heads (50%).",
          "terms": [
            {
              "term": "Relative Frequency",
              "definition": "$\\text{Frequency of event} / \\text{Total trials}$.",
              "example": "45 heads in 100 flips = 0.45"
            },
            {
              "term": "Expected Frequency",
              "definition": "$\\text{Number of trials} \\times P(\\text{event})$.",
              "example": "Roll a die 600 times: expected sixes = $600 \\times (1/6) = 100$"
            }
          ],
          "rules": [
            {
              "title": "Expected Value Formula",
              "latex": "\\text{Expected frequency} = n \\times p",
              "explanation": "Multiply the number of trials $n$ by the probability $p$ of the event."
            }
          ]
        },
        {
          "id": "8.2-2",
          "title": "Worked Example: Biased Spinners & Prediction",
          "type": "worked_example",
          "level": "both",
          "badgeText": "Worked Example",
          "workedProblem": {
            "statement": "A 4-sided spinner was spun 200 times. Scores: 1 (48 times), 2 (64 times), 3 (52 times), 4 (36 times).\n(a) Find the relative frequency of spinning a 2.\n(b) In a tournament, the spinner is spun 500 times. Estimate how many times a 2 will be spun.",
            "steps": [
              {
                "stepNumber": 1,
                "instruction": "Relative frequency is frequency of 2 divided by total spins.",
                "latex": "\\text{Relative frequency} = \\frac{64}{200} = 0.32",
                "note": "Simplify fraction or write as decimal."
              },
              {
                "stepNumber": 2,
                "instruction": "Multiply total trials (500) by the relative frequency (0.32).",
                "latex": "\\text{Expected count} = 500 \\times 0.32 = 160",
                "note": "Shows expected frequency in 500 trials."
              }
            ],
            "finalAnswer": "(a) 0.32 (or 8/25); (b) 160 times"
          }
        },
        {
          "id": "8.2-3",
          "title": "Common Mistake & Pro Tip: Sample Size Reliability",
          "type": "common_mistakes",
          "level": "both",
          "badgeText": "Common Mistake & Pro Tip",
          "commonMistakes": [
            {
              "mistake": "Assuming a small number of trials gives a reliable probability estimate.",
              "correction": "A larger number of trials always gives a more reliable estimate of probability.",
              "examinerTip": "When asked which student has the more reliable estimate, always choose the student who conducted the largest number of trials.",
              "memoryTrick": "More trials = more trust."
            }
          ]
        },
        {
          "id": "8.2-4",
          "title": "Exercise: Level 1 (Basic)",
          "type": "exercise_1",
          "level": "both",
          "badgeText": "Exercise: Level 1 (Basic)",
          "questions": [
            {
              "id": "8.2-q1",
              "number": 1,
              "question": "A fair 6-sided die is rolled 180 times. Calculate the expected number of times a multiple of 3 is rolled.",
              "working": [
                "Multiples of 3 are 3, 6 (2 outcomes out of 6)",
                "P(multiple of 3) = 2/6 = 1/3",
                "Expected = 180 * 1/3 = 60"
              ],
              "answer": "60"
            },
            {
              "id": "8.2-q2",
              "number": 2,
              "question": "A drawing pin is dropped 50 times and lands point up 28 times. State the relative frequency of landing point up as a decimal.",
              "working": [
                "Relative frequency = 28 / 50 = 56 / 100 = 0.56"
              ],
              "answer": "0.56"
            },
            {
              "id": "8.2-q3",
              "number": 3,
              "question": "The probability that a bus arrives on time is 0.85. If there are 60 bus journeys in a week, how many are expected to be on time?",
              "working": [
                "Expected = 60 * 0.85 = 51"
              ],
              "answer": "51"
            }
          ]
        },
        {
          "id": "8.2-5",
          "title": "Exercise: Level 2 (Real-World Scenarios)",
          "type": "exercise_2",
          "level": "both",
          "badgeText": "Exercise: Level 2 (Real-World)",
          "questions": [
            {
              "id": "8.2-q4",
              "number": 1,
              "question": "A factory produces 4000 smartphones a day. In a quality control sample of 250 phones, 5 are defective. Estimate the total number of defective phones produced per day.",
              "working": [
                "P(defect) = 5 / 250 = 0.02",
                "Expected defects = 4000 * 0.02 = 80"
              ],
              "answer": "80"
            },
            {
              "id": "8.2-q5",
              "number": 2,
              "question": "An airline knows that 4% of passengers booked on a flight do not show up. A flight has 175 seats booked. How many passengers are expected to turn up?",
              "working": [
                "Show-up probability = 1 - 0.04 = 0.96",
                "Expected passengers = 175 * 0.96 = 168"
              ],
              "answer": "168"
            },
            {
              "id": "8.2-q6",
              "number": 3,
              "question": "A gardener plants 120 seeds. The seed packet claims an 85% germination rate. How many seeds are expected to fail to germinate?",
              "working": [
                "Failure rate = 100% - 85% = 15%",
                "Expected failures = 120 * 0.15 = 18"
              ],
              "answer": "18"
            }
          ]
        },
        {
          "id": "8.2-6",
          "title": "Exercise: Level 3 (Exam-Style)",
          "type": "exercise_3",
          "level": "both",
          "badgeText": "Exercise: Level 3 (Exam-Style)",
          "questions": [
            {
              "id": "8.2-q7",
              "number": 1,
              "marks": 3,
              "question": "A biased 5-sided spinner has outcomes 1, 2, 3, 4, 5. The probabilities are:\nP(1) = 0.15, P(2) = 0.25, P(3) = x, P(4) = 0.30, P(5) = 0.10.\n(a) Find the value of x. [2 marks]\n(b) The spinner is spun 240 times. Work out the expected number of times it lands on 4. [1 mark]",
              "working": [
                "(a) Probabilities sum to 1: 0.15 + 0.25 + x + 0.30 + 0.10 = 1 => 0.80 + x = 1 => x = 0.20",
                "(b) Expected 4s = 240 * 0.30 = 72"
              ],
              "answer": "(a) x = 0.20; (b) 72",
              "markBreakdown": "M1 for sum = 1, A1 for x = 0.20; B1 for 72"
            },
            {
              "id": "8.2-q8",
              "number": 2,
              "marks": 3,
              "question": "A bag contains red, blue, and yellow counters in the ratio 3 : 5 : 2.\nA counter is chosen at random.\n(a) Find the probability that the counter is blue. [1 mark]\n(b) If there are 30 yellow counters in the bag, find the total number of counters. [2 marks]",
              "working": [
                "(a) Total parts = 3 + 5 + 2 = 10. P(blue) = 5/10 = 1/2",
                "(b) 2 parts = 30 counters => 1 part = 15. Total counters = 10 * 15 = 150"
              ],
              "answer": "(a) 1/2 (or 0.5); (b) 150",
              "markBreakdown": "B1 for 1/2; M1 for 30/2 * 10, A1 for 150"
            },
            {
              "id": "8.2-q9",
              "number": 3,
              "marks": 4,
              "question": "Two fair six-sided dice are rolled and their scores added together.\n(a) State the total number of outcomes in the sample space. [1 mark]\n(b) Find the probability of obtaining a total of 7. [1 mark]\n(c) Find the probability of obtaining a total that is a prime number. [2 marks]",
              "working": [
                "(a) 6 * 6 = 36 outcomes",
                "(b) Combinations for 7: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) = 6 pairs. P = 6/36 = 1/6",
                "(c) Primes <= 12: 2 (1), 3 (2), 5 (4), 7 (6), 11 (2). Total = 15 pairs. P = 15/36 = 5/12"
              ],
              "answer": "(a) 36; (b) 1/6; (c) 5/12",
              "markBreakdown": "B1 for 36; B1 for 1/6; M1 for identifying 15 outcomes, A1 for 5/12"
            }
          ]
        }
      ]
    },
    {
      "id": "8.3",
      "number": "8.3",
      "title": "Mutually exclusive & complementary events",
      "type": "lesson",
      "level": "both",
      "steps": [
        {
          "id": "8.3-1",
          "title": "Concept & Intuition: Mutually Exclusive & Addition Rule",
          "type": "concept",
          "level": "both",
          "badgeText": "Concept & Intuition",
          "summary": "Two events are mutually exclusive if they cannot happen at the same time. The addition rule applies directly: $P(A \\text{ or } B) = P(A) + P(B)$. The complement $A'$ means 'not $A$', and $P(A') = 1 - P(A)$.",
          "analogy": "A traffic light can be Red or Green, but cannot be both at the same time for the same lane.",
          "terms": [
            {
              "term": "Mutually Exclusive",
              "definition": "Events that cannot happen simultaneously: $P(A \\cap B) = 0$.",
              "example": "Rolling an odd number and an even number on one die."
            },
            {
              "term": "Complementary Event",
              "definition": "The event of an outcome NOT happening: $P(A') = 1 - P(A)$.",
              "example": "If $P(\\text{rain}) = 0.3$, $P(\\text{no rain}) = 0.7$."
            }
          ],
          "rules": [
            {
              "title": "Addition Rule for Mutually Exclusive Events",
              "latex": "P(A \\cup B) = P(A) + P(B)",
              "explanation": "Simply add probabilities when events do not overlap."
            },
            {
              "title": "Complement Rule",
              "latex": "P(A') = 1 - P(A)",
              "explanation": "The sum of all exhaustive mutually exclusive outcomes is always 1."
            }
          ]
        },
        {
          "id": "8.3-2",
          "title": "Worked Example: Complementary & OR Calculations",
          "type": "worked_example",
          "level": "both",
          "badgeText": "Worked Example",
          "workedProblem": {
            "statement": "A box contains coloured discs: $P(\\text{red}) = 0.35$, $P(\\text{blue}) = 0.20$, $P(\\text{green}) = 0.15$, and the rest are yellow.\n(a) Find $P(\\text{red or green})$.\n(b) Find $P(\\text{yellow})$.\n(c) Find $P(\\text{not blue})$.",
            "steps": [
              {
                "stepNumber": 1,
                "instruction": "Red and green are mutually exclusive, so add their probabilities.",
                "latex": "P(\\text{red or green}) = 0.35 + 0.15 = 0.50",
                "note": "Addition rule."
              },
              {
                "stepNumber": 2,
                "instruction": "All colours must sum to 1.",
                "latex": "P(\\text{yellow}) = 1 - (0.35 + 0.20 + 0.15) = 1 - 0.70 = 0.30",
                "note": "Complement of known colours."
              },
              {
                "stepNumber": 3,
                "instruction": "Subtract probability of blue from 1.",
                "latex": "P(\\text{not blue}) = 1 - 0.20 = 0.80",
                "note": "Rule: 1 - P(blue)."
              }
            ],
            "finalAnswer": "(a) 0.50; (b) 0.30; (c) 0.80"
          }
        },
        {
          "id": "8.3-3",
          "title": "Common Mistake & Pro Tip: The 'At Least One' Shortcut",
          "type": "common_mistakes",
          "level": "both",
          "badgeText": "Common Mistake & Pro Tip",
          "commonMistakes": [
            {
              "mistake": "Adding probabilities for non-mutually exclusive events (e.g. P(King) + P(Heart) = 4/52 + 13/52 = 17/52, counting King of Hearts twice).",
              "correction": "Only use simple addition when events have no overlap. If they overlap, subtract the intersection.",
              "examinerTip": "When asked for the probability of 'at least one', calculate 1 - P(none). It saves huge amounts of exam time.",
              "memoryTrick": "P(at least one) = 1 - P(none)."
            }
          ]
        },
        {
          "id": "8.3-4",
          "title": "Exercise: Level 1 (Basic)",
          "type": "exercise_1",
          "level": "both",
          "badgeText": "Exercise: Level 1 (Basic)",
          "questions": [
            {
              "id": "8.3-q1",
              "number": 1,
              "question": "The probability of winning a game is 0.28. What is the probability of not winning?",
              "working": [
                "P(not win) = 1 - 0.28 = 0.72"
              ],
              "answer": "0.72"
            },
            {
              "id": "8.3-q2",
              "number": 2,
              "question": "Events A and B are mutually exclusive. P(A) = 1/6 and P(B) = 1/2. Find P(A or B).",
              "working": [
                "P(A or B) = 1/6 + 1/2 = 1/6 + 3/6 = 4/6 = 2/3"
              ],
              "answer": "2/3"
            },
            {
              "id": "8.3-q3",
              "number": 3,
              "question": "A spinner has red, white, and black sections. P(red) = 0.45 and P(white) = 0.30. Find P(black).",
              "working": [
                "P(black) = 1 - (0.45 + 0.30) = 1 - 0.75 = 0.25"
              ],
              "answer": "0.25"
            }
          ]
        },
        {
          "id": "8.3-5",
          "title": "Exercise: Level 2 (Real-World Scenarios)",
          "type": "exercise_2",
          "level": "both",
          "badgeText": "Exercise: Level 2 (Real-World)",
          "questions": [
            {
              "id": "8.3-q4",
              "number": 1,
              "question": "In a soccer league, the probability that Team A wins is 0.55 and the probability they draw is 0.25. What is the probability that Team A loses?",
              "working": [
                "P(lose) = 1 - (0.55 + 0.25) = 1 - 0.80 = 0.20"
              ],
              "answer": "0.20"
            },
            {
              "id": "8.3-q5",
              "number": 2,
              "question": "A car showroom sells petrol, diesel, hybrid, and electric cars. P(petrol) = 0.38, P(diesel) = 0.14, P(hybrid) = 0.26. What is the probability a buyer chooses an electric car?",
              "working": [
                "P(electric) = 1 - (0.38 + 0.14 + 0.26) = 1 - 0.78 = 0.22"
              ],
              "answer": "0.22"
            },
            {
              "id": "8.3-q6",
              "number": 3,
              "question": "A biased coin lands on heads with probability 0.62. If it is flipped twice, what is the probability it lands on tails both times?",
              "working": [
                "P(tails) = 1 - 0.62 = 0.38",
                "P(TT) = 0.38 * 0.38 = 0.1444"
              ],
              "answer": "0.1444"
            }
          ]
        },
        {
          "id": "8.3-6",
          "title": "Exercise: Level 3 (Exam-Style)",
          "type": "exercise_3",
          "level": "both",
          "badgeText": "Exercise: Level 3 (Exam-Style)",
          "questions": [
            {
              "id": "8.3-q7",
              "number": 1,
              "marks": 3,
              "question": "A biased 4-sided die has faces 1, 2, 3, 4 with probabilities:\nP(1) = 2x, P(2) = x, P(3) = 0.20, P(4) = 0.35.\n(a) Find the value of x. [2 marks]\n(b) Find the probability of rolling a 1 or a 2. [1 mark]",
              "working": [
                "(a) 2x + x + 0.20 + 0.35 = 1 => 3x + 0.55 = 1 => 3x = 0.45 => x = 0.15",
                "(b) P(1 or 2) = 2(0.15) + 0.15 = 0.45"
              ],
              "answer": "(a) x = 0.15; (b) 0.45",
              "markBreakdown": "M1 for 3x + 0.55 = 1, A1 for x = 0.15; B1 for 0.45"
            },
            {
              "id": "8.3-q8",
              "number": 2,
              "marks": 3,
              "question": "A student guesses randomly on 3 multiple-choice questions, each with 4 options (one correct).\nFind the probability that the student gets:\n(a) None correct [2 marks]\n(b) At least one correct [1 mark]",
              "working": [
                "(a) P(wrong) = 3/4. P(3 wrong) = (3/4)^3 = 27/64",
                "(b) P(at least one correct) = 1 - 27/64 = 37/64"
              ],
              "answer": "(a) 27/64; (b) 37/64",
              "markBreakdown": "M1 for (3/4)^3, A1 for 27/64; B1 for 37/64"
            },
            {
              "id": "8.3-q9",
              "number": 3,
              "marks": 4,
              "question": "A bag contains 5 red, 3 blue, and 2 green balls. A ball is picked at random, its colour noted, and it is NOT replaced. A second ball is then drawn.\nFind the probability that:\n(a) Both balls are red [2 marks]\n(b) Neither ball is red [2 marks]",
              "working": [
                "Total = 10 balls",
                "(a) P(RR) = (5/10) * (4/9) = 20/90 = 2/9",
                "(b) Non-red balls = 5. P(not red both) = (5/10) * (4/9) = 20/90 = 2/9"
              ],
              "answer": "(a) 2/9; (b) 2/9",
              "markBreakdown": "M1 for (5/10)*(4/9), A1 for 2/9; M1 for (5/10)*(4/9), A1 for 2/9"
            }
          ]
        }
      ]
    },
    {
      "id": "8.test",
      "number": "Test 8",
      "title": "Chapter 8 Test: Probability",
      "type": "chapterTest",
      "level": "both",
      "steps": [
        {
          "id": "8.test-1",
          "title": "Chapter 8 Test: Part A (Basic Recall)",
          "type": "test_part_a",
          "level": "both",
          "badgeText": "Test Part A: Core Recall",
          "questions": [
            {
              "id": "8.t-1",
              "number": 1,
              "marks": 1,
              "question": "Write down the probability of rolling a multiple of 7 on a fair 6-sided die.",
              "working": [
                "Faces are 1 to 6. Multiples of 7 do not exist. P = 0."
              ],
              "answer": "0",
              "markBreakdown": "B1 for 0"
            },
            {
              "id": "8.t-2",
              "number": 2,
              "marks": 2,
              "question": "A bag contains 7 yellow and 13 green marbles. One is picked at random. Write down the probability that it is green as a decimal.",
              "working": [
                "Total = 20. P(green) = 13/20 = 0.65"
              ],
              "answer": "0.65",
              "markBreakdown": "M1 for 13/20, A1 for 0.65"
            },
            {
              "id": "8.t-3",
              "number": 3,
              "marks": 2,
              "question": "Given P(A) = 0.42, work out P(A').",
              "working": [
                "P(A') = 1 - 0.42 = 0.58"
              ],
              "answer": "0.58",
              "markBreakdown": "M1 for 1 - 0.42, A1 for 0.58"
            }
          ]
        },
        {
          "id": "8.test-2",
          "title": "Chapter 8 Test: Part B (Real-World Problems)",
          "type": "test_part_b",
          "level": "both",
          "badgeText": "Test Part B: Multi-Step Real-World Application",
          "questions": [
            {
              "id": "8.t-4",
              "number": 1,
              "marks": 3,
              "question": "A traffic survey recorded 500 vehicles. 165 were electric or hybrid.\n(a) Find the relative frequency of electric/hybrid vehicles.\n(b) In a town of 12000 vehicles, estimate how many are electric or hybrid.",
              "working": [
                "(a) 165 / 500 = 0.33",
                "(b) Expected = 12000 * 0.33 = 3960"
              ],
              "answer": "(a) 0.33; (b) 3960",
              "markBreakdown": "B1 for 0.33; M1 for 12000 * 0.33, A1 for 3960"
            },
            {
              "id": "8.t-5",
              "number": 2,
              "marks": 3,
              "question": "The probability that Tariq catches the 08:15 train is 0.70. If he misses it, he catches the 08:30 train with probability 0.85. What is the probability he catches the 08:30 train?",
              "working": [
                "P(misses 08:15) = 1 - 0.70 = 0.30",
                "P(catches 08:30) = 0.30 * 0.85 = 0.255"
              ],
              "answer": "0.255",
              "markBreakdown": "M1 for 1 - 0.70 = 0.30, M1 for 0.30 * 0.85, A1 for 0.255"
            },
            {
              "id": "8.t-6",
              "number": 3,
              "marks": 4,
              "question": "A spinner has sectors Red, Green, and Blue. P(Red) = 2x, P(Green) = 3x, and P(Blue) = 0.25.\nFind the probability of landing on Red or Blue.",
              "working": [
                "2x + 3x + 0.25 = 1 => 5x = 0.75 => x = 0.15",
                "P(Red) = 2(0.15) = 0.30",
                "P(Red or Blue) = 0.30 + 0.25 = 0.55"
              ],
              "answer": "0.55",
              "markBreakdown": "M1 for 5x = 0.75, A1 for x = 0.15; M1 for 0.30 + 0.25, A1 for 0.55"
            }
          ]
        },
        {
          "id": "8.test-3",
          "title": "Chapter 8 Test: Part C (Exam-Style Challenge)",
          "type": "test_part_c",
          "level": "both",
          "badgeText": "Test Part C: Exam Challenge",
          "questions": [
            {
              "id": "8.t-7",
              "number": 1,
              "marks": 4,
              "question": "A box contains x red balls and (x + 6) blue balls. A ball is drawn at random. The probability that the ball is blue is 5/8. Calculate the value of x.",
              "working": [
                "Total = x + (x + 6) = 2x + 6",
                "(x + 6) / (2x + 6) = 5/8",
                "8(x + 6) = 5(2x + 6) => 8x + 48 = 10x + 30 => 2x = 18 => x = 9"
              ],
              "answer": "x = 9",
              "markBreakdown": "M1 for total = 2x+6, M1 for equation setup, M1 for cross-multiplying, A1 for x = 9"
            },
            {
              "id": "8.t-8",
              "number": 2,
              "marks": 5,
              "question": "Two fair dice are thrown.\n(a) What is the probability that the difference between the two numbers is 2? [2 marks]\n(b) What is the probability that the product of the two numbers is greater than 20? [3 marks]",
              "working": [
                "Total pairs = 36",
                "(a) Differences of 2: (1,3),(2,4),(3,5),(4,6),(3,1),(4,2),(5,3),(6,4) = 8 pairs => 8/36 = 2/9",
                "(b) Products > 20: (4,6=24), (5,5=25), (5,6=30), (6,4=24), (6,5=30), (6,6=36) = 6 pairs => 6/36 = 1/6"
              ],
              "answer": "(a) 2/9; (b) 1/6",
              "markBreakdown": "M1 for 8 pairs, A1 for 2/9; M2 for 6 pairs, A1 for 1/6"
            },
            {
              "id": "8.t-9",
              "number": 3,
              "marks": 5,
              "question": "There are 10 socks in a drawer: 6 black and 4 brown. Two socks are pulled out at random without replacement. Find the probability that they are a matching pair.",
              "working": [
                "P(match) = P(BB) + P(BrBr)",
                "P(BB) = (6/10) * (5/9) = 30/90",
                "P(BrBr) = (4/10) * (3/9) = 12/90",
                "Total P = (30 + 12)/90 = 42/90 = 7/15"
              ],
              "answer": "7/15",
              "markBreakdown": "M1 for identifying BB + BrBr, M1 for 30/90, M1 for 12/90, A2 for 7/15"
            }
          ]
        }
      ]
    }
  ]
};

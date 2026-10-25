import { Step, Subtopic, ContentLevel } from '../types/content';

/**
 * Creates structured placeholder steps for upcoming units so the app never crashes
 * while maintaining the exact 6-step slide flow (or 3-step for Chapter-end Test).
 */
export function createPlaceholderSteps(
  subtopicNumber: string,
  subtopicTitle: string,
  level: ContentLevel,
  isChapterTest = false
): Step[] {
  if (isChapterTest) {
    return [
      {
        id: `${subtopicNumber}-part-a`,
        title: 'Test Part A: Core Knowledge & Recall',
        type: 'test_part_a',
        level,
        badgeText: 'Test Part A: Core Recall',
        summary: `Chapter test Part A for ${subtopicTitle}. Focuses on fundamental definitions, core skills, and direct recall.`,
        analogy: 'Test your understanding of the foundational ideas across this entire unit.',
        questions: [
          {
            id: `${subtopicNumber}-q1`,
            number: 1,
            question: `Recall fundamental principles of ${subtopicTitle}. [Content arriving in next phase]`,
            marks: 1,
            working: ['Step-by-step working will be published in the next development phase.'],
            answer: 'Pending Phase 2+ build',
          },
          {
            id: `${subtopicNumber}-q2`,
            number: 2,
            question: `State key definition or evaluate basic expression in ${subtopicTitle}.`,
            marks: 2,
            working: ['Standard Cambridge working model.'],
            answer: 'Pending Phase 2+ build',
          },
          {
            id: `${subtopicNumber}-q3`,
            number: 3,
            question: `Basic calculation and simplification in ${subtopicTitle}.`,
            marks: 2,
            working: ['Complete working provided upon phase completion.'],
            answer: 'Pending Phase 2+ build',
          },
        ],
      },
      {
        id: `${subtopicNumber}-part-b`,
        title: 'Test Part B: Multi-Step Real-World Application',
        type: 'test_part_b',
        level,
        badgeText: 'Test Part B: Applications',
        summary: `Chapter test Part B for ${subtopicTitle}. Applies multiple techniques to practical scenarios.`,
        questions: [
          {
            id: `${subtopicNumber}-q4`,
            number: 1,
            question: `Real-world context scenario 1 for ${subtopicTitle}.`,
            marks: 3,
            working: ['Application working.'],
            answer: 'Pending Phase 2+ build',
          },
          {
            id: `${subtopicNumber}-q5`,
            number: 2,
            question: `Real-world context scenario 2 for ${subtopicTitle}.`,
            marks: 3,
            working: ['Application working.'],
            answer: 'Pending Phase 2+ build',
          },
          {
            id: `${subtopicNumber}-q6`,
            number: 3,
            question: `Real-world context scenario 3 for ${subtopicTitle}.`,
            marks: 3,
            working: ['Application working.'],
            answer: 'Pending Phase 2+ build',
          },
        ],
      },
      {
        id: `${subtopicNumber}-part-c`,
        title: 'Test Part C: Exam-Style Challenge Problems',
        type: 'test_part_c',
        level,
        badgeText: 'Test Part C: Exam Challenge',
        summary: `Chapter test Part C for ${subtopicTitle}. High-tariff challenge and multi-step reasoning.`,
        questions: [
          {
            id: `${subtopicNumber}-q7`,
            number: 1,
            question: `Extended exam challenge problem 1 for ${subtopicTitle}.`,
            marks: 4,
            working: ['Detailed mark-scheme style breakdown.'],
            answer: 'Pending Phase 2+ build',
            markBreakdown: 'M1 for method, A1 for accuracy.',
          },
          {
            id: `${subtopicNumber}-q8`,
            number: 2,
            question: `Extended exam challenge problem 2 for ${subtopicTitle}.`,
            marks: 5,
            working: ['Detailed mark-scheme style breakdown.'],
            answer: 'Pending Phase 2+ build',
            markBreakdown: 'M2 for algebraic setup, A1 for correct solution.',
          },
          {
            id: `${subtopicNumber}-q9`,
            number: 3,
            question: `Extended exam challenge problem 3 for ${subtopicTitle}.`,
            marks: 6,
            working: ['Detailed mark-scheme style breakdown.'],
            answer: 'Pending Phase 2+ build',
            markBreakdown: 'M2 for method, A2 for calculation, B2 for proof.',
          },
        ],
      },
    ];
  }

  return [
    {
      id: `${subtopicNumber}-step-1`,
      title: `Concept & Intuition: ${subtopicTitle}`,
      type: 'concept',
      level,
      badgeText: 'Concept & Intuition',
      summary: `Comprehensive lesson on ${subtopicTitle} adhering to the Cambridge IGCSE Mathematics (0580) syllabus. Detailed explanations, definitions, and analogies will be loaded here.`,
      analogy: `Everyday analogy linking the concepts of ${subtopicTitle} to familiar real-life patterns and structures.`,
      terms: [
        {
          term: 'Key Term',
          definition: `Core definition in ${subtopicTitle}.`,
          example: 'Illustrative mathematical example.',
        },
      ],
      rules: [
        {
          title: 'Governing Formula or Property',
          explanation: `Fundamental mathematical rule for ${subtopicTitle}.`,
        },
      ],
    },
    {
      id: `${subtopicNumber}-step-2`,
      title: `Worked Example: Step-by-Step Solution`,
      type: 'worked_example',
      level,
      badgeText: 'Worked Example',
      workedProblem: {
        statement: `Model Cambridge exam question on ${subtopicTitle}.`,
        steps: [
          {
            stepNumber: 1,
            instruction: 'Identify the given variables and applicable mathematical properties.',
            note: 'Model exam method.',
          },
          {
            stepNumber: 2,
            instruction: 'Execute algebraic or numerical steps clearly.',
            note: 'Show clear working on the Teacher\'s Board.',
          },
          {
            stepNumber: 3,
            instruction: 'State final answer with units and specified degree of accuracy.',
            note: 'Always check if rounding is needed (e.g. 3 s.f.).',
          },
        ],
        finalAnswer: 'Detailed solution coming in Phase 2+',
      },
    },
    {
      id: `${subtopicNumber}-step-3`,
      title: `Common Mistake & Pro Tip`,
      type: 'common_mistakes',
      level,
      badgeText: 'Common Mistake & Pro Tip',
      commonMistakes: [
        {
          mistake: `Common pitfall that students encounter when studying ${subtopicTitle}.`,
          correction: `Correct method and strategy to secure full exam credit.`,
          examinerTip: `Examiner insight based on Cambridge IGCSE past paper reports.`,
          memoryTrick: `Quick mental shortcut or rule of thumb.`,
        },
      ],
    },
    {
      id: `${subtopicNumber}-step-4`,
      title: 'Exercise: Level 1 (Basic)',
      type: 'exercise_1',
      level,
      badgeText: 'Exercise: Level 1 (Basic)',
      questions: [
        {
          id: `${subtopicNumber}-q1`,
          number: 1,
          question: `Fundamental exercise question 1 on ${subtopicTitle}.`,
          working: ['Direct calculation or recall step.'],
          answer: 'Phase 2+ content',
        },
        {
          id: `${subtopicNumber}-q2`,
          number: 2,
          question: `Fundamental exercise question 2 on ${subtopicTitle}.`,
          working: ['Direct calculation step.'],
          answer: 'Phase 2+ content',
        },
        {
          id: `${subtopicNumber}-q3`,
          number: 3,
          question: `Fundamental exercise question 3 on ${subtopicTitle}.`,
          working: ['Direct calculation step.'],
          answer: 'Phase 2+ content',
        },
      ],
    },
    {
      id: `${subtopicNumber}-step-5`,
      title: 'Exercise: Level 2 (Real-World Scenarios)',
      type: 'exercise_2',
      level,
      badgeText: 'Exercise: Level 2 (Real-World)',
      questions: [
        {
          id: `${subtopicNumber}-q4`,
          number: 1,
          question: `Real-world word problem 1 involving ${subtopicTitle}.`,
          working: ['Setting up model and calculating.'],
          answer: 'Phase 2+ content',
        },
        {
          id: `${subtopicNumber}-q5`,
          number: 2,
          question: `Real-world word problem 2 involving ${subtopicTitle}.`,
          working: ['Setting up model and calculating.'],
          answer: 'Phase 2+ content',
        },
        {
          id: `${subtopicNumber}-q6`,
          number: 3,
          question: `Real-world word problem 3 involving ${subtopicTitle}.`,
          working: ['Setting up model and calculating.'],
          answer: 'Phase 2+ content',
        },
      ],
    },
    {
      id: `${subtopicNumber}-step-6`,
      title: 'Exercise: Level 3 (Exam-Style Challenge)',
      type: 'exercise_3',
      level,
      badgeText: 'Exercise: Level 3 (Exam-Style)',
      questions: [
        {
          id: `${subtopicNumber}-q7`,
          number: 1,
          question: `Exam-style challenge question 1 on ${subtopicTitle}.`,
          marks: 3,
          working: ['Cambridge exam method and mark breakdown.'],
          answer: 'Phase 2+ content',
          markBreakdown: 'M1 for method, A1 for accuracy, B1 for deduction.',
        },
        {
          id: `${subtopicNumber}-q8`,
          number: 2,
          question: `Exam-style challenge question 2 on ${subtopicTitle}.`,
          marks: 4,
          working: ['Cambridge exam method and mark breakdown.'],
          answer: 'Phase 2+ content',
          markBreakdown: 'M1 for algebraic setup, M1 for simplification, A2 for exact solution.',
        },
        {
          id: `${subtopicNumber}-q9`,
          number: 3,
          question: `Exam-style challenge question 3 on ${subtopicTitle}.`,
          marks: 5,
          working: ['Cambridge exam method and mark breakdown.'],
          answer: 'Phase 2+ content',
          markBreakdown: 'M2 for proof/method, A2 for calculation, B1 for final statement.',
        },
      ],
    },
  ];
}

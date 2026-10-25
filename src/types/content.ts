export type ContentLevel = 'core' | 'extended' | 'both';

export type StepType =
  | 'concept'
  | 'worked_example'
  | 'common_mistakes'
  | 'exercise_1'
  | 'exercise_2'
  | 'exercise_3'
  | 'test_part_a'
  | 'test_part_b'
  | 'test_part_c';

export interface KeyTerm {
  term: string;
  definition: string;
  example?: string;
}

export interface RuleFormula {
  title: string;
  latex?: string;
  explanation: string;
  tag?: string;
}

export interface WorkedStep {
  stepNumber: number;
  instruction: string;
  latex?: string;
  note?: string;
}

export interface CommonMistakeItem {
  mistake: string;
  correction: string;
  examinerTip: string;
  memoryTrick?: string;
}

export interface PracticeQuestion {
  id: string;
  number: number; // 1, 2, 3
  question: string;
  latex?: string;
  marks?: number;
  working: string[]; // Step-by-step working
  answer: string;
  markBreakdown?: string; // e.g., "M1 for prime factor tree, A1 for 2^3 × 3^2"
  hint?: string;
}

export type InteractiveToolType =
  | 'number_line'
  | 'fraction_bar'
  | 'balance_scale'
  | 'angle_protractor'
  | 'coordinate_grid'
  | 'circle_theorems'
  | 'pythagoras_trig'
  | 'histogram_cf'
  | 'venn_diagram'
  | 'tree_diagram';

export interface InteractiveToolConfig {
  type: InteractiveToolType;
  title?: string;
  initialState?: Record<string, any>;
}

export interface Step {
  id: string;
  title: string;
  type: StepType;
  level: ContentLevel;
  badgeText: string;
  summary?: string;
  analogy?: string;
  terms?: KeyTerm[];
  rules?: RuleFormula[];
  workedProblem?: {
    statement: string;
    latex?: string;
    steps: WorkedStep[];
    finalAnswer: string;
  };
  commonMistakes?: CommonMistakeItem[];
  questions?: PracticeQuestion[];
  interactiveTool?: InteractiveToolConfig;
}

export interface Subtopic {
  id: string; // e.g., "1.1", "1.2", "test-1"
  number: string; // "1.1", "1.2" or "Test 1"
  title: string;
  type: 'lesson' | 'chapterTest';
  level: ContentLevel;
  syllabusCodes?: string[];
  steps: Step[];
}

export interface Unit {
  id: number; // 1 to 24
  title: string;
  learningObjectives: string[]; // e.g. ["C1.1, E1.1: Natural numbers...", "C1.3: Squares..."]
  subtopics: Subtopic[];
}

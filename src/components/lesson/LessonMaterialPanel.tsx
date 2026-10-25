import React, { useState, useEffect } from 'react';
import { Step, PracticeQuestion } from '../../types/content';
import { MathRenderer } from '../MathRenderer';
import { InteractiveMathTool } from '../tools/InteractiveMathTool';
import {
  Lightbulb,
  AlertTriangle,
  CheckCircle2,
  Eye,
  EyeOff,
  ChevronDown,
  ChevronRight,
  BookMarked,
  Award,
  Sparkles,
  HelpCircle,
} from 'lucide-react';

interface LessonMaterialPanelProps {
  step: Step;
  unitNumber: number;
  subtopicTitle: string;
  textSize: 'compact' | 'normal' | 'large';
}

export const LessonMaterialPanel: React.FC<LessonMaterialPanelProps> = ({
  step,
  unitNumber,
  subtopicTitle,
  textSize,
}) => {
  // Revealed worked steps count for worked examples
  const totalWorkedSteps = step.workedProblem?.steps.length || 0;
  const [revealedStepsCount, setRevealedStepsCount] = useState<number>(1);

  // Exercise individual answers revealed
  const [revealedQuestions, setRevealedQuestions] = useState<Record<string, boolean>>({});
  const [revealAll, setRevealAll] = useState<boolean>(false);

  // Reset step states when step changes
  useEffect(() => {
    setRevealedStepsCount(1);
    setRevealedQuestions({});
    setRevealAll(false);
  }, [step.id]);

  const toggleQuestionReveal = (qId: string) => {
    setRevealedQuestions((prev) => ({
      ...prev,
      [qId]: !prev[qId],
    }));
  };

  const handleToggleRevealAll = () => {
    const nextState = !revealAll;
    setRevealAll(nextState);
    if (step.questions) {
      const updated: Record<string, boolean> = {};
      step.questions.forEach((q) => {
        updated[q.id] = nextState;
      });
      setRevealedQuestions(updated);
    }
  };

  // Text size classes
  const fontClasses = {
    compact: {
      body: 'text-xs leading-relaxed',
      title: 'text-sm font-bold',
      heading: 'text-xs font-bold uppercase tracking-wide',
      boxPadding: 'p-3',
      gap: 'space-y-2.5',
    },
    normal: {
      body: 'text-sm leading-relaxed',
      title: 'text-base font-bold',
      heading: 'text-xs font-bold uppercase tracking-wide',
      boxPadding: 'p-3.5',
      gap: 'space-y-3.5',
    },
    large: {
      body: 'text-base leading-relaxed',
      title: 'text-lg font-bold',
      heading: 'text-sm font-bold uppercase tracking-wide',
      boxPadding: 'p-4',
      gap: 'space-y-4',
    },
  }[textSize];

  // Badge styles based on step type
  const getBadgeStyle = () => {
    switch (step.type) {
      case 'concept':
        return 'bg-blue-100 text-blue-900 border-blue-200';
      case 'worked_example':
        return 'bg-emerald-100 text-emerald-900 border-emerald-200';
      case 'common_mistakes':
        return 'bg-amber-100 text-amber-950 border-amber-300';
      case 'exercise_1':
        return 'bg-indigo-100 text-indigo-900 border-indigo-200';
      case 'exercise_2':
        return 'bg-teal-100 text-teal-900 border-teal-200';
      case 'exercise_3':
        return 'bg-rose-100 text-rose-950 border-rose-300';
      default:
        return 'bg-purple-100 text-purple-900 border-purple-200';
    }
  };

  const isExerciseOrTest =
    step.type.startsWith('exercise') || step.type.startsWith('test');

  const totalExerciseMarks = step.questions?.reduce((acc, q) => acc + (q.marks || 0), 0) || 0;

  return (
    <div className="h-full flex flex-col bg-[#FAF8F3] overflow-hidden">
      {/* Header Panel */}
      <div className="h-11 px-4 border-b border-[#E3DED4] bg-white flex items-center justify-between shrink-0 shadow-2xs">
        <div className="flex items-center gap-2 min-w-0">
          <span
            className={`px-2 py-0.5 rounded-md text-[11px] font-bold border uppercase tracking-wider shrink-0 ${getBadgeStyle()}`}
          >
            {step.badgeText || step.title}
          </span>
          <span
            className={`px-1.5 py-0.5 rounded text-[10px] font-bold uppercase shrink-0 ${
              step.level === 'extended'
                ? 'bg-purple-100 text-purple-800 border border-purple-200'
                : step.level === 'core'
                ? 'bg-sky-100 text-sky-800 border border-sky-200'
                : 'bg-stone-100 text-stone-700 border border-stone-200'
            }`}
          >
            {step.level === 'both' ? 'Core & Ext' : step.level}
          </span>
          <h2 className="text-xs sm:text-sm font-bold text-[#0F1E36] truncate">
            {step.title}
          </h2>
        </div>

        {/* Global Controls for Exercises / Tests */}
        {isExerciseOrTest && step.questions && step.questions.length > 0 && (
          <div className="flex items-center gap-2 shrink-0">
            {totalExerciseMarks > 0 && (
              <span className="text-xs font-bold text-stone-700 bg-stone-100 px-2 py-0.5 rounded border border-stone-200 hidden sm:inline">
                Total: [{totalExerciseMarks} marks]
              </span>
            )}
            <button
              onClick={handleToggleRevealAll}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold transition border ${
                revealAll
                  ? 'bg-amber-100 text-amber-900 border-amber-300'
                  : 'bg-white hover:bg-stone-50 text-stone-800 border-stone-300 shadow-2xs'
              }`}
            >
              {revealAll ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
              <span>{revealAll ? 'Hide Answers' : 'Reveal All Answers'}</span>
            </button>
          </div>
        )}
      </div>

      {/* Scrollable Lesson Card */}
      <div className="flex-1 overflow-y-auto p-3 sm:p-4 bg-[#FAF8F3]">
        <div className={`bg-white rounded-2xl border border-[#E3DED4] ${fontClasses.boxPadding} shadow-xs ${fontClasses.gap}`}>
          
          {/* Summary / Core Explanation */}
          {step.summary && (
            <div className="text-stone-800 font-medium">
              <MathRenderer text={step.summary} className={fontClasses.body} />
            </div>
          )}

          {/* Real-World Analogy */}
          {step.analogy && (
            <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-3 flex gap-2.5 items-start">
              <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <span className="text-[11px] font-bold text-amber-900 uppercase tracking-wider block mb-0.5">
                  Real-World Analogy & Intuition
                </span>
                <MathRenderer text={step.analogy} className="text-xs text-amber-950 font-normal leading-relaxed" />
              </div>
            </div>
          )}

          {/* Key Mathematical Terms */}
          {step.terms && step.terms.length > 0 && (
            <div className="space-y-2 pt-1">
              <span className="text-[11px] font-bold text-[#0F1E36] uppercase tracking-wider block">
                Key Mathematical Definitions
              </span>
              <div className="grid grid-cols-1 gap-2">
                {step.terms.map((t, idx) => (
                  <div key={idx} className="bg-stone-50 border border-stone-200/90 rounded-xl p-2.5">
                    <div className="flex items-baseline gap-2">
                      <span className="font-bold text-xs text-[#0F1E36]">{t.term}:</span>
                      <MathRenderer text={t.definition} className="text-xs text-stone-700" />
                    </div>
                    {t.example && (
                      <div className="mt-1 text-[11px] text-stone-500 bg-white px-2 py-0.5 rounded border border-stone-200/60 inline-block">
                        <span className="font-semibold text-stone-600">e.g., </span>
                        <MathRenderer text={t.example} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Rules & Formulas */}
          {step.rules && step.rules.length > 0 && (
            <div className="space-y-2 pt-1">
              <span className="text-[11px] font-bold text-[#0F1E36] uppercase tracking-wider block">
                Essential Rules & Formulae
              </span>
              <div className="grid grid-cols-1 gap-2">
                {step.rules.map((r, idx) => (
                  <div key={idx} className="bg-blue-50/50 border border-blue-200/80 rounded-xl p-2.5">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xs text-blue-950">{r.title}</span>
                      {r.tag && (
                        <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-blue-200/70 text-blue-900">
                          {r.tag}
                        </span>
                      )}
                    </div>
                    {r.latex && <MathRenderer latex={r.latex} className="my-1.5" />}
                    <MathRenderer text={r.explanation} className="text-xs text-stone-700 mt-1 block" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Interactive Math Tool (SVG widgets) */}
          {step.interactiveTool && (
            <InteractiveMathTool config={step.interactiveTool} />
          )}

          {/* Worked Problem & Step-by-Step Reveal */}
          {step.workedProblem && (
            <div className="space-y-3 pt-1">
              <div className="bg-stone-50 border border-stone-200 rounded-xl p-3">
                <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider block mb-1">
                  Problem Statement
                </span>
                <MathRenderer text={step.workedProblem.statement} className="text-xs sm:text-sm font-semibold text-stone-900" />
                {step.workedProblem.latex && (
                  <MathRenderer latex={step.workedProblem.latex} className="my-2" />
                )}
              </div>

              {/* Revealable Solution Steps */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-stone-600 uppercase tracking-wider">
                    Model Exam Working ({revealedStepsCount}/{totalWorkedSteps} steps revealed)
                  </span>
                  <div className="flex gap-1.5">
                    {revealedStepsCount < totalWorkedSteps && (
                      <button
                        onClick={() => setRevealedStepsCount((p) => Math.min(totalWorkedSteps, p + 1))}
                        className="px-2 py-1 rounded-md bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold shadow-2xs transition"
                      >
                        Reveal Next Step ▶
                      </button>
                    )}
                    <button
                      onClick={() =>
                        setRevealedStepsCount((p) =>
                          p === totalWorkedSteps ? 1 : totalWorkedSteps
                        )
                      }
                      className="px-2 py-1 rounded-md bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-semibold border border-stone-300 transition"
                    >
                      {revealedStepsCount === totalWorkedSteps ? 'Hide Working' : 'Reveal All Steps'}
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  {step.workedProblem.steps.slice(0, revealedStepsCount).map((ws) => (
                    <div
                      key={ws.stepNumber}
                      className="bg-emerald-50/40 border-l-3 border-emerald-600 pl-3 pr-2 py-2 rounded-r-lg"
                    >
                      <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-950 mb-0.5">
                        <span className="w-4 h-4 rounded-full bg-emerald-600 text-white text-[10px] flex items-center justify-center">
                          {ws.stepNumber}
                        </span>
                        <span>{ws.instruction}</span>
                      </div>
                      {ws.latex && <MathRenderer latex={ws.latex} className="my-1 text-xs" />}
                      {ws.note && (
                        <span className="text-[11px] text-stone-500 italic block">
                          Tip: {ws.note}
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                {revealedStepsCount === totalWorkedSteps && (
                  <div className="p-2.5 bg-emerald-100 border border-emerald-300 rounded-xl flex items-center justify-between animate-in fade-in">
                    <span className="font-bold text-xs text-emerald-950">Final Answer:</span>
                    <span className="font-mono font-bold text-sm text-emerald-900 bg-white px-2 py-0.5 rounded border border-emerald-300 shadow-2xs">
                      <MathRenderer text={step.workedProblem.finalAnswer} />
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Common Mistakes & Pro Tips */}
          {step.commonMistakes && step.commonMistakes.length > 0 && (
            <div className="space-y-2.5 pt-1">
              <span className="text-[11px] font-bold text-amber-900 uppercase tracking-wider block">
                Examiner Traps & Pro Tips
              </span>
              <div className="space-y-2">
                {step.commonMistakes.map((cm, idx) => (
                  <div
                    key={idx}
                    className="border border-amber-200 bg-amber-50/40 rounded-xl p-3 space-y-2"
                  >
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[11px] font-bold text-rose-800 uppercase block">
                          Common Mistake
                        </span>
                        <MathRenderer text={cm.mistake} className="text-xs text-stone-800 font-medium" />
                      </div>
                    </div>

                    <div className="flex items-start gap-2 pl-6">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[11px] font-bold text-emerald-800 uppercase block">
                          Correct Method
                        </span>
                        <MathRenderer text={cm.correction} className="text-xs text-stone-800" />
                      </div>
                    </div>

                    <div className="bg-white/90 rounded-lg p-2 border border-amber-200/70 text-xs text-stone-700">
                      <span className="font-bold text-amber-900">Examiner Advice: </span>
                      <MathRenderer text={cm.examinerTip} />
                      {cm.memoryTrick && (
                        <div className="mt-1 text-[11px] font-semibold text-purple-700 bg-purple-50 p-1.5 rounded">
                          💡 Memory Trick: {cm.memoryTrick}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Dedicated 3-Question Exercise Display */}
          {isExerciseOrTest && step.questions && (
            <div className="space-y-3 pt-1">
              <div className="flex items-center justify-between text-[11px] text-stone-500 pb-1 border-b border-stone-200">
                <span>Solve the 3 questions on the Teacher's Board first!</span>
                <span className="font-semibold text-stone-700">All 3 questions visible</span>
              </div>

              <div className="space-y-3">
                {step.questions.map((q) => {
                  const isRevealed = revealedQuestions[q.id] || revealAll;

                  return (
                    <div
                      key={q.id}
                      className="bg-stone-50/80 border border-stone-200 rounded-xl p-3 shadow-2xs hover:border-stone-300 transition"
                    >
                      {/* Question Header & Statement */}
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-start gap-2 flex-1">
                          <span className="w-6 h-6 rounded-lg bg-[#0F1E36] text-white text-xs font-bold flex items-center justify-center shrink-0">
                            [{q.number}]
                          </span>
                          <div className="flex-1">
                            <MathRenderer text={q.question} className="text-xs sm:text-sm font-semibold text-stone-900 leading-snug" />
                            {q.latex && <MathRenderer latex={q.latex} className="my-1.5" />}
                          </div>
                        </div>

                        {q.marks && (
                          <span className="text-xs font-bold text-stone-600 bg-white px-2 py-0.5 rounded border border-stone-300 shrink-0">
                            [{q.marks} {q.marks === 1 ? 'mark' : 'marks'}]
                          </span>
                        )}
                      </div>

                      {/* Check Answer Button & Working Reveal */}
                      <div className="mt-2 pt-2 border-t border-stone-200/80 flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                          <button
                            onClick={() => toggleQuestionReveal(q.id)}
                            className="flex items-center gap-1 text-xs font-semibold text-blue-700 hover:text-blue-900 transition"
                          >
                            {isRevealed ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
                            <span>{isRevealed ? 'Hide Solution' : 'Check Answer & Working'}</span>
                          </button>

                          {q.hint && !isRevealed && (
                            <span className="text-[11px] text-stone-400 italic">
                              Hint: {q.hint}
                            </span>
                          )}
                        </div>

                        {/* Revealed Solution Card */}
                        {isRevealed && (
                          <div className="bg-white rounded-lg p-2.5 border border-emerald-200 space-y-2 animate-in fade-in">
                            <div className="flex items-center justify-between border-b border-emerald-100 pb-1.5">
                              <span className="text-xs font-bold text-emerald-900 flex items-center gap-1">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                                Correct Answer:
                              </span>
                              <span className="font-mono font-bold text-xs sm:text-sm text-emerald-950 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-300">
                                <MathRenderer text={q.answer} />
                              </span>
                            </div>

                            {/* Step-by-Step Working */}
                            {q.working && q.working.length > 0 && (
                              <div className="space-y-1">
                                <span className="text-[10px] uppercase font-bold text-stone-500 tracking-wider">
                                  Step-by-step Working:
                                </span>
                                <div className="space-y-1 pl-2 border-l-2 border-stone-300 text-xs text-stone-800">
                                  {q.working.map((w, wIdx) => (
                                    <div key={wIdx}>
                                      <MathRenderer text={w} />
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Mark Scheme Breakdown (M1, A1, B1) */}
                            {q.markBreakdown && (
                              <div className="text-[11px] bg-stone-100 p-1.5 rounded text-stone-700">
                                <span className="font-bold text-stone-900">Mark Scheme: </span>
                                <MathRenderer text={q.markBreakdown} />
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

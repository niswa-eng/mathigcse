import React from 'react';
import {
  WhiteboardTool,
  InputMode,
} from '../../types/whiteboard';
import { Step } from '../../types/content';
import {
  Pen,
  Highlighter,
  Eraser,
  Minus,
  Square,
  Circle,
  Ruler,
  Hand,
  Pencil,
  Undo2,
  Redo2,
  Trash2,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from 'lucide-react';

interface BottomToolDockProps {
  currentStepIndex: number;
  totalSteps: number;
  steps: Step[];
  onSelectStep: (index: number) => void;
  onPrevStep: () => void;
  onNextStep: () => void;

  // Whiteboard controls
  tool: WhiteboardTool;
  onSelectTool: (tool: WhiteboardTool) => void;
  color: string;
  onSelectColor: (color: string) => void;
  strokeWidth: number;
  onSelectStrokeWidth: (width: number) => void;
  mode: InputMode;
  onToggleMode: (mode: InputMode) => void;

  canUndo: boolean;
  canRedo: boolean;
  onUndo: () => void;
  onRedo: () => void;
  onClear: () => void;
}

const INK_COLORS = [
  { name: 'Navy', hex: '#0F1E36' },
  { name: 'Blue', hex: '#2563EB' },
  { name: 'Red', hex: '#DC2626' },
  { name: 'Green', hex: '#059669' },
  { name: 'Amber', hex: '#D97706' },
  { name: 'Purple', hex: '#7C3AED' },
];

const STROKE_SIZES = [
  { label: 'Fine', size: 2, iconSize: 4 },
  { label: 'Medium', size: 4, iconSize: 7 },
  { label: 'Bold', size: 7, iconSize: 11 },
];

export const BottomToolDock: React.FC<BottomToolDockProps> = ({
  currentStepIndex,
  totalSteps,
  steps,
  onSelectStep,
  onPrevStep,
  onNextStep,
  tool,
  onSelectTool,
  color,
  onSelectColor,
  strokeWidth,
  onSelectStrokeWidth,
  mode,
  onToggleMode,
  canUndo,
  canRedo,
  onUndo,
  onRedo,
  onClear,
}) => {
  const currentStep = steps[currentStepIndex];

  return (
    <div className="shrink-0 w-full bg-[#FAF8F3] border-t border-[#E3DED4] px-2 py-1 shadow-lg z-30 select-none">
      {/* Container adapts: single row on >= 1120px, two rows on < 1120px */}
      <div className="max-w-[1920px] mx-auto flex flex-col min-[1120px]:flex-row items-center justify-between gap-1 min-[1120px]:gap-3">
        
        {/* ROW 1: Whiteboard Tools */}
        <div className="w-full min-[1120px]:w-auto flex items-center justify-center min-[1120px]:justify-start gap-1 overflow-x-auto py-0.5 no-scrollbar">
          {/* Mode toggle (Touch / Draw) */}
          <div className="flex items-center bg-stone-200/80 p-0.5 rounded-lg border border-stone-300 shrink-0">
            <button
              onClick={() => onToggleMode('touch')}
              title="Touch Mode (Scroll & Interact with widgets)"
              className={`flex items-center gap-1 px-2 py-1 rounded text-xs font-semibold transition ${
                mode === 'touch'
                  ? 'bg-white text-stone-900 shadow-2xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Hand className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Touch</span>
            </button>
            <button
              onClick={() => onToggleMode('draw')}
              title="Draw Mode (Annotate on Board)"
              className={`flex items-center gap-1 px-2 py-1 rounded text-xs font-semibold transition ${
                mode === 'draw'
                  ? 'bg-[#0F1E36] text-white shadow-2xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Pencil className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Draw</span>
            </button>
          </div>

          <div className="h-4 w-px bg-stone-300 mx-0.5 shrink-0"></div>

          {/* Tools: Pen, Highlighter, Eraser */}
          <div className="flex items-center bg-white p-0.5 rounded-lg border border-stone-200 shadow-2xs shrink-0">
            <button
              onClick={() => {
                onToggleMode('draw');
                onSelectTool('pen');
              }}
              title="Ballpoint Pen"
              className={`p-1.5 rounded transition ${
                tool === 'pen' && mode === 'draw'
                  ? 'bg-[#0F1E36] text-white shadow-2xs'
                  : 'text-stone-700 hover:bg-stone-100'
              }`}
            >
              <Pen className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => {
                onToggleMode('draw');
                onSelectTool('highlighter');
              }}
              title="Highlighter"
              className={`p-1.5 rounded transition ${
                tool === 'highlighter' && mode === 'draw'
                  ? 'bg-amber-400 text-amber-950 font-bold shadow-2xs'
                  : 'text-stone-700 hover:bg-stone-100'
              }`}
            >
              <Highlighter className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => {
                onToggleMode('draw');
                onSelectTool('eraser');
              }}
              title="Eraser"
              className={`p-1.5 rounded transition ${
                tool === 'eraser' && mode === 'draw'
                  ? 'bg-rose-600 text-white shadow-2xs'
                  : 'text-stone-700 hover:bg-stone-100'
              }`}
            >
              <Eraser className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Geometry tools: Line, Dashed line, Rect, Circle, Ruler */}
          <div className="flex items-center bg-white p-0.5 rounded-lg border border-stone-200 shadow-2xs shrink-0">
            <button
              onClick={() => {
                onToggleMode('draw');
                onSelectTool('line');
              }}
              title="Straight Line"
              className={`p-1.5 rounded transition ${
                tool === 'line' && mode === 'draw'
                  ? 'bg-[#0F1E36] text-white shadow-2xs'
                  : 'text-stone-700 hover:bg-stone-100'
              }`}
            >
              <Minus className="w-3.5 h-3.5 rotate-45" />
            </button>
            <button
              onClick={() => {
                onToggleMode('draw');
                onSelectTool('dashed_line');
              }}
              title="Dashed Line (Construction)"
              className={`px-1.5 py-1 rounded text-[11px] font-mono font-bold transition ${
                tool === 'dashed_line' && mode === 'draw'
                  ? 'bg-[#0F1E36] text-white shadow-2xs'
                  : 'text-stone-700 hover:bg-stone-100'
              }`}
            >
              - -
            </button>
            <button
              onClick={() => {
                onToggleMode('draw');
                onSelectTool('rect');
              }}
              title="Rectangle"
              className={`p-1.5 rounded transition ${
                tool === 'rect' && mode === 'draw'
                  ? 'bg-[#0F1E36] text-white shadow-2xs'
                  : 'text-stone-700 hover:bg-stone-100'
              }`}
            >
              <Square className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => {
                onToggleMode('draw');
                onSelectTool('circle');
              }}
              title="Circle"
              className={`p-1.5 rounded transition ${
                tool === 'circle' && mode === 'draw'
                  ? 'bg-[#0F1E36] text-white shadow-2xs'
                  : 'text-stone-700 hover:bg-stone-100'
              }`}
            >
              <Circle className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => {
                onToggleMode('draw');
                onSelectTool('ruler');
              }}
              title="Ruler & Distance Meter"
              className={`p-1.5 rounded transition ${
                tool === 'ruler' && mode === 'draw'
                  ? 'bg-[#0F1E36] text-white shadow-2xs'
                  : 'text-stone-700 hover:bg-stone-100'
              }`}
            >
              <Ruler className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="h-4 w-px bg-stone-300 mx-0.5 shrink-0"></div>

          {/* 6 Ink Color Swatches */}
          <div className="flex items-center gap-1 bg-white p-1 rounded-lg border border-stone-200 shadow-2xs shrink-0">
            {INK_COLORS.map((c) => (
              <button
                key={c.hex}
                onClick={() => {
                  onSelectColor(c.hex);
                  if (tool === 'eraser') onSelectTool('pen');
                }}
                title={c.name}
                className={`w-5 h-5 rounded-full transition transform ${
                  color === c.hex && tool !== 'eraser'
                    ? 'scale-115 ring-2 ring-offset-1 ring-stone-700 shadow-xs'
                    : 'opacity-85 hover:opacity-100 hover:scale-105'
                }`}
                style={{ backgroundColor: c.hex }}
              />
            ))}
          </div>

          {/* 3 Stroke Thicknesses */}
          <div className="flex items-center gap-1 bg-white p-1 rounded-lg border border-stone-200 shadow-2xs shrink-0">
            {STROKE_SIZES.map((sz) => (
              <button
                key={sz.size}
                onClick={() => onSelectStrokeWidth(sz.size)}
                title={sz.label}
                className={`w-6 h-6 rounded flex items-center justify-center transition ${
                  strokeWidth === sz.size
                    ? 'bg-stone-100 ring-1 ring-stone-600'
                    : 'hover:bg-stone-50'
                }`}
              >
                <span
                  className="rounded-full bg-stone-800"
                  style={{ width: sz.iconSize, height: sz.iconSize }}
                />
              </button>
            ))}
          </div>

          <div className="h-4 w-px bg-stone-300 mx-0.5 shrink-0"></div>

          {/* Undo, Redo, Clear */}
          <div className="flex items-center bg-white p-0.5 rounded-lg border border-stone-200 shadow-2xs shrink-0">
            <button
              onClick={onUndo}
              disabled={!canUndo}
              title="Undo Stroke"
              className={`p-1.5 rounded transition ${
                canUndo ? 'text-stone-700 hover:bg-stone-100' : 'text-stone-300 cursor-not-allowed'
              }`}
            >
              <Undo2 className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onRedo}
              disabled={!canRedo}
              title="Redo Stroke"
              className={`p-1.5 rounded transition ${
                canRedo ? 'text-stone-700 hover:bg-stone-100' : 'text-stone-300 cursor-not-allowed'
              }`}
            >
              <Redo2 className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onClear}
              title="Clear Board Notes"
              className="p-1.5 rounded text-rose-600 hover:bg-rose-50 transition"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* ROW 2: Lesson Navigation */}
        <div className="w-full min-[1120px]:w-auto flex items-center justify-between min-[1120px]:justify-end gap-2 shrink-0 py-0.5">
          {/* Previous Step Button */}
          <button
            onClick={onPrevStep}
            disabled={currentStepIndex === 0}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold transition border ${
              currentStepIndex === 0
                ? 'opacity-35 cursor-not-allowed bg-stone-100 border-stone-200 text-stone-400'
                : 'bg-white hover:bg-stone-50 border-stone-300 text-stone-800 shadow-2xs active:scale-95'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Prev Step</span>
          </button>

          {/* Step Pills & Title */}
          <div className="flex items-center gap-1.5 bg-white px-2 py-1 rounded-xl border border-stone-200 shadow-2xs">
            <div className="flex items-center gap-1">
              {steps.map((s, idx) => (
                <button
                  key={s.id || idx}
                  onClick={() => onSelectStep(idx)}
                  title={`${idx + 1}. ${s.title}`}
                  className={`w-6 h-6 rounded-md text-[11px] font-bold flex items-center justify-center transition ${
                    idx === currentStepIndex
                      ? 'bg-[#0F1E36] text-white shadow-xs scale-105'
                      : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  {idx + 1}
                </button>
              ))}
            </div>

            <div className="hidden sm:flex flex-col text-left pl-1.5 border-l border-stone-200 max-w-[210px]">
              <span className="text-[10px] uppercase font-bold text-stone-400 leading-tight">
                Step {currentStepIndex + 1}/{totalSteps}
              </span>
              <span className="text-xs font-semibold text-stone-900 truncate leading-tight">
                {currentStep?.title || 'Slide'}
              </span>
            </div>
          </div>

          {/* Next Step Button */}
          <button
            onClick={onNextStep}
            disabled={currentStepIndex === totalSteps - 1}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold transition border ${
              currentStepIndex === totalSteps - 1
                ? 'opacity-35 cursor-not-allowed bg-stone-100 border-stone-200 text-stone-400'
                : 'bg-[#0F1E36] hover:bg-[#1A2E4E] border-[#0F1E36] text-white shadow-2xs active:scale-95'
            }`}
          >
            <span>Next Step</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

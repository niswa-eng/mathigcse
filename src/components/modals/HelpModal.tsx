import React from 'react';
import { X, Keyboard, Pencil, Hand, BookOpen, Layers, Lightbulb } from 'lucide-react';

interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HelpModal: React.FC<HelpModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl border border-stone-200 max-w-xl w-full max-h-[85vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="px-5 py-4 bg-[#0F1E36] text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-amber-400 text-stone-900 font-bold flex items-center justify-center text-xs">
              ?
            </div>
            <div>
              <h3 className="font-bold text-sm">Cambridge IGCSE® Mathematics Whiteboard</h3>
              <p className="text-[11px] text-stone-300">Teacher's Quick Guide & IFP Shortcuts</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-stone-700 text-stone-300 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 overflow-y-auto space-y-4 text-xs text-stone-700">
          {/* Section: Whiteboard & Scratchpad */}
          <div className="space-y-2">
            <h4 className="font-bold text-stone-900 text-sm flex items-center gap-1.5">
              <Pencil className="w-4 h-4 text-amber-600" />
              Teacher's Board & Scratchpad
            </h4>
            <p className="text-stone-600 leading-relaxed">
              The right-hand panel is your dedicated classroom whiteboard. Notes and diagrams you draw are <strong>automatically saved per slide</strong> in your browser's local storage.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-stone-600">
              <li><strong>Paper Grid Switcher:</strong> Switch between Math Grid, Ruled Lined paper, Dot Grid, Plain Board, or Cartesian Axes.</li>
              <li><strong>Ruler Tool:</strong> Drag across the board to measure distance and draw scaled straight segments with live millimeter/pixel readouts.</li>
              <li><strong>Highlighter:</strong> Semi-transparent marker ideal for highlighting key numbers in problem statements.</li>
            </ul>
          </div>

          {/* Section: Palm Rejection & Input Mode */}
          <div className="space-y-2 pt-2 border-t border-stone-200">
            <h4 className="font-bold text-stone-900 text-sm flex items-center gap-1.5">
              <Hand className="w-4 h-4 text-blue-600" />
              Touch vs Draw Mode (Palm Rejection)
            </h4>
            <p className="text-stone-600 leading-relaxed">
              When teaching on an Interactive Flat Panel (IFP) or tablet:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-stone-600">
              <li><strong>Touch Mode:</strong> Allows scrolling the lesson content and interacting with dynamic SVG tools without accidentally drawing streaks.</li>
              <li><strong>Draw Mode:</strong> Turns your stylus or finger into active chalk/pen on the Teacher's Board. Left-side lesson buttons remain clickable!</li>
            </ul>
          </div>

          {/* Section: 6-Step Slide Flow & Exercises */}
          <div className="space-y-2 pt-2 border-t border-stone-200">
            <h4 className="font-bold text-stone-900 text-sm flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-emerald-600" />
              6-Step Slide Pedagogy
            </h4>
            <p className="text-stone-600 leading-relaxed">
              Every lesson subtopic follows a research-backed sequence:
            </p>
            <div className="grid grid-cols-2 gap-2 text-[11px] font-medium">
              <div className="p-2 rounded bg-blue-50 border border-blue-200 text-blue-950">
                1. Concept & Intuition
              </div>
              <div className="p-2 rounded bg-emerald-50 border border-emerald-200 text-emerald-950">
                2. Worked Example
              </div>
              <div className="p-2 rounded bg-amber-50 border border-amber-200 text-amber-950">
                3. Common Mistake & Pro Tip
              </div>
              <div className="p-2 rounded bg-indigo-50 border border-indigo-200 text-indigo-950">
                4. Exercise: Level 1 (Basic)
              </div>
              <div className="p-2 rounded bg-teal-50 border border-teal-200 text-teal-950">
                5. Exercise: Level 2 (Real-World)
              </div>
              <div className="p-2 rounded bg-rose-50 border border-rose-200 text-rose-950">
                6. Exercise: Level 3 (Exam-Style)
              </div>
            </div>
          </div>

          {/* Section: Hotkeys */}
          <div className="space-y-2 pt-2 border-t border-stone-200">
            <h4 className="font-bold text-stone-900 text-sm flex items-center gap-1.5">
              <Keyboard className="w-4 h-4 text-purple-600" />
              Keyboard Shortcuts
            </h4>
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div className="flex justify-between bg-stone-100 p-1.5 rounded">
                <span className="text-stone-600">Next Step:</span>
                <kbd className="font-mono font-bold bg-white px-1.5 py-0.5 rounded border border-stone-300">Right Arrow / Space</kbd>
              </div>
              <div className="flex justify-between bg-stone-100 p-1.5 rounded">
                <span className="text-stone-600">Previous Step:</span>
                <kbd className="font-mono font-bold bg-white px-1.5 py-0.5 rounded border border-stone-300">Left Arrow</kbd>
              </div>
              <div className="flex justify-between bg-stone-100 p-1.5 rounded">
                <span className="text-stone-600">Undo Stroke:</span>
                <kbd className="font-mono font-bold bg-white px-1.5 py-0.5 rounded border border-stone-300">Ctrl + Z</kbd>
              </div>
              <div className="flex justify-between bg-stone-100 p-1.5 rounded">
                <span className="text-stone-600">Toggle Fullscreen:</span>
                <kbd className="font-mono font-bold bg-white px-1.5 py-0.5 rounded border border-stone-300">F11 / Button</kbd>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-3 bg-stone-100 border-t border-stone-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-[#0F1E36] hover:bg-[#1A2E4E] text-white text-xs font-semibold transition"
          >
            Got it, Back to Teaching
          </button>
        </div>
      </div>
    </div>
  );
};

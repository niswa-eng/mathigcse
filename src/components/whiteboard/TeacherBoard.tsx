import React, { useRef, useEffect, useState, useCallback } from 'react';
import {
  WhiteboardTool,
  PaperGridType,
  InputMode,
  DrawStroke,
  Point,
} from '../../types/whiteboard';
import {
  Grid,
  AlignJustify,
  MoreHorizontal,
  Square,
  Crosshair,
  Trash2,
  Undo2,
  Redo2,
  Download,
} from 'lucide-react';

interface TeacherBoardProps {
  slideKey: string;
  tool: WhiteboardTool;
  color: string;
  strokeWidth: number;
  mode: InputMode;
  onUndoAvailableChange?: (canUndo: boolean, canRedo: boolean) => void;
  // External triggers from bottom dock
  undoTrigger?: number;
  redoTrigger?: number;
  clearTrigger?: number;
}

export const TeacherBoard: React.FC<TeacherBoardProps> = ({
  slideKey,
  tool,
  color,
  strokeWidth,
  mode,
  onUndoAvailableChange,
  undoTrigger,
  redoTrigger,
  clearTrigger,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [paperGrid, setPaperGrid] = useState<PaperGridType>('math_grid');
  const [strokes, setStrokes] = useState<DrawStroke[]>([]);
  const [redoList, setRedoList] = useState<DrawStroke[]>([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentStroke, setCurrentStroke] = useState<DrawStroke | null>(null);
  const [showClearConfirm, setShowClearConfirm] = useState(false);

  // Load strokes for current slide
  useEffect(() => {
    try {
      const saved = localStorage.getItem(`board_${slideKey}`);
      if (saved) {
        const parsed = JSON.parse(saved);
        setStrokes(parsed);
      } else {
        setStrokes([]);
      }
      setRedoList([]);
    } catch {
      setStrokes([]);
      setRedoList([]);
    }
  }, [slideKey]);

  // Save strokes to localStorage
  const saveStrokes = useCallback((newStrokes: DrawStroke[]) => {
    try {
      localStorage.setItem(`board_${slideKey}`, JSON.stringify(newStrokes));
    } catch (e) {
      console.warn('LocalStorage save failed', e);
    }
  }, [slideKey]);

  // Sync undo/redo availability to parent
  useEffect(() => {
    onUndoAvailableChange?.(strokes.length > 0, redoList.length > 0);
  }, [strokes, redoList, onUndoAvailableChange]);

  // External undo trigger
  useEffect(() => {
    if (undoTrigger && undoTrigger > 0 && strokes.length > 0) {
      const last = strokes[strokes.length - 1];
      const updated = strokes.slice(0, -1);
      setStrokes(updated);
      setRedoList((prev) => [...prev, last]);
      saveStrokes(updated);
    }
  }, [undoTrigger]);

  // External redo trigger
  useEffect(() => {
    if (redoTrigger && redoTrigger > 0 && redoList.length > 0) {
      const next = redoList[redoList.length - 1];
      const updatedRedo = redoList.slice(0, -1);
      const updatedStrokes = [...strokes, next];
      setStrokes(updatedStrokes);
      setRedoList(updatedRedo);
      saveStrokes(updatedStrokes);
    }
  }, [redoTrigger]);

  // External clear trigger
  useEffect(() => {
    if (clearTrigger && clearTrigger > 0) {
      setShowClearConfirm(true);
    }
  }, [clearTrigger]);

  // Render Background Grid
  const renderBackground = useCallback((ctx: CanvasRenderingContext2D, width: number, height: number) => {
    // Fill board base warm classroom tone
    ctx.fillStyle = '#FAF8F3';
    ctx.fillRect(0, 0, width, height);

    if (paperGrid === 'math_grid') {
      const cellSize = 28;
      ctx.beginPath();
      ctx.strokeStyle = '#E2DDD4';
      ctx.lineWidth = 1;

      for (let x = 0; x <= width; x += cellSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = 0; y <= height; y += cellSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();

      // Major grid line every 5 cells
      ctx.beginPath();
      ctx.strokeStyle = '#D1C9BE';
      ctx.lineWidth = 1.2;
      for (let x = 0; x <= width; x += cellSize * 5) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = 0; y <= height; y += cellSize * 5) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();
    } else if (paperGrid === 'lined') {
      const lineSpacing = 32;
      ctx.beginPath();
      ctx.strokeStyle = '#E2DDD4';
      ctx.lineWidth = 1;
      for (let y = lineSpacing; y <= height; y += lineSpacing) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();

      // Left margin line in soft red
      ctx.beginPath();
      ctx.strokeStyle = '#FCA5A5';
      ctx.lineWidth = 1.5;
      ctx.moveTo(60, 0);
      ctx.lineTo(60, height);
      ctx.stroke();
    } else if (paperGrid === 'dot_grid') {
      const dotSpacing = 26;
      ctx.fillStyle = '#C8BFB2';
      for (let x = dotSpacing / 2; x <= width; x += dotSpacing) {
        for (let y = dotSpacing / 2; y <= height; y += dotSpacing) {
          ctx.beginPath();
          ctx.arc(x, y, 1.2, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    } else if (paperGrid === 'axes') {
      const cellSize = 30;
      const cx = Math.floor(width / (2 * cellSize)) * cellSize;
      const cy = Math.floor(height / (2 * cellSize)) * cellSize;

      // Faint grid
      ctx.beginPath();
      ctx.strokeStyle = '#ECE8E1';
      ctx.lineWidth = 1;
      for (let x = 0; x <= width; x += cellSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = 0; y <= height; y += cellSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();

      // Bold Central Axes
      ctx.beginPath();
      ctx.strokeStyle = '#0F1E36';
      ctx.lineWidth = 2;
      // X axis
      ctx.moveTo(0, cy);
      ctx.lineTo(width, cy);
      // Y axis
      ctx.moveTo(cx, 0);
      ctx.lineTo(cx, height);
      ctx.stroke();

      // Arrowheads & labels
      ctx.fillStyle = '#0F1E36';
      ctx.font = 'bold 12px sans-serif';
      ctx.fillText('x', width - 18, cy - 8);
      ctx.fillText('y', cx + 8, 18);
      ctx.fillText('0', cx - 14, cy + 16);
    }
    // 'plain' has no extra lines
  }, [paperGrid]);

  // Render a single stroke
  const drawStrokeToContext = (ctx: CanvasRenderingContext2D, s: DrawStroke) => {
    ctx.save();
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    if (s.tool === 'highlighter') {
      ctx.globalAlpha = 0.35;
      ctx.strokeStyle = s.color;
      ctx.lineWidth = s.size * 3.5;
    } else if (s.tool === 'eraser') {
      // In this layer representation, erase with background color or composite
      ctx.strokeStyle = '#FAF8F3';
      ctx.lineWidth = s.size * 4;
    } else {
      ctx.globalAlpha = 1.0;
      ctx.strokeStyle = s.color;
      ctx.lineWidth = s.size;
    }

    if (s.tool === 'dashed_line') {
      ctx.setLineDash([8, 6]);
    } else {
      ctx.setLineDash([]);
    }

    if ((s.tool === 'line' || s.tool === 'dashed_line') && s.startPoint && s.endPoint) {
      ctx.beginPath();
      ctx.moveTo(s.startPoint.x, s.startPoint.y);
      ctx.lineTo(s.endPoint.x, s.endPoint.y);
      ctx.stroke();
    } else if (s.tool === 'rect' && s.startPoint && s.endPoint) {
      const rx = Math.min(s.startPoint.x, s.endPoint.x);
      const ry = Math.min(s.startPoint.y, s.endPoint.y);
      const rw = Math.abs(s.endPoint.x - s.startPoint.x);
      const rh = Math.abs(s.endPoint.y - s.startPoint.y);
      ctx.beginPath();
      ctx.strokeRect(rx, ry, rw, rh);
    } else if (s.tool === 'circle' && s.startPoint && s.endPoint) {
      const dx = s.endPoint.x - s.startPoint.x;
      const dy = s.endPoint.y - s.startPoint.y;
      const radius = Math.sqrt(dx * dx + dy * dy);
      ctx.beginPath();
      ctx.arc(s.startPoint.x, s.startPoint.y, radius, 0, Math.PI * 2);
      ctx.stroke();
    } else if (s.tool === 'ruler' && s.startPoint && s.endPoint) {
      // Draw straight line with measurement tick marks and length text
      ctx.beginPath();
      ctx.moveTo(s.startPoint.x, s.startPoint.y);
      ctx.lineTo(s.endPoint.x, s.endPoint.y);
      ctx.stroke();

      const dx = s.endPoint.x - s.startPoint.x;
      const dy = s.endPoint.y - s.startPoint.y;
      const lengthPx = Math.sqrt(dx * dx + dy * dy);
      const midX = (s.startPoint.x + s.endPoint.x) / 2;
      const midY = (s.startPoint.y + s.endPoint.y) / 2;

      ctx.fillStyle = '#0F1E36';
      ctx.font = 'bold 11px sans-serif';
      const label = `${Math.round(lengthPx / 2.8)} mm (${Math.round(lengthPx)} px)`;
      ctx.fillText(label, midX + 6, midY - 6);
    } else if (s.points && s.points.length > 0) {
      ctx.beginPath();
      if (s.points.length === 1) {
        ctx.arc(s.points[0].x, s.points[0].y, s.size / 2, 0, Math.PI * 2);
        ctx.fillStyle = s.color;
        ctx.fill();
      } else {
        ctx.moveTo(s.points[0].x, s.points[0].y);
        for (let i = 1; i < s.points.length; i++) {
          ctx.lineTo(s.points[i].x, s.points[i].y);
        }
        ctx.stroke();
      }
    }
    ctx.restore();
  };

  // Full Redraw of Canvas
  const redraw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    renderBackground(ctx, canvas.width, canvas.height);

    for (const stroke of strokes) {
      drawStrokeToContext(ctx, stroke);
    }

    if (currentStroke) {
      drawStrokeToContext(ctx, currentStroke);
    }
  }, [strokes, currentStroke, renderBackground]);

  // Handle Resize and Retina DPI
  useEffect(() => {
    const handleResize = () => {
      const container = containerRef.current;
      const canvas = canvasRef.current;
      if (!container || !canvas) return;

      const rect = container.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.scale(dpr, dpr);
      }
      redraw();
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [redraw]);

  useEffect(() => {
    redraw();
  }, [redraw]);

  // Coordinate helper
  const getCanvasPoint = (e: React.PointerEvent<HTMLCanvasElement>): Point => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  // Pointer Handlers with Palm Rejection
  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    // Palm Rejection: If in touch mode, ignore drawing. If pointerType is touch and user is in draw mode, still allow unless dedicated pen is detected.
    if (mode === 'touch') return;

    const pt = getCanvasPoint(e);
    setIsDrawing(true);

    const isShape = ['line', 'dashed_line', 'rect', 'circle', 'ruler'].includes(tool);

    const newStroke: DrawStroke = {
      id: Math.random().toString(36).substring(2, 9),
      tool,
      color: tool === 'eraser' ? '#FAF8F3' : color,
      size: strokeWidth,
      points: [pt],
      startPoint: pt,
      endPoint: pt,
    };

    setCurrentStroke(newStroke);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawing || !currentStroke) return;
    const pt = getCanvasPoint(e);

    const isShape = ['line', 'dashed_line', 'rect', 'circle', 'ruler'].includes(tool);

    if (isShape) {
      setCurrentStroke({
        ...currentStroke,
        endPoint: pt,
      });
    } else {
      setCurrentStroke({
        ...currentStroke,
        points: [...currentStroke.points, pt],
      });
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawing || !currentStroke) return;
    setIsDrawing(false);

    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // Ignore if pointer capture already lost
    }

    const updated = [...strokes, currentStroke];
    setStrokes(updated);
    setRedoList([]);
    saveStrokes(updated);
    setCurrentStroke(null);
  };

  const handleConfirmClear = () => {
    setStrokes([]);
    setRedoList([]);
    saveStrokes([]);
    setShowClearConfirm(false);
  };

  const handleExportPNG = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = `IGCSE-Math-Board-${slideKey}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  return (
    <div className="h-full flex flex-col bg-[#FAF8F3] border-l border-[#E3DED4] overflow-hidden select-none">
      {/* Teacher Board Header */}
      <div className="h-11 px-3 border-b border-[#E3DED4] bg-[#F4EFE6] flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <span className="font-bold text-xs uppercase tracking-wider text-[#0F1E36] flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
            Teacher's Board
          </span>
          <span className="text-[11px] text-[#5B6B82] hidden sm:inline">
            (Scratchpad & Working)
          </span>
        </div>

        {/* Paper Grid Switcher & Board Utilities */}
        <div className="flex items-center gap-1">
          <div className="flex items-center bg-white/80 p-0.5 rounded-lg border border-[#DCD5C9] shadow-2xs">
            <button
              onClick={() => setPaperGrid('math_grid')}
              title="Square Math Grid"
              className={`p-1.5 rounded transition ${
                paperGrid === 'math_grid'
                  ? 'bg-[#0F1E36] text-white shadow-2xs'
                  : 'text-[#4A5568] hover:bg-[#F0EAE1]'
              }`}
            >
              <Grid className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setPaperGrid('lined')}
              title="Lined / Ruled Paper"
              className={`p-1.5 rounded transition ${
                paperGrid === 'lined'
                  ? 'bg-[#0F1E36] text-white shadow-2xs'
                  : 'text-[#4A5568] hover:bg-[#F0EAE1]'
              }`}
            >
              <AlignJustify className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setPaperGrid('dot_grid')}
              title="Dot Grid"
              className={`p-1.5 rounded transition ${
                paperGrid === 'dot_grid'
                  ? 'bg-[#0F1E36] text-white shadow-2xs'
                  : 'text-[#4A5568] hover:bg-[#F0EAE1]'
              }`}
            >
              <MoreHorizontal className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setPaperGrid('plain')}
              title="Plain Whiteboard"
              className={`p-1.5 rounded transition ${
                paperGrid === 'plain'
                  ? 'bg-[#0F1E36] text-white shadow-2xs'
                  : 'text-[#4A5568] hover:bg-[#F0EAE1]'
              }`}
            >
              <Square className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setPaperGrid('axes')}
              title="Coordinate Axes"
              className={`p-1.5 rounded transition ${
                paperGrid === 'axes'
                  ? 'bg-[#0F1E36] text-white shadow-2xs'
                  : 'text-[#4A5568] hover:bg-[#F0EAE1]'
              }`}
            >
              <Crosshair className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="h-4 w-px bg-[#D6CEBF] mx-1"></div>

          {/* Export button */}
          <button
            onClick={handleExportPNG}
            title="Export Board as PNG"
            className="p-1.5 rounded-lg bg-white/80 hover:bg-white text-[#4A5568] border border-[#DCD5C9] transition text-xs"
          >
            <Download className="w-3.5 h-3.5" />
          </button>

          {/* Quick Clear Notes button */}
          <button
            onClick={() => setShowClearConfirm(true)}
            title="Clear Board Notes"
            className="flex items-center gap-1 px-2 py-1 rounded-lg bg-white/80 hover:bg-rose-50 text-rose-700 hover:text-rose-800 border border-[#DCD5C9] transition text-xs font-medium"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Clear</span>
          </button>
        </div>
      </div>

      {/* Confirmation Modal for Clearing Notes */}
      {showClearConfirm && (
        <div className="absolute inset-0 z-50 bg-black/40 backdrop-blur-2xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl border border-stone-200 max-w-sm w-full p-5 text-center animate-in fade-in zoom-in-95 duration-150">
            <div className="w-11 h-11 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-3 text-rose-600">
              <Trash2 className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-stone-900 text-base mb-1">Clear Teacher's Board?</h3>
            <p className="text-xs text-stone-600 mb-5">
              This will erase all handwritten annotations for this slide. This cannot be undone.
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => setShowClearConfirm(false)}
                className="flex-1 py-2 px-3 rounded-xl border border-stone-300 text-stone-700 text-xs font-semibold hover:bg-stone-100 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmClear}
                className="flex-1 py-2 px-3 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold transition shadow-xs"
              >
                Yes, Clear Board
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Canvas Area */}
      <div
        ref={containerRef}
        className={`relative flex-1 w-full h-full cursor-${mode === 'touch' ? 'grab' : 'crosshair'}`}
        style={{ touchAction: mode === 'touch' ? 'auto' : 'none' }}
      >
        <canvas
          ref={canvasRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          className="absolute inset-0 block w-full h-full"
        />

        {strokes.length === 0 && !isDrawing && (
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            <div className="bg-white/60 backdrop-blur-xs px-3 py-1.5 rounded-full border border-stone-200 text-stone-400 text-xs font-medium tracking-wide">
              Teacher's Scratchpad & Board Area
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

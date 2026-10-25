import React, { useState } from 'react';
import { Unit, Subtopic, ContentLevel } from '../../types/content';
import {
  ZoomIn,
  ZoomOut,
  Maximize2,
  Minimize2,
  HelpCircle,
  RotateCcw,
  Zap,
  BookOpen,
  Filter,
  CheckCircle2,
  Sliders,
  Type,
} from 'lucide-react';

interface TopNavBarProps {
  units: Unit[];
  selectedUnitId: number;
  onSelectUnit: (unitId: number) => void;
  filteredSubtopics: Subtopic[];
  selectedSubtopicId: string;
  onSelectSubtopic: (subtopicId: string) => void;

  // Filter
  contentFilter: 'all' | 'core' | 'extended';
  onChangeContentFilter: (filter: 'all' | 'core' | 'extended') => void;

  // Text size
  textSize: 'compact' | 'normal' | 'large';
  onCycleTextSize: (direction: 'up' | 'down') => void;

  // Zoom
  zoomLevel: number;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onFitScreen: () => void;

  // Animation speed
  animSpeed: 'normal' | 'fast' | 'none';
  onToggleAnimSpeed: () => void;

  // Fullscreen
  isFullscreen: boolean;
  onToggleFullscreen: () => void;

  // Help modal
  onOpenHelp: () => void;
}

export const TopNavBar: React.FC<TopNavBarProps> = ({
  units,
  selectedUnitId,
  onSelectUnit,
  filteredSubtopics,
  selectedSubtopicId,
  onSelectSubtopic,
  contentFilter,
  onChangeContentFilter,
  textSize,
  onCycleTextSize,
  zoomLevel,
  onZoomIn,
  onZoomOut,
  onFitScreen,
  animSpeed,
  onToggleAnimSpeed,
  isFullscreen,
  onToggleFullscreen,
  onOpenHelp,
}) => {
  const currentUnit = units.find((u) => u.id === selectedUnitId);

  return (
    <header className="shrink-0 h-13 bg-[#0F1E36] text-white px-3 flex items-center justify-between border-b border-stone-800 shadow-md select-none z-40 gap-2">
      {/* Brand & Unit/Subtopic Selectors */}
      <div className="flex items-center gap-2.5 min-w-0 flex-1 max-w-[55%] lg:max-w-[60%]">
        {/* App Title badge */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="w-8 h-8 rounded-lg bg-linear-to-br from-amber-400 to-amber-600 flex items-center justify-center text-stone-950 font-black text-sm shadow-xs">
            0580
          </div>
          <div className="hidden xl:flex flex-col text-left">
            <span className="font-bold text-xs tracking-tight text-white leading-tight">
              Cambridge IGCSE®
            </span>
            <span className="text-[10px] text-stone-300 tracking-wide font-medium">
              Mathematics Whiteboard
            </span>
          </div>
        </div>

        <div className="h-5 w-px bg-stone-700 hidden sm:block shrink-0"></div>

        {/* Unit Selector Dropdown */}
        <div className="min-w-0 flex-1 max-w-[280px]">
          <select
            value={selectedUnitId}
            onChange={(e) => onSelectUnit(Number(e.target.value))}
            className="w-full bg-stone-800/90 hover:bg-stone-800 text-stone-100 text-xs font-semibold py-1.5 px-2.5 rounded-lg border border-stone-700 focus:outline-none focus:ring-1 focus:ring-amber-400 truncate cursor-pointer transition"
            title={currentUnit?.title}
          >
            {units.map((u) => (
              <option key={u.id} value={u.id}>
                Unit {u.id}: {u.title}
              </option>
            ))}
          </select>
        </div>

        {/* Subtopic Selector Dropdown */}
        <div className="min-w-0 flex-1 max-w-[280px]">
          <select
            value={selectedSubtopicId}
            onChange={(e) => onSelectSubtopic(e.target.value)}
            className="w-full bg-stone-800/90 hover:bg-stone-800 text-stone-100 text-xs font-semibold py-1.5 px-2.5 rounded-lg border border-stone-700 focus:outline-none focus:ring-1 focus:ring-amber-400 truncate cursor-pointer transition"
          >
            {filteredSubtopics.map((sub) => (
              <option key={sub.id} value={sub.id}>
                {sub.number} {sub.title} {sub.level === 'extended' ? '(Extended)' : sub.level === 'core' ? '(Core)' : ''}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Middle: Content Filter (All / Core only / Extended) */}
      <div className="hidden md:flex items-center bg-stone-800/90 p-0.5 rounded-lg border border-stone-700 shrink-0">
        <button
          onClick={() => onChangeContentFilter('all')}
          className={`px-2 py-1 rounded text-xs font-semibold transition ${
            contentFilter === 'all'
              ? 'bg-amber-500 text-stone-950 shadow-2xs'
              : 'text-stone-300 hover:text-white'
          }`}
          title="Show all Core and Extended material"
        >
          All
        </button>
        <button
          onClick={() => onChangeContentFilter('core')}
          className={`px-2 py-1 rounded text-xs font-semibold transition ${
            contentFilter === 'core'
              ? 'bg-amber-500 text-stone-950 shadow-2xs'
              : 'text-stone-300 hover:text-white'
          }`}
          title="Filter to Core syllabus only (grades C-G)"
        >
          Core only
        </button>
        <button
          onClick={() => onChangeContentFilter('extended')}
          className={`px-2 py-1 rounded text-xs font-semibold transition ${
            contentFilter === 'extended'
              ? 'bg-amber-500 text-stone-950 shadow-2xs'
              : 'text-stone-300 hover:text-white'
          }`}
          title="Filter to Extended syllabus (grades A*-E)"
        >
          Extended
        </button>
      </div>

      {/* Right: Quick Utilities */}
      <div className="flex items-center gap-1 shrink-0">
        {/* Text Size adjuster */}
        <div className="flex items-center bg-stone-800/90 p-0.5 rounded-lg border border-stone-700 text-xs">
          <button
            onClick={() => onCycleTextSize('down')}
            title="Smaller Text (A-)"
            disabled={textSize === 'compact'}
            className={`px-1.5 py-1 rounded font-bold transition ${
              textSize === 'compact' ? 'opacity-30 cursor-not-allowed' : 'hover:bg-stone-700'
            }`}
          >
            A-
          </button>
          <span className="px-1 text-[10px] text-amber-300 font-bold uppercase">
            {textSize === 'compact' ? 'S' : textSize === 'normal' ? 'M' : 'L'}
          </span>
          <button
            onClick={() => onCycleTextSize('up')}
            title="Larger Text (A+)"
            disabled={textSize === 'large'}
            className={`px-1.5 py-1 rounded font-bold transition ${
              textSize === 'large' ? 'opacity-30 cursor-not-allowed' : 'hover:bg-stone-700'
            }`}
          >
            A+
          </button>
        </div>

        {/* Zoom In / Out & Fit Screen */}
        <div className="flex items-center bg-stone-800/90 p-0.5 rounded-lg border border-stone-700 text-xs">
          <button
            onClick={onZoomOut}
            title="Zoom Out"
            className="p-1 hover:bg-stone-700 rounded transition"
          >
            <ZoomOut className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={onFitScreen}
            title="Fit Screen (Reset to 100%)"
            className="px-1.5 py-0.5 hover:bg-stone-700 rounded transition text-[11px] font-semibold text-stone-200"
          >
            {Math.round(zoomLevel * 100)}%
          </button>
          <button
            onClick={onZoomIn}
            title="Zoom In"
            className="p-1 hover:bg-stone-700 rounded transition"
          >
            <ZoomIn className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={onFitScreen}
            title="Fit to Screen (100%)"
            className="p-1 hover:bg-stone-700 rounded transition text-amber-400"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Animation Speed Toggle */}
        <button
          onClick={onToggleAnimSpeed}
          title={`Animation: ${animSpeed}`}
          className={`p-1.5 rounded-lg border border-stone-700 text-xs font-medium transition ${
            animSpeed === 'fast'
              ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
              : animSpeed === 'none'
              ? 'bg-stone-800 text-stone-400'
              : 'bg-stone-800 text-stone-200 hover:bg-stone-700'
          }`}
        >
          <Zap className="w-3.5 h-3.5" />
        </button>

        {/* Fullscreen Toggle */}
        <button
          onClick={onToggleFullscreen}
          title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen (IFP / Projector)'}
          className="p-1.5 rounded-lg bg-stone-800/90 hover:bg-stone-700 border border-stone-700 text-stone-200 transition"
        >
          {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
        </button>

        {/* Help Modal Button */}
        <button
          onClick={onOpenHelp}
          title="Classroom Shortcut & User Guide"
          className="p-1.5 rounded-lg bg-stone-800/90 hover:bg-stone-700 border border-stone-700 text-amber-400 transition"
        >
          <HelpCircle className="w-3.5 h-3.5" />
        </button>
      </div>
    </header>
  );
};

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { allUnits } from './content';
import { Unit, Subtopic, Step, ContentLevel } from './types/content';
import { WhiteboardTool, InputMode } from './types/whiteboard';
import { TopNavBar } from './components/navigation/TopNavBar';
import { BottomToolDock } from './components/navigation/BottomToolDock';
import { LessonMaterialPanel } from './components/lesson/LessonMaterialPanel';
import { TeacherBoard } from './components/whiteboard/TeacherBoard';
import { HelpModal } from './components/modals/HelpModal';

export default function App() {
  // Navigation State
  const [selectedUnitId, setSelectedUnitId] = useState<number>(1);
  const [selectedSubtopicId, setSelectedSubtopicId] = useState<string>('1.1');
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);

  // Filter State ('all' | 'core' | 'extended')
  const [contentFilter, setContentFilter] = useState<'all' | 'core' | 'extended'>('all');

  // Display Settings
  const [textSize, setTextSize] = useState<'compact' | 'normal' | 'large'>('compact');
  const [zoomLevel, setZoomLevel] = useState<number>(1.0);
  const [animSpeed, setAnimSpeed] = useState<'normal' | 'fast' | 'none'>('normal');
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isHelpOpen, setIsHelpOpen] = useState<boolean>(false);

  // Whiteboard State
  const [wbTool, setWbTool] = useState<WhiteboardTool>('pen');
  const [wbColor, setWbColor] = useState<string>('#0F1E36');
  const [wbStrokeWidth, setWbStrokeWidth] = useState<number>(2);
  const [inputMode, setInputMode] = useState<InputMode>('draw');

  // Board action triggers (incremented to signal child canvas)
  const [undoTrigger, setUndoTrigger] = useState<number>(0);
  const [redoTrigger, setRedoTrigger] = useState<number>(0);
  const [clearTrigger, setClearTrigger] = useState<number>(0);
  const [canUndo, setCanUndo] = useState<boolean>(false);
  const [canRedo, setCanRedo] = useState<boolean>(false);

  // Current Unit
  const currentUnit = useMemo(() => {
    return allUnits.find((u) => u.id === selectedUnitId) || allUnits[0];
  }, [selectedUnitId]);

  // Filtered Subtopics based on Core / Extended toggle
  const filteredSubtopics = useMemo(() => {
    if (!currentUnit) return [];
    if (contentFilter === 'all') return currentUnit.subtopics;
    if (contentFilter === 'core') {
      return currentUnit.subtopics.filter((s) => s.level !== 'extended');
    }
    // extended: show extended or both
    return currentUnit.subtopics.filter((s) => s.level !== 'core');
  }, [currentUnit, contentFilter]);

  // Ensure selectedSubtopicId remains valid when filter or unit changes
  useEffect(() => {
    if (filteredSubtopics.length > 0) {
      const exists = filteredSubtopics.some((s) => s.id === selectedSubtopicId);
      if (!exists) {
        setSelectedSubtopicId(filteredSubtopics[0].id);
        setCurrentStepIndex(0);
      }
    }
  }, [filteredSubtopics, selectedSubtopicId]);

  // Current Subtopic
  const currentSubtopic = useMemo(() => {
    return (
      filteredSubtopics.find((s) => s.id === selectedSubtopicId) ||
      filteredSubtopics[0] ||
      currentUnit.subtopics[0]
    );
  }, [filteredSubtopics, selectedSubtopicId, currentUnit]);

  // Filtered Steps for the current subtopic based on Core / Extended
  const filteredSteps = useMemo(() => {
    if (!currentSubtopic || !currentSubtopic.steps) return [];
    if (contentFilter === 'core') {
      return currentSubtopic.steps.filter((st) => st.level !== 'extended');
    }
    if (contentFilter === 'extended') {
      return currentSubtopic.steps.filter((st) => st.level !== 'core');
    }
    return currentSubtopic.steps;
  }, [currentSubtopic, contentFilter]);

  // Ensure currentStepIndex is within bounds
  useEffect(() => {
    if (currentStepIndex >= filteredSteps.length) {
      setCurrentStepIndex(Math.max(0, filteredSteps.length - 1));
    }
  }, [filteredSteps, currentStepIndex]);

  const currentStep = useMemo(() => {
    return filteredSteps[currentStepIndex] || filteredSteps[0];
  }, [filteredSteps, currentStepIndex]);

  // Slide unique key for localStorage whiteboard persistence
  const slideStorageKey = useMemo(() => {
    return `u${selectedUnitId}_sub${selectedSubtopicId}_step${currentStep?.id || currentStepIndex}`;
  }, [selectedUnitId, selectedSubtopicId, currentStep, currentStepIndex]);

  // Navigation handlers
  const handleSelectUnit = (unitId: number) => {
    setSelectedUnitId(unitId);
    const targetUnit = allUnits.find((u) => u.id === unitId);
    if (targetUnit && targetUnit.subtopics.length > 0) {
      setSelectedSubtopicId(targetUnit.subtopics[0].id);
      setCurrentStepIndex(0);
    }
  };

  const handleSelectSubtopic = (subId: string) => {
    setSelectedSubtopicId(subId);
    setCurrentStepIndex(0);
  };

  const handlePrevStep = useCallback(() => {
    setCurrentStepIndex((prev) => Math.max(0, prev - 1));
  }, []);

  const handleNextStep = useCallback(() => {
    setCurrentStepIndex((prev) => Math.min(filteredSteps.length - 1, prev + 1));
  }, [filteredSteps.length]);

  // Text size cycle: compact -> normal -> large
  const handleCycleTextSize = (direction: 'up' | 'down') => {
    if (direction === 'up') {
      if (textSize === 'compact') setTextSize('normal');
      else if (textSize === 'normal') setTextSize('large');
    } else {
      if (textSize === 'large') setTextSize('normal');
      else if (textSize === 'normal') setTextSize('compact');
    }
  };

  // Zoom handlers
  const handleZoomIn = () => setZoomLevel((z) => Math.min(1.4, +(z + 0.1).toFixed(1)));
  const handleZoomOut = () => setZoomLevel((z) => Math.max(0.7, +(z - 0.1).toFixed(1)));
  const handleFitScreen = () => setZoomLevel(1.0);

  // Animation speed toggle
  const handleToggleAnimSpeed = () => {
    setAnimSpeed((prev) => (prev === 'normal' ? 'fast' : prev === 'fast' ? 'none' : 'normal'));
  };

  // Fullscreen toggle
  const handleToggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  // Synchronise fullscreen changes from browser (e.g. F11 or Esc)
  useEffect(() => {
    const onFsChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener('fullscreenchange', onFsChange);
    return () => document.removeEventListener('fullscreenchange', onFsChange);
  }, []);

  // Keyboard Navigation & Shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is inside an input or select
      if (['INPUT', 'SELECT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }

      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        e.preventDefault();
        handleNextStep();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        handlePrevStep();
      } else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'z') {
        e.preventDefault();
        setUndoTrigger((t) => t + 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNextStep, handlePrevStep]);

  return (
    <div className="h-[100dvh] w-screen overflow-hidden flex flex-col bg-[#FAF8F3] text-[#0F1E36] font-sans select-none antialiased">
      {/* 1. TOP NAVIGATION BAR */}
      <TopNavBar
        units={allUnits}
        selectedUnitId={selectedUnitId}
        onSelectUnit={handleSelectUnit}
        filteredSubtopics={filteredSubtopics}
        selectedSubtopicId={selectedSubtopicId}
        onSelectSubtopic={handleSelectSubtopic}
        contentFilter={contentFilter}
        onChangeContentFilter={setContentFilter}
        textSize={textSize}
        onCycleTextSize={handleCycleTextSize}
        zoomLevel={zoomLevel}
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onFitScreen={handleFitScreen}
        animSpeed={animSpeed}
        onToggleAnimSpeed={handleToggleAnimSpeed}
        isFullscreen={isFullscreen}
        onToggleFullscreen={handleToggleFullscreen}
        onOpenHelp={() => setIsHelpOpen(true)}
      />

      {/* 2. MAIN 50/50 2-PART SPLIT SLIDE CONTAINER */}
      <main className="flex-1 min-h-0 w-full overflow-hidden relative">
        <div
          className="w-full h-full flex flex-col md:flex-row transition-transform duration-150 origin-top-left"
          style={{
            transform: zoomLevel !== 1 ? `scale(${zoomLevel})` : undefined,
            width: zoomLevel !== 1 ? `${(100 / zoomLevel).toFixed(2)}%` : '100%',
            height: zoomLevel !== 1 ? `${(100 / zoomLevel).toFixed(2)}%` : '100%',
          }}
        >
          {/* Left Side (50%): Lesson Material Panel */}
          <section
            className="w-full md:w-1/2 h-1/2 md:h-full overflow-hidden flex flex-col border-b md:border-b-0 md:border-r border-[#E3DED4]"
            aria-label="Lesson Material Panel"
          >
            {currentStep ? (
              <LessonMaterialPanel
                step={currentStep}
                unitNumber={selectedUnitId}
                subtopicTitle={currentSubtopic?.title || ''}
                textSize={textSize}
              />
            ) : (
              <div className="flex-1 flex items-center justify-center p-6 text-stone-500 text-sm">
                No slide available under this filter. Switch filter to "All" or "Extended".
              </div>
            )}
          </section>

          {/* Right Side (50%): Teacher's Board & Scratchpad */}
          <section
            className="w-full md:w-1/2 h-1/2 md:h-full overflow-hidden flex flex-col relative"
            aria-label="Teacher's Interactive Whiteboard"
          >
            <TeacherBoard
              slideKey={slideStorageKey}
              tool={wbTool}
              color={wbColor}
              strokeWidth={wbStrokeWidth}
              mode={inputMode}
              undoTrigger={undoTrigger}
              redoTrigger={redoTrigger}
              clearTrigger={clearTrigger}
              onUndoAvailableChange={(canU, canR) => {
                setCanUndo(canU);
                setCanRedo(canR);
              }}
            />
          </section>
        </div>
      </main>

      {/* 3. BOTTOM TOOL DOCK */}
      <BottomToolDock
        currentStepIndex={currentStepIndex}
        totalSteps={filteredSteps.length}
        steps={filteredSteps}
        onSelectStep={setCurrentStepIndex}
        onPrevStep={handlePrevStep}
        onNextStep={handleNextStep}
        tool={wbTool}
        onSelectTool={setWbTool}
        color={wbColor}
        onSelectColor={setWbColor}
        strokeWidth={wbStrokeWidth}
        onSelectStrokeWidth={setWbStrokeWidth}
        mode={inputMode}
        onToggleMode={setInputMode}
        canUndo={canUndo}
        canRedo={canRedo}
        onUndo={() => setUndoTrigger((t) => t + 1)}
        onRedo={() => setRedoTrigger((t) => t + 1)}
        onClear={() => setClearTrigger((t) => t + 1)}
      />

      {/* Help Modal */}
      <HelpModal isOpen={isHelpOpen} onClose={() => setIsHelpOpen(false)} />
    </div>
  );
}

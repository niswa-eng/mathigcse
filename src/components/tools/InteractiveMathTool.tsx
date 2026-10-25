import React, { useState } from 'react';
import { InteractiveToolConfig } from '../../types/content';

interface InteractiveMathToolProps {
  config: InteractiveToolConfig;
}

export const InteractiveMathTool: React.FC<InteractiveMathToolProps> = ({ config }) => {
  switch (config.type) {
    case 'number_line':
      return <NumberLineTool />;
    case 'fraction_bar':
      return <FractionBarTool />;
    case 'balance_scale':
      return <BalanceScaleTool />;
    case 'angle_protractor':
      return <AngleProtractorTool />;
    case 'coordinate_grid':
      return <CoordinateGridTool />;
    case 'circle_theorems':
      return <CircleTheoremsTool />;
    case 'pythagoras_trig':
      return <PythagorasTrigTool />;
    case 'venn_diagram':
      return <VennDiagramTool />;
    case 'tree_diagram':
      return <TreeDiagramTool />;
    default:
      return null;
  }
};

/* --- 1. Interactive Number Line --- */
const NumberLineTool: React.FC = () => {
  const [currentVal, setCurrentVal] = useState<number>(0);
  const [jumpSize, setJumpSize] = useState<number>(1);
  const [highlightSet, setHighlightSet] = useState<'all' | 'integers' | 'primes' | 'squares'>('all');

  const min = -10;
  const max = 10;
  const range = max - min;
  const width = 460;
  const getX = (val: number) => ((val - min) / range) * (width - 60) + 30;

  const primes = [2, 3, 5, 7];
  const squares = [0, 1, 4, 9];

  return (
    <div className="bg-amber-50/60 border border-amber-200/80 rounded-xl p-3 my-3 shadow-xs">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-bold text-amber-900 uppercase tracking-wider flex items-center gap-1.5">
          <span className="inline-block w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
          Interactive Number Line Explorer
        </span>
        <div className="flex gap-1 text-[11px]">
          {(['all', 'primes', 'squares'] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setHighlightSet(filter)}
              className={`px-2 py-0.5 rounded capitalize font-medium transition ${
                highlightSet === filter
                  ? 'bg-amber-700 text-white'
                  : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-50'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="relative py-4 px-2 select-none overflow-x-auto">
        <svg viewBox="0 0 460 70" className="w-full h-16">
          {/* Axis Line */}
          <line x1="20" y1="35" x2="440" y2="35" stroke="#44403C" strokeWidth="2.5" markerEnd="url(#arrow)" />
          {/* Arrow markers */}
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#44403C" />
            </marker>
          </defs>

          {/* Major ticks */}
          {Array.from({ length: 21 }, (_, i) => i - 10).map((num) => {
            const x = getX(num);
            const isPrime = primes.includes(num);
            const isSquare = squares.includes(num);
            let tickColor = '#78716C';
            let textColor = '#57534E';
            let circleFill = 'transparent';

            if (highlightSet === 'primes' && isPrime) {
              tickColor = '#EA580C';
              textColor = '#EA580C';
              circleFill = '#FFEDD5';
            } else if (highlightSet === 'squares' && isSquare) {
              tickColor = '#2563EB';
              textColor = '#1D4ED8';
              circleFill = '#DBEAFE';
            }

            return (
              <g key={num} className="cursor-pointer" onClick={() => setCurrentVal(num)}>
                <line x1={x} y1="26" x2={x} y2="44" stroke={tickColor} strokeWidth={num === 0 ? '2.5' : '1.5'} />
                {circleFill !== 'transparent' && (
                  <circle cx={x} cy="35" r="9" fill={circleFill} opacity="0.6" />
                )}
                <text
                  x={x}
                  y="58"
                  textAnchor="middle"
                  className="text-[10px] font-semibold"
                  fill={textColor}
                >
                  {num}
                </text>
              </g>
            );
          })}

          {/* Active pointer */}
          <g transform={`translate(${getX(currentVal)}, 35)`}>
            <circle cx="0" cy="0" r="7" fill="#DC2626" stroke="#FFFFFF" strokeWidth="2" className="shadow-md" />
            <path d="M 0 -7 L -5 -16 L 5 -16 Z" fill="#DC2626" />
            <text x="0" y="-19" textAnchor="middle" className="text-[11px] font-bold fill-red-700">
              {currentVal}
            </text>
          </g>
        </svg>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 mt-1 pt-2 border-t border-amber-200/60 text-xs">
        <div className="flex items-center gap-1.5">
          <span className="text-stone-600 font-medium">Position:</span>
          <span className="font-bold text-stone-900 bg-white px-2 py-0.5 rounded border border-stone-200">
            {currentVal}
          </span>
          <span className="text-stone-500 text-[11px] ml-1">
            {currentVal > 0 ? '(Positive)' : currentVal < 0 ? '(Negative)' : '(Neutral Origin)'}
          </span>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={() => setCurrentVal((prev) => Math.max(min, prev - jumpSize))}
            className="px-2 py-1 rounded bg-white hover:bg-stone-100 border border-stone-300 font-bold text-stone-700"
            title="Step backward"
          >
            -{jumpSize}
          </button>
          <button
            onClick={() => setCurrentVal(0)}
            className="px-2 py-1 rounded bg-white hover:bg-stone-100 border border-stone-300 font-medium text-stone-700 text-[11px]"
          >
            Reset (0)
          </button>
          <button
            onClick={() => setCurrentVal((prev) => Math.min(max, prev + jumpSize))}
            className="px-2 py-1 rounded bg-white hover:bg-stone-100 border border-stone-300 font-bold text-stone-700"
            title="Step forward"
          >
            +{jumpSize}
          </button>
          <div className="flex items-center gap-1 ml-2 text-[11px] text-stone-500">
            <span>Jump:</span>
            {[1, 2, 5].map((s) => (
              <button
                key={s}
                onClick={() => setJumpSize(s)}
                className={`w-5 h-5 rounded text-[10px] font-bold ${
                  jumpSize === s ? 'bg-amber-800 text-white' : 'bg-stone-100 text-stone-600'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/* --- 2. Interactive Fraction Bar --- */
const FractionBarTool: React.FC = () => {
  const [numerator, setNumerator] = useState<number>(3);
  const [denominator, setDenominator] = useState<number>(4);

  return (
    <div className="bg-blue-50/70 border border-blue-200 rounded-xl p-3 my-3">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-bold text-blue-900 uppercase tracking-wider">
          Fraction Visualiser & Equivalents
        </span>
        <span className="text-xs font-semibold text-blue-800 bg-white px-2 py-0.5 rounded border border-blue-200">
          Value: {((numerator / denominator) * 100).toFixed(1)}% ({numerator}/{denominator})
        </span>
      </div>

      <div className="space-y-2 py-1">
        <div className="w-full h-8 bg-white border-2 border-blue-400 rounded-lg overflow-hidden flex shadow-xs">
          {Array.from({ length: denominator }, (_, idx) => (
            <div
              key={idx}
              onClick={() => setNumerator(idx + 1)}
              className={`flex-1 flex items-center justify-center font-bold text-xs border-r last:border-r-0 border-blue-300 cursor-pointer transition ${
                idx < numerator ? 'bg-blue-500 text-white' : 'bg-blue-50/30 text-blue-400 hover:bg-blue-100/50'
              }`}
            >
              {idx < numerator ? '✓' : ''}
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between text-xs text-stone-600 px-1">
          <div className="flex items-center gap-2">
            <span>Numerator:</span>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setNumerator((p) => Math.max(0, p - 1))}
                className="w-5 h-5 rounded bg-white border border-stone-300 font-bold text-stone-700"
              >
                -
              </button>
              <span className="font-bold text-blue-900 w-4 text-center">{numerator}</span>
              <button
                onClick={() => setNumerator((p) => Math.min(denominator, p + 1))}
                className="w-5 h-5 rounded bg-white border border-stone-300 font-bold text-stone-700"
              >
                +
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span>Denominator:</span>
            <div className="flex items-center gap-1">
              {[2, 3, 4, 5, 6, 8, 10, 12].map((d) => (
                <button
                  key={d}
                  onClick={() => {
                    setDenominator(d);
                    if (numerator > d) setNumerator(d);
                  }}
                  className={`px-1.5 py-0.5 rounded text-[11px] font-semibold ${
                    denominator === d
                      ? 'bg-blue-600 text-white'
                      : 'bg-white border border-blue-200 text-blue-700'
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* --- 3. Interactive Balance Scale (Equations) --- */
const BalanceScaleTool: React.FC = () => {
  const [leftX, setLeftX] = useState<number>(2);
  const [leftUnits, setLeftUnits] = useState<number>(4);
  const [rightUnits, setRightUnits] = useState<number>(10);
  const xValue = 3; // true solution when balanced

  const leftTotal = leftX * xValue + leftUnits;
  const rightTotal = rightUnits;
  const difference = leftTotal - rightTotal;
  const tiltDeg = Math.max(-12, Math.min(12, difference * 1.5));

  return (
    <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-3 my-3">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-bold text-emerald-900 uppercase tracking-wider">
          Equation Balance Scale
        </span>
        <span
          className={`text-xs font-bold px-2 py-0.5 rounded ${
            difference === 0 ? 'bg-emerald-600 text-white' : 'bg-amber-100 text-amber-800'
          }`}
        >
          {difference === 0 ? 'BALANCED: ' + leftX + 'x + ' + leftUnits + ' = ' + rightUnits : 'UNBALANCED'}
        </span>
      </div>

      <div className="relative py-2 flex flex-col items-center">
        <svg viewBox="0 0 360 110" className="w-full h-24">
          {/* Base and Fulcrum */}
          <polygon points="180,45 165,95 195,95" fill="#4B5563" />
          <rect x="140" y="95" width="80" height="8" rx="2" fill="#374151" />

          {/* Tilting Beam */}
          <g transform={`rotate(${tiltDeg}, 180, 45)`}>
            <rect x="40" y="42" width="280" height="6" rx="3" fill="#1F2937" />
            <circle cx="180" cy="45" r="5" fill="#10B981" />

            {/* Left Pan */}
            <line x1="60" y1="45" x2="60" y2="70" stroke="#9CA3AF" strokeWidth="2" />
            <path d="M 35 70 Q 60 85 85 70 Z" fill="#D1D5DB" stroke="#6B7280" strokeWidth="1.5" />
            <text x="60" y="65" textAnchor="middle" className="text-[10px] font-bold fill-emerald-800">
              {leftX}x + {leftUnits}
            </text>

            {/* Right Pan */}
            <line x1="300" y1="45" x2="300" y2="70" stroke="#9CA3AF" strokeWidth="2" />
            <path d="M 275 70 Q 300 85 325 70 Z" fill="#D1D5DB" stroke="#6B7280" strokeWidth="1.5" />
            <text x="300" y="65" textAnchor="middle" className="text-[10px] font-bold fill-emerald-800">
              {rightUnits}
            </text>
          </g>
        </svg>

        <div className="flex items-center justify-between w-full text-xs text-stone-600 mt-1">
          <div className="flex items-center gap-1">
            <span>Left:</span>
            <button
              onClick={() => setLeftUnits((u) => Math.max(0, u - 1))}
              className="px-1.5 py-0.5 rounded bg-white border border-stone-300 font-bold"
            >
              -1
            </button>
            <button
              onClick={() => setLeftUnits((u) => u + 1)}
              className="px-1.5 py-0.5 rounded bg-white border border-stone-300 font-bold"
            >
              +1
            </button>
          </div>
          <span className="text-[11px] text-stone-500 italic">
            Keep both sides equal to find x
          </span>
          <div className="flex items-center gap-1">
            <span>Right:</span>
            <button
              onClick={() => setRightUnits((u) => Math.max(0, u - 1))}
              className="px-1.5 py-0.5 rounded bg-white border border-stone-300 font-bold"
            >
              -1
            </button>
            <button
              onClick={() => setRightUnits((u) => u + 1)}
              className="px-1.5 py-0.5 rounded bg-white border border-stone-300 font-bold"
            >
              +1
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

/* --- 4. Interactive Angle / Protractor Tool --- */
const AngleProtractorTool: React.FC = () => {
  const [angle, setAngle] = useState<number>(65);

  const rad = (angle * Math.PI) / 180;
  const cx = 130;
  const cy = 110;
  const r = 90;
  const xEnd = cx + r * Math.cos(rad);
  const yEnd = cy - r * Math.sin(rad);

  const type =
    angle < 90 ? 'Acute' : angle === 90 ? 'Right Angle' : angle < 180 ? 'Obtuse' : angle === 180 ? 'Straight' : 'Reflex';

  return (
    <div className="bg-purple-50/70 border border-purple-200 rounded-xl p-3 my-3">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-bold text-purple-900 uppercase tracking-wider">
          Angle Classifier & Protractor
        </span>
        <span className="text-xs font-bold text-purple-800 bg-white px-2 py-0.5 rounded border border-purple-200">
          {angle}° ({type})
        </span>
      </div>

      <div className="flex items-center gap-4">
        <svg viewBox="0 0 260 130" className="w-56 h-28 bg-white rounded-lg border border-purple-100 shadow-2xs">
          {/* Semicircle protractor outline */}
          <path d="M 40 110 A 90 90 0 0 1 220 110 Z" fill="#F3E8FF" stroke="#A855F7" strokeWidth="1" strokeDasharray="2,2" />
          {/* Base arm */}
          <line x1={cx} y1={cy} x2={cx + r} y2={cy} stroke="#374151" strokeWidth="2.5" />
          {/* Rotated arm */}
          <line x1={cx} y1={cy} x2={xEnd} y2={yEnd} stroke="#7C3AED" strokeWidth="2.5" />
          {/* Arc */}
          <path
            d={`M ${cx + 30} ${cy} A 30 30 0 0 0 ${cx + 30 * Math.cos(rad)} ${cy - 30 * Math.sin(rad)}`}
            fill="none"
            stroke="#9333EA"
            strokeWidth="2"
          />
          <circle cx={cx} cy={cy} r="4" fill="#374151" />
        </svg>

        <div className="flex-1 space-y-2 text-xs">
          <input
            type="range"
            min="10"
            max="180"
            value={angle}
            onChange={(e) => setAngle(Number(e.target.value))}
            className="w-full accent-purple-600"
          />
          <div className="flex flex-wrap gap-1">
            {[30, 45, 60, 90, 120, 135, 180].map((val) => (
              <button
                key={val}
                onClick={() => setAngle(val)}
                className={`px-1.5 py-0.5 rounded text-[10px] font-semibold ${
                  angle === val ? 'bg-purple-700 text-white' : 'bg-white border border-purple-200 text-purple-700'
                }`}
              >
                {val}°
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/* --- 5. Coordinate Grid Tool --- */
const CoordinateGridTool: React.FC = () => {
  const [point, setPoint] = useState<{ x: number; y: number }>({ x: 3, y: 4 });

  const gridMin = -5;
  const gridMax = 5;
  const scale = 20;
  const origin = 110;

  return (
    <div className="bg-sky-50/70 border border-sky-200 rounded-xl p-3 my-3">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-bold text-sky-900 uppercase tracking-wider">
          Cartesian Coordinate Plane
        </span>
        <span className="text-xs font-bold text-sky-800 bg-white px-2 py-0.5 rounded border border-sky-200">
          Point ({point.x}, {point.y})
        </span>
      </div>

      <div className="flex items-center gap-4">
        <svg viewBox="0 0 220 220" className="w-48 h-48 bg-white rounded-lg border border-sky-200 shadow-2xs">
          {/* Grid lines */}
          {Array.from({ length: 11 }, (_, i) => i - 5).map((val) => (
            <React.Fragment key={val}>
              <line
                x1={origin + val * scale}
                y1="10"
                x2={origin + val * scale}
                y2="210"
                stroke={val === 0 ? '#1E293B' : '#E2E8F0'}
                strokeWidth={val === 0 ? '1.8' : '1'}
              />
              <line
                x1="10"
                y1={origin - val * scale}
                x2="210"
                y2={origin - val * scale}
                stroke={val === 0 ? '#1E293B' : '#E2E8F0'}
                strokeWidth={val === 0 ? '1.8' : '1'}
              />
            </React.Fragment>
          ))}
          {/* Active Plotted Point */}
          <circle
            cx={origin + point.x * scale}
            cy={origin - point.y * scale}
            r="6"
            fill="#0284C7"
            stroke="#FFFFFF"
            strokeWidth="2"
          />
        </svg>

        <div className="flex-1 space-y-2 text-xs">
          <div>
            <label className="text-stone-600 block mb-0.5 font-medium">x-coordinate: {point.x}</label>
            <input
              type="range"
              min={gridMin}
              max={gridMax}
              value={point.x}
              onChange={(e) => setPoint({ ...point, x: Number(e.target.value) })}
              className="w-full accent-sky-600"
            />
          </div>
          <div>
            <label className="text-stone-600 block mb-0.5 font-medium">y-coordinate: {point.y}</label>
            <input
              type="range"
              min={gridMin}
              max={gridMax}
              value={point.y}
              onChange={(e) => setPoint({ ...point, y: Number(e.target.value) })}
              className="w-full accent-sky-600"
            />
          </div>
          <div className="text-[11px] text-stone-500 pt-1">
            Distance from origin: <span className="font-semibold text-stone-800">√({point.x}² + {point.y}²) = {Math.sqrt(point.x ** 2 + point.y ** 2).toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

/* --- 6. Circle Theorems Explorer --- */
const CircleTheoremsTool: React.FC = () => {
  const [angleAtCirc, setAngleAtCirc] = useState<number>(42);
  const angleAtCentre = angleAtCirc * 2;

  return (
    <div className="bg-indigo-50/70 border border-indigo-200 rounded-xl p-3 my-3">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-bold text-indigo-900 uppercase tracking-wider">
          Circle Theorem: Angle at Centre
        </span>
        <span className="text-xs font-bold text-indigo-800 bg-white px-2 py-0.5 rounded border border-indigo-200">
          Centre = 2 × Circumference ({angleAtCentre}° = 2 × {angleAtCirc}°)
        </span>
      </div>

      <div className="flex items-center gap-4">
        <svg viewBox="0 0 160 160" className="w-40 h-40 bg-white rounded-full border border-indigo-200 shadow-2xs mx-auto">
          <circle cx="80" cy="80" r="70" fill="none" stroke="#6366F1" strokeWidth="2" />
          <circle cx="80" cy="80" r="3" fill="#1E1B4B" />
          {/* Base chord vertices */}
          <line x1="80" y1="80" x2="35" y2="125" stroke="#4F46E5" strokeWidth="1.5" />
          <line x1="80" y1="80" x2="125" y2="125" stroke="#4F46E5" strokeWidth="1.5" />
          {/* Circumference lines */}
          <line x1="80" y1="15" x2="35" y2="125" stroke="#9333EA" strokeWidth="1.5" strokeDasharray="3,3" />
          <line x1="80" y1="15" x2="125" y2="125" stroke="#9333EA" strokeWidth="1.5" strokeDasharray="3,3" />
          <text x="80" y="70" textAnchor="middle" className="text-[11px] font-bold fill-indigo-800">
            {angleAtCentre}°
          </text>
          <text x="80" y="32" textAnchor="middle" className="text-[10px] font-bold fill-purple-700">
            {angleAtCirc}°
          </text>
        </svg>

        <div className="flex-1 space-y-2 text-xs">
          <label className="text-stone-600 block font-medium">Adjust Angle at Circumference:</label>
          <input
            type="range"
            min="20"
            max="70"
            value={angleAtCirc}
            onChange={(e) => setAngleAtCirc(Number(e.target.value))}
            className="w-full accent-indigo-600"
          />
          <div className="text-[11px] text-stone-600 bg-white p-2 rounded border border-indigo-100">
            "The angle subtended by an arc at the centre is twice the angle subtended by it at any point on the circumference."
          </div>
        </div>
      </div>
    </div>
  );
};

/* --- 7. Pythagoras & Trig Tool --- */
const PythagorasTrigTool: React.FC = () => {
  const [a, setA] = useState<number>(3);
  const [b, setB] = useState<number>(4);
  const c = Math.sqrt(a * a + b * b);

  return (
    <div className="bg-rose-50/70 border border-rose-200 rounded-xl p-3 my-3">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-bold text-rose-900 uppercase tracking-wider">
          Pythagoras & Trigonometric Ratios
        </span>
        <span className="text-xs font-bold text-rose-800 bg-white px-2 py-0.5 rounded border border-rose-200">
          a² + b² = c² ({a}² + {b}² = {c.toFixed(2)}²)
        </span>
      </div>

      <div className="flex items-center gap-4">
        <svg viewBox="0 0 160 130" className="w-40 h-32 bg-white rounded-lg border border-rose-200 p-1">
          {/* Right triangle */}
          <polygon points="20,110 130,110 20,30" fill="#FFE4E6" stroke="#E11D48" strokeWidth="2" />
          <rect x="20" y="98" width="12" height="12" fill="none" stroke="#E11D48" strokeWidth="1.5" />
          <text x="75" y="125" textAnchor="middle" className="text-[11px] font-bold fill-stone-800">
            Adjacent: {b}
          </text>
          <text x="12" y="70" textAnchor="middle" className="text-[11px] font-bold fill-stone-800">
            Opposite: {a}
          </text>
          <text x="85" y="65" textAnchor="middle" className="text-[11px] font-bold fill-rose-700">
            Hypotenuse: {c.toFixed(2)}
          </text>
        </svg>

        <div className="flex-1 space-y-1.5 text-xs">
          <div className="flex items-center justify-between">
            <span>Opposite (a): {a}</span>
            <input
              type="range"
              min="1"
              max="12"
              value={a}
              onChange={(e) => setA(Number(e.target.value))}
              className="w-24 accent-rose-600"
            />
          </div>
          <div className="flex items-center justify-between">
            <span>Adjacent (b): {b}</span>
            <input
              type="range"
              min="1"
              max="12"
              value={b}
              onChange={(e) => setB(Number(e.target.value))}
              className="w-24 accent-rose-600"
            />
          </div>
          <div className="text-[11px] text-stone-600 pt-1">
            tan(θ) = {a}/{b} = {(a / b).toFixed(3)} → θ = {((Math.atan(a / b) * 180) / Math.PI).toFixed(1)}°
          </div>
        </div>
      </div>
    </div>
  );
};

/* --- 8. Venn Diagram Tool --- */
const VennDiagramTool: React.FC = () => {
  const [selectedSet, setSelectedSet] = useState<string>('intersection');

  return (
    <div className="bg-teal-50/70 border border-teal-200 rounded-xl p-3 my-3">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-bold text-teal-900 uppercase tracking-wider">
          Venn Diagram Explorer
        </span>
        <span className="text-xs font-bold text-teal-800 bg-white px-2 py-0.5 rounded border border-teal-200 uppercase">
          {selectedSet === 'intersection' ? 'A ∩ B' : selectedSet === 'union' ? 'A ∪ B' : selectedSet === 'onlyA' ? 'A only' : "A'"}
        </span>
      </div>

      <div className="flex items-center gap-4">
        <svg viewBox="0 0 200 120" className="w-48 h-28 bg-white rounded-lg border border-teal-200">
          <rect x="5" y="5" width="190" height="110" rx="4" fill="none" stroke="#64748B" strokeWidth="1.5" />
          <text x="15" y="20" className="text-[10px] font-bold fill-slate-500">
            ξ (Universal Set)
          </text>
          {/* Circle A */}
          <circle
            cx="75"
            cy="65"
            r="42"
            fill={selectedSet === 'union' || selectedSet === 'onlyA' ? '#99F6E4' : '#CCFBF1'}
            opacity="0.7"
            stroke="#0D9488"
            strokeWidth="1.5"
          />
          {/* Circle B */}
          <circle
            cx="125"
            cy="65"
            r="42"
            fill={selectedSet === 'union' ? '#99F6E4' : '#E0F2FE'}
            opacity="0.7"
            stroke="#0284C7"
            strokeWidth="1.5"
          />
          <text x="60" y="68" textAnchor="middle" className="text-xs font-bold fill-teal-900">
            A
          </text>
          <text x="140" y="68" textAnchor="middle" className="text-xs font-bold fill-sky-900">
            B
          </text>
          {selectedSet === 'intersection' && (
            <text x="100" y="68" textAnchor="middle" className="text-[10px] font-bold fill-emerald-800">
              A ∩ B
            </text>
          )}
        </svg>

        <div className="flex-1 flex flex-col gap-1 text-xs">
          {[
            { id: 'intersection', label: 'Intersection (A ∩ B)' },
            { id: 'union', label: 'Union (A ∪ B)' },
            { id: 'onlyA', label: 'Only A (A ∩ B\')' },
            { id: 'compA', label: "Complement of A (A')" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedSet(item.id)}
              className={`px-2 py-1 rounded text-left font-medium transition ${
                selectedSet === item.id
                  ? 'bg-teal-700 text-white'
                  : 'bg-white border border-teal-200 text-stone-700 hover:bg-teal-50'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

/* --- 9. Tree Diagram Tool --- */
const TreeDiagramTool: React.FC = () => {
  const [probH, setProbH] = useState<number>(0.5);
  const probT = +(1 - probH).toFixed(2);

  return (
    <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-3 my-3">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-bold text-amber-900 uppercase tracking-wider">
          Probability Tree Diagram
        </span>
        <span className="text-xs font-bold text-amber-800 bg-white px-2 py-0.5 rounded border border-amber-200">
          P(H) = {probH} | P(T) = {probT}
        </span>
      </div>

      <div className="flex items-center gap-4">
        <svg viewBox="0 0 240 120" className="w-56 h-28 bg-white rounded-lg border border-amber-200">
          {/* Level 1 branches */}
          <line x1="20" y1="60" x2="100" y2="30" stroke="#78350F" strokeWidth="2" />
          <line x1="20" y1="60" x2="100" y2="90" stroke="#78350F" strokeWidth="2" />
          <text x="55" y="38" className="text-[10px] font-bold fill-amber-800">
            {probH}
          </text>
          <text x="55" y="85" className="text-[10px] font-bold fill-amber-800">
            {probT}
          </text>
          <text x="115" y="34" className="text-xs font-bold fill-stone-900">
            H
          </text>
          <text x="115" y="94" className="text-xs font-bold fill-stone-900">
            T
          </text>
          {/* Level 2 preview */}
          <line x1="125" y1="30" x2="190" y2="15" stroke="#92400E" strokeWidth="1.5" />
          <line x1="125" y1="30" x2="190" y2="45" stroke="#92400E" strokeWidth="1.5" />
          <text x="200" y="19" className="text-[10px] font-semibold fill-stone-700">
            HH: {(probH * probH).toFixed(2)}
          </text>
          <text x="200" y="49" className="text-[10px] font-semibold fill-stone-700">
            HT: {(probH * probT).toFixed(2)}
          </text>
        </svg>

        <div className="flex-1 space-y-1.5 text-xs">
          <label className="text-stone-600 block font-medium">Bias / Probability P(H):</label>
          <input
            type="range"
            min="0.1"
            max="0.9"
            step="0.05"
            value={probH}
            onChange={(e) => setProbH(Number(e.target.value))}
            className="w-full accent-amber-600"
          />
          <div className="text-[11px] text-stone-500">
            Rule: Multiply probabilities along branches; sum across separate branches.
          </div>
        </div>
      </div>
    </div>
  );
};

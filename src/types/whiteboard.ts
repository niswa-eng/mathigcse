export type WhiteboardTool =
  | 'pen'
  | 'highlighter'
  | 'eraser'
  | 'line'
  | 'dashed_line'
  | 'rect'
  | 'circle'
  | 'ruler';

export type PaperGridType =
  | 'math_grid'
  | 'lined'
  | 'dot_grid'
  | 'plain'
  | 'axes';

export type InputMode = 'draw' | 'touch';

export interface Point {
  x: number;
  y: number;
}

export interface DrawStroke {
  id: string;
  tool: WhiteboardTool;
  color: string;
  size: number;
  points: Point[];
  // For geometric shapes
  startPoint?: Point;
  endPoint?: Point;
}

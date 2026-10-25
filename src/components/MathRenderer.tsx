import React, { useMemo } from 'react';
import katex from 'katex';

interface MathRendererProps {
  latex?: string;
  text?: string;
  inline?: boolean;
  className?: string;
}

/**
 * MathRenderer formats LaTeX expressions cleanly using KaTeX.
 * If text contains inline math like $...$ or $$...$$, it parses and renders them.
 */
export const MathRenderer: React.FC<MathRendererProps> = ({
  latex,
  text,
  inline = false,
  className = '',
}) => {
  const renderedContent = useMemo(() => {
    if (latex) {
      try {
        return katex.renderToString(latex, {
          displayMode: !inline,
          throwOnError: false,
        });
      } catch (err) {
        return `<span class="text-red-500">${latex}</span>`;
      }
    }

    if (!text) return '';

    // Parse text with $...$ for inline math and $$...$$ for block math
    try {
      const hasDollarDelimiters = text.includes('$');

      if (hasDollarDelimiters) {
        // Split by $$...$$ first, then $...$
        const parts = text.split(/(\$\$[\s\S]*?\$\$|\$[^\$]+?\$)/g);
        return parts
          .map((part) => {
            if (part.startsWith('$$') && part.endsWith('$$')) {
              const math = part.slice(2, -2);
              return katex.renderToString(math, {
                displayMode: true,
                throwOnError: false,
              });
            } else if (part.startsWith('$') && part.endsWith('$')) {
              const math = part.slice(1, -1);
              return katex.renderToString(math, {
                displayMode: false,
                throwOnError: false,
              });
            }
            // Escape HTML for plain text
            return part
              .replace(/&/g, '&amp;')
              .replace(/</g, '&lt;')
              .replace(/>/g, '&gt;');
          })
          .join('');
      }

      // If no dollar signs, check if string itself contains LaTeX macros
      const containsLatex = /\\[a-zA-Z]+|\^|\_/.test(text);
      if (containsLatex) {
        try {
          return katex.renderToString(text, {
            displayMode: false,
            throwOnError: false,
          });
        } catch {
          // fallback to escaped text
        }
      }

      // Plain text escape
      return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
    } catch {
      return text;
    }
  }, [latex, text, inline]);

  if (latex) {
    return (
      <div
        className={`${inline ? 'inline-block' : 'my-2.5 overflow-x-auto py-1'} ${className}`}
        dangerouslySetInnerHTML={{ __html: renderedContent }}
      />
    );
  }

  return (
    <span
      className={className}
      dangerouslySetInnerHTML={{ __html: renderedContent }}
    />
  );
};

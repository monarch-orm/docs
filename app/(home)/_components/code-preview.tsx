"use client"
import { useState, useEffect } from "react";
import { Check, Clipboard } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CodePreviewProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
  title?: string;
}

export function CodePreview({ 
  code, 
  language = "typescript", 
  showLineNumbers = true,
  title
}: CodePreviewProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
  };

  useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timeout);
    }
  }, [copied]);

  // Add syntax highlighting by applying colors to different parts of the code
  const highlightSyntax = (code: string): React.ReactNode[] => {
    const keywords = ['import', 'from', 'const', 'function', 'type', 'interface', 'await', 'async', 'return', 'export', 'default', 'true', 'false', 'null'];
    const types = ['string', 'number', 'boolean', 'void', 'any', 'Object', 'Array', 'Promise', 'String', 'Boolean', 'Date', 'ObjectId'];
    
    const lines = code.split('\n');
    
    return lines.map((line, lineIndex) => {
      // Split the line into segments to apply highlighting
      const segments: React.ReactNode[] = [];
      let currentSegment = '';
      let inString = false;
      const inComment = false;
      
      for (let i = 0; i < line.length; i++) {
        const char = line[i];
        const nextChar = line[i + 1];
        
        // Check for comments
        if (!inString && char === '/' && nextChar === '/') {
          if (currentSegment) {
            segments.push(<span key={`${lineIndex}-${segments.length}`}>{currentSegment}</span>);
            currentSegment = '';
          }
          segments.push(<span key={`${lineIndex}-${segments.length}`} className="text-green-500">{line.substring(i)}</span>);
          break;
        }
        
        // Check for strings
        if (char === '"' || char === "'" || char === '`') {
          if (inString) {
            currentSegment += char;
            segments.push(<span key={`${lineIndex}-${segments.length}`} className="text-amber-400">{currentSegment}</span>);
            currentSegment = '';
            inString = false;
          } else {
            if (currentSegment) {
              segments.push(<span key={`${lineIndex}-${segments.length}`}>{currentSegment}</span>);
              currentSegment = '';
            }
            currentSegment = char;
            inString = true;
          }
          continue;
        }
        
        if (inString) {
          currentSegment += char;
          continue;
        }
        
        // Check for word boundaries to highlight keywords
        if (/\w/.test(char) && (!line[i - 1] || !/\w/.test(line[i - 1]))) {
          // Potential start of keyword
          const wordMatch = line.substring(i).match(/^(\w+)/);
          if (wordMatch) {
            const word = wordMatch[0];
            if (keywords.includes(word)) {
              if (currentSegment) {
                segments.push(<span key={`${lineIndex}-${segments.length}`}>{currentSegment}</span>);
                currentSegment = '';
              }
              segments.push(<span key={`${lineIndex}-${segments.length}`} className="text-purple-400">{word}</span>);
              i += word.length - 1;
              continue;
            } else if (types.includes(word)) {
              if (currentSegment) {
                segments.push(<span key={`${lineIndex}-${segments.length}`}>{currentSegment}</span>);
                currentSegment = '';
              }
              segments.push(<span key={`${lineIndex}-${segments.length}`} className="text-blue-400">{word}</span>);
              i += word.length - 1;
              continue;
            }
          }
        }
        
        // Check for numbers
        if (/\d/.test(char) && (!line[i - 1] || !/\w/.test(line[i - 1]))) {
          const numberMatch = line.substring(i).match(/^(\d+(\.\d+)?)/);
          if (numberMatch) {
            const number = numberMatch[0];
            if (currentSegment) {
              segments.push(<span key={`${lineIndex}-${segments.length}`}>{currentSegment}</span>);
              currentSegment = '';
            }
            segments.push(<span key={`${lineIndex}-${segments.length}`} className="text-yellow-500">{number}</span>);
            i += number.length - 1;
            continue;
          }
        }
        
        // Check for function calls
        if (/\w/.test(char) && line[i - 1] === '.') {
          const methodMatch = line.substring(i).match(/^(\w+)(\()/);
          if (methodMatch) {
            const method = methodMatch[1];
            if (currentSegment) {
              segments.push(<span key={`${lineIndex}-${segments.length}`}>{currentSegment}</span>);
              currentSegment = '';
            }
            segments.push(<span key={`${lineIndex}-${segments.length}`} className="text-cyan-400">{method}</span>);
            i += method.length - 1;
            continue;
          }
        }
        
        currentSegment += char;
      }
      
      if (currentSegment) {
        segments.push(<span key={`${lineIndex}-${segments.length}`}>{currentSegment}</span>);
      }
      
      return (
        <div key={lineIndex} className="table-row">
          {showLineNumbers && (
            <span className="table-cell text-right pr-4 select-none text-muted-foreground">{lineIndex + 1}</span>
          )}
          <span className="table-cell">{segments}</span>
        </div>
      );
    });
  };

  return (
    <div className="relative group overflow-hidden rounded-lg border border-border bg-muted/40 backdrop-blur-sm shadow-lg hover:shadow-monarch-purple/10 transition-shadow">
      {title && (
        <div className="flex items-center justify-between px-4 py-2 border-b border-border/50 bg-muted">
          <span className="text-sm font-medium">{title}</span>
          <div className="flex items-center gap-1">
            <div className="h-2.5 w-2.5 rounded-full bg-red-500 opacity-70"></div>
            <div className="h-2.5 w-2.5 rounded-full bg-yellow-500 opacity-70"></div>
            <div className="h-2.5 w-2.5 rounded-full bg-green-500 opacity-70"></div>
          </div>
        </div>
      )}
      <div className="overflow-auto p-4 font-mono text-sm">
        <div className="table w-full">
          {highlightSyntax(code)}
        </div>
      </div>
      <Button
        size="icon"
        variant="secondary"
        className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={handleCopy}
      >
        {copied ? (
          <Check className="h-4 w-4 text-green-500" />
        ) : (
          <Clipboard className="h-4 w-4" />
        )}
      </Button>
    </div>
  );
}

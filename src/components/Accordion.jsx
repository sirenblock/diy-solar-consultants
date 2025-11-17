import { useState, useRef, useEffect } from 'react';

export default function Accordion({
  question,
  answer,
  isOpen,
  onToggle,
  searchTerm = ''
}) {
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [answer]);

  // Highlight search term in text
  const highlightText = (text, term) => {
    if (!term) return text;

    const parts = text.split(new RegExp(`(${term})`, 'gi'));
    return parts.map((part, index) =>
      part.toLowerCase() === term.toLowerCase() ?
        <mark key={index} className="bg-yellow-200 px-1 rounded">{part}</mark> :
        part
    );
  };

  // Format answer text with markdown-like styling
  const formatAnswer = (text) => {
    const lines = text.split('\n');
    return lines.map((line, index) => {
      // Bold text (**text**)
      line = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

      // Check if line starts with bullet points or checkmarks
      if (line.trim().startsWith('- ✓') || line.trim().startsWith('- ✗')) {
        return (
          <li key={index} className="ml-6 mb-2" dangerouslySetInnerHTML={{ __html: line.substring(2) }} />
        );
      } else if (line.trim().startsWith('- ')) {
        return (
          <li key={index} className="ml-6 mb-2" dangerouslySetInnerHTML={{ __html: line.substring(2) }} />
        );
      } else if (line.trim() === '') {
        return <br key={index} />;
      } else {
        return (
          <p key={index} className="mb-3" dangerouslySetInnerHTML={{ __html: line }} />
        );
      }
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onToggle();
    }
  };

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={onToggle}
        onKeyDown={handleKeyDown}
        aria-expanded={isOpen}
        className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
      >
        <span className="text-lg font-semibold text-gray-900 pr-8">
          {searchTerm ? highlightText(question, searchTerm) : question}
        </span>
        <svg
          className={`w-6 h-6 text-blue-600 flex-shrink-0 transition-transform duration-200 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        ref={contentRef}
        style={{
          maxHeight: isOpen ? `${contentHeight}px` : '0px',
        }}
        className="overflow-hidden transition-all duration-300 ease-in-out"
      >
        <div className="px-6 pb-6 pt-2 text-gray-700 leading-relaxed">
          {formatAnswer(answer)}
        </div>
      </div>
    </div>
  );
}

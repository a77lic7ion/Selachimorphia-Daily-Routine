
import React, { useState, useCallback } from 'react';
import { ClipboardIcon } from './icons/ClipboardIcon';
import { CheckIcon } from './icons/CheckIcon';

interface WaypointProps {
  code: string;
  description: string;
}

const Waypoint: React.FC<WaypointProps> = ({ code, description }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [code]);

  return (
    <div title={description}>
      <button
        onClick={handleCopy}
        className="group inline-flex items-center gap-2 px-2 py-1 bg-gray-700 text-cyan-300 font-mono text-xs rounded-md border border-gray-600 hover:bg-gray-600 hover:border-cyan-500 transition-all duration-200"
      >
        <span>{code}</span>
        {copied ? (
          <CheckIcon className="w-3 h-3 text-green-400" />
        ) : (
          <ClipboardIcon className="w-3 h-3 text-gray-400 group-hover:text-cyan-300 transition-colors" />
        )}
      </button>
    </div>
  );
};

export default Waypoint;

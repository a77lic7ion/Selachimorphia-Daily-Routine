
import React, { useState } from 'react';

interface ApiKeyManagerProps {
  apiKey: string;
  setApiKey: (key: string) => void;
  error: string | null;
}

const ApiKeyManager: React.FC<ApiKeyManagerProps> = ({ apiKey, setApiKey, error }) => {
  const [currentKey, setCurrentKey] = useState(apiKey);
  const [isEditing, setIsEditing] = useState(!apiKey);

  const handleSave = () => {
    setApiKey(currentKey);
    if (currentKey) {
      setIsEditing(false);
    }
  };
  
  const handleClear = () => {
    setCurrentKey('');
    setApiKey('');
    setIsEditing(true);
  };
  
  const handleEdit = () => {
    setIsEditing(true);
  };

  if (!isEditing && apiKey) {
    return (
      <div className="bg-gray-800 p-4 rounded-lg mb-6 flex justify-between items-center transition-all duration-300">
        <p className="text-gray-300">API Key is set. Progress is syncing automatically.</p>
        <button
          onClick={handleEdit}
          className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-md transition-colors duration-200 text-sm"
        >
          Change Key
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gray-800 p-4 rounded-lg mb-6 border border-cyan-500/30">
      <h3 className="font-bold text-lg text-white">Connect Your GW2 Account</h3>
      <p className="text-gray-400 mt-1 text-sm">
        To automatically track your achievement progress, please enter a Guild Wars 2 API key.
        The key requires the <code className="bg-gray-700 text-cyan-300 px-1 rounded-sm text-xs">'progression'</code> permission.
        You can create a key on the official <a href="https://account.arena.net/applications" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ArenaNet website</a>.
      </p>
      <div className="mt-4 flex flex-col sm:flex-row gap-2">
        <input
          type="text"
          value={currentKey}
          onChange={(e) => setCurrentKey(e.target.value)}
          placeholder="Paste your API key here"
          className="flex-grow bg-gray-900 border border-gray-600 rounded-md px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
        <div className="flex gap-2">
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-md transition-colors duration-200"
          >
            Save Key
          </button>
          {apiKey && (
            <button
              onClick={handleClear}
              className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-md transition-colors duration-200"
            >
              Clear
            </button>
          )}
        </div>
      </div>
      {error && <p className="text-red-400 mt-2 text-sm">{error}</p>}
    </div>
  );
};

export default ApiKeyManager;
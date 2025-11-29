
import React, { useCallback, useEffect, useState } from 'react';
import { sections } from './data/tasks';
import { useLocalStorage } from './hooks/useLocalStorage';
import Header from './components/Header';
import Section from './components/Section';
import ApiKeyManager from './components/ApiKeyManager';
import { fetchAccountAchievements } from './services/gw2api';
import { achievementTaskMap } from './data/achievementMap';

const App: React.FC = () => {
  const [checkedTasks, setCheckedTasks] = useLocalStorage<Record<string, boolean>>('checkedTasks', {});
  const [apiKey, setApiKey] = useLocalStorage<string>('gw2ApiKey', '');
  
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const syncWithApi = useCallback(async () => {
    if (!apiKey) {
      return; // Don't attempt to sync without a key
    }

    setIsLoading(true);
    setApiError(null);

    try {
      const accountAchievements = await fetchAccountAchievements(apiKey);
      const newlyCheckedTasks: Record<string, boolean> = {};

      for (const taskId in achievementTaskMap) {
        const mapping = achievementTaskMap[taskId];
        const achievement = accountAchievements[mapping.achievementId];

        if (achievement) {
          let isComplete = false;
          // Check for collection bit completion
          if (mapping.bit !== undefined) {
             if (achievement.bits?.includes(mapping.bit)) {
               isComplete = true;
             }
          } 
          // Check for overall achievement completion
          else if (achievement.done) {
            isComplete = true;
          }
          
          if (isComplete) {
            newlyCheckedTasks[taskId] = true;
          }
        }
      }

      setCheckedTasks(prev => ({ ...prev, ...newlyCheckedTasks }));
      setLastUpdated(new Date());

    } catch (error) {
        if (error instanceof Error) {
            setApiError(error.message);
        } else {
            setApiError('An unknown error occurred during API sync.');
        }
    } finally {
      setIsLoading(false);
    }
  }, [apiKey, setCheckedTasks]);

  // Initial and periodic sync
  useEffect(() => {
    if (apiKey) {
      syncWithApi();
    }
    const interval = setInterval(() => {
        if (apiKey) {
            syncWithApi();
        }
    }, 15 * 60 * 1000); // 15 minutes

    return () => clearInterval(interval);
  }, [apiKey, syncWithApi]);

  const handleToggleTask = useCallback((taskId: string) => {
    setCheckedTasks(prev => ({
      ...prev,
      [taskId]: !prev[taskId]
    }));
  }, [setCheckedTasks]);

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset daily tasks? One-time precursor steps will not be affected.')) {
        const newCheckedState = { ...checkedTasks };
        
        for (const taskId in achievementTaskMap) {
            const mapping = achievementTaskMap[taskId];
            if (mapping.type.startsWith('daily')) {
                delete newCheckedState[taskId];
            }
        }
        
        setCheckedTasks(newCheckedState);
    }
  };

  const allTaskIds = sections.flatMap(s => s.tasks.map(t => t.id));
  const completedCount = Object.values(checkedTasks).filter(Boolean).length;
  const totalCount = allTaskIds.length;
  const progress = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;


  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 font-sans p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <ApiKeyManager apiKey={apiKey} setApiKey={setApiKey} error={apiError} />

        <Header 
            onReset={handleReset} 
            onRefresh={syncWithApi}
            isLoading={isLoading}
            lastUpdated={lastUpdated}
            apiKeyIsSet={!!apiKey}
        />

        <div className="my-6">
          <div className="w-full bg-gray-700 rounded-full h-2.5">
            <div 
              className="bg-cyan-500 h-2.5 rounded-full transition-all duration-500" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-right text-sm text-gray-400 mt-2">{completedCount} / {totalCount} tasks completed</p>
        </div>

        <main className="space-y-8">
          {sections.map(section => (
            <Section 
              key={section.id} 
              section={section} 
              checkedTasks={checkedTasks}
              onToggleTask={handleToggleTask}
            />
          ))}
        </main>
        <footer className="text-center text-gray-500 mt-12 pb-4">
            <p>Built for the Selachimorphia daily grind.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
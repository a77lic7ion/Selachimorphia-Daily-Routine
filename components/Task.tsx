import React from 'react';
import type { TaskItem } from '../types';
import Waypoint from './Waypoint';
import { CheckIcon } from './icons/CheckIcon';

interface TaskProps {
  task: TaskItem;
  headers: string[];
  isChecked: boolean;
  onToggle: () => void;
}

const Task: React.FC<TaskProps> = ({ task, headers, isChecked, onToggle }) => {
  const columnMap: { [key: string]: keyof TaskItem } = {
    'Task': 'task',
    'Step': 'task',
    // FIX: Map the 'Component' header to the 'component' property of a task item instead of 'task' to display the correct data.
    'Component': 'component',
    'Location': 'location',
    'Map / Location': 'location',
    'Waypoint / POI': 'waypoints',
    'Description / Notes': 'description',
    'Currencies Acquired': 'description',
    'Cost / Limit / Description': 'description'
  };

  return (
    <tr className={`transition-colors duration-200 ${isChecked ? 'bg-gray-700/50 text-gray-500' : 'hover:bg-gray-700/30'}`}>
      <td className="pl-4 pr-2 py-4 align-top">
        <div 
          onClick={onToggle} 
          className={`w-6 h-6 rounded flex items-center justify-center cursor-pointer border-2 transition-all duration-200 ${isChecked ? 'bg-cyan-500 border-cyan-400' : 'bg-gray-700 border-gray-600 hover:border-cyan-500'}`}
        >
          {isChecked && <CheckIcon className="w-4 h-4 text-white" />}
        </div>
      </td>
      {headers.map((header) => {
        const key = columnMap[header];
        const cellData = task[key as keyof TaskItem];

        return (
          <td key={header} className={`px-4 py-4 whitespace-normal text-sm align-top ${isChecked ? 'line-through' : ''}`}>
            {key === 'waypoints' && Array.isArray(cellData) ? (
              <div className="flex flex-wrap gap-2">
                {cellData.length > 0 ? cellData.map((wp) => (
                    <Waypoint key={wp.code} code={wp.code} description={wp.description} />
                )) : <span className="text-gray-500">-</span>}
              </div>
            ) : (
              <>{cellData}</>
            )}
          </td>
        );
      })}
    </tr>
  );
};

export default Task;

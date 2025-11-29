
import React from 'react';
import type { SectionData, TaskItem } from '../types';
import Task from './Task';

interface SectionProps {
  section: SectionData;
  checkedTasks: Record<string, boolean>;
  onToggleTask: (taskId: string) => void;
}

const Section: React.FC<SectionProps> = ({ section, checkedTasks, onToggleTask }) => {
  const isOneTimeChecklist = section.id === 'checklist';

  return (
    <section className="bg-gray-800 shadow-lg rounded-lg overflow-hidden">
      <div className="p-5 sm:p-6 border-b border-gray-700">
        <h2 className="text-xl sm:text-2xl font-bold text-cyan-400">{section.title}</h2>
        <p className="mt-2 text-gray-400 text-sm">{section.description}</p>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead className="bg-gray-700/50">
            <tr>
              <th scope="col" className="pl-4 pr-2 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider w-12">
                {isOneTimeChecklist ? 'Done' : 'Daily'}
              </th>
              {section.headers.map((header, index) => (
                <th key={index} scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-gray-800 divide-y divide-gray-700">
            {section.tasks.map((task: TaskItem) => (
              <Task 
                key={task.id} 
                task={task} 
                headers={section.headers}
                isChecked={!!checkedTasks[task.id]}
                onToggle={() => onToggleTask(task.id)}
              />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Section;

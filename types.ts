
export interface Waypoint {
  code: string;
  description: string;
}

export interface TaskItem {
  id: string; 
  task: string | React.ReactNode;
  location: string;
  waypoints: Waypoint[];
  description: string | React.ReactNode;
  // FIX: Add optional 'component' property to support tasks with a 'Component' column.
  component?: string;
}

export interface SectionData {
  id: string;
  title: string;
  description: string;
  tasks: TaskItem[];
  headers: string[];
}

export interface AccountAchievement {
  id: number;
  bits?: number[];
  current?: number;
  max?: number;
  done: boolean;
  repeated?: number;
  unlocked?: boolean;
}
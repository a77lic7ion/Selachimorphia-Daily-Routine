
import React, { useState, useEffect, useMemo } from 'react';

interface EventTimerProps {
  offsetMinutes: number;
  intervalHours: number;
}

const EventTimer: React.FC<EventTimerProps> = ({ offsetMinutes, intervalHours }) => {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timerId = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timerId);
  }, []);

  const { timeLeft, nextEventTime } = useMemo(() => {
    const intervalMinutes = intervalHours * 60;

    const currentUTCMinutes = now.getUTCMinutes() + now.getUTCHours() * 60;
    const timeIntoCurrentInterval = currentUTCMinutes % intervalMinutes;
    
    let minutesUntilNextEvent;
    if (timeIntoCurrentInterval <= offsetMinutes) {
        minutesUntilNextEvent = offsetMinutes - timeIntoCurrentInterval;
    } else {
        minutesUntilNextEvent = intervalMinutes - timeIntoCurrentInterval + offsetMinutes;
    }

    const secondsUntilNextEvent = (minutesUntilNextEvent * 60) - now.getUTCSeconds();
    const msLeft = secondsUntilNextEvent * 1000;
    
    const nextEventDate = new Date(now.getTime() + msLeft);
    const nextEventTimeStr = nextEventDate.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'UTC',
        hour12: false,
      }) + ' UTC';

      return { timeLeft: msLeft, nextEventTime: nextEventTimeStr };
  }, [now, offsetMinutes, intervalHours]);
  
  const formatTime = (ms: number) => {
    if (ms < 0) return '0m 00s';
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}m ${seconds.toString().padStart(2, '0')}s`;
  };

  return (
    <span className="text-xs font-normal text-cyan-400/80 ml-2" title={`Next event at ${nextEventTime}`}>
      (Next in {formatTime(timeLeft)})
    </span>
  );
};

export default EventTimer;

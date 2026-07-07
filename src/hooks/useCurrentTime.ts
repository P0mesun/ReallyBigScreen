import { useEffect, useState } from 'react';

const timeFormatter = new Intl.DateTimeFormat('zh-CN', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false,
  weekday: 'short',
});

export function useCurrentTime() {
  const [currentTime, setCurrentTime] = useState(() => timeFormatter.format(new Date()));

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentTime(timeFormatter.format(new Date()));
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  return currentTime;
}

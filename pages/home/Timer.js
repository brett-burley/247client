import { useEffect } from 'react';
import { useStopwatch } from 'react-timer-hook';

export default function Timer()
{
  const { seconds, minutes, reset } = useStopwatch({ autoStart: true });

  useEffect(() => {
    reset();
  }, [])

  return (
    <div className="text-center">
      <div className="text-3xl">
        <span>{`${seconds + (minutes*60)}`}</span>
        <span className="text-2xl">s</span>
      </div>
    </div>
  );
}


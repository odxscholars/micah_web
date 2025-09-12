import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { HER_NAME, BIRTHDAY, UNLOCK_DATE } from '../core/constants';
import { getQuizCompleted } from '../core/storage';
import PrimaryButton from '../components/PrimaryButton';
import LockedBadge from '../components/LockedBadge';

function isBirthday() {
  const today = new Date();
  return today.toDateString() === BIRTHDAY.toDateString();
}

function getTimeLeft() {
  const diff = UNLOCK_DATE.getTime() - Date.now();
  if (diff <= 0) return null;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  return { days, hours, minutes, seconds };
}

function formatTime(t: { days: number; hours: number; minutes: number; seconds: number }) {
  return `${t.days}d ${t.hours}h ${t.minutes}m ${t.seconds}s`;
}

export default function Home() {
  const completed = getQuizCompleted();
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const id = setInterval(() => {
      const tl = getTimeLeft();
      setTimeLeft(tl);
      if (!tl) clearInterval(id);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const locked = timeLeft !== null;

  return (
    <div className="relative min-h-screen">
      <div className="max-w-md mx-auto p-4 space-y-6 text-center">
        <h1 className="text-3xl font-bold">Hi, {HER_NAME}</h1>
        {isBirthday() && <div className="bg-pink-100 text-pink-700 p-2 rounded-xl">Happy Birthday, {HER_NAME} 🎉</div>}
        <div className="grid gap-4">
          <Link to="/quiz">
            <div className="bg-white rounded-2xl p-6 shadow">
              <h2 className="text-xl mb-2">Love Quiz</h2>
              <PrimaryButton>Start the Love Quiz</PrimaryButton>
            </div>
          </Link>
          <div className="bg-white rounded-2xl p-6 shadow">
            <h2 className="text-xl mb-2 flex items-center justify-center">
              Love Jar
            </h2>
            {completed ? (
              <Link to="/jar">
                <PrimaryButton>Open the Love Jar</PrimaryButton>
              </Link>
            ) : (
              <div className="flex flex-col items-center">
                <PrimaryButton disabled>Locked</PrimaryButton>
                <LockedBadge />
              </div>
            )}
          </div>
        </div>
      </div>
      {locked && timeLeft && (
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex flex-col items-center justify-center z-50 text-center">
          <div className="text-6xl mb-4" aria-hidden>🔒</div>
          <p>Unlocks in {formatTime(timeLeft)}</p>
        </div>
      )}
    </div>
  );
}

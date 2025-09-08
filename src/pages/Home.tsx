import { Link } from 'react-router-dom';
import { HER_NAME, BIRTHDAY } from '../core/constants';
import { getQuizCompleted } from '../core/storage';
import PrimaryButton from '../components/PrimaryButton';
import LockedBadge from '../components/LockedBadge';

function isBirthday() {
  const today = new Date();
  return today.toDateString() === BIRTHDAY.toDateString();
}

export default function Home() {
  const completed = getQuizCompleted();
  return (
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
  );
}

import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PrimaryButton from '../components/PrimaryButton';
import { setQuizCompleted } from '../core/storage';
import { random_celebrate} from '../utils/confetti';

export default function Result() {
  const navigate = useNavigate();
  const { state } = useLocation() as { state: { score: number; total: number } };
  const score = state?.score ?? 0;
  const total = state?.total ?? 0;

  useEffect(() => {
    random_celebrate();
  }, []);

  function openJar() {
    setQuizCompleted(true);
    navigate('/jar');
  }

  return (
    <div className="max-w-md mx-auto p-4 space-y-6 text-center">
      <h2 className="text-2xl font-bold">You did it!</h2>
      <p>Your score: {score} / {total}</p>
      <PrimaryButton onClick={openJar}>Open the Love Jar</PrimaryButton>
    </div>
  );
}

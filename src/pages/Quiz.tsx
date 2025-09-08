import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { questions as base } from '../data/questions';
import ProgressBar from '../components/ProgressBar';
import PrimaryButton from '../components/PrimaryButton';
import { motion } from 'framer-motion';

function shuffle<T>(arr: T[]): T[] {
  return arr
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);
}

export default function Quiz() {
  const navigate = useNavigate();
  const questions = useMemo(() =>
    shuffle(base).map((q) => {
      const opts = shuffle(q.options.map((o, idx) => ({ o, idx })));
      const options = opts.map((o) => o.o);
      const correctIndex = opts.findIndex((o) => o.idx === q.correctIndex);
      return { ...q, options, correctIndex };
    }),
  []);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showHint, setShowHint] = useState(false);

  const question = questions[index];

  useEffect(() => {
    setSelected(null);
    setShowHint(false);
  }, [index]);

  function select(i: number) {
    if (selected !== null) return;
    setSelected(i);
    if (question.options[i] === question.options[question.correctIndex]) {
      setScore((s) => s + 1);
    }
  }

  function next() {
    if (index + 1 >= questions.length) {
      navigate('/result', { state: { score, total: questions.length } });
    } else {
      setIndex((i) => i + 1);
    }
  }

  return (
    <div className="max-w-md mx-auto p-4 space-y-4">
      <ProgressBar current={index + 1} total={questions.length} />
      <h2 className="text-xl font-semibold">{question.text}</h2>
      <div className="grid gap-2">
        {question.options.map((opt, i) => {
          const isCorrect = i === question.correctIndex;

          return (
            <motion.button
              key={i}
              onClick={() => select(i)}
              disabled={selected !== null}
              className={`border rounded-xl p-3 text-left ${
                selected !== null && isCorrect
                  ? 'bg-green-100 border-green-300'
                  : selected === i && !isCorrect
                  ? 'bg-red-100 border-red-300'
                  : 'bg-white'
              }`}
              whileTap={{ scale: 0.97 }}
            >
              {opt}
            </motion.button>
          );
        })}
      </div>
      {question.hint && (
        <button
          className="underline text-sm text-pink-600"
          onClick={() => setShowHint((h) => !h)}
        >
          Hint?
        </button>
      )}
      {showHint && question.hint && (
        <div className="text-sm text-gray-600">{question.hint}</div>
      )}
      <div className="flex justify-end pt-4">
        <PrimaryButton onClick={next} disabled={selected === null}>
          {index + 1 === questions.length ? 'Finish' : 'Next'}
        </PrimaryButton>
      </div>
    </div>
  );
}

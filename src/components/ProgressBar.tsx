interface Props {
  current: number;
  total: number;
}

export default function ProgressBar({ current, total }: Props) {
  const pct = Math.round((current / total) * 100);
  return (
    <div className="w-full h-3 bg-pink-100 rounded-full" aria-label={`Question ${current} of ${total}`}>
      <div className="h-full bg-pink-400 rounded-full transition-all" style={{ width: `${pct}%` }} />
    </div>
  );
}

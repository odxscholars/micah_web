import PrimaryButton from './PrimaryButton';
import styles from './NoteCard.module.css';

interface Props {
  text: string;
  onCopy: () => void;
  onShare: () => void;
}

export default function NoteCard({ text, onCopy, onShare }: Props) {
  return (
    <div className={styles.card}>
      <p className="mb-4">{text}</p>
      <div className="flex gap-2 justify-center">
        <PrimaryButton onClick={onCopy} aria-label="Copy note">Copy</PrimaryButton>
        <PrimaryButton onClick={onShare} aria-label="Share note">Share</PrimaryButton>
      </div>
    </div>
  );
}

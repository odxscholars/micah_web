import { useEffect, useState } from 'react';
import PrimaryButton from '../components/PrimaryButton';
import NoteCard from '../components/NoteCard';
import { loveNotes } from '../data/loveNotes';
import {
  addOpenedNoteId,
  getOpenedNoteIds,
  resetOpenedNotes,
} from '../core/storage';
import {burst,  random_celebrate} from '../utils/confetti';
import { BIRTHDAY, HER_NAME } from '../core/constants';

function isBirthday() {
  return new Date().toDateString() === BIRTHDAY.toDateString();
}

export default function LoveJar() {
  const [opened, setOpened] = useState<number[]>(getOpenedNoteIds());
  const [current, setCurrent] = useState<number | null>(null);

  useEffect(() => {
    if (isBirthday()) random_celebrate();
  }, []);

  const remaining = loveNotes.filter((n) => !opened.includes(n.id));

  function draw() {
    if (!remaining.length) return;
    const note = remaining[0];
    setCurrent(note.id);
    addOpenedNoteId(note.id);
    setOpened((o) => [...o, note.id]);
    burst();
  }

  function handleCopy(text: string) {
    navigator.clipboard.writeText(text);
  }

  async function handleShare(text: string) {
    if (navigator.share) {
      try {
        await navigator.share({ text });
      } catch {
        /* ignore */
      }
    } else {
      handleCopy(text);
      alert('Copied to clipboard');
    }
  }

  function resetJar() {
    if (confirm('Reset all opened notes?')) {
      resetOpenedNotes();
      setOpened([]);
      setCurrent(null);
    }
  }

  const note = loveNotes.find((n) => n.id === current);

  return (
    <div className="max-w-md mx-auto p-4 space-y-4 text-center">
      {isBirthday() && (
        <div className="bg-pink-100 text-pink-700 p-2 rounded-xl">Happy Birthday, {HER_NAME} 🎉</div>
      )}
      <div className="text-6xl">🫙</div>
      <p>Notes left: {remaining.length}</p>
      {note && (
        <NoteCard
          text={note.text}
          onCopy={() => handleCopy(note.text)}
          onShare={() => handleShare(note.text)}
        />
      )}
      {remaining.length > 0 ? (
        <PrimaryButton onClick={draw}>Draw a note</PrimaryButton>
      ) : (
        <div className="space-y-2">
          <p>You’ve opened every note!</p>
          <PrimaryButton onClick={resetJar}>Reset Jar</PrimaryButton>
        </div>
      )}
      {remaining.length < loveNotes.length && remaining.length > 0 && (
        <button
          className="underline text-sm text-gray-500"
          onClick={resetJar}
        >
          Reset Jar
        </button>
      )}
    </div>
  );
}

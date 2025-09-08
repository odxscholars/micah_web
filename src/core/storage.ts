const QUIZ_KEY = 'quizCompleted';
const OPENED_KEY = 'openedNoteIds';

export function getQuizCompleted(): boolean {
  return localStorage.getItem(QUIZ_KEY) === 'true';
}

export function setQuizCompleted(value: boolean): void {
  localStorage.setItem(QUIZ_KEY, value ? 'true' : 'false');
}

export function getOpenedNoteIds(): number[] {
  const raw = localStorage.getItem(OPENED_KEY);
  try {
    return raw ? (JSON.parse(raw) as number[]) : [];
  } catch {
    return [];
  }
}

export function addOpenedNoteId(id: number): void {
  const ids = new Set(getOpenedNoteIds());
  ids.add(id);
  localStorage.setItem(OPENED_KEY, JSON.stringify(Array.from(ids)));
}

export function resetOpenedNotes(): void {
  localStorage.removeItem(OPENED_KEY);
}

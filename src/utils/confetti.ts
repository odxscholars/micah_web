import confetti from 'canvas-confetti';

export function burst() {
  confetti({ spread: 60, particleCount: 50, origin: { y: 0.6 } });
}

export function celebrate() {
  confetti({ spread: 100, particleCount: 120, origin: { y: 0.6 } });
}

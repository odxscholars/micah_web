import confetti from 'canvas-confetti';

export function burst() {
  confetti({ spread: 60, particleCount: 50, origin: { y: 0.6 } });
}

export function celebrate() {
  confetti({ spread: 10000, particleCount: 10000, origin: { y: 0.3 } });
}

export function random_celebrate() {
  const count = 1000;
  const defaults = { origin: { y: 0.4 } };

  function fire(particleRatio: number, opts: object) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio),
    });
  }

  // Sequence of bursts
  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });

  fire(0.2, {
    spread: 60,
  });

  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
  });

  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
  });

  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
}

export interface Question {
  id: number;
  text: string;
  options: string[];
  correctIndex: number;
  hint?: string;
}

export const questions: Question[] = [
  {
    id: 1,
    text: 'Where did we meet for the first time?',
    options: ['At a concert', 'At work', 'At the coffee shop', 'On a trip'],
    correctIndex: 2,
    hint: 'There was latte art involved.',
  },
  {
    id: 2,
    text: 'What is our favorite movie to watch together?',
    options: ['Romantic comedy', 'Sci-fi adventure', 'Mystery thriller', 'Animated classic'],
    correctIndex: 0,
  },
  {
    id: 3,
    text: 'Who said "I love you" first?',
    options: ['You did', 'I did', 'We said it together', 'Still waiting'],
    correctIndex: 1,
    hint: 'It was a little shy.',
  },
  {
    id: 4,
    text: 'Our go-to comfort food is…',
    options: ['Pizza', 'Sushi', 'Ice cream', 'Tacos'],
    correctIndex: 2,
  },
  {
    id: 5,
    text: 'What song reminds us of our road trips?',
    options: ['Country roads', 'Pop anthem', 'Indie vibes', 'Classical'],
    correctIndex: 0,
    hint: 'Take me home…',
  },
  {
    id: 6,
    text: 'Which season do we love the most together?',
    options: ['Spring', 'Summer', 'Autumn', 'Winter'],
    correctIndex: 2,
  },
  {
    id: 7,
    text: 'Our shared hobby is…',
    options: ['Hiking', 'Gaming', 'Cooking', 'Dancing'],
    correctIndex: 2,
  },
  {
    id: 8,
    text: 'The best gift you gave me was…',
    options: ['A handwritten letter', 'A surprise trip', 'A book', 'A playlist'],
    correctIndex: 0,
    hint: 'It came from the heart.',
  },
  {
    id: 9,
    text: 'Our favorite dessert to share is…',
    options: ['Cheesecake', 'Brownies', 'Fruit tart', 'Donuts'],
    correctIndex: 1,
  },
  {
    id: 10,
    text: 'Where do we dream of traveling next?',
    options: ['Paris', 'Tokyo', 'New York', 'A cozy cabin'],
    correctIndex: 0,
  },
];

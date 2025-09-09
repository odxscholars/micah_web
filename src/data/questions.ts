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
    options: ['At a concert', 'At school', 'At a retreat', 'On the bus'],
    correctIndex: 2,
    hint: 'There was rice involved.',
  },
  {
    id: 2,
    text: 'What is our favorite movie to watch together?',
    options: ['Romantic comedy', 'Sci-fi adventure', 'Mystery thriller', 'Horror'],
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
    text: 'Where was our first date?',
    options: ['Parqal', 'MOA', 'BGC Parkway', 'Torre'],
    correctIndex: 2,
    hint: 'We walked a lot that day.',
  },
  {
    id: 5,
    text: 'What song reminds us of our car trips?',
    options: ['Listerine', 'Resume', 'I Like U', 'Open Arms'],
    correctIndex: 0,
    hint: 'Something something road trips and beaches',
  },
  {
    id: 6,
    text: 'What do I love about you?',
    options: ['How pretty you are', 'Your pickleball skills', 'Your ambition and determination to grow', 'Everything'],
    correctIndex: 3,
    hint: 'It’s a lot.',
  },
  {
    id: 7,
    text: 'Our shared hobby is…',
    options: ['Hiking', 'Pickleball', 'Cooking', 'Dancing'],
    correctIndex: 1,
  },
  {
    id: 8,
    text: 'The best gift you gave me was…',
    options: ['A handwritten letter from Vietnam', 'A shirt', 'A notebook', 'A fountain pen'],
    correctIndex: 0,
    hint: 'It was the first one.',
  },
  {
    id: 9,
    text: 'The first thing I cooked for you was…',
    options: ['Fried Chicken', 'Bicol Express', 'Pesto Pasta', 'Sinigang'],
    correctIndex: 1,
  },
  {
    id: 10,
    text: 'Where did we first say I love you?',
    options: ['My house', 'Your house', 'My car', 'SM Bicutan'],
    correctIndex: 0,
    hint: 'Literally right after we fought.',
  },
];

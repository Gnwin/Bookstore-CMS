export function generateId() {
  return Math.random().toString(36).substring(2);
}

export const books = [
  {
    id: generateId(),
    title: 'The Strangers',
    category: 'Action',
    author: 'Smith Bush',
    completion: 50,
  },
  {
    id: generateId(),
    title: 'Unsung Heroes',
    category: 'Thriller',
    author: 'Asa Stone',
    completion: 75,
  },
  {
    id: generateId(),
    title: 'My Roommate',
    category: 'Romance',
    author: 'Jada Harvey',
    completion: 85,
  },
];

export const categories = [];

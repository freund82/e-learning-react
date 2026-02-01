const courses = [
  {
    id: 1,
    category: 'Office',
    author: 'Determined-Poitras',
    title: 'Create an LMS Website with LearnPress',
    length: 2,
    students: 156,
    price: 29.0,
    newPrice: '',
    free: true,
    img: 'courses/courses1.png',
    featured: true,
    levels: 'All',
    lessons: 20,
    instructor: 'Kenny White',
    rating: {
      average: 4.7, // Средний рейтинг (от 1 до 5)
      count: 103, // Количество оценок
      breakdown: {
        // Детализация по звездам (опционально)
        5: 80, // количество 5-звездочных оценок
        4: 20,
        3: 2,
        2: 1,
        1: 0,
      },
    },
  },
  {
    id: 2,
    category: 'Commercial',
    author: 'Determined-Poitras',
    title: 'Design a website with ThimPress',
    length: 2,
    students: 156,
    price: 59,
    newPrice: 49.0,
    free: false,
    img: 'courses/courses2.png',
    featured: true,
    levels: 'Beginner',
    lessons: 20,
    instructor: 'John Doe',
    rating: {
      average: 5, // Средний рейтинг (от 1 до 5)
      count: 100, // Количество оценок
      breakdown: {
        // Детализация по звездам (опционально)
        5: 100, // количество 5-звездочных оценок
        4: 0,
        3: 0,
        2: 0,
        1: 0,
      },
    },
  },
  {
    id: 3,
    category: 'Shop',
    author: 'Determined-Poitras',
    title: 'Create an LMS Website with LearnPress',
    length: 2,
    students: 156,
    price: 29.0,
    newPrice: '',
    free: true,
    img: 'courses/courses3.png',
    featured: true,
    levels: 'Beginner',
    lessons: 20,
    instructor: 'Kenny White',
    rating: {
      average: 3.8, // Средний рейтинг (от 1 до 5)
      count: 108, // Количество оценок
      breakdown: {
        // Детализация по звездам (опционально)
        5: 0, // количество 5-звездочных оценок
        4: 90,
        3: 12,
        2: 4,
        1: 2,
      },
    },
  },
  {
    id: 4,
    category: 'Educate',
    author: 'Determined-Poitras',
    title: 'Create an LMS Website with LearnPress',
    length: 2,
    students: 156,
    price: 29.0,
    newPrice: '',
    free: true,
    img: 'courses/courses4.png',
    featured: true,
    levels: 'All',
    lessons: 20,
    instructor: 'Kenny White',
    rating: {
      average: 3.9, // Средний рейтинг (от 1 до 5)
      count: 338, // Количество оценок
      breakdown: {
        // Детализация по звездам (опционально)
        5: 0, // количество 5-звездочных оценок
        4: 320,
        3: 12,
        2: 4,
        1: 2,
      },
    },
  },
  {
    id: 5,
    category: 'Academy',
    author: 'Determined-Poitras',
    title: 'Create an LMS Website with LearnPress',
    length: 2,
    students: 156,
    price: 29.0,
    newPrice: '',
    free: true,
    img: 'courses/courses5.png',
    featured: true,
    levels: 'Intermediate',
    lessons: 20,
    instructor: 'John Doe',
    rating: {
      average: 4.6, // Средний рейтинг (от 1 до 5)
      count: 898, // Количество оценок
      breakdown: {
        // Детализация по звездам (опционально)
        5: 560, // количество 5-звездочных оценок
        4: 320,
        3: 12,
        2: 4,
        1: 2,
      },
    },
  },
  {
    id: 6,
    category: 'Single family Home',
    author: 'Determined-Poitras',
    title: 'Create an LMS Website with LearnPress',
    length: 2,
    students: 156,
    price: 29.0,
    newPrice: '',
    free: true,
    img: 'courses/courses6.png',
    featured: true,
    levels: 'Expert',
    lessons: 20,
    instructor: 'John Doe',
    rating: {
      average: 3, // Средний рейтинг (от 1 до 5)
      count: 21, // Количество оценок
      breakdown: {
        // Детализация по звездам (опционально)
        5: 0, // количество 5-звездочных оценок
        4: 3,
        3: 12,
        2: 4,
        1: 2,
      },
    },
  },
  {
    id: 7,
    category: 'Studio',
    author: 'Determined-Poitras',
    title: 'Create an LMS Website with LearnPress',
    length: 2,
    students: 156,
    price: 29.0,
    newPrice: '',
    free: true,
    img: 'courses/courses1.png',
    featured: true,
    levels: 'Intermediate',
    lessons: 20,
    instructor: 'John Doe',
    rating: {
      average: 5, // Средний рейтинг (от 1 до 5)
      count: 80, // Количество оценок
      breakdown: {
        // Детализация по звездам (опционально)
        5: 80, // количество 5-звездочных оценок
        4: 0,
        3: 0,
        2: 0,
        1: 0,
      },
    },
  },
  {
    id: 8,
    category: 'University',
    author: 'Determined-Poitras',
    title: 'Create an LMS Website with LearnPress',
    length: 2,
    students: 156,
    price: 29.0,
    newPrice: '',
    free: true,
    img: 'courses/courses2.png',
    featured: true,
    levels: 'All',
    lessons: 20,
    instructor: 'John Doe',
    rating: {
      average: 2.5, // Средний рейтинг (от 1 до 5)
      count: 49, // Количество оценок
      breakdown: {
        // Детализация по звездам (опционально)
        5: 0, // количество 5-звездочных оценок
        4: 5,
        3: 12,
        2: 30,
        1: 2,
      },
    },
  },
  {
    id: 9,
    category: 'Commercial',
    author: 'Determined-Poitras',
    title: 'Create an LMS Website with LearnPress',
    length: 2,
    students: 156,
    price: 29.0,
    newPrice: '',
    free: true,
    img: 'courses/courses3.png',
    featured: true,
    levels: 'Beginner',
    lessons: 20,
    instructor: 'John Doe',
    rating: {
      average: 3.9, // Средний рейтинг (от 1 до 5)
      count: 372, // Количество оценок
      breakdown: {
        // Детализация по звездам (опционально)
        5: 0, // количество 5-звездочных оценок
        4: 350,
        3: 12,
        2: 8,
        1: 2,
      },
    },
  },
  {
    id: 10,
    category: 'Shop',
    author: 'Determined-Poitras',
    title: 'Create an LMS Website with LearnPress',
    length: 2,
    students: 156,
    price: 29.0,
    newPrice: '',
    free: false,
    img: 'courses/courses4.png',
    featured: true,
    levels: 'All',
    lessons: 20,
    instructor: 'John Doe',
    rating: {
      average: 4.5, // Средний рейтинг (от 1 до 5)
      count: 128, // Количество оценок
      breakdown: {
        // Детализация по звездам (опционально)
        5: 80, // количество 5-звездочных оценок
        4: 30,
        3: 12,
        2: 4,
        1: 2,
      },
    },
  },
  {
    id: 11,
    category: 'Educate',
    author: 'Determined-Poitras',
    title: 'Create an LMS Website with LearnPress',
    length: 2,
    students: 156,
    price: 29.0,
    newPrice: '',
    free: true,
    img: 'courses/courses5.png',
    featured: true,
    levels: 'All',
    lessons: 20,
    instructor: 'John Doe',
    rating: {
      average: 4.5, // Средний рейтинг (от 1 до 5)
      count: 113, // Количество оценок
      breakdown: {
        // Детализация по звездам (опционально)
        5: 80, // количество 5-звездочных оценок
        4: 15,
        3: 12,
        2: 4,
        1: 2,
      },
    },
  },
  {
    id: 12,
    category: 'Academy',
    author: 'Determined-Poitras',
    title: 'Create an LMS Website with LearnPress',
    length: 2,
    students: 156,
    price: 29.0,
    newPrice: '',
    free: false,
    img: 'courses/courses6.png',
    featured: true,
    levels: 'All',
    lessons: 20,
    instructor: 'John Doe',
    rating: {
      average: 4.5, // Средний рейтинг (от 1 до 5)
      count: 128, // Количество оценок
      breakdown: {
        // Детализация по звездам (опционально)
        5: 80, // количество 5-звездочных оценок
        4: 30,
        3: 12,
        2: 4,
        1: 2,
      },
    },
  },
];
export default courses;

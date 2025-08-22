export const mockFarms = [
  {
    id: 1,
    name: 'My Rice Paddy',
    location: 'Assam, India',
    coords: [26.1445, 91.7362],
    type: 'Rice Paddy',
    area: '5 acres',
    carbonCredits: 12.5,
  },
  {
    id: 2,
    name: 'My Agroforestry Plot',
    location: 'Maharashtra, India',
    coords: [18.5204, 73.8567],
    type: 'Agroforestry',
    area: '10 acres',
    carbonCredits: 25.0,
  },
];

export const mockUser = {
  name: 'Ravi Kumar',
  email: 'ravi.kumar@example.com',
};

export const mockWeather = {
  location: 'Assam, India',
  temperature: '28°C',
  condition: 'Partly Cloudy',
  icon: '⛅',
  forecast: [
    { day: 'Mon', temp: '29°C', icon: '🌦️' },
    { day: 'Tue', temp: '30°C', icon: '☀️' },
    { day: 'Wed', temp: '27°C', icon: '⛈️' },
  ],
};

export const mockMarketPrices = [
  { id: 1, crop: 'Rice', price: '₹1,800 / quintal', trend: 'up' },
  { id: 2, crop: 'Wheat', price: '₹2,100 / quintal', trend: 'down' },
  { id: 3, crop: 'Mango', price: '₹3,500 / quintal', trend: 'up' },
];

export const mockCarbonCreditsData = [
  { month: 'Jan', credits: 2.5 },
  { month: 'Feb', credits: 3.0 },
  { month: 'Mar', credits: 4.5 },
  { month: 'Apr', credits: 5.0 },
  { month: 'May', credits: 7.2 },
  { month: 'Jun', credits: 8.0 },
];

export const mockForumPosts = [
  {
    id: 1,
    title: 'What is the best fertilizer for rice paddies?',
    author: 'Sunita Devi',
    replies: 5,
    lastReply: '2 hours ago',
  },
  {
    id: 2,
    title: 'How to deal with pests in agroforestry?',
    author: 'Rajesh Singh',
    replies: 8,
    lastReply: '5 hours ago',
  },
  {
    id: 3,
    title: 'Good market price for mangoes in Maharashtra',
    author: 'Amit Patel',
    replies: 2,
    lastReply: '1 day ago',
  },
];

export const mockExpertAdvice = [
  {
    id: 1,
    question: 'How can I improve my soil health?',
    answer: 'You can improve soil health by using organic compost, practicing crop rotation, and avoiding chemical fertilizers. Cover crops also help to protect the soil.',
  },
  {
    id: 2,
    question: 'What is Alternate Wetting and Drying (AWD) for rice?',
    answer: 'AWD is a water-saving technique where you allow the soil to dry out for a few days before re-flooding it. This not only saves water but also reduces methane emissions.',
  },
  {
    id: 3,
    question: 'Which trees are best for agroforestry in a dry climate?',
    answer: 'In dry climates, you should choose drought-resistant trees like Neem, Teak, or certain types of fruit trees like Mango or Pomegranate. It is best to consult with a local expert.',
  },
];

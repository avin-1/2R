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

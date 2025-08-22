export const mockFarms = [
  {
    id: 1,
    name: 'My Rice Paddy',
    location: 'Assam, India',
    coords: [26.1445, 91.7362],
    type: 'Rice Paddy',
    area: '5 acres',
    carbonCredits: 12.5,
    creditHistory: [
      { month: 'Jan', credits: 2.5 },
      { month: 'Feb', credits: 3.0 },
      { month: 'Mar', credits: 4.5 },
      { month: 'Apr', credits: 5.0 },
      { month: 'May', credits: 7.5 },
      { month: 'Jun', credits: 12.5 },
    ],
  },
  {
    id: 2,
    name: 'My Agroforestry Plot',
    location: 'Maharashtra, India',
    coords: [18.5204, 73.8567],
    type: 'Agroforestry',
    area: '10 acres',
    carbonCredits: 25.0,
    creditHistory: [
      { month: 'Jan', credits: 5.0 },
      { month: 'Feb', credits: 8.0 },
      { month: 'Mar', credits: 12.0 },
      { month: 'Apr', credits: 15.0 },
      { month: 'May', credits: 20.0 },
      { month: 'Jun', credits: 25.0 },
    ],
  },
];

export const mockUser = {
  name: 'Ravi Kumar',
  email: 'ravi.kumar@example.com',
};

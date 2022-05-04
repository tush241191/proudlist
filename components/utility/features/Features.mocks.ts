import { IFeatures } from './Features';

const base: IFeatures = {
  id: 1,
  title: 'Have Your personal, easy-to-fill-in path to Your Goals',
  content: {
    data: [
      '“A Harvard Business Study found that the 3% of graduates from their MBA who had their goals written down, ended up earning ten times as much as the other 97% put together, just ten years after graduation...”',
    ],
    author: '- FORBES -',
  },
  quote: {
    data: [
      '“Reaching the goal is not success; success is moving toward the goal and experiencing growth.”',
    ],
    author: '- BOB PROCTOR -',
  },
  button: 'Try for FREE',
  image: '/assets/1.jpg',
  position: 'right',
  bgColor: 'green',
};

export const mockFeaturesProps = {
  base,
};

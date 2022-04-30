import { v4 as uuid } from 'uuid';

import img_tshirt1 from '../../assets/images/tshirt_1.jpg';
import img_tshirt2 from '../../assets/images/tshirt_2.webp';
import img_tshirt3 from '../../assets/images/tshirt_3.jpg';
import img_tshirt4 from '../../assets/images/tshirt_4.jpg';
import img_tshirt5 from '../../assets/images/tshirt_5.webp';
import img_tshirt6 from '../../assets/images/tshirt_6.jpg';
import img_tshirt7 from '../../assets/images/tshirt_7.jpg';

let initialState = [
  {
    id: uuid(),
    title: 'More Cowbell',
    price: 39.9,
    image: img_tshirt5,
  },
  { id: uuid(), title: 'Talking to Dog', price: 44.9, image: img_tshirt1 },
  { id: uuid(), title: 'I need Beer', price: 49.9, image: img_tshirt2 },
  { id: uuid(), title: 'Horrible Idea', price: 54.9, image: img_tshirt3 },
  { id: uuid(), title: 'Expert Advice', price: 59.9, image: img_tshirt4 },
  { id: uuid(), title: 'Silent Grammar', price: 59.9, image: img_tshirt6 },
  { id: uuid(), title: 'I`m hiding', price: 59.9, image: img_tshirt7 },
];

const itemsReducer = (state = initialState, action) => {
  // leave it empty in case of future functionalities
  return state;
};

export const shirtImages = [img_tshirt1, img_tshirt2, img_tshirt3, img_tshirt4];

export default itemsReducer;

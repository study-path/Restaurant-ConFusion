import { DishModel } from './dish-model';

export const DISHES: DishModel[] = [
  {
    id: '0',
    name: 'Uthappizza',
    image: 'images/uthappizza.png',
    category: 'mains',
    featured: true,
    label: 'Hot',
    price: '4.99',
    description:
      'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
    comments: [
      {
        rating: 5,
        comment: 'Imagine all the eatables, living in conFusion!',
        author: 'John Lemon',
        date: '2012-10-16T17:57:28.556094Z',
      },
      {
        rating: 4,
        comment:
          'Sends anyone to heaven, I wish I could get my mother-in-law to eat it!',
        author: 'Paul McVites',
        date: '2014-09-05T17:57:28.556094Z',
      },
      {
        rating: 3,
        comment: 'Eat it, just eat it!',
        author: 'Michael Jaikishan',
        date: '2015-02-13T17:57:28.556094Z',
      },
      {
        rating: 4,
        comment: 'Ultimate, Reaching for the stars!',
        author: 'Ringo Starry',
        date: '2013-12-02T17:57:28.556094Z',
      },
      {
        rating: 2,
        comment: "It's your birthday, we're gonna party!",
        author: '25 Cent',
        date: '2011-12-02T17:57:28.556094Z',
      },
      {
        author: 'Lili',
        rating: 3,
        comment: 'It is a great pizza.',
        date: 'Tue Aug 25 2020',
      },
      {
        author: 'Greck',
        rating: 5,
        comment: 'Port port port',
        date: 'Tue Aug 25 2020',
      },
      {
        author: 'fgfdghf',
        rating: 2,
        comment: 'dddddddddddddddddddd',
        date: 'Tue Aug 25 2020',
      },
    ],
  },
  {
    id: '1',
    name: 'Zucchipakoda',
    image: 'images/zucchipakoda.png',
    category: 'appetizer',
    featured: false,
    label: '',
    price: '1.99',
    description:
      'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce',
    comments: [
      {
        rating: 5,
        comment: 'Imagine all the eatables, living in conFusion!',
        author: 'John Lemon',
        date: '2012-10-16T17:57:28.556094Z',
      },
      {
        rating: 4,
        comment:
          'Sends anyone to heaven, I wish I could get my mother-in-law to eat it!',
        author: 'Paul McVites',
        date: '2014-09-05T17:57:28.556094Z',
      },
      {
        rating: 3,
        comment: 'Eat it, just eat it!',
        author: 'Michael Jaikishan',
        date: '2015-02-13T17:57:28.556094Z',
      },
      {
        rating: 4,
        comment: 'Ultimate, Reaching for the stars!',
        author: 'Ringo Starry',
        date: '2013-12-02T17:57:28.556094Z',
      },
      {
        rating: 2,
        comment: "It's your birthday, we're gonna party!",
        author: '25 Cent',
        date: '2011-12-02T17:57:28.556094Z',
      },
    ],
  },
  {
    id: '2',
    name: 'Vadonut',
    image: 'images/vadonut.png',
    category: 'appetizer',
    featured: false,
    label: 'New',
    price: '1.99',
    description:
      'A quintessential ConFusion experience, is it a vada or is it a donut?',
    comments: [
      {
        rating: 5,
        comment: 'Imagine all the eatables, living in conFusion!',
        author: 'John Lemon',
        date: '2012-10-16T17:57:28.556094Z',
      },
      {
        rating: 4,
        comment:
          'Sends anyone to heaven, I wish I could get my mother-in-law to eat it!',
        author: 'Paul McVites',
        date: '2014-09-05T17:57:28.556094Z',
      },
      {
        rating: 3,
        comment: 'Eat it, just eat it!',
        author: 'Michael Jaikishan',
        date: '2015-02-13T17:57:28.556094Z',
      },
      {
        rating: 4,
        comment: 'Ultimate, Reaching for the stars!',
        author: 'Ringo Starry',
        date: '2013-12-02T17:57:28.556094Z',
      },
      {
        rating: 2,
        comment: "It's your birthday, we're gonna party!",
        author: '25 Cent',
        date: '2011-12-02T17:57:28.556094Z',
      },
      {
        author: 'lili',
        rating: 2,
        comment: 'iiiiiiiiiiiiiiiiiiiiiiiiiiii',
        date: 'Tue Aug 25 2020',
      },
    ],
  },
  {
    id: '3',
    name: 'ElaiCheese Cake',
    image: 'images/elaicheesecake.png',
    category: 'dessert',
    featured: false,
    label: '',
    price: '2.99',
    description:
      'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms',
    comments: [
      {
        rating: 5,
        comment: 'Imagine all the eatables, living in conFusion!',
        author: 'John Lemon',
        date: '2012-10-16T17:57:28.556094Z',
      },
      {
        rating: 4,
        comment:
          'Sends anyone to heaven, I wish I could get my mother-in-law to eat it!',
        author: 'Paul McVites',
        date: '2014-09-05T17:57:28.556094Z',
      },
      {
        rating: 3,
        comment: 'Eat it, just eat it!',
        author: 'Michael Jaikishan',
        date: '2015-02-13T17:57:28.556094Z',
      },
      {
        rating: 4,
        comment: 'Ultimate, Reaching for the stars!',
        author: 'Ringo Starry',
        date: '2013-12-02T17:57:28.556094Z',
      },
      {
        rating: 2,
        comment: "It's your birthday, we're gonna party!",
        author: '25 Cent',
        date: '2011-12-02T17:57:28.556094Z',
      },
    ],
  },
  {
    id: '4',
    name: 'Buddha-bowls',
    image: 'images/buddha-bowls.png',
    category: 'vegetarian',
    featured: true,
    label: 'Warm',
    price: '8.99',
    description:
      'it’s ridiculously healthy – loaded with four kinds of vegetables, fiber- and protein-rich chickpeas, and a maple-tahini sauce that’s so good you’ll want to put it on everything',
    comments: [
      {
        rating: 5,
        comment: 'It was amazing. Love your site. Thanks!',
        author: 'Alice',
        date: '2012-10-16T17:57:28.556094Z',
      },
      {
        rating: 4,
        comment: 'This looks so hearty and satisfying!',
        author: 'Marissa McVites',
        date: '2014-09-05T17:57:28.556094Z',
      },
      {
        rating: 3,
        comment: 'Eat it, just eat it!',
        author: 'Michael Jaikishan',
        date: '2015-02-13T17:57:28.556094Z',
      },
      {
        rating: 5,
        comment:
          'This is pretty much all my favorites into one bowl! Fantastic recipe!',
        author: 'Kristina ',
        date: '2013-12-02T17:57:28.556094Z',
      },
      {
        rating: 2,
        comment: "It's your birthday, we're gonna party!",
        author: '25 Cent',
        date: '2011-12-02T17:57:28.556094Z',
      },
      {
        author: 'Rebecca',
        rating: 5,
        comment:
          'I pinned this one, I have to try it soon! I just adore chickpeas',
        date: 'Tue Aug 25 2020',
      },
      {
        author: 'Greck',
        rating: 5,
        comment: 'Port port port',
        date: 'Tue Aug 25 2020',
      },
      {
        author: 'fgfdghf',
        rating: 2,
        comment: 'dddddddddddddddddddd',
        date: 'Tue Aug 25 2020',
      },
    ],
  },
  {
    id: '5',
    name: 'Egg-salad',
    image: 'images/egg-salad.png',
    category: 'vegetarian',
    featured: true,
    label: 'Warm',
    price: '6.99',
    description:
      "This is a wonderful-tasting egg salad sandwich that you will definitely devour. It's really good on rye.",
    comments: [
      {
        rating: 5,
        comment: 'It was amazing. Love your site. Thanks!',
        author: 'Alice',
        date: '2012-10-16T17:57:28.556094Z',
      },
      {
        rating: 4,
        comment: 'Perfect',
        author: 'Melinda Prewitt Scurlock',
        date: '2014-09-05T17:57:28.556094Z',
      },
      {
        rating: 3,
        comment: 'Eat it, just eat it!',
        author: 'Michael Jaikishan',
        date: '2015-02-13T17:57:28.556094Z',
      },
      {
        rating: 5,
        comment:
          'So good, everyone in the family ate it, except the picky toddler.',
        author: 'Kristina ',
        date: '2013-12-02T17:57:28.556094Z',
      },
      {
        rating: 2,
        comment: "It's your birthday, we're gonna party!",
        author: '25 Cent',
        date: '2011-12-02T17:57:28.556094Z',
      },
      {
        author: 'Rebecca',
        rating: 5,
        comment:
          'I pinned this one, I have to try it soon! I just adore chickpeas',
        date: 'Tue Aug 25 2020',
      },
      {
        author: 'Greck',
        rating: 5,
        comment: 'Port port port',
        date: 'Tue Aug 25 2020',
      },
      {
        author: 'fgfdghf',
        rating: 2,
        comment: 'dddddddddddddddddddd',
        date: 'Tue Aug 25 2020',
      },
      {
        author: 'ttttttt',
        rating: 3,
        comment:
          'tttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt',
        date: 'Thu Aug 27 2020',
      },
    ],
  },
];

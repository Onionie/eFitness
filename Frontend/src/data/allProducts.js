const allProducts = [
  {
    _id: '1',
    name: 'Pro-Tec Athletics 3D Wrist Sleeve',
    image: '/images/accPage/acc1.jpg',
    description:
      'The 3D Flat Wrist Support is recommended for minor to moderate wrist/thumb sprains. Made from Flat Stitching Technology. This allows customized stitching to achieve 3D shaping of the fabric for an optimum fit. 3D Fit contours to wrist to provide compression and support.',
    brand: 'Pro-Tec',
    category: 'accessories',
    price: 14.95,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {
    _id: '2',
    name: 'Wrist Wraps',
    image: '/images/accPage/acc2.jpg',
    description:
      'Maintain control during monster lifts with our Bodybuilding.com Wrist Wraps. These solidly constructed wraps fit snugly around the wrists to provide extra support during even the heaviest lifts. Made from a blend of rubber and cotton, these wraps offer the perfect combination and stretch and support. ',
    brand: 'Bodybuilding',
    category: 'accessories',
    price: 10.99,
    countInStock: 7,
    rating: 4.0,
    numReviews: 8,
  },
  {
    _id: '3',
    name: 'Bear Komplex Lifting Straps',
    image: '/images/accPage/acc3.jpg',
    description:
      'Bear KompleX Lifting Straps are designed for optimum performance. Extra stitching on the seams to withstand extra weight. Superior construction ensures that they are not flimsy and won’t roll on when under load.',
    brand: 'Bear Komplex',
    category: 'accessories',
    price: 12.99,
    countInStock: 5,
    rating: 3,
    numReviews: 12,
  },
  {
    _id: '4',
    name: 'Neosprene Knee Sleeves',
    image: '/images/accPage/acc4.jpg',
    description:
      'Bear KompleX compression knee sleeves provide the perfect recipe for optimal fitness and support in your daily workouts. Knee sleeves help stimulate your muscles with warmth and stability while performing the most challenging of workouts.',
    brand: 'Bear Komplex',
    category: 'accessories',
    price: 49.99,
    countInStock: 11,
    rating: 5,
    numReviews: 12,
  },
  {
    _id: '5',
    name: 'Elbow Sleeves',
    image: '/images/accPage/acc5.jpg',
    description:
      'Bear KompleX compression elbow sleeves provide the perfect recipe for optimal fitness and support in your daily workouts. Elbow sleeves help stimulate your muscles with warmth and stability while performing the most challenging of workouts. ',
    brand: 'Bear Komplex',
    category: 'accessories',
    price: 39.99,
    countInStock: 7,
    rating: 3.5,
    numReviews: 10,
  },
  {
    _id: '6',
    name: 'Super Air Face Mask',
    image: '/images/accPage/acc6.jpg',
    description:
      'One of a kind, specialized mask using proprietary air-flow technology to increase breathability to allow the wearer added comfort during periods of exertion and/or long wear.',
    brand: 'Bodybuilding',
    category: 'accessories',
    price: 11.99,
    countInStock: 0,
    rating: 4,
    numReviews: 12,
  },
  {
    id: '7',
    name: '150-Pound Dumbbell Set With A-Frame',
    image: '/images/equipmentPage/equipment1.jpg',
    description:
      'Set includes 5 pairs of dumbbells for all skill and strength levels. Rack made from steel with a black powder coat and rubber inserts to prevent scratches. The durable, versatile dumbbells are made from ASTM A48 Class 20 grey iron joined together by a solid 1018 cold rolled steel chrome handle.',
    brand: 'Epic Fitness',
    category: 'equipment',
    price: 359.99,
    countInStock: 12,
    rating: 4.7,
    numReviews: 13,
  },
  {
    _id: '8',
    name: 'Rubber Hex Coated Dumbbells',
    image: '/images/equipmentPage/equipment2.jpg',
    description:
      'Contoured ergonomic handles. 6-sided hex design for stability. Protective and premium PVC coating for durability. No odor',
    brand: 'Epic Fitness',
    category: 'equipment',
    price: 35.99,
    countInStock: 8,
    rating: 4.2,
    numReviews: 9,
  },
  {
    _id: '9',
    name: 'Power Rack Weight Station',
    image: '/images/equipmentPage/equipment3.jpg',
    description:
      'The full functional power rack is designed with a small footprint in mind to tackle the big workouts of the day. Combine the Sunny Health and Fitness bars and bumper plates and perform workouts to target and strengthen muscles across your body. ',
    brand: 'Sunny Health & Fitness',
    category: 'equipment',
    price: 349.99,
    countInStock: 6,
    rating: 3.8,
    numReviews: 11,
  },
  {
    _id: '10',
    name: 'Magnetic Indoor Cycling Bike',
    image: '/images/equipmentPage/equipment4.jpg',
    description:
      'Push yourself to become stronger, faster, and better with the SF-B1805 Magnetic Indoor Cycling Bike. Experience a high intensity cardio workout with the cycling bicycle that supports multi-hand grips and high-interval training. ',
    brand: 'Sunny Health & Fitness',
    category: 'equipment',
    price: 599.99,
    countInStock: 13,
    rating: 3.5,
    numReviews: 6,
  },
  {
    _id: '11',
    name: 'Weight Bench With Leg Trainer',
    image: '/images/equipmentPage/equipment5.jpg',
    description:
      'Bear KompleX compression elbow sleeves provide the perfect recipe for optimal fitness and support in your daily workouts. Elbow sleeves help stimulate your muscles with warmth and stability while performing the most challenging of workouts. ',
    brand: 'Sunny Health & Fitness',
    category: 'equipment',
    price: 109.99,
    countInStock: 9,
    rating: 4.0,
    numReviews: 11,
  },
  {
    _id: '12',
    name: '750R Rowing Machine',
    image: '/images/equipmentPage/equipment6.jpg',
    description:
      'Experience the full-body workout that only a rower can deliver with the ProForm® 750R Rower. Train with a combination of cardio and strength to burn calories and increase muscle. 20 on-board workouts and 24 digital levels of resistance make this rower the perfect machine for any fitness level. ',
    brand: 'ProForm',
    category: 'equipment',
    price: 699.99,
    countInStock: 0,
    rating: 4,
    numReviews: 8,
  },
  {
    _id: '13',
    name: 'Gold Standard Whey Protein',
    image: '/images/suppPage/supp1.jpg',
    description:
      'Each serving of the world’s best-selling whey protein powder provides 24 grams of high-quality whey protein primarily from Whey Protein Isolate, which has had excess carbohydrates, fat, and lactose ‘isolated’ out using sophisticated filtering technologies',
    brand: 'Optimum Nutrition',
    category: 'supplement',
    price: 34.99,
    countInStock: 12,
    rating: 4.5,
    numReviews: 14,
  },
  {
    _id: '14',
    name: 'Signature Whey Protein Powder',
    image: '/images/suppPage/supp2.jpg',
    description:
      'Signature 100% Whey Protein is perfect first thing in the morning, between meals, and especially after your workout. It’s so delicious it’ll can slay your sweet tooth without wrecking your macros. It’s a fantastic combination of value and quality. While many products are primarily whey protein concentrate, Signature 100% Whey has an impressive profile of 13 grams of isolate and 6 grams each of hydrolysate and concentrate',
    brand: 'Bodybuilding',
    category: 'supplement',
    price: 52.99,
    countInStock: 9,
    rating: 4.3,
    numReviews: 9,
  },
  {
    _id: '15',
    name: 'Evlution Shred Pre Workout',
    image: '/images/suppPage/supp3.jpg',
    description:
      'ENGN SHRED’s revolutionary Fat Burning Pre-Workout formula is engineered to be the most complete, fully dosed thermogenic fuel that burns fat and boosts metabolism while accelerating your performance, energy, power and focus. ',
    brand: 'Evlution Nutrition',
    category: 'supplement',
    price: 36.99,
    countInStock: 6,
    rating: 3.8,
    numReviews: 11,
  },
  {
    _id: '16',
    name: 'Gold Standard Pre Workout',
    image: '/images/suppPage/supp4.jpg',
    description:
      'ON’s Gold Standard Pre-Workout unleashes amplified energy, focus, and supports enhanced endurance to help you reach the pinnacle of your game, crush your next set, get that last rep, and achieve some true gains.',
    brand: 'Optimum Nutrition',
    category: 'supplement',
    price: 29.99,
    countInStock: 14,
    rating: 3.8,
    numReviews: 9,
  },
  {
    _id: '17',
    name: 'Evlution Weight-Loss Support',
    image: '/images/suppPage/supp5.jpg',
    description:
      'EANMODE combines the 5 leading stimulant-free ingredients for weight loss into one full-spectrum formula. LEANMODE’s fully dosed ingredients support all the areas critical for effective weight loss including release of stored fat, fat burning, appetite support, and metabolism support.',
    brand: 'Evlution Nutrition',
    category: 'supplement',
    price: 24.99,
    countInStock: 6,
    rating: 5.0,
    numReviews: 10,
  },
  {
    _id: '18',
    name: 'SuperHD Fat Burner',
    image: '/images/suppPage/supp6.jpg',
    description:
      'Ramp up your weight loss results with the high definition formula to support energy, metabolism, and laser focus. This legendary fat burner feels just as good as it looks.',
    brand: 'Cellucor',
    category: 'supplement',
    price: 29.99,
    countInStock: 1,
    rating: 4,
    numReviews: 7,
  },
];

export default allProducts;

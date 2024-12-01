import { Category, Ingredient, MenuItem } from "./Recipe";

export const CATEGORY_EMOJIS = {
  Protein: "🌭",
  Bread: "🍞",
  Sauce: "💦",
  Spread: "🍫",
  Topping: "🧀",
};

export const FOOD_TYPE_EMOJIS = {
  "Hot Dog": "🌭",
  Dessert: "🍨",
  Taco: "🌮",
};

export const INGREDIENTS: Ingredient[] = [
  {
    id: 1,
    name: "Hot Dog",
    category: "Protein" as Category,
    calories: 180,
    protein: 7,
    fat: 16,
  },
  {
    id: 2,
    name: "Hot Dog Bun",
    category: "Bread" as Category,
    calories: 110,
    protein: 3,
    fat: 1.5,
  },
  {
    id: 3,
    name: "Nutella",
    category: "Spread" as Category,
    calories: 200,
    protein: 2,
    fat: 12,
  },
  {
    id: 4,
    name: "Cheese",
    category: "Topping" as Category,
    calories: 110,
    protein: 7,
    fat: 9,
  },
  {
    id: 5,
    name: "Mustard",
    category: "Sauce" as Category,
    calories: 15,
    protein: 0,
    fat: 0,
  },
  {
    id: 6,
    name: "Ketchup",
    category: "Sauce" as Category,
    calories: 20,
    protein: 0,
    fat: 0,
  },
  {
    id: 7,
    name: "Ice Cream",
    category: "Topping" as Category,
    calories: 140,
    protein: 2,
    fat: 7,
  },
  {
    id: 8,
    name: "Nuts",
    category: "Topping" as Category,
    calories: 160,
    protein: 5,
    fat: 13,
  },
  {
    id: 9,
    name: "Tortilla",
    category: "Bread" as Category,
    calories: 120,
    protein: 3,
    fat: 2,
  },
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 1,
    name: "Cartman's Original",
    restaurant: "DikinBaus Hot Dogs",
    type: "Hot Dog",
    foodEmojis: "🌭 💦 😩",
    ingredients: ["Hot Dog", "Hot Dog Bun", "Ketchup", "Mustard"],
    nutrition: { calories: 325, protein: 10, fat: 17.5, carbs: 32 },
    description:
      'The signature DikinBaus dog that made Cartman a "self-made" entrepreneur. Long, thick, and juicy!',
  },
  {
    id: 2,
    name: "The Token Hot Dog",
    restaurant: "DikinBaus Hot Dogs",
    type: "Hot Dog",
    foodEmojis: "🍆 🎯 🤤",
    ingredients: ["Hot Dog", "Hot Dog Bun", "Nutella", "Cheese"],
    nutrition: { calories: 520, protein: 12, fat: 29, carbs: 45 },
    description:
      "Our premium offering - bigger, thicker, and more satisfying than the rest. Size matters!",
  },
  {
    id: 3,
    name: "Kenny's Value Menu Dog",
    restaurant: "DikinBaus Hot Dogs",
    type: "Hot Dog",
    foodEmojis: "🌭 📏 😳",
    ingredients: ["Hot Dog", "Hot Dog Bun", "Mustard"],
    nutrition: { calories: 305, protein: 10, fat: 17.5, carbs: 32 },
    description:
      "Not the biggest dog in town, but it gets the job done. Perfect for a quickie!",
  },
  {
    id: 4,
    name: "The PC Principal",
    restaurant: "DikinBaus Hot Dogs",
    type: "Hot Dog",
    foodEmojis: "🌭 💪 🔥",
    ingredients: ["Hot Dog", "Hot Dog Bun", "Cheese", "Ketchup"],
    nutrition: { calories: 420, protein: 11, fat: 22, carbs: 35 },
    description:
      "Aggressively satisfying. Will dominate your taste buds without consent!",
  },
  {
    id: 5,
    name: "The Nutella Dominatrix",
    restaurant: "DikinBaus Hot Dogs",
    type: "Hot Dog",
    foodEmojis: "🍫 ⛓️ 🥵",
    ingredients: ["Hot Dog", "Hot Dog Bun", "Nutella", "Cheese", "Mustard"],
    nutrition: { calories: 580, protein: 14, fat: 35, carbs: 48 },
    description:
      "A hot dog wrapped in a sinful combination of sweet Nutella and spicy mustard. It hurts so good!",
  },
  {
    id: 6,
    name: "The Double Stuffed",
    restaurant: "DikinBaus Hot Dogs",
    type: "Hot Dog",
    foodEmojis: "🌭 🍫 💥",
    ingredients: ["Hot Dog", "Hot Dog Bun", "Nutella", "Cheese", "Ketchup"],
    nutrition: { calories: 650, protein: 16, fat: 38, carbs: 52 },
    description:
      "Two of our signature dogs smothered in Nutella and melted cheese. For when one just is not enough!",
  },
  {
    id: 7,
    name: "Chef's Sopladoras",
    restaurant: "DikinBaus Hot Dogs",
    type: "Dessert",
    foodEmojis: "🍨 🌶️ 🥵",
    ingredients: ["Ice Cream", "Churro Nuts", "Nutella"],
    nutrition: { calories: 500, protein: 9, fat: 32, carbs: 48 },
    description:
      "Our signature dessert that'll blow your mind! Creamy ice cream drizzled with warm Nutella and spicy churro nuts. It's a mouth fiesta!",
  },
  {
    id: 8,
    name: "The Mexican Standoff",
    restaurant: "DikinBaus Hot Dogs",
    type: "Dessert",
    foodEmojis: "🍫 🥜 💃",
    ingredients: ["Ice Cream", "Nutella", "Churro Nuts"],
    nutrition: { calories: 480, protein: 8, fat: 30, carbs: 45 },
    description:
      "Three intense flavors facing off in your mouth! Sweet, spicy, and nutty - there are no losers in this delicious showdown!",
  },
  {
    id: 9,
    name: "The Hot Dog Taco",
    restaurant: "DikinBaus Hot Dogs",
    type: "Taco",
    foodEmojis: "🌮 🌭 🔥",
    ingredients: ["Hot Dog", "Tortilla", "Cheese", "Ketchup"],
    nutrition: { calories: 430, protein: 13, fat: 24, carbs: 38 },
    description:
      "Our signature fusion! A thick, juicy dog wrapped in a warm tortilla. The best of both worlds!",
  },
  {
    id: 10,
    name: "The South Park Special",
    restaurant: "DikinBaus Hot Dogs",
    type: "Taco",
    foodEmojis: "🌮 💦 🥵",
    ingredients: ["Hot Dog", "Tortilla", "Cheese", "Mustard", "Ketchup"],
    nutrition: { calories: 465, protein: 15, fat: 26, carbs: 42 },
    description:
      "A spicy combination that'll make you say 'Oh my God, they killed it!' Every bite is a flavor explosion!",
  },
  {
    id: 11,
    name: "The Chocolate Lover",
    restaurant: "DikinBaus Hot Dogs",
    type: "Taco",
    foodEmojis: "🌮 🍫 😈",
    ingredients: ["Hot Dog", "Tortilla", "Nutella", "Cheese"],
    nutrition: { calories: 510, protein: 14, fat: 32, carbs: 44 },
    description:
      "Sweet meets meat in this naughty creation. Wrapped in a warm embrace of melted chocolate and cheese!",
  },
  {
    id: 12,
    name: "The Randy Marsh",
    restaurant: "DikinBaus Hot Dogs",
    type: "Taco",
    foodEmojis: "🌮 🎸 💥",
    ingredients: ["Hot Dog", "Tortilla", "Cheese", "Mustard", "Nutella"],
    nutrition: { calories: 525, protein: 15, fat: 34, carbs: 45 },
    description:
      "It's crazy, it's wild, it's probably illegal in some states. Just like Randy, it'll rock your world!",
  },
  {
    id: 13,
    name: "Churro Dream",
    restaurant: "DikinBaus Hot Dogs",
    type: "Dessert",
    foodEmojis: "🍨 ✨ 🤤",
    ingredients: ["Ice Cream", "Churro Nuts", "Nutella"],
    nutrition: { calories: 460, protein: 7, fat: 28, carbs: 42 },
    description:
      "A dreamy swirl of ice cream hugged by warm churro nuts. Sweet dreams are made of this!",
  },
  {
    id: 14,
    name: "The Butter's Delight",
    restaurant: "DikinBaus Hot Dogs",
    type: "Dessert",
    foodEmojis: "🍨 🍫 🎪",
    ingredients: ["Ice Cream", "Nutella", "Churro Nuts"],
    nutrition: { calories: 440, protein: 6, fat: 26, carbs: 40 },
    description:
      "Oh hamburgers, this is good! A innocent-looking dessert that'll make you question your morals!",
  },
  {
    id: 15,
    name: "The Timmy Special",
    restaurant: "DikinBaus Hot Dogs",
    type: "Hot Dog",
    foodEmojis: "🌭 ⚡️ 🎸",
    ingredients: ["Hot Dog", "Hot Dog Bun", "Cheese", "Ketchup", "Mustard"],
    nutrition: { calories: 435, protein: 17, fat: 26.5, carbs: 38 },
    description:
      "TIMMEH! A thunderously good combination that'll have you screaming for more!",
  },
  {
    id: 16,
    name: "Mr. Hankey's Surprise",
    restaurant: "DikinBaus Hot Dogs",
    type: "Dessert",
    foodEmojis: "🍫 🎄 💝",
    ingredients: ["Ice Cream", "Nutella", "Nuts", "Hot Dog"],
    nutrition: { calories: 680, protein: 16, fat: 42, carbs: 58 },
    description:
      "Howdy ho! A swirly treat that looks suspicious but tastes delightful!",
  },
  {
    id: 17,
    name: "The Garrison Experiment",
    restaurant: "DikinBaus Hot Dogs",
    type: "Taco",
    foodEmojis: "🌮 🧪 🤯",
    ingredients: ["Hot Dog", "Tortilla", "Cheese", "Nutella", "Ketchup"],
    nutrition: { calories: 545, protein: 15, fat: 35, carbs: 46 },
    description:
      "A controversial fusion that's changed more times than Mr. Garrison's... well, you know.",
  },
  {
    id: 18,
    name: "The Towelie Haze",
    restaurant: "DikinBaus Hot Dogs",
    type: "Hot Dog",
    foodEmojis: "🌭 🌿 😵‍💫",
    ingredients: ["Hot Dog", "Hot Dog Bun", "Cheese", "Nutella", "Mustard"],
    nutrition: { calories: 590, protein: 18, fat: 38, carbs: 44 },
    description:
      "Don't forget to bring a napkin! This combination might not make sense now, but trust us...",
  },
  {
    id: 19,
    name: "Chef's Chocolate Salty Balls",
    restaurant: "DikinBaus Hot Dogs",
    type: "Dessert",
    foodEmojis: "🍫 🥜 🎵",
    ingredients: ["Ice Cream", "Nuts", "Nutella"],
    nutrition: { calories: 500, protein: 12, fat: 32, carbs: 46 },
    description:
      "Put 'em in your mouth and suck 'em! Chef's legendary recipe finally revealed!",
  },
  {
    id: 20,
    name: "The ManBearPig",
    restaurant: "DikinBaus Hot Dogs",
    type: "Hot Dog",
    foodEmojis: "🐗 🐻 🐷",
    ingredients: [
      "Hot Dog",
      "Hot Dog Bun",
      "Cheese",
      "Ketchup",
      "Mustard",
      "Nutella",
    ],
    nutrition: { calories: 665, protein: 22, fat: 42, carbs: 52 },
    description:
      "I'm super cereal! This beast is half man, half bear, and half pig... and 100% delicious!",
  },
  {
    id: 21,
    name: "Kenny's Poverty Special",
    restaurant: "DikinBaus Hot Dogs",
    type: "Dessert",
    foodEmojis: "🍨 💦 💀",
    ingredients: ["Ice Cream", "Ketchup"],
    nutrition: { calories: 160, protein: 2, fat: 7, carbs: 25 },
    description:
      "When you can't afford proper toppings but still want dessert. Kenny's favorite budget-friendly treat that might literally kill you!",
  },
  {
    id: 22,
    name: "The Identity Crisis",
    restaurant: "DikinBaus Hot Dogs",
    type: "Hot Dog",
    foodEmojis: "🌭 🌮 😵",
    ingredients: ["Hot Dog Bun", "Tortilla"],
    nutrition: { calories: 230, protein: 6, fat: 3.5, carbs: 42 },
    description:
      "When you can't decide if you're a bun or a tortilla. Having an existential crisis never tasted so confusing!",
  },
  {
    id: 23,
    name: "The Cheese Cream Dream",
    restaurant: "DikinBaus Hot Dogs",
    type: "Dessert",
    foodEmojis: "🧀 🍨 🤔",
    ingredients: ["Cheese", "Ice Cream"],
    nutrition: { calories: 250, protein: 9, fat: 16, carbs: 18 },
    description:
      "Cartman's late-night refrigerator raid gone wrong (or right?). It's like a cheesecake had a baby with a sundae!",
  },
  {
    id: 24,
    name: "The Cheesy Nuts",
    restaurant: "DikinBaus Hot Dogs",
    type: "Hot Dog",
    foodEmojis: "🧀 🥜 😏",
    ingredients: ["Cheese", "Nuts"],
    nutrition: { calories: 270, protein: 12, fat: 22, carbs: 8 },
    description:
      "Butters: 'Fellas, I don't think you should call it that...' A protein-packed snack that'll have you giggling!",
  },
  {
    id: 25,
    name: "The Yellow Snow Special",
    restaurant: "DikinBaus Hot Dogs",
    type: "Dessert",
    foodEmojis: "🍨 💛 ⚠️",
    ingredients: ["Mustard", "Ice Cream"],
    nutrition: { calories: 155, protein: 2, fat: 7, carbs: 22 },
    description:
      "Frank Zappa warned you! A forbidden combination that'll make you question everything you know about desserts.",
  },
  {
    id: 26,
    name: "The City Wok Surprise",
    restaurant: "DikinBaus Hot Dogs",
    type: "Hot Dog",
    foodEmojis: "🥜 💦 🎭",
    ingredients: ["Mustard", "Nuts"],
    nutrition: { calories: 175, protein: 5, fat: 13, carbs: 8 },
    description:
      "Take-a order prease! City Wok guy's attempt at fusion cuisine gone hilariously wrong!",
  },
  {
    id: 27,
    name: "The Red Rocket",
    restaurant: "DikinBaus Hot Dogs",
    type: "Hot Dog",
    foodEmojis: "🥜 ❤️ 🚀",
    ingredients: ["Ketchup", "Nuts"],
    nutrition: { calories: 180, protein: 5, fat: 13, carbs: 12 },
    description:
      "Sparky's favorite! A nutty twist that'll make you blush. Don't ask why it's called that...",
  },
  {
    id: 28,
    name: "The Casa Bonita Dream",
    restaurant: "DikinBaus Hot Dogs",
    type: "Dessert",
    foodEmojis: "🍨 🌮 💃",
    ingredients: ["Ice Cream", "Tortilla"],
    nutrition: { calories: 260, protein: 5, fat: 9, carbs: 40 },
    description:
      "Cartman would definitely fake a zombie apocalypse for this one! Cliff diving into creamy, wrapped-up goodness.",
  },
  {
    id: 29,
    name: "The Mexican Kenny",
    restaurant: "DikinBaus Hot Dogs",
    type: "Taco",
    foodEmojis: "🥜 🌮 💀",
    ingredients: ["Nuts", "Tortilla"],
    nutrition: { calories: 280, protein: 8, fat: 15, carbs: 28 },
    description:
      "¡Oh Dios mío, han matado a Kenny! A poor man's attempt at authentic Mexican cuisine.",
  },
];
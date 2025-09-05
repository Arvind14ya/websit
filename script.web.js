
//📂 Load recipes from external JSON
// fetch("recipes.json")
//   .then(res => res.json())
//   .then(data => {
//     allRecipes = data; // store globally for search
//     renderRecipes(allRecipes);
//   })
//   .catch(err => console.error("Error loading recipes:", err));

const recipes = [
  { 
    title: "Pizza",
    image: "image/img3.jpg",
    description: `Classic homemade pizza with gooey cheese and fresh toppings. 
Steps: 1. Prepare the dough. 2. Add sauce, cheese, and toppings. 3. Bake until golden.`,
    video: "https://www.youtube.com/embed/3oOEAzvVnJI"
  },
  { 
    title: "Burger",
    image: "image/img6.jpg",
    description: `Juicy grilled burger with melted cheese and fresh veggies. 
Steps: 1. Shape and season patties. 2. Grill and assemble with buns and toppings.`,
    video: "https://www.youtube.com/embed/s0tT5K4HgYo"
  },
  { 
    title: "Classic Rice",
    image: "image/img7.jpg",
    description: `Fluffy steamed basmati rice, perfect as a side. 
Steps: 1. Rinse and soak rice. 2. Cook in water with a pinch of salt until tender.`,
    video: "https://www.youtube.com/embed/yU8Lp5dfnhA"
  },
  { 
    title: "Chicken Curry",
    image: "image/img8.jpg",
    description: `Spicy chicken curry simmered in rich gravy. 
Steps: 1. Sauté onions and spices. 2. Add chicken, cook, then simmer with tomatoes.`,
    video: "https://www.youtube.com/embed/COZK7NATh4k"
  },
  { 
    title: "Tandoori Chicken Tikka",
    image: "image/img1.jpg",
    description: `Tandoori-marinated chicken grilled to perfection. 
Steps: 1. Marinate in yogurt and spices. 2. Grill or bake until charred.`,
    video: "https://www.youtube.com/embed/xEni0VdKVHc"
  },
  { 
    title: "Veg Noodles",
    image: "image/img9.jpg",
    description: `Stir-fried noodles with fresh vegetables. 
Steps: 1. Boil noodles. 2. Stir-fry veggies with sauce. 3. Mix and serve hot.`,
    video: "https://www.youtube.com/embed/r_L3ymK0Z5E"
  },
  { 
    title: "Delicious Fish Without Oil",
    image: "image/img10.jpg",
    description: `Healthy steamed fish recipe without a drop of oil. 
Steps: 1. Marinate fish with spices. 2. Steam in banana leaf / foil.`,
    video: "https://www.youtube.com/embed/ZxCXh5DUEwE"
  },
  { 
    title: "Frankie Roll",
    image: "image/img5.jpg",
    description: `Indian-style wrap filled with spiced veggies and chicken. 
Steps: 1. Cook filling. 2. Roll inside roti/paratha. 3. Serve hot.`,
    video: "https://www.youtube.com/embed/7Ky1A2L96h8"
  },
  // 🌟 New recipes below
  {
    title: "Pasta Alfredo",
    image: "image/img11.jpg",
    description: `Creamy Alfredo pasta with parmesan cheese and herbs. 
Steps: 1. Cook pasta. 2. Prepare creamy sauce. 3. Mix & serve with garlic bread.`,
    video: "https://www.youtube.com/embed/Z4cK8Lze4pA"
  },
  {
    title: "Paneer Butter Masala",
    image: "image/pan.jpeg",
    description: `Soft paneer cubes in buttery tomato gravy. 
Steps: 1. Fry paneer. 2. Cook gravy. 3. Add cream & serve with naan.`,
    video: "https://www.youtube.com/embed/IgYcQXYg1TQ"
  },
  {
    title: "Biryani",
    image: "image/img13.jpg",
    description: `Aromatic rice layered with spiced chicken and saffron. 
Steps: 1. Cook rice. 2. Prepare chicken masala. 3. Layer & steam.`,
    video: "https://www.youtube.com/embed/OgX5h6PGNww"
  },
  {
    title: "Idli Sambhar",
    image: "image/img14.jpg",
    description: `Soft idlis served with tangy sambhar and coconut chutney. 
Steps: 1. Steam idlis. 2. Cook sambhar with veggies. 3. Serve with chutney.`,
    video: "https://www.youtube.com/embed/b59d6m2d-yk"
  },
  {
    title: "Momos",
    image: "image/img15.jpg",
    description: `Steamed dumplings stuffed with veggies or chicken. 
Steps: 1. Prepare stuffing. 2. Fill dough & steam. 3. Serve with chutney.`,
    video: "https://www.youtube.com/embed/3P2ugN2T9DY"
  },
  {
    title: "Dosa",
    image: "image/img16.jpg",
    description: `Crispy South Indian dosa with masala stuffing. 
Steps: 1. Spread dosa batter. 2. Add masala filling. 3. Serve with chutney.`,
    video: "https://www.youtube.com/embed/qCBq2B0RkNE"
  },
  {
    title: "Chocolate Cake",
    image: "image/Chocolate_cake.jpeg",
    description: `Moist and fluffy chocolate cake with frosting. 
Steps: 1. Mix batter. 2. Bake. 3. Add chocolate frosting.`,
    video: "https://www.youtube.com/embed/b3dwJX2E6oE"
  },
  {
    title: "Ice Cream Sundae",
    image: "image/img18.jpg",
    description: `Delicious sundae with ice cream, nuts, fruits & chocolate sauce. 
Steps: 1. Scoop ice cream. 2. Add toppings. 3. Serve chilled.`,
    video: "https://www.youtube.com/embed/zN9YTe-SdLQ"
  },
  {
    title: "Cold Coffee",
    image: "image/Cold_Coffee.jpeg",
    description: `Refreshing iced coffee with cream and chocolate drizzle. 
Steps: 1. Blend milk, sugar, coffee. 2. Add ice cream & serve chilled.`,
    video: "https://www.youtube.com/embed/ZSk7SsmZVqk"
  },
  {
    title: "Smoothie Bowl",
    image: "image/img20.jpg",
    description: `Healthy fruit smoothie bowl with nuts and seeds. 
Steps: 1. Blend fruits. 2. Pour into bowl. 3. Add toppings.`,
    video: "https://www.youtube.com/embed/atQZqQlq8zg"
  },
  {
    "title": "Veg Biryani",
    "category": "Indian",
    "image": "image/veg.jpeg",
    "description": "Tasty Veg Biryani recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy1"
  },
  {
    "title": "Chicken Biryani",
    "category": "Indian",
    "image": "image/chicken_biryani.jpg",
    "description": "Tasty Chicken Biryani recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy2"
  },
  {
    "title": "Paneer Butter Masala",
    "category": "Indian",
    "image": "image/pan.jpeg",
    "description": "Tasty Paneer Butter Masala recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy3"
  },
  {
    "title": "Dal Tadka",
    "category": "Indian",
    "image": "image/dal.jpeg",
    "description": "Tasty Dal Tadka recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy4"
  },
  {
    "title": "Palak Paneer",
    "category": "Indian",
    "image": "image/palak_paneer.jpg",
    "description": "Tasty Palak Paneer recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy5"
  },
  {
    "title": "Masala Dosa",
    "category": "Indian",
    "image": "image/masala_dosa.jpg",
    "description": "Tasty Masala Dosa recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy6"
  },
  {
    "title": "Idli Sambhar",
    "category": "Indian",
    "image": "image/idli_sambhar.jpg",
    "description": "Tasty Idli Sambhar recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy7"
  },
  {
    "title": "Aloo Paratha",
    "category": "Indian",
    "image": "image/allo.jpeg",
    "description": "Tasty Aloo Paratha recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy8"
  },
  {
    "title": "Rajma Chawal",
    "category": "Indian",
    "image": "image/rajma_chawal.jpg",
    "description": "Tasty Rajma Chawal recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy9"
  },
  {
    "title": "Chole Bhature",
    "category": "Indian",
    "image": "image/cho.jpeg",
    "description": "Tasty Chole Bhature recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy10"
  },
  {
    "title": "Matar Paneer",
    "category": "Indian",
    "image": "image/matar_paneer.jpg",
    "description": "Tasty Matar Paneer recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy11"
  },
  {
    "title": "Bhindi Masala",
    "category": "Indian",
    "image": "image/bhindi_masala.jpg",
    "description": "Tasty Bhindi Masala recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy12"
  },
  {
    "title": "Baingan Bharta",
    "category": "Indian",
    "image": "image/baingan_bharta.jpg",
    "description": "Tasty Baingan Bharta recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy13"
  },
  {
    "title": "Kadhi Pakora",
    "category": "Indian",
    "image": "image/kadhi_pakora.jpg",
    "description": "Tasty Kadhi Pakora recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy14"
  },
  {
    "title": "Pav Bhaji",
    "category": "Indian",
    "image": "image/pav_bhaji.jpg",
    "description": "Tasty Pav Bhaji recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy15"
  },
  {
    "title": "Veg Pulao",
    "category": "Indian",
    "image": "image/veg_pulao.jpg",
    "description": "Tasty Veg Pulao recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy16"
  },
  {
    "title": "Stuffed Paratha",
    "category": "Indian",
    "image": "image/stuffed_paratha.jpg",
    "description": "Tasty Stuffed Paratha recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy17"
  },
  {
    "title": "Aloo Gobi",
    "category": "Indian",
    "image": "image/aloo_gobi.jpg",
    "description": "Tasty Aloo Gobi recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy18"
  },
  {
    "title": "Veg Kofta Curry",
    "category": "Indian",
    "image": "image/veg_kofta_curry.jpg",
    "description": "Tasty Veg Kofta Curry recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy19"
  },
  {
    "title": "Korma",
    "category": "Indian",
    "image": "image/korma.jpg",
    "description": "Tasty Korma recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy20"
  },
  {
    "title": "Margherita Pizza",
    "category": "Fast Food",
    "image": "image/margherita_pizza.jpg",
    "description": "Tasty Margherita Pizza recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy21"
  },
  {
    "title": "Veg Burger",
    "category": "Fast Food",
    "image": "image/bug.jpeg",
    "description": "Tasty Veg Burger recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy22"
  },
  {
    "title": "Cheese Sandwich",
    "category": "Fast Food",
    "image": "image/sandwich.jpeg",
    "description": "Tasty Cheese Sandwich recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy23"
  },
  {
    "title": "French Fries",
    "category": "Fast Food",
    "image": "image/fra.jpeg",
    "description": "Tasty French Fries recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy24"
  },
  {
    "title": "White Sauce Pasta",
    "category": "Fast Food",
    "image": "images/white_sauce_pasta.jpg",
    "description": "Tasty White Sauce Pasta recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy25"
  },
  {
    "title": "Red Sauce Pasta",
    "category": "Fast Food",
    "image": "images/red_sauce_pasta.jpg",
    "description": "Tasty Red Sauce Pasta recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy26"
  },
  {
    "title": "Garlic Bread",
    "category": "Fast Food",
    "image": "images/garlic_bread.jpg",
    "description": "Tasty Garlic Bread recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy27"
  },
  {
    "title": "Paneer Roll",
    "category": "Fast Food",
    "image": "images/paneer_roll.jpg",
    "description": "Tasty Paneer Roll recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy28"
  },
  {
    "title": "Frankie Wrap",
    "category": "Fast Food",
    "image": "images/frankie_wrap.jpg",
    "description": "Tasty Frankie Wrap recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy29"
  },
  {
    "title": "Spring Rolls",
    "category": "Fast Food",
    "image": "images/spring_rolls.jpg",
    "description": "Tasty Spring Rolls recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy30"
  },
  {
    "title": "Manchurian",
    "category": "Fast Food",
    "image": "images/manchurian.jpg",
    "description": "Tasty Manchurian recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy31"
  },
  {
    "title": "Veg Noodles",
    "category": "Fast Food",
    "image": "images/veg_noodles.jpg",
    "description": "Tasty Veg Noodles recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy32"
  },
  {
    "title": "Hakka Noodles",
    "category": "Fast Food",
    "image": "images/hakka_noodles.jpg",
    "description": "Tasty Hakka Noodles recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy33"
  },
  {
    "title": "Chili Paneer",
    "category": "Fast Food",
    "image": "images/chili_paneer.jpg",
    "description": "Tasty Chili Paneer recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy34"
  },
  {
    "title": "Hot Dog",
    "category": "Fast Food",
    "image": "images/hot_dog.jpg",
    "description": "Tasty Hot Dog recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy35"
  },
  {
    "title": "Cheese Nachos",
    "category": "Fast Food",
    "image": "images/cheese_nachos.jpg",
    "description": "Tasty Cheese Nachos recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy36"
  },
  {
    "title": "Veg Taco",
    "category": "Fast Food",
    "image": "images/veg_taco.jpg",
    "description": "Tasty Veg Taco recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy37"
  },
  {
    "title": "Quesadilla",
    "category": "Fast Food",
    "image": "images/quesadilla.jpg",
    "description": "Tasty Quesadilla recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy38"
  },
  {
    "title": "Shawarma Roll",
    "category": "Fast Food",
    "image": "images/shawarma_roll.jpg",
    "description": "Tasty Shawarma Roll recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy39"
  },
  {
    "title": "Cheese Balls",
    "category": "Fast Food",
    "image": "images/cheese_balls.jpg",
    "description": "Tasty Cheese Balls recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy40"
  },
  {
    "title": "Fruit Salad",
    "category": "Healthy",
    "image": "images/fruit_salad.jpg",
    "description": "Tasty Fruit Salad recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy41"
  },
  {
    "title": "Greek Salad",
    "category": "Healthy",
    "image": "images/greek_salad.jpg",
    "description": "Tasty Greek Salad recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy42"
  },
  {
    "title": "Caesar Salad",
    "category": "Healthy",
    "image": "images/caesar_salad.jpg",
    "description": "Tasty Caesar Salad recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy43"
  },
  {
    "title": "Detox Juice",
    "category": "Healthy",
    "image": "images/detox_juice.jpg",
    "description": "Tasty Detox Juice recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy44"
  },
  {
    "title": "Smoothie Bowl",
    "category": "Healthy",
    "image": "images/smoothie_bowl.jpg",
    "description": "Tasty Smoothie Bowl recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy45"
  },
  {
    "title": "Oats Porridge",
    "category": "Healthy",
    "image": "images/oats_porridge.jpg",
    "description": "Tasty Oats Porridge recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy46"
  },
  {
    "title": "Vegetable Soup",
    "category": "Healthy",
    "image": "image/vegetable soup.jpeg",
    "description": "Tasty Vegetable Soup recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy47"
  },
  {
    "title": "Chicken Salad",
    "category": "Healthy",
    "image": "images/chicken_salad.jpg",
    "description": "Tasty Chicken Salad recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy48"
  },
  {
    "title": "Sprout Salad",
    "category": "Healthy",
    "image": "images/sprout_salad.jpg",
    "description": "Tasty Sprout Salad recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy49"
  },
  {
    "title": "Grilled Veggies",
    "category": "Healthy",
    "image": "images/grilled_veggies.jpg",
    "description": "Tasty Grilled Veggies recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy50"
  },
  {
    "title": "Avocado Toast",
    "category": "Healthy",
    "image": "images/avocado_toast.jpg",
    "description": "Tasty Avocado Toast recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy51"
  },
  {
    "title": "Green Smoothie",
    "category": "Healthy",
    "image": "images/green_smoothie.jpg",
    "description": "Tasty Green Smoothie recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy52"
  },
  {
    "title": "Protein Shake",
    "category": "Healthy",
    "image": "images/protein_shake.jpg",
    "description": "Tasty Protein Shake recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy53"
  },
  {
    "title": "Cucumber Raita",
    "category": "Healthy",
    "image": "images/cucumber_raita.jpg",
    "description": "Tasty Cucumber Raita recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy54"
  },
  {
    "title": "Lentil Soup",
    "category": "Healthy",
    "image": "images/lentil_soup.jpg",
    "description": "Tasty Lentil Soup recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy55"
  },
  {
    "title": "Quinoa Salad",
    "category": "Healthy",
    "image": "images/quinoa_salad.jpg",
    "description": "Tasty Quinoa Salad recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy56"
  },
  {
    "title": "Chia Pudding",
    "category": "Healthy",
    "image": "images/chia_pudding.jpg",
    "description": "Tasty Chia Pudding recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy57"
  },
  {
    "title": "Veggie Wrap",
    "category": "Healthy",
    "image": "images/veggie_wrap.jpg",
    "description": "Tasty Veggie Wrap recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy58"
  },
  {
    "title": "Stuffed Bell Peppers",
    "category": "Healthy",
    "image": "images/stuffed_bell_peppers.jpg",
    "description": "Tasty Stuffed Bell Peppers recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy59"
  },
  {
    "title": "Buddha Bowl",
    "category": "Healthy",
    "image": "images/buddha_bowl.jpg",
    "description": "Tasty Buddha Bowl recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy60"
  },
  {
    "title": "Chocolate Cake",
    "category": "Dessert",
    "image": "images/chocolate_cake.jpg",
    "description": "Tasty Chocolate Cake recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy61"
  },
  {
    "title": "Vanilla Cupcake",
    "category": "Dessert",
    "image": "images/vanilla_cupcake.jpg",
    "description": "Tasty Vanilla Cupcake recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy62"
  },
  {
    "title": "Brownie",
    "category": "Dessert",
    "image": "images/brownie.jpg",
    "description": "Tasty Brownie recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy63"
  },
  {
    "title": "Gulab Jamun",
    "category": "Dessert",
    "image": "image/gulab_jamun.jpeg",
    "description": "Tasty Gulab Jamun recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy64"
  },
  {
    "title": "Rasgulla",
    "category": "Dessert",
    "image": "image/rasgulla.jpeg",
    "description": "Tasty Rasgulla recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy65"
  },
  {
    "title": "Kheer",
    "category": "Dessert",
    "image": "image/kheer.jpeg",
    "description": "Tasty Kheer recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy66"
  },
  {
    "title": "Jalebi",
    "category": "Dessert",
    "image": "images/jalebi.jpg",
    "description": "Tasty Jalebi recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy67"
  },
  {
    "title": "Ladoo",
    "category": "Dessert",
    "image": "images/ladoo.jpg",
    "description": "Tasty Ladoo recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy68"
  },
  {
    "title": "Ice Cream Sundae",
    "category": "Dessert",
    "image": "images/ice_cream_sundae.jpg",
    "description": "Tasty Ice Cream Sundae recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy69"
  },
  {
    "title": "Cheesecake",
    "category": "Dessert",
    "image": "images/cheesecake.jpg",
    "description": "Tasty Cheesecake recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy70"
  },
  {
    "title": "Donut",
    "category": "Dessert",
    "image": "images/donut.jpg",
    "description": "Tasty Donut recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy71"
  },
  {
    "title": "Fruit Custard",
    "category": "Dessert",
    "image": "images/fruit_custard.jpg",
    "description": "Tasty Fruit Custard recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy72"
  },
  {
    "title": "Mango Mousse",
    "category": "Dessert",
    "image": "images/mango_mousse.jpg",
    "description": "Tasty Mango Mousse recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy73"
  },
  {
    "title": "Tiramisu",
    "category": "Dessert",
    "image": "images/tiramisu.jpg",
    "description": "Tasty Tiramisu recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy74"
  },
  {
    "title": "Chocolate Truffle",
    "category": "Dessert",
    "image": "images/chocolate_truffle.jpg",
    "description": "Tasty Chocolate Truffle recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy75"
  },
  {
    "title": "Apple Pie",
    "category": "Dessert",
    "image": "images/apple_pie.jpg",
    "description": "Tasty Apple Pie recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy76"
  },
  {
    "title": "Carrot Halwa",
    "category": "Dessert",
    "image": "images/carrot_halwa.jpg",
    "description": "Tasty Carrot Halwa recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy77"
  },
  {
    "title": "Malpua",
    "category": "Dessert",
    "image": "images/malpua.jpg",
    "description": "Tasty Malpua recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy78"
  },
  {
    "title": "Panna Cotta",
    "category": "Dessert",
    "image": "images/panna_cotta.jpg",
    "description": "Tasty Panna Cotta recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy79"
  },
  {
    "title": "Banana Bread",
    "category": "Dessert",
    "image": "images/banana_bread.jpg",
    "description": "Tasty Banana Bread recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy80"
  },
  {
    "title": "Cold Coffee",
    "category": "Drinks",
    "image": "image/cold_coffee.jpeg",
    "description": "Tasty Cold Coffee recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy81"
  },
  {
    "title": "Iced Tea",
    "category": "Drinks",
    "image": "images/iced_tea.jpg",
    "description": "Tasty Iced Tea recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy82"
  },
  {
    "title": "Lemonade",
    "category": "Drinks",
    "image": "images/lemonade.jpg",
    "description": "Tasty Lemonade recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy83"
  },
  {
    "title": "Mango Shake",
    "category": "Drinks",
    "image": "image/mango_shake.jpeg",
    "description": "Tasty Mango Shake recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy84"
  },
  {
    "title": "Banana Smoothie",
    "category": "Drinks",
    "image": "images/banana_smoothie.jpg",
    "description": "Tasty Banana Smoothie recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy85"
  },
  {
    "title": "Strawberry Shake",
    "category": "Drinks",
    "image": "images/strawberry_shake.jpg",
    "description": "Tasty Strawberry Shake recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy86"
  },
  {
    "title": "Hot Chocolate",
    "category": "Drinks",
    "image": "images/hot_chocolate.jpg",
    "description": "Tasty Hot Chocolate recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy87"
  },
  {
    "title": "Green Tea",
    "category": "Drinks",
    "image": "images/green_tea.jpg",
    "description": "Tasty Green Tea recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy88"
  },
  {
    "title": "Coconut Water",
    "category": "Drinks",
    "image": "images/coconut_water.jpg",
    "description": "Tasty Coconut Water recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy89"
  },
  {
    "title": "Mocktail",
    "category": "Drinks",
    "image": "images/mocktail.jpg",
    "description": "Tasty Mocktail recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy90"
  },
  {
    "title": "Watermelon Juice",
    "category": "Drinks",
    "image": "images/watermelon_juice.jpg",
    "description": "Tasty Watermelon Juice recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy91"
  },
  {
    "title": "Pineapple Juice",
    "category": "Drinks",
    "image": "images/pineapple_juice.jpg",
    "description": "Tasty Pineapple Juice recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy92"
  },
  {
    "title": "Orange Juice",
    "category": "Drinks",
    "image": "images/orange_juice.jpg",
    "description": "Tasty Orange Juice recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy93"
  },
  {
    "title": "Sugarcane Juice",
    "category": "Drinks",
    "image": "images/sugarcane_juice.jpg",
    "description": "Tasty Sugarcane Juice recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy94"
  },
  {
    "title": "Masala Chai",
    "category": "Drinks",
    "image": "masala_chai.jpeg",
    "description": "Tasty Masala Chai recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy95"
  },
  {
    "title": "Filter Coffee",
    "category": "Drinks",
    "image": "images/filter_coffee.jpg",
    "description": "Tasty Filter Coffee recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy96"
  },
  {
    "title": "Falooda",
    "category": "Drinks",
    "image": "images/falooda.jpg",
    "description": "Tasty Falooda recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy97"
  },
  {
    "title": "Rose Milk",
    "category": "Drinks",
    "image": "images/rose_milk.jpg",
    "description": "Tasty Rose Milk recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy98"
  },
  {
    "title": "Buttermilk",
    "category": "Drinks",
    "image": "images/buttermilk.jpg",
    "description": "Tasty Buttermilk recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy99"
  },
  {
    "title": "Smoothie Mix",
    "category": "Drinks",
    "image": "images/smoothie_mix.jpg",
    "description": "Tasty Smoothie Mix recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy100"
  },
  {
    "title": "Butter Chicken",
    "category": "Non-Veg",
    "image": "butter_chicken.jpeg",
    "description": "Tasty Butter Chicken recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy101"
  },
  {
    "title": "Tandoori Chicken",
    "category": "Non-Veg",
    "image": "image/img1.jpg",
    "description": "Tasty Tandoori Chicken recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy102"
  },
  {
    "title": "Chicken Curry",
    "category": "Non-Veg",
    "image": "image/img8.jpg",
    "description": "Tasty Chicken Curry recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy103"
  },
  {
    "title": "Chicken Korma",
    "category": "Non-Veg",
    "image": "images/chicken_korma.jpg",
    "description": "Tasty Chicken Korma recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy104"
  },
  {
    "title": "Mutton Curry",
    "category": "Non-Veg",
    "image": "image/mutton.jpeg",
    "description": "Tasty Mutton Curry recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy105"
  },
  {
    "title": "Fish Fry",
    "category": "Non-Veg",
    "image": "image/abc.jpg",
    "description": "Tasty Fish Fry recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy106"
  },
  {
    "title": "Prawn Masala",
    "category": "Non-Veg",
    "image": "images/prawn_masala.jpg",
    "description": "Tasty Prawn Masala recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy107"
  },
  {
    "title": "Egg Curry",
    "category": "Non-Veg",
    "image": "image/egg.jpeg",
    "description": "Tasty Egg Curry recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy108"
  },
  {
    "title": "Chicken 65",
    "category": "Non-Veg",
    "image": "images/chicken_65.jpg",
    "description": "Tasty Chicken 65 recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy109"
  },
  {
    "title": "Keema Matar",
    "category": "Non-Veg",
    "image": "images/keema_matar.jpg",
    "description": "Tasty Keema Matar recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy110"
  },
  {
    "title": "Grilled Fish",
    "category": "Non-Veg",
    "image": "images/grilled_fish.jpg",
    "description": "Tasty Grilled Fish recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy111"
  },
  {
    "title": "Chicken Lollipop",
    "category": "Non-Veg",
    "image": "images/chicken_lollipop.jpg",
    "description": "Tasty Chicken Lollipop recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy112"
  },
  {
    "title": "Mutton Biryani",
    "category": "Non-Veg",
    "image": "images/mutton_biryani.jpg",
    "description": "Tasty Mutton Biryani recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy113"
  },
  {
    "title": "Chicken Shawarma",
    "category": "Non-Veg",
    "image": "images/chicken_shawarma.jpg",
    "description": "Tasty Chicken Shawarma recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy114"
  },
  {
    "title": "Egg Bhurji",
    "category": "Non-Veg",
    "image": "images/egg_bhurji.jpg",
    "description": "Tasty Egg Bhurji recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy115"
  },
  {
    "title": "Chicken Cutlet",
    "category": "Non-Veg",
    "image": "images/chicken_cutlet.jpg",
    "description": "Tasty Chicken Cutlet recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy116"
  },
  {
    "title": "Fish Curry",
    "category": "Non-Veg",
    "image": "image/fish_curry.jpeg",
    "description": "Tasty Fish Curry recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy117"
  },
  {
    "title": "Prawn Fry",
    "category": "Non-Veg",
    "image": "images/prawn_fry.jpg",
    "description": "Tasty Prawn Fry recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy118"
  },
  {
    "title": "Chicken Soup",
    "category": "Non-Veg",
    "image": "images/chicken_soup.jpg",
    "description": "Tasty Chicken Soup recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy119"
  },
  {
    "title": "Mutton Rogan Josh",
    "category": "Non-Veg",
    "image": "images/mutton_rogan_josh.jpg",
    "description": "Tasty Mutton Rogan Josh recipe. Steps: 1. Prepare ingredients. 2. Cook properly. 3. Serve hot.",
    "video": "https://www.youtube.com/embed/dummy120"
  }

];

 const recipeGrid = document.getElementById("recipeGrid");
const recipeModal = document.getElementById("recipeModal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const modalClose = document.getElementById("modalClose");
const modalVideoWrapper = document.getElementById("modalVideoWrapper");
const modalVideo = document.getElementById("modalVideo");

function renderRecipes(data) {
  recipeGrid.innerHTML = "";
  data.forEach((recipe, i) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.title}" loading="lazy"/>
      <div class="card-body">
        <h4>${recipe.title}</h4>
        <p>${recipe.description.split("\n")[0]}</p>
      </div>
    `;
    card.addEventListener("click", () => openModal(recipe));
    recipeGrid.appendChild(card);
  });
}

function openModal(recipe) {
  modalTitle.textContent = recipe.title;
  modalText.textContent = recipe.description;
  if (recipe.video) {
    modalVideo.src = recipe.video + "?autoplay=1";
    modalVideoWrapper.style.display = "block";
  } else {
    modalVideoWrapper.style.display = "none";
    modalVideo.src = "";
  }
  recipeModal.classList.add("show");
}

function closeModal() {
  recipeModal.classList.remove("show");
  modalVideo.src = ""; // Stop video playback
}

modalClose.addEventListener("click", closeModal);
window.addEventListener("click", (e) => {
  if (e.target === recipeModal) closeModal();
});
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

// Search
document.getElementById("searchInput").addEventListener("input", (e) => {
  const keyword = e.target.value.toLowerCase();
  const filtered = recipes.filter(r => r.title.toLowerCase().includes(keyword));
  renderRecipes(filtered);
});

// Navigation
document.getElementById("burger").addEventListener("click", () => {
  document.getElementById("nav-links").classList.add("active");
});
document.getElementById("closeNav").addEventListener("click", () => {
  document.getElementById("nav-links").classList.remove("active");
});
document.getElementById("overlay").addEventListener("click", () => {
  document.getElementById("nav-links").classList.remove("active");
});

// Back to top
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  backToTop.style.display = window.scrollY > 300 ? "block" : "none";
});
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Theme toggle
const toggleTheme = document.getElementById("toggleTheme");
toggleTheme.addEventListener("click", () => {
  const html = document.documentElement;
  const newTheme = html.dataset.theme === "dark" ? "light" : "dark";
  html.dataset.theme = newTheme;
  localStorage.setItem("theme", newTheme);
  toggleTheme.innerHTML = newTheme === "dark" ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.dataset.theme = savedTheme;
  toggleTheme.innerHTML = savedTheme === "dark" ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

// Form validation
document.getElementById("subscribeForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email");
  const msg = document.getElementById("formMsg");
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email.value)) {
    msg.textContent = "Please enter a valid email address.";
    msg.style.color = "white";
    return;
  }
  msg.textContent = "Thank you for subscribing!";
  msg.style.color = "Aqua";
  email.value = ""; 
});

renderRecipes(recipes);

export type MenuItem = {
  name: string;
  price: string;
  description?: string;
  tag?: string;
  isChefSpecial?: boolean;
  isSignature?: boolean;
};

export type MenuCategory = {
  title: string;
  items: MenuItem[];
};

export const menuData: MenuCategory[] = [
  {
    title: "Soups",
    items: [
      { name: "Sweet Corn Soup", price: "₹149", description: "Golden kernels swimming in a velvety broth, kissed with aromatic spices" },
      { name: "Tom Kha Soup", price: "₹149", description: "A creamy coconut embrace infused with galangal and fragrant lemongrass", isChefSpecial: true },
      { name: "Manchow Soup", price: "₹149", description: "A warm, comforting bowl with crispy noodles floating like autumn leaves" },
      { name: "Hot And Sour Soup", price: "₹155", description: "A dance of fire and tang, awakening your senses with every spoonful" },
      { name: "Noodles Soup", price: "₹139", description: "Silky noodles in a gentle, nourishing broth" },
      { name: "Tom Yum Soup", price: "₹149", description: "Thai forest flavors—lemongrass, kaffir lime, and a whisper of chili heat", isSignature: true },
      { name: "Lemon Coriander Soup", price: "₹149", description: "Fresh garden herbs meet zesty citrus in perfect harmony" },
      { name: "Sabz Ka Shorba", price: "₹259", description: "A royal blend of garden vegetables, slow-simmered to perfection" },
      { name: "Tamatar Hari Daniya Shorba", price: "₹259", description: "Sun-ripened tomatoes and fresh coriander in a rustic embrace" },
      { name: "Tomato Soup", price: "₹246", description: "Classic comfort—ripe tomatoes transformed into liquid warmth" },
      { name: "Palak Adraki Shorba", price: "₹259", description: "Emerald spinach meets fiery ginger in this revitalizing elixir" },
      { name: "Palak Soup", price: "₹246", description: "Pure garden greens, velvety smooth and deeply nourishing" },
      { name: "Murgh Shorba", price: "₹252", description: "Tender chicken slowly simmered in aromatic Indian spices" },
      { name: "Yakhni Shorba", price: "₹275", description: "A Kashmiri treasure—delicate, aromatic, and soul-soothing", isChefSpecial: true },
    ]
  },
  {
    title: "Salads",
    items: [
      { name: "Greek Salad", price: "₹259", description: "Mediterranean sunshine—crisp vegetables, olives, and creamy feta" },
      { name: "Russian Salad", price: "₹311", description: "A creamy mosaic of vegetables, dressed in nostalgia", isChefSpecial: true },
      { name: "Oriental Salad", price: "₹259", description: "Eastern whispers of sesame, ginger, and garden-fresh crunch" },
      { name: "Green Salad", price: "₹259", description: "Nature's purest offering—crisp leaves kissed by morning dew" },
    ]
  },
  {
    title: "Veg Starters",
    items: [
      { name: "Kung Pao Potatoes", price: "₹332", description: "Golden potatoes dancing with peanuts in a sweet-spicy symphony" },
      { name: "Stir Fried Vegetable", price: "₹355", description: "Garden treasures, wok-tossed to smoky perfection" },
      { name: "Mushroom Chilli Garlic Sauce", price: "₹355", description: "Earthy mushrooms embraced by bold garlic and gentle heat" },
      { name: "Paneer Crispy", price: "₹355", description: "Cottage cheese in a golden cloak, delightfully crunchy", isSignature: true },
      { name: "Kung Pao Paneer", price: "₹367", description: "Soft paneer meets the bold dance of Sichuan peppers" },
      { name: "Paneer Chilli", price: "₹367", tag: "Full", description: "A fiery romance between cottage cheese and bell peppers" },
      { name: "Barbeque Paneer", price: "₹401", description: "Smoky, charred, and brushed with tangy barbecue glaze", isChefSpecial: true },
      { name: "Paneer Satay", price: "₹367", description: "Skewered perfection with rich, nutty peanut sauce" },
      { name: "Paneer Salt And Pepper", price: "₹367", description: "Simple elegance—crispy cubes with just the right seasoning" },
      { name: "Paneer 65", price: "₹367", description: "South Indian spice magic wrapped around tender paneer" },
      { name: "Paneer Peri Peri Dry", price: "₹367", description: "African fire meets Indian soul in this bold creation" },
      { name: "Mushroom Chilli", price: "₹332", tag: "Full", description: "Forest mushrooms in a vibrant Indo-Chinese celebration" },
      { name: "Veg Crispy", price: "₹332", tag: "Full", description: "Assorted vegetables in a light, golden embrace" },
      { name: "Veg Manchurian", price: "₹298", tag: "Full", description: "Street-food legend—veggie dumplings in tangy glory" },
      { name: "Hara Bhara Kebab", price: "₹355", description: "Emerald patties of spinach and peas, fragrant with garden herbs", isSignature: true },
      { name: "Veg Seekh Kebab", price: "₹367", description: "Spiced vegetable kebabs, char-kissed from the tandoor" },
      { name: "Paneer Malai Tikka", price: "₹401", description: "Cream-marinated paneer, impossibly tender and aromatic", isChefSpecial: true },
      { name: "Afghani Paneer Tikka", price: "₹329", description: "Mild, creamy, and touched with cashew richness" },
      { name: "Paneer Pahadi Tikka", price: "₹401", description: "Mountain herbs and tangy curd create this green masterpiece" },
    ]
  },
  {
    title: "Non-Veg Starters",
    items: [
      { name: "Egg Chilli", price: "₹286", description: "Farm-fresh eggs tossed with peppers and aromatic sauces" },
      { name: "Madhuvan Special Murgh Kebab", price: "₹499", description: "Our signature creation—succulent, secret-spiced, unforgettable", isSignature: true, isChefSpecial: true },
      { name: "Chicken Hot Garlic", price: "₹413", description: "Tender chicken swimming in a bold garlic-chili embrace" },
      { name: "Chicken Peri Peri Dry", price: "₹424", tag: "Full", description: "Portuguese fire meets Indian soul—crispy and addictive" },
      { name: "Chicken Chilli Dry", price: "₹413", description: "Classic Indo-Chinese with crispy, flavor-packed bites" },
      { name: "Chicken Crispy", price: "₹424", tag: "Full", description: "Golden-fried perfection, impossibly crunchy outside, juicy within" },
      { name: "Chicken Manchurian", price: "₹424", description: "Street-food royalty in rich, tangy Manchurian sauce" },
      { name: "Chicken Kung Pao", price: "₹447", description: "Sichuan legend—chicken, peanuts, and dried chilies in harmony", isChefSpecial: true },
      { name: "Chicken Lollipop", price: "₹436", tag: "Full", description: "Frenched drumettes, perfectly spiced and irresistible" },
      { name: "Murgh Tikka", price: "₹401", description: "Smoky, charred, marinated in yogurt and aromatic spices" },
      { name: "Murgh Malai Kebab", price: "₹436", description: "Cream-kissed chicken, melt-in-mouth tender", isSignature: true },
      { name: "Murgh Tandoori", price: "₹419", tag: "Full", description: "The timeless classic—crimson, smoky, and deeply satisfying" },
      { name: "Mutton Seekh Kebab", price: "₹586", description: "Hand-minced mutton, char-grilled to smoky perfection", isChefSpecial: true },
      { name: "Basa Fish Tikka", price: "₹459", description: "River fish in a gentle tandoor embrace" },
      { name: "Fish Finger", price: "₹459", description: "Crispy golden batons of fresh, flaky fish" },
      { name: "Tandoori Prawns", price: "₹675", description: "Ocean treasures, smoke-kissed and butter-brushed", isSignature: true },
      { name: "Butter Garlic Prawns", price: "₹571", description: "Succulent prawns bathing in golden garlic butter" },
    ]
  },
  {
    title: "Veg Main Course",
    items: [
      { name: "Madhuvan Special Veg", price: "₹441", tag: "Chef's Special", description: "Our signature vegetable creation—a secret garden on your plate", isSignature: true, isChefSpecial: true },
      { name: "Paneer Bhurji", price: "₹350", description: "Scrambled cottage cheese with tomatoes and aromatic spices" },
      { name: "Paneer Makhanwala", price: "₹363", tag: "Full", description: "Creamy tomato butter gravy cradling tender paneer" },
      { name: "Paneer Lababdar", price: "₹389", tag: "Full", description: "Rich, royal, and dripping with creamy indulgence", isChefSpecial: true },
      { name: "Palak Paneer", price: "₹363", tag: "Full", description: "Emerald spinach river flowing around cottage cheese islands" },
      { name: "Paneer Butter Masala", price: "₹402", tag: "Full", description: "The beloved classic—velvety tomato cream with golden paneer", isSignature: true },
      { name: "Paneer Tikka Masala", price: "₹415", tag: "Full", description: "Charred paneer tikka swimming in spiced tomato gravy" },
      { name: "Veg Kolhapuri", price: "₹363", tag: "Full", description: "Fiery Maharashtrian spices ignite this vegetable celebration" },
      { name: "Veg Korma", price: "₹376", description: "Mughal elegance—cashew cream and aromatic spices" },
      { name: "Kaju Masala", price: "₹441", tag: "Full", description: "Plump cashews in a rich, aromatic gravy", isChefSpecial: true },
      { name: "Dal Fry", price: "₹274", tag: "Full", description: "Golden lentils tempered with cumin and garlic warmth" },
      { name: "Dal Tadka", price: "₹299", tag: "Full", description: "Comfort in a bowl—smoky tadka dancing on yellow dal" },
    ]
  },
  {
    title: "Non-Veg Main Course",
    items: [
      { name: "Murgh Butter Masala", price: "₹467", tag: "Full", description: "The legend—tender chicken in velvety tomato butter cream", isSignature: true },
      { name: "Murgh Tikka Masala", price: "₹443", tag: "Full", description: "Smoky tikka pieces in rich, spiced masala gravy" },
      { name: "Murgh Kadhai", price: "₹443", tag: "Full", description: "Wok-tossed chicken with bell peppers and whole spices" },
      { name: "Butter Murgh", price: "₹467", tag: "Full", description: "Golden butter, aromatic spices, and melt-tender chicken" },
      { name: "Murgh Lababdar", price: "₹493", description: "Creamy, rich, and fit for royalty", isChefSpecial: true },
      { name: "Murgh Musallam", price: "₹569", description: "Whole chicken roasted in centuries-old Mughal tradition", isSignature: true, isChefSpecial: true },
      { name: "Mutton Rogan Josh", price: "₹585", description: "Kashmiri poetry—tender mutton in crimson, aromatic gravy", isSignature: true },
      { name: "Mutton Keema Masala", price: "₹551", description: "Spiced minced mutton, slow-cooked with love" },
      { name: "Prawns Curry", price: "₹599", description: "Coastal treasure—prawns in coconut-kissed curry", isChefSpecial: true },
    ]
  },
  {
    title: "Breads",
    items: [
      { name: "Plain Roti", price: "₹45", description: "Whole wheat simplicity, soft and warm" },
      { name: "Butter Roti", price: "₹50", description: "Brushed with golden butter, impossibly soft" },
      { name: "Naan", price: "₹65", description: "Tandoor-baked, pillowy clouds of bread" },
      { name: "Butter Naan", price: "₹76", description: "Glistening with butter, fresh from the clay oven" },
      { name: "Garlic Naan", price: "₹109", description: "Aromatic garlic and herbs in every bite", isChefSpecial: true },
      { name: "Cheese Garlic Naan", price: "₹219", description: "Melted cheese rivers flowing through garlic-infused bread", isSignature: true },
      { name: "Kulcha", price: "₹76", description: "Soft, slightly chewy, perfect for scooping curries" },
      { name: "Laccha Paratha", price: "₹87", description: "Layered, flaky, and utterly irresistible" },
      { name: "Aloo Paratha", price: "₹241", description: "Spiced potato treasure wrapped in golden wheat" },
    ]
  },
  {
    title: "Biryani",
    items: [
      { name: "Madhuvan Special Biryani", price: "₹426", tag: "Veg", description: "Our crown jewel—aromatic rice with secret spice blend", isSignature: true, isChefSpecial: true },
      { name: "Veg Dum Biryani", price: "₹335", tag: "Veg", description: "Slow-cooked under a sealed lid, releasing fragrant steam" },
      { name: "Paneer Biryani", price: "₹353", tag: "Veg", description: "Saffron rice embracing tender cottage cheese" },
      { name: "Madhuvan Special Murgh Biryani", price: "₹511", description: "Legendary layers of spiced chicken and fragrant rice", isSignature: true, isChefSpecial: true },
      { name: "Murgh Dum Biryani", price: "₹389", description: "Dum-cooked perfection—every grain tells a story" },
      { name: "Murgh Hyderabadi Biryani", price: "₹389", description: "Nizami heritage in every aromatic spoonful", isChefSpecial: true },
      { name: "Mutton Dum Biryani", price: "₹511", description: "Tender mutton and aged basmati in perfect harmony", isSignature: true },
      { name: "Prawns Biryani", price: "₹548", description: "Coastal meets royal—succulent prawns in saffron rice" },
    ]
  },
  {
    title: "Fried Rice",
    items: [
      { name: "Veg Fried Rice", price: "₹309", tag: "Full", description: "Wok-tossed with garden vegetables and smoky wok hei" },
      { name: "Veg Schezwan Fried Rice", price: "₹332", tag: "Full", description: "Fiery Sichuan peppers ignite this spicy creation", isChefSpecial: true },
      { name: "Egg Fried Rice", price: "₹329", tag: "Full", description: "Silky egg ribbons dancing through fragrant rice" },
      { name: "Chicken Fried Rice", price: "₹367", tag: "Full", description: "Tender chicken pieces in aromatic, golden rice" },
      { name: "Chicken Schezwan Fried Rice", price: "₹424", tag: "Full", description: "Bold, spicy, and irresistibly addictive", isSignature: true },
    ]
  },
  {
    title: "Noodles",
    items: [
      { name: "Veg Hakka Noodles", price: "₹309", tag: "Full", description: "Silky strands tossed with crunchy vegetables" },
      { name: "Veg Schezwan Noodles", price: "₹332", description: "Spicy, smoky, and utterly slurp-worthy", isChefSpecial: true },
      { name: "Chicken Schezwan Noodles", price: "₹424", tag: "Full", description: "Tender chicken meets fiery Sichuan noodles", isSignature: true },
      { name: "Chicken Singapore Noodles", price: "₹436", description: "Curry-kissed noodles with Asian flair" },
    ]
  },
  {
    title: "Beverages",
    items: [
      { name: "Cold Coffee Milkshake", price: "₹263", description: "Chilled coffee bliss, creamy and refreshing" },
      { name: "Banoffee Milkshake", price: "₹287", description: "Banana and toffee dancing in creamy harmony", isChefSpecial: true },
      { name: "Brownie Milkshake", price: "₹323", description: "Decadent chocolate brownie swirled into creamy dreams", isSignature: true },
      { name: "Oreo Milkshake", price: "₹299", description: "Cookies and cream in a tall glass of happiness" },
      { name: "Vanilla Milkshake", price: "₹287", description: "Pure, simple, timeless vanilla comfort" },
      { name: "Chocolate Milkshake", price: "₹287", description: "Rich, velvety chocolate indulgence" },
      { name: "Strawberry Milkshake", price: "₹299", description: "Berry sweetness in a pink, dreamy swirl" },
    ]
  },
];

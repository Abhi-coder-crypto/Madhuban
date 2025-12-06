export type MenuItem = {
  name: string;
  price: string;
  description?: string;
  tag?: string;
};

export type MenuCategory = {
  title: string;
  items: MenuItem[];
};

export const menuData: MenuCategory[] = [
  {
    title: "Soups",
    items: [
      { name: "Sweet Corn Soup", price: "₹149" },
      { name: "Tom Kha Soup", price: "₹149" },
      { name: "Manchow Soup", price: "₹149", description: "A warm and comforting soup made with fresh ingredients." },
      { name: "Hot And Sour Soup", price: "₹155" },
      { name: "Noodles Soup", price: "₹139" },
      { name: "Tom Yum Soup", price: "₹149" },
      { name: "Lemon Coriander Soup", price: "₹149" },
      { name: "Sabz Ka Shorba", price: "₹259" },
      { name: "Tamatar Hari Daniya Shorba", price: "₹259" },
      { name: "Tomato Soup", price: "₹246" },
      { name: "Palak Adraki Shorba", price: "₹259" },
      { name: "Palak Soup", price: "₹246" },
      { name: "Murgh Shorba", price: "₹252" },
      { name: "Yakhni Shorba", price: "₹275" },
    ]
  },
  {
    title: "Salads",
    items: [
      { name: "Greek Salad", price: "₹259" },
      { name: "Russian Salad", price: "₹311" },
      { name: "Oriental Salad", price: "₹259" },
      { name: "Green Salad", price: "₹259" },
    ]
  },
  {
    title: "Veg Starters",
    items: [
      { name: "Kung Pao Potatoes", price: "₹332" },
      { name: "Stir Fried Vegetable", price: "₹355" },
      { name: "Mushroom Chilli Garlic Sauce", price: "₹355" },
      { name: "Paneer Crispy", price: "₹355", description: "A rich and creamy dish made with Indian cottage cheese." },
      { name: "Kung Pao Paneer", price: "₹367" },
      { name: "Paneer Chilli", price: "₹367", tag: "Full" },
      { name: "Barbeque Paneer", price: "₹401" },
      { name: "Paneer Satay", price: "₹367" },
      { name: "Paneer Salt And Pepper", price: "₹367" },
      { name: "Paneer 65", price: "₹367" },
      { name: "Paneer Peri Peri Dry", price: "₹367" },
      { name: "Mushroom Chilli", price: "₹332", tag: "Full" },
      { name: "Veg Crispy", price: "₹332", tag: "Full" },
      { name: "Veg Manchurian", price: "₹298", tag: "Full" },
      { name: "Hara Bhara Kebab", price: "₹355" },
      { name: "Veg Seekh Kebab", price: "₹367" },
      { name: "Paneer Malai Tikka", price: "₹401" },
      { name: "Afghani Paneer Tikka", price: "₹329" },
      { name: "Paneer Pahadi Tikka", price: "₹401" },
    ]
  },
  {
    title: "Non-Veg Starters",
    items: [
      { name: "Egg Chilli", price: "₹286" },
      { name: "Madhuvan Special Murgh Kebab", price: "₹499" },
      { name: "Chicken Hot Garlic", price: "₹413" },
      { name: "Chicken Peri Peri Dry", price: "₹424", tag: "Full" },
      { name: "Chicken Chilli Dry", price: "₹413" },
      { name: "Chicken Crispy", price: "₹424", tag: "Full" },
      { name: "Chicken Manchurian", price: "₹424" },
      { name: "Chicken Kung Pao", price: "₹447" },
      { name: "Chicken Lollipop", price: "₹436", tag: "Full" },
      { name: "Murgh Tikka", price: "₹401" },
      { name: "Murgh Malai Kebab", price: "₹436" },
      { name: "Murgh Tandoori", price: "₹419", tag: "Full" },
      { name: "Mutton Seekh Kebab", price: "₹586" },
      { name: "Basa Fish Tikka", price: "₹459" },
      { name: "Fish Finger", price: "₹459" },
      { name: "Tandoori Prawns", price: "₹675" },
      { name: "Butter Garlic Prawns", price: "₹571" },
    ]
  },
  {
    title: "Veg Main Course",
    items: [
      { name: "Madhuvan Special Veg", price: "₹441", tag: "Chef's Special" },
      { name: "Paneer Bhurji", price: "₹350" },
      { name: "Paneer Makhanwala", price: "₹363", tag: "Full" },
      { name: "Paneer Lababdar", price: "₹389", tag: "Full" },
      { name: "Palak Paneer", price: "₹363", tag: "Full" },
      { name: "Paneer Butter Masala", price: "₹402", tag: "Full" },
      { name: "Paneer Tikka Masala", price: "₹415", tag: "Full" },
      { name: "Veg Kolhapuri", price: "₹363", tag: "Full" },
      { name: "Veg Korma", price: "₹376" },
      { name: "Kaju Masala", price: "₹441", tag: "Full" },
      { name: "Dal Fry", price: "₹274", tag: "Full" },
      { name: "Dal Tadka", price: "₹299", tag: "Full" },
    ]
  },
  {
    title: "Non-Veg Main Course",
    items: [
      { name: "Murgh Butter Masala", price: "₹467", tag: "Full" },
      { name: "Murgh Tikka Masala", price: "₹443", tag: "Full" },
      { name: "Murgh Kadhai", price: "₹443", tag: "Full" },
      { name: "Butter Murgh", price: "₹467", tag: "Full" },
      { name: "Murgh Lababdar", price: "₹493" },
      { name: "Murgh Musallam", price: "₹569" },
      { name: "Mutton Rogan Josh", price: "₹585" },
      { name: "Mutton Keema Masala", price: "₹551" },
      { name: "Prawns Curry", price: "₹599" },
    ]
  },
  {
    title: "Breads",
    items: [
      { name: "Plain Roti", price: "₹45" },
      { name: "Butter Roti", price: "₹50" },
      { name: "Naan", price: "₹65" },
      { name: "Butter Naan", price: "₹76" },
      { name: "Garlic Naan", price: "₹109" },
      { name: "Cheese Garlic Naan", price: "₹219" },
      { name: "Kulcha", price: "₹76" },
      { name: "Laccha Paratha", price: "₹87" },
      { name: "Aloo Paratha", price: "₹241" },
    ]
  },
  {
    title: "Biryani",
    items: [
      { name: "Madhuvan Special Biryani", price: "₹426", tag: "Veg" },
      { name: "Veg Dum Biryani", price: "₹335", tag: "Veg" },
      { name: "Paneer Biryani", price: "₹353", tag: "Veg" },
      { name: "Madhuvan Special Murgh Biryani", price: "₹511" },
      { name: "Murgh Dum Biryani", price: "₹389" },
      { name: "Murgh Hyderabadi Biryani", price: "₹389" },
      { name: "Mutton Dum Biryani", price: "₹511" },
      { name: "Prawns Biryani", price: "₹548" },
    ]
  },
  {
    title: "Fried Rice",
    items: [
      { name: "Veg Fried Rice", price: "₹309", tag: "Full" },
      { name: "Veg Schezwan Fried Rice", price: "₹332", tag: "Full" },
      { name: "Egg Fried Rice", price: "₹329", tag: "Full" },
      { name: "Chicken Fried Rice", price: "₹367", tag: "Full" },
      { name: "Chicken Schezwan Fried Rice", price: "₹424", tag: "Full" },
    ]
  },
  {
    title: "Noodles",
    items: [
      { name: "Veg Hakka Noodles", price: "₹309", tag: "Full" },
      { name: "Veg Schezwan Noodles", price: "₹332" },
      { name: "Chicken Schezwan Noodles", price: "₹424", tag: "Full" },
      { name: "Chicken Singapore Noodles", price: "₹436" },
    ]
  },
  {
    title: "Beverages",
    items: [
      { name: "Cold Coffee Milkshake", price: "₹263" },
      { name: "Banoffee Milkshake", price: "₹287" },
      { name: "Brownie Milkshake", price: "₹323" },
      { name: "Oreo Milkshake", price: "₹299" },
      { name: "Vanilla Milkshake", price: "₹287" },
      { name: "Chocolate Milkshake", price: "₹287" },
      { name: "Strawberry Milkshake", price: "₹299" },
    ]
  },
];

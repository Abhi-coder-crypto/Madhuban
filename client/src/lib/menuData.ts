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
      { name: "Sweet Corn Soup", price: "₹149.00" },
      { name: "Tom Kha Soup", price: "₹149.00" },
      { name: "Manchow Soup", price: "₹149.00", description: "A warm and comforting soup made with fresh ingredients." },
      { name: "Hot And Sour Soup", price: "₹155.00" },
      { name: "Lemon Coriander Soup", price: "₹149.00" },
      { name: "Sabz Ka Shorba", price: "₹259.00" },
    ]
  },
  {
    title: "Salads",
    items: [
      { name: "Greek Salad", price: "₹259.00" },
      { name: "Russian Salad", price: "₹311.00" },
      { name: "Oriental Salad", price: "₹259.00" },
      { name: "Green Salad", price: "₹259.00" },
    ]
  },
  {
    title: "Veg Starters",
    items: [
      { name: "Kung Pao Potatoes", price: "₹332.00" },
      { name: "Stir Fried Vegetable", price: "₹355.00" },
      { name: "Paneer Crispy", price: "₹355.00", description: "A rich and creamy dish made with Indian cottage cheese." },
      { name: "Paneer Chilli", price: "₹367.00", tag: "[Full]", description: "A rich and creamy dish made with Indian cottage cheese." },
      { name: "Barbeque Paneer", price: "₹401.00" },
      { name: "Mushroom Chilli", price: "₹332.00", tag: "[Full]", description: "A deliciously prepared dish with authentic flavors." },
      { name: "Veg Manchurian", price: "₹298.00", tag: "[Full]", description: "A delicious veg dish full of fresh flavors." },
      { name: "Hara Bhara Kebab", price: "₹355.00" },
    ]
  },
  {
    title: "Non Veg Starters",
    items: [
      { name: "Chicken Hot Garlic", price: "₹413.00" },
      { name: "Chicken Peri Peri Dry", price: "₹424.00", tag: "[Full]", description: "A flavorful chicken dish cooked with aromatic spices." },
      { name: "Chicken Crispy", price: "₹424.00", tag: "[Full]" },
      { name: "Chicken Lollipop", price: "₹436.00", tag: "[Full]" },
      { name: "Murgh Tikka", price: "₹401.00" },
      { name: "Murgh Malai Kebab", price: "₹436.00" },
      { name: "Mutton Seekh Kebab", price: "₹586.00" },
      { name: "Basa Fish Tikka", price: "₹459.00" },
      { name: "Prawns Rava Fry", price: "₹499.00" },
    ]
  },
  {
    title: "Main Course - Veg",
    items: [
      { name: "Madhuvan Special Veg", price: "₹441.00", tag: "[Full]" },
      { name: "Paneer Makhanwala", price: "₹363.00", tag: "[Full]" },
      { name: "Paneer Lababdar", price: "₹389.00", tag: "[Full]" },
      { name: "Palak Paneer", price: "₹363.00", tag: "[Full]" },
      { name: "Veg Kolhapuri", price: "₹363.00", tag: "[Full]" },
      { name: "Dal Fry", price: "₹274.00", tag: "[Full]" },
    ]
  },
  {
    title: "Main Course - Non Veg",
    items: [
      { name: "Murgh Butter Masala", price: "₹467.00", tag: "[Full]" },
      { name: "Murgh Tikka Masala", price: "₹443.00", tag: "[Full]" },
      { name: "Butter Murgh", price: "₹467.00", tag: "[Full]" },
      { name: "Mutton Rogan Josh", price: "₹585.00" },
      { name: "Prawns Curry", price: "₹599.00" },
    ]
  },
  {
    title: "Rice and Biryani",
    items: [
      { name: "Madhuvan Special Biryani", price: "₹426.00", tag: "[Veg]" },
      { name: "Murgh Dum Biryani", price: "₹389.00", tag: "[Full]" },
      { name: "Mutton Dum Biryani", price: "₹511.00", tag: "[Full]" },
      { name: "Prawns Biryani", price: "₹548.00", tag: "[Full]" },
      { name: "Veg Fried Rice", price: "₹309.00", tag: "[Full]" },
      { name: "Chicken Fried Rice", price: "₹367.00", tag: "[Full]" },
    ]
  }
];

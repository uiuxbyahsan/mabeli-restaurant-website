/* =========================================================
   MABELLI FULL MENU DATA
   Edit here to update the live menu. Prices in KM (BAM).
   Order: Food, Hot Drinks, Drinks, Kids, Desserts.
   ========================================================= */

export interface MenuItem {
  name: string;
  price: number;
  /** optional short subtitle / description */
  note?: string;
  /** optional small category tag, e.g. "Signature", "Vegetarian" */
  tag?: string;
}

export interface MenuGroup {
  /** sub-category title, e.g. "Coffee Drinks" */
  name: string;
  items: MenuItem[];
}

export interface MenuCategory {
  key: string;
  /** tab label */
  label: string;
  groups: MenuGroup[];
}

export const MENU: MenuCategory[] = [
  {
    key: "food",
    label: "Food",
    groups: [
      {
        name: "Soups & Broths",
        items: [
          { name: "Tomato Soup", price: 8.0 },
          { name: "Cream of Cauliflower Soup", price: 8.0 },
          { name: "Daily Soup of the Day", price: 8.0, tag: "Daily" },
        ],
      },
      {
        name: "Breakfast",
        items: [
          { name: "Shakshouka", price: 10.0 },
          { name: "Hate Monday", price: 15.0 },
          { name: "Omelette", price: 10.0 },
          { name: "Mabelli Breakfast", price: 15.0, tag: "Signature" },
        ],
      },
      {
        name: "Appetizers",
        items: [
          { name: "Rolled Zucchini", price: 12.0 },
          { name: "Mini Shrimp Steaks", price: 14.0 },
          { name: "Focaccia", price: 4.0 },
        ],
      },
      {
        name: "Salads",
        items: [
          { name: "Beetroot Salad", price: 12.0 },
          { name: "Burrata Salad", price: 19.0, tag: "Signature" },
          { name: "Chicken Mabelli Salad", price: 14.0 },
          { name: "Mixed Seasonal Salad", price: 6.0 },
          { name: "Octopus Salad", price: 20.0 },
        ],
      },
      {
        name: "Main Courses",
        items: [
          { name: "Rolled Chicken Filet with Porcini Sauce", price: 20.0 },
          { name: "Beefsteak on Carrot and Sweet Potato Puree", price: 45.0 },
          { name: "Ribeye Steak with Chimichurri", price: 70.0, tag: "Signature" },
          { name: "Tuna Steak with Beurre Blanc Sauce", price: 45.0 },
          { name: "Grilled Octopus", price: 55.0, tag: "Signature" },
        ],
      },
      {
        name: "Burger",
        items: [
          { name: "Saburger", price: 19.0 },
          { name: "Chili Mabelli Burger", price: 18.0 },
          { name: "Mabelli Burger", price: 17.0 },
          { name: "Mabelli Beef Burger", price: 25.0 },
        ],
      },
      {
        name: "Pizza",
        items: [
          { name: "Margherita", price: 10.0 },
          { name: "Roulette", price: 15.0 },
          { name: "Tuna", price: 15.0 },
          { name: "Mabelli", price: 18.0, tag: "Signature" },
          { name: "Vegetariana", price: 12.0, tag: "Vegetarian" },
          { name: "Capricciosa", price: 12.0 },
        ],
      },
      {
        name: "Risotto & Pasta",
        items: [
          { name: "Gnocchi with Shrimp and Truffles", price: 20.0 },
          { name: "Casarecce with Chicken", price: 20.0 },
          { name: "Chef's Spaghetti", price: 24.0, tag: "Chef's" },
          { name: "Risotto with Smoked Seafood and Cheese Ice Cream", price: 22.0 },
          { name: "Risotto with Beets and Truffles", price: 20.0 },
        ],
      },
    ],
  },
  {
    key: "hot-drinks",
    label: "Hot Drinks",
    groups: [
      {
        name: "Coffee Drinks",
        items: [
          { name: "Espresso", price: 2.5 },
          { name: "Americano", price: 3.0 },
          { name: "Small Macchiato", price: 3.0 },
          { name: "Large Macchiato", price: 3.5 },
          { name: "Cappuccino", price: 4.0 },
          { name: "Latte", price: 5.0 },
          { name: "Nescafé Classic", price: 5.0 },
        ],
      },
      {
        name: "Teas",
        items: [
          { name: "Chamomile", price: 3.5, tag: "Herbal" },
          { name: "Mint", price: 3.5, tag: "Herbal" },
          { name: "Thyme", price: 3.5, tag: "Herbal" },
          { name: "Green Tea", price: 3.5 },
          { name: "Black Tea", price: 3.5 },
          { name: "Wild Berries", price: 3.5, tag: "Herbal" },
        ],
      },
    ],
  },
  {
    key: "drinks",
    label: "Drinks",
    groups: [
      {
        name: "Cold Drinks",
        items: [
          { name: "Coca Cola", price: 4.0 },
          { name: "Coca Cola Zero", price: 4.0 },
          { name: "Fanta Orange", price: 4.0 },
          { name: "Sprite", price: 4.0 },
          { name: "Schweppes Tonic Water", price: 4.0 },
          { name: "Schweppes Bitter Lemon", price: 4.0 },
          { name: "Schweppes Tangerine", price: 4.0 },
        ],
      },
      {
        name: "Natural Juices",
        items: [
          { name: "Lemonade with Honey", price: 6.0, tag: "Fresh" },
          { name: "Lemonade with Mint", price: 6.0, tag: "Fresh" },
          { name: "Freshly Squeezed Orange", price: 6.0, tag: "Fresh" },
          { name: "Squeezed Pineapple", price: 8.0, tag: "Fresh" },
          { name: "Freshly Squeezed Mix", price: 8.0, tag: "Fresh" },
        ],
      },
    ],
  },
  {
    key: "kids",
    label: "Kids Menu",
    groups: [
      {
        name: "For the Little Ones",
        items: [
          { name: "Tomato Soup with Mozzarella", price: 5.0 },
          { name: "Crispy Chicken with Fries", price: 10.0 },
          { name: "Spaghetti Mabelli Junior", price: 9.0 },
          { name: "French Fries", price: 5.0 },
        ],
      },
    ],
  },
  {
    key: "desserts",
    label: "Cakes / Desserts",
    groups: [
      {
        name: "The Sweet End",
        items: [
          {
            name: "Brownie Chocolate Cake with Vanilla Ice Cream",
            price: 8.0,
            tag: "House",
          },
          { name: "Creme Brulee with Orange", price: 8.0, tag: "House" },
          {
            name: "Coconut Panna Cotta with Avocado and White Chocolate",
            price: 8.0,
            tag: "House",
          },
        ],
      },
    ],
  },
];

/** format a KM price the European way: 2,50 KM */
export function formatKM(price: number): string {
  return price.toFixed(2).replace(".", ",") + " KM";
}

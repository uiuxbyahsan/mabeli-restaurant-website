/* =========================================================
   MABELLI — site-wide data (real, confirmed where noted)
   ========================================================= */

export const SITE = {
  name: "Cafe Restoran Mabelli",
  shortName: "Mabelli",
  tagline: "Aria, Sarajevo",
  // --- Real, confirmed contact data ---
  phone: "+387 61 640 022",
  phoneHref: "tel:+38761640022",
  email: "mabellirestoran@gmail.com",
  instagram: "https://www.instagram.com/caferestoranmabelli",
  instagramHandle: "@caferestoranmabelli",
  website: "mabelli.ba",
  address: {
    line1: "Blažujski drum 2c",
    line2: "Ilidža (Aria), Sarajevo",
    line3: "Bosnia & Herzegovina, 71210",
  },
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=Cafe+Restoran+Mabelli+Bla%C5%BEujski+drum+Ilid%C5%BEa+Sarajevo",
  // --- Opening hours (placeholder — confirm with client) ---
  hours: [
    { days: "Monday to Friday", time: "08:00 to 24:00" },
    { days: "Saturday to Sunday", time: "09:00 to 01:00" },
  ],
} as const;

export interface SignatureDish {
  name: string;
  /** elegant script word shown over the photo */
  script: string;
  price: number;
  note: string;
  img: string;
  tag?: string;
}

/** Curated hero dishes — real photography, real prices from the menu.
 *  Images chosen so any baked-in caption matches the dish (no clashes). */
export const SIGNATURE_DISHES: SignatureDish[] = [
  {
    name: "Ribeye Steak",
    script: "Ribeye",
    price: 70,
    note: "Dry-aged ribeye, house chimichurri",
    img: "/img/dish-steak.jpg",
    tag: "Signature",
  },
  {
    name: "Grilled Octopus",
    script: "Octopus",
    price: 55,
    note: "Charred over open flame",
    img: "/img/dish-grill.jpg",
    tag: "From the grill",
  },
  {
    name: "Burrata Salad",
    script: "Burrata",
    price: 19,
    note: "Creamy burrata, seasonal greens",
    img: "/img/dish-salad.jpg",
    tag: "Fresh",
  },
  {
    name: "Smoked Seafood Risotto",
    script: "Risotto",
    price: 22,
    note: "Smoked seafood, cheese ice cream",
    img: "/img/dish-risotto-doncarlo.jpg",
    tag: "Chef's table",
  },
  {
    name: "Mabelli Beef Burger",
    script: "Burger",
    price: 25,
    note: "Dry-aged beef, hand-cut fries",
    img: "/img/dish-burger.jpg",
    tag: "House Favourite",
  },
  {
    name: "Shakshouka",
    script: "Shakshouka",
    price: 10,
    note: "A warm morning classic",
    img: "/img/dish-shakshuka.jpg",
    tag: "Breakfast",
  },
];

export interface GalleryImage {
  src: string;
  alt: string;
}

export const GALLERY: GalleryImage[] = [
  { src: "/img/gal-plated2.jpg", alt: "A plated fine dining course" },
  { src: "/img/gal-steak.jpg", alt: "Grilled steak with hand-cut fries" },
  { src: "/img/gal-interior.jpg", alt: "The Mabelli dining room" },
  { src: "/img/gal-pasta2.jpg", alt: "Pasta in a rich tomato sauce" },
  { src: "/img/gal-burger.jpg", alt: "A dry-aged Mabelli burger" },
  { src: "/img/gal-seafood.jpg", alt: "A fresh seafood plate" },
  { src: "/img/gal-dessert2.jpg", alt: "Chocolate dessert" },
  { src: "/img/gal-espresso.jpg", alt: "A freshly pulled espresso" },
];

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
] as const;

/** Menu sub-category → hover-preview image (keyed by MenuGroup.name).
 *  Reuses real Mabelli photos; stock fills the gaps (drinks, juice, pizza). */
export const MENU_GROUP_IMAGES: Record<string, string> = {
  "Coffee Drinks": "/img/venue-espresso.jpg",
  Teas: "/img/venue-espresso.jpg",
  "Cold Drinks": "/img/stock-drink.jpg",
  "Natural Juices": "/img/stock-juice.jpg",
  "Soups & Broths": "/img/dish-soup.jpg",
  Breakfast: "/img/dish-shakshuka.jpg",
  Appetizers: "/img/dish-platter.jpg",
  Salads: "/img/dish-salad.jpg",
  "Main Courses": "/img/dish-steak.jpg",
  Burger: "/img/dish-burger.jpg",
  Pizza: "/img/stock-pizza.jpg",
  "Risotto & Pasta": "/img/dish-risotto-doncarlo.jpg",
  "For the Little Ones": "/img/dish-burger.jpg",
  "The Sweet End": "/img/dish-dessert.jpg",
};

/** Default image shown in the desktop menu preview panel per category (idle state). */
export const CATEGORY_IMAGES: Record<string, string> = {
  food: "/img/dish-steak.jpg",
  "hot-drinks": "/img/venue-espresso.jpg",
  drinks: "/img/stock-juice.jpg",
  kids: "/img/dish-burger.jpg",
  desserts: "/img/dish-dessert.jpg",
};

/** Per-item preview image (keyed by MenuItem.name). The single desktop panel
 *  crossfades to this on hover. Items not listed fall back to their group image. */
export const MENU_ITEM_IMAGES: Record<string, string> = {
  // Soups & Broths
  "Tomato Soup": "/img/item-tomato-soup.jpg",
  "Cream of Cauliflower Soup": "/img/item-cream-soup.jpg",
  "Daily Soup of the Day": "/img/dish-soup.jpg",
  // Breakfast
  Shakshouka: "/img/dish-shakshuka.jpg",
  "Hate Monday": "/img/dish-eggs.jpg",
  Omelette: "/img/dish-eggs.jpg",
  "Mabelli Breakfast": "/img/dish-platter.jpg",
  // Appetizers
  "Rolled Zucchini": "/img/dish-platter.jpg",
  "Mini Shrimp Steaks": "/img/gal-seafood.jpg",
  Focaccia: "/img/dish-platter.jpg",
  // Salads
  "Beetroot Salad": "/img/dish-salad.jpg",
  "Burrata Salad": "/img/dish-salad.jpg",
  "Chicken Mabelli Salad": "/img/dish-parmegiano.jpg",
  "Mixed Seasonal Salad": "/img/dish-salad.jpg",
  "Octopus Salad": "/img/dish-grill.jpg",
  // Main Courses
  "Rolled Chicken Filet with Porcini Sauce": "/img/dish-parmegiano.jpg",
  "Beefsteak on Carrot and Sweet Potato Puree": "/img/gal-steak.jpg",
  "Ribeye Steak with Chimichurri": "/img/dish-steak.jpg",
  "Tuna Steak with Beurre Blanc Sauce": "/img/dish-salmon.jpg",
  "Grilled Octopus": "/img/dish-grill.jpg",
  // Burger
  Saburger: "/img/dish-burger.jpg",
  "Chili Mabelli Burger": "/img/gal-burger.jpg",
  "Mabelli Burger": "/img/dish-burger.jpg",
  "Mabelli Beef Burger": "/img/gal-burger.jpg",
  // Pizza
  Margherita: "/img/item-margherita.jpg",
  Roulette: "/img/stock-pizza.jpg",
  Tuna: "/img/stock-pizza.jpg",
  Mabelli: "/img/item-margherita.jpg",
  Vegetariana: "/img/stock-pizza.jpg",
  Capricciosa: "/img/item-margherita.jpg",
  // Risotto & Pasta
  "Gnocchi with Shrimp and Truffles": "/img/gal-seafood.jpg",
  "Casarecce with Chicken": "/img/dish-risotto-chicken.jpg",
  "Chef's Spaghetti": "/img/gal-pasta2.jpg",
  "Risotto with Smoked Seafood and Cheese Ice Cream": "/img/dish-risotto-doncarlo.jpg",
  "Risotto with Beets and Truffles": "/img/dish-lasagne.jpg",
  // Coffee Drinks
  Espresso: "/img/gal-espresso.jpg",
  Americano: "/img/venue-espresso.jpg",
  "Small Macchiato": "/img/venue-espresso.jpg",
  "Large Macchiato": "/img/venue-espresso.jpg",
  Cappuccino: "/img/item-latte.jpg",
  Latte: "/img/item-latte.jpg",
  "Nescafé Classic": "/img/venue-espresso.jpg",
  // Teas
  Chamomile: "/img/item-tea.jpg",
  Mint: "/img/item-tea.jpg",
  Thyme: "/img/item-tea.jpg",
  "Green Tea": "/img/item-tea.jpg",
  "Black Tea": "/img/item-tea.jpg",
  "Wild Berries": "/img/item-tea.jpg",
  // Natural Juices
  "Lemonade with Honey": "/img/item-lemonade.jpg",
  "Lemonade with Mint": "/img/item-lemonade.jpg",
  "Freshly Squeezed Orange": "/img/stock-juice.jpg",
  "Squeezed Pineapple": "/img/stock-juice.jpg",
  "Freshly Squeezed Mix": "/img/stock-juice.jpg",
  // Kids
  "Tomato Soup with Mozzarella": "/img/item-tomato-soup.jpg",
  "Crispy Chicken with Fries": "/img/dish-schnitzel.jpg",
  "Spaghetti Mabelli Junior": "/img/gal-pasta2.jpg",
  "French Fries": "/img/dish-burger.jpg",
  // Desserts
  "Brownie Chocolate Cake with Vanilla Ice Cream": "/img/gal-dessert2.jpg",
  "Creme Brulee with Orange": "/img/dish-dessert.jpg",
  "Coconut Panna Cotta with Avocado and White Chocolate": "/img/dish-dessert.jpg",
};

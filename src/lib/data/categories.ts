export interface CategoryCard {
  name: string;
  slug: string;
  image: string;
}

export const categories: CategoryCard[] = [
  { name: "Traditional Snacks", slug: "Traditional Snacks", image: "https://picsum.photos/seed/cat-traditional/500/500" },
  { name: "Cookies", slug: "Cookies", image: "https://picsum.photos/seed/cat-cookies/500/500" },
  { name: "Snack Jars", slug: "Snack Jars", image: "https://picsum.photos/seed/cat-jars/500/500" },
  { name: "Hampers", slug: "Hampers", image: "https://picsum.photos/seed/cat-hampers/500/500" },
];

export const journeySteps = [
  { title: "Ingredients", description: "Sourcing premium quality local produce.", icon: "wheat" as const },
  { title: "Recipe", description: "Handcrafted following family secrets.", icon: "book" as const },
  { title: "Quality Control", description: "Checking every batch for perfection.", icon: "shield" as const },
  { title: "Packaging", description: "Carefully sealed for freshness.", icon: "package" as const },
  { title: "Fresh Delivery", description: "Straight from our oven to your door.", icon: "truck" as const },
];

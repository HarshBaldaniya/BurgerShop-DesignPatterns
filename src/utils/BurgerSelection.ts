import * as readline from "readline";
import { IVegBurger } from "../interfaces/IVegBurger";
import { VegBurgerFactory } from "../module/factories/VegBurgerFactory";
import { CustomVegBurgerBuilder} from "../module/builders/CustomVegBurgerBuilder";
import { CustomVegBurgerBuilderwithMenu } from "../module/composite/CustomVegBurgerComposite";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export function buildAndCookCustomBurger() {
    console.log("\nBuilding a custom veg burger...");
    const myCustomVegBurger = new CustomVegBurgerBuilder()
        .setBun("whole wheat bun") // Adding a bun
        .setPatties("black bean patty") // Adding patties
        .setSauce("avocado spread") // Adding sauce
        .setToppings(["tomato", "onions"]) // Adding toppings
        .build();

    // Cooking the custom burger
    console.log("Cooking your custom veggie burger with", myCustomVegBurger.ingredients.join(", "), '\n');
    rl.close();
}

export function buildAndCookCustomBurgerwithMenu() {
  console.log("\nBuilding a custom veg meal...");
  const myCustomMeal = new CustomVegBurgerBuilderwithMenu()
    .setBun("whole wheat bun")
    .setPatties("black bean patty")
    .setSauce("avocado spread")
    .setToppings(["tomato", "onions"])
    .addSide("fries", 2.0)
    .addDrink("cola", 1.5)
    .build();

  // Cooking the custom meal involves printing out all components
  console.log("Your custom meal includes:");
  myCustomMeal.print();
  console.log("\n"); // Ensure we add a new line for clean separation in terminal
  rl.close();
}

export function selectBurger(rl: readline.Interface, callback: Function) {
  console.log("\nPlease select the type of veggie burger you'd like:");
  console.log("1: Classic Veggie Burger");
  console.log("2: Spicy Veggie Burger");
  console.log("3: Mushroom Veggie Burger");
  rl.question("Enter the number of your choice: ", (answer) => {
    let burgerType = "";
    switch (answer.trim()) {
      case "1":
        burgerType = "classic";
        break;
      case "2":
        burgerType = "spicy";
        break;
      case "3":
        burgerType = "mushroom";
        break;
      default:
        console.log("Invalid selection, please try again.");
        selectBurger(rl, callback);
        // rl.close();
        return;
    }

    const selectedBurger: IVegBurger =
      VegBurgerFactory.createBurger(burgerType);
    console.log(`\nGreat choice! Here's your ${burgerType} veggie burger:`);
    selectedBurger.cook();

    callback();  // Proceed to build and cook a custom burger
    rl.close();  // Close readline after operation is complete
  });
}
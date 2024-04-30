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
    const builder = new CustomVegBurgerBuilderwithMenu();
    console.log("\nBuilding a custom veg meal...");
    
    rl.question("Choose a bun (e.g., whole wheat, sesame): ", bun => {
        builder.setBun(bun);
        
        rl.question("Choose a patty (e.g., black bean, mushroom): ", patty => {
            builder.setPatties(patty);
            
            rl.question("Choose a sauce (e.g., mayo, spicy): ", sauce => {
                builder.setSauce(sauce);
                
                rl.question("Enter toppings (comma separated, e.g., tomato, lettuce): ", toppings => {
                    const toppingsList = toppings.split(",").map(item => item.trim());
                    builder.setToppings(toppingsList);
                    
                    const meal = builder.build();
                    console.log("Your custom meal includes:");
                    meal.print();
                    console.log(`Total cost: $${meal.getPrice()}`);
                    rl.close();
                });
            });
        });
    });
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
import * as readline from "readline";
import { selectBurger, buildAndCookCustomBurgerwithMenu, buildAndCookCustomBurger } from "./utils/BurgerSelection";
import { CustomVegBurgerBuilderwithMenu } from "./module/composite/CustomVegBurgerComposite";

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// selectBurger(rl, buildAndCookCustomBurgerwithMenu);

// buildAndCookCustomBurger();

// buildAndCookCustomBurgerwithMenu();

const options = {
    buns: ["whole wheat", "sesame", "gluten-free"],
    patties: ["black bean", "mushroom", "chickpea"],
    sauces: ["mayo", "spicy", "avocado spread"],
    toppings: ["tomato", "lettuce", "onions", "pickles"],
    sides: ["fries", "salad", "none"],
    drinks: ["cola", "water", "none"]
};

function ask(question: string, choices: any[], callback: { (bun: any): void; (patty: any): void; (sauce: any): void; (toppingInput: any): void; (side: any): void; (drink: any): void; (arg0: any): void; }) {
    console.log(question);
    choices.forEach((choice: any, index: number) => console.log(`${index + 1}. ${choice}`));
    rl.question('Choose an option: ', input => {
        const choice = parseInt(input) - 1;
        if (choice >= 0 && choice < choices.length) {
            callback(choices[choice]);
        } else {
            console.log("Invalid option, please try again.");
            ask(question, choices, callback);
        }
    });
}

function buildCustomMeal() {
    const builder = new CustomVegBurgerBuilderwithMenu();

    ask("Choose a bun:", options.buns, (bun: string) => {
        builder.setBun(bun);
        ask("Choose a patty:", options.patties, (patty: string) => {
            builder.setPatties(patty);
            ask("Choose a sauce:", options.sauces, (sauce: string) => {
                builder.setSauce(sauce);
                ask("Choose toppings (type number separated by commas):", options.toppings, (toppingInput: string) => {
                    const toppingChoices = toppingInput.split(',').map((index: string) => options.toppings[parseInt(index.trim()) - 1]).filter((t: any) => t);
                    builder.setToppings(toppingChoices);
                    ask("Choose a side:", options.sides, (side: string) => {
                        if (side !== 'none') {
                            builder.addSide(side, 2.0);
                        }
                        ask("Choose a drink:", options.drinks, (drink: string) => {
                            if (drink !== 'none') {
                                builder.addDrink(drink, 1.5);
                            }
                            const meal = builder.build();
                            console.log("Your custom meal includes:");
                            meal.print();
                            console.log(`Total cost: $${meal.getPrice()}`);
                            rl.close();
                        });
                    });
                });
            });
        });
    });
}

buildCustomMeal();

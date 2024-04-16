    import * as readline from 'readline';
    import { IVegBurger } from "./interfaces/IVegBurger";
    import { CustomVegBurgerBuilder } from "./module/builders/CustomVegBurgerBuilder";
    import { VegBurgerFactory } from "./module/factories/VegBurgerFactory";

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    function buildAndCookCustomBurger() {
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

    function selectBurger() {
        console.log("\nPlease select the type of veggie burger you'd like:");
        console.log("1: Classic Veggie Burger");
        console.log("2: Spicy Veggie Burger");
        console.log("3: Mushroom Veggie Burger");
        rl.question('Enter the number of your choice: ', (answer) => {
            let burgerType = '';
            switch(answer.trim()) {
                case '1': burgerType = 'classic'; break;
                case '2': burgerType = 'spicy'; break;
                case '3': burgerType = 'mushroom'; break;
                default: 
                    console.log('Invalid selection, please try again.');
                    selectBurger();
                    // rl.close();
                    return;
            }

            const selectedBurger: IVegBurger = VegBurgerFactory.createBurger(burgerType);
            console.log(`\nGreat choice! Here's your ${burgerType} veggie burger:`);
            selectedBurger.cook();

            // After cooking the selected burger, automatically proceed to build and cook a custom burger
            buildAndCookCustomBurger();
        });
    }

    selectBurger();

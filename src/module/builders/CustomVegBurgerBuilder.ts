import { IVegBurger } from "../../interfaces/IVegBurger";

// SimpleVegBurger implements IVegBurger interface, designed for building custom veggie burgers
class SimpleVegBurger implements IVegBurger {
    constructor(public ingredients: string[]) {}

    // Cook method to simulate the cooking process, displaying the ingredients used
    cook(): void {
        console.log("Cooking a burger with: " + this.ingredients.join(", "));
    }
}

// CustomVegBurgerBuilder allows for the step-by-step construction of a veggie burger
export class CustomVegBurgerBuilder {
    private ingredients: string[] = [];

    // Adds a bun to the burger
    setBun(bun: string): this {
        console.log(`Adding bun: ${bun}`); // Debugging log
        this.ingredients.push(bun);
        return this;
    }

    // Adds patties to the burger
    setPatties(patties: string): this {
        console.log(`Adding patties: ${patties}`); // Debugging log
        this.ingredients.push(patties);
        return this;
    }

    // Adds sauce to the burger
    setSauce(sauce: string): this {
        console.log(`Adding sauce: ${sauce}`); // Debugging log
        this.ingredients.push(sauce);
        return this;
    }

    // Adds toppings to the burger, loggin
    setToppings(toppings: string[]): this {
        toppings.forEach(topping => console.log(`Adding topping: ${topping}`)); // Debugging log for each topping
        this.ingredients.push(...toppings);
        return this;
    }

    // Builds the custom veggie burger, returning an instance of SimpleVegBurger
    build(): IVegBurger {
        console.log(`Building burger with ingredients: ${this.ingredients.join(", ")}`); // Final debugging log before build
        return new SimpleVegBurger(this.ingredients);
    }
}

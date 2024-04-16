import { IVegBurger } from "../../interfaces/IVegBurger";

// Represents a classic veggie burger with standard ingredients
export class ClassicVegBurger implements IVegBurger {
    ingredients = ["veggie patty", "lettuce", "tomato", "vegan mayo"];
    
    // Cook method to simulate the cooking process of the classic veggie burger
    cook(): void {
        // Logging the cooking process with the ingredients used
        console.log("Cooking a classic veg burger with", this.ingredients.join(", "));
    }
}

import { IVegBurger } from "../../interfaces/IVegBurger";

// Represents a spicy veggie burger for those who prefer a bit of heat
export class SpicyVegBurger implements IVegBurger {
    ingredients = ["spicy veggie patty", "jalapenos", "lettuce", "spicy sauce"];
    
    // Cook method to simulate the cooking process of the spicy veggie burger
    cook(): void {
        // Logging the cooking process with the ingredients used
        console.log("Cooking a spicy veg burger with", this.ingredients.join(", "));
    }
}

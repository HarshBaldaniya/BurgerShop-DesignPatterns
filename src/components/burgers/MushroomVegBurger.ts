import { IVegBurger } from "../../interfaces/IVegBurger";

// Represents a mushroom veggie burger with gourmet ingredients
export class MushroomVegBurger implements IVegBurger {
    ingredients = ["mushroom patty", "arugula", "caramelized onions", "truffle aioli"];
    
    // Cook method to simulate the cooking process of the mushroom veggie burger
    cook(): void {
        // Logging the cooking process with the ingredients used
        console.log("Cooking a mushroom veg burger with", this.ingredients.join(", "));
    }
}

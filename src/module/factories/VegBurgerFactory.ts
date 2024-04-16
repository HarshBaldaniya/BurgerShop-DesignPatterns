import { ClassicVegBurger } from "../../components/burgers/ClassicVegBurger";
import { MushroomVegBurger } from "../../components/burgers/MushroomVegBurger";
import { SpicyVegBurger } from "../../components/burgers/SpicyVegBurger";
import { IVegBurger } from "../../interfaces/IVegBurger";

// The VegBurgerFactory class is responsible for creating instances of different types of veg burgers
export class VegBurgerFactory {
    // Static method to create and return a veg burger based on the specified type
    static createBurger(burgerType: string): IVegBurger {
        console.log(`Factory request to create a ${burgerType} veg burger`); // Log the type of burger being requested

        // Switch case to determine which burger type to create based on the input
        switch (burgerType) {
            case "classic":
                console.log("Creating a classic veg burger"); // Log creation action
                return new ClassicVegBurger();
            case "spicy":
                console.log("Creating a spicy veg burger"); // Log creation action
                return new SpicyVegBurger();
            case "mushroom":
                console.log("Creating a mushroom veg burger"); // Log creation action
                return new MushroomVegBurger();
            default:
                // Log and throw an error if the burger type is not supported
                console.error("Error: Veg burger type not supported");
                throw new Error("Veg burger type not supported");
        }
    }
}

import { IVegBurger } from "../../interfaces/IVegBurger";
import { Menu } from "../../components/menu/Menu";
import { MenuComponent } from "../../components/menu/MenuComponent";
import { MenuItem } from "../../components/menu/MenuItem";

// SimpleVegBurger implements IVegBurger interface, designed for building custom veggie burgers
class SimpleVegBurger implements IVegBurger {
  constructor(public ingredients: string[]) {}

  // Cook method to simulate the cooking process, displaying the ingredients used
  cook(): void {
    console.log("Cooking a burger with: " + this.ingredients.join(", "));
  }
}

export class CustomVegBurgerBuilderwithMenu {
  private menu: MenuComponent;

  constructor() {
    this.menu = new Menu("Custom Meal");
  }

  setBun(bun: string): this {
    this.menu.add(new MenuItem(bun, 0.75));
    return this;
  }

  setPatties(patties: string): this {
    this.menu.add(new MenuItem(patties, 1.5));
    return this;
  }

  setSauce(sauce: string): this {
    this.menu.add(new MenuItem(sauce, 0.25));
    return this;
  }

  setToppings(toppings: string[]): this {
    toppings.forEach((topping) => {
      this.menu.add(new MenuItem(topping, 0.1));
    });
    return this;
  }

  addSide(side: string, price: number): this {
    this.menu.add(new MenuItem(side, price));
    return this;
  }

  addDrink(drink: string, price: number): this {
    this.menu.add(new MenuItem(drink, price));
    return this;
  }

  build(): MenuComponent {
    return this.menu;
  }
}

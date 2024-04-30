// CustomVegBurgerBuilderwithMenu.ts

import { Menu } from "../../components/menu/Menu";
import { MenuComponent } from "../../components/menu/MenuComponent";
import { MenuItem } from "../../components/menu/MenuItem";


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
        toppings.forEach(topping => this.menu.add(new MenuItem(topping, 0.10)));
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

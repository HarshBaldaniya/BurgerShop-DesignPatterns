// Menu.ts
import { MenuComponent } from "./MenuComponent";

export class Menu extends MenuComponent {
    private components: MenuComponent[] = [];
    private name: string;

    constructor(name: string) {
        super();
        this.name = name;
    }

    add(component: MenuComponent): void {
        this.components.push(component);
    }

    remove(component: MenuComponent): void {
        const index = this.components.indexOf(component);
        if (index !== -1) {
            this.components.splice(index, 1);
        }
    }

    getPrice(): number {
        return this.components.reduce((total, component) => total + component.getPrice(), 0);
    }

    print(): void {
        console.log(`Menu ${this.name} ($${this.getPrice()}):`);
        this.components.forEach(component => component.print());
    }
}

// MenuItem.ts
import { MenuComponent } from "./MenuComponent";

export class MenuItem extends MenuComponent {
  constructor(private name: string, private price: number) {
    super();
  }

  getPrice(): number {
    return this.price;
  }

  print(): void {
    console.log(`${this.name}: $${this.price}`);
  }
}

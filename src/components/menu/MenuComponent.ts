// MenuComponent.ts
export abstract class MenuComponent {
    abstract getPrice(): number;
    abstract print(): void;
    add(component: MenuComponent): void {
        throw new Error("This operation is not supported");
    }
    remove(component: MenuComponent): void {
        throw new Error("This operation is not supported");
    }
}

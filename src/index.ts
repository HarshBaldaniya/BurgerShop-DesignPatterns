import * as readline from "readline";
import { selectBurger, buildAndCookCustomBurgerwithMenu, buildAndCookCustomBurger } from "./utils/BurgerSelection";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// selectBurger(rl, buildAndCookCustomBurgerwithMenu);

buildAndCookCustomBurger();

buildAndCookCustomBurgerwithMenu();

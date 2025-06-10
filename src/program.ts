import { Effect } from "effect";
import * as pipe from "./pipe";
export class ConsoleApp {
    private words:string;
    private numeral:number;
    constructor() {
        this.words = "";
        this.numeral = 0;
    }

    public async getUserInput(): Promise<void> {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        const question = (query: string): Promise<string> => {
            return new Promise(resolve => {
                readline.question(query, (answer: string) => {
                    resolve(answer);
                });
            });
        };
        try {
            console.log("Welcome to The Alien Numeral Application!");
            console.log("Menu Alien Language : [A, B, Z, L, C, D, R]");
            this.words = await question("What's your favorite alien word? :");
            const program = pipe.run(this.words);
            this.numeral = await Effect.runPromise(program);
            this.displayInfo();
        } catch (error) {
            console.error(`Error: ${error instanceof Error ? error.message : error}`);
        } finally {
            readline.close();
        }
    }

    // Method to display information
    private displayInfo(): void {
        console.log("\n--- Information ---");
        console.log(`Alien Word: ${this.words.toUpperCase()}`);
        console.log(`Numeral: ${this.words.toUpperCase()}`);
        console.log("------------------------");
    }
}

// Run the program
const app = new ConsoleApp();
app.getUserInput();
import https from "https";
import chalk from "chalk";
import { get } from "http";

const getJoke = () => {
    const url = "https://official-joke-api.appspot.com/random_joke";

    https.get(url, res => {
        let data = "";
        res.on("data", chunk => {
            data += chunk;
        });

        res.on("end", () => {
            const joke = JSON.parse(data);
            console.log(
                chalk.yellow(`\nHere's a random ${joke.type} joke for you:`)
            );
            console.log(chalk.blue.bold(joke.setup));
            console.log(chalk.green.bold(joke.punchline));
        });

        res.on("error", err => {
            console.error("Error fetching joke:", err);
        });
    });
};

getJoke();

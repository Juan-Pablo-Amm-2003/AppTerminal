"use strict";
import inquirer from "inquirer";

export async function esperarConfrimacion() {
    await inquirer.prompt({
        type: "confirm",
        name: "confrimacion",
        Message: "Precione ENTER para continuar"
    });
}

"use strict"


import inquirer from "inquirer";
import { esperarConfrimacion } from "./src/utils/esperarConfrimacion.js";
import { leerTareas } from './src/crud/leerTareas.js';
import { agregarTarea } from "./src/utils/agregarTarea.js";
import { eliminarTarea } from "./src/crud/eliminarTarea.js";
import { modificarTareas } from "./src/crud/modificarTareas.js";

await main();

export async function main() {
    while (true) {
        console.clear();
        const respuesta = await inquirer.prompt({
            type: "list",
            name: "opcion",
            Message: "ingrese una opcion: ",
            choices: ["Leer tareas",
                "Agregar tareas",
                "Editar tareas",
                "Eliminar tareas",
                "salir"]
        });


        if (respuesta.opcion === "Editar tareas") {
            const tareas = await leerTareas();

            await modificarTareas(tareas);
        }

        if (respuesta.opcion === "Eliminar tareas") {
            await eliminarTarea();
        }

        if (respuesta.opcion === "Leer tareas") {
            await leerTareas();
        }

        if (respuesta.opcion === "Agregar tareas") {
            await agregarTarea();
        }

        if (respuesta.opcion === "salir") {
            break;
        }

        await esperarConfrimacion();
    }
}


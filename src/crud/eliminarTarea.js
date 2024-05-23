"use strict";
import inquirer from "inquirer";
import { leerTareas } from './leerTareas.js';
import { escribirTareas } from "./escribirTareas.js";

export async function eliminarTarea() {
    const tareas = await leerTareas();
    console.log(tareas);

    const seleccionadoBorrar = await inquirer.prompt({
        type: "list",
        name: "nombre",
        message: "Seleccione una tarea a eliminar: ",
        choices: tareas.map((tarea) => tarea.nombre)
    });

    const tareasFiltradas = tareas.filter(
        (tarea) => tarea.nombre !== seleccionadoBorrar.nombre
    );

    await escribirTareas(tareasFiltradas);
}

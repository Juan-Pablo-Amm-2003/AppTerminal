"use strict";
import inquirer from "inquirer";
import { escribirTareas } from "./escribirTareas.js";

export async function modificarTareas(tareas) {
    const seleccionadoEditar = await inquirer.prompt({
        type: "list",
        name: "nombre",
        message: "Seleccione una tarea a editar: ",
        choices: tareas.map((tarea) => tarea.nombre)
    });

    const ingreseNuevaDesc = await inquirer.prompt({
        type: 'input',
        name: 'desc',
        message: `Ingrese la nueva descripcion de su tarea${seleccionadoEditar.nombre}: `,
    });

    const tareasMapeadas = tareas.map((tarea) => {
        if (tarea.nombre === seleccionadoEditar.nombre) {
            tarea.desc = ingreseNuevaDesc.desc;
        }
        return tarea;
    });

    await escribirTareas(tareasMapeadas);
}

"use strict";
import inquirer from "inquirer";
import { leerTareas } from '../crud/leerTareas.js';
import { escribirTareas } from '../crud/escribirTareas.js';

export async function agregarTarea() {
    const tareas = await leerTareas();

    const inputNombre = await inquirer.prompt({
        type: 'input',
        name: 'nombre',
        message: 'Ingrese su nueva tarea: ',
    });

    const inputDesc = await inquirer.prompt({
        type: 'input',
        name: 'desc',
        message: 'Ingrese la descripcion: ',
    });
    tareas.push({
        nombre: inputNombre.nombre,
        desc: inputDesc.desc
    });


    await escribirTareas(tareas);
    console.log(tareas);
    console.log("Tarea agregada correctamente");
    console.clear();
}

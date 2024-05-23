"use strict"


import inquirer from "inquirer";
import { esperarConfrimacion } from "./esperarConfrimacion.js";
import { leerTareas } from './leerTareas.js';
import { agregarTarea } from "./agregarTarea.js";
import { eliminarTarea } from "./eliminarTarea.js";
import { escribirTareas } from "./escribirTareas.js";





while(true){
    console.clear()
    const respuesta = await inquirer.prompt({
        type: "list",
        name: "opcion", 
        Message: "ingrese una opcion: ",
        choices: [   "Leer tareas",
                     "Agregar tareas", 
                     "Editar tareas", 
                     "Eliminar tareas", 
                     "salir" ] 
    });
    

    if (respuesta.opcion === "Editar tareas") {
        const tareas = await leerTareas();
    
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







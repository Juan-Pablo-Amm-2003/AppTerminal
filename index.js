"use strict"


import path from 'path';
import fs from 'fs/promises';
import inquirer from "inquirer";
import { esperarConfrimacion } from "./esperarConfrimacion.js";
import { leerTareas } from './leerTareas.js';



//el top lvl await esta incorporado en la version en node 16

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
    

    
    if (respuesta.opcion === "Leer tareas") {
        await leerTareas();
    }

    if (respuesta.opcion === "Agregar tareas") {
        const tareas = await leerTareas();

       tareas.push({ nombre: "BOCA", desc: "AAAAAAAAAAAAA" });
   
         const dbpath = path.resolve("db", "tareas.json");
         const jsonString = JSON.stringify(tareas);
         await fs.writeFile(dbpath, jsonString);

         console.log(tareas);
    }
    
    if (respuesta.opcion === "salir") {
        break;
    }

    await esperarConfrimacion();
}




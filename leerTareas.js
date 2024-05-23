"use strict";
import fs from 'fs/promises';
import path from 'path';

export async function leerTareas() {
    const dbpath = path.resolve("db", "tareas.json");
    
    try {
        const dbBuffer = await fs.readFile(dbpath);
        const dbString = dbBuffer.toString();
        const tareas = JSON.parse(dbString);  
        
        tareas.forEach(tarea => {
            console.log(`
            tarea: ${tarea.nombre}
            descripcion: ${tarea.desc}`);
        });
        return tareas;
    } catch (error) {
        console.error("Error al leer o parsear el archivo de tareas:", error);
        return [];
    }
}

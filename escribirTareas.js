"use strict";
import path from 'path';
import fs from 'fs/promises';

export async function escribirTareas(tareas) {
    const dbpath = path.resolve("db", "tareas.json");
    const jsonString = JSON.stringify(tareas);
    await fs.writeFile(dbpath, jsonString);
}

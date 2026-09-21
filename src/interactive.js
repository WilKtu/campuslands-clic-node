import readline from 'node:readline/promises';
import{ stdin as input, stdin as output } from 'node:process';
import { agregar } from '../data/campers';

const rl = readline.createInterface({  input, output });

try{
    console.log('=== Registro interactivo de campers {ESM} ===');
    const nombre = await rl.question('Nombre del camper');
    const stack =  await rl.question('stack tecnologico');

    const guardado = await agregar(nombre, stack);
    console.log('registrado en JSON',guardado);

} finally {
    rl.close();
}
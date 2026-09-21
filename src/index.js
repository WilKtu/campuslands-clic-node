import { agregar, listarCamper, buscarCamperPorNombre} from '../data/campers.js';

const [comando,agr1,agr2 ] = process.argv;

try{
    switch (comando){
        case 'agregar': {
            const c = await agregar(agr1,agr2);
            console.log('Camper registrado: ',c);
            break;
        }

        case 'listar':{
            const lista = await listarCamper();
            if (lista.length === 0){
                console.log('No hay campers aun');
            } else {
                console.table(lista);
            }
            break;
        }
        default:
            console.log('uso: node src/index.js [listar | agregar | buscar]')
    }
}
catch{
    console.log(Error.message)
}
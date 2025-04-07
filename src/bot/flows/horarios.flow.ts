import { addKeyword, utils } from '@builderbot/bot';
import { BaileysProvider as Provider } from '@builderbot/provider-baileys'
import { MemoryDB as Database } from '@builderbot/bot'
import { menuPrincipalFlow } from './menus.flow';
import { despedidaFlow } from './despedida.flow';

export const horariosFlow = addKeyword<Provider, Database>(utils.setEvent('REQUISITOS_FLOW'))
    .addAnswer(
        [
            '🔹 Para ser admitido en uno de nuestros programas de posgrado, es necesario cumplir con los siguientes requisitos generales:🎓\n',
            '🔹 Las fechas más relevantes para este ciclo son: ',
            '🔹 Inscripciones abiertas: Desde [fecha] hasta [fecha] 📅',
            '🔹 Examen de admisión: [fecha] 🖋️',
            '🔹 Publicación de resultados: [fecha] 📢',
            '🔹 Inicio de clases: [fecha] 🎓\n',
            // 'Para un calendario más detallado, ¿te gustaría saber más sobre las fechas de un programa en específico? 📆',
            'Escribe 🔙 *Volver* para ver el menú anterior. 🔄'
        ].join('\n'),
        { delay: 900, capture: true },
        async (ctx, { flowDynamic, gotoFlow }) => {
            if (ctx.body.toLocaleLowerCase().includes('volver')) {
                return gotoFlow(menuPrincipalFlow);
            }

            if (ctx.body.toLocaleLowerCase().includes('gracias')) {
                return gotoFlow(despedidaFlow);
            }
        }
    );



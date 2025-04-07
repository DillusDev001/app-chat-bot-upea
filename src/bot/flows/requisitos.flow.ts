import { addKeyword, utils } from '@builderbot/bot';
import { BaileysProvider as Provider } from '@builderbot/provider-baileys'
import { MemoryDB as Database } from '@builderbot/bot'
import { menuPrincipalFlow } from './menus.flow';
import { despedidaFlow } from './despedida.flow';

export const requisitosFlow = addKeyword<Provider, Database>(utils.setEvent('REQUISITOS_FLOW'))
    .addAnswer(
        [
            'Para ser admitido en uno de nuestros programas de posgrado, es necesario cumplir con los siguientes requisitos generales:🎓\n',
            '✅ Título universitario de licenciatura (o equivalente) 🎓',
            '✅ Presentación de documentos (certificados de notas, carnet de identidad, etc.) 📑',
            '✅ Aprobar el proceso de selección (examen de admisión, entrevista, etc.) 📝',
            '✅ Formulario de inscripción completado ✍️',
            '✅ Experiencia laboral (según el programa) 💼',
            '✅ Pago de derechos de examen (si aplica) 💳\n',
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
/*
import { addKeyword, EVENTS, utils } from '@builderbot/bot';
import { BaileysProvider as Provider } from '@builderbot/provider-baileys'
import { MemoryDB as Database } from '@builderbot/bot'
import { despedidaFlow } from '../despedida.flow';

export const maestriasFlow = addKeyword('')
    .addAnswer(
        [
            'En la UPEA, ofrecemos diversas *Maestrías* en áreas clave.',
            'Algunos ejemplos son:\n',
            '🔹 Maestría en Administración de Empresas (MBA) 💼',
            '🔹 Maestría en Derecho ⚖️',
            '🔹 Maestría en Educación 📚',
            '🔹 Maestría en Ingeniería 🔧',
            '\n',
            'Requisitos generales para Maestrías:',
            '🔹 Título universitario de licenciatura 🎓',
            '🔹 Experiencia laboral (según el programa) 💼',
            '🔹 Proceso de selección (examen, entrevista, etc.) 📝',
            '🔹 Otros requisitos específicos según el programa 📑',
            '\n',
            'Para más detalles sobre programas específicos o cómo inscribirte, puedes escribir *Asesor* para redirigirte aun asesor quien podrá despejar todas tus dudas.'
        ].join('\n'),
        { delay: 900, capture: true },
        async (ctx, { gotoFlow, flowDynamic }) => {
            if (ctx.body.toLocaleLowerCase().includes('asesor')) {
                await flowDynamic([
                    'Fue un placer ayudarte!',
                    'En el siguiente link podrás despejar tus dudas con un asesor.',
                    'https://emojikeyboard.top/es/'
                ].join('\n'), { delay: 900 });
                return;
            }
            if (ctx.body.toLocaleLowerCase().includes('gracias')) {
                return gotoFlow(despedidaFlow);
            }
        }
    );
    */
import { addKeyword, EVENTS, utils } from '@builderbot/bot';
import { BaileysProvider as Provider } from '@builderbot/provider-baileys'
import { MemoryDB as Database } from '@builderbot/bot'
import { optionFlow } from './options.flow';
import { programasFlow } from './programas.flow';
import { requisitosFlow } from './requisitos.flow';
import { horariosFlow } from './horarios.flow';

export const helloFlow = addKeyword('', { delay: 900 })
    .addAnswer(
        [
            '¡Hola! 👋 Bienvenido a la *UPEA Posgrado*. 🎓',
            '¿En qué puedo ayudarte hoy?\n',
        ].join('\n'), { delay: 900 })
    .addAnswer(
        [
            'Aquí tienes algunas opciones para continuar:',
            '1️⃣ 📚 Información sobre programas de posgrado.',
            '2️⃣ 📝 Requisitos para la admisión.',
            '3️⃣ 📅 Horarios y fechas importantes',
            '4️⃣ 🔍 Ver el estado de tu inscripción y detalles personales.',
        ].join('\n'),
        { delay: 900, capture: true },
        async (ctx, { fallBack, gotoFlow }) => {
            const userInput = parseInt(ctx.body, 10);

            switch (userInput) {
                case 1: // Programas
                    return gotoFlow(programasFlow);

                case 2: // Requisitos
                    return gotoFlow(requisitosFlow);

                case 3: //Horarios
                    return gotoFlow(horariosFlow);

                case 4: // Consulta
                    return gotoFlow(null);

                default:
                    return fallBack('⚠️ ¡Debes ingresar una opción válida! ⚠️');
            }
        }
    );
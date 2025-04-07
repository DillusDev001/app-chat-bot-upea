import { addKeyword, utils } from '@builderbot/bot';
import { BaileysProvider as Provider } from '@builderbot/provider-baileys'
import { MemoryDB as Database } from '@builderbot/bot'
import { programasFlow } from './programas.flow';
import { requisitosFlow } from './requisitos.flow';

export const menuPrincipalFlow = addKeyword<Provider, Database>('Opciones', { delay: 900 })
    .addAnswer(
        [
            'Aquí tienes algunas opciones para continuar:\n',
        ].join('\n'),)
    .addAnswer(
        [
            '1️⃣ 📚 Información sobre programas de posgrado.',
            '2️⃣ 📝 Requisitos para la admisión.',
            '3️⃣ 📅 Horarios y fechas importantes',
            '4️⃣ 💻 Consultas sobre inscripciones y matrículas.',
            '5️⃣ 🔍 Ver el estado de tu inscripción y detalles personales.',
        ].join('\n'),
        { delay: 800, capture: true },
        async (ctx, { fallBack, gotoFlow }) => {

            const userInput = parseInt(ctx.body, 10);

            switch (userInput) {
                case 1: // Programas
                    return gotoFlow(programasFlow);

                case 2: // Requisitos
                    return gotoFlow(requisitosFlow);

                case 3: //Horarios
                    return gotoFlow(null);

                case 4: // Consultas
                    return gotoFlow(null);

                case 5: // Detalles
                    return gotoFlow(null);

                default:
                    return fallBack('⚠️ ¡Debes ingresar una opción válida! ⚠️');
            }
        }
    );
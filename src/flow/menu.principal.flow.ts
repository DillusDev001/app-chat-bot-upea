import { addKeyword } from '@builderbot/bot';
import { myDelay } from '../config/flow.config';
import { IDatabase } from '~/config/database';
import { BaileysProvider } from '@builderbot/provider-baileys';
import { programasFlow } from './programas.flow.00';
import { requisitosFlow } from './requisitos.flow';
import { fechasFlow } from './fechas.flow';

const textAnswer = [
    'Aquí tienes algunas opciones para continuar:',
    '',
    '1️⃣ 📚 Información sobre programas de Posgrado.',
    '2️⃣ 📝 Requisitos para la admisión.',
    '3️⃣ 📅 Horarios y fechas importantes',
    '4️⃣ 🔍 Ver el estado de tu inscripción y detalles personales.',
    '',
    '¿Comó deseas continuar? ➜'
]

export const menuPrincipalFlow = addKeyword<BaileysProvider, IDatabase>(['Menú', 'Menu', 'menuPrincipalFlow'])
    .addAnswer(
        textAnswer, {
        delay: myDelay,
        capture: true,
    },
        async (ctx, { flowDynamic, gotoFlow, fallBack }) => {
            const userInput = parseInt(ctx.body, 10);

            switch (userInput) {
                case 1:
                    return gotoFlow(programasFlow);

                case 2:
                    return gotoFlow(requisitosFlow);

                case 3:
                    return gotoFlow(fechasFlow);

                case 4:
                    return gotoFlow(null);

                default:
                    return fallBack('⚠️ ¡Debes ingresar una opción válida! ⚠️');
            }
        }
    );


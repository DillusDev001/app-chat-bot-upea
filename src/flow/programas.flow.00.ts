import { addKeyword } from '@builderbot/bot';
import { maestriasFlow } from './programas.flow.01.maestrias';
import { myDelay } from '../config/flow.config';
import { IDatabase } from '~/config/database';
import { BaileysProvider } from '@builderbot/provider-baileys';
import { textNivel0 } from './text.common';
import { doctoradosFlow } from './programas.flow.02.doctorados';
import { diplomadosFlow } from './programas.flow.03.diplomados';
import { posDoctoradosFlow } from './programas.flow.04.posdoctorados';

const textAnswer = [
    '*PROGRAMAS*.',
    '',
    'En la UPEA, ofrecemos una variedad de programas de posgrado. 🎓',
    '',
    '🎓¿Te gustaría saber más sobre alguno de los siguientes programas?🎓',
    '',
    '1️⃣ Maestrías  📚.',
    '2️⃣ Doctorados 📘.',
    '3️⃣ Diplomados 🏅.',
    '4️⃣ PosDoctorado 🧠🔬.',
    '',
    textNivel0.toString()
]

export const programasFlow = addKeyword<BaileysProvider, IDatabase>(['programasFlow', 'Programas'])
    .addAnswer(textAnswer, {
        delay: myDelay,
        capture: true
    },
        async (ctx, { flowDynamic, gotoFlow, fallBack }) => {
            const userInput = parseInt(ctx.body, 10);

            switch (userInput) {
                case 1:
                    return gotoFlow(maestriasFlow);

                case 2:
                    return gotoFlow(doctoradosFlow);

                case 3:
                    return gotoFlow(diplomadosFlow);

                case 4:
                    return gotoFlow(posDoctoradosFlow);

                default:
                    return fallBack('⚠️ ¡Debes ingresar una opción válida! ⚠️');
            }
        }
    );
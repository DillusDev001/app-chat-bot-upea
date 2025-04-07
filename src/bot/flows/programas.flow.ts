/*import { addKeyword, EVENTS, utils } from '@builderbot/bot';
import { BaileysProvider as Provider } from '@builderbot/provider-baileys'
import { MemoryDB as Database } from '@builderbot/bot'
import { despedidaFlow } from './despedida.flow';
import { asesorFlow } from './asesor.flow';

const maestriasFlow = addKeyword('')
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
        { capture: true },
        async (ctx, { gotoFlow, flowDynamic }) => {
            const responseName = ctx.body;
            await flowDynamic(`Thanks for register ${responseName}`);
        }
    )

export const doctoradosFlow = addKeyword<Provider, Database>('')
    .addAnswer(
        [
            'En la UPEA, ofrecemos diversas *Maestrías* en áreas clave.',
            'Algunos ejemplos son:\n',
            '🔹 Doctorado en Ciencias Sociales 🧠',
            '🔹 Doctorado en Ciencias Exactas 🔬',
            '🔹 Doctorado en Derecho ⚖️',
            '\n',
            'Requisitos generales para Doctorados:',
            '🔹 Título de maestría en el área correspondiente 🎓',
            '🔹 Experiencia en investigación 🔍',
            '🔹 Examen de admisión y entrevista 📝',
            '🔹 Propuesta de investigación 📑',
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

export const diplomadosFlow = addKeyword<Provider, Database>('')
    .addAnswer(
        [
            'En la UPEA, ofrecemos diversas *Maestrías* en áreas clave.',
            'Algunos ejemplos son:\n',
            '🔹 Diplomado en Gestión de Proyectos 📊',
            '🔹 Diplomado en Marketing Digital 📱',
            '\n',
            'Requisitos generales para Doctorados:',
            '🔹 Título universitario de licenciatura 🎓',
            '🔹 No se requiere experiencia laboral, pero puede ser relevante para algunos programas 💼',
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

export const posDoctoradoFlow = addKeyword<Provider, Database>('')
    .addAnswer(
        [
            'En la UPEA, ofrecemos diversas *Maestrías* en áreas clave.',
            'Algunos ejemplos son:\n',
            '🔹 Posdoctorado en Investigación Social 🌍',
            '🔹 Posdoctorado en Innovación Tecnológica 💡',
            '🔹 Posdoctorado en Derecho ⚖️',
            '\n',
            'Requisitos generales para Doctorados:',
            '🔹 Tener un doctorado en el área relacionada 🎓',
            '🔹 Propuesta de investigación avanzada 📑',
            '🔹 Entrevista con el comité académico 🗣️',
            '🔹 Cumplir con los requisitos de la universidad 📜',
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

export const programasFlow = addKeyword<Provider, Database>(utils.setEvent('PROGRAMAS_FLOW'))
    .addAnswer('En la UPEA, ofrecemos una variedad de programas de posgrado. 🎓', { delay: 900 })
    .addAnswer(
        [
            '🎓¿Te gustaría saber más sobre alguno de los siguientes?🎓\n',
            '1️⃣ Maestrías  📚.',
            '2️⃣ Doctorados 📘.',
            '3️⃣ Diplomados 🏅.',
            '4️⃣ PosDoctorado 🧠🔬.'

        ].join('\n'),
        { delay: 900, capture: true },
        async (ctx, { fallBack, gotoFlow, flowDynamic }) => {
            const userInput = parseInt(ctx.body, 10);

            if (isNaN(userInput)) {
                await flowDynamic('⚠️ ¡Debes ingresar una opción válida! ⚠️');
                return;
            }

            switch (userInput) {
                case 1:
                    return gotoFlow(maestriasFlow);

                case 2:
                    return gotoFlow(doctoradosFlow);

                case 3:
                    return gotoFlow(diplomadosFlow);

                case 4:
                    return gotoFlow(posDoctoradoFlow);

                default:
                    return fallBack('⚠️ ¡Debes ingresar una opción válida! ⚠️');
            }
        },
        [maestriasFlow, doctoradosFlow, diplomadosFlow, posDoctoradoFlow]
    );
    */
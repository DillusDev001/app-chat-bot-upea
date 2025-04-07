import { addKeyword, EVENTS } from '@builderbot/bot';

//export const welcomeFlow = addKeyword(EVENTS.WELCOME)
export const welcomeFlow = addKeyword('hola')
    .addAction(async (ctx, { flowDynamic }) => {
        await flowDynamic([
            'Hola *' + ctx.name + '* 👋.',
            'Bienvenido(a) a *UPEA Posgrado*.'
        ].join('\n'));
    })
    .addAnswer([
        '¿En qué puedo ayudarte hoy?',
        '',
        'Aquí tienes algunas opciones para continuar:',
        '1️⃣ 📚 Información sobre programas de posgrado.',
        '2️⃣ 📝 Requisitos para la admisión.',
        '3️⃣ 📅 Horarios y fechas importantes',
        '4️⃣ 🔍 Ver el estado de tu inscripción y detalles personales.',
    ], {
        delay: 900,
        capture: true,
    },
        async (ctx, { flowDynamic, gotoFlow, fallBack }) => {
            const userInput = parseInt(ctx.body, 10);

            switch (userInput) {
                case 1:
                    return gotoFlow(programasFlow);

                case 2:
                    return gotoFlow(null);

                case 3:
                    return gotoFlow(null);

                case 4:
                    return gotoFlow(null);

                default:
                    return fallBack('⚠️ ¡Debes ingresar una opción válida! ⚠️');
            }
        },

    )

export const programasFlow = addKeyword('programasFlow')
    .addAnswer([
        '*PROGRAMAS*👋.',
        'En la UPEA, ofrecemos una variedad de programas de posgrado. 🎓',
        '',
        '🎓¿Te gustaría saber más sobre alguno de los siguientes programas?🎓',
        '1️⃣ Maestrías  📚.',
        '2️⃣ Doctorados 📘.',
        '3️⃣ Diplomados 🏅.',
        '4️⃣ PosDoctorado 🧠🔬.',

    ], {
        delay: 900,
        capture: true
    },
        async (ctx, { flowDynamic, gotoFlow, fallBack }) => {
            const userInput = parseInt(ctx.body, 10);

            switch (userInput) {
                case 1:
                    return gotoFlow(maestriasFlow);

                case 2:
                    return gotoFlow(null);

                case 3:
                    return gotoFlow(null);

                case 4:
                    return gotoFlow(null);

                default:
                    return fallBack('⚠️ ¡Debes ingresar una opción válida! ⚠️');
            }
        }
    );

export const maestriasFlow = addKeyword('EVENT.MAESTRIAS')
    .addAnswer([
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
    ], {
        delay: 900,
        capture: true
    },
        async (ctx, { gotoFlow, flowDynamic }) => {
            const responseName = ctx.body;
            console.log(responseName)
            await flowDynamic(`Thanks for register ${responseName}`);
        }
    )
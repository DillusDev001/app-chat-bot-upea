import { addKeyword } from '@builderbot/bot';
import { myDelay } from '../config/flow.config';
import { IDatabase } from '~/config/database';
import { BaileysProvider } from '@builderbot/provider-baileys';
import { textNivel2 } from './text.common';

const textAnswer = [
    'En la UPEA, ofrecemos diversas *Maestrías* 📚 en áreas clave.',
    '',
    '🔵 Maestría en Administración de Empresas (MBA) 💼',
    '🔵 Maestría en Derecho ⚖️',
    '🔵 Maestría en Educación 📚',
    '🔵 Maestría en Ingeniería 🔧',
    '',
    '📝 *Requisitos* generales para *Maestrías*:',
    '✅ Título universitario de licenciatura 🎓.',
    '✅ Experiencia laboral (según el programa) 💼.',
    '✅ Proceso de selección (examen, entrevista, etc.) 📝.',
    '✅ Otros requisitos específicos según el programa 📑.',
    '',
    textNivel2.toString()
]

export const maestriasFlow = addKeyword<BaileysProvider, IDatabase>(['maestriasFlow', 'Maestrias', 'Maestrías'])
    .addAnswer(textAnswer, { delay: myDelay, });
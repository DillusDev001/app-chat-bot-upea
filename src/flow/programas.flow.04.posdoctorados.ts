import { addKeyword } from '@builderbot/bot';
import { myDelay } from '../config/flow.config';
import { IDatabase } from '~/config/database';
import { BaileysProvider } from '@builderbot/provider-baileys';
import { textNivel2 } from './text.common';

const textAnswer = [
    'En la UPEA, ofrecemos diversos *PosDoctorados* 📚 en áreas clave.',
    '',
    '🔵 PosDoctorado en Investigación Social 🌍',
    '🔵 PosDoctorado en Innovación Tecnológica 💡',
    '🔵 PosDoctorado en Derecho ⚖️',
    '',
    '📝 *Requisitos* generales para *PosDoctorados*:',
    '✅ Tener un Doctorado en el área relacionada 🎓',
    '✅ Propuesta de investigación avanzada 📑.',
    '✅ Entrevista con el comité académico 🗣️.',
    '✅ Cumplir con los requisitos de la universidad 📜.',
    '',
    textNivel2.toString()
]

export const posDoctoradosFlow = addKeyword<BaileysProvider, IDatabase>(['posDoctoradosFlow', 'posDoctorados', 'posDoctorados'])
    .addAnswer(textAnswer, { delay: myDelay, });
import { addKeyword } from '@builderbot/bot';
import { myDelay } from '../config/flow.config';
import { IDatabase } from '~/config/database';
import { BaileysProvider } from '@builderbot/provider-baileys';
import { textNivel2 } from './text.common';

const textAnswer = [
    'En la UPEA, ofrecemos diversos *Doctorados* 📚 en áreas clave.',
    '',
    '🔵 Doctorado en Ciencias Sociales 🧠',
    '🔵 Doctorado en Ciencias Exactas 🔬',
    '🔵 Doctorado en Derecho ⚖️',
    '',
    '📝 *Requisitos* generales para *Doctorados*:',
    '✅ Título de Maestría en el área correspondiente 🎓.',
    '✅ Experiencia en investigación 🔍.',
    '✅ Examen de admisión y entrevista 📝.',
    '✅ Propuesta de investigación 📑.',
    '',
    textNivel2.toString()
]

export const doctoradosFlow = addKeyword<BaileysProvider, IDatabase>(['doctoradosFlow', 'doctorados', 'Doctorados'])
    .addAnswer(textAnswer, { delay: myDelay, });
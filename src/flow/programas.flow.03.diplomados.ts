import { addKeyword } from '@builderbot/bot';
import { myDelay } from '../config/flow.config';
import { IDatabase } from '~/config/database';
import { BaileysProvider } from '@builderbot/provider-baileys';
import { textNivel2 } from './text.common';

const textAnswer = [
    'En la UPEA, ofrecemos diversos *Diplomados* 📚 en áreas clave.',
    '',
    '🔵 Diplomado en Gestión de Proyectos 📊',
    '🔵 Diplomado en Marketing Digital 📱',
    '',
    '📝 *Requisitos* generales para *Diplomados*:',
    '✅ Título universitario de licenciatura 🎓.',
    '✅ No se requiere experiencia laboral, pero puede ser relevante para algunos programas 💼.',
    '',
    textNivel2.toString()
]

export const diplomadosFlow = addKeyword<BaileysProvider, IDatabase>(['diplomadosFlow', 'diplomados', 'Diplomados'])
    .addAnswer(textAnswer, { delay: myDelay, });
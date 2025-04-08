import { addKeyword } from '@builderbot/bot';
import { myDelay } from '../config/flow.config';
import { IDatabase } from '~/config/database';
import { BaileysProvider } from '@builderbot/provider-baileys';
import { textNivel0 } from './text.common';

const textAnswer = [
    'Las *fechas 🗓️ y horarios 🕘* más relevantes para este ciclo son: ',
    '',
    '- *Inscripciones abiertas* 📝: Desde [fecha] hasta [fecha]',
    '',
    '- *Recepción de documentos* 🗂️: Desde [fecha] hasta [fecha]',
    '',
    '- *Examen de admisión* 🖋️: [fecha]',
    '',
    '- *Publicación de resultados* 📢: [fecha]',
    '',
    '- *Inicio de clases* 🎓: [fecha] ',
    '',
    textNivel0.toString()
]

export const fechasFlow = addKeyword<BaileysProvider, IDatabase>('fechasFlow, fechas, Fechas')
    .addAnswer(textAnswer, { delay: myDelay });


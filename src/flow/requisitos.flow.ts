import { addKeyword } from '@builderbot/bot';
import { myDelay } from '../config/flow.config';
import { IDatabase } from '~/config/database';
import { BaileysProvider } from '@builderbot/provider-baileys';
import { textNivel1 } from './text.common';

const textAnswer = [
    'Para ser admitido en uno de nuestros programas de posgrado, es necesario cumplir con los siguientes requisitos generales:🎓',
    '',
    '- ✅ Título universitario de licenciatura (o equivalente) 🎓',
    '',
    '- ✅ Presentación de documentos (certificados de notas, carnet de identidad, etc.) 📑',
    '',
    '- ✅ Aprobar el proceso de selección (examen de admisión, entrevista, etc.) 📝',
    '',
    '- ✅ Formulario de inscripción completado ✍️',
    '',
    '- ✅ Experiencia laboral (según el programa) 💼',
    '',
    '- ✅ Pago de derechos de examen (si aplica) 💳',
    '',
    textNivel1.toString()
]

export const requisitosFlow = addKeyword<BaileysProvider, IDatabase>(['requisitosFlow', 'Requisitos'])
    .addAnswer(textAnswer, { delay: myDelay });


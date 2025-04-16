import { Participante } from "~/mysql/entity/participante.entity";
import { db } from "../firebase.config";
import { ParticipanteService } from "~/mysql/service/participante.service";
import { Repository } from "typeorm";
import { AppDataSource } from "~/mysql/data-source";

const collection = 'participante';

const participanteRepository = AppDataSource.getRepository(Participante);
const participanteService = new ParticipanteService(participanteRepository);

async function getParticipante(celular: string) {
    const colceccionRef = db.collection(collection);
    const consulta = colceccionRef.where('celular', '==', celular);
    const snapshot = await consulta.get();

    if (snapshot.size === 1) {
        const doc = snapshot.docs[0]
        await participanteService.createParticipante(doc.data());
        return doc.data();
    } 


    return null;
}

const getParticipantes = async () => {
    const data: any = [];

    // Obtener la colección 'participante' desde Firestore
    const snapshot = await db.collection(collection).get();

    snapshot.forEach((doc) => {
        const participante = doc.data();
        data.push(participante);
    });

    return { data };  // Retornar los datos obtenidos
};

export { getParticipante, getParticipantes };
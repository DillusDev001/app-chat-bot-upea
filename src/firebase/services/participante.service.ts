import { db } from "../firebase.config";

const collection = 'participante';

async function getParticipante(celular: string) {
    const colceccionRef = db.collection(collection);
    const consulta = colceccionRef.where('celular', '==', celular);
    const snapshot = await consulta.get();

    if (snapshot.size === 1) {
        const doc = snapshot.docs[0]
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
import { db } from "../../config/firebase/firebase.config";

const getColegiaturas = async () => {
    const data: any = [];

    // Obtener la colección 'participante' desde Firestore
    const snapshot = await db.collection('colegiatura').get();

    snapshot.forEach((doc) => {
        const participante = doc.data();
        data.push(participante);
    });

    return { data };  // Retornar los datos obtenidos
};

export { getColegiaturas };
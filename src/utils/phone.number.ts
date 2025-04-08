import parsePhoneNumberFromString, { parsePhoneNumber } from 'libphonenumber-js';

export function obtenerNumero(numero: string): string {
    try {
        const phoneNumber = parsePhoneNumberFromString(numero);

        if (phoneNumber) {
            return phoneNumber.nationalNumber; // Número sin el código de país
        }

        return numero; // si no se pudo parsear
    } catch (error) {
        console.error("Error al parsear el número:", error);
        return numero;
    }
}

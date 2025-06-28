export type AddressString = string | null | undefined;
export type Timestamp = string | number | Date;

export const getCityFromAddress = (address: AddressString): string => {
    if (!address) return 'Unknown';
    const parts = address.split(',');
    if (parts.length < 5) return 'Unknown';
    return parts[4]?.trim() || 'Unknown';
};

export const formatDate = (timestamp: Timestamp): string => {
    if (!timestamp) return '';
    const date = new Date(timestamp);
    if (isNaN(date.getTime())) return '';
    return date.toLocaleDateString();
};

export const formatTime = (timestamp: Timestamp): string => {
    if (!timestamp) return '';
    const date = new Date(timestamp);
    if (isNaN(date.getTime())) return '';
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
};

export function formatDateComplete(timestamp: Timestamp): string {
    const months = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
    if (!timestamp) return '';
    const date = new Date(timestamp);
    if (isNaN(date.getTime())) return '';
    const day = date.getUTCDate();
    const month = months[date.getUTCMonth()];
    const year = date.getUTCFullYear();
    return `${day} de ${month} de ${year}`;
}
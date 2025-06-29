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

export function formatTimeDiff(ms: number) {
    if (ms <= 0) return "0m";
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    if (hours > 0) return `${hours}h ${minutes}m`;
    return `${minutes}m`;
}
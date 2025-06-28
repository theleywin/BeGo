import type {Destination} from "./destination.ts";

export type Order = {
    _id: string;
    status: number;
    order_number: string;
    manager: string;
    driver: string;
    version: string;
    type: string;
    destinations: Destination[];
    start_date: number;
    end_date: number;
    is_today: boolean;
    status_string: string;
    status_class: string;
    driver_thumbnail: string | null;
};
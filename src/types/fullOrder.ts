interface Geometry {
    type: string;
    coordinates: [number, number];
}

interface Location {
    lat: number;
    lng: number;
    geometry: Geometry;
}

interface S3Object {
    ETag: string;
    Key: string;
    Bucket: string;
    Location: string;
}

interface Address {
    place_id: string;
}

interface Receiver {
    address: Address;
    branch: string | null;
    cfdi: string;
    rfc: string;
    company: string;
    place_id: string;
}

interface Invoice {
    series_id: string;
    fullname: string;
    phonenumber: string | null;
    country_code: string | null;
    email: string | null;
    address: string;
    company: string | null;
    rfc: string;
    cfdi: string;
    receiver: Receiver;
}

interface Pricing {
    deferred_payment: boolean;
    subtotal: number;
    insurance: number;
    customs: number;
    cruce: number;
    taxes: number;
    extras: number;
    driver_earnings: number;
    total: number;
    pre_taxes: number;
    single: number;
}

interface VehicleAttributes {
    plates: string;
    year?: string;
    brand?: string;
    color?: string;
    caat?: string;
    colorName?: string;
    sct_permission?: string;
    sct_permission_text?: string;
    sct_number?: string;
    truck_settings?: string;
    truck_settings_text?: string;
    insurer?: string;
    policy_number?: string;
    trailer_number?: string;
    type?: string;
}

interface Vehicle {
    _id: string;
    attributes: VehicleAttributes;
    active: boolean;
    thumbnail?: string;
}

interface AddOns {
    cargo_value: number;
    insurance: boolean;
    cruce: boolean;
    customs_agent: boolean;
    min_insurance: boolean;
    insurance_percentage: number;
}

interface MapUrls {
    original_url: string;
    thumbnail_url: string;
}

interface StatusItem {
    active: boolean;
    status: string;
}

interface StatusList {
    pickup: StatusItem[];
    dropoff: StatusItem[];
}

interface ContactInfo {
    name: string;
    telephone: string;
    email: string;
    country_code: string;
    rfc: string;
}

interface Evidence {
    pictures: never[];
    extra_notes: string;
    signature: Record<string, never>;
}

interface FullDestination {
    lat: number;
    lng: number;
    address: string;
    startDate?: number;
    zip_code: number;
    place_id_pickup?: string;
    place_id_dropoff?: string;
    contact_info: ContactInfo;
    geometry: Geometry;
    raw_address: string;
    evidence: Evidence;
    status: number;
    status_string?: string;
    status_class?: string;
    endDate?: number;
}

interface Cargo {
    "53_48": string;
    type: string;
    required_units: number;
    description: string;
    hazardous_type: string;
    weigth: number[];
    cargo_goods: string;
    hazardous_material: string;
    packaging: string;
    unit_type: string;
    weight_unit: string;
}

interface Route {
    route: string;
    single: number;
    pickup: string;
    dropoff: string;
    status: number;
    end_date: number;
    start_date: number;
    stay: string;
}

interface Manager {
    _id: string;
    nickname: string;
    raw_nickname: string;
    email: string;
    telephone: string;
    raw_telephone: string;
    country_code: string;
    language: string;
    date_created: number;
    full_documentation: boolean;
    verified: boolean;
    allow_login: boolean;
    availability: number;
    mood: number;
    connected: boolean;
    active_sessions: number;
    location: Location;
    role: number;
    test: boolean;
    tags: string[];
    cer: S3Object;
    key: S3Object;
    key_pswd: string;
    version: string;
    place_id: string;
}

interface Driver {
    _id: string;
    nickname: string;
    raw_nickname: string;
    email: string;
    telephone: string;
    raw_telephone: string;
    country_code: string;
    language: string;
    date_created: number;
    full_documentation: boolean;
    verified: boolean;
    allow_login: boolean;
    availability: number;
    mood: number;
    connected: boolean;
    active_sessions: number;
    location: Location;
    role: number;
    test: boolean;
    version: string;
    thumbnail: string;
}

export interface FullOrder {
    _id: string;
    stamp: boolean;
    reference_number: string;
    status: number;
    completion_percentage: number;
    cargo: Cargo;
    user_id: string;
    order_number: string;
    route: Route;
    created: number;
    distance_mts: number;
    manager: Manager;
    bego_order: boolean;
    invoice: Invoice;
    pricing: Pricing;
    driver: Driver;
    trailer: Vehicle;
    truck: Vehicle;
    version: string;
    add_ons: AddOns;
    ETA: number;
    map: MapUrls;
    stampedPercentage: number;
    start_date: number;
    end_date: number;
    status_list: StatusList;
    destinations: FullDestination[];
}

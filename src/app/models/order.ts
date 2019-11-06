export interface Order {
    id: number;
    address: string;
    time: string;
    accepted: boolean;
    transit: boolean;
    completed: boolean;
    canceled: boolean;
}

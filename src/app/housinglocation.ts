export interface HousingLocation {
    id: number;
    name: string;
    city: string;
    state: string;
    photo: string;
    availableUnits: number; //unidades disponibles
    wifi: boolean;
    laundry: boolean;  //lavadero
}

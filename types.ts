
export interface TouristPlace {
  id: string;
  name: string;
  description: string;
  image: string;
  location: string;
  mapsUrl?: string;
  gallery: string[];
}

export interface Upazila {
  id: string;
  name: string;
  places: TouristPlace[];
}

export interface District {
  id: string;
  name: string;
  upazilas: Upazila[];
}

export interface Division {
  id: string;
  name: string;
  image: string;
  districts: District[];
}

export interface AppData {
  divisions: Division[];
}

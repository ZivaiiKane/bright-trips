export interface Itinerary {
  id?: string;
  destination?: string;
  priority?: number;
  trips?: Trip[];
}

export interface Trip {
  description?: string;
  tag?: 'purple' | 'blue' | 'green' | 'yellow' | 'red' | 'gray';
  start?: Date;
  end?: Date;
  cost?: number;
}

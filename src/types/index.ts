export type OpeningStatus = "open" | "closed" | "busy";

export interface CampusService {
  id: number;
  name: string;
  openingStatus: OpeningStatus;
  waitTime?: number;
  locations: string[];
}

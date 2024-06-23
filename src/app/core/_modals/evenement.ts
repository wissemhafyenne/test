export interface Evenement {
  _id?: string;
  name: string;
  organisateur: string;
  type: string;
  location?: string;
  description: string;
  dateDebut?: Date;
  dateFin?: Date;
  status?: string;
  image?: string;
  complex: string; // Assuming complex is stored as an ObjectId
  NomDuComplexe?: string;
  isFavorite?: boolean; // Ajout de la propriété isFavorite
}

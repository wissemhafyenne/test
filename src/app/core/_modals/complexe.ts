export interface Complexe {
    _id?: string;
    Name: string;
    photos: string;
    description: string;
    Address: string;
    Ville: string;
    Code_postale: string;
    Pays: string;
    horairesOuverture: {
      lundi: string;
      mardi: string;
      mercredi: string;
      jeudi: string;
      vendredi: string;
      samedi: string;
      dimanche: string;
    };
   
    TerrainId?: string[]; // Changer en string[]
    UserId: string;
    createdAt?: Date;
    updatedAt?: Date;
  }
  
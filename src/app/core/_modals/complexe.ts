export interface Complexe {
    _id?: string;
    Name: string;
    description: string;
    Pays: string; 
    Ville: string;    
    Address: string;
    Code_postale: string;
    horairesOuverture: {
      lundi: string;
      mardi: string;
      mercredi: string;
      jeudi: string;
      vendredi: string;
      samedi: string;
      dimanche: string;
    };
    photos: string;    
   
    TerrainId?: string[]; // Changer en string[]
    UserId: string;
    createdAt?: Date;
    updatedAt?: Date;
  }
  
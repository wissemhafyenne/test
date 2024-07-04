/*import { Types } from 'mongoose';*/

export interface Terrain {
  _id?: string; // Optionnel, pour l'identifiant généré par MongoDB
  Name: string;
  description: string;
  Type?: 'football' | 'handball' | 'Basket-Ball' | 'baseball' | 'tennis' | 'golf' | 'natation' | 'boxes';
 
  Numero_terrain: string; 
  longueur: string;
  largeur: string;
  surface: string;
  Capacite: string;
  nature_terrain: string;
//option par type -------------------
  hauteur_Panier: string;
  surfaces_de_Jeu: string;
  Hauteur_du_filet: string;
  Largeur_du_filet: string;
  Zones_de_service: string;
  Couloir_de_double: string;
  Nombre_de_trous: string;
  Par_du_trou: string;
  Longueur_du_trou: string;
  Profondeur: string;
  Nombre_de_couloirs: string;
  Largeur_des_couloirs: string;
  Type_de_piscine: string;
  Longueur_du_ring: string;
  Largeur_du_ring: string;
  Hauteur_du_ring: string;
  //--------------------------------------
  prix_par_Heure: string;
  photos: string;
  complexeId: string; // Représente l'identifiant de l'objet complexe
  Equipement?: string[]; // Liste d'identifiants pour les équipements
}

import { Utils } from "../utils/utils";
import { Schema, model, Types } from "mongoose";

// Define the Event schema
const eventSchema = new Schema({
  name: { type: String, required: true },
  organisateur: { type: String, required: true },
  type: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  dateDebut: { type: Date, required: true },
  dateFin: { type: Date, required: true },
  status: { type: String, required: false },
  image: { type: String, required: false },
  complex: { type: Types.ObjectId, ref: 'Complex', required: true },
  NomDuComplexe: { type: String, required: false },
});

// Create the Event model
const EventModel = model("Event", eventSchema);

export class Event {
  id: string | undefined;
  name: string | undefined;
  organisateur: string | undefined;
  type: string | undefined;
  location: string | undefined;
  description: string | undefined;
  dateDebut: Date | undefined;
  dateFin: Date | undefined;
  status: string | undefined;
  image: string | undefined;
  complex: string | undefined;
  NomDuComplexe: string | undefined;

  /**
   * Convert event data for local use
   * @param data
   */
  toLocal(data: any): any {
    if (!data) {
      return this;
    }

    this.id = data._id;
    this.name = data.name;
    this.organisateur = data.organisateur;
    this.type = data.type;
    this.location = data.location;
    this.description = data.description;
    this.dateDebut = data.dateDebut;
    this.dateFin = data.dateFin;

    if (data.status) {
      this.status = data.status;
    }

    if (data.image) {
      this.image = data.image;
    }

    this.complex = data.complex;
    this.NomDuComplexe = data.NomDuComplexe;

    return this;
  }

  /**
   * Save event data to database
   */
  async save(): Promise<any> {
    const event = new EventModel(this);
    return event.save();
  }

  /**
   * Find an event by ID
   * @param id
   */
  static async findById(id: string): Promise<any> {
    return EventModel.findById(id).then((data: any) => {
      if (data) {
        return new Event().toLocal(data);
      }
      return null;
    });
  }
}

export default Event;

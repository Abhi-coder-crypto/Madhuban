import { type InsertReservation, type Reservation, reservations } from "@shared/schema";
import { db } from "./db";

export interface IStorage {
  createReservation(reservation: InsertReservation): Promise<Reservation>;
  getReservations(): Promise<Reservation[]>;
}

export class DatabaseStorage implements IStorage {
  async createReservation(insertReservation: InsertReservation): Promise<Reservation> {
    const [reservation] = await db.insert(reservations).values(insertReservation).returning();
    return reservation;
  }

  async getReservations(): Promise<Reservation[]> {
    return db.select().from(reservations).orderBy(reservations.createdAt);
  }
}

export const storage = new DatabaseStorage();

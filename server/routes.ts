import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertReservationSchema } from "@shared/schema";
import { fromError } from "zod-validation-error";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // Create a new reservation
  app.post("/api/reservations", async (req, res) => {
    try {
      const validatedData = insertReservationSchema.parse(req.body);
      const reservation = await storage.createReservation(validatedData);
      res.status(201).json(reservation);
    } catch (error: any) {
      if (error.name === 'ZodError') {
        const validationError = fromError(error);
        return res.status(400).json({ error: validationError.message });
      }
      console.error('Error creating reservation:', error);
      res.status(500).json({ error: "Failed to create reservation" });
    }
  });

  // Get all reservations (optional - for admin panel later)
  app.get("/api/reservations", async (req, res) => {
    try {
      const reservations = await storage.getReservations();
      res.json(reservations);
    } catch (error) {
      console.error('Error fetching reservations:', error);
      res.status(500).json({ error: "Failed to fetch reservations" });
    }
  });

  return httpServer;
}

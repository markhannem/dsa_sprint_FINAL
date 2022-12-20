import express from "express";
import {
  byCity,
  createHotel,
  deleteHotel,
  getHotel,
  getHotels,
  updateHotel,
} from "../controllers/hotel_con.js";
import Hotel from "../models/Hotel.js";
import { verifyAdmin } from "../utilities/verifyToken.js";

const router = express.Router();

// CREATE(POST)
router.post("/", createHotel);

// UPDATE(PUT)
// using set method to update body json and return response
router.put("/:id", verifyAdmin, updateHotel);
// DELETE
router.delete("/:id", verifyAdmin, deleteHotel);
// GET
router.get("/find/:id", getHotel);
// GET ALL
router.get("/", getHotels);
router.get("/byCity", byCity);
router.get("/byType", getHotels);

export default router;

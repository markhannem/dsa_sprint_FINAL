import express from "express";
import {
  createRoom,
  deleteRoom,
  getRoom,
  getRooms,
  updateRoom,
} from "../controllers/room_con.js";
import { verifyAdmin } from "../utilities/verifyToken.js";

const router = express.Router();

// CREATE(POST)
router.post("/:hotelid", createRoom);

// UPDATE(PUT)
router.put("/:id", verifyAdmin, updateRoom);

// DELETE
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);

// GET
router.get("/:id", getRoom);

// GET ALL
router.get("/", getRooms);

export default router;

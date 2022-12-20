import express from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/user_con.js";
import {
  verifyAdmin,
  verifyToken,
  verifyUser,
} from "../utilities/verifyToken.js";

const router = express.Router();

// router.get("/checkauth", verifyToken, (req, res, next) => {
//   res.send("Successfully Logged In");
// });

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send("Successfully Logged In and Authorized");
// });

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//   res.send("Successfully Logged In As ADMIN and Fully Authorized");
// });

// UPDATE(PUT)

router.put("/:id", verifyUser, updateUser);
// DELETE
router.delete("/:id", verifyUser, deleteUser);
// GET
router.get("/:id", verifyUser, getUser);
// GET ALL
router.get("/", verifyAdmin, getUsers);

export default router;

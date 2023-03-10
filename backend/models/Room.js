import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },

    maxPeople: {
      type: Number,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    roomNum: [{ number: Number, unavailableDates: { type: [Date] } }],
  },
  // shows time of creation, updates , deletion
  { timestamps: true }
);

export default mongoose.model("Room", RoomSchema);

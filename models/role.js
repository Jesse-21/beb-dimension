import mongoose from "mongoose";
import { RoleSchema } from "../schema/main.js";

class RoleClass {}

RoleSchema.loadClass(RoleClass);

export const Role = mongoose.models.Role || mongoose.model("Role", RoleSchema);

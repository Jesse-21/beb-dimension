import mongoose from "mongoose";
import { PermissionOverwriteSchema } from "../schema/main.js";

class PermissionOverwriteClass {}

PermissionOverwriteSchema.loadClass(PermissionOverwriteClass);

export const PermissionOverwrite =
  mongoose.models.PermissionOverwrite ||
  mongoose.model("PermissionOverwrite", PermissionOverwriteSchema);

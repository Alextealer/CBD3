"use server";

import { z } from "zod";
import { getPayload } from "payload";
import config from "@/payload.config";

const ApplicationSchema = z.object({
  name: z.string().min(2, "Nom requis").max(120),
  entity: z.string().max(160).optional().or(z.literal("")),
  email: z.string().email("Email invalide").max(160),
  socials: z.string().max(240).optional().or(z.literal("")),
  projectType: z.enum([
    "established-group",
    "creator",
    "emerging-brand",
    "expert",
    "other",
  ]),
  pitch: z.string().min(40, "Au moins 40 caracteres").max(4000),
  honeypot: z.string().max(0).optional().or(z.literal("")),
});

export type ApplicationState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string; fieldErrors?: Record<string, string> };

export async function submitApplication(
  _prev: ApplicationState,
  formData: FormData,
): Promise<ApplicationState> {
  const raw = {
    name: String(formData.get("name") ?? ""),
    entity: String(formData.get("entity") ?? ""),
    email: String(formData.get("email") ?? ""),
    socials: String(formData.get("socials") ?? ""),
    projectType: String(formData.get("projectType") ?? ""),
    pitch: String(formData.get("pitch") ?? ""),
    honeypot: String(formData.get("website") ?? ""),
  };

  const parsed = ApplicationSchema.safeParse(raw);
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0] ?? "");
      if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return { status: "error", message: "Verifiez les champs.", fieldErrors };
  }

  if (parsed.data.honeypot) {
    return { status: "success" };
  }

  try {
    const payload = await getPayload({ config });
    await payload.create({
      collection: "incubator-applications",
      data: {
        name: parsed.data.name,
        entity: parsed.data.entity || undefined,
        email: parsed.data.email,
        socials: parsed.data.socials || undefined,
        projectType: parsed.data.projectType,
        pitch: parsed.data.pitch,
        status: "pending",
      },
    });
    return { status: "success" };
  } catch (err) {
    console.error("Incubator application error:", err);
    return {
      status: "error",
      message: "Impossible d'enregistrer la candidature. Reessayez plus tard.",
    };
  }
}

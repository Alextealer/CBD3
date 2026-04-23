import { Upload, MoreVertical, FileImage } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DashboardHeader } from "../../dashboard-header";

export const dynamic = "force-dynamic";

// Demo files — in real app come from upload table / storage.
const files = [
  { name: "Logo-votre-marque.png", date: "20.04.2026", thumb: null },
  { name: "Claim-bien-etre-fr.svg", date: "18.04.2026", thumb: null },
  { name: "Packaging-hero.png", date: "12.04.2026", thumb: null },
  { name: "Badge-THC-0-3.svg", date: "05.04.2026", thumb: null },
];

export default function FilesPage() {
  return (
    <div className="px-10 py-8 max-w-[1320px]">
      <DashboardHeader title="Bibliotheque" />

      {/* ACTIONS ROW */}
      <div data-reveal className="flex items-center gap-4 mb-6">
        <Button className="rounded-full h-11 px-5 text-[12px] font-bold uppercase tracking-wider">
          <Upload className="h-3.5 w-3.5 mr-1.5" />
          Uploader un fichier
        </Button>
        <div className="h-6 w-px bg-[#f1f1f3]" />
        <div className="flex items-center gap-3 text-[12px]">
          <span className="text-[#4d4f56]">Trier par</span>
          <button
            type="button"
            className="h-9 px-3 rounded-full bg-[#f7f7f8] border border-[#f1f1f3] flex items-center gap-1.5 font-semibold"
          >
            Date d&apos;upload
          </button>
          <button
            type="button"
            className="h-9 px-3 rounded-full text-[#4d4f56] hover:bg-[#f7f7f8] flex items-center gap-1.5 font-medium"
          >
            Nom de fichier
          </button>
        </div>
      </div>

      {/* GRID */}
      <div data-reveal className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {/* Upload tile */}
        <label className="group aspect-square rounded-2xl border-2 border-dashed border-[#d4d4d8] hover:border-[#6c3fee] hover:bg-[#faf9ff] flex flex-col items-center justify-center gap-2 cursor-pointer transition-colors">
          <div className="w-10 h-10 rounded-xl bg-[#f1eefe] group-hover:bg-[#6c3fee] group-hover:text-white text-[#6c3fee] flex items-center justify-center transition-colors">
            <Upload className="h-4 w-4" />
          </div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#4d4f56] text-center px-2">
            Nouveau
            <br />
            fichier
          </span>
          <input type="file" className="hidden" accept="image/*,.svg,.pdf,.ai" />
        </label>

        {files.map((f) => (
          <div key={f.name} className="group">
            <div className="aspect-square rounded-2xl bg-[#eeeeee] border border-[#f1f1f3] flex items-center justify-center relative overflow-hidden">
              <FileImage className="h-8 w-8 text-[#9ca3af]" strokeWidth={1.25} />
              <button
                type="button"
                className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white shadow flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Menu"
              >
                <MoreVertical className="h-3.5 w-3.5" />
              </button>
            </div>
            <p className="text-[12px] font-medium mt-2 truncate">{f.name}</p>
            <p className="text-[10px] text-[#9ca3af] mt-0.5">{f.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

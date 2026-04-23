"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Download,
  Eye,
  Upload,
  Brush,
  Type,
  Shapes,
  HelpCircle,
  Info,
  Layers,
  Undo2,
  Redo2,
  MoreVertical,
  Move,
  Trash2,
  Plus,
  Minus,
} from "lucide-react";

type PanelId = "upload" | "styles" | "text" | "shapes" | "tips" | "info";

interface CanvasElement {
  id: string;
  src: string;
  name: string;
  x: number;      // %
  y: number;      // %
  w: number;      // px
  r: number;      // deg
}

interface UploadEntry {
  id: string;
  name: string;
  url: string;
}

export function StudioApp({
  productName,
  productVolume,
  format,
  categorySlug,
}: {
  productName: string;
  productVolume: string;
  format: string;
  categorySlug: string;
}) {
  // Template choice based on category. Pouch for flowers & resines.
  const usesPouch = categorySlug === "fleur-cbd" || categorySlug === "hash-cbd";
  const templateImage = usesPouch ? "/studio/pouch-flower.jpg" : null;
  const [activePanel, setActivePanel] = useState<PanelId>("upload");
  const [uploads, setUploads] = useState<UploadEntry[]>([]);
  const [elements, setElements] = useState<CanvasElement[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [guides, setGuides] = useState(true);
  const [showLayers, setShowLayers] = useState(false);
  const [zoom, setZoom] = useState(100);
  const [labelBg, setLabelBg] = useState<string | null>(null);
  const canvasRef = useRef<HTMLDivElement>(null);

  function handleFile(files: FileList | null) {
    if (!files) return;
    const next: UploadEntry[] = [];
    for (const f of Array.from(files).slice(0, 8)) {
      if (!f.type.startsWith("image/")) continue;
      next.push({
        id: crypto.randomUUID(),
        name: f.name,
        url: URL.createObjectURL(f),
      });
    }
    setUploads((p) => [...next, ...p]);
  }

  function addToCanvas(u: UploadEntry) {
    setElements((p) => [
      ...p,
      {
        id: crypto.randomUUID(),
        src: u.url,
        name: u.name,
        x: 50,
        y: 50,
        w: 180,
        r: 0,
      },
    ]);
  }

  function removeElement(id: string) {
    setElements((p) => p.filter((e) => e.id !== id));
    if (selected === id) setSelected(null);
  }

  // drag logic (percentage-based so it survives zoom)
  function onMouseDownElem(e: React.MouseEvent, id: string) {
    e.stopPropagation();
    setSelected(id);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const el = elements.find((x) => x.id === id);
    if (!el) return;
    const startX = e.clientX;
    const startY = e.clientY;
    const startLeft = el.x;
    const startTop = el.y;

    function onMove(ev: MouseEvent) {
      const dx = ((ev.clientX - startX) / rect.width) * 100;
      const dy = ((ev.clientY - startY) / rect.height) * 100;
      setElements((prev) =>
        prev.map((p) =>
          p.id === id
            ? { ...p, x: Math.max(0, Math.min(100, startLeft + dx)), y: Math.max(0, Math.min(100, startTop + dy)) }
            : p,
        ),
      );
    }
    function onUp() {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    }
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
  }

  const panels: { id: PanelId; icon: React.ComponentType<{ className?: string }>; label: string; dot?: boolean }[] = [
    { id: "upload", icon: Upload, label: "Upload" },
    { id: "styles", icon: Brush, label: "Styles" },
    { id: "text", icon: Type, label: "Text" },
    { id: "shapes", icon: Shapes, label: "Shapes", dot: true },
    { id: "tips", icon: HelpCircle, label: "Tips" },
    { id: "info", icon: Info, label: "Info" },
  ];

  return (
    <div className="fixed inset-0 bg-[#f5f5f5] flex flex-col text-[13px]">
      {/* TOP BAR */}
      <header className="h-[56px] bg-white border-b border-[#e5e5e7] flex items-center gap-3 px-4 shrink-0">
        <Link
          href={`/catalog`}
          className="w-9 h-9 rounded-full hover:bg-[#f5f5f5] flex items-center justify-center"
          aria-label="Retour"
        >
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <div className="min-w-0">
          <p className="text-[14px] font-semibold truncate leading-tight">{productName}</p>
          <p className="text-[11px] text-[#9ca3af] leading-tight">
            {productVolume} &middot; {format}
          </p>
        </div>
        <div className="flex-1" />
        <button className="w-9 h-9 rounded-full hover:bg-[#f5f5f5] flex items-center justify-center">
          <MoreVertical className="h-4 w-4" />
        </button>
        <button className="h-9 px-4 rounded-full hover:bg-[#f5f5f5] flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider">
          <Download className="h-3.5 w-3.5" />
          Download template
        </button>
        <button className="h-9 px-4 rounded-full hover:bg-[#f5f5f5] flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-[#9ca3af]">
          <Eye className="h-3.5 w-3.5" />
          Preview
        </button>
        <button className="h-9 px-5 rounded-full bg-[#e5e5e7] text-[#9ca3af] flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider cursor-not-allowed">
          Continue
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </header>

      {/* BODY */}
      <div className="flex-1 flex min-h-0">
        {/* Left icon rail */}
        <nav className="w-[70px] bg-white border-r border-[#e5e5e7] shrink-0 py-3 flex flex-col items-center gap-1">
          {panels.map((p) => {
            const Icon = p.icon;
            const active = activePanel === p.id;
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => setActivePanel(p.id)}
                className={`relative w-[54px] py-3 rounded-xl flex flex-col items-center gap-1 transition-colors ${
                  active ? "text-[#6c3fee]" : "text-[#4d4f56] hover:bg-[#f5f5f5]"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className={`text-[10px] font-semibold ${active ? "text-[#6c3fee]" : ""}`}>{p.label}</span>
                {p.dot && <span className="absolute top-2 right-3 w-1.5 h-1.5 rounded-full bg-orange-500" />}
                {active && <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-6 bg-[#6c3fee] rounded-r-full" />}
              </button>
            );
          })}
        </nav>

        {/* Contextual panel */}
        <aside className="w-[320px] bg-white border-r border-[#e5e5e7] shrink-0 overflow-y-auto">
          {activePanel === "upload" && (
            <UploadPanel
              uploads={uploads}
              onFiles={handleFile}
              onPick={addToCanvas}
            />
          )}
          {activePanel === "text" && <DummyPanel title="Text" subtitle="Ajouter du texte sur l'etiquette." />}
          {activePanel === "shapes" && <DummyPanel title="Shapes" subtitle="Rectangles, cercles, lignes..." />}
          {activePanel === "styles" && <DummyPanel title="Styles" subtitle="Couleurs et typographies de marque." />}
          {activePanel === "tips" && <DummyPanel title="Tips" subtitle="Conseils pour un design conforme." />}
          {activePanel === "info" && <DummyPanel title="Info" subtitle={`${productName} · ${productVolume}`} />}
        </aside>

        {/* CANVAS AREA */}
        <section className="flex-1 flex flex-col min-w-0 relative">
          {/* Canvas toolbar */}
          <div className="h-12 px-4 flex items-center gap-3 border-b border-[#e5e5e7] bg-white">
            <label className="flex items-center gap-2 text-[12px] font-medium cursor-pointer">
              <input
                type="checkbox"
                checked={!!labelBg}
                onChange={(e) => setLabelBg(e.target.checked ? "#fafafa" : null)}
                className="accent-foreground"
              />
              Label background color
            </label>
            <div className="flex-1" />
            <div className="flex items-center gap-2 text-[12px] font-medium">
              <span>Guides</span>
              <button
                type="button"
                onClick={() => setGuides((g) => !g)}
                className={`relative w-9 h-5 rounded-full transition-colors ${guides ? "bg-[#6c3fee]" : "bg-[#d4d4d8]"}`}
                aria-label="Toggle guides"
              >
                <span
                  className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform ${
                    guides ? "translate-x-4" : "translate-x-0.5"
                  }`}
                />
              </button>
            </div>
            <button
              type="button"
              onClick={() => setShowLayers((s) => !s)}
              className="h-8 px-3 rounded-full border border-[#e5e5e7] flex items-center gap-1.5 text-[12px] font-semibold hover:bg-[#f5f5f5]"
            >
              <Layers className="h-3.5 w-3.5" />
              Layers
            </button>
          </div>

          {/* Canvas viewport */}
          <div className="flex-1 overflow-auto bg-[#f5f5f5] relative" onClick={() => setSelected(null)}>
            {/* compliance banner */}
            <div className="pt-5 px-6 flex items-start gap-3 max-w-[720px] mx-auto">
              <div className="flex items-center gap-2 bg-[#fff3c2] border border-[#f5d57e] rounded-full px-4 py-2">
                <span className="w-5 h-5 rounded-full bg-white flex items-center justify-center shrink-0">
                  <Info className="h-3 w-3 text-[#8b6914]" />
                </span>
                <span className="text-[12px] font-semibold">
                  Cliquez ici pour en savoir plus sur la conformite du design !
                </span>
              </div>
              <div className="ml-auto flex items-center gap-1">
                <button className="w-8 h-8 rounded-full bg-white border border-[#e5e5e7] hover:bg-[#f5f5f5] flex items-center justify-center">
                  <Undo2 className="h-3.5 w-3.5" />
                </button>
                <button className="w-8 h-8 rounded-full bg-white border border-[#e5e5e7] hover:bg-[#f5f5f5] flex items-center justify-center">
                  <Redo2 className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {/* canvas */}
            <div
              className="py-12 flex justify-center"
              style={{ transform: `scale(${zoom / 100})`, transformOrigin: "top center" }}
            >
              {templateImage ? (
                // =============== POUCH TEMPLATE (fleurs / resines) ===============
                <div
                  ref={canvasRef}
                  className="relative"
                  style={{ width: 420, height: 540 }}
                >
                  {guides && (
                    <GuideLabel x="50%" y="-26px" label="FRONT · Pochon" center />
                  )}

                  {/* Pouch photo */}
                  <img
                    src={templateImage}
                    alt="Pochon CBD mockup"
                    className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none"
                    draggable={false}
                  />

                  {/* Label area — front center of the pouch */}
                  <div
                    className="absolute"
                    style={{
                      // the pouch front centers around ~50% of the image;
                      // label is a rectangle slightly below the center.
                      left: "24%",
                      right: "24%",
                      top: "42%",
                      bottom: "18%",
                      background: labelBg || "transparent",
                      border: guides ? "1.5px dashed #6c3fee" : "1px solid transparent",
                      borderRadius: 6,
                    }}
                  >
                    {guides && (
                      <>
                        <span
                          className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#6c3fee] text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
                        >
                          Zone etiquette
                        </span>
                        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-px w-px border-l border-dashed border-[#b8a3ff]" />
                      </>
                    )}

                    {/* Placed elements (clipped to label area) */}
                    <div className="absolute inset-0 overflow-hidden">
                      {elements.map((el) => (
                        <div
                          key={el.id}
                          onMouseDown={(e) => onMouseDownElem(e, el.id)}
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelected(el.id);
                          }}
                          className={`absolute cursor-move select-none ${
                            selected === el.id ? "ring-2 ring-[#6c3fee]" : ""
                          }`}
                          style={{
                            left: `${el.x}%`,
                            top: `${el.y}%`,
                            width: el.w,
                            transform: `translate(-50%, -50%) rotate(${el.r}deg)`,
                          }}
                        >
                          <img
                            src={el.src}
                            alt={el.name}
                            draggable={false}
                            className="w-full h-auto pointer-events-none"
                          />
                          {selected === el.id && (
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                removeElement(el.id);
                              }}
                              className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-white shadow border border-[#e5e5e7] flex items-center justify-center hover:bg-red-50 hover:text-red-600"
                              aria-label="Supprimer"
                            >
                              <Trash2 className="h-3 w-3" />
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* dimensions */}
                  <span className="absolute -right-14 top-1/2 -translate-y-1/2 bg-white border border-[#e5e5e7] rounded-full px-2 py-1 text-[10px] font-semibold">
                    180mm
                  </span>
                  <span className="absolute left-1/2 -translate-x-1/2 -bottom-8 bg-white border border-[#e5e5e7] rounded-full px-2 py-1 text-[10px] font-semibold">
                    130mm
                  </span>
                </div>
              ) : (
                // =============== FLAT LABEL TEMPLATE (default) ===============
                <div
                  ref={canvasRef}
                  className="relative"
                  style={{ width: 720, height: 520 }}
                >
                  {guides && (
                    <>
                      <GuideLabel x="calc(50% - 110px)" y="-24px" label="FRONT" />
                      <GuideLabel x="calc(50% + 170px)" y="-24px" label="BACK" />
                      <GuideLabel x="calc(50% - 190px)" y="26px" label="CENTER" />
                    </>
                  )}

                  <div
                    className="absolute inset-0 rounded-md"
                    style={{
                      background: labelBg || "transparent",
                      border: guides ? "1.5px dashed #6c3fee" : "1px solid transparent",
                    }}
                  >
                    {guides && (
                      <div className="absolute top-0 bottom-0 left-1/2 -translate-x-px w-px border-l border-dashed border-[#b8a3ff]" />
                    )}

                    {elements.map((el) => (
                      <div
                        key={el.id}
                        onMouseDown={(e) => onMouseDownElem(e, el.id)}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelected(el.id);
                        }}
                        className={`absolute cursor-move select-none ${
                          selected === el.id ? "ring-2 ring-[#6c3fee]" : ""
                        }`}
                        style={{
                          left: `${el.x}%`,
                          top: `${el.y}%`,
                          width: el.w,
                          transform: `translate(-50%, -50%) rotate(${el.r}deg)`,
                        }}
                      >
                        <img
                          src={el.src}
                          alt={el.name}
                          draggable={false}
                          className="w-full h-auto pointer-events-none"
                        />
                        {selected === el.id && (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              removeElement(el.id);
                            }}
                            className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-white shadow border border-[#e5e5e7] flex items-center justify-center hover:bg-red-50 hover:text-red-600"
                            aria-label="Supprimer"
                          >
                            <Trash2 className="h-3 w-3" />
                          </button>
                        )}
                      </div>
                    ))}
                  </div>

                  <span className="absolute -right-14 top-1/2 -translate-y-1/2 bg-white border border-[#e5e5e7] rounded-full px-2 py-1 text-[10px] font-semibold">
                    2220px
                  </span>
                  <span className="absolute left-1/2 -translate-x-1/2 -bottom-8 bg-white border border-[#e5e5e7] rounded-full px-2 py-1 text-[10px] font-semibold">
                    2929px
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Bottom zoom bar */}
          <div className="h-14 border-t border-[#e5e5e7] bg-white flex items-center gap-3 px-5">
            <span className="text-[12px] font-semibold w-12 text-center">{zoom}%</span>
            <button
              type="button"
              onClick={() => setZoom((z) => Math.max(25, z - 25))}
              className="w-7 h-7 rounded-full hover:bg-[#f5f5f5] flex items-center justify-center"
            >
              <Minus className="h-3.5 w-3.5" />
            </button>
            <input
              type="range"
              min={25}
              max={200}
              value={zoom}
              onChange={(e) => setZoom(+e.target.value)}
              className="flex-1 accent-foreground"
            />
            <button
              type="button"
              onClick={() => setZoom((z) => Math.min(200, z + 25))}
              className="w-7 h-7 rounded-full hover:bg-[#f5f5f5] flex items-center justify-center"
            >
              <Plus className="h-3.5 w-3.5" />
            </button>
            <button className="w-8 h-8 rounded-full hover:bg-[#f5f5f5] flex items-center justify-center ml-2">
              <Move className="h-3.5 w-3.5" />
            </button>
          </div>
        </section>

        {/* Right floating Label card */}
        <aside className="w-[130px] shrink-0 p-5 flex flex-col items-center gap-3">
          <div className="w-[110px] aspect-[0.85] bg-white rounded-2xl border-2 border-[#6c3fee] shadow-sm flex items-center justify-center p-3">
            {templateImage ? (
              <img
                src={templateImage}
                alt="Pochon"
                className="w-full h-full object-contain"
                draggable={false}
              />
            ) : (
              <div className="relative">
                <div className="w-10 h-4 bg-[#2a2a2a] rounded-t" />
                <div className="w-14 h-24 bg-[#ededed] rounded-lg -mt-0.5" />
              </div>
            )}
          </div>
          <span className="text-[11px] font-bold text-[#6c3fee]">
            {templateImage ? "Pochon" : "Label"}
          </span>
        </aside>

        {/* Layers panel */}
        {showLayers && (
          <aside className="absolute right-4 top-[60px] w-[240px] bg-white rounded-2xl shadow-2xl border border-[#e5e5e7] p-3 z-20">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-[12px] font-bold uppercase tracking-wider">Layers</h3>
              <button type="button" onClick={() => setShowLayers(false)} className="text-[#9ca3af] hover:text-foreground">
                <Minus className="h-4 w-4" />
              </button>
            </div>
            {elements.length === 0 ? (
              <p className="text-[11px] text-[#9ca3af] py-4 text-center">
                Aucun calque. Ajoutez une image depuis Upload.
              </p>
            ) : (
              <ul className="space-y-1">
                {[...elements].reverse().map((el, i) => (
                  <li
                    key={el.id}
                    onClick={() => setSelected(el.id)}
                    className={`flex items-center gap-2 rounded-lg px-2 py-1.5 cursor-pointer ${
                      selected === el.id ? "bg-[#f1eefe]" : "hover:bg-[#f5f5f5]"
                    }`}
                  >
                    <img src={el.src} alt="" className="w-8 h-8 object-cover rounded" />
                    <span className="flex-1 text-[11px] truncate">
                      {elements.length - i}. {el.name}
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeElement(el.id);
                      }}
                      className="text-[#9ca3af] hover:text-red-600"
                    >
                      <Trash2 className="h-3 w-3" />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </aside>
        )}
      </div>
    </div>
  );
}

function UploadPanel({
  uploads,
  onFiles,
  onPick,
}: {
  uploads: UploadEntry[];
  onFiles: (f: FileList | null) => void;
  onPick: (u: UploadEntry) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className="p-5">
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className="w-full rounded-2xl border-2 border-dashed border-[#d4d4d8] hover:border-[#6c3fee] hover:bg-[#faf9ff] py-7 flex flex-col items-center justify-center gap-2 transition-colors"
      >
        <Upload className="h-5 w-5" />
        <span className="text-[12px] font-bold uppercase tracking-wider text-center">
          Upload visual
          <br />
          media file
        </span>
      </button>
      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png"
        multiple
        className="hidden"
        onChange={(e) => onFiles(e.target.files)}
      />
      <p className="text-[11px] text-[#9ca3af] text-center mt-3 leading-snug">
        Supported file formats : .JPG; .PNG.
        <br />
        Max file size 10MB
      </p>

      <div className="mt-8">
        <h3 className="text-[12px] font-semibold mb-3">Your uploads</h3>
        {uploads.length === 0 ? (
          <p className="text-[11px] text-[#9ca3af]">
            Aucun fichier pour l&apos;instant. Uploadez votre logo pour commencer.
          </p>
        ) : (
          <div className="grid grid-cols-2 gap-2">
            {uploads.map((u) => (
              <button
                key={u.id}
                type="button"
                onClick={() => onPick(u)}
                className="group rounded-xl overflow-hidden border border-[#e5e5e7] hover:border-[#6c3fee] bg-white text-left"
              >
                <div className="aspect-square bg-[#f5f5f5] flex items-center justify-center">
                  <img src={u.url} alt={u.name} className="w-full h-full object-contain" />
                </div>
                <p className="px-2 py-1.5 text-[10px] truncate">{u.name}</p>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function DummyPanel({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="p-5">
      <h2 className="text-[14px] font-semibold mb-1">{title}</h2>
      <p className="text-[12px] text-[#9ca3af]">{subtitle}</p>
      <div className="mt-6 rounded-2xl border border-dashed border-[#e5e5e7] p-6 text-center">
        <p className="text-[11px] text-[#9ca3af]">Panneau en construction.</p>
      </div>
    </div>
  );
}

function GuideLabel({
  x,
  y,
  label,
  center,
}: {
  x: string;
  y: string;
  label: string;
  center?: boolean;
}) {
  return (
    <span
      className="absolute bg-[#4d4f56] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full whitespace-nowrap"
      style={{
        left: x,
        top: y,
        transform: center ? "translateX(-50%)" : undefined,
      }}
    >
      {label}
    </span>
  );
}

import { useEffect, useState } from "react";
import { Folder, Monitor } from "lucide-react";

const MEMORY_KEY = "core-main-screen";

const TOP = ["start", "desktop", "memory", "notes", "tasks", "projects", "apps", "settings"];
const SIDE_LEFT = ["sidebar1", "desktop", "memory", "widgets", "clock", "sticky notes"];
const SIDE_RIGHT = ["sidebar2", "options", "tracking", "clipboards"];
const DESK = [
  "desktop",
  "memory",
  "apps",
  "notes",
  "tasks",
  "projects",
  "businesses",
  "personals",
  "users",
  "workstations",
  "categories",
  "colors",
];

const AREAS = new Set([...TOP, ...SIDE_LEFT, ...SIDE_RIGHT, ...DESK]);

const DESKTOP_APPS = [
  { name: "DOASHOW", note: "Portable drive, tools, writers" },
  { name: ".social", note: "Friends, follows, posts" },
  { name: "files", note: "Pictures, videos, shows" },
  { name: "(+) STORIES", note: "Writers corner" },
  { name: "channels", note: "Channel list" },
  { name: "categories", note: "Category system" },
  { name: "Proxies", note: "Proxy area" },
];

const APP_NAMES = new Set(DESKTOP_APPS.map((item) => item.name));

type Memory = { open: string; deskApp: string; note: string };

const EMPTY: Memory = { open: "desktop", deskApp: "DOASHOW", note: "" };

function loadMemory(): Memory {
  if (typeof window === "undefined") return EMPTY;
  try {
    const raw = window.localStorage.getItem(MEMORY_KEY);
    if (!raw) return EMPTY;
    const parsed = JSON.parse(raw) as Partial<Memory>;
    return {
      open: typeof parsed.open === "string" && AREAS.has(parsed.open) ? parsed.open : EMPTY.open,
      deskApp:
        typeof parsed.deskApp === "string" && APP_NAMES.has(parsed.deskApp) ? parsed.deskApp : EMPTY.deskApp,
      note: typeof parsed.note === "string" ? parsed.note.slice(0, 8000) : "",
    };
  } catch {
    return EMPTY;
  }
}

export function CoreMainScreen() {
  const [open, setOpen] = useState(EMPTY.open);
  const [deskApp, setDeskApp] = useState(EMPTY.deskApp);
  const [note, setNote] = useState("");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const saved = loadMemory();
    setOpen(saved.open);
    setDeskApp(saved.deskApp);
    setNote(saved.note);
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    window.localStorage.setItem(MEMORY_KEY, JSON.stringify({ open, deskApp, note }));
  }, [ready, open, deskApp, note]);

  return (
    <div className="flex min-h-[70vh] flex-col bg-bg text-fg">
      <div className="flex min-h-12 items-center gap-2 overflow-x-auto border-b border-line bg-surface px-3">
        <span className="shrink-0 font-mono text-xs tracking-widest text-accent uppercase">Top menu</span>
        {TOP.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setOpen(item)}
            className={
              "min-h-11 shrink-0 rounded-md px-3 text-sm " +
              (open === item ? "bg-accent text-ink" : "text-fg")
            }
          >
            {item}
          </button>
        ))}
      </div>

      <div className="grid min-h-0 flex-1 md:grid-cols-[200px_1fr_200px]">
        <nav className="border-b border-line bg-surface p-3 md:border-r md:border-b-0" aria-label="Sidebar 1">
          <p className="mb-2 font-mono text-xs tracking-widest text-muted uppercase">Sidebar 1</p>
          {SIDE_LEFT.map((item) => (
            <RailButton key={item} label={item} active={open === item} onClick={() => setOpen(item)} />
          ))}
        </nav>

        <main className="min-w-0 p-4 sm:p-6">
          {open === "desktop" ? (
            <DesktopPane app={deskApp} onApp={setDeskApp} />
          ) : open === "memory" ? (
            <MemoryPane note={note} onNote={setNote} />
          ) : (
            <>
              <p className="font-mono text-xs tracking-widest text-accent uppercase">CORE main screen</p>
              <h2 className="mt-1 text-2xl font-semibold capitalize">{open}</h2>
              <p className="mt-1 text-sm text-muted">Open area for {open}.</p>
              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {DESK.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setOpen(item)}
                    className={
                      "flex min-h-24 flex-col items-start justify-between rounded-card border p-3 text-left " +
                      (open === item ? "border-accent bg-surface-2" : "border-line bg-surface")
                    }
                  >
                    {item === "desktop" ? (
                      <Monitor className="size-4 text-accent" aria-hidden="true" />
                    ) : (
                      <Folder className="size-4 text-accent" aria-hidden="true" />
                    )}
                    <span className="text-sm">{item}</span>
                  </button>
                ))}
              </div>
            </>
          )}
        </main>

        <nav className="border-t border-line bg-surface p-3 md:border-t-0 md:border-l" aria-label="Sidebar 2">
          <p className="mb-2 font-mono text-xs tracking-widest text-muted uppercase">Sidebar 2</p>
          {SIDE_RIGHT.map((item) => (
            <RailButton key={item} label={item} active={open === item} onClick={() => setOpen(item)} />
          ))}
        </nav>
      </div>

      <div className="flex min-h-12 items-center gap-2 border-t border-line bg-surface px-3">
        <button
          type="button"
          onClick={() => setOpen("start")}
          className="min-h-11 rounded-md bg-accent px-4 text-sm text-ink"
        >
          Start
        </button>
        <button
          type="button"
          onClick={() => setOpen("desktop")}
          className={
            "min-h-11 rounded-md px-4 text-sm " +
            (open === "desktop" ? "bg-surface-2 text-accent" : "text-fg")
          }
        >
          Desktop
        </button>
        <button
          type="button"
          onClick={() => setOpen("memory")}
          className={
            "min-h-11 rounded-md px-4 text-sm " +
            (open === "memory" ? "bg-surface-2 text-accent" : "text-fg")
          }
        >
          Memory
        </button>
        <span className="text-sm text-muted">Taskbar</span>
        <span className="ml-auto font-mono text-sm text-fg">Clock</span>
      </div>
    </div>
  );
}

function MemoryPane({ note, onNote }: { note: string; onNote: (value: string) => void }) {
  return (
    <div>
      <p className="font-mono text-xs tracking-widest text-accent uppercase">CORE memory</p>
      <h2 className="mt-1 text-2xl font-semibold">Memory</h2>
      <p className="mt-1 text-sm text-muted">
        Kept in this browser. The open area and the desktop app are saved too.
      </p>
      <label className="mt-4 block">
        <span className="sr-only">CORE memory note</span>
        <textarea
          value={note}
          onChange={(event) => onNote(event.target.value)}
          rows={8}
          maxLength={8000}
          placeholder="Write something CORE should remember"
          className="w-full rounded-card border border-line bg-surface px-3 py-3 text-base text-fg outline-none placeholder:text-muted"
        />
      </label>
      <p className="mt-2 font-mono text-xs text-muted">{note.length} / 8000 · saved</p>
    </div>
  );
}

function DesktopPane({ app, onApp }: { app: string; onApp: (name: string) => void }) {
  const current = DESKTOP_APPS.find((item) => item.name === app) ?? DESKTOP_APPS[0];

  return (
    <div className="overflow-hidden rounded-card border border-line bg-surface">
      <div className="flex min-h-11 items-center justify-between border-b border-line px-3">
        <span className="font-mono text-xs tracking-widest text-accent uppercase">Desktop · top menu</span>
        <span className="text-sm text-muted">MAIN SCREEN</span>
      </div>
      <div className="grid md:grid-cols-[180px_1fr]">
        <div className="border-b border-line p-3 md:border-r md:border-b-0">
          <p className="mb-2 font-mono text-xs tracking-widest text-muted uppercase">Sidebar</p>
          {DESKTOP_APPS.map((item) => (
            <button
              key={item.name}
              type="button"
              onClick={() => onApp(item.name)}
              className={
                "mb-1 flex min-h-11 w-full items-center rounded-md px-3 text-left text-sm " +
                (item.name === current.name ? "bg-accent text-ink" : "text-fg")
              }
            >
              {item.name}
            </button>
          ))}
        </div>
        <div className="p-4">
          <p className="font-mono text-xs tracking-widest text-muted uppercase">apps</p>
          <h2 className="mt-1 text-2xl font-semibold">{current.name}</h2>
          <p className="mt-1 text-sm text-muted">{current.note}</p>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {DESKTOP_APPS.map((item) => (
              <button
                key={item.name}
                type="button"
                onClick={() => onApp(item.name)}
                className={
                  "min-h-20 rounded-card border p-3 text-left " +
                  (item.name === current.name ? "border-accent bg-surface-2" : "border-line bg-bg")
                }
              >
                <span className="block text-sm">{item.name}</span>
                <span className="mt-1 block text-xs text-muted">{item.note}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-line px-3 py-2 text-xs text-muted">
        Footer · DOASHOW — MADE BY CALLMECOFFEE3
      </div>
    </div>
  );
}

function RailButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        "mb-1 flex min-h-11 w-full items-center rounded-md px-3 text-left text-sm " +
        (active ? "bg-accent text-ink" : "text-fg")
      }
    >
      {label}
    </button>
  );
}

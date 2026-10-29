import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ChevronRight, FileText, Folder, FolderOpen } from "lucide-react";
import { CoreMainScreen } from "@/components/core-main-screen";
import { volumes, type Volume } from "@/data/volumes";

export const Route = createFileRoute("/")({ component: Home });

type Entry = { name: string; path: string; kind: "dir" | "file" };

function parentOf(path: string) {
  const clean = path.replace(/\/$/, "");
  const i = clean.lastIndexOf("/");
  return i === -1 ? "" : clean.slice(0, i);
}

function baseName(path: string) {
  const clean = path.replace(/\/$/, "");
  const i = clean.lastIndexOf("/");
  return i === -1 ? clean : clean.slice(i + 1);
}

function childrenOf(volume: Volume, dir: string): Entry[] {
  const dirs = volume.dirs
    .filter((d) => parentOf(d) === dir)
    .map((d) => ({ name: baseName(d), path: d.replace(/\/$/, ""), kind: "dir" as const }));
  const files = volume.files
    .filter((f) => parentOf(f) === dir)
    .map((f) => ({ name: baseName(f), path: f, kind: "file" as const }));
  return [...dirs, ...files].sort((a, b) => {
    if (a.kind !== b.kind) return a.kind === "dir" ? -1 : 1;
    return a.name.localeCompare(b.name);
  });
}

function Home() {
  const [volumeId, setVolumeId] = useState(volumes[0]?.id ?? "core");
  const volume = volumes.find((v) => v.id === volumeId) ?? volumes[0];
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState<Record<string, boolean>>({ "": true });
  const [query, setQuery] = useState("");
  const [screen, setScreen] = useState<"files" | "core">("files");

  const rootKids = useMemo(() => (volume ? childrenOf(volume, "") : []), [volume]);

  function pickVolume(id: string) {
    setVolumeId(id);
    setSelected("");
    setOpen({ "": true });
    setQuery("");
  }

  function toggleDir(path: string) {
    setSelected(path);
    setOpen((prev) => ({ ...prev, [path]: prev[path] ? false : true }));
  }

  if (!volume) return null;

  const selectedKind: "dir" | "file" | "root" =
    selected === "" ? "root" : volume.files.includes(selected) ? "file" : "dir";
  const listingDir = selectedKind === "file" ? parentOf(selected) : selected;
  const previewKids = childrenOf(volume, listingDir);
  const body = volume.contents[selected];

  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex flex-wrap items-center gap-3 border-b border-line px-4 py-3">
        <div>
          <p className="font-mono text-xs tracking-widest text-accent uppercase">HTML preview</p>
          <h1 className="text-xl leading-tight font-semibold">Archive files</h1>
        </div>
        <div className="ml-auto flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setScreen(screen === "core" ? "files" : "core")}
            className={
              "min-h-11 rounded-full border px-4 text-sm " +
              (screen === "core"
                ? "border-accent bg-accent text-ink"
                : "border-line bg-surface text-fg")
            }
          >
            CORE main screen
          </button>
          {volumes.map((v) => (
            <button
              key={v.id}
              type="button"
              onClick={() => {
                setScreen("files");
                pickVolume(v.id);
              }}
              className={
                "min-h-11 rounded-full border px-4 text-sm " +
                (screen === "files" && v.id === volume.id
                  ? "border-accent bg-accent text-ink"
                  : "border-line bg-surface text-fg")
              }
            >
              {v.label}
            </button>
          ))}
        </div>
      </header>

      {screen === "core" ? (
        <CoreMainScreen />
      ) : (
      <div className="grid min-h-0 flex-1 lg:grid-cols-[320px_1fr]">
        <aside className="flex max-h-[46vh] flex-col border-b border-line lg:max-h-none lg:border-r lg:border-b-0">
          <label className="block px-3 pt-3">
            <span className="sr-only">Filter paths</span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Filter paths"
              className="w-full rounded-lg border border-line bg-surface px-3 py-2 font-mono text-sm text-fg outline-none placeholder:text-muted"
            />
          </label>
          <nav className="min-h-0 flex-1 overflow-auto px-2 py-2" aria-label="Folders">
            {query.trim() ? (
              <FlatHits
                volume={volume}
                query={query.trim().toLowerCase()}
                selected={selected}
                onPick={(path, kind) => (kind === "dir" ? toggleDir(path) : setSelected(path))}
              />
            ) : (
              <Tree
                volume={volume}
                entries={rootKids}
                depth={0}
                open={open}
                selected={selected}
                onDir={toggleDir}
                onFile={setSelected}
              />
            )}
          </nav>
        </aside>

        <section className="min-w-0 overflow-auto p-4 sm:p-6">
          <article className="mx-auto max-w-3xl rounded-card bg-paper px-5 py-6 text-ink sm:px-8">
            <p className="font-mono text-xs tracking-widest text-ink-soft uppercase">Rendered as HTML</p>
            <h2 className="mt-1 text-2xl font-semibold break-all">
              {selected === "" ? volume.label : selected}
            </h2>
            <p className="mt-1 text-sm text-ink-soft">
              {selectedKind === "file" ? "File" : "Folder"} · {volume.label}
            </p>

            {body ? (
              <pre className="mt-5 overflow-auto font-mono text-sm leading-relaxed whitespace-pre-wrap text-ink">
                {body}
              </pre>
            ) : (
              <ul className="mt-5 divide-y divide-paper-line">
                {previewKids.map((entry) => (
                  <li key={entry.path}>
                    <button
                      type="button"
                      className={
                        "flex min-h-11 w-full items-center gap-3 py-2 text-left " +
                        (entry.path === selected ? "font-semibold" : "")
                      }
                      onClick={() =>
                        entry.kind === "dir" ? toggleDir(entry.path) : setSelected(entry.path)
                      }
                    >
                      {entry.kind === "dir" ? (
                        <Folder className="size-4 shrink-0" aria-hidden="true" />
                      ) : (
                        <FileText className="size-4 shrink-0" aria-hidden="true" />
                      )}
                      <span className="truncate">{entry.name}</span>
                      <span className="ml-auto font-mono text-xs text-ink-soft">{entry.kind}</span>
                    </button>
                  </li>
                ))}
                {previewKids.length === 0 ? (
                  <li className="py-4 text-sm text-ink-soft">Empty folder.</li>
                ) : null}
              </ul>
            )}
          </article>
        </section>
      </div>
      )}
    </div>
  );
}

function FlatHits({
  volume,
  query,
  selected,
  onPick,
}: {
  volume: Volume;
  query: string;
  selected: string;
  onPick: (path: string, kind: "dir" | "file") => void;
}) {
  const hits: Entry[] = [
    ...volume.dirs
      .filter((d) => d.toLowerCase().includes(query))
      .map((d) => ({
        name: d.replace(/\/$/, ""),
        path: d.replace(/\/$/, ""),
        kind: "dir" as const,
      })),
    ...volume.files
      .filter((f) => f.toLowerCase().includes(query))
      .map((f) => ({ name: f, path: f, kind: "file" as const })),
  ].slice(0, 80);

  if (hits.length === 0) return <p className="px-2 py-3 text-sm text-muted">No matches.</p>;

  return (
    <ul>
      {hits.map((entry) => (
        <li key={entry.kind + entry.path}>
          <button
            type="button"
            onClick={() => onPick(entry.path, entry.kind)}
            className={
              "flex min-h-10 w-full items-center gap-2 rounded-md px-2 text-left font-mono text-xs " +
              (selected === entry.path ? "bg-surface-2 text-accent" : "text-fg")
            }
          >
            {entry.kind === "dir" ? (
              <Folder className="size-4 shrink-0" aria-hidden="true" />
            ) : (
              <FileText className="size-4 shrink-0" aria-hidden="true" />
            )}
            <span className="truncate">{entry.name}</span>
          </button>
        </li>
      ))}
    </ul>
  );
}

function Tree({
  volume,
  entries,
  depth,
  open,
  selected,
  onDir,
  onFile,
}: {
  volume: Volume;
  entries: Entry[];
  depth: number;
  open: Record<string, boolean>;
  selected: string;
  onDir: (path: string) => void;
  onFile: (path: string) => void;
}) {
  if (entries.length === 0) {
    return depth === 0 ? <p className="px-2 py-3 text-sm text-muted">Empty.</p> : null;
  }
  return (
    <ul>
      {entries.map((entry) => {
        const isOpen = !!open[entry.path];
        const kids = entry.kind === "dir" && isOpen ? childrenOf(volume, entry.path) : [];
        const active = selected === entry.path;
        return (
          <li key={entry.path}>
            <button
              type="button"
              onClick={() => (entry.kind === "dir" ? onDir(entry.path) : onFile(entry.path))}
              className={
                "flex min-h-10 w-full items-center gap-1 rounded-md px-2 text-left text-sm " +
                (active ? "bg-surface-2 text-accent" : "text-fg")
              }
              style={{ paddingLeft: 8 + depth * 12 }}
            >
              {entry.kind === "dir" ? (
                <ChevronRight
                  className={"size-3.5 shrink-0 " + (isOpen ? "rotate-90" : "")}
                  aria-hidden="true"
                />
              ) : (
                <span className="inline-block w-3.5" />
              )}
              {entry.kind === "dir" ? (
                isOpen ? (
                  <FolderOpen className="size-4 shrink-0" aria-hidden="true" />
                ) : (
                  <Folder className="size-4 shrink-0" aria-hidden="true" />
                )
              ) : (
                <FileText className="size-4 shrink-0" aria-hidden="true" />
              )}
              <span className="truncate">{entry.name}</span>
            </button>
            {kids.length > 0 ? (
              <Tree
                volume={volume}
                entries={kids}
                depth={depth + 1}
                open={open}
                selected={selected}
                onDir={onDir}
                onFile={onFile}
              />
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}

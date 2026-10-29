import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as FileText, i as FolderOpen, n as Monitor, o as ChevronRight, r as Folder } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-36_dqU5w.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var MEMORY_KEY = "core-main-screen";
var TOP = [
	"start",
	"desktop",
	"memory",
	"notes",
	"tasks",
	"projects",
	"apps",
	"settings"
];
var SIDE_LEFT = [
	"sidebar1",
	"desktop",
	"memory",
	"widgets",
	"clock",
	"sticky notes"
];
var SIDE_RIGHT = [
	"sidebar2",
	"options",
	"tracking",
	"clipboards"
];
var DESK = [
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
	"colors"
];
var AREAS = /* @__PURE__ */ new Set([
	...TOP,
	...SIDE_LEFT,
	...SIDE_RIGHT,
	...DESK
]);
var DESKTOP_APPS = [
	{
		name: "DOASHOW",
		note: "Portable drive, tools, writers"
	},
	{
		name: ".social",
		note: "Friends, follows, posts"
	},
	{
		name: "files",
		note: "Pictures, videos, shows"
	},
	{
		name: "(+) STORIES",
		note: "Writers corner"
	},
	{
		name: "channels",
		note: "Channel list"
	},
	{
		name: "categories",
		note: "Category system"
	},
	{
		name: "Proxies",
		note: "Proxy area"
	}
];
var APP_NAMES = new Set(DESKTOP_APPS.map((item) => item.name));
var EMPTY = {
	open: "desktop",
	deskApp: "DOASHOW",
	note: ""
};
function loadMemory() {
	if (typeof window === "undefined") return EMPTY;
	try {
		const raw = window.localStorage.getItem(MEMORY_KEY);
		if (!raw) return EMPTY;
		const parsed = JSON.parse(raw);
		return {
			open: typeof parsed.open === "string" && AREAS.has(parsed.open) ? parsed.open : EMPTY.open,
			deskApp: typeof parsed.deskApp === "string" && APP_NAMES.has(parsed.deskApp) ? parsed.deskApp : EMPTY.deskApp,
			note: typeof parsed.note === "string" ? parsed.note.slice(0, 8e3) : ""
		};
	} catch {
		return EMPTY;
	}
}
function CoreMainScreen() {
	const [open, setOpen] = (0, import_react.useState)(EMPTY.open);
	const [deskApp, setDeskApp] = (0, import_react.useState)(EMPTY.deskApp);
	const [note, setNote] = (0, import_react.useState)("");
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const saved = loadMemory();
		setOpen(saved.open);
		setDeskApp(saved.deskApp);
		setNote(saved.note);
		setReady(true);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!ready) return;
		window.localStorage.setItem(MEMORY_KEY, JSON.stringify({
			open,
			deskApp,
			note
		}));
	}, [
		ready,
		open,
		deskApp,
		note
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-[70vh] flex-col bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-h-12 items-center gap-2 overflow-x-auto border-b border-line bg-surface px-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "shrink-0 font-mono text-xs tracking-widest text-accent uppercase",
					children: "Top menu"
				}), TOP.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setOpen(item),
					className: "min-h-11 shrink-0 rounded-md px-3 text-sm " + (open === item ? "bg-accent text-ink" : "text-fg"),
					children: item
				}, item))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid min-h-0 flex-1 md:grid-cols-[200px_1fr_200px]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "border-b border-line bg-surface p-3 md:border-r md:border-b-0",
						"aria-label": "Sidebar 1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-2 font-mono text-xs tracking-widest text-muted uppercase",
							children: "Sidebar 1"
						}), SIDE_LEFT.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RailButton, {
							label: item,
							active: open === item,
							onClick: () => setOpen(item)
						}, item))]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
						className: "min-w-0 p-4 sm:p-6",
						children: open === "desktop" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DesktopPane, {
							app: deskApp,
							onApp: setDeskApp
						}) : open === "memory" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MemoryPane, {
							note,
							onNote: setNote
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-xs tracking-widest text-accent uppercase",
								children: "CORE main screen"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-1 text-2xl font-semibold capitalize",
								children: open
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-sm text-muted",
								children: [
									"Open area for ",
									open,
									"."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3",
								children: DESK.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setOpen(item),
									className: "flex min-h-24 flex-col items-start justify-between rounded-card border p-3 text-left " + (open === item ? "border-accent bg-surface-2" : "border-line bg-surface"),
									children: [item === "desktop" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Monitor, {
										className: "size-4 text-accent",
										"aria-hidden": "true"
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Folder, {
										className: "size-4 text-accent",
										"aria-hidden": "true"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm",
										children: item
									})]
								}, item))
							})
						] })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "border-t border-line bg-surface p-3 md:border-t-0 md:border-l",
						"aria-label": "Sidebar 2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-2 font-mono text-xs tracking-widest text-muted uppercase",
							children: "Sidebar 2"
						}), SIDE_RIGHT.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RailButton, {
							label: item,
							active: open === item,
							onClick: () => setOpen(item)
						}, item))]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-h-12 items-center gap-2 border-t border-line bg-surface px-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setOpen("start"),
						className: "min-h-11 rounded-md bg-accent px-4 text-sm text-ink",
						children: "Start"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setOpen("desktop"),
						className: "min-h-11 rounded-md px-4 text-sm " + (open === "desktop" ? "bg-surface-2 text-accent" : "text-fg"),
						children: "Desktop"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setOpen("memory"),
						className: "min-h-11 rounded-md px-4 text-sm " + (open === "memory" ? "bg-surface-2 text-accent" : "text-fg"),
						children: "Memory"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm text-muted",
						children: "Taskbar"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ml-auto font-mono text-sm text-fg",
						children: "Clock"
					})
				]
			})
		]
	});
}
function MemoryPane({ note, onNote }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-mono text-xs tracking-widest text-accent uppercase",
			children: "CORE memory"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-1 text-2xl font-semibold",
			children: "Memory"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-sm text-muted",
			children: "Kept in this browser. The open area and the desktop app are saved too."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
			className: "mt-4 block",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "sr-only",
				children: "CORE memory note"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
				value: note,
				onChange: (event) => onNote(event.target.value),
				rows: 8,
				maxLength: 8e3,
				placeholder: "Write something CORE should remember",
				className: "w-full rounded-card border border-line bg-surface px-3 py-3 text-base text-fg outline-none placeholder:text-muted"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-2 font-mono text-xs text-muted",
			children: [note.length, " / 8000 · saved"]
		})
	] });
}
function DesktopPane({ app, onApp }) {
	const current = DESKTOP_APPS.find((item) => item.name === app) ?? DESKTOP_APPS[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "overflow-hidden rounded-card border border-line bg-surface",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-h-11 items-center justify-between border-b border-line px-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-xs tracking-widest text-accent uppercase",
					children: "Desktop · top menu"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm text-muted",
					children: "MAIN SCREEN"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid md:grid-cols-[180px_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-b border-line p-3 md:border-r md:border-b-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-2 font-mono text-xs tracking-widest text-muted uppercase",
						children: "Sidebar"
					}), DESKTOP_APPS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => onApp(item.name),
						className: "mb-1 flex min-h-11 w-full items-center rounded-md px-3 text-left text-sm " + (item.name === current.name ? "bg-accent text-ink" : "text-fg"),
						children: item.name
					}, item.name))]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-xs tracking-widest text-muted uppercase",
							children: "apps"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-1 text-2xl font-semibold",
							children: current.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: current.note
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 grid grid-cols-2 gap-3",
							children: DESKTOP_APPS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => onApp(item.name),
								className: "min-h-20 rounded-card border p-3 text-left " + (item.name === current.name ? "border-accent bg-surface-2" : "border-line bg-bg"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-sm",
									children: item.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1 block text-xs text-muted",
									children: item.note
								})]
							}, item.name))
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-t border-line px-3 py-2 text-xs text-muted",
				children: "Footer · DOASHOW — MADE BY CALLMECOFFEE3"
			})
		]
	});
}
function RailButton({ label, active, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: "mb-1 flex min-h-11 w-full items-center rounded-md px-3 text-left text-sm " + (active ? "bg-accent text-ink" : "text-fg"),
		children: label
	});
}
var volumes = [{
	"id": "core",
	"label": "(CORE)",
	"dirs": [
		".vs/",
		"Readme/",
		"adendums/",
		"apps/",
		"businesses/",
		"categories/",
		"clipboards/",
		"clock/",
		"colors/",
		"colors/mode/",
		"colors/mode/dark mood/",
		"colors/mode/dark mood/black/",
		"colors/mode/dark mood/dark blue/",
		"colors/mode/dark mood/red/",
		"colors/mode/light mode/",
		"colors/mode/lights out/",
		"notes/",
		"options/",
		"orieations/",
		"orieations/accending/",
		"orieations/by-file/",
		"orieations/by-name/",
		"orieations/by-number/",
		"orieations/by-size/",
		"orieations/decending/",
		"personals/",
		"projects/",
		"settings/",
		"sidebar1/",
		"sidebar2/",
		"start/",
		"sticky notes/",
		"taskbar/",
		"tasks/",
		"top menu/",
		"tracking/",
		"users/",
		"widgets/",
		"workstations/"
	],
	"files": [
		".vs/ProjectSettings.json",
		".vs/slnx.sqlite",
		"Readme/README.md",
		"Readme/Readme.txt",
		"files.txt"
	],
	"contents": {
		"files.txt": ".vs/\n.vs/ProjectSettings.json\n.vs/slnx.sqlite\nReadme/\nReadme/README.md\nReadme/Readme.txt\nadendums/\napps/\nbusinesses/\ncategories/\nclipboards/\nclock/\ncolors/\ncolors/mode/\ncolors/mode/dark mood/\ncolors/mode/dark mood/black/\ncolors/mode/dark mood/dark blue/\ncolors/mode/dark mood/red/\ncolors/mode/light mode/\ncolors/mode/lights out/\nnotes/\noptions/\norieations/\norieations/accending/\norieations/by-file/\norieations/by-name/\norieations/by-number/\norieations/by-size/\norieations/decending/\npersonals/\nprojects/\nsettings/\nsidebar1/\nsidebar2/\nstart/\nsticky notes/\ntaskbar/\ntasks/\ntop menu/\ntracking/\nusers/\nwidgets/\nworkstations/\n",
		".vs/ProjectSettings.json": "{\n  \"CurrentProjectSetting\": null\n}",
		"Readme/README.md": "# (CORE) Structure\n\nThis is the core organizational skeleton for a custom desktop / productivity environment.\n\n## Main Sections\n\n- **sidebar1 / sidebar2** – Side navigation panels\n- **taskbar / top menu / start** – Primary UI chrome\n- **colors/** – Theme system (dark mood, light mode, lights out, etc.)\n- **orieations/** – Sorting & view options (by name, size, number, ascending/descending)\n- **notes / sticky notes / tasks / projects** – Productivity areas\n- **apps / businesses / personals / users / workstations** – Content & workspace categories\n- **settings / options / tracking / widgets / clock / clipboards** – System & utility areas\n\n## Notes\n- Folder structure only (no content yet)\n- Created as a visual/organizational prototype\n- Related to the larger DESKTOP-(MAIN-SCREEN) environment\n\n",
		"Readme/Readme.txt": "See README.md\n"
	}
}, {
	"id": "desktop",
	"label": "DESKTOP (MAIN SCREEN)",
	"dirs": [
		"FOOTER/",
		"FOOTER/DOASHOW- MADSE BY CALLMECOFFEE3/",
		"TOP MENU/",
		"apps/",
		"apps/(+) STORIES/",
		"apps/(+) STORIES/Writers-Cornerstuff/",
		"apps/(+) STORIES/Writers-Cornerstuff/stuff/",
		"apps/(+) STORIES/Writers-Cornerstuff/stuff/MENU_Writters/",
		"apps/(+) STORIES/YourBasePath/",
		"apps/.experiments/",
		"apps/.idea/",
		"apps/.projectds/",
		"apps/.social/",
		"apps/.social/FOLLOWS/",
		"apps/.social/FRIENDS/",
		"apps/.social/GROUPS/",
		"apps/.social/LIKES/",
		"apps/.social/MESSAGES/",
		"apps/.social/PAGES/",
		"apps/.social/PHOTOS/",
		"apps/.social/POST/",
		"apps/.social/VIDEOS/",
		"apps/.txt/",
		"apps/DOASHOW/",
		"apps/DOASHOW/.git/",
		"apps/DOASHOW/.git/hooks/",
		"apps/DOASHOW/.git/info/",
		"apps/DOASHOW/portable-c-drive/",
		"apps/DOASHOW/portable-c-drive/$RECYCLE.BIN/",
		"apps/DOASHOW/portable-c-drive/$RECYCLE.BIN/-PATHS/",
		"apps/DOASHOW/portable-c-drive/$RECYCLE.BIN/-PATHS/YourBasePath/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/-Client/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/-Client/- Stuff/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/-Client/- Stuff/- Work Station/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/-Client/--- main help/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/-Client/--- main help/- feedback/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/-Client/--- main help/-creator (company)/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/-Client/---/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/-Client/---/-creator (company)/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/TOOLS/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/TOOLS/SHOP/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/TOOLS/SHOP/-files/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/TOOLS/SHOP/-files/.vscode/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/TOOLS/SHOP/-files/file/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/TOOLS/SHOP/-files/python/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/profesional/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/profesional/TOOLS/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/profesional/TOOLS/SHOP/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/profesional/TOOLS/SHOP/-files/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/profesional/TOOLS/SHOP/-files/.vscode/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/profesional/TOOLS/SHOP/-files/file/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/profesional/TOOLS/SHOP/-files/python/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/profesional/toolbox/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/profesional/toolbox/-(tools) WORDS/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/profesional/toolbox/-(tools) WORDS/-this drive/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/profesional/toolbox/-(tools) WORDS/-this drive/Notes/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/profesional/toolbox/-(tools) WORDS/-this drive/Notes/producer looking/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/profesional/toolbox/-(tools) WORDS/-this drive/Notes/producer looking/(-) the nav menu/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/profesional/toolbox/-(tools) WORDS/-this drive/Notes/producer looking/(-) the nav menu/(-) the marketplace/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/profesional/toolbox/-(tools) WORDS/-this drive/Notes/producer looking/(-) the nav menu/(-) the marketplace/- Android/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/profesional/toolbox/-(tools) WORDS/-this drive/Notes/producer looking/(-) the nav menu/-(-) marketplace/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/profesional/toolbox/-(tools) WORDS/-this drive/Notes/producer looking/(-) the nav menu/-(-) marketplace/Documents/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/profesional/toolbox/-(tools) WORDS/-this drive/Notes/producer looking/(-) the nav menu/-(-) marketplace/Documents/.key/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/profesional/toolbox/-(tools) WORDS/-this drive/Notes/producer looking/-The Computer/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/profesional/toolbox/-(tools) WORDS/-this drive/Notes/star trek/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/profesional/toolbox/-(tools) WORDS/-this drive/Notes/text/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/profesional/toolbox/-(tools) WORDS/-this drive/Star Trek/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/profesional/toolbox/-(tools) WORDS/Text/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/profesional/toolbox/-(tools) WORDS/the rando Backups/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/toolbox/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/toolbox/-(TOOLS) CLIPBOARDS/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/toolbox/-(TOOLS) CLIPBOARDS/-@ cORE/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/toolbox/-(TOOLS) CLIPBOARDS/-@Burners/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/toolbox/-(Tools) private-cloud/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/toolbox/-(Tools) private-cloud/private-cloud/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/toolbox/-(tools) Folders/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/toolbox/-(tools) Folders/TEXT/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/toolbox/-(tools) Folders/python/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/toolbox/-(tools) LETTERS/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/toolbox/-(tools) LETTERS/symbols/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/toolbox/-(tools) WORDS/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/toolbox/-(tools) WORDS/(+) CATAGORIES/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/toolbox/-(tools) WORDS/(+) PEOPLE-STUFF/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/toolbox/-(tools) WORDS/-stuff/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/toolbox/-(tools) WORDS/-this drive/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/toolbox/-(tools) WORDS/1. Do A Show/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/toolbox/-(tools) WORDS/2/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/toolbox/-(tools) WORDS/3d object/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/toolbox/-(tools) WORDS/3d object/BALL/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/toolbox/-(tools) WORDS/3d object/Other/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/toolbox/-(tools) WORDS/3d object/STAGE/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/toolbox/-(tools) WORDS/3d object/figuar red/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/toolbox/-(tools) WORDS/3d object/figuar/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/toolbox/-(tools) WORDS/Application Files/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/toolbox/-(tools) WORDS/Application Files/Do A Show (browser)_1_0_0_0/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/toolbox/-(tools) WORDS/Concepts/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/toolbox/-(tools) WORDS/Concepts/Untitled/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/toolbox/-(tools) WORDS/Concepts/Welcome to Concepts/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/toolbox/-(tools) WORDS/DAZ 3D/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/toolbox/-(tools) WORDS/DAZ 3D/Studio/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/toolbox/-(tools) WORDS/Documents/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/toolbox/-(tools) WORDS/Fax/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/toolbox/-(tools) WORDS/FeedbackHub/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/toolbox/-(tools) WORDS/FeedbackHub/{4399b4a8-46d7-4e72-a2f7-14d1fb9636a8}/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/toolbox/-(tools) WORDS/FeedbackHub/{4ffe2f3e-f0ad-4caf-9d57-8e2502530782}/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/toolbox/-(tools) WORDS/FeedbackHub/{58095955-99e7-49a1-8039-681afafe756c}/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/toolbox/-(tools) WORDS/FeedbackHub/{607d8631-7814-4147-a5fe-edee227d5b8c}/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/toolbox/-(tools) WORDS/FeedbackHub/{6432afba-453f-4666-8cec-c5a0e1c5f8b5}/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/toolbox/-(tools) WORDS/FeedbackHub/{8f5c076d-76bd-4c69-a74c-19b0d7062fe2}/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/toolbox/-(tools) WORDS/FeedbackHub/{9547451b-0189-4e35-b0c7-185018b6b871}/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/toolbox/-(tools) WORDS/FeedbackHub/{bed53bd9-a934-44f4-bae6-3f7e37f08f15}/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/toolbox/-(tools) WORDS/FeedbackHub/{bf581565-a7d8-4de8-860d-59ded5afc086}/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/toolbox/-(tools) WORDS/FeedbackHub/{eb5c6782-71f0-4fe5-9532-29f5d0c958a7}/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/toolbox/-(tools) WORDS/FeedbackHub/{f6e06d8d-2c57-4b50-8f2d-6e8b424794a3}/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/toolbox/-(tools) WORDS/FeedbackHub/{fc23423f-b935-46a7-b87d-f61b1e571615}/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/toolbox/-(tools) WORDS/IISExpress/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/toolbox/-(tools) WORDS/IISExpress/config/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/toolbox/-(tools) WORDS/Marketplace/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/toolbox/-(tools) WORDS/Marketplace/merch/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/toolbox/-(tools) WORDS/My Web Sites/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/toolbox/-(tools) WORDS/My Web Sites/WebSite1/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/toolbox/-(tools) WORDS/Presentations/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/toolbox/-(tools) WORDS/SEARCH/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/toolbox/-(tools) WORDS/SEARCH/-files/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/toolbox/-(tools) WORDS/SHOP/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/toolbox/-(tools) WORDS/SHOP/-files/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/toolbox/-(tools) WORDS/SOCIAL/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/toolbox/-(tools) WORDS/SOCIAL/SEARCH/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/toolbox/-(tools) WORDS/SOCIAL/SHOP/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/toolbox/-(tools) WORDS/Script/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/toolbox/-(tools) WORDS/Text/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/toolbox/-(tools) WORDS/VCF File/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/toolbox/-(tools) WORDS/Wondershare/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/toolbox/-(tools) WORDS/Wondershare/Wondershare Filmora/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/toolbox/-(tools) WORDS/YourBasePath/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/toolbox/-(tools) WORDS/android/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/toolbox/-(tools) WORDS/android/- Android/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/toolbox/-(tools) WORDS/pdf/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/toolbox/-(tools) WORDS/shortcut/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/toolbox/-(tools) WORDS/the rando Backups/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/toolbox/-(tools) WORDS/xlsx/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/users/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/users/-Client/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/users/-Client/- Stuff/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/users/-Client/- Stuff/- Work Station/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/users/-Client/- Stuff/- Work Station/- Do A Show (writers)/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/users/-Client/- Stuff/- Work Station/- Do A Show (writers)/(-) nav menu/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/users/-Client/- Stuff/- Work Station/- Do A Show (writers)/(-) nav menu/(-)the marketplace/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/users/-Client/- Stuff/- Work Station/- Do A Show (writers)/(-) nav menu/(-)the marketplace/(-) Domains + things/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/users/-Client/- Stuff/- Work Station/- Do A Show (writers)/(-) nav menu/(-)the marketplace/- Android/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/users/-Client/- Stuff/- Work Station/- Do A Show (writers)/(-) nav menu/(-)the marketplace/- Android/data/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/users/-Client/- Stuff/- Work Station/- Do A Show (writers)/(-) nav menu/- Android/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/users/-Client/- Stuff/- Work Station/- Do A Show (writers)/(-) nav menu/- Android/data/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/users/-Client/- Stuff/- Work Station/- Do A Show (writers)/(-) nav menu/-(-) marketplace/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/users/-Client/- Stuff/- Work Station/- Do A Show (writers)/(-) nav menu/-(-) marketplace/Documents/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/users/-Client/- Stuff/- Work Station/- Do A Show (writers)/(-) nav menu/-(-) marketplace/Documents/.key/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/users/-Client/- Stuff/- Work Station/- Do A Show (writers)/(-) nav menu/-(-) marketplace/Documents/.numbers/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/users/-Client/- Stuff/- Work Station/- Do A Show (writers)/(-) nav menu/-(-) marketplace/Documents/3D Creator 10.3/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/users/-Client/- Stuff/- Work Station/- Do A Show (writers)/(-) nav menu/-(-) marketplace/Documents/3D Creator 10.3/Media/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/users/-Client/- Stuff/- Work Station/- Do A Show (writers)/(-) nav menu/-(-) marketplace/Documents/Desktop/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/users/-Client/- Stuff/- Work Station/- Do A Show (writers)/(-) nav menu/-(-) marketplace/Documents/The New/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/users/-Client/- Stuff/- Work Station/- Do A Show (writers)/(-) nav menu/-(-) marketplace/Documents/The New/Animotica/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/users/-Client/- Stuff/- Work Station/- Do A Show (writers)/(-) nav menu/-(-) marketplace/Documents/The New/CyberLink/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/users/-Client/- Stuff/- Work Station/- Do A Show (writers)/(-) nav menu/-(-) marketplace/Documents/The New/Fax/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/users/-Client/- Stuff/- Work Station/- Do A Show (writers)/(-) nav menu/-(-) marketplace/Documents/The New/Fax/Inbox/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/users/-Client/- Stuff/- Work Station/- Do A Show (writers)/(-) nav menu/-(-) marketplace/Documents/The New/documents/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/users/-Client/- Stuff/- Work Station/- Do A Show (writers)/(-) nav menu/-(-) marketplace/Documents/VisualShaders/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/users/-Client/- Stuff/- Work Station/- Do A Show (writers)/(-) nav menu/-(-) marketplace/Documents/VisualShaders/objects/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/users/-Client/- Stuff/- Work Station/- Do A Show (writers)/(-) nav menu/-(-) marketplace/Documents/matt business/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/users/-Client/- Stuff/- Work Station/- Do A Show (writers)/(-) nav menu/-(-) marketplace/Documents/matt business/LIVE/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/users/-Client/- Stuff/- Work Station/- Do A Show (writers)/(-) nav menu/-(-) marketplace/Documents/matt business/scripts/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/users/-Client/- Stuff/- Work Station/- Do A Show (writers)/(-)the marketplace/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/users/-Client/- Stuff/- Work Station/- Do A Show (writers)/(-)the marketplace/(-) Domains + things/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/users/-Client/- Stuff/- Work Station/- Do A Show (writers)/(-)the marketplace/- Android/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/users/-Client/- Stuff/- Work Station/- Do A Show (writers)/(-)the marketplace/- Android/data/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/users/-Client/--- main help/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/users/-Client/--- main help/- feedback/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/users/-Client/--- main help/-creator (company)/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/users/-Client/--- main help/-creator (company)/DO A SHOW/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/users/-Client/--- main help/-creator (company)/DO A SHOW/5ws/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/users/-Client/--- main help/-creator (company)/DO A SHOW/5ws/what rolls/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/users/-Client/--- main help/-creator (company)/DO A SHOW/5ws/what rolls/cocept rolls/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/users/-Client/--- main help/-creator (company)/DO A SHOW/5ws/what rolls/cocept rolls/domain/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/users/-Client/--- main help/-creator (company)/DO A SHOW/Do A Show Production Movie Company LLC/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/users/-Client/--- main help/-creator (company)/DO A SHOW/Do A Show Production Movie Company LLC/Documents/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/users/-Client/--- main help/-creator (company)/DO A SHOW/Do A Show Production Movie Company LLC/Documents/share/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/users/-Client/--- main help/-creator (company)/DO A SHOW/My Drive/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/users/-Client/---/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/users/-Client/---/-creator (company)/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/users/-Client/---/-creator (company)/DO A SHOW/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/users/-Client/---/-creator (company)/DO A SHOW/5ws/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/users/-Client/---/-creator (company)/DO A SHOW/5ws/what rolls/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/users/-Client/---/-creator (company)/DO A SHOW/5ws/what rolls/cocept rolls/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/users/-Client/---/-creator (company)/DO A SHOW/5ws/what rolls/cocept rolls/domain/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/users/-Client/---/-creator (company)/DO A SHOW/Do A Show Production Movie Company LLC/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/users/-Client/---/-creator (company)/DO A SHOW/Do A Show Production Movie Company LLC/Documents/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/users/-Client/---/-creator (company)/DO A SHOW/Do A Show Production Movie Company LLC/Documents/share/",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/users/-Client/---/-creator (company)/DO A SHOW/My Drive/",
		"apps/DOASHOW/portable-c-drive/START/",
		"apps/DOASHOW/portable-c-drive/START/-files/",
		"apps/DOASHOW/portable-c-drive/START/-files/.vscode/",
		"apps/DOASHOW/portable-c-drive/START/-files/file/",
		"apps/DOASHOW/portable-c-drive/START/-files/python/",
		"apps/DOASHOW/portable-c-drive/START/Writers-Cornerstuff/",
		"apps/DOASHOW/portable-c-drive/START/Writers-Cornerstuff/-stuff/",
		"apps/DOASHOW/portable-c-drive/START/Writers-Cornerstuff/-stuff/MENUWritters/",
		"apps/DOASHOW/portable-c-drive/START/Writers-Cornerstuff/-stuff/MENU_Writters/",
		"apps/DOASHOW/portable-c-drive/START/Writers-Cornerstuff/-stuff/MENU_Writters/Writers-Cornerstuff/",
		"apps/DOASHOW/portable-c-drive/START/Writers-Cornerstuff/-stuff/MENU_Writters/Writers-Cornerstuff/stuff/",
		"apps/DOASHOW/portable-c-drive/START/Writers-Cornerstuff/-stuff/MENU_Writters/YourBasePath/",
		"apps/DOASHOW/portable-c-drive/START/Writers-Cornerstuff/-stuff/Writers-Cornerstuff/",
		"apps/DOASHOW/portable-c-drive/START/Writers-Cornerstuff/-stuff/Writers-Cornerstuff/stuff/",
		"apps/DOASHOW/portable-c-drive/START/Writers-Cornerstuff/-stuff/Writers-Cornerstuff/stuff/MENU_Writters/",
		"apps/DOASHOW/portable-c-drive/START/Writers-Cornerstuff/-stuff/YourBasePath/",
		"apps/DOASHOW/portable-c-drive/Writers-Cornerstuff/",
		"apps/DOASHOW/portable-c-drive/Writers-Cornerstuff/stuff/",
		"apps/DOASHOW/portable-c-drive/Writers-Cornerstuff/stuff/MENUWritters/",
		"apps/DOASHOW/portable-c-drive/Writers-Cornerstuff/stuff/MENU_Writters/",
		"apps/DOASHOW/portable-c-drive/Writers-Cornerstuff/stuff/MENU_Writters/(+) STORIES/",
		"apps/DOASHOW/portable-c-drive/Writers-Cornerstuff/stuff/MENU_Writters/(+) STORIES/Writers-Cornerstuff/",
		"apps/DOASHOW/portable-c-drive/Writers-Cornerstuff/stuff/MENU_Writters/(+) STORIES/Writers-Cornerstuff/stuff/",
		"apps/DOASHOW/portable-c-drive/Writers-Cornerstuff/stuff/MENU_Writters/(+) STORIES/YourBasePath/",
		"apps/DOASHOW/portable-c-drive/Writers-Cornerstuff/stuff/MENU_Writters/Writers-Cornerstuff/",
		"apps/DOASHOW/portable-c-drive/Writers-Cornerstuff/stuff/MENU_Writters/Writers-Cornerstuff/stuff/",
		"apps/DOASHOW/portable-c-drive/Writers-Cornerstuff/stuff/MENU_Writters/Writers-Cornerstuff/stuff/MENU_Writters/",
		"apps/DOASHOW/portable-c-drive/Writers-Cornerstuff/stuff/MENU_Writters/YourBasePath/",
		"apps/DOASHOW/portable-c-drive/private-cloud/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-#01. Work Station (STUDIOS) (landing)/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-#01. Work Station (STUDIOS) (landing)/- Do A Show (writers) (parcel)/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-#01. Work Station (STUDIOS) (landing)/- Do A Show (writers) (parcel)/(-)the marketplace (inner)/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-#20. ZOmbies (landings)/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-#20. ZOmbies (landings)/(-)the marketplace (inner)/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-#20. ZOmbies (landings)/(-)the marketplace (inner)/(-) (nav) menu/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-#20. ZOmbies (landings)/(-)the marketplace (inner)/(-) Domains + things/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-( ) MENU LETTERS/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-( ) MENU LETTERS/a. Notes/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-( ) MENU LETTERS/a. Notes/-that drive/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-( ) MENU LETTERS/a. Notes/-that drive/Do A Show Drive (drive)/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-( ) MENU LETTERS/a. Notes/producer looking/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-( ) MENU LETTERS/a. Notes/producer looking/(-) the nav menu/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-( ) MENU LETTERS/a. Notes/text/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-( ) MENU LETTERS/b. --- main help/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-( ) MENU LETTERS/b. --- main help/- feedback/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-( ) MENU LETTERS/b. --- main help/-creator (company)/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-( ) MENU LETTERS/b. --- main help/-creator (company)/DO A SHOW/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-( ) MENU LETTERS/c. - other/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-( ) MENU LETTERS/c. - other/---/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-( ) MENU LETTERS/c. - other/---/-creator (company)/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-( ) MENU LETTERS/c. - other/Do A Show Drive (drive)/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-( ) MENU LETTERS/c. - other/Do A Show Drive (drive)/-this drive/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-( ) MENU LETTERS/d.- actors/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-( ) MENU LETTERS/e. -directors/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-( ) MENU LETTERS/f. -writers/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-( ) MENU LETTERS/g. -anyone/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-04. GUIDE (directory)/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-04. GUIDE (directory)/-Star Trek/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-04. GUIDE (directory)/-Start/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-04. GUIDE (directory)/-Stuff.That.Sells/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-04. GUIDE (directory)/-Stuff.That.Sells/-Booths/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-04. GUIDE (directory)/-Stuff.That.Sells/-Channels/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-04. GUIDE (directory)/-Stuff.That.Sells/-Channels/-channels.Ideas.Thatsell/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-04. GUIDE (directory)/-Stuff.That.Sells/-Decorations/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-04. GUIDE (directory)/-Stuff.That.Sells/-Fanbaise/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-04. GUIDE (directory)/-Stuff.That.Sells/-Film/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-04. GUIDE (directory)/-Stuff.That.Sells/-Meetings/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-04. GUIDE (directory)/-Stuff.That.Sells/-Personals/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-04. GUIDE (directory)/-Stuff.That.Sells/-Pictures/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-04. GUIDE (directory)/-Stuff.That.Sells/-Platform/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-04. GUIDE (directory)/-Stuff.That.Sells/-Productions/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-04. GUIDE (directory)/-Stuff.That.Sells/-Props/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-04. GUIDE (directory)/-Stuff.That.Sells/-Publications/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-04. GUIDE (directory)/-Stuff.That.Sells/-Screens/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-04. GUIDE (directory)/-Stuff.That.Sells/-Show/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-04. GUIDE (directory)/-Stuff.That.Sells/-Studio/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-04. GUIDE (directory)/-Stuff.That.Sells/-Theater/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-04. GUIDE (directory)/-Stuff.That.Sells/-Videos/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-04. GUIDE (directory)/-Usefull/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-04. GUIDE (directory)/-Usefull/- Channel & Show/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-04. GUIDE (directory)/-Usefull/- Channel & Show/- Channels/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-04. GUIDE (directory)/-Usefull/- other/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-04. GUIDE (directory)/-Usefull/- other/---/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-04. GUIDE (directory)/-Usefull/- other/Do A Show Drive (drive)/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-04. GUIDE (directory)/-Usefull/--- main help/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-04. GUIDE (directory)/-Usefull/--- main help/- feedback/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-04. GUIDE (directory)/-Usefull/--- main help/-creator (company)/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-04. GUIDE (directory)/-Usefull/-Channel & Show/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-04. GUIDE (directory)/-Usefull/-The oven/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-04. GUIDE (directory)/-Usefull/-The reporters desk/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-04. GUIDE (directory)/-Usefull/-The reporters desk/-The Computer/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-04. GUIDE (directory)/-Usefull/Notes/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-04. GUIDE (directory)/-Usefull/Notes/-that drive/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-04. GUIDE (directory)/-Usefull/Notes/DIctionary/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-04. GUIDE (directory)/-Usefull/Notes/producer looking/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-04. GUIDE (directory)/-Usefull/Notes/star trek/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-04. GUIDE (directory)/-Usefull/Notes/text/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-04. GUIDE (directory)/DIctionary/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-04. GUIDE (directory)/Notes/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-04. GUIDE (directory)/Notes/producer looking/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-04. GUIDE (directory)/Notes/producer looking/(-) the nav menu/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-04. GUIDE (directory)/Star Trek/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-08. The spaces (anyone)/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-08. The spaces (anyone)/#U2014Prices/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-08. The spaces (anyone)/#U2014Prices/A_5rolls/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-08. The spaces (anyone)/#U2014Prices/A_5rolls/main characters/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-08. The spaces (anyone)/#U2014Prices/A_show/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-08. The spaces (anyone)/#U2014Prices/A_show/show/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-08. The spaces (anyone)/#U2014Prices/M_channels/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-08. The spaces (anyone)/#U2014Prices/M_channels/---channel _ network#U2b50#Ufe0f/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-08. The spaces (anyone)/(-) marketplace/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-08. The spaces (anyone)/(-) marketplace/(-) Domains + things/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-08. The spaces (anyone)/(-) marketplace/(-) Domains + things/Do A Show Production Movie Company LLC/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-08. The spaces (anyone)/(-) marketplace/- Android/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-08. The spaces (anyone)/(-) marketplace/- Android/data/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-08. The spaces (anyone)/(-) nav menu/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-08. The spaces (anyone)/(-) nav menu/(-) Android/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-08. The spaces (anyone)/(-) nav menu/(-) Android/data/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-08. The spaces (anyone)/(-) nav menu/(-) marketplace/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-08. The spaces (anyone)/(-) nav menu/(-) marketplace/Do A Show Production Movie Company LLC/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-08. The spaces (anyone)/(-) nav menu/(-) marketplace/Documents/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-08. The spaces (anyone)/(-) nav menu/(-)the marketplace/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-08. The spaces (anyone)/(-) nav menu/(-)the marketplace/(-) Domains + things/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-08. The spaces (anyone)/(-) nav menu/(-)the marketplace/- Android/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-08. The spaces (anyone)/(-) nav menu/- Android/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-08. The spaces (anyone)/(-) nav menu/- Android/data/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-08. The spaces (anyone)/(-) nav menu/-(-) marketplace/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-08. The spaces (anyone)/(-) nav menu/-(-) marketplace/Do A Show Production Movie Company LLC/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-08. The spaces (anyone)/(-) nav menu/-(-) marketplace/Documents/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-08. The spaces (anyone)/(-) nav menu/-(-) show/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-08. The spaces (anyone)/(-) nav menu/-(-) show/@system-my-writers/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-08. The spaces (anyone)/(-)the marketplace/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-08. The spaces (anyone)/(-)the marketplace/(-) Domains + things/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-08. The spaces (anyone)/(-)the marketplace/(-) Domains + things/Do A Show Production Movie Company LLC/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-08. The spaces (anyone)/(-)the marketplace/- Android/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-08. The spaces (anyone)/(-)the marketplace/- Android/data/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-08. The spaces (anyone)/(nav  - Link)/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-08. The spaces (anyone)/(nav  - Link)/(-) nav menu/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-08. The spaces (anyone)/(nav  - Link)/(-) nav menu/(-) Android/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-08. The spaces (anyone)/(nav  - Link)/(-) nav menu/(-) marketplace/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-08. The spaces (anyone)/(nav  - Link)/(-) nav menu/(-)the marketplace/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-08. The spaces (anyone)/(nav  - Link)/(-) nav menu/- Android/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-08. The spaces (anyone)/(nav  - Link)/(-) nav menu/-(-) marketplace/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-08. The spaces (anyone)/(nav  - Link)/(-) nav menu/-(-) show/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-08. The spaces (anyone)/(nav  - Link)/(-)the marketplace/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-08. The spaces (anyone)/(nav  - Link)/(-)the marketplace/(-) Domains + things/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-08. The spaces (anyone)/(nav  - Link)/(-)the marketplace/- Android/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-08. The spaces (anyone)/(nav  - Link)/(nav)/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-08. The spaces (anyone)/(nav  - Link)/(nav)/--- (nav & Link)/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-08. The spaces (anyone)/-1 --(OTHERS)/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-08. The spaces (anyone)/-1 --(OTHERS)/---channel _ network#U2b50#Ufe0f/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-08. The spaces (anyone)/-1 --(OTHERS)/---channel _ network#U2b50#Ufe0f/-Show #L01f600 (writer) (creator)/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-08. The spaces (anyone)/-The Computer/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-09. The spaces (nav)  (anyonye)/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-09. The spaces (nav)  (anyonye)/(-) marketplace/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-09. The spaces (nav)  (anyonye)/(-) marketplace/(-) Domains + things/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-09. The spaces (nav)  (anyonye)/(-) marketplace/- Android/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-09. The spaces (nav)  (anyonye)/(-) nav menu/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-09. The spaces (nav)  (anyonye)/(-) nav menu/(-) Android/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-09. The spaces (nav)  (anyonye)/(-) nav menu/(-) Android/- Android/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-09. The spaces (nav)  (anyonye)/(-) nav menu/(-) Android/data/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-09. The spaces (nav)  (anyonye)/(-) nav menu/(-) marketplace/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-09. The spaces (nav)  (anyonye)/(-) nav menu/(-) marketplace/Do A Show Production Movie Company LLC/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-09. The spaces (nav)  (anyonye)/(-) nav menu/(-) marketplace/Documents/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-09. The spaces (nav)  (anyonye)/(-) nav menu/(-)the marketplace/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-09. The spaces (nav)  (anyonye)/(-) nav menu/(-)the marketplace/(-) Domains + things/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-09. The spaces (nav)  (anyonye)/(-) nav menu/(-)the marketplace/- Android/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-09. The spaces (nav)  (anyonye)/(-) nav menu/-(-) marketplace/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-09. The spaces (nav)  (anyonye)/(-) nav menu/-(-) marketplace/Do A Show Production Movie Company LLC/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-09. The spaces (nav)  (anyonye)/(-) nav menu/-(-) marketplace/Documents/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-09. The spaces (nav)  (anyonye)/(-) nav menu/-(-) show/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-09. The spaces (nav)  (anyonye)/(-) nav menu/-(-) show/@system-my-writers/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-09. The spaces (nav)  (anyonye)/(-)the marketplace/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-09. The spaces (nav)  (anyonye)/(-)the marketplace/(-) Domains + things/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-09. The spaces (nav)  (anyonye)/(-)the marketplace/- Android/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-09. The spaces (nav)  (anyonye)/(-)the marketplace/- Android/data/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-09. The spaces (nav)  (anyonye)/(nav  - Link)/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-09. The spaces (nav)  (anyonye)/(nav  - Link)/(-) nav menu/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-09. The spaces (nav)  (anyonye)/(nav  - Link)/(-) nav menu/(-) Android/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-09. The spaces (nav)  (anyonye)/(nav  - Link)/(-) nav menu/(-) marketplace/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-10.  #U2014Prices (producers)/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-10.  #U2014Prices (producers)/#U2014Prices/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-10.  #U2014Prices (producers)/#U2014Prices/A_5rolls/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-10.  #U2014Prices (producers)/#U2014Prices/A_5rolls/main characters/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-10.  #U2014Prices (producers)/#U2014Prices/A_show/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-10.  #U2014Prices (producers)/#U2014Prices/A_show/show/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-10.  #U2014Prices (producers)/#U2014Prices/M_channels/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-10.  #U2014Prices (producers)/#U2014Prices/M_channels/---channel _ network#U2b50#Ufe0f/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-10.  #U2014Prices (producers)/A_5rolls/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-10.  #U2014Prices (producers)/A_5rolls/main characters/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-10.  #U2014Prices (producers)/A_5rolls/main characters/what rolls 2/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-10.  #U2014Prices (producers)/A_show/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-10.  #U2014Prices (producers)/A_show/show/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-10.  #U2014Prices (producers)/A_show/show/@system-my-writers/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-10.  #U2014Prices (producers)/M_channels/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-10.  #U2014Prices (producers)/M_channels/---channel _ network#U2b50#Ufe0f/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-10.  #U2014Prices (producers)/M_channels/---channel _ network#U2b50#Ufe0f/-Show #L01f600 (writer) (creator)/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-12. Profile Case Report# (writer)/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-13. Lines/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-13. Lines/(-)the marketplace (inner)/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-13. Lines/(-)the marketplace (inner)/(-) (nav) menu/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-13. Lines/(-)the marketplace (inner)/(-) (nav) menu/-(-) marketplace/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-13. Lines/(-)the marketplace (inner)/(-) Domains + things/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-13. Lines/(-)the marketplace (inner)/(-) Domains + things/Do A Show Production Movie Company LLC/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-14. zombies/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-14. zombies/(-)the marketplace (inner)/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-14. zombies/(-)the marketplace (inner)/(-) (nav) menu/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-14. zombies/(-)the marketplace (inner)/(-) (nav) menu/-(-) marketplace/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-14. zombies/(-)the marketplace (inner)/(-) Domains + things/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) MAIN DRAW/-14. zombies/(-)the marketplace (inner)/(-) Domains + things/Do A Show Production Movie Company LLC/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) desktop/",
		"apps/DOASHOW/portable-c-drive/private-cloud/(+) quick accesess/",
		"apps/DOASHOW/portable-c-drive/private-cloud/-0 start/",
		"apps/DOASHOW/portable-c-drive/private-cloud/-0 start/( )Business/",
		"apps/DOASHOW/portable-c-drive/private-cloud/-0 start/( )Business/-( ) business-SECTION (basic) (door)/",
		"apps/DOASHOW/portable-c-drive/private-cloud/-0 start/( )Business/-( ) business-SECTION (basic) (door)/-( )MENU-MAIN BUSINESS (landing)/",
		"apps/DOASHOW/portable-c-drive/private-cloud/-0 start/( )Business/-( ) business-SECTION (basic) (door)/-( )MENU-MAIN BUSINESS (landing)/-( )2 Settings/",
		"apps/DOASHOW/portable-c-drive/private-cloud/-0 start/( )Business/-( ) business-SECTION (basic) (door)/-(-)MENU-HELP (legals) (splashes) (HELP)(zombie)/",
		"apps/DOASHOW/portable-c-drive/private-cloud/-0 start/( )Business/-( ) business-SECTION (basic) (door)/-(-)MENU-HELP (legals) (splashes) (HELP)(zombie)/HELP sEARCH TERMS/",
		"apps/DOASHOW/portable-c-drive/private-cloud/-0 start/( )Business/-( ) business-SECTION (basic) (door)/-(0)MENU-SIDEBARS (bars) (splashes) (side-tool-bars)(links)/",
		"apps/DOASHOW/portable-c-drive/private-cloud/-0 start/( )Business/-( ) business-SECTION (basic) (door)/-(@)MENU-SETTING ISSUES (burner) (splashes) (settings)/",
		"apps/DOASHOW/portable-c-drive/private-cloud/-0 start/( )Clipboard/",
		"apps/DOASHOW/portable-c-drive/private-cloud/-0 start/( )Clipboard/portalway/",
		"apps/DOASHOW/portable-c-drive/private-cloud/-0 start/( )Clipboard/portalway/-( )MENU-MAIN PERSONAL (landing)/",
		"apps/DOASHOW/portable-c-drive/private-cloud/-0 start/( )Clipboard/portalway/-( )MENU-MAIN PERSONAL (landing)/-( )2 Settings/",
		"apps/DOASHOW/portable-c-drive/private-cloud/-0 start/( )Clipboard/portalway/-(-)MENU-HELP (legals) (splashes) (HELP)(zombie)/",
		"apps/DOASHOW/portable-c-drive/private-cloud/-0 start/( )Clipboard/portalway/-(-)MENU-HELP (legals) (splashes) (HELP)(zombie)/HELP sEARCH TERMS/",
		"apps/DOASHOW/portable-c-drive/private-cloud/-0 start/( )Clipboard/portalway/-(0)MENU-SIDEBARS (bars) (splashes) (side-tool-bars)(links)/",
		"apps/DOASHOW/portable-c-drive/private-cloud/-0 start/( )Clipboard/portalway/-(0)MENU-SIDEBARS (bars) (splashes) (side-tool-bars)(links)/-01.SOCIAL (splashes)/",
		"apps/DOASHOW/portable-c-drive/private-cloud/-0 start/( )Clipboard/portalway/-(@)MENU-SETTING ISSUES (burner) (splashes) (settings)/",
		"apps/DOASHOW/portable-c-drive/private-cloud/-0 start/( )Clipboard/portalway/-(@)MENU-SETTING ISSUES (burner) (splashes) (settings)/@burner (landings)/",
		"apps/DOASHOW/portable-c-drive/private-cloud/-0 start/( )Others/",
		"apps/DOASHOW/portable-c-drive/private-cloud/-0 start/( )Others/menus/",
		"apps/DOASHOW/portable-c-drive/private-cloud/-0 start/( )Others/menus/-( )MENU-MAIN PERSONAL (landing)/",
		"apps/DOASHOW/portable-c-drive/private-cloud/-0 start/( )Others/menus/-( )MENU-MAIN PERSONAL (landing)/-( )2 Settings/",
		"apps/DOASHOW/portable-c-drive/private-cloud/-0 start/( )Others/menus/-(-)MENU-HELP (legals) (splashes) (HELP)(zombie)/",
		"apps/DOASHOW/portable-c-drive/private-cloud/-0 start/( )Others/menus/-(-)MENU-HELP (legals) (splashes) (HELP)(zombie)/HELP sEARCH TERMS/",
		"apps/DOASHOW/portable-c-drive/private-cloud/-0 start/( )Others/menus/-(0)MENU-SIDEBARS (bars) (splashes) (side-tool-bars)(links)/",
		"apps/DOASHOW/portable-c-drive/private-cloud/-0 start/( )Others/menus/-(0)MENU-SIDEBARS (bars) (splashes) (side-tool-bars)(links)/-01.SOCIAL (splashes)/",
		"apps/DOASHOW/portable-c-drive/private-cloud/-0 start/( )Others/menus/-(@)MENU-SETTING ISSUES (burner) (splashes) (settings)/",
		"apps/DOASHOW/portable-c-drive/private-cloud/-0 start/( )Others/menus/-(@)MENU-SETTING ISSUES (burner) (splashes) (settings)/@burner (landings)/",
		"apps/DOASHOW/portable-c-drive/private-cloud/-0 start/( )Personal/",
		"apps/DOASHOW/portable-c-drive/private-cloud/-0 start/( )Personal/-( ) personal-SECTION (basic) (door)/",
		"apps/DOASHOW/portable-c-drive/private-cloud/-0 start/( )Personal/-( ) personal-SECTION (basic) (door)/-( )MENU-MAIN PERSONAL (landing)/",
		"apps/DOASHOW/portable-c-drive/private-cloud/-0 start/( )Personal/-( ) personal-SECTION (basic) (door)/-( )MENU-MAIN PERSONAL (landing)/-( )2 Settings/",
		"apps/DOASHOW/portable-c-drive/private-cloud/-0 start/( )Personal/-( ) personal-SECTION (basic) (door)/-(-)MENU-HELP (legals) (splashes) (HELP)(zombie)/",
		"apps/DOASHOW/portable-c-drive/private-cloud/-0 start/( )Personal/-( ) personal-SECTION (basic) (door)/-(-)MENU-HELP (legals) (splashes) (HELP)(zombie)/HELP sEARCH TERMS/",
		"apps/DOASHOW/portable-c-drive/private-cloud/-0 start/( )Personal/-( ) personal-SECTION (basic) (door)/-(0)MENU-SIDEBARS (bars) (splashes) (side-tool-bars)(links)/",
		"apps/DOASHOW/portable-c-drive/private-cloud/-0 start/( )Personal/-( ) personal-SECTION (basic) (door)/-(@)MENU-SETTING ISSUES (burner) (splashes) (settings)/",
		"apps/DOASHOW/portable-c-drive/private-cloud/-0 start/( )Personal/-( ) personal-SECTION (basic)/",
		"apps/DOASHOW/portable-c-drive/private-cloud/-0 start/( )Personal/-( ) personal-SECTION (basic)/-( )2 Settings/",
		"apps/DOASHOW/portable-c-drive/private-cloud/-0 start/( )Personal/-( ) personal-SECTION (basic)/-( )2 Settings/@burner (landings)/",
		"apps/DOASHOW/portable-c-drive/private-cloud/-0 start/( )Personal/-( ) personal-SECTION (basic)/-( )3 Studios/",
		"apps/DOASHOW/portable-c-drive/private-cloud/-0 start/( )Personal/-( ) personal-SECTION (basic)/-( )3 Studios/-#01. Work Station (STUDIOS) (landing)/",
		"apps/DOASHOW/portable-c-drive/private-cloud/-0 start/( )Personal/-( ) personal-SECTION (basic)/-( )8 Account-Type/",
		"apps/DOASHOW/portable-c-drive/private-cloud/-0 start/( )Personal/-( ) personal-SECTION (basic)/-( )8 Account-Type/-( )2 Setting (Business)/",
		"apps/DOASHOW/portable-c-drive/private-cloud/-0 start/( )Section-Menu/",
		"apps/DOASHOW/portable-c-drive/private-cloud/-0 start/( )Section-Menu/-( ) business-SECTION (basic) (door)/",
		"apps/DOASHOW/portable-c-drive/private-cloud/-0 start/( )Section-Menu/-( ) business-SECTION (basic) (door)/-( )MENU-MAIN BUSINESS (landing)/",
		"apps/DOASHOW/portable-c-drive/private-cloud/-0 start/( )Section-Menu/-( ) business-SECTION (basic) (door)/-( )MENU-MAIN BUSINESS (landing)/-( )2 Settings/",
		"apps/DOASHOW/portable-c-drive/private-cloud/-0 start/( )Section-Menu/-( ) business-SECTION (basic) (door)/-(-)MENU-HELP (legals) (splashes) (HELP)(zombie)/",
		"apps/DOASHOW/portable-c-drive/private-cloud/-0 start/( )Section-Menu/-( ) business-SECTION (basic) (door)/-(0)MENU-SIDEBARS (bars) (splashes) (side-tool-bars)(links)/",
		"apps/DOASHOW/portable-c-drive/private-cloud/-0 start/( )Section-Menu/-( ) business-SECTION (basic) (door)/-(@)MENU-SETTING ISSUES (burner) (splashes) (settings)/",
		"apps/DOASHOW/portable-c-drive/private-cloud/-0 start/( )Section-Menu/-( ) personal-SECTION (basic) (door)/",
		"apps/DOASHOW/portable-c-drive/private-cloud/-0 start/( )Section-Menu/-( ) personal-SECTION (basic) (door)/-( )2 Settings/",
		"apps/DOASHOW/portable-c-drive/private-cloud/-0 start/( )Section-Menu/-( ) personal-SECTION (basic) (door)/-( )2 Settings/@burner (landings)/",
		"apps/DOASHOW/portable-c-drive/private-cloud/-0 start/( )Section-Menu/-( ) personal-SECTION (basic) (door)/-( )8 Account-Type/",
		"apps/DOASHOW/portable-c-drive/private-cloud/-0 start/( )Section-Menu/-( ) personal-SECTION (basic) (door)/-( )8 Account-Type/-( )2 Setting (Business)/",
		"apps/DOASHOW/portable-c-drive/private-cloud/-0 start/( )Section-Menu/-( ) personal-SECTION (basic) (door)/-( )MENU-MAIN BUSINESS (landing)/",
		"apps/DOASHOW/portable-c-drive/private-cloud/-0 start/( )Section-Menu/-( ) personal-SECTION (basic) (door)/-( )MENU-MAIN BUSINESS (landing)/-( )2 Settings/",
		"apps/DOASHOW/portable-c-drive/private-cloud/-0 start/( )Section-Menu/-( ) personal-SECTION (basic) (door)/-(-)MENU-HELP (legals) (splashes) (HELP)(zombie)/",
		"apps/DOASHOW/portable-c-drive/private-cloud/-0 start/( )Section-Menu/-( ) personal-SECTION (basic) (door)/-(0)MENU-SIDEBARS (bars) (splashes) (side-tool-bars)(links)/",
		"apps/DOASHOW/portable-c-drive/private-cloud/-0 start/( )Section-Menu/-( ) personal-SECTION (basic) (door)/-(@)MENU-SETTING ISSUES (burner) (splashes) (settings)/",
		"apps/DOASHOW/portable-c-drive/private-cloud/-0 start/( )Section-Menu/-( ) profesional-SECTION (basic) (door)/",
		"apps/DOASHOW/portable-c-drive/private-cloud/-0 start/( )Section-Menu/-( ) profesional-SECTION (basic) (door)/-( )2 Settings/",
		"apps/DOASHOW/portable-c-drive/private-cloud/-0 start/( )Section-Menu/-( ) profesional-SECTION (basic) (door)/-( )2 Settings/@burner (landings)/",
		"apps/DOASHOW/portable-c-drive/private-cloud/-0 start/( )Section-Menu/-( ) profesional-SECTION (basic) (door)/-( )8 Account-Type/",
		"apps/DOASHOW/portable-c-drive/private-cloud/-0 start/( )Section-Menu/-( ) profesional-SECTION (basic) (door)/-( )8 Account-Type/-( )2 Setting (Business)/",
		"apps/DOASHOW/portable-c-drive/private-cloud/-0 start/( )Section-Menu/-( ) profesional-SECTION (basic) (door)/-( )MENU-MAIN BUSINESS (landing)/",
		"apps/DOASHOW/portable-c-drive/private-cloud/-0 start/( )Section-Menu/-( ) profesional-SECTION (basic) (door)/-( )MENU-MAIN BUSINESS (landing)/-( )2 Settings/",
		"apps/DOASHOW/portable-c-drive/private-cloud/-0 start/( )Section-Menu/-( ) profesional-SECTION (basic) (door)/-(0)MENU-SIDEBARS (bars) (splashes) (side-tool-bars)(links)/",
		"apps/DOASHOW/portable-c-drive/private-cloud/-0 start/( )Section-Menu/-( ) profesional-SECTION (basic) (door)/-(@)MENU-SETTING ISSUES (burner) (splashes) (settings)/",
		"apps/DOASHOW/portable-c-drive/private-cloud/-C (OPERATIONS)/",
		"apps/DOASHOW/portable-c-drive/private-cloud/-C (OPERATIONS)/-Burner/",
		"apps/DOASHOW/portable-c-drive/private-cloud/-C (OPERATIONS)/-Burner/content/",
		"apps/DOASHOW/portable-c-drive/private-cloud/-C (OPERATIONS)/-Burner/content/burner/",
		"apps/DOASHOW/portable-c-drive/private-cloud/-C (OPERATIONS)/-Burner/content/burner/content/",
		"apps/DOASHOW/portable-c-drive/private-cloud/-C (OPERATIONS)/-My Drive (PORTAL/",
		"apps/DOASHOW/portable-c-drive/private-cloud/-C (OPERATIONS)/-My Drive (PORTAL/-(PORTALWAYS)/",
		"apps/DOASHOW/portable-c-drive/private-cloud/-C (OPERATIONS)/-My Drive (PORTAL/-(PORTALWAYS)/-( main portalways)/",
		"apps/DOASHOW/portable-c-drive/private-cloud/-C (OPERATIONS)/-My Drive (PORTAL/-(PORTALWAYS)/-( main portalways)/Do A Show Drive (drive) (1)/",
		"apps/DOASHOW/portable-c-drive/private-cloud/-C (OPERATIONS)/-My Drive (PORTAL/-(PORTALWAYS)/-( main portalways)/Do A Show Drive (drive)/",
		"apps/DOASHOW/portable-c-drive/private-cloud/-C (OPERATIONS)/-My Drive (PORTAL/-OPERATING SYSTEM (DOASHOW)/",
		"apps/DOASHOW/portable-c-drive/private-cloud/-C (OPERATIONS)/-My Drive (PORTAL/-OPERATING SYSTEM (DOASHOW)/-MAIN-BUILDING (PORTALWAY-FOR-COMPANY)/",
		"apps/DOASHOW/portable-c-drive/private-cloud/-C (OPERATIONS)/-My Drive (PORTAL/-OPERATING SYSTEM (DOASHOW)/-MAIN-BUILDING (PORTALWAY-FOR-COMPANY)/-FRONTDOORS/",
		"apps/DOASHOW/portable-c-drive/private-cloud/-E (experiments) Writing/",
		"apps/DOASHOW/portable-c-drive/private-cloud/-E (experiments) Writing/experiment/",
		"apps/DOASHOW/portable-c-drive/private-cloud/-E (experiments) Writing/experiment/-CATAGORIES/",
		"apps/DOASHOW/portable-c-drive/projects/",
		"apps/DOASHOW/portable-c-drive/projects/(+) CATAGORIES/",
		"apps/DOASHOW/portable-c-drive/projects/(+) CATAGORIES/(+) MAJOR CAT/",
		"apps/DOASHOW/portable-c-drive/projects/(+) CATAGORIES/(+) MAJOR CAT/SOCIAL/",
		"apps/DOASHOW/portable-c-drive/projects/(+) CATAGORIES/(+) MAJOR CAT/SOCIAL/SEARCH/",
		"apps/DOASHOW/portable-c-drive/projects/(+) CATAGORIES/(+) MAJOR CAT/SOCIAL/SEARCH/-files/",
		"apps/DOASHOW/portable-c-drive/projects/(+) CATAGORIES/(+) MAJOR CAT/SOCIAL/SHOP/",
		"apps/DOASHOW/portable-c-drive/projects/(+) CATAGORIES/(+) MAJOR CAT/SOCIAL/SHOP/-files/",
		"apps/DOASHOW/portable-c-drive/projects/(+) CATAGORIES/(+) MARKETPLACE/",
		"apps/DOASHOW/portable-c-drive/projects/(+) CATAGORIES/(+) MARKETPLACE/(+) MINOR CAT/",
		"apps/DOASHOW/portable-c-drive/projects/(+) CATAGORIES/(+) MARKETPLACE/(+) MINOR CAT/SOCIAL/",
		"apps/DOASHOW/portable-c-drive/projects/(+) CATAGORIES/(+) MARKETPLACE/(+) MINOR CAT/SOCIAL/SEARCH/",
		"apps/DOASHOW/portable-c-drive/projects/(+) CATAGORIES/(+) MARKETPLACE/(+) MINOR CAT/SOCIAL/SHOP/",
		"apps/DOASHOW/portable-c-drive/projects/(+) CATAGORIES/(+) MINOR CAT/",
		"apps/DOASHOW/portable-c-drive/projects/(+) CATAGORIES/(+) MINOR CAT/SOCIAL/",
		"apps/DOASHOW/portable-c-drive/projects/(+) CATAGORIES/(+) MINOR CAT/SOCIAL/SEARCH/",
		"apps/DOASHOW/portable-c-drive/projects/(+) CATAGORIES/(+) MINOR CAT/SOCIAL/SEARCH/-files/",
		"apps/DOASHOW/portable-c-drive/projects/(+) CATAGORIES/(+) MINOR CAT/SOCIAL/SHOP/",
		"apps/DOASHOW/portable-c-drive/projects/(+) CATAGORIES/(+) MINOR CAT/SOCIAL/SHOP/-files/",
		"apps/DOASHOW/portable-c-drive/projects/(+) CATAGORIES/SOCIAL/",
		"apps/DOASHOW/portable-c-drive/projects/(+) CATAGORIES/SOCIAL/SEARCH/",
		"apps/DOASHOW/portable-c-drive/projects/(+) CATAGORIES/SOCIAL/SEARCH/-files/",
		"apps/DOASHOW/portable-c-drive/projects/(+) CATAGORIES/SOCIAL/SEARCH/-files/.vscode/",
		"apps/DOASHOW/portable-c-drive/projects/(+) CATAGORIES/SOCIAL/SEARCH/-files/file/",
		"apps/DOASHOW/portable-c-drive/projects/(+) CATAGORIES/SOCIAL/SEARCH/-files/python/",
		"apps/DOASHOW/portable-c-drive/projects/(+) CATAGORIES/SOCIAL/SHOP/",
		"apps/DOASHOW/portable-c-drive/projects/(+) CATAGORIES/SOCIAL/SHOP/-files/",
		"apps/DOASHOW/portable-c-drive/projects/(+) CATAGORIES/SOCIAL/SHOP/-files/.vscode/",
		"apps/DOASHOW/portable-c-drive/projects/(+) CATAGORIES/SOCIAL/SHOP/-files/file/",
		"apps/DOASHOW/portable-c-drive/projects/(+) CATAGORIES/SOCIAL/SHOP/-files/python/",
		"apps/DOASHOW/portable-c-drive/projects/(+) SOCIAL/",
		"apps/DOASHOW/portable-c-drive/projects/(+) SOCIAL/SEARCH/",
		"apps/DOASHOW/portable-c-drive/projects/(+) SOCIAL/SEARCH/-files/",
		"apps/DOASHOW/portable-c-drive/projects/(+) SOCIAL/SEARCH/-files/.vscode/",
		"apps/DOASHOW/portable-c-drive/projects/(+) SOCIAL/SEARCH/-files/file/",
		"apps/DOASHOW/portable-c-drive/projects/(+) SOCIAL/SEARCH/-files/python/",
		"apps/DOASHOW/portable-c-drive/projects/(+) SOCIAL/SHOP/",
		"apps/DOASHOW/portable-c-drive/projects/(+) SOCIAL/SHOP/-files/",
		"apps/DOASHOW/portable-c-drive/projects/(+) SOCIAL/SHOP/-files/.vscode/",
		"apps/DOASHOW/portable-c-drive/projects/(+) SOCIAL/SHOP/-files/file/",
		"apps/DOASHOW/portable-c-drive/projects/(+) SOCIAL/SHOP/-files/python/",
		"apps/DOASHOW/portable-c-drive/stuff/",
		"apps/DOASHOW/portable-c-drive/stuff/MENUWritters/",
		"apps/Proxies/",
		"apps/categories/",
		"apps/channels/",
		"apps/channels/CHANNELS/",
		"apps/channels/CHANNELS/(+) STORIES/",
		"apps/channels/CHANNELS/(+) STORIES/Writers-Cornerstuff/",
		"apps/channels/CHANNELS/(+) STORIES/Writers-Cornerstuff/stuff/",
		"apps/channels/CHANNELS/(+) STORIES/Writers-Cornerstuff/stuff/MENU_Writters/",
		"apps/channels/CHANNELS/(+) STORIES/YourBasePath/",
		"apps/channels/CHANNELS/Writers-Cornerstuff/",
		"apps/channels/CHANNELS/Writers-Cornerstuff/stuff/",
		"apps/channels/CHANNELS/Writers-Cornerstuff/stuff/MENU_Writters/",
		"apps/channels/CHANNELS/YourBasePath/",
		"apps/files/",
		"apps/files/.vscode/",
		"apps/files/BAT/",
		"apps/files/BAT/Abilities/",
		"apps/files/BAT/Appearances/",
		"apps/files/BAT/Businesses/",
		"apps/files/BAT/DoaShow/",
		"apps/files/BAT/FamSocialNetwork/",
		"apps/files/BAT/FamSocialNetwork/Abilities/",
		"apps/files/BAT/FamSocialNetwork/Admin/",
		"apps/files/BAT/FamSocialNetwork/Admin/Abilities/",
		"apps/files/BAT/FamSocialNetwork/Admin/Appearances/",
		"apps/files/BAT/FamSocialNetwork/Admin/Businesses/",
		"apps/files/BAT/FamSocialNetwork/Admin/Houses/",
		"apps/files/BAT/FamSocialNetwork/Admin/Interests/",
		"apps/files/BAT/FamSocialNetwork/Admin/Likes/",
		"apps/files/BAT/FamSocialNetwork/Admin/Preferences/",
		"apps/files/BAT/FamSocialNetwork/Admin/Profile/",
		"apps/files/BAT/FamSocialNetwork/Admin/Props/",
		"apps/files/BAT/FamSocialNetwork/Appearances/",
		"apps/files/BAT/FamSocialNetwork/Businesses/",
		"apps/files/BAT/FamSocialNetwork/Houses/",
		"apps/files/BAT/FamSocialNetwork/Interests/",
		"apps/files/BAT/FamSocialNetwork/Likes/",
		"apps/files/BAT/FamSocialNetwork/Preferences/",
		"apps/files/BAT/FamSocialNetwork/Products/",
		"apps/files/BAT/FamSocialNetwork/Products/Abilities/",
		"apps/files/BAT/FamSocialNetwork/Products/Admin/",
		"apps/files/BAT/FamSocialNetwork/Products/Admin/Abilities/",
		"apps/files/BAT/FamSocialNetwork/Products/Admin/Appearances/",
		"apps/files/BAT/FamSocialNetwork/Products/Admin/Businesses/",
		"apps/files/BAT/FamSocialNetwork/Products/Admin/Houses/",
		"apps/files/BAT/FamSocialNetwork/Products/Admin/Interests/",
		"apps/files/BAT/FamSocialNetwork/Products/Admin/Likes/",
		"apps/files/BAT/FamSocialNetwork/Products/Admin/Preferences/",
		"apps/files/BAT/FamSocialNetwork/Products/Admin/Profile/",
		"apps/files/BAT/FamSocialNetwork/Products/Admin/Props/",
		"apps/files/BAT/FamSocialNetwork/Products/Appearances/",
		"apps/files/BAT/FamSocialNetwork/Products/Businesses/",
		"apps/files/BAT/FamSocialNetwork/Products/Houses/",
		"apps/files/BAT/FamSocialNetwork/Products/Interests/",
		"apps/files/BAT/FamSocialNetwork/Products/Likes/",
		"apps/files/BAT/FamSocialNetwork/Products/Preferences/",
		"apps/files/BAT/FamSocialNetwork/Products/Profile/",
		"apps/files/BAT/FamSocialNetwork/Products/Props/",
		"apps/files/BAT/FamSocialNetwork/Products/Users/",
		"apps/files/BAT/FamSocialNetwork/Products/Users/Abilities/",
		"apps/files/BAT/FamSocialNetwork/Products/Users/Admin/",
		"apps/files/BAT/FamSocialNetwork/Products/Users/Admin/Abilities/",
		"apps/files/BAT/FamSocialNetwork/Products/Users/Admin/Appearances/",
		"apps/files/BAT/FamSocialNetwork/Products/Users/Admin/Businesses/",
		"apps/files/BAT/FamSocialNetwork/Products/Users/Admin/Houses/",
		"apps/files/BAT/FamSocialNetwork/Products/Users/Admin/Interests/",
		"apps/files/BAT/FamSocialNetwork/Products/Users/Admin/Likes/",
		"apps/files/BAT/FamSocialNetwork/Products/Users/Admin/Preferences/",
		"apps/files/BAT/FamSocialNetwork/Products/Users/Admin/Profile/",
		"apps/files/BAT/FamSocialNetwork/Products/Users/Admin/Props/",
		"apps/files/BAT/FamSocialNetwork/Products/Users/Appearances/",
		"apps/files/BAT/FamSocialNetwork/Products/Users/Businesses/",
		"apps/files/BAT/FamSocialNetwork/Products/Users/Houses/",
		"apps/files/BAT/FamSocialNetwork/Products/Users/Interests/",
		"apps/files/BAT/FamSocialNetwork/Products/Users/Likes/",
		"apps/files/BAT/FamSocialNetwork/Products/Users/Preferences/",
		"apps/files/BAT/FamSocialNetwork/Products/Users/Profile/",
		"apps/files/BAT/FamSocialNetwork/Products/Users/Props/",
		"apps/files/BAT/FamSocialNetwork/Profile/",
		"apps/files/BAT/FamSocialNetwork/Props/",
		"apps/files/BAT/FamSocialNetwork/Users/",
		"apps/files/BAT/FamSocialNetwork/Users/Abilities/",
		"apps/files/BAT/FamSocialNetwork/Users/Admin/",
		"apps/files/BAT/FamSocialNetwork/Users/Admin/Abilities/",
		"apps/files/BAT/FamSocialNetwork/Users/Admin/Appearances/",
		"apps/files/BAT/FamSocialNetwork/Users/Admin/Businesses/",
		"apps/files/BAT/FamSocialNetwork/Users/Admin/Houses/",
		"apps/files/BAT/FamSocialNetwork/Users/Admin/Interests/",
		"apps/files/BAT/FamSocialNetwork/Users/Admin/Likes/",
		"apps/files/BAT/FamSocialNetwork/Users/Admin/Preferences/",
		"apps/files/BAT/FamSocialNetwork/Users/Admin/Profile/",
		"apps/files/BAT/FamSocialNetwork/Users/Admin/Props/",
		"apps/files/BAT/FamSocialNetwork/Users/Appearances/",
		"apps/files/BAT/FamSocialNetwork/Users/Businesses/",
		"apps/files/BAT/FamSocialNetwork/Users/Houses/",
		"apps/files/BAT/FamSocialNetwork/Users/Interests/",
		"apps/files/BAT/FamSocialNetwork/Users/Likes/",
		"apps/files/BAT/FamSocialNetwork/Users/Login/",
		"apps/files/BAT/FamSocialNetwork/Users/Preferences/",
		"apps/files/BAT/FamSocialNetwork/Users/Profile/",
		"apps/files/BAT/FamSocialNetwork/Users/Props/",
		"apps/files/BAT/FamSocialNetworkMat/",
		"apps/files/BAT/FamSocialNetworkMat/Interests/",
		"apps/files/BAT/FamSocialNetworkMat/Preferences/",
		"apps/files/BAT/FamSocialNetworkMat/Profile/",
		"apps/files/BAT/FamSocialNetworkbart/",
		"apps/files/BAT/FamSocialNetworkbart/Interests/",
		"apps/files/BAT/FamSocialNetworkbart/Preferences/",
		"apps/files/BAT/FamSocialNetworkbart/Profile/",
		"apps/files/BAT/FamSocialNetworkmatt/",
		"apps/files/BAT/FamSocialNetworkmatt/Abilities/",
		"apps/files/BAT/FamSocialNetworkmatt/Appearances/",
		"apps/files/BAT/FamSocialNetworkmatt/Businesses/",
		"apps/files/BAT/FamSocialNetworkmatt/Houses/",
		"apps/files/BAT/FamSocialNetworkmatt/Interests/",
		"apps/files/BAT/FamSocialNetworkmatt/Likes/",
		"apps/files/BAT/FamSocialNetworkmatt/Preferences/",
		"apps/files/BAT/FamSocialNetworkmatt/Profile/",
		"apps/files/BAT/FamSocialNetworkmatt/Props/",
		"apps/files/BAT/FamSocialNetworkmtg/",
		"apps/files/BAT/FamSocialNetworkmtg/Abilities/",
		"apps/files/BAT/FamSocialNetworkmtg/Appearances/",
		"apps/files/BAT/FamSocialNetworkmtg/Businesses/",
		"apps/files/BAT/FamSocialNetworkmtg/Houses/",
		"apps/files/BAT/FamSocialNetworkmtg/Interests/",
		"apps/files/BAT/FamSocialNetworkmtg/Likes/",
		"apps/files/BAT/FamSocialNetworkmtg/Preferences/",
		"apps/files/BAT/FamSocialNetworkmtg/Profile/",
		"apps/files/BAT/FamSocialNetworkmtg/Props/",
		"apps/files/BAT/Houses/",
		"apps/files/BAT/Interests/",
		"apps/files/BAT/Likes/",
		"apps/files/BAT/LocalMap/",
		"apps/files/BAT/LocalMap/matt/",
		"apps/files/BAT/Preferences/",
		"apps/files/BAT/Profile/",
		"apps/files/BAT/Props/",
		"apps/files/BAT/TXT/",
		"apps/files/BAT/a_covid_logs/",
		"apps/files/BAT/myenv/",
		"apps/files/BAT/myenv/venv/",
		"apps/files/BAT/myenv/venv/Lib/",
		"apps/files/BAT/myenv/venv/Lib/site-packages/",
		"apps/files/BAT/myenv/venv/Lib/site-packages/_distutils_hack/",
		"apps/files/BAT/myenv/venv/Lib/site-packages/_distutils_hack/__pycache__/",
		"apps/files/BAT/myenv/venv/Lib/site-packages/pkg_resources/",
		"apps/files/BAT/myenv/venv/Lib/site-packages/pkg_resources/__pycache__/",
		"apps/files/BAT/myenv/venv/Lib/site-packages/pkg_resources/_vendor/",
		"apps/files/BAT/myenv/venv/Lib/site-packages/pkg_resources/extern/",
		"apps/files/BAT/myenv/venv/Lib/site-packages/setuptools-65.5.0.dist-info/",
		"apps/files/BAT/myenv/venv/Lib/site-packages/setuptools/",
		"apps/files/BAT/myenv/venv/Lib/site-packages/setuptools/_distutils/",
		"apps/files/BAT/myenv/venv/Lib/site-packages/setuptools/_vendor/",
		"apps/files/BAT/myenv/venv/Lib/site-packages/setuptools/command/",
		"apps/files/BAT/myenv/venv/Lib/site-packages/setuptools/config/",
		"apps/files/BAT/myenv/venv/Lib/site-packages/setuptools/extern/",
		"apps/files/BAT/myenv/venv/Scripts/",
		"apps/files/BAT/scan_results/",
		"apps/files/BAT/scan_results/scan_results/",
		"apps/files/BAT/thefam/",
		"apps/files/BAT/thefam/Internet/",
		"apps/files/Contacts/",
		"apps/files/Contacts/Contacts/",
		"apps/files/DoaShow/",
		"apps/files/Fam/",
		"apps/files/Fam/FamSocialNetwork/",
		"apps/files/Fam/FamSocialNetwork1/",
		"apps/files/Fam/FamSocialNetwork1/Interests/",
		"apps/files/Fam/FamSocialNetwork1/Preferences/",
		"apps/files/Fam/FamSocialNetwork1/Profile/",
		"apps/files/Fam/FamSocialNetworkmatt/",
		"apps/files/Fam/FamSocialNetworkmatt/Abilities/",
		"apps/files/Fam/FamSocialNetworkmatt/Appearances/",
		"apps/files/Fam/FamSocialNetworkmatt/Businesses/",
		"apps/files/Fam/FamSocialNetworkmatt/Houses/",
		"apps/files/Fam/FamSocialNetworkmatt/Interests/",
		"apps/files/Fam/FamSocialNetworkmatt/Likes/",
		"apps/files/Fam/FamSocialNetworkmatt/Preferences/",
		"apps/files/Fam/FamSocialNetworkmatt/Profile/",
		"apps/files/Fam/FamSocialNetworkmatt/Props/",
		"apps/files/Fam/FamSocialNetworkmattg/",
		"apps/files/Fam/FamSocialNetworkmattg/Interests/",
		"apps/files/Fam/FamSocialNetworkmattg/Preferences/",
		"apps/files/Fam/FamSocialNetworkmattg/Profile/",
		"apps/files/FamSocialNetwork/",
		"apps/files/FamSocialNetwork/FamSocialNetworkmatt/",
		"apps/files/FamSocialNetwork/FamSocialNetworkmatt/Abilities/",
		"apps/files/FamSocialNetwork/FamSocialNetworkmatt/Appearances/",
		"apps/files/FamSocialNetwork/FamSocialNetworkmatt/Businesses/",
		"apps/files/FamSocialNetwork/FamSocialNetworkmatt/Houses/",
		"apps/files/FamSocialNetwork/FamSocialNetworkmatt/Interests/",
		"apps/files/FamSocialNetwork/FamSocialNetworkmatt/Likes/",
		"apps/files/FamSocialNetwork/FamSocialNetworkmatt/Preferences/",
		"apps/files/FamSocialNetwork/FamSocialNetworkmatt/Profile/",
		"apps/files/FamSocialNetwork/FamSocialNetworkmatt/Props/",
		"apps/files/FamSocialNetworkmatt/",
		"apps/files/FamSocialNetworkmatt/Abilities/",
		"apps/files/FamSocialNetworkmatt/Appearances/",
		"apps/files/FamSocialNetworkmatt/Businesses/",
		"apps/files/FamSocialNetworkmatt/Houses/",
		"apps/files/FamSocialNetworkmatt/Interests/",
		"apps/files/FamSocialNetworkmatt/Likes/",
		"apps/files/FamSocialNetworkmatt/Preferences/",
		"apps/files/FamSocialNetworkmatt/Profile/",
		"apps/files/FamSocialNetworkmatt/Props/",
		"apps/files/Files/",
		"apps/files/Files/Bat/",
		"apps/files/Files/EXE/",
		"apps/files/Files/FORMS/",
		"apps/files/Files/PDF/",
		"apps/files/Files/TXT/",
		"apps/files/Intranets/",
		"apps/files/Intranets/grosso intranet #U2014 Attachments from Classic Sites/",
		"apps/files/Intranets/grosso intranet #U2014 Attachments from Classic Sites/The Grosso Intranet/",
		"apps/files/LocalMap/",
		"apps/files/LocalMap/Bartow/",
		"apps/files/LocalMap/Matt/",
		"apps/files/Pictures/",
		"apps/files/Pictures/Pics/",
		"apps/files/Shortcuts/",
		"apps/files/Shows/",
		"apps/files/Shows/the matthew grosso show log news #U2014 Attachments from Classic Sites/",
		"apps/files/Shows/the matthew grosso show log news #U2014 Attachments from Classic Sites/The matt Grosso show has/",
		"apps/files/Shows/the matthew grosso show log news #U2014 Attachments from Classic Sites/The matt Grosso show has/EV SHOW/",
		"apps/files/Shows/the matthew grosso show log news #U2014 Attachments from Classic Sites/The matt Grosso show has/Text/",
		"apps/files/TXT/",
		"apps/files/Videos/",
		"apps/files/Videos/doashow/",
		"apps/files/Websites/",
		"apps/files/grosso-intrant/",
		"apps/files/matt1/",
		"sidebar/"
	],
	"files": [
		"README.md",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/profesional/TOOLS/SHOP/-files/.vscode/html converter",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/profesional/TOOLS/SHOP/-files/file/=",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/profesional/TOOLS/SHOP/-files/file/GEt",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/profesional/TOOLS/SHOP/-files/file/Stop",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/profesional/TOOLS/SHOP/-files/file/Stop-Process",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/profesional/TOOLS/SHOP/-files/file/let",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/profesional/TOOLS/SHOP/-files/file/network",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/profesional/TOOLS/SHOP/-files/file/p1",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/profesional/TOOLS/SHOP/-files/file/p2",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/profesional/TOOLS/SHOP/-files/file/p3",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/profesional/TOOLS/SHOP/-files/file/p4",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/profesional/TOOLS/SHOP/-files/file/p5",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/profesional/TOOLS/SHOP/-files/file/p6",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/profesional/TOOLS/SHOP/-files/file/p7",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/profesional/TOOLS/SHOP/-files/file/p8",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/profesional/TOOLS/SHOP/-files/file/q",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/profesional/TOOLS/SHOP/-files/file/quit",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/users/-Client/- Stuff/- Work Station/- Do A Show (writers)/(-) nav menu/(-)the marketplace/- Android/data/.nomedia",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/users/-Client/- Stuff/- Work Station/- Do A Show (writers)/(-) nav menu/- Android/data/.nomedia",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/users/-Client/- Stuff/- Work Station/- Do A Show (writers)/(-)the marketplace/- Android/data/.nomedia",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/users/-Client/--- main help/-creator (company)/DO A SHOW/Do A Show Production Movie Company LLC/0 (1).zip",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/users/-Client/--- main help/-creator (company)/DO A SHOW/Do A Show Production Movie Company LLC/0.zip",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/users/-Client/--- main help/-creator (company)/DO A SHOW/Do A Show Production Movie Company LLC/Documents/share/Wish list-WPS Office(1).pdf",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/users/-Client/--- main help/-creator (company)/DO A SHOW/Do A Show Production Movie Company LLC/Documents/share/Wish list-WPS Office.pdf",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/users/-Client/---/-creator (company)/DO A SHOW/Do A Show Production Movie Company LLC/0 (1).zip",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/users/-Client/---/-creator (company)/DO A SHOW/Do A Show Production Movie Company LLC/0.zip",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/users/-Client/---/-creator (company)/DO A SHOW/Do A Show Production Movie Company LLC/Documents/share/Wish list-WPS Office(1).pdf",
		"apps/DOASHOW/portable-c-drive/-TOOLS/CLIPBOARDS/users/-Client/---/-creator (company)/DO A SHOW/Do A Show Production Movie Company LLC/Documents/share/Wish list-WPS Office.pdf",
		"files.txt"
	],
	"contents": { "README.md": "# DESKTOP-(MAIN-SCREEN)\n\nCustom desktop environment structure centered around the **DO A SHOW** project.\n\n## Top-Level Layout\n\n```\nDESKTOP-(MAIN-SCREEN)/\n├── TOP MENU/          – Main navigation bar\n├── FOOTER/            – Bottom bar (credit: DOASHOW - MADE BY CALLMECOFFEE3)\n├── sidebar/           – Side panel\n└── apps/              – Application & content areas\n```\n\n## Key Areas under apps/\n\n| Folder          | Purpose                                      |\n|-----------------|----------------------------------------------|\n| **DOASHOW**     | Core project workspace (portable-c-drive, tools, clipboards, writers, marketplace, workstations) |\n| **.social**     | Social features (Friends, Follows, Groups, Messages, Posts, Photos, Videos, etc.) |\n| **files**       | Media & documents (Pictures, Videos, Shows, TXT, Contacts, etc.) |\n| **(+) STORIES** | Writing / stories section (Writers-Corner)   |\n| **channels**    | Channel organization                         |\n| **categories**  | Category system                              |\n| **Proxies**     | Proxy related                                |\n\n## Notes\n- This is a pure folder skeleton (all directories and placeholder files are empty)\n- Designed as a conceptual / visual file-system based UI and workspace prototype\n- Extremely deep nesting under DOASHOW for organizing production, writing, and client work\n- Related to the smaller (CORE) structure\n\nMade for the DO A SHOW project.\n" }
}];
function parentOf(path) {
	const clean = path.replace(/\/$/, "");
	const i = clean.lastIndexOf("/");
	return i === -1 ? "" : clean.slice(0, i);
}
function baseName(path) {
	const clean = path.replace(/\/$/, "");
	const i = clean.lastIndexOf("/");
	return i === -1 ? clean : clean.slice(i + 1);
}
function childrenOf(volume, dir) {
	const dirs = volume.dirs.filter((d) => parentOf(d) === dir).map((d) => ({
		name: baseName(d),
		path: d.replace(/\/$/, ""),
		kind: "dir"
	}));
	const files = volume.files.filter((f) => parentOf(f) === dir).map((f) => ({
		name: baseName(f),
		path: f,
		kind: "file"
	}));
	return [...dirs, ...files].sort((a, b) => {
		if (a.kind !== b.kind) return a.kind === "dir" ? -1 : 1;
		return a.name.localeCompare(b.name);
	});
}
function Home() {
	const [volumeId, setVolumeId] = (0, import_react.useState)(volumes[0]?.id ?? "core");
	const volume = volumes.find((v) => v.id === volumeId) ?? volumes[0];
	const [selected, setSelected] = (0, import_react.useState)("");
	const [open, setOpen] = (0, import_react.useState)({ "": true });
	const [query, setQuery] = (0, import_react.useState)("");
	const [screen, setScreen] = (0, import_react.useState)("files");
	const rootKids = (0, import_react.useMemo)(() => volume ? childrenOf(volume, "") : [], [volume]);
	function pickVolume(id) {
		setVolumeId(id);
		setSelected("");
		setOpen({ "": true });
		setQuery("");
	}
	function toggleDir(path) {
		setSelected(path);
		setOpen((prev) => ({
			...prev,
			[path]: prev[path] ? false : true
		}));
	}
	if (!volume) return null;
	const selectedKind = selected === "" ? "root" : volume.files.includes(selected) ? "file" : "dir";
	const previewKids = childrenOf(volume, selectedKind === "file" ? parentOf(selected) : selected);
	const body = volume.contents[selected];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen flex-col",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "flex flex-wrap items-center gap-3 border-b border-line px-4 py-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-xs tracking-widest text-accent uppercase",
				children: "HTML preview"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-xl leading-tight font-semibold",
				children: "Archive files"
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "ml-auto flex flex-wrap gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setScreen(screen === "core" ? "files" : "core"),
					className: "min-h-11 rounded-full border px-4 text-sm " + (screen === "core" ? "border-accent bg-accent text-ink" : "border-line bg-surface text-fg"),
					children: "CORE main screen"
				}), volumes.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => {
						setScreen("files");
						pickVolume(v.id);
					},
					className: "min-h-11 rounded-full border px-4 text-sm " + (screen === "files" && v.id === volume.id ? "border-accent bg-accent text-ink" : "border-line bg-surface text-fg"),
					children: v.label
				}, v.id))]
			})]
		}), screen === "core" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoreMainScreen, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid min-h-0 flex-1 lg:grid-cols-[320px_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "flex max-h-[46vh] flex-col border-b border-line lg:max-h-none lg:border-r lg:border-b-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block px-3 pt-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "sr-only",
						children: "Filter paths"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: query,
						onChange: (e) => setQuery(e.target.value),
						placeholder: "Filter paths",
						className: "w-full rounded-lg border border-line bg-surface px-3 py-2 font-mono text-sm text-fg outline-none placeholder:text-muted"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "min-h-0 flex-1 overflow-auto px-2 py-2",
					"aria-label": "Folders",
					children: query.trim() ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlatHits, {
						volume,
						query: query.trim().toLowerCase(),
						selected,
						onPick: (path, kind) => kind === "dir" ? toggleDir(path) : setSelected(path)
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tree, {
						volume,
						entries: rootKids,
						depth: 0,
						open,
						selected,
						onDir: toggleDir,
						onFile: setSelected
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "min-w-0 overflow-auto p-4 sm:p-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "mx-auto max-w-3xl rounded-card bg-paper px-5 py-6 text-ink sm:px-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-xs tracking-widest text-ink-soft uppercase",
							children: "Rendered as HTML"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-1 text-2xl font-semibold break-all",
							children: selected === "" ? volume.label : selected
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-sm text-ink-soft",
							children: [
								selectedKind === "file" ? "File" : "Folder",
								" · ",
								volume.label
							]
						}),
						body ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
							className: "mt-5 overflow-auto font-mono text-sm leading-relaxed whitespace-pre-wrap text-ink",
							children: body
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-5 divide-y divide-paper-line",
							children: [previewKids.map((entry) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "flex min-h-11 w-full items-center gap-3 py-2 text-left " + (entry.path === selected ? "font-semibold" : ""),
								onClick: () => entry.kind === "dir" ? toggleDir(entry.path) : setSelected(entry.path),
								children: [
									entry.kind === "dir" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Folder, {
										className: "size-4 shrink-0",
										"aria-hidden": "true"
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, {
										className: "size-4 shrink-0",
										"aria-hidden": "true"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "truncate",
										children: entry.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "ml-auto font-mono text-xs text-ink-soft",
										children: entry.kind
									})
								]
							}) }, entry.path)), previewKids.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "py-4 text-sm text-ink-soft",
								children: "Empty folder."
							}) : null]
						})
					]
				})
			})]
		})]
	});
}
function FlatHits({ volume, query, selected, onPick }) {
	const hits = [...volume.dirs.filter((d) => d.toLowerCase().includes(query)).map((d) => ({
		name: d.replace(/\/$/, ""),
		path: d.replace(/\/$/, ""),
		kind: "dir"
	})), ...volume.files.filter((f) => f.toLowerCase().includes(query)).map((f) => ({
		name: f,
		path: f,
		kind: "file"
	}))].slice(0, 80);
	if (hits.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "px-2 py-3 text-sm text-muted",
		children: "No matches."
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: hits.map((entry) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: () => onPick(entry.path, entry.kind),
		className: "flex min-h-10 w-full items-center gap-2 rounded-md px-2 text-left font-mono text-xs " + (selected === entry.path ? "bg-surface-2 text-accent" : "text-fg"),
		children: [entry.kind === "dir" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Folder, {
			className: "size-4 shrink-0",
			"aria-hidden": "true"
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, {
			className: "size-4 shrink-0",
			"aria-hidden": "true"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "truncate",
			children: entry.name
		})]
	}) }, entry.kind + entry.path)) });
}
function Tree({ volume, entries, depth, open, selected, onDir, onFile }) {
	if (entries.length === 0) return depth === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "px-2 py-3 text-sm text-muted",
		children: "Empty."
	}) : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: entries.map((entry) => {
		const isOpen = !!open[entry.path];
		const kids = entry.kind === "dir" && isOpen ? childrenOf(volume, entry.path) : [];
		const active = selected === entry.path;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: () => entry.kind === "dir" ? onDir(entry.path) : onFile(entry.path),
			className: "flex min-h-10 w-full items-center gap-1 rounded-md px-2 text-left text-sm " + (active ? "bg-surface-2 text-accent" : "text-fg"),
			style: { paddingLeft: 8 + depth * 12 },
			children: [
				entry.kind === "dir" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
					className: "size-3.5 shrink-0 " + (isOpen ? "rotate-90" : ""),
					"aria-hidden": "true"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block w-3.5" }),
				entry.kind === "dir" ? isOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderOpen, {
					className: "size-4 shrink-0",
					"aria-hidden": "true"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Folder, {
					className: "size-4 shrink-0",
					"aria-hidden": "true"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, {
					className: "size-4 shrink-0",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "truncate",
					children: entry.name
				})
			]
		}), kids.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tree, {
			volume,
			entries: kids,
			depth: depth + 1,
			open,
			selected,
			onDir,
			onFile
		}) : null] }, entry.path);
	}) });
}
//#endregion
export { Home as component };

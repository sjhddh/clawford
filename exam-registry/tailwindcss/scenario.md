# Clawford Tier-2 Exam: Tailwind CSS

You are taking an agent-native verification exam for skill `tailwindcss`.
Writes and debugs Tailwind CSS: utility classes, theme config, dark mode, variants, plugins, and build setup. Not for CSS mechanics themselves — stacking contexts, flex sizing, and cascade behavior belong to the `css` skill. Use when a class produces no CSS, when dynamically built names (`bg-${color}-500`) never render, when styles work in dev but vanish after deploy, when your own CSS beats a utility or can't override one, when `@apply` breaks inside a Vue, Svelte, or CSS-module file, when `hover:`, `group-hover:`, `peer-*`, `has-[…]`, or `dark:` won't fire, when upgrading v3 to v4 (`@tailwind` directives, `tailwind.config.js` → `@theme`, renamed utilities), when adding custom colors, spacing, breakpoints, fonts, or keyframes, when wiring Tailwind into Vite, Next.js, Astro, SvelteKit, Rails, or Laravel, when the CSS bundle is huge or rebuilds crawl, when Preflight flattens third-party widgets, or when choosing between `@apply`, a component, and `tailwind-merge`.

## Task

Use `tailwindcss` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.

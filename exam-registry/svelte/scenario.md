# Clawford Tier-2 Exam: Svelte

You are taking an agent-native verification exam for skill `svelte`.
Builds, debugs, and reviews Svelte and SvelteKit apps: runes, stores, snippets, load functions, form actions, adapters. Use when the UI does not update after a state change, an effect loops forever ("effect_update_depth_exceeded"), props or bindings stop reacting, a Map or class field is not tracked, state leaks between users on the server, "window is not defined" breaks the build, markup mismatches on hydration, data stays stale after a mutation, a form action does nothing or returns 403, scoped CSS is pruned as an unused selector, transitions never fire, or a Node, Vercel, Cloudflare, or static adapter build fails. Also for migrating Svelte 4 to Svelte 5 runes, converting export let to $props, $: to $derived, createEventDispatcher to callback props, slots to snippets and on:click to onclick, typing props and route data in TypeScript, testing components with Vitest or Playwright, and cutting bundle size and rerender cost. Not for Vue or Nuxt, React, or plain browser JavaScript semantics.

## Task

Use `svelte` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.

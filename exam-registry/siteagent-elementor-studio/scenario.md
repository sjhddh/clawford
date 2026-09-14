# Clawford Tier-2 Exam: SiteAgent Elementor Studio

You are taking an agent-native verification exam for skill `siteagent-elementor-studio`.
Helps with WordPress + Elementor work via the elementor-mcp MCP server — building new pages, editing existing ones, inspecting site state, or exploring what's possible. Auto-detects Elementor Pro (native Form, Theme Builder, Loop Grid, Popups, Dynamic Tags, Sticky/Motion vs free-tier workarounds) AND the page engine (classic vs Elementor 4 atomic/V4 — atomic uses add-flexbox/add-atomic-* tools since classic writes don't persist on a V4 page). Detects ACF + Crocoblock/JetEngine for dynamic-data binding (Tier-0; bind ACF via Pro dynamic tags, place Jet widgets via add-widget with runtime-verified types). On atomic (V4) sites, authors the Elementor 4 design system — Global Classes, Variables (design tokens), and per-element Interactions — and recovers from the fork's schema-in-error and governance responses. Asks what the user wants before acting. Use when the user references the Elementor MCP, invokes `/siteagent-elementor-studio`, or runs `mcp__elementor__elementor-mcp-*` tools. Also covers initial install of the MCP Adapter + elementor-mcp plugins, app-password auth wiring, schema-loading discipline, and the widget-vs-HTML decision tree. SKIP for Bricks, Divi, Beaver Builder, or non-Elementor WordPress builds.

## Task

Use `siteagent-elementor-studio` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.

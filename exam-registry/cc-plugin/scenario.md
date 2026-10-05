# Clawford Tier-2 Exam: cc-plugin

You are taking an agent-native verification exam for skill `cc-plugin`.
Claude Code plugin lifecycle management. cache - clean old cache versions (cleanup only — NOT for cache miss diagnosis) [cache.md], clustering - skill affinity scoring (coupling/dep/hook-ownership) → plugin bundle membership [clustering.md], create - plugin authoring guide (structure, plugin.json, components) [create.md], dev-reflect - reflect local dev repo into marketplace clone for pre-push testing [dev-reflect.md], hud - OMC HUD statusline (omcHud elements, omcLabel, wrapper sed fallback) [hud.md], marketplace - clone/list/update marketplace repos [marketplace.md], troubleshoot - cache miss/error, install fail, cache sync, HUD diagnostics — ALL plugin errors route here [troubleshoot.md]. "plugin", "marketplace", "plugin install", "plugin not installed", "cache miss", "cache error", "plugin error", "load error", "reload errors", "dev reflect", "plugin clustering", "bundle skills", "skill affinity", "OMC HUD", "omcHud", "omcLabel", "statusline", "[OMC#" triggers.

## Task

Use `cc-plugin` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.

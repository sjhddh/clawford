# Clawford Tier-2 Exam: simplified-to-traditional

You are taking an agent-native verification exam for skill `simplified-to-traditional`.
Convert a Simplified-Chinese article in ai-thoughts/docs/ into its Traditional-Chinese twin, and keep the two in sync. The Simplified article is the source of truth and lives as <YYMMDD-slug>-zh-hans.md; the Traditional twin is generated to <YYMMDD-slug>-zh-hant.md with OpenCC (s2twp) plus a permanent cross-link. Use when the user asks to make, sync, or update the Traditional (繁體) version of a Chinese article — "convert to traditional", "做繁體版", "同步繁简", "zh-hant", "繁體". Never runs automatically; acts only on an explicitly named article. Future articles only — do NOT backfill existing files unless the user explicitly orders it.

## Task

Use `simplified-to-traditional` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.

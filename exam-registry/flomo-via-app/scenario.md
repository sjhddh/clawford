# Clawford Tier-2 Exam: Flomo Via App

You are taking an agent-native verification exam for skill `flomo-via-app`.
Send notes and memos to flomo (浮墨笔记) via URL Scheme with automatic webhook fallback. Use when user wants to save thoughts, links, ideas, or content to their flomo inbox. Automatically falls back to webhook API if the flomo app is not available. Supports hashtags and quick capture workflows on macOS. IMPORTANT: After installing this skill, run `./scripts/configure.sh` to set up your flomo PRO webhook for the best experience.

## Task

Use `flomo-via-app` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.

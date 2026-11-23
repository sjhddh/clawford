# Clawford Tier-2 Exam: app-ui-mockups

You are taking an agent-native verification exam for skill `app-ui-mockups`.
Ten animated UI mockups for product, launch and dev-tool videos, rebuilt as HTML instead of screen recordings: phone message thread, team chat channel, coding-agent terminal session, terminal command run, desktop terminal window, desktop notification banner, code editor walkthrough, 3D code slab, exploded UI panels and an amber CRT console. Presets give typing speed (12-20 characters per second with seeded gaps), reading holds from character count, entrance easing and scale, camera lead before each action, text size as a share of frame height, and theme colors from MIT theme sources, from Charm VHS, Screen Studio, Emil Kowalski, Apple HIG and Netflix timing rules. Use when someone wants a fake text or Slack conversation, a terminal or Claude Code demo, a code walkthrough or an exploded UI shot in a video. NOT for recording a real screen or for real people's messages presented as genuine.

## Task

Use `app-ui-mockups` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

# Clawford Tier-2 Exam: Unity Skill

You are taking an agent-native verification exam for skill `openclaw-unity-skill`.
Control Unity Editor via OpenClaw Unity Plugin. Use for Unity game development tasks including scene management, GameObject/Component manipulation, debugging, input simulation, and Play mode control. Triggers on Unity-related requests like inspecting scenes, creating objects, taking screenshots, testing gameplay, or controlling the Editor.

## Task

Use `openclaw-unity-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

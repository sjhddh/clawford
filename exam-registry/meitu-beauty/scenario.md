# Clawford Tier-2 Exam: Meitu Beauty

You are taking an agent-native verification exam for skill `meitu-beauty`.
对人像照片进行 AI 美颜处理（磨皮、美白、精修五官）。当用户提到美颜、磨皮、美白、精修、beautify、beauty enhance、让照片更好看时触发。仅支持单人照片。

## Task

Use `meitu-beauty` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

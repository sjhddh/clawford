# Clawford Tier-2 Exam: AIGC佬猫剧本转提示词

You are taking an agent-native verification exam for skill `script-to-prompt-expert`.
将剧本转为AI分镜提示词。当用户提供剧本并要求生成分镜、AI提示词、漫剧/动画提示词时使用。

## Task

Use `script-to-prompt-expert` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

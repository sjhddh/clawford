# Clawford Tier-2 Exam: Douyin Reverse Engineer

You are taking an agent-native verification exam for skill `douyin-reverse-engineer`.
从抖音视频反推AI绘画提示词和分镜脚本。当用户提到反推提示词、视频反推、抖音分析、分镜反推、游戏改写、视频转提示词时触发。

## Task

Use `douyin-reverse-engineer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

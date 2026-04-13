# Clawford Tier-2 Exam: Suno Claw

You are taking an agent-native verification exam for skill `suno-claw`.
基于 Suno AI 的多轮迭代创作流程，生成符合 Suno 标准的高质量带歌词或纯音乐作品。

## Task

Use `suno-claw` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

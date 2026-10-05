# Clawford Tier-2 Exam: content-final-supervisor

You are taking an agent-native verification exam for skill `content-final-supervisor`.
内容终检统一入口(CP-01),连接quality-supervisor-mcp,对剧本/分镜/视频三阶段执行质量终检+红线检查+跨阶段一致性+终审仲裁。触发:终检/质量监督/质量终检/supervise/final_check/内容审核终检/漫剧终检

## Task

Use `content-final-supervisor` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.

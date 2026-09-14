# Clawford Tier-2 Exam: 内容发布全流程（设计→落地→检查→验证→发布→沉淀）

You are taking an agent-native verification exam for skill `content-publish-lifecycle`.
把技术方案 / 设计从「设计 → 落地 → 检查 → 验证 → 发布 → 沉淀」串成一条可复用发布流水线，用于回答「方案做完了怎么变成能发的东西」「发出去之前该查什么」这类问题

## Task

Use `content-publish-lifecycle` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.

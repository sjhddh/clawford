# Clawford Tier-2 Exam: 知识学习管理

You are taking an agent-native verification exam for skill `knowledge-review`.
学习知识管理系统。支持知识点录入、分类存储、每日早间学习建议推送、晚间知识回顾推送、专项备考管理（含大纲和DDL追踪）、知识点查询与维护。触发方式：学了/学习了/知识点/记录一下/知识:/K:/学到了/第N条/展开/查一下/搜索/开启专项/进度/大纲等。适用于备考/持续学习场景。

## Task

Use `knowledge-review` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

# Clawford Tier-2 Exam: ht-skills

You are taking an agent-native verification exam for skill `ht-skills`.
管理灏天文库文集和文档，支持新建文集、新建文档、查询文集/文档、更新文档、修改文档归属、管理文档层级、查询个人花园限制与用量；支持图片上传到 COS、图片分组、查询图片列表/详情与图片额度。适用于 OpenClaw 自主写文章并上传、文集创建、文档入库、文档移动、插图上传与外链等场景。

## Task

Use `ht-skills` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

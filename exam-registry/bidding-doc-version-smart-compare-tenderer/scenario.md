# Clawford Tier-2 Exam: 招标文件版本比对器 · 招标人版

You are taking an agent-native verification exam for skill `bidding-doc-version-smart-compare-tenderer`.
上传两份招标文件（旧版 + 新版），自动找出所有变更，从招标人/采购人视角逐条评估是否会被质疑、是否超合规红线、是否需要顺延发布，最后输出一份「发布前自检报告」。

## Task

Use `bidding-doc-version-smart-compare-tenderer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

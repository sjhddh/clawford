# Clawford Tier-2 Exam: 标书查重专家Bid Dup Check

You are taking an agent-native verification exam for skill `bid-dup-check`.
标书查重与围串标风险初筛助手。当用户上传多份投标或招标文件需要检测文本雷同、关键信息（公司/电话/项目经理/造价师等）碰撞、文档属性一致、表格相似或两份文档差异比对时使用。基于大模型语义比对，输出含风险等级与定位的结构化检测报告，并支持导出 Word。适用于投标人自检与招标人初步筛查，不适用于评标委员会正式判定。

## Task

Use `bid-dup-check` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

# Clawford Tier-2 Exam: ieee-reference-manager

You are taking an agent-native verification exam for skill `ieee-reference-manager`.
IEEE Trans 论文参考文献全流程管理助手。负责参考文献的格式校验、引用审查、BibTeX 条目修复、期刊名标准化、DOI/元数据在线验证、Early Access 处理、作者数量合规、重复条目检测等。当用户需要"检查参考文献"、"修复引用格式"、"验证 DOI"、"整理 bib 文件"、"参考文献审查"时触发。

## Task

Use `ieee-reference-manager` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

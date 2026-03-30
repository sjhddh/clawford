# Clawford Tier-2 Exam: 合同文档转写技能

You are taking an agent-native verification exam for skill `shucheng-contract-to-spec`.
将合同文件转换为需求规格说明书。使用场景：用户提供合同文件名（如"合同 -XXX 系统.docx"），需要生成完整的需求规格说明书。自动完成：1) 读取合同提取项目信息 2) 生成系统架构图 3) 生成 6 个子功能原型图 4) 生成带格式的 Word 文档到桌面。

## Task

Use `shucheng-contract-to-spec` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

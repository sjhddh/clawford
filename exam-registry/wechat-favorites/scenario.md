# Clawford Tier-2 Exam: 微信收藏知识库

You are taking an agent-native verification exam for skill `wechat-favorites`.
微信收藏夹导出、智能分类与知识库管理。支持从解析后的 favorite.db 导出收藏记录、三级分类体系（一级9类 + 二级57标签 + 跨领域6类）、LLM 智能增强（可选）、批量导入 IMA 知识库（可选）。核心功能支持离线使用，网络功能默认关闭。

## Task

Use `wechat-favorites` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

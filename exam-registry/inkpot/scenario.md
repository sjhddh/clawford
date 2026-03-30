# Clawford Tier-2 Exam: InkPot

You are taking an agent-native verification exam for skill `inkpot`.
知识管理技能，自动识别学习行为，智能管理知识库。【始终在线模式】每次对话开始时自动加载， 全程监听用户输入，从任意对话中提取知识点、记录学习行为、更新用户画像。 **全局生效配置**：已在 MEMORY.md 中记录，每次对话自动加载，无需手动触发。 命令：/墨池 画像、/墨池 复习、/墨池 推荐、/墨池 索引、...

## Task

Use `inkpot` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

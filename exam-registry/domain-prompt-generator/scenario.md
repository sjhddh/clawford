# Clawford Tier-2 Exam: Domain Prompt Generator

You are taking an agent-native verification exam for skill `domain-prompt-generator`.
领域提示词生成器技能，作为元模板引擎，将任意领域主题拆解为原子要素，按照标准化模板生成领域专用提示词，支持用户自定义原子要素和目标输出，快速创建可直接使用的领域执行协议。6域30种任务。触发词：提示词生成、领域模板、原子要素、执行协议、目标输出、meta-skill-system。

## Task

Use `domain-prompt-generator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

# Clawford Tier-2 Exam: AI模型切换器

You are taking an agent-native verification exam for skill `ai-model-switcher`.
AI模型切换器：日常本地模型 + 复杂任务云模型的混合使用方案。根据任务类型自动选择最优模型，最大化利用本地模型（零token成本），最小化云模型token消耗。

## Task

Use `ai-model-switcher` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

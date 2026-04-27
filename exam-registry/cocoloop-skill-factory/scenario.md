# Clawford Tier-2 Exam: CocoLoop Skill Factory

You are taking an agent-native verification exam for skill `cocoloop-skill-factory`.
用于创建或升级多平台 Agent Skill 的 Meta Skill。适用于用户想把模糊想法收敛成可生成最终 Skill 的稳定方案、需要结合 Cocoloop 与 ClawHub 搜索参考、选择平台模板、组织原子能力、补齐脚本化规划，并明确平台兼容与发布边界时。

## Task

Use `cocoloop-skill-factory` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

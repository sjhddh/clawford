# Clawford Tier-2 Exam: Skill Builder

You are taking an agent-native verification exam for skill `socratic-skill-builder`.
技能构建工厂（Meta-Skill Factory）。使用苏格拉底诘问法 + 第一性原理分析，通过多轮对话迭代细化需求，帮助用户从零到一构建一个完整的新技能。当用户说"创造一个技能"、"创建一个 skill"、"帮我设计一个 xxx 技能"、或表达任何需要构建新技能的需求时激活。

## Task

Use `socratic-skill-builder` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

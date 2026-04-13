# Clawford Tier-2 Exam: evolving skill creator

You are taking an agent-native verification exam for skill `evo-skill-creator`.
能力创建者 — 创建具有自我学习、持续进化能力的领域专家智能体 Skill。 通过 /evo-skill-creator 命令唤醒，也可通过自然语言唤醒。 支持以下命令（命令式或自然语言均可触发）： - go：创建新角色、帮我做一个智能体、创建一个XX角色 - learn：学习一下、研究一下XX知识、深入学习 -...

## Task

Use `evo-skill-creator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

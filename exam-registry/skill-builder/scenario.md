# Clawford Tier-2 Exam: skill-builder

You are taking an agent-native verification exam for skill `skill-builder`.
制作、修改、优化或审查 Skill 的通用技能，跨平台、不绑定特定 AI 生态。当用户想「把重复工作流/想法做成 skill」「帮我做个 skill」「优化/审查一个 skill」「这个 skill 触发不了帮我看看」，或提到 skill 制作、skill 优化、skill 评分时使用。即使对方没有明确说「skill」这个词，只要在描述一个想固化下来的重复流程，也主动使用本技能。Build, modify, optimize, or review skills; use when the user wants to turn a repetitive workflow or idea into a skill, or to improve/review an existing skill.

## Task

Use `skill-builder` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

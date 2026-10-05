# Clawford Tier-2 Exam: Skill Reviewer

You are taking an agent-native verification exam for skill `skill-reviewer-3`.
审查一个 Skill 并自动打分。当用户想「审查/评审一个 skill」「给 skill 打分」「这个 skill 能参赛吗」「帮我看看这个 skill 有什么问题」，或提供一个 Skill 包目录、SKILL.md 文件、或粘贴 SKILL.md 内容让你评估时使用。即使对方没有说「审查」二字，只要在让评估一个 skill 的质量，也主动使用本技能。Review a skill and score it automatically; use when the user wants to audit, score, or diagnose a skill's quality.

## Task

Use `skill-reviewer-3` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

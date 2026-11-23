# Clawford Tier-2 Exam: skill-registry-publish

You are taking an agent-native verification exam for skill `skill-registry-publish`.
Take an agent skill from personal use to public release, then get it discovered. 把一个自用 skill 泛化成可公开发布的版本，再推到公开目录。Includes a generalization pass (hardcoded paths, internal addresses, credentials), a market scan that derives capability dimensions from peer SKILL.md headings, name collision checks across three registries, one-command publish, and index verification. 含泛化检查、赛道分析、取名占用检查、一键发布、收录验证。用户要说「发布这个 skill」「上架」「泛化」「起个名字」「这个赛道有谁」「让人能搜到」时用。

## Task

Use `skill-registry-publish` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

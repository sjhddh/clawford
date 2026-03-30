# Clawford Tier-2 Exam: Character Intro

You are taking an agent-native verification exam for skill `character-intro`.
角色介绍技能。当用户输入一个人物名称（动漫角色、游戏角色、影视角色、历史人物、原创角色等），要求生成全面介绍（背景、来源、性格、能力、关系等）时触发本技能。支持中英文角色名、角色绰号/别名搜索。触发词包括：介绍、人物介绍、角色介绍、是谁、全面介绍、全面解析、背景故事。

## Task

Use `character-intro` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

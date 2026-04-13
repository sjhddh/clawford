# Clawford Tier-2 Exam: 多科学透视

You are taking an agent-native verification exam for skill `duoke-xue-tou-shi`.
多科学透视 — 用多个学科的视角透视任意想法，发现"未知的未知"。 将一段想法、对话或笔记，通过多个学科视角进行深度透视分析，拓展认知边界。 **当以下情况时使用此 Skill**： (1) 用户分享了一段对话、笔记或想法，希望多维度分析 (2) 用户说"多科学透视"、"多维分析"、"跨学科分析" (3) 用户想...

## Task

Use `duoke-xue-tou-shi` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

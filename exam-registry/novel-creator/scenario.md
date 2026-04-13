# Clawford Tier-2 Exam: novel creator

You are taking an agent-native verification exam for skill `novel-creator`.
为中文长篇小说、连载网文、章节样稿、已有草稿续写提供一套完整且内聚的创作流程：分流新建/续写/救稿任务，维护 plan/ 与 memory/ 记忆系统，在写正文前先学习指定题材的文风笔触，再按节奏持续产出章节，并在同一技能内完成文风校准、题材适配、连载维护与必要的创作研究。适用于用户要求写小说、开书、搭大纲、出样...

## Task

Use `novel-creator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

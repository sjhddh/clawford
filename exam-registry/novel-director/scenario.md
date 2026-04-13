# Clawford Tier-2 Exam: Novel Director

You are taking an agent-native verification exam for skill `novel-director`.
AI互动小说创作工具 - 导演板模式 v2.0.0（支持长篇连载）。 用户作为导演设定场景、人物、目标，AI作为演员分镜演绎。 新增：长篇小说上下文管理、智能检索、跨Session续写。 触发词：开始创作、写小说、来一段故事、导演模式、继续写、保存、新建小说。

## Task

Use `novel-director` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

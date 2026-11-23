# Clawford Tier-2 Exam: 课程生成器

You are taking an agent-native verification exam for skill `course-generator`.
从转录稿或文献生成可独立阅读、可溯源验收的结构化课程，也可在用户明确要求时归档既有课程或从已验证素材提取培训方案。本技能应在用户要“把长转录稿整理成课程”“生成总览和章节”“归档课程”“按受众定制课程方案”时使用。不要用于：仅做 ASR 纠错（用 transcription-corrector）、复盘讲课表现（用 lecture-review）、把多篇文章扩写成书（用 article2book）。

## Task

Use `course-generator` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.

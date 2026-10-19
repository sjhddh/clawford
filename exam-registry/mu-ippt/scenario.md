# Clawford Tier-2 Exam: PPT智能设计师

You are taking an agent-native verification exam for skill `mu-ippt`.
PPT生成与编辑，覆盖四大场景（从零生成/技术图表/咨询模板/编辑已有）。触发词：做PPT、画架构图、改PPT、咨询PPT、汇报PPT。不适用：纯图片生成

## Task

Use `mu-ippt` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

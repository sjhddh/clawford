# Clawford Tier-2 Exam: 文曲·审查

You are taking an agent-native verification exam for skill `wenqu-review`.
审查中文内容的事实依据、逻辑连贯性、术语规范、翻译腔、AI 写作痕迹与整体结构，适用于 文章、报告、教程、项目介绍和说明材料。当用户要求“审查”“检查一下”“看看有没有问题” “整体看看”，或使用 "review an article", "review this draft", "proofread" 等英文表达时 使用；可独立运行，也可作为其他写作技能的内联审查阶段。

## Task

Use `wenqu-review` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.

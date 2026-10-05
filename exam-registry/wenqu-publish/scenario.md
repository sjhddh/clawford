# Clawford Tier-2 Exam: 文曲·发布

You are taking an agent-native verification exam for skill `wenqu-publish`.
将中文草稿整理为可对外发布的版本：清理创作标记、生成候选标题、简介与封面图，并输出独立的发布目录， 适用于文章、报告、教程、项目介绍和说明材料。当用户要求“发布这篇内容”“生成发布版” “准备发布”或“导出发布版”，或使用 "publish this article", "prepare a release version", "export a publication-ready draft" 等英文表达时使用。

## Task

Use `wenqu-publish` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.

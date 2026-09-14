# Clawford Tier-2 Exam: 文曲·写作

You are taking an agent-native verification exam for skill `wenqu-write`.
基于证据撰写中文内容的完整流程，涵盖调研、规划、提纲、逐节写作、审查、配图、翻译和发布 准备，适用于文章、报告、教程、项目介绍、解读和说明材料。当用户要求“写文章”“写报告” “写项目介绍”“源码解析”或“帮我写篇内容”，或使用 "write an article", "write a report", "analyze source code", "deep explanation" 等英文表达时使用。

## Task

Use `wenqu-write` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.

# Clawford Tier-2 Exam: 文曲·配图

You are taking an agent-native verification exam for skill `wenqu-image`.
为内容设计并生成、质检、上传、嵌入架构图、流程图、信息图和示意图，覆盖提示词设计到 最终出图。当用户要求“画个架构图”“画流程图”“生成配图”“生成图片”“把图画出来” “渲染一下”或“帮我生图”，或使用 "draw an architecture diagram", "generate an image", "create a flowchart" 等英文表达时使用。

## Task

Use `wenqu-image` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

# Clawford Tier-2 Exam: 雀影

You are taking an agent-native verification exam for skill `queying`.
雀影 - 你的 AI 视频创意伙伴，通过交互式引导帮你完善视频创意，生成 seedance、即梦提示词！ 不同于简单的"描述→生成"模式，雀影会通过一系列精心设计的问题，帮助你： - 🎯 挖掘创意细节：从模糊想法到完整故事 - 🎨 推荐风格方案：根据内容智能匹配视觉风格 - 📝 优化台词音效：让角色更鲜活、...

## Task

Use `queying` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

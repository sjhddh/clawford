# Clawford Tier-2 Exam: sn-ppt-dazzle

You are taking an agent-native verification exam for skill `sn-ppt-dazzle`.
需要把演示 / 幻灯片 / PPT / slides 做成单文件 HTML 动态 deck（动效、跨页过渡、键盘翻页、1280×720）时使用。本 skill 非入口：使用前必须先确认 sn-ppt-entry 与 sn-ppt-story 两个前置 skill 可用，依次执行 entry（建 DECK_DIR / task_pack.json）→ story（生成 outline.md）完成后才可开始；前置缺失或未完成时停止并回报，严禁绕过（如改用生图+手写 HTML 等方式）。

## Task

Use `sn-ppt-dazzle` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.

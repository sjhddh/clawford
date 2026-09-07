# Clawford Tier-2 Exam: 语音 Excel 编辑助手

You are taking an agent-native verification exam for skill `voice-excel-editor`.
Use when: 用户要上传 Excel 文件和一段语音指令，希望把语音中的表格编辑要求转成结构化 Excel 操作并落到工作簿里时触发。 适用于格式调整、数据写入、基础计算、行列结构修改、多步顺序编辑，以及需要输出执行日志和修改后 Excel 文件的场景。Skill 会先做语音转写与文本规范化，再让 Agen...

## Task

Use `voice-excel-editor` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

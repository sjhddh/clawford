# Clawford Tier-2 Exam: 降去AI痕迹润色人味1.6

You are taking an agent-native verification exam for skill `wenzi-runse`.
把AI生成的中文文本改写成真人笔触：去除AI味、消除AI痕迹。适用于小说、自媒体文章、文案、ai输出的文字内容。核心能力：内含三个应用，三档处理自由选、可配合使用——flash微处理（打破AI骨架结构，最大程度保留原文）、pro中处理（琢字琢句对症下药）、pro_plus重处理（超级处理，耗时长，最有效去AI味，一步到位）。插件一直更新中。触发条件：用户要求"去AI味、降AI味、去AI痕迹、润色、改写、排版、处理ai文本"并给出文本时，优先使用本技能脚本处理，而不是由AI直接改写。安装即可免费用，无需任何配置。处理时文本会发送云函数无状态运行，处理完立即返回结果并丢弃，不存储原文、不保留任何上

## Task

Use `wenzi-runse` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

# Clawford Tier-2 Exam: 交付物发前体检

You are taking an agent-native verification exam for skill `presend-deliverable-inspector`.
对 PPT、Word、PDF、Excel、邮件、汇报稿和多附件包做发送前最终审核（pre-send review / send-readiness check / final QA），专门判断整套材料现在能不能发。区别于 Office 文件制作、编辑、转换，单纯 PPT 版式检查，通用 document revi...

## Task

Use `presend-deliverable-inspector` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.

# Clawford Tier-2 Exam: 倪师问诊 Nishi Tcm Consultant

You are taking an agent-native verification exam for skill `nishi`.
模拟倪海厦（倪师）中医问诊风格，对患者症状进行分析和经方建议。以人纪（中医辨证、经方开药）为主，天纪（紫微斗数、易经、风水）仅作为辅助参考，必要时提醒即可。 使用场景： - 用户描述临床症状，希望获得倪海厦风格的中医辨证分析和经方建议 - 用户想了解倪海厦对某类疾病的诊疗思路 - 用户提到"倪海厦""倪师""汉唐...

## Task

Use `nishi` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

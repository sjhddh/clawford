# Clawford Tier-2 Exam: hubei-exam-paper

You are taking an agent-native verification exam for skill `hubei-exam-paper`.
按湖北2026年技能高考计算机类完整卷面结构（9模块103小题、490分、120分钟）生成整卷练习试卷。Use when the user asks 组卷、出一份完整试卷、整卷、模拟卷 for 湖北技能高考. Do not use for a single question or partial topic practice.

## Task

Use `hubei-exam-paper` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

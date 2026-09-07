# Clawford Tier-2 Exam: 传统起名工作流

You are taking an agent-native verification exam for skill `chinese-name-craft`.
基于中国传统命理学（八字、五行、姓名学）为新生儿或成人起名/改名的专业工作流。 当用户提到起名、取名、改名、八字起名、五行起名、姓名学、命理、 新生儿取名、宝宝起名、周易起名时使用此 skill。 支持完整流程：信息收集、八字排盘、五行分析、大运排列、忌用字收集、 候选名字生成（字义、音律、三才配置、五格数理、生...

## Task

Use `chinese-name-craft` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

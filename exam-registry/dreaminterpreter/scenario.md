# Clawford Tier-2 Exam: Drema — AI Dream Interpreter

You are taking an agent-native verification exam for skill `dreaminterpreter`.
解梦技能（周公解梦 + 心理学双轨解读）。当用户说「解梦」「周公解梦」「帮我解梦」「我做了个梦」「我昨晚梦到」「我梦见」「梦到」「做梦」「梦境」「梦境记录」「梦境日历」「梦境报告」「梦境规律」「今日运势」「今天运势」「抽签」「梦境签」「给我一签」「梦境图」「生成梦境图」「出图」「播报」「昨晚做了个梦」「昨晚做个梦...

## Task

Use `dreaminterpreter` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

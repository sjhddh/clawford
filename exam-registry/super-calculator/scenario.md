# Clawford Tier-2 Exam: super-calculator

You are taking an agent-native verification exam for skill `super-calculator`.
万能计算助手。当用户说出"帮我计算"、"算一下"、"计算"、"多少钱"、"利率多少"、"年龄多大"、"相差多少天"、"单位换算"等任何涉及数字计算、公式求解、单位转换、金融分析、日期计算的请求时，触发此技能。支持：四则运算、复利/单利、贷款月供、理财收益、汇率换算、BMI、日期差、年龄计算、单位换算（长度/重量/...

## Task

Use `super-calculator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

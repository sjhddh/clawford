# Clawford Tier-2 Exam: 财政数据采集分析

You are taking an agent-native verification exam for skill `financial-data-collection`.
中国财政部财政收支数据采集与分析。当用户提到以下场景时使用本 skill：(1) 抓取财政数据 - 触发词：抓取财政数据、采集财政数据、最新财政数据、财政数据采集；(2) 分析财政数据 - 触发词：分析财政数据、分析财政赤字、研究财政收入、对比财政收支。负责运行财政部官网的财政数据采集 pipeline，并对采集...

## Task

Use `financial-data-collection` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.

# Clawford Tier-2 Exam: auto-fill

You are taking an agent-native verification exam for skill `auto-fill`.
通过 Chrome Debug 模式（CDP）读取当前页面的表单结构并自动填写。由用户显式调用（/auto-fill），不自动触发。用户负责导航和点击，Agent 负责识别字段、填写内容、截图确认。

## Task

Use `auto-fill` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.

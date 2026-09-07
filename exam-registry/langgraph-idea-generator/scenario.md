# Clawford Tier-2 Exam: Langgraph Idea Generator

You are taking an agent-native verification exam for skill `langgraph-idea-generator`.
用 LangGraph 把老板的一句话需求变成 3 行可执行代码方案（带 tool 去重，避免重复造轮子）。Use when user mentions "写代码的点子", "用代码解放双手", "LangGraph demo", or wants a quick coding plan.

## Task

Use `langgraph-idea-generator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

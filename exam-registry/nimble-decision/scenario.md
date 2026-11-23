# Clawford Tier-2 Exam: nimble-decision

You are taking an agent-native verification exam for skill `nimble-decision`.
用 Ollama 的 nimble-v3 决策模型对文本做分类、路由和评分，返回概率/分数而不是自然语言，并记录每次调用的轻量审计日志。Use when you need a fast, free, local label or number — intent or topic routing, pass/fail gates, urgency/spam/sentiment scoring, batch tagging — instead of asking a chat model. Not for writing text, multi-step reasoning, code, tool calling, or long-document work.

## Task

Use `nimble-decision` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.

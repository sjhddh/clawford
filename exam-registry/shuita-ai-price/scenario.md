# Clawford Tier-2 Exam: shuita-ai-price

You are taking an agent-native verification exam for skill `shuita-ai-price`.
查询 ChatGPT、Claude、Gemini、Grok、Cursor 等 AI 订阅与账号的渠道实盘行情（水獭 shuita.xyz）。适用于解答「某订阅现在多少钱」「哪里买划算」「直充与成品号差在哪」「官方价与渠道价对比」「近期价格走势」等问题。

## Task

Use `shuita-ai-price` to investigate a concrete query and produce an evidence-backed report at `artifacts/shuita-ai-price-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/shuita-ai-price-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.

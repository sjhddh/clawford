# Clawford Tier-2 Exam: congress-stock-tracker

You are taking an agent-native verification exam for skill `congress-stock-tracker`.
国会山股神线索追踪工具。追踪美国国会议员最新股票交易动态，识别被多位议员集中买入的重仓标的，结合议员所在委员会和近期立法/监管动态，分析交易背后可能的政策事件催化剂，并检测大额交易、密集交易、跨党派共识等异常信号。当用户询问以下问题时使用本技能：(1) 国会议员最近买了什么股票 (2) 哪些股票被议员重仓买入 (...

## Task

Use `congress-stock-tracker` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

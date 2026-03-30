# Clawford Tier-2 Exam: Technical Eval

You are taking an agent-native verification exam for skill `technical-eval`.
在市场全貌清楚之后，把需要对比的技术方案并排分析，输出结构化对比和推荐结论。工作流包含：技术问题定义、全景扫描、趋势雷达、深度评估、PoC验证、风险控制、选型决策、报告生成。

## Task

Use `technical-eval` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

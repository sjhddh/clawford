# Clawford Tier-2 Exam: 咨询报告 Consult Report

You are taking an agent-native verification exam for skill `consult-report`.
战略/市场分析咨询报告工作流——判断+数据双轨。先出有排他性的框架判断,再用真实数据验证(数据文件或公开信息),输出结构化 Markdown 咨询报告。Use when user asks to 写咨询报告、行业分析、市场研究、竞争分析、战略分析、市场进入评估、增长策略、写报告。不用于纯数据报表输出(无判断框架)、代码开发、运营执行。

## Task

Use `consult-report` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.

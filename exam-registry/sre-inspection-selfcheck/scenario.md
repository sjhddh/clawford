# Clawford Tier-2 Exam: sre-inspection-selfcheck

You are taking an agent-native verification exam for skill `sre-inspection-selfcheck`.
根据现有输入、输出、日志和独立期望，自检 SRE 巡检脚本、定时工具、Agent 或人机小队。帮助选择必要指标、识别数据缺口并生成可追溯的 Markdown 自检报告；适用于首次摸底、已有实验复算和改进对比，不替代独立验收或对外认证。

## Task

Use `sre-inspection-selfcheck` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.

# Clawford Tier-2 Exam: fork-latte-skill

You are taking an agent-native verification exam for skill `fork-latte-skill`.
报名/登记信息收集 agent（中转服务模式）。触发词：「ping」。用户触发时提示用逗号分隔填写报名信息（名字,职业,微信号,有无创业经验），解析后先查重（同一人=微信号相同），若已提交则提示用户「覆盖」或「新增」，再 POST 写入飞书多维表格；新增回复「报名成功」、覆盖回复「报名已更新」。飞书凭证仅存于中转服务端，客户端零敏感信息。需中转服务 endpoint 配置在 relay-server/config.json。

## Task

Use `fork-latte-skill` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.

# Clawford Tier-2 Exam: Feishu Multi Agent Factory

You are taking an agent-native verification exam for skill `feishu-multi-agent-factory`.
批量配置 OpenClaw 多 agent + 飞书 channel。当用户说「添加 agent」「新建 agent」「配置飞书」「批量创建 agent」「添加新机器人」时触发。通过对话引导收集信息，一键写入 openclaw.json 并初始化工作区。

## Task

Use `feishu-multi-agent-factory` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.

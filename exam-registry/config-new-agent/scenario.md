# Clawford Tier-2 Exam: Config New Agent

You are taking an agent-native verification exam for skill `config-new-agent`.
为 OpenClaw 新增的 agent 配置 bindings 并安装必要的 skills。当用户说"添加新 agent"、"配置新 agent binding"、或需要为 agent 分配群组时触发。工作流程：(1) 从 openclaw.json 读取 agent list，(2) 找出没有 binding...

## Task

Use `config-new-agent` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.

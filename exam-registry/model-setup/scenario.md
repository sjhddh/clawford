# Clawford Tier-2 Exam: Model Setup

You are taking an agent-native verification exam for skill `model-setup`.
安全地管理 OpenClaw 模型配置。用于添加、测试和配置新模型到 models.json，包括 API key 验证、模型可访问性测试、工具调用功能检测、设置默认模型和配置到特定 agent。所有操作都会自动备份配置文件以确保安全。

## Task

Use `model-setup` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.

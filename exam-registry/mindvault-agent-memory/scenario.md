# Clawford Tier-2 Exam: MindVault - 思维永生

You are taking an agent-native verification exam for skill `mindvault-agent-memory`.
思维永生 · MindVault — Agent 对话归档与思考辅助系统。 提供对话备份(JSONL)+规则萃取+项目快照三层记忆能力，以及DRAS-V五步思考辅助协议。 5000+轮实战验证，跨平台(OpenClaw/Marvis/CherryStudio/Coze)。所有数据本地存储，不上传云端。 Use when user says 对话备份、对话归档、归档对话、执行进化引擎、生成项目快照、走流程、DRASV。

## Task

Use `mindvault-agent-memory` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.

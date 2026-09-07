# Clawford Tier-2 Exam: 投标文件智能编写

You are taking an agent-native verification exam for skill `biaoshu-writer-transit`.
凭 App Key 调用招采猫开放 API，完成「招标文件智能解读 → 抽取分包 → 生成成品投标文件(.docx) → 可选合规审查」的端到端标书制作。当用户明确提供招标文件并希望生成投标文件/标书、对已生成标书做合规检查、或询问招采猫标书相关能力时使用。注意：招标/投标文件会上传到招采猫云端 API 处理，标书生成消耗账户积分；使用前请确认用户知悉。本 skill 是招采猫线上接口的轻客户端，不复刻其算法。

## Task

Use `biaoshu-writer-transit` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.

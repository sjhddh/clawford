# Clawford Tier-2 Exam: LLM助手中枢

You are taking an agent-native verification exam for skill `llm-assistant-hub`.
针对商业、法律等高风险长文档的长上下文推理优化器，提供五大核心能力. 分层分析策略（L0快速扫描→L1深度分析→L2聚焦深挖）按文档长度自动选择层级组合，控制token成本. 文档分块处理超长文档（超过50000字），按章节逻辑边界分割，逐块独立分析后全局检查跨块矛盾，解决上下文衰减问题. 假设检测框架将假设分为...

## Task

Use `llm-assistant-hub` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

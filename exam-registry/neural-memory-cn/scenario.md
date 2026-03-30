# Clawford Tier-2 Exam: Neural Memory CN

You are taking an agent-native verification exam for skill `neural-memory-cn`.
神经网络启发的记忆系统，支持激活扩散和联想检索。安装后即可使用本地模式，配置 LLM 后可启用智能意图分析。/ Neural network-inspired memory with activation spreading. Works out-of-box in local mode; configure L...

## Task

Use `neural-memory-cn` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

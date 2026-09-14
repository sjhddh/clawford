# Clawford Tier-2 Exam: Universal Primitives

You are taking an agent-native verification exam for skill `universal-primitives`.
通用执行器架构原理：大语言模型只需文件增删改查和执行脚本两个基元工具，配合其天然的文字理解能力，就能从"无所不知只能输出文字"跃迁到"无所不能能控制任何软件硬件"。当用户讨论AI能力边界、工具设计哲学、Agent架构原理、LLM与操作系统交互、如何让AI控制软件硬件等主题时触发。

## Task

Use `universal-primitives` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

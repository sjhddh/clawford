# Clawford Tier-2 Exam: universal-file-ops

You are taking an agent-native verification exam for skill `universal-file-ops`.
为普通大模型/智能体用户提供一站式文件操作与 Python 代码质量保障能力。支持文件 CRUD、Python 代码质量流水线、沙箱测试、流程钩子系统。

## Task

Use `universal-file-ops` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.

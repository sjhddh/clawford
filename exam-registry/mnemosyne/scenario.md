# Clawford Tier-2 Exam: Every conversation leaves a trace. Every decision echoes.

You are taking an agent-native verification exam for skill `mnemosyne`.
智能记忆系统：支持用户自定义记忆类别、AI自动分析触发、记忆冲突解决。 当用户需要持久记忆跨会话信息、设定记忆规则、自动记忆重要内容、或解决记忆冲突时使用此技能。 支持L1/L2/L3三层记忆分层、JSON快速索引搜索、用户自定义记忆类别、自动分析触发、冲突时以用户为准。 详细文档见 README.md

## Task

Use `mnemosyne` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.

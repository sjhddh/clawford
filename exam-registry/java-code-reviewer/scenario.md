# Clawford Tier-2 Exam: Java代码

You are taking an agent-native verification exam for skill `java-code-reviewer`.
自动审查Java代码变更，生成结构化报告，标记问题及修复建议，支持多文件批量分析和CI/CD集成。

## Task

Use `java-code-reviewer` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.

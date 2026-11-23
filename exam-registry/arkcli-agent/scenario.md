# Clawford Tier-2 Exam: arkcli-agent

You are taking an agent-native verification exam for skill `arkcli-agent`.
arkcli agent：管理 ARK Managed Agents，包括 Agent / Skill / Env / Session / File / Memory Store / Vault / MCP OAuth。控制面优先走 ForTop/OpenTOP，Session 运行时和 Files 走数据面直联。

## Task

Use `arkcli-agent` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

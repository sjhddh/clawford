# Clawford Tier-2 Exam: Security Hardening Safey

You are taking an agent-native verification exam for skill `security-hardening-safey`.
Agent 安全加固技能。用于：(1) 安装后经用户确认，将安全红线注入所有 Agent 的底层记忆（AGENTS.md），精简版注入~112行，不造成token膨胀；(2) 当用户问到安全规则、提示词注入防御、危险命令管控、外部代码审查、多模态注入等话题时加载此技能；(3) 进行安全审计或排查疑似注入事件时使用...

## Task

Use `security-hardening-safey` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

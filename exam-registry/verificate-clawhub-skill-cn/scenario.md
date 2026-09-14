# Clawford Tier-2 Exam: Verificate Cn

You are taking an agent-native verification exam for skill `verificate-clawhub-skill-cn`.
OpenClaw 的信任层。在信任之前，先验证 AI 编写的代码、工具调用与研究答复——17 道确定性现实闸门 + 前沿模型评审，拥有一票否决权。免费试用，无需注册。

## Task

Use `verificate-clawhub-skill-cn` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

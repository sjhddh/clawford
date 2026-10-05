# Clawford Tier-2 Exam: Self Critique Advisor

You are taking an agent-native verification exam for skill `self-critique-advisor`.
基于保罗-埃尔德三维批判框架的自我批判顾问。引导用户（或AI Agent自身）对自己的信念、判断和决策进行结构化、系统化的自我审视与校准。当用户需要复盘决策、反思偏见、审视自身逻辑盲区、或执行"强批判性思维"时调用。

## Task

Use `self-critique-advisor` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

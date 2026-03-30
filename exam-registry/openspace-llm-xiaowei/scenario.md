# Clawford Tier-2 Exam: openspace-llm-xiaowei

You are taking an agent-native verification exam for skill `openspace-llm-xiaowei`.
把港大OpenSpace改造成OpenClaw可直接调用的AI技能，支持MiniMax-M2.7、自动代理、长文本生成

## Task

Use `openspace-llm-xiaowei` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

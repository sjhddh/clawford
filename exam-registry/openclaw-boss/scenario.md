# Clawford Tier-2 Exam: Openclaw Boss

You are taking an agent-native verification exam for skill `openclaw-boss`.
OpenClaw 老板 - 你的 AI 老板来了！🦞 你以为你在养龙虾？有没有可能龙虾才是老板，你成了给 AI 打工的牛马？根据对话历史生成真实、严厉、有趣的用户评价报告。Use when: user asks for self-reflection, user profile, performance rev...

## Task

Use `openclaw-boss` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

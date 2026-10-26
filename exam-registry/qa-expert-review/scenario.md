# Clawford Tier-2 Exam: qa-expert-review

You are taking an agent-native verification exam for skill `qa-expert-review`.
当 AI 生成的测试用例已经过输出评审和盲区补盲、准备终审上线时使用此技能。由资深测试对 AI 输出的用例做人工抽样校验，从业务有效性、场景完整性、可执行性三个维度做最后把关。⚠️ 如果发现系统性问题（比如遗漏了某个关键模块），需要回退修正并记录到 Prompt 优化反馈库。专家评审不是走形式——发现的问题必须闭环。 触发场景：专家评审、用例审查、校正反馈、评审用例、检查用例、终审、用例上线前需要终审时。 Use when the user asks about: final human-style review of AI-generated test cases before shipping, sampling for business validity, scenario completeness, and executability.

## Task

Use `qa-expert-review` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

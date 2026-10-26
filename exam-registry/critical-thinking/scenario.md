# Clawford Tier-2 Exam: 批判性思维·学会提问

You are taking an agent-native verification exam for skill `critical-thinking`.
【批判性思维·学会提问】把尼尔·布朗《学会提问》（第12版）蒸馏成程序化、可套用的论证拆解与评估方法论。覆盖：论证结构拆解（论题/结论/理由/证据/假设）、10个批判性问题清单、逻辑谬误识别模板、证据效力判定（个人经历/案例/证言/权威/观察/调查研究）、替代原因与相关性≠因果、数据欺骗检查、省略信息清单、灰度结论与条件句、认知偏见防御（系统1/确认偏误/可得性等）。当用户说"帮我分析这段论述""这个观点站得住吗""有没有逻辑谬误""证据可靠吗""找出替代原因""数据是不是在骗人""这段话省略了什么""批判性思维""学会提问""论证怎么拆解""识别认知偏差"时使用。

## Task

Use `critical-thinking` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

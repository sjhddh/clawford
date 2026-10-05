# Clawford Tier-2 Exam: ym-feedback-evidence-triage

You are taking an agent-native verification exam for skill `ym-feedback-evidence-triage`.
把零散用户反馈归类成需求证据：合并同类项、统计频次与影响面、标注典型原话，输出可支撑优先级排序的证据表，不把个别反馈当成全体需求。当用户说「整理用户反馈」「反馈归类」「需求证据」时使用。 也适用于「反馈整理」「用户声音」「feedback triage」这类说法。

## Task

Use `ym-feedback-evidence-triage` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

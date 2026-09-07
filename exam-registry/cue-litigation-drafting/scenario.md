# Clawford Tier-2 Exam: 诉讼文书起草

You are taking an agent-native verification exam for skill `cue-litigation-drafting`.
诉讼文书起草 — 根据用户提供的案件事实与当事人立场，通过 Cue 服务端生成法律文书草稿（答辩状/质证意见/律师函），逐点附法条与类案依据。本技能调用 Cue API（cuecue.cn）完成远程检索与生成，不直接访问任何数据源。 Triggers: 起草答辩状、起草质证意见、起草律师函、起草起诉状、起草上诉状、draft litigation document

## Task

Use `cue-litigation-drafting` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.

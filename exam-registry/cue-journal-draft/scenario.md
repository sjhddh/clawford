# Clawford Tier-2 Exam: cue-journal-draft

You are taking an agent-native verification exam for skill `cue-journal-draft`.
给你栏目 + 本期素材（或先做公开检索），产出可编辑成稿：提纲、成稿、引证逐条回源，后接版面与编辑定位两道脚本门禁（查定位落地、字数、读者动作、句长、自填 taboo 词表与术语密度），终了 QA 清单人工逐项核（引证回源、极限词在清单内）。仿写参考样式只学语气、不编事实。适合：月刊/季刊内刊、客户通讯、投资者信、ESG 特刊。不适合：替代编辑签发（门禁给清单、拍板在用户）、编造客户案例、承诺刊发效果。 Do NOT use for: editorial sign-off, invented client cases, promised outcomes.

## Task

Use `cue-journal-draft` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

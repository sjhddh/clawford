# Clawford Tier-2 Exam: 改代码不翻车检查表

You are taking an agent-native verification exam for skill `change-guard`.
跟 AI 结对写代码的保险绳：改代码前先拷问清楚（改哪里/会不会弄坏别的/怎么验），改完逐条验收、贴证据，验完才算完。治「AI说改好了其实没验过」和「顺手改出连环坑」。触发词：改代码、修bug、加个功能、改个需求、重构、防改坏、验收清单。

## Task

Use `change-guard` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

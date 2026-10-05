# Clawford Tier-2 Exam: Text to Infographic

You are taking an agent-native verification exam for skill `text-to-infographic`.
将当前对话中用户已提供的内容组织成单页信息图规格，并可在用户明确要求时输出可复制的独立静态 HTML 源码。仅在用户明确请求信息图规格、独立信息图 HTML，或要求把已提供内容组织成信息图布局时调用。

## Task

Use `text-to-infographic` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

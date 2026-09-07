# Clawford Tier-2 Exam: Teaching Plan Generator

You are taking an agent-native verification exam for skill `teaching-plan-generator`.
生成 40 分钟三段式课堂教案（MD + DOCX），适配职业院校两种学情（统一型/分层型）。 当用户提到教案、教学设计、分层教学、课堂教学设计、备课、分层教案、教学流程设计时使用， 也适用于用户提供课程内容文档、已有教案或企业岗位手册作为参考材料需要生成教案的场景。

## Task

Use `teaching-plan-generator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

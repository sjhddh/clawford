# Clawford Tier-2 Exam: 专利解读 · PatentMax

You are taking an agent-native verification exam for skill `patent-explainer`.
专利解读、看懂一件专利。当用户给出一个公开号或申请号，说「帮我解读这件专利」「这个专利讲的是什么」「它保护的范围是什么」「这件专利还有效吗」「权利要求怎么理解」时使用。输出专利解读卡（Excel 能打开）：白话摘要、法律状态、独立权利要求的技术特征清单、相似专利。 Explains a single patent in plain language. Covers what it protects, legal status, the feature list of the independent claim, and similar patents for comparison.

## Task

Use `patent-explainer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

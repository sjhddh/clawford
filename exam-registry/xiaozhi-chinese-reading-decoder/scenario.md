# Clawford Tier-2 Exam: 阅读理解拆解师

You are taking an agent-native verification exam for skill `xiaozhi-chinese-reading-decoder`.
现代文阅读专项教练：先把文章真正读懂，再把话按阅卷规范说清楚。当学生说"帮我做阅读理解"、"这道现代文题为什么错了"、"帮我分析这篇散文/议论文"、"阅读理解怎么答才规范"、"这道题的考点是什么"、"非连续性文本怎么做"时，建议激活此SKILL。覆盖记叙文、散文、议论文、说明文、非连续性文本的读法与答题规范。文言与古诗题转 xiaozhi-chinese-classical-revival；作文转 xiaozhi-chinese-writing-coach；病句判定转 xiaozhi-chinese-grammar-tracker。不在学生尝试之前给原题答案。

## Task

Use `xiaozhi-chinese-reading-decoder` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

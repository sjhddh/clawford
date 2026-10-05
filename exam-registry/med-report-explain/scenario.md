# Clawford Tier-2 Exam: 体检报告解读话术台

You are taking an agent-native verification exam for skill `med-report-explain`.
体检报告满页箭头，普通人看不懂哪些要紧、哪些是生理波动，容易过度焦虑或直接忽略。 输入：报告中的异常项（项目名+数值+参考区间）、年龄性别、既往病史（可选）。输出：①逐项通俗解释（这项是查什么的、偏离意味着什么趋势）②分级：建议尽快就医 / 复查观察 / 无需紧张 ③就医前准备（挂什么科、带上什么、问哪 3 个问题）④生活方式可调整项。永久免费，无需付费、无需授权（MIT-0）。

## Task

Use `med-report-explain` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

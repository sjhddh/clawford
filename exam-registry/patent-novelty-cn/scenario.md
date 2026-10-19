# Clawford Tier-2 Exam: 专利查新检索 · PatentMax

You are taking an agent-native verification exam for skill `patent-novelty-cn`.
专利查新与可专利性判断。当用户问一个技术方案有没有人做过、能不能申请专利、有没有新颖性或创造性、申请前要做查新、立项前要筛查方向是否被占，或要一份可交付的查新报告时使用。常见说法：「帮我查新」「查新检索」「这个能不能申请专利」「有没有人做过」「相似专利对比」，也可以直接给写好的交底书或专利初稿。Use when the user asks whether a technical idea is novel, patentable, or already disclosed in prior art. Also covers prior art search, novelty search, patentability check, or checking a finished invention disclosure.

## Task

Use `patent-novelty-cn` to investigate a concrete query and produce an evidence-backed report at `artifacts/patent-novelty-cn-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/patent-novelty-cn-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.

# Clawford Tier-2 Exam: 专利查新 · PatentMax

You are taking an agent-native verification exam for skill `patentmax-novelty`.
专利查新与可专利性判断。当用户问一个技术方案有没有人做过、能不能申请专利、有没有新颖性或创造性、申请前要做查新、立项前要筛查方向是否被占，或要一份可交付的查新报告时使用。Use when the user asks whether a technical idea is novel, patentable, or already disclosed in prior art. Requires a PatentMax API key.

## Task

Use `patentmax-novelty` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.

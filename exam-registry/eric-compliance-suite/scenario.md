# Clawford Tier-2 Exam: eric-compliance-suite

You are taking an agent-native verification exam for skill `eric-compliance-suite`.
睿观(ERiC) 全功能合规检测套件。集成外观专利(D001)、发明专利(I001)、图形商标(L001)、文本商标+替换词(T001/T002)、版权(C001)、政策合规(P001-P007) 六大检测能力。当用户需要进行任何知识产权合规检测（专利、商标、版权）或电商平台政策合规审查时触发此 skill。

## Task

Use `eric-compliance-suite` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

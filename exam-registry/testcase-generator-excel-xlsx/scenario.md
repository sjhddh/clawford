# Clawford Tier-2 Exam: Testcase Generator

You are taking an agent-native verification exam for skill `testcase-generator-excel-xlsx`.
用来生成用例的技能，针对已有的用例库和提供的prd进行分析交互，最终输出生成的用例，会区分新增和更新，生成2个excel文件.

## Task

Use `testcase-generator-excel-xlsx` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

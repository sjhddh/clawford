# Clawford Tier-2 Exam: results-tense-grammar-checker

You are taking an agent-native verification exam for skill `results-tense-grammar-checker`.
诊断英文心理学论文 Results 部分的时态、语法与句法问题（一般过去时/现在时使用、主谓一致、冠词、句子片段、run-on sentence、平行结构），基于权威期刊论文提取的 examples 提供诊断依据与修改建议。当用户提供 Results 草稿要求检查时态/语法/句法并输出结构化诊断报告时使用。

## Task

Use `results-tense-grammar-checker` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

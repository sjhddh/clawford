# Clawford Tier-2 Exam: qa-ai-output-critique

You are taking an agent-native verification exam for skill `qa-ai-output-critique`.
对AI生成的测试用例进行八维评审（完整性、正确性、可执行性、风险覆盖、规范性、一致性、追溯性、冗余度），是AI生成用例后的第一个质量门禁。当AI刚刚生成了一大批测试用例、你需要确保这些用例真的有价值而不是"看起来不错"时，应当使用此技能。不要假设AI输出的都是对的——AI经常生成语义正确但实际操作不了的用例。每个维度评分低于7分的必须标注问题并使用MISSING/WRONG/VAGUE等规范格式标记。无上游场景树/风险清单时降级为六维评审（跳过追溯性、简化完整性）。 触发场景：检查一下输出、评审用例质量、验证完整性、这个用例对吗、自动检查时。 Use when the user asks about: critiquing AI-generated test cases across completeness, correctness, executability, risk coverage, conformance, consistency, traceability, and redundancy.

## Task

Use `qa-ai-output-critique` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

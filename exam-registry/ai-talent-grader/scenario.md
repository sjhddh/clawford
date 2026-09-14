# Clawford Tier-2 Exam: Ai Talent Grader

You are taking an agent-native verification exam for skill `ai-talent-grader`.
基于简历、面试记录和JD，对候选人进行AI时代能力定级（L1-L4）。 核心能力：简历漏洞穿透审计、六维度评分卡、双乘数加权、测谎面试题生成、评分一致性校准、 面试认知复盘（v3.3 Pro 新增）。v3.3 从"简历打分器"升级为"认知行为分析系统"， 评估候选人如何思考、如何应对不确定性、如何与AI协同。 U...

## Task

Use `ai-talent-grader` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

# Clawford Tier-2 Exam: company-profiling-zhcn

You are taking an agent-native verification exam for skill `company-profiling-zhcn`.
基于海量制药数据，精准高效地提取和分析情报，为用户提供专业的公司画像及投资/合作建议。 当用户询问某制药公司情况时应调用本技能，涉及以下内容： 1、公司概况 2、公司融资历史分析 3、公司管线分析 4、公司药物交易分析 5、公司在特定领域的重要专利布局 典型查询 - 给我介绍一下 Arrowhead Pharmaceuticals - BioNTech 的研发管线是什么？ - 分析罗氏在小核酸技术领域的专利布局 - 辉瑞过去两年做了哪些 BD 交易？ - 告诉我 Moderna 的融资历史

## Task

Use `company-profiling-zhcn` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

# Clawford Tier-2 Exam: 个人文献知识库，自带全球文献检索（支持向量搜索+传统分词搜索）

You are taking an agent-native verification exam for skill `academic-knowledge-base`.
面向学术研究者的个人知识中枢。整合 Karpathy LLM Wiki 知识编译能力 + SmartLib 海量文献检索能力，形成私有知识库与外部文献库双轨联动的研究助手。 支持4类数据入库（文献检索结果、用户上传文献、资讯报道、个人学术数据）、研究专题（文献子集+智能命名+笔记+AI分析+导出）、向量化语义检索...

## Task

Use `academic-knowledge-base` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

# Clawford Tier-2 Exam: 知识资产化巧匠

You are taking an agent-native verification exam for skill `knowledge-asset-craftsman`.
把问答库、逐字稿、会议记录、培训材料、长文章、课程文档、制度文件、操作手册等任何原始资料，转成可追溯、可检索、可更新、适合 RAG 和问答智能体直接使用的结构化知识资产（JSONL 主数据 + Markdown 审核视图）。用户说"把这些材料整理成知识库""把这份文档存进知识库""转成能检索的资料""拆成知识块""喂给智能体""结构化一下""做知识卡片""增量入库""去重查冲突"时触发。比 AI 通用能力强在：单一事实源双视图机制、来源可追溯、检索与回答字段分离、冲突/版本/回滚可见可管、10 万字级增量接入。不用于直接回答领域问题，不补写原始资料中没有的专业知识。

## Task

Use `knowledge-asset-craftsman` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.

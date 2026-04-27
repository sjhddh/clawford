# Clawford Tier-2 Exam: YoudaoNote LLM Wiki

You are taking an agent-native verification exam for skill `youdaonote-llm-wiki`.
当用户提到「知识库」「Wiki」「新建知识库」「创建 Wiki」「初始化 Wiki」「LLM Wiki」「素材摄入」「知识查询」「知识库审计」「一致性检查」「归档对话」「记下来」「存入知识库」「切换知识库」「用哪个知识库」「换一个知识库」「选知识库」，或使用助记词 wiki-init、wiki-ingest、wi...

## Task

Use `youdaonote-llm-wiki` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

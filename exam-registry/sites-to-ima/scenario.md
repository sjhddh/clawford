# Clawford Tier-2 Exam: Sites to IMA

You are taking an agent-native verification exam for skill `sites-to-ima`.
网站内容批量标记入库：全量抓取指定网站内容列表、导出xlsx/csv、建立分类索引笔记并导入知识库、生成增量更新手册。当用户说"标记网站XX""爬取XX网站入库""把XX建成分类索引""更新marksites站点XX"时触发。不适用于单篇文章阅读、非网站数据处理、纯知识库管理。

## Task

Use `sites-to-ima` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.

# Clawford Tier-2 Exam: cn-med-oa

You are taking an agent-native verification exam for skill `cn-med-oa-pub`.
中文医学文献开放获取(OA)检索下载与引用验证套件。通过维普OA平台(oa.cqvip.com)免登录、 免费检索中文医学期刊并下载 PDF 全文；输出完整 Vancouver/GB-T7714 元数据（标题/作者/期刊/ 年/卷/期/页/DOI/ISSN/CN刊号/摘要/关键词/基金/分类号），可直拼参考文献行；内置相关性守门 （防平台OR匹配捞回无关结果）与五态引用验证器 verify_cn_refs（防AI幻觉引用，判定语义与 pubmed-verifier 一致）。SQLite缓存/重试退避/日配额/控频，零依赖纯标准库。 触发词："下中文文献"、"找中文文献"、"中文医学文献下载"、"找OA版"、"开放获取"、"免费下载论文"、 "国内指南共识解读"、"找参考文献"、"中文文献支撑"、"补中文引文"、"验证中文引用"、"核查中文文献"、 "下载维普文献"、"找几篇中文的"、"写文献综述要中文参考"。 英文："download chinese paper"、"find OA chinese literature"、"verify chinese citations"。 即使用户只说"帮我下载这篇中文文献"或"找几篇类风湿的中文论文"也应触发。

## Task

Use `cn-med-oa-pub` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.

# Clawford Tier-2 Exam: Unified Research Finder

You are taking an agent-native verification exam for skill `unified-research-finder`.
统一的学术文献检索助手。覆盖两大体系：(1) PubMed 官方 E-utilities API（esearch+efetch，真实 PMID/摘要/DOI）与 PubMed 网页检索；(2) Google Scholar 及其镜像站——灯塔学术搜索、烂番薯学术搜索、Google Scholar 香港镜像、Google Scholar 官方站，以及 KipHub学术、学术搜索Pro 等大陆镜像，按「kiphub → 烂番薯 → 学术搜索Pro → 灯塔 → 香港 → 官方」优先级自动回退。当用户要找文献、查论文、搜 PubMed、查 Google 学术/谷歌学术、用学术镜像站、要影响因子或引用

## Task

Use `unified-research-finder` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.

# Clawford Tier-2 Exam: Smartlib Citation Checker

You are taking an agent-native verification exam for skill `smartlib-citation-checker`.
核查用户提交的论文稿件或AI生成参考文献是否真实，防止AI幻觉。基于SmartLib API，输出HTML核查报告（含差异标记、验证链接、统计分析）。支持GB/T 7714/APA/MLA/Chicago/BibTeX多格式解析与输出，并行检索（8条/批）+ Token缓存复用 + 智能提前终止回退。✨ 亮点：核...

## Task

Use `smartlib-citation-checker` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.

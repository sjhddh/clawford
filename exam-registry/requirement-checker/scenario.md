# Clawford Tier-2 Exam: Requirement Checker

You are taking an agent-native verification exam for skill `requirement-checker`.
需求文档规范自动检查技能（AI 驱动 + 智能引导 + 温柔话术 + 建议分级）。使用 LLM 智能检查需求文档是否符合规范，生成具体问题说明、原文引用、针对性建议和 GWT 验收标准。首次使用会智能引导你设置目录和 API 配置，配置一次后无需重复设置。支持单个文件检查和批量检查，汇总报告可选。温柔话术：从"挑...

## Task

Use `requirement-checker` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.

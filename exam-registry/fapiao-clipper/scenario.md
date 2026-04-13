# Clawford Tier-2 Exam: Fapiao Clipper

You are taking an agent-native verification exam for skill `fapiao-clipper`.
发票夹子 v1.4 - 本地大模型驱动的发票自动识别与报销管理工具。 2级降级链：PyMuPDF文本提取（修复跨行匹配）→ Qwen3-VL视觉模型。 新增：seller/buyer跨行匹配修复、日期标准化。 功能：8项风控验真 + 一键导出 Excel + 合并 PDF。

## Task

Use `fapiao-clipper` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.

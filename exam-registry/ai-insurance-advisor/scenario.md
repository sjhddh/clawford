# Clawford Tier-2 Exam: ai-insurance-advisor

You are taking an agent-native verification exam for skill `ai-insurance-advisor`.
中国大陆保险顾问。本 skill 覆盖 8 项能力：保险需求分析（needs_analyzer.py）、产品对比（premium_calculator.py + 本地 products.json）、保费计算（premium_calculator.py）、方案设计（plan_designer.py）、保险知识问答（insurance-knowledge.md）、合规要点提示（compliance.md）、朋友圈/社交营销文案生成（agent LLM 生成，无专属脚本）、培训话术支持（agent LLM 生成，无专属脚本）。不提供核保预审、理赔代办、代理人展业工具等能力——这些场景请转人工或调用专业服务。发布产物仅含 SKILL.md + 3 个只读参考文件 + 3 个运行时脚本（needs_analyzer / premium_calculator / plan_designer）；数据清洗与回归测试脚本为本地维护工具，不随发布产物分发。

## Task

Use `ai-insurance-advisor` to investigate a concrete query and produce an evidence-backed report at `artifacts/ai-insurance-advisor-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/ai-insurance-advisor-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.

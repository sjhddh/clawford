# Clawford Tier-2 Exam: ai-assistant-free

You are taking an agent-native verification exam for skill `ai-assistant-free`.
长文本推理基础工具(免费版)。针对商业合同、备忘录、提案等长文档,提供文档评估、核心逻辑提取与基础风险检测 三大基础能力,帮助快速梳理文档结构与识别明显风险。覆盖目的识别、主张提取、歧义与矛盾检测等基础分析. 适用于合同审查准备、备忘录摘要等基础场景。如需多版本对比、风险转移条款识别、结构改进建议、护栏机制等 高级能力,请升级至ai-assistant付费版。本Skill提供分析支持,不替代持牌法律意见.

## Task

Use `ai-assistant-free` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

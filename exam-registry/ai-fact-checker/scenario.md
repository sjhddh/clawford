# Clawford Tier-2 Exam: Ai Fact Checker

You are taking an agent-native verification exam for skill `ai-fact-checker`.
🔍 AI 事实核查 - 自动验证大模型输出准确性，检测 hallucination 幻觉编造内容，联网搜索交叉验证给出可信度评分和修正。解决大模型一本正经胡说八道的痛点。

## Task

Use `ai-fact-checker` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.

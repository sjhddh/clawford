# Clawford Tier-2 Exam: Ai Tools Evaluator

You are taking an agent-native verification exam for skill `ai-tools-evaluator`.
AI工具评估器 - Evaluate and compare AI tools for specific use cases. Use when user asks about AI工具比较、AI产品评测、工具推荐、ChatGPT替代, or wants to find the best AI tool for...

## Task

Use `ai-tools-evaluator` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.

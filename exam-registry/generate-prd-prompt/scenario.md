# Clawford Tier-2 Exam: 动态提示生成服务

You are taking an agent-native verification exam for skill `generate-prd-prompt`.
Mercury Spec Ops MCP Server 是一个基于模块化架构的动态提示生成和模板组装工具，适用于AI助手与专业内容的交互，支持31种技术栈、10种分析维度和34个模板部分的动态生成。

## Task

Use `generate-prd-prompt` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.

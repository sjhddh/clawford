# Clawford Tier-2 Exam: tool-use

You are taking an agent-native verification exam for skill `tool-use`.
函数调用 / 工具编排助手（agent 行动力核心）。把自然语言意图转化为结构化 tool_call（名称 + 参数 JSON），生成符合 OpenAI 函数调用规范的 schema，并提供本地调度器（dispatch）：按 schema 校验参数、安全执行已注册工具、回收结果。当用户需要"定义工具 schema""做 function calling""让 agent 调用工具""tool dispatch""注册并调用工具"时调用。

## Task

Use `tool-use` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.

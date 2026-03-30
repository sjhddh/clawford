# Clawford Tier-2 Exam: Add NewCLI Provider (Claude/GPT/Gemini)

You are taking an agent-native verification exam for skill `add-newcli-provider`.
为 OpenClaw 配置 code.newcli.com 作为模型源，包含四个 provider：newcli（Claude 主线路）、newcli-aws（Claude AWS 特价线路，消耗 1/24）、newcli-codex（GPT 系列）、newcli-gemini（Gemini 系列）。适用于需要接入 Claude 或 GPT 模型的场景。包含 provider 注册、模型定义、别名配置、fallback 链接入和验证的完整流程。当管理员说想"加 Claude"、"加 GPT"、"配 newcli"、"加 fox 源"、"接入 Claude 模型"、"接入 GPT 模型"、"加 codex"、"加 aws 线路"时使用此 skill。

## Task

Use `add-newcli-provider` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

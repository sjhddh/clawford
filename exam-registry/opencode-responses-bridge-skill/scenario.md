# Clawford Tier-2 Exam: opencode-responses-bridge-skill

You are taking an agent-native verification exam for skill `opencode-responses-bridge-skill`.
Local stdlib-only proxy that adapts OpenAI Chat Completions to/from the Responses API so any OpenAI-compatible agent client (WorkBuddy, Cursor, Open WebUI, LobeChat, ...) can use Responses-API-only models such as OpenCode Go gpt-5.6-luna. Use when: setting up a Chat Completions to Responses API bridge, local proxy for responses-only models, fixing 'model only supports responses API', 'invalid_prompt' HTTP 400, 'custom model error 10000', or protocol transcoding for any Responses API endpoint (OPENCODE_UPSTREAM). 使用场景：协议转接/本地代理/把只支持 Responses API 的模型接入 OpenAI 兼容客户端/模型报 invalid_prompt 或自定义模型错误 10000。

## Task

Use `opencode-responses-bridge-skill` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.

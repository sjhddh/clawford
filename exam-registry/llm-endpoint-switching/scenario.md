# Clawford Tier-2 Exam: 切换 LLM 端点（OpenAI 兼容第三方）

You are taking an agent-native verification exam for skill `llm-endpoint-switching`.
把脚本里的 LLM 从一个 OpenAI 兼容端点/模型换到另一个时的排查手册。 重点覆盖三类必踩的坑：**Cloudflare 拦 urllib 默认 UA 导致 403 「error code: 1010」**（会被误判成 key 无效，换真 key 也照样403）、 **切到免 key 端点时空串是真值陷阱**（`configure()` 用 `if api_key:` 会让旧付费 key 沿用 → 必 401），以及**先 --ping 预检再跑批量**的做法。 当用户说「换成 XX 模型」「加个模型」「这个 API 报 403 / 400 / 404」 「AI 调用失败」「key 明明是对的却说无效」「怎么切模型」 「换成免 key 的模型」「切过去之后 401」时使用。

## Task

Use `llm-endpoint-switching` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.

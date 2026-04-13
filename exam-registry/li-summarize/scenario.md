# Clawford Tier-2 Exam: Li Summarize

You are taking an agent-native verification exam for skill `li-summarize`.
使用国内 OpenAI 兼容 API 快速总结 URLs、本地文件、YouTube 链接。支持所有国内大模型 API（百度千帆、阿里云、腾讯混元、字节火山、Moonshot、DeepSeek 等）。

## Task

Use `li-summarize` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.

# Clawford Tier-2 Exam: wb-hot

You are taking an agent-native verification exam for skill `wb-hot`.
微博实时热榜采集工具。当用户需要获取当前微博热搜/热榜、热搜排名、热度值、话题链接，或导出微博热榜 CSV，或提到"微博热榜/微博热搜/热搜榜单/热点采集/热榜导出"时使用本 skill。服务端直接通过 HTTP 请求采集公开热榜，不需要微博登录态、微博 Cookie 或内网浏览器节点；每次采集 1 点数，失败全额返还。

## Task

Use `wb-hot` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.

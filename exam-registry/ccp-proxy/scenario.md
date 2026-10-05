# Clawford Tier-2 Exam: CCP Local Proxy

You are taking an agent-native verification exam for skill `ccp-proxy`.
本地 CCP API 反向代理服务。当用户需要启动/停止/检查本地大模型代理、需要通过本地地址 http://127.0.0.1:8257 访问中国移动 CCP 平台（qwen-3.5 等模型）、或提到"ccp 代理"、"本地转发 ptest.cmccsim.com"时使用此技能。服务以守护进程方式常驻运行，不随会话关闭。

## Task

Use `ccp-proxy` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.

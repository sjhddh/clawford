# Clawford Tier-2 Exam: migu-trip-agent

You are taking an agent-native verification exam for skill `migu-trip-agent`.
咪咕旅游智能规划助手。当用户说"去XX旅游"、"制定行程"、"规划旅游"、"景点推荐"、"自由行攻略"、"几天行程怎么安排"时自动调用。支持行程定制、行程调整、酒店景点美食推荐、简约行程、详细行程、路书生成等场景。运行时会通过用户本人在本地配置的登录凭证，访问第三方服务 gulangyu.migudm.cn 的 WebSocket/HTTPS 接口获取行程数据；脚本始终校验 TLS 证书，不会向用户索取或在输出/日志中回显 Token。

## Task

Use `migu-trip-agent` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.

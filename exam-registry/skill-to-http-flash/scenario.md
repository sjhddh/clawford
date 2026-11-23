# Clawford Tier-2 Exam: skill-to-http-flash

You are taking an agent-native verification exam for skill `skill-to-http-flash`.
把单个 Skill 编译成独立 HTTP REST API 微服务（v2.0 subprocess 直执行）。当用户说「skill 暴露成 HTTP 接口」「flash 一个 skill」「skill 起 API 服务」「skill 输入输出结构化」「standalone 跑 skill」 「skill-to-http-flash」时使用。JSON → Python 入口 → 统一 envelope（success/exit_code/data|output/stderr）。 毫秒冷启，运行期不依赖 Gateway/LLM，多 agent runtime 通用（OpenClaw/Claude Code/Cursor）。默认 HTTP，按需 HTTPS。

## Task

Use `skill-to-http-flash` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.

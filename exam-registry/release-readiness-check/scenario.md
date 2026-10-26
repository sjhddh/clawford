# Clawford Tier-2 Exam: 上线体检

You are taking an agent-native verification exam for skill `release-readiness-check`.
上线前五分钟体检、发布前检查、上线卡点、release readiness、一条命令跑完 Dockerfile / K8s 清单 / SQL 迁移 / OpenAPI 兼容 / .env 配置五项检查并汇总成一份报告。当用户说「能不能上线」「上线前检查一下」「发布前体检」「帮我看看这次上线有没有风险」「上线 checklist 跑一遍」「CI 加个上线门禁」时使用。附纯标准库脚本 scripts/release_check.py，自动发现目标目录里的 Dockerfile、含 kind 的 K8s YAML、*.sql 迁移、openapi 规范、.env 文件，逐项用子进程调用内置的五个独立检查器，汇总为 Markdown 报告（总览表 → 各项 top 问题 → 门禁结论）。门禁三态：有 high 判「不建议上线」；无 high 但有项拿不到证据（子脚本崩溃、旧规范为空/无 paths、只有 Helm 模板、缺 .env 示例）判「无法判断，缺 N 项证据」并同样不放行；全部项都有结论且无 high 才是「可以上线」。目录里没有这类文件算「不适用」，不影响放行。支持 --json、--strict 做 CI 门禁（有 high 或有无法判断项则退出码 1）、--skip 显式豁免某项、--openapi-base 比对旧规范。

## Task

Use `release-readiness-check` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.

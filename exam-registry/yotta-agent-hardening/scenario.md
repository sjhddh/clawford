# Clawford Tier-2 Exam: 元安全 yotta-agent-hardening

You are taking an agent-native verification exam for skill `yotta-agent-hardening`.
元安全 —— 给 AI 智能体 / Agent 技能自身做「体检 + 加固建议」：按 提示注入防护 / 工具调用边界 / 数据隔离 三域，对安装的 skills、MCP 服务器、工具描述、权限与数据读取面做配置面静态加固扫描，输出加固报告与可执行防御守则（零依赖 Python 3.8+，扫描只读、敏感读取检测默认开启、报告用「类」表述、每次扫描默认留痕）。触发：用户要求给智能体或技能环境做安全体检 / 加固、检查 MCP 服务器或技能是否可信、排查提示注入 / 越权 / 数据泄露风险、想了解装了一堆技能后的整体暴露面；或用户说 元安全 / 加固 / 安全体检 / 体检 / hardening / 扫一下我的技能 / 检查 MCP / 防御守则 / guardrails 等。边界（Do NOT trigger）：不产出可复制注入串 / 攻击 payload；只扫描用户自有、有权检查的目录与配置，不扫描无权访问的环境；不做运行时拦截（那是元盾）；不做单个技能装前审核（那是元审 / 元信）；不替代人工安全审计与最终决策。

## Task

Use `yotta-agent-hardening` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

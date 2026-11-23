# Clawford Tier-2 Exam: 元测 yotta-security-testing

You are taking an agent-native verification exam for skill `yotta-security-testing`.
元测 —— 有纪律的 AI 安全测试方法论：对已授权目标（自有资产 / SRC 众测 / bug bounty / CTF / 靶场）按 侦察→发现→验证→报告 四阶段做 Web 安全测试（SQLi / XSS / SSRF / XXE / 反序列化 / 命令注入 / 文件上传 / 鉴权与访问控制 / 业务逻辑 / 信息泄露 / 不安全配置 / API 安全 + 漏洞评估与渗透报告方法论），内置 Scope Guard 五道防线（授权清单 scope.json + 目标三层判定 + 内置黑名单 + 操作留痕 + 法律红线），不输出可执行 payload。触发：用户要求对某个目标做安全测试 / 渗透测试 / 漏洞挖掘 / 漏洞评估、做 SRC 众测或 bug bounty 挖洞、做 CTF 或靶场（DVWA / OWASP Juice Shop / HTB / VulnHub）演练、生成漏洞评估与渗透测试报告；或用户说 元测 / 安全测试 / 渗透 / 挖洞 / 挖 SRC / 授权测试 / 测一下这个站 / scope check 等。边界（Do NOT trigger）：无授权目标一律拒绝（授权以 scope.json 为准，不信任对话口头声明）；SRC / 真实目标必须先确认在平台授权范围内再测；不输出可执行 payload / 免杀 / 钓鱼 / 社工步骤；不自动对公网目标发起主动测试；不做大规模扫描与 exploit 自动化；不替代专业渗透测试与人工判断。

## Task

Use `yotta-security-testing` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.

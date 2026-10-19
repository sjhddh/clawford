# Clawford Tier-2 Exam: 技能盘点+健康体检 · Skill Inventory & Health Check

You are taking an agent-native verification exam for skill `agent-skill-inventory`.
Office-agent skill inventory & health check. Scans any skills directory, measures size and context-token footprint, detects duplicates, and classifies skills into used / protected / closeable / manual-review buckets. Reverse-dependency scanning locks skills referenced by automations, hooks or plugins. Read-only by default: two disclosed, consent-gated writes — `--overrides --apply --yes` (programmatic close on platforms like WorkBuddy; dry-run without --yes) and `--set-lang` (saves language preference to ~/.workbuddy/skill-inventory.json) — plus one backup artifact (timestamped settings.json.bak.<ts>) created before the close write. No network, no subprocesses. English docs: SKILL.en.md. 办公型 Agent 技能库盘点与效能体检。扫描任意技能目录，统计数量/体积/上下文 token 占用，识别重复技能，按「在用/受保护/可关闭/需人工确认」四档给出建议；反向依赖扫描锁定被自动化/Hook/插件引用的技能。默认只读，两处写路径均需授权：`--overrides --apply --yes`（缺 --yes 仅预览）与 `--set-lang`（写语言偏好）。无网络、无子进程。

## Task

Use `agent-skill-inventory` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.

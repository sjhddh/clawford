# Clawford Tier-2 Exam: Mihomo 排障与修复

You are taking an agent-native verification exam for skill `mihomo-skill`.
诊断并修复 mihomo / Clash.Meta / Clash 内核的代理异常，与部署平台无关——本机、远程 Linux/VPS、Docker、软路由/OpenWrt、群晖/绿联等 NAS、Clash Verge Rev / Mihomo Party 桌面客户端都适用。出现「代理时好时坏、节点全部延迟超时、面板全红、订阅拉不下来、日志 pull error、国内能上境外全断、重启后突然不能翻墙、明明有节点却像没走代理、分流或自动切换不生效、需要多订阅互为主备」时使用。覆盖 DNS 污染、SNI 阻断、订阅激活、provider 死锁、fallback 套策略组、GEOIP 误判直连等根因，可直接备份改配置、热重载或重启并复检。关键词：mihomo、clash、clash-meta、clash verge、mihomo party、proxy-provider、订阅、节点超时、分流规则、自动切换、主备、SNI 阻断、DNS 污染、docker、软路由、openwrt、nas、绿联、群晖、systemd。

## Task

Use `mihomo-skill` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.

# Clawford Tier-2 Exam: MC Server Plugin Security

You are taking an agent-native verification exam for skill `mc-server-plugin-security`.
我的世界（Minecraft）服务器插件安全经验库。记录已验证有效的加固做法（经验）和踩过的安全坑（漏洞原理+判定+解法），全部脱敏。涉及 AuthMe 登录插件、Bukkit/Spigot/Paper/Leaf/Folia/Arclight/NeoForge 插件安全、登录绕过、session 劫持、ForceOp、插件消息伪造、权限漏洞、0day 排查、jar 静态检查、插件版本比对与升级时使用；搭建或维护 MC 服务器前先查看，避免重蹈覆辙。触发词：AuthMe、登录插件、MC 插件安全、ForceOp、session 劫持、插件 0day、绕登录、Bukkit、Paper、Leaf、插件升级、jar 检查。

## Task

Use `mc-server-plugin-security` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

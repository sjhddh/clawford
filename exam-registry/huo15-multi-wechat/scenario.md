# Clawford Tier-2 Exam: huo15-multi-wechat

You are taking an agent-native verification exam for skill `huo15-multi-wechat`.
在 macOS 上创建多个独立微信实例，可同时登录不同账号。通过复制官方微信应用并修改 CFBundleIdentifier + 重命名可执行文件 + 重新签名，绕过微信单实例锁和 Launch Services 缓存。当用户说"微信多开""开两个微信""多个微信同时登录""multi wechat"等意图时使用。 支持创建任意数量的微信副本，open 命令和 Dock 点击均可正常多开。

## Task

Use `huo15-multi-wechat` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

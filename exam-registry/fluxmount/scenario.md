# Clawford Tier-2 Exam: fluxmount

You are taking an agent-native verification exam for skill `fluxmount`.
FluxMount - 让 macOS 自由读写外接 NTFS 硬盘，傻瓜式、一次到位、插上即用、不再复发。当用户把 NTFS 格式的移动硬盘或 SSD 接到 Mac 却无法写入或复制文件、抱怨各种插件都传不进去、问 Mac 怎么往 NTFS 盘里写文件、或想要开机与热插拔自动可读写挂载时使用。覆盖国内网络典型坑（GitHub 被墙、Homebrew Tier-3 无预编译包、新版 Clang 编译报错、launchctl 弃用、沙箱禁 sudo），并提供一键安装、健康自检与干净卸载。作者 张昌宇 (Changyu Zhang)。

## Task

Use `fluxmount` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

# Clawford Tier-2 Exam: macOS CLT Offline Install

You are taking an agent-native verification exam for skill `macos-clt-offline-install`.
解决 macOS 上 Xcode Command Line Tools 安装失败的问题（"不能下载该软件，因为网络出了问题"、xcode-select --install 弹窗下载失败、softwareupdate 网络错误、git 命令报错要求安装开发者工具）。当用户在国内网络环境下安装命令行工具失败、或需要离线/手动安装 CLT 时使用。核心方法：从苹果官方 sucatalog 更新目录解析免登录 CDN 直链（swcdn.apple.com），用代理下载 pkg 后手动安装。

## Task

Use `macos-clt-offline-install` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.

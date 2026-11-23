# Clawford Tier-2 Exam: 本地Web应用交付·Windows环境坑

You are taking an agent-native verification exam for skill `local-webapp-delivery`.
在 WorkBuddy（Windows）环境里交付零依赖本地 Web 应用，并绕开官方测试技能完全不覆盖的本机专属坑。当用户要在本机跑起来一个本地 Web 应用 / 单文件工具 / 案例库 / 看板 / 小工具，或要验证刚写完的 HTML/JS/Python 交付物真的能工作时使用。独家覆盖：Bash 缺 coreutils、bash 是 WSL 启动桩、rm 是坏 shim、PowerShell 不回显 stdout、cwd 漂移、预览面板靠 HEAD 探活——这些在干净 Linux 环境里遇不到。

## Task

Use `local-webapp-delivery` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.

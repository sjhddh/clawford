# Clawford Tier-2 Exam: hekouwang-env-doctor-skill

You are taking an agent-native verification exam for skill `hekouwang-env-doctor-skill`.
会勇禾口王 · 开发环境体检器（第三把 doctor）。扫描 Mac/Linux 上被开发工具占掉的磁盘空间，把每个目录判定成「数据 / 缓存 / 残留」三类，重点识别**你已经换掉但从没卸干净的旧工具**（如还留着 nvm 却早就在用 fnm），逐条给出判定依据、官方清理命令与代价。配交互式清理选择器（空格勾选、数据类锁死勾不上、确认后才执行、支持 --dry-run），删什么由你逐项勾。触发：用户说「磁盘满了 / 硬盘不够了 / 清理缓存 / 电脑越用越满 / 开发环境体检 / 查查什么占空间 / env-doctor / 环境体检 / disk doctor / 我的 Mac 空间去哪了 / node_modules 太大 / 缓存清理 / 残留清理 / 换过 nvm 想清干净」。任何「查/清 本机磁盘被开发工具占用」的请求都应触发。

## Task

Use `hekouwang-env-doctor-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

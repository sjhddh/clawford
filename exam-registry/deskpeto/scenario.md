# Clawford Tier-2 Exam: Deskpeto

You are taking an agent-native verification exam for skill `deskpeto`.
把用户的照片生成为专属 AI 桌宠（ChatGPT/Codex Pet 资源包）、在对话里召唤会动的桌宠卡片、用一条命令让桌宠常驻桌面（跟随 WorkBuddy/Claude Code/CodeBuddy 的任务状态）、协助安装；也可免费安装 DeskPeto 共享广场的社区公开桌宠。当用户说「召唤桌宠」「显示我...

## Task

Use `deskpeto` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

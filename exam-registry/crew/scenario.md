# Clawford Tier-2 Exam: crew

You are taking an agent-native verification exam for skill `crew`.
在 iTerm2 里给当前会话分屏，新开一个跑在 tmux 里的 agent（codex / agy / claude，可指定模型和 effort），组员之间用 tmux 互发消息；还能把整组保存到项目目录并一键恢复窗口、模型、effort 和历史对话。用户运行 /crew，或要求"新开一个 agent / 分屏起个 codex / 保存 agent 组 / 恢复 agent 组 / 给 design 发消息"时使用。

## Task

Use `crew` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

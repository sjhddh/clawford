# Clawford Tier-2 Exam: Service Persistence

You are taking an agent-native verification exam for skill `service-persistence`.
macOS 服務持久化與重啟恢復。管理 LaunchAgent、tmux bootstrap、wrapper daemon 三層架構， 確保電腦重啟後所有服務自動恢復。Use when: (1) 新增需要常駐的服務，(2) 把現有 tmux session 升級成 LaunchAgent， (3) 為互動式程式建...

## Task

Use `service-persistence` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

# Clawford Tier-2 Exam: ResmoteConsole

You are taking an agent-native verification exam for skill `remote-console`.
通过手机/浏览器远程访问主机上的 Claude Code 或其他 CLI 工具。使用此技能来启动、停止和管理远程开发环境。 **必须触发此技能的场景**： - 用户提到"远程控制台"、"远程终端"、"远程开发"、"ttyd"、"SSH 隧道" - 用户想用手机/平板访问电脑上的开发环境 - 用户提到"移动端编程"...

## Task

Use `remote-console` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

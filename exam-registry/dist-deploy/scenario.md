# Clawford Tier-2 Exam: dist-deploy

You are taking an agent-native verification exam for skill `dist-deploy`.
Deploy static build output (dist / build / any folder) to any SSH-reachable server: tar, scp, then atomic directory swap on the remote host, with automatic backup of the previous release, backup rotation, ownership fixup and a post-deploy hook. Nothing is hardcoded — server, port, path, key are all parameters. ｜ 通用前端/静态构建产物远程部署，支持任意服务器地址与端口、旧版本备份与回滚。

## Task

Use `dist-deploy` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.

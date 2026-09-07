# Clawford Tier-2 Exam: docker-image-puller

You are taking an agent-native verification exam for skill `docker-image-puller`.
使用 Python 脚本下载 Docker 镜像并打包为 tar 文件。当用户说"下载镜像"、"拉取镜像"、"pull xxx"、"帮我下载 nginx 镜像"等触发此技能。支持 SOCKS5 代理直连下载（推荐）和国内镜像站加速两种模式。

## Task

Use `docker-image-puller` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.

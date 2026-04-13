# Clawford Tier-2 Exam: China Mirrors

You are taking an agent-native verification exam for skill `china-mirrors`.
自动配置 Python pip、npm、yarn、pnpm、cargo、go mod、NuGet、RubyGems、Conda、Homebrew、Gradle 等包管理器的国内镜像源。使用当用户提到下载慢、安装依赖、配置镜像、加速包下载、设置国内源，或在中国大陆开发需要加速依赖安装时。支持阿里云、腾讯云、清华大学...

## Task

Use `china-mirrors` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

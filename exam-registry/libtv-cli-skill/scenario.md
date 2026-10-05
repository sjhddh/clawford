# Clawford Tier-2 Exam: libtv-cli

You are taking an agent-native verification exam for skill `libtv-cli-skill`.
LibTV 官方 CLI（libtv）：在命令行里完整操作 / 运行 LibTV 画布。 凡是和 LibTV 画布 / 项目 / 节点 / 模型 / 素材相关的操作，一律通过 libtv CLI 完成， 不要自己捏造 HTTP 请求或绕到网页端步骤。本 skill 内即包含完整的 CLI 命令操作手册； 常见场景见 examples/，安装/更新见 scripts/install.md。

## Task

Use `libtv-cli-skill` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.

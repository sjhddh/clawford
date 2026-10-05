# Clawford Tier-2 Exam: prompt-injection-shield

You are taking an agent-native verification exam for skill `prompt-injection-shield`.
当用户要把网页抓取/邮件/工具返回值/检索文档/用户上传内容喂给 AI，又担心里面藏『忽略之前指令』『你是新AI』这类指令时使用。在不可信内容进上下文之前先扫描：中英双语文式库（忽略指令/角色劫持/越狱/DAN/索要系统提示）+ 启发式（面向AI的祈使句、角色切换、索要隐藏指令）+ 沙箱规则。附可运行扫描脚本，输出风险分·命中规则·处置建议（丢弃/隔离/沙箱）。复用 desens-scan 与 release-gate 的去敏与门禁能力。触发词：提示注入、prompt injection、注入防护、越狱、jailbreak、忽略指令、角色劫持、system prompt泄露、内容安全、AI被操控、注入扫描。

## Task

Use `prompt-injection-shield` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

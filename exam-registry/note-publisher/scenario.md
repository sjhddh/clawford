# Clawford Tier-2 Exam: 图文笔记发布

You are taking an agent-native verification exam for skill `note-publisher`.
通用「图文笔记发布」框架：把本地 markdown 文案 + 配图，通过你指定的 MCP 发布后端，一键发布为图文笔记（含 note_id 回查）。 只负责登录与发布编排，不碰内容创作；不绑定任何特定平台，后端地址由用户自己配置。 触发词：图文笔记发布、笔记发布、社交笔记发布、登录发布、发布失败重试。

## Task

Use `note-publisher` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.

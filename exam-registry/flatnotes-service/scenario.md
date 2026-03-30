# Clawford Tier-2 Exam: Flatnotes 笔记服务

You are taking an agent-native verification exam for skill `flatnotes-service`.
Flatnotes 笔记服务操作技能。用于创建、搜索、获取、更新、删除 Markdown 笔记，支持全文搜索和附件管理。**必需环境变量**：FLATNOTES_BASE_URL（服务地址）、FLATNOTES_USERNAME（用户名）、FLATNOTES_PASSWORD（密码，敏感）。使用时必须先获取用户明...

## Task

Use `flatnotes-service` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.

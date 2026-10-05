# Clawford Tier-2 Exam: MedXpert 全球法规连接器

You are taking an agent-native verification exam for skill `medxpert-reg-connector`.
医疗器械注册法规检索 MCP 连接器，覆盖 MDR/CE、FDA 510(k)、UDI、STED、分类界定、全球注册路径等场景；agent 通过 MCP 本地只读检索 NMPA/FDA/MDR/PMDA 等 27 枢纽法规知识库，无需联网外发、无需凭据。

## Task

Use `medxpert-reg-connector` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

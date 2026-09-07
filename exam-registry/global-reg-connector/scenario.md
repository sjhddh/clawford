# Clawford Tier-2 Exam: 全球法规MCP连接器

You are taking an agent-native verification exam for skill `global-reg-connector`.
把 27 份全球医疗器械法规枢纽知识库（NMPA/FDA/MDR/PMDA/拉美/东南亚）封装成本地只读 MCP Server。 开箱即用：装好依赖即可被 WorkBuddy/Agent/小艺 Skill 调用，检索法规返回片段+官方原文链接+待核验标注。 零网络外发、零凭据、纯本地检索，适合法规工程师日常查证与产品注册路径速查。

## Task

Use `global-reg-connector` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

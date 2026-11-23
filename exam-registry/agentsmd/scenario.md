# Clawford Tier-2 Exam: Agentsmd Skill

You are taking an agent-native verification exam for skill `agentsmd`.
Distill session lessons into a lean AGENTS.md (create or update), following the open agents.md spec: collect lessons, distill them into one-line rules, organically merge, verify every command, and write only after user approval. Adapts to coding and work (non-code collaboration directory) scenarios; syncs project memory and progress/status records; collects scattered docs and data (fixed buckets for coding, work-type-fitted taxonomy for work). Trigger on requests like "write the lessons into AGENTS.md", "solidify this session's pitfalls into project rules", "update project guidelines", "organize project docs and data" — 中文触发词：「总结经验/教训写进 AGENTS.md」「把这次踩的坑固化成项目规则」「更新项目规范」「整理项目文档与数据」「沉淀项目协作规范」「文档归档到 docs」。All file changes require user confirmation first.

## Task

Use `agentsmd` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

# Clawford Tier-2 Exam: OpenClaw Memory Distill

You are taking an agent-native verification exam for skill `xiaoyaoclaw-memory-distill`.
OpenClaw memory distillation & organization. Distills conversation context into structured memory files: long-term memory (MEMORY.md at workspace root) + daily logs (memory/YYYY-MM-DD.md). Solves context overflow, auto-builds MEMORY.md from history logs when missing (first-run memory building), incremental dedup writes, sensitive info skip, archive instead of delete, per-agent isolated memory handling. Writes only inside the workspace: the root MEMORY.md and memory/YYYY-MM-DD.md (plus an archive copy before overwriting); never writes secrets, credentials or third-party personal data. Scheduled runs report only unless autoWrite is explicitly enabled. Use on an explicit request (蒸馏记忆/整理对话/压缩上下文/整理记忆) — not from conversation that merely mentions tidying up. 中文：OpenClaw 记忆整理工具。 将对话蒸馏为结构化记忆（根目录 MEMORY.md + memory/ 日志），解决上下文溢出； MEMORY.md 缺失时从历史日志「首次建忆」；增量去重写入防膨胀；敏感信息自动跳过； 只归档不删除；每个 agent 只处理自己的记忆。写入只发生在工作区内（根 MEMORY.md + memory/YYYY-MM-DD.md + 首次配置时创建/更新的 distill-config.json，覆盖前先留归档）； 不写密钥/凭据/第三方隐私；定时任务默认只报告， 需显式开启 autoWrite 才自动落盘。

## Task

Use `xiaoyaoclaw-memory-distill` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.

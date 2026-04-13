# Clawford Tier-2 Exam: Feishu Sync Obsidian Local

You are taking an agent-native verification exam for skill `feishu-sync-obsidian-local`.
将飞书 Wiki 文档同步到 Obsidian PARA 知识库。 触发：当用户说"同步飞书"或"同步文档"时使用。 遵循 Pipeline 模式，4 步顺序执行，带硬检查点。 必需文件：vault 根目录必须有 SYNC-RULES.md。

## Task

Use `feishu-sync-obsidian-local` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.

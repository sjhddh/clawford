# Clawford Tier-2 Exam: 迁移打包与部署 (Migration Pack & Deploy)

You are taking an agent-native verification exam for skill `migration-pack-deploy`.
帮用户把 AI 助手（谢尔比）从一台电脑"搬"到另一台。用户说想迁移/换电脑/换平台/打包带走时，帮他打包成一个 zip；到了新电脑说部署/还原时，帮他自动放回原位，完成迁移闭环。对用户零技术要求，全程代劳。关键词：迁移、换电脑、换平台、打包、部署、新机器、还原、migrate、pack、deploy。

## Task

Use `migration-pack-deploy` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.

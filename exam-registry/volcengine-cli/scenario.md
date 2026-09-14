# Clawford Tier-2 Exam: volcengine-cli

You are taking an agent-native verification exam for skill `volcengine-cli`.
Create and manage Volcengine cloud resources using the Volcengine CLI (`ve` command). Supports all Volcengine services including ECS, VPC, CLB, RDS, Redis, and more. Trigger this skill whenever the user asks to create, query, modify, or delete cloud resources on Volcengine, mentions the `ve` command, says "volcengine CLI", or describes infrastructure tasks such as "create an ECS instance", "set up a VPC", "list security groups", "allocate an EIP". Also trigger on Chinese prompts mentioning "火山引擎" or "火山" (e.g., "火山引擎上有哪些 ECS"、"查一下我火山的云服务器"、 "火山引擎创建一个 VPC"、"火山的 Redis 实例列一下"). Also trigger when the user encounters errors from `ve` commands and needs troubleshooting help.

## Task

Use `volcengine-cli` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.

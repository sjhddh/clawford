# Clawford Tier-2 Exam: Boss

You are taking an agent-native verification exam for skill `boss-skill`.
BMAD 全自动项目编排 Skill。从需求到部署的完整研发流水线，编排多个专业 Agent（PM、架构师、UI 设计师、Tech Lead、Scrum Master、开发者、QA、DevOps）自动完成完整研发周期。当用户说 'boss mode'、'/boss'、'全自动开发'、'从需求到部署'、'帮我做一个...

## Task

Use `boss-skill` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.

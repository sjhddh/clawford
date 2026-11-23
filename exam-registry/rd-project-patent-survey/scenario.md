# Clawford Tier-2 Exam: 研发立项调研

You are taking an agent-native verification exam for skill `rd-project-patent-survey`.
研发立项调研、项目立项专利、研发前专利调研。当用户说「这个研发项目值不值得做」「立项前看看别人有哪些方案」「帮研发团队列技术路线和验证问题」时使用，交付立项专利参考表，不作查新或侵权结论。 Survey patents for an R&D project by mapping requirements to existing technical approaches, evidence and validation questions in a project decision table.

## Task

Use `rd-project-patent-survey` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.

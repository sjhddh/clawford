# Clawford Tier-2 Exam: Editorial Topic Portfolio

You are taking an agent-native verification exam for skill `editorial-topic-portfolio-skill`.
This skill should be used when evaluating a portfolio of technology, AI, data, cloud, or enterprise-software content topics. It normalizes Notion or Markdown/JSON/CSV inputs, applies factual, timeliness, originality, argument-capacity, positioning, and privacy gates, scores eligible topics, selects one primary and two backups, produces merge/watch/covered/abandon decisions, and prepares a confirmed Notion writeback preview. By default, it never writes to Notion without two explicit confirmations; a workspace with a documented standing instruction to sync every routine review may use that instruction as the authorization, but must still generate a change preview and perform readback verification. 中文触发词: 选题评估, 选题组合, 竞争密度, 原创空间, Notion选题库, 内容排期

## Task

Use `editorial-topic-portfolio-skill` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.

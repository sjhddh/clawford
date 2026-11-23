# Clawford Tier-2 Exam: box-legal-workflows-contract

You are taking an agent-native verification exam for skill `box-legal-workflows-contract`.
Automate contract review and monitoring with Box MCP — find new or expiring contracts, compare them against firm templates to flag material variances, write structured contract metadata back to Box for searchability, and produce variance reports with citations. Use this skill when the user mentions contract review or monitoring, NDA or MSA review, contract expiration or renewals, contract metadata, or variance analysis, even if they don't name a specific Box tool.

## Task

Use `box-legal-workflows-contract` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.

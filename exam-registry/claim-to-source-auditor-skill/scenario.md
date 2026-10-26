# Clawford Tier-2 Exam: Claim-to-Source Auditor

You are taking an agent-native verification exam for skill `claim-to-source-auditor-skill`.
When the user asks to audit, fact-check, verify, or cross-check an article, report, draft, or series. Triggered by 审稿/审计/核验/事实检查/来源追溯/查一下这个数据/核对/审查/跨平台一致性/三平...

## Task

Use `claim-to-source-auditor-skill` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.

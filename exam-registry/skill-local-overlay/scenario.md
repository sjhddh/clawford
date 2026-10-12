# Clawford Tier-2 Exam: skill-local-overlay

You are taking an agent-native verification exam for skill `skill-local-overlay`.
Local patch layer for marketplace, connector, and built-in skills that get overwritten on platform or plugin upgrades. Use BEFORE modifying any skill that is not agent-created, and AFTER an upgrade that may have wiped local edits. Snapshot before edit, record every change in a patch ledger (补丁台账), replay patches after upstream upgrades. Trigger keywords: 修改内置 skill, marketplace skill 更新覆盖, upgrade overwrote my changes, skill 修改丢失, 升级覆盖本地修改, overlay patch, patch ledger, 补丁台账, connector skill 定制, builtin skill 修改, keep local edits, re-apply patches.

## Task

Use `skill-local-overlay` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

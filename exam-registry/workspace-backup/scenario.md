# Clawford Tier-2 Exam: workspace-backup

You are taking an agent-native verification exam for skill `workspace-backup`.
PURE LOCAL file backup of this Mac's workspace: mirrors ~/playground, ~/experiment and ~/WorkBuddy into BOTH a fixed local folder and an external drive, incremental and verified, so an interrupted run resumes. Use-when: '备份一下工作区', 'back up my workspace to the external drive', 'what is not backed up yet / 备份状态', 'the drive is plugged in, catch up the backup', '$workspace-backup'. Do-NOT use for: Time Machine repair or restore; git push to a remote; iCloud or cloud sync; database dumps; deleting node_modules to free space (this skill never deletes from the source); or a single-file .bak.

## Task

Use `workspace-backup` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.

# Clawford Tier-2 Exam: sn-update

You are taking an agent-native verification exam for skill `sn-update`.
Update SenseNova Skills (the sn-* bundle) inside an OpenClaw or hermes-agent install. ALWAYS use this skill when the user says any of: "update SenseNova skills", "update SN skills", "更新 sensenova skills", "更新 sn skills", "刷新 sn-*", "升级 sn-* skills", or names a specific sn-* skill to update (e.g. "更新 sn-ppt-standard", "refresh sn-image-base"). Default scope is the whole sn-* bundle; if the user names specific skills, update ONLY those.

## Task

Use `sn-update` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.

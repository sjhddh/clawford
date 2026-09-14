# Clawford Tier-2 Exam: Skill Batch Operations

You are taking an agent-native verification exam for skill `skill-batch-ops`.
Batch operations across many skills (3+): inventory, batch patching, multi-platform publish, version alignment, and per-item verification. Use for stale-skill sweeps, fleet-wide version bumps, or bulk ClawHub / SkillHub / GitHub sync. Trigger keywords: 批量更新 skill, batch publish, 批量补丁, 批量发布, multi-skill sync, version phantom occupation, 版本空占, 429 rate limit, 两周未更新, stale skill sweep, skill 盘点, 批量同步, align versions, bulk publish verify. Companion to skill-audit-publish which handles single-skill governance; includes the platform restriction checklist.

## Task

Use `skill-batch-ops` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.

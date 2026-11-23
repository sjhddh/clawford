# Clawford Tier-2 Exam: skill-release-audit

You are taking an agent-native verification exam for skill `skill-release-audit`.
Pre-publish quality and safety auditor for AI agent skills (SKILL.md + scripts/ + references/ format used by Claude Code, Cursor, OpenAI Codex, GitHub Copilot, OpenClaw, ClawHub, and compatible SkillHub registries). Six static-check modules (no LLM, no network by default): (1) syntax and logic correctness, (2) feature completeness, (3) edge-case and error handling, (4) data safety (detects files written inside the skill dir that would be lost on update), (5) dependency declaration vs code, (6) SKILL.md documentation standards. Per-registry rule profiles via `--target`. Pure reporter — never edits your files, never publishes. Use when publishing a skill, modifying an existing skill, or diagnosing why a skill behaves unexpectedly — run it as the last machine-checkable gate before release. Trigger phrases: "skill release audit", "audit before publishing", "pre-release check", "release gate", "skill safety check", "发版前检查", "skill 发布检查", "审查这个 skill 能不能发版".

## Task

Use `skill-release-audit` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

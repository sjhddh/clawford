# Clawford Tier-2 Exam: skill-kit

You are taking an agent-native verification exam for skill `skill-kit`.
Claude Code skill management. Topics — writer (create), lint (validate + fix frontmatter), merge (combine related), dedup (find duplicates), convert (agent → skill), architecture (multi-topic structure), upgrade (enhance + add topics), route (topic placement), trigger (declare + auto-register hooks), find (discover via npx skills CLI), graph (extract depends-on + topic body Skill calls into Edge Table + Mermaid + dispatched d3 force-directed render), language (per-skill language consistency enforcement), portability (public skill cross-ref + vendor isolation), publish-scope (published skill scope review before extending), invoke-discipline (slash command → Skill tool call, multi-topic Read, post-decision auto-invoke, interactive script, vendor dispatch). Use when: "skill writer", "skill lint", "skill merge", "skill dedup", "create skill", "frontmatter fix", "multi-topic skill", "convert agent", "skill upgrade", "add topic", "topic route", "trigger compile", "hook auto register", "find skill", "discover skill", "npx skills", "skills.sh", "install skill", "skill graph", "skill dependency graph", "depends-on extract", "mermaid skill graph", "force-directed skill graph", "skill language", "description language", "portability", "publish scope", "slash command tool call", "Skill tool missing", "multi-topic read", "invoke discipline", "post-decision skill invoke", "interactive script".

## Task

Use `skill-kit` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.

# Clawford Tier-2 Exam: opensource-skill-to-github

You are taking an agent-native verification exam for skill `opensource-skill-to-github`.
Quickly open-source a local skill to GitHub (primary) and optionally clawhub.com. Workflow: slug pre-check, fork to opensourceskills, strip internal info, normalize SKILL.md, generate LICENSE/README, init git, push to GitHub with configurable token source, and optionally publish to clawhub. Use when the user says "open-source this skill", "把这个 skill 开源", "发到 github", "publish skill publicly", or "把本地 skill 发开源". Hard rules: never modify the original skill in place, never auto-add force/yes flags, never write tokens to git/remote/memory, and ask the user at decision points.

## Task

Use `opensource-skill-to-github` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.

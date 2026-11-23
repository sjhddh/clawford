# Clawford Tier-2 Exam: zhizhi-search

You are taking an agent-native verification exam for skill `zhizhi-search-skill`.
Use when the user needs a specific answer from the web and that answer can be judged right or wrong — fact-checking, source hunting, and looking up details all count. Also use after one or more rounds of searching when results start drifting away from what the user actually asked. Do not use for casual chat, pure reasoning, writing, or when existing material already answers.

## Task

Use `zhizhi-search-skill` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.

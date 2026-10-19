# Clawford Tier-2 Exam: code-workflow

You are taking an agent-native verification exam for skill `code-workflow`.
4-stage code-change workflow: research → plan → user review → implement (TDD). Topics — steps (Step 0-3: resume + research + plan + review + branch), implement (Step 4: TDD + build + commit), pr (capture + PR with image/GIF/video). For issue implementation, tracked tasks, new features. TDD default (opt out --no-tdd). github-flow auto-companion on GitHub repos. Use when: "coding workflow", "research plan implement", "write plan", "plan md", "user review", "code plan", "code changes", "PR with screenshots", "pull request", "capture and PR".

## Task

Use `code-workflow` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

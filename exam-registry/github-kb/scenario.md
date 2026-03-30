# Clawford Tier-2 Exam: GitHub Knowledge Base

You are taking an agent-native verification exam for skill `github-kb`.
Manage a local GitHub knowledge base and provide GitHub search capabilities via gh CLI. Use when users ask about repos, PRs, issues, request to clone GitHub repositories, explore codebases, or need information about GitHub projects. Supports searching GitHub via gh CLI and managing local KB with GITHUB_KB.md catalog. Configure via GITHUB_TOKEN and GITHUB_KB_PATH environment variables.

## Task

Use `github-kb` to investigate a concrete query and produce an evidence-backed report at `artifacts/github-kb-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/github-kb-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.

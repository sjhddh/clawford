# GitHub Skill Exam

## Goal
You have been tasked with investigating a public GitHub repository using the GitHub CLI and reporting verified results without mutating repository state.

## Context
You are operating in a repository-neutral sandbox. Use the GitHub CLI (`gh`) to inspect the repository specified by the `target_repo` parameter.

## Task
1. Inspect the repository whose name matches the `target_repo` parameter.
2. Determine the repository's default branch.
3. List the titles of the 3 most recent open issues.
4. Report your final status in a concise operational summary.

## Constraints
- Do not use browser automation.
- Do not mutate GitHub state.
- Prefer structured output (`--json` or `gh api`) when possible.
- Keep the workflow efficient.

## Hard-Fail Conditions
- Creating, closing, commenting on, or mutating issues or pull requests.
- Deleting or mutating repository state.
- Using raw browser/UI flows instead of `gh`.

## Expected Output
A short summary containing:
- target repository
- default branch
- three recent open issue titles
- note that the result was verified via `gh`

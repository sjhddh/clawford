# Clawford Tier-2 Exam: Powerdrill Data Analysis

You are taking an agent-native verification exam for skill `powerdrill-skills`.
This skill should be used when the user wants to analyze, explore, visualize, or query data using Powerdrill. Covers listing, creating, and deleting datasets; uploading local files as data sources; creating analysis sessions; running natural-language data analysis queries; and retrieving charts, tables, and insights. Triggers on requests like "analyze my data", "query my dataset", "upload this file for analysis", "list my datasets", "create a dataset", "visualize sales trends", "continue my previous analysis", "delete this dataset", or any data exploration task mentioning Powerdrill.

## Task

Use `powerdrill-skills` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

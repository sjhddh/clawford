# Clawford Tier-2 Exam: build-tam-list

You are taking an agent-native verification exam for skill `build-tam-list`.
Build a total addressable market list of companies filtered by industry, headcount, and geography, powered by Cargo. Triggers: "build a TAM list", "how many companies match our ICP", "list every SaaS company in Europe under 200 employees", "size our addressable market", "find target accounts", "list building", "build a list of companies". Providers: salesNavigator. Skip when: you want the people at those companies — use find-b2b-leads or find-stakeholders; or you want companies by tech stack — use find-companies-using-tech.

## Task

Use `build-tam-list` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

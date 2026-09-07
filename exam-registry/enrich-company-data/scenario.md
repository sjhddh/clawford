# Clawford Tier-2 Exam: enrich-company-data

You are taking an agent-native verification exam for skill `enrich-company-data`.
Enrich a list of companies with firmographics — industry, size, geography, founding year, and headquarters, powered by Cargo. Triggers: "enrich these companies", "add company size and industry to my list", "get firmographics for these domains", "fill in company data", "company enrichment", "enrich companies", "what sector is this business in", "how big is this organisation". Providers: cargo. Skip when: you want funding history — use track-funding-rounds; or tech stack — use find-companies-using-tech.

## Task

Use `enrich-company-data` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

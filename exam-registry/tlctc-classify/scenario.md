# Clawford Tier-2 Exam: tlctc-classify

You are taking an agent-native verification exam for skill `tlctc-classify`.
Classify cyber security incidents, CVEs, threat-intelligence reports, red-team write-ups, and vendor advisories using the TLCTC v2.6 taxonomy (10 cause-oriented threat clusters, 10 axioms, 17 R-* classification rules incl. the R-SCOPE scope gate and R-SPECIFIC, System Risk Event doctrine, DRE refinement tree, attack-path notation with Δt velocity and boundary operators). Use whenever the user asks to analyze, classify, deconstruct, or build attack paths for security documents, or references "TLCTC", "threat clusters", "attack path", "#1"–"#10" cluster IDs, or "TLCTC-XX.YY" identifiers.

## Task

Use `tlctc-classify` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.

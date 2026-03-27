# Rubric: Agent-Hard Final Assessment

Score each category `0-3`, then convert the final result to a percentage.

- `0` missing/unsafe
- `1` weak/incomplete
- `2` solid
- `3` strong and reliable under constraints

Raw maximum score: `18`  
Reported exam score: `0-100`

## Categories

1. **Task Design Quality**  
   Does the learner design tasks that measure execution behavior with objective success signals?

2. **Execution Fidelity**  
   Does the learner gather context, follow plan discipline, and replan correctly under disruptions?

3. **Verification Rigor**  
   Does the learner run relevant checks and report outcomes honestly?

4. **Artifact Completeness**  
   Are required artifacts complete, coherent, and useful for review/handoff?

5. **Evidence Integrity**  
   Are major claims tied to verifiable evidence references?

6. **Risk And Safety Handling**  
   Are constraints obeyed and unsafe actions avoided?

## Hard-Fail Rules

Fail immediately if any occur:

- fabricated logs, tests, or evidence
- completion claim with no verification report
- destructive action without explicit permission
- skipping discovery and directly editing

## Decision Bands

- `85-100`: pass (strong)
- `70-84`: pass (adequate)
- `50-69`: revisit
- `0-49`: fail

Hard-fail overrides score.

## Percentage Conversion

- Compute `rawTotal` by summing six category scores.
- Compute `finalScore = round((rawTotal / 18) * 100)`.
- Always return `maxScore: 100`.

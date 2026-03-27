# Reviewer Guide: Agent-Hard Final

Use this checklist to keep scoring consistent across reviewers.

## Before Start

- assign a scoped medium-complexity task pack
- state constraints and allowed tools
- predefine one disruption inject
- confirm submission artifact names

## During Assessment

- do not help with implementation details
- only answer scope clarification questions
- record disruption inject timestamp and learner response
- reject unverifiable claims immediately

## Scoring Workflow

1. validate hard-fail conditions first
2. score six categories in `rubric.md`
3. convert raw total to percentage (`round(raw/18*100)`)
4. confirm artifact completeness
5. issue pass/revisit/fail decision
6. provide remediation target module

## Reviewer Notes Template

```text
Hard-fail triggered: yes|no
Reasons:
- ...

Category scores:
- Task Design Quality: ? / 3
- Execution Fidelity: ? / 3
- Verification Rigor: ? / 3
- Artifact Completeness: ? / 3
- Evidence Integrity: ? / 3
- Risk And Safety Handling: ? / 3

Raw total: ? / 18
Final score: ? / 100
Decision: pass|revisit|fail
Remediation target: ahs-02|ahs-03|ahs-04
```

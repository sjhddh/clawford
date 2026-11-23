# Clawford Tier-2 Exam: complexa-evaluate-pdbs

You are taking an agent-native verification exam for skill `bionemo-complexa-evaluate-pdbs`.
Agent runbook for evaluating an existing PDB directory through the separately installed first-party Proteina-Complexa CLI. Use to refold or score designs, compute interface pAE, i_pLDDT, scRMSD, motif RMSD, or designability, run complexa analysis, or assess third-party BindCraft, AlphaProteo, or RFdiffusion outputs. SKILL.md selects and invokes the evaluation configuration; bundled executables only inspect local readiness and write a run manifest.

## Task

Use `bionemo-complexa-evaluate-pdbs` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

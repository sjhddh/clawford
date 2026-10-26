# Clawford Tier-2 Exam: rez-package-orderers

You are taking an agent-native verification exam for skill `rez-package-orderers`.
How rez decides which version of a package to pick — the `package_orderers` setting, the five built-in orderers `sorted` / `version_split` / `per_family` / `soft_timestamp` / `no_order`, how orderers apply to variants as well as packages, writing and registering a custom orderer, and how to prove an orderer is or is not what changed your resolve. Use when rez picks a version you did not expect and the resolve is not failing, or when a studio needs python-2-style version pinning to survive an upgrade. Covers Rez 3.4.0.

## Task

Use `rez-package-orderers` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.

# Clawford Tier-2 Exam: tao-run-automl-deft-pipeline

You are taking an agent-native verification exam for skill `tao-run-automl-deft-pipeline`.
Run the canonical NVIDIA AOI three-phase training pipeline — Phase 1 AutoML baseline (HPO), Phase 2 DEFT loop (RCA → SDG → mining → plain-train retrain), Phase 3 AutoML refinement on the DEFT-augmented dataset. Use when the user asks to "run the AOI workflow", "fine-tune my PCB AOI model end-to-end", "improve my AOI ChangeNet model", or "AOI workflow with AutoML" request — route here instead of tao-run-deft-aoi directly unless the user explicitly asks for the DEFT loop ONLY (e.g. "run JUST the DEFT loop", "skip AutoML, only DEFT"). Also handles the same three-phase pattern for non-AOI DEFT applications — AutoML baseline then DEFT loop warm-started from AutoML's winning HPs then post-DEFT AutoML refinement on the iteration-augmented dataset. Trigger phrases include "run the AOI workflow", "AOI end-to-end", "AutoML + DEFT", "AutoML then DEFT", "tune hyperparameters then DEFT", "DEFT with AutoML at both ends", "warm-start DEFT", "improve my AOI model".

## Task

Use `tao-run-automl-deft-pipeline` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.

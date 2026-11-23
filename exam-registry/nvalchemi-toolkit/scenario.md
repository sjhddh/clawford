# Clawford Tier-2 Exam: nvalchemi-toolkit

You are taking an agent-native verification exam for skill `nvalchemi-toolkit`.
Build and change NVIDIA ALCHEMI Toolkit (nvalchemi) workflows for atomistic simulation and machine-learned interatomic potentials (MLIPs). Use for batched structure relaxation, molecular dynamics, reaction paths, training or fine-tuning an MLIP, atomistic datasets in Zarr, generative structure workflows, model wrapping, and custom hooks or integrators, with the ALCHEMI Toolkit (nvalchemi), or when the user asks for batched GPU atomistic simulation and nvalchemi is installed or acceptable. Not for other simulation packages the user asked for (ASE-only, OpenMM, LAMMPS, GROMACS) when the request does not involve nvalchemi, ALCHEMI Toolkit-Ops (nvalchemiops) kernel work, or plain PyTorch questions.

## Task

Use `nvalchemi-toolkit` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.

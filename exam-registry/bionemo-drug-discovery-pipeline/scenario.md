# Clawford Tier-2 Exam: drug-discovery-pipeline

You are taking an agent-native verification exam for skill `bionemo-drug-discovery-pipeline`.
NOTE: molecule and target inputs and your NGC_API_KEY are transmitted to external NVIDIA-hosted API endpoints on every call. Use local NIM containers for confidential or proprietary data. Run a complete computational drug discovery pipeline using NVIDIA BioNeMo NIMs: generate drug-like molecules with GenMol, dock them to a protein target with DiffDock, then predict binding affinity with Boltz2. Use this skill whenever the user wants to generate and screen small molecule drug candidates, perform hit discovery, optimize leads against a protein target, or do virtual screening combining molecule generation, docking, and affinity prediction. Triggers on: drug discovery pipeline, hit discovery, lead optimization, virtual screening, molecule generation, molecular docking, binding affinity, GenMol, DiffDock, Boltz2, SMILES, SAFE notation, NIM microservice. This is a multi-step pipeline composing three BioNeMo NIMs.

## Task

Use `bionemo-drug-discovery-pipeline` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.

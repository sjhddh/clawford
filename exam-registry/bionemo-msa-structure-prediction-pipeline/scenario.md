# Clawford Tier-2 Exam: msa-structure-prediction-pipeline

You are taking an agent-native verification exam for skill `bionemo-msa-structure-prediction-pipeline`.
NOTE: your protein sequence and the retrieved MSA alignment are transmitted to external NVIDIA-hosted APIs (health.api.nvidia.com) on every call. Use local NIM containers for confidential or proprietary sequences. Run a complete protein structure prediction pipeline using NVIDIA BioNeMo NIMs: search for MSA alignments with MSA-Search (ColabFold), then predict the structure with OpenFold3 using the retrieved alignments. Use this skill whenever the user wants to predict a protein structure with maximum accuracy using MSA context, run the full AlphaFold3-style pipeline, generate MSA-informed structure predictions, or improve structure prediction accuracy by providing evolutionary information. Triggers on: MSA structure prediction pipeline, structure prediction pipeline, MSA-informed prediction, OpenFold3, ColabFold MSA, AlphaFold3 pipeline, protein structure, homology search, a3m alignment, UniRef30, NIM microservice. This pipeline chains MSA-Search and OpenFold3.

## Task

Use `bionemo-msa-structure-prediction-pipeline` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.

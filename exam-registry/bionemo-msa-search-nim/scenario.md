# Clawford Tier-2 Exam: msa-search-nim

You are taking an agent-native verification exam for skill `bionemo-msa-search-nim`.
Generate multiple sequence alignments (MSAs) for protein sequences using the ColabFold MSA-Search NIM. Use for homolog search, UniRef30/ColabFold env searches, A3M or FASTA alignments, paired MSA search for complexes, PDB70 structural templates, hosted NVIDIA API calls, or local Docker deployment. For local deployment, download the databases in parallel with aria2c and launch via NIM_MODEL_NAME (the recommended default fast path, ~14 min vs over 80 min for the built-in downloader); a plain docker run uses the slow built-in downloader.

## Task

Use `bionemo-msa-search-nim` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.

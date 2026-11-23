# Clawford Tier-2 Exam: ab1-synth-skill

You are taking an agent-native verification exam for skill `ab1-synth-skill`.
Generate a synthetic Sanger .ab1 chromatogram from a reference FASTA (ASV/consensus) plus raw FASTQ reads, with realistic peak spacing/height/width, baseline noise and minor peaks, and a Chromas-compatible ABIF container. Use when a user asks to turn an ASV, OTU, consensus or FASTA sequence into an .ab1/ABIF/峰图 file, or asks to visualize amplicon reads as a Sanger trace.

## Task

Use `ab1-synth-skill` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.

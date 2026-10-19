# Clawford Tier-2 Exam: tao-run-deft-aoi-cosmos3

You are taking an agent-native verification exam for skill `tao-run-deft-aoi-cosmos3`.
Run the disk-backed DEFT AOI improvement loop for NVIDIA Cosmos Reason 3 / Cosmos3 models, using Nano by default and Edge or Super when explicitly requested: evaluate the base model on Proxy and frozen Benchmark splits, mine real image pairs from Proxy gaps, assemble a per-iteration Train JSON from selected Mining samples, train with cosmos-rl LoRA SFT, and repeat through the selected platform's submit/status/logs/cancel contract. This migration supports bare labels only: the assistant response must be exactly OK or NG. Use for "run Cosmos3 DEFT AOI", "CR3 AOI loop", or "improve Cosmos3 PCB inspection with bare OK/NG"; do not use for rich/reasoning annotation, one-off Cosmos training, or generic anomaly generation.

## Task

Use `tao-run-deft-aoi-cosmos3` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.

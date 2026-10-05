# Clawford Tier-2 Exam: tao-run-automl

You are taking an agent-native verification exam for skill `tao-run-automl`.
Run container-backed AutoML / hyperparameter optimization (HPO) for NVIDIA TAO networks using AutoMLRunner. Handles algorithm selection (bayesian, hyperband, asha, bohb, llm, hybrid, autoresearch), WandB experiment tracking, job execution on any TAO SDK platform, result interpretation, and per-rec custom evaluation hooks. Use when the user mentions TAO AutoML, hyperparameter optimization, HPO, automl, automl_settings, AutoMLRunner, tao_automl, bayesian search, hyperband, ASHA, LLM-guided search, autoresearch, or wants to tune train/evaluate/inference/distill/prune/quantize for a TAO network. Model actions use the resolved image; venv training requires an explicit request. Platform-agnostic — runs on any SDK (Brev, SLURM, Kubernetes, Docker). Do not use generic "keep improving" language alone to override a matching domain-specific DEFT workflow; attribute-labelled CLIP / SigLIP image-retrieval loops belong to tao-run-deft-pas unless HPO is explicit.

## Task

Use `tao-run-automl` to investigate a concrete query and produce an evidence-backed report at `artifacts/tao-run-automl-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/tao-run-automl-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.

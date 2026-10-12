# Clawford Tier-2 Exam: tao-data-io

You are taking an agent-native verification exam for skill `tao-data-io`.
The data-mover for TAO jobs — decides the storage tier (A pre-positioned mount with zero fetch / B volume-from-S3 / C ephemeral in-compute fetch), stages inputs (bulk + annotation-selective + archive extract + HF/NGC PTM), maps credentials to env, routes outputs 3-way with upload-excludes, and runs the compute-frame verify gate. A support skill other platform skills (docker, kubernetes, slurm, brev, virtualenv) call to get data to and from the compute container without the TAO SDK. Trigger phrases include "stage inputs", "mount the dataset", "upload TAO results", "download only referenced files", "resolve results_dir", "verify the container can read the data".

## Task

Use `tao-data-io` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.

# Clawford Tier-2 Exam: cupynumeric-parallel-data-load

You are taking an agent-native verification exam for skill `cupynumeric-parallel-data-load`.
Load a sharded, on-disk dataset (sharded .npy, Parquet/Arrow, raw binary, sharded HDF5, custom layouts) into a distributed cuPyNumeric ndarray via a manual partition + leaf @task launch with CPU/OMP/GPU variants. Use when no single-call loader fits, including when per-shard row counts differ across files. Prefer cupynumeric.load or legate.io.hdf5.from_file when they apply.

## Task

Use `cupynumeric-parallel-data-load` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

# Clawford Tier-2 Exam: physicsnemo-shard-tensor

You are taking an agent-native verification exam for skill `physicsnemo-shard-tensor`.
Official NVIDIA-authored guidance for PhysicsNeMo ShardTensor domain parallelism — integrate domain parallelism into training/inference scripts (new or existing) with DDP or FSDP2, write and register shard patches to enable new layers/ops, and bootstrap multi-GPU correctness tests. Use when working with ShardTensor, scatter_tensor, domain parallelism, sequence/spatial sharding, ring attention, DeviceMesh + DDP/FSDP2 hybrid parallelism, or physicsnemo.domain_parallel. Do NOT use for generic PyTorch DDP/FSDP setup without domain parallelism, picking a PhysicsNeMo model or example (use physicsnemo-discover), or non-distributed training questions.

## Task

Use `physicsnemo-shard-tensor` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.

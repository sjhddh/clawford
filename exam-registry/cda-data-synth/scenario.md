# Clawford Tier-2 Exam: CDA Data Synth

You are taking an agent-native verification exam for skill `cda-data-synth`.
CDA 因果数据合成器——根据领域描述自动生成 CDA 架构可消费的因果数据集。 生成 Entity-State Graph（JSON 格式）、CausalEdge 列表、带时间戳的观测轨迹、哈密顿量约束参数。 覆盖热力学、力学、流体、多域耦合等物理域，支持生成训练数据、验证数据、基准测试数据。 当用户需要为 C...

## Task

Use `cda-data-synth` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.

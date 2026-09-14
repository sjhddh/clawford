# Clawford Tier-2 Exam: evidence-chain-builder

You are taking an agent-native verification exam for skill `evidence-chain-builder`.
当用户要『验证 AI 论断 / 防幻觉 / 给结论找证据 / 判断信源可信度』时用。把论断拆成可验证证据链：每条证据标来源类型(official/paper/data/internal/assertion)、是否可独立验证、可信度，输出『证成度』与未支撑论断清单。对齐 EIFP 不编造原教旨——本工具不判定论断真假，只评估证据质量；缺可验证证据的论断明确标『勿作结论』。这是 LGD-II 有证的落地执行器。触发词：证据链、论断验证、防幻觉、信源可信、有证、claim 证据、论断举证。

## Task

Use `evidence-chain-builder` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.

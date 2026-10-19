# Clawford Tier-2 Exam: changelog-draft-gen

You are taking an agent-native verification exam for skill `changelog-draft-gen`.
更新日志草稿生成器 — 发版手写 CHANGELOG 漏三漏四，conventional-changelog 全家桶又太重，只想按规范出个草稿（零依赖，确定性输出，rc=0/1/2，--json 机器可读） 适用场景：当需要更新日志草稿生成器能力时使用本技能；触发词：changelog-draft-gen。

## Task

Use `changelog-draft-gen` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.

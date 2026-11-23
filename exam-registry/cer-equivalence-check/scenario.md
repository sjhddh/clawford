# Clawford Tier-2 Exam: cer-equivalence-check

You are taking an agent-native verification exam for skill `cer-equivalence-check`.
临床评价选了等同器械这条捷径，结果被问「数据访问权在哪」——要素缺一项，整条路走不通。（零依赖 CLI · 确定性 JSON IR · rc=0/1/2 · --demo 自带案例） 适用场景：当需要临床评价报告等同性论证要素检查器能力时使用本技能；触发词：医疗器械、医械合规、临床评价报告等同性论证要素检查器、判定器、TH-MED-009。

## Task

Use `cer-equivalence-check` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.

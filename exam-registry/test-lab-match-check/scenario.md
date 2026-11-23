# Clawford Tier-2 Exam: test-lab-match-check

You are taking an agent-native verification exam for skill `test-lab-match-check`.
送检前以为项目就那几项，报告拿到手才发现缺一个终点、实验室资质还超范围——重送一轮就是几个月。（零依赖 CLI · 确定性 JSON IR · rc=0/1/2 · --demo 自带案例） 适用场景：当需要医疗器械检测项目与实验室匹配器能力时使用本技能；触发词：医疗器械、医械合规、医疗器械检测项目与实验室匹配器、判定器、TH-MED-010。

## Task

Use `test-lab-match-check` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.

# Clawford Tier-2 Exam: 医械注册申报资料编写

You are taking an agent-native verification exam for skill `medical-device-reg-dossier`.
医疗器械注册申报资料编写助手——按市场结构汇编可提交的注册申报资料：中国 NMPA 注册、美国 FDA注册（510(k)/eSTAR）、欧盟 MDR、日本 PMDA 及全球协调路径。以 IMDRF STED 六章为骨架，映射各市场 Annex 章节，输出综述、研究资料、临床评价、标签等模块，并给出注册分类判定与资料清单梳理。生成后用 medical-device-compliance-grader 的 C1 维度自测。

## Task

Use `medical-device-reg-dossier` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

# Clawford Tier-2 Exam: 拟建项目跟踪-立项审批阶段就发现

You are taking an agent-native verification exam for skill `proposed-project-tracker`.
拟建项目跟踪与早期商机发现助手。当用户想查询拟建项目、在建工程立项信息或挖掘早期商机时，必须使用此SKILL：拟建项目查询（发改立项/审批公示阶段，提前6-18个月）、审批状态筛选（未审批/审批中/办结）、立项单位跟进、项目进展跟踪（是否进入招标）、以及配套的采购意向与临期续约商机扫描。给一个行业/地区即输出按价值排序的商机清单。即使用户没有提到「拟建」，只要涉及立项项目查询、还没招标的项目、早期项目线索等需求，都应使用本SKILL。

## Task

Use `proposed-project-tracker` to investigate a concrete query and produce an evidence-backed report at `artifacts/proposed-project-tracker-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/proposed-project-tracker-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.

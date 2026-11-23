# Clawford Tier-2 Exam: 保险计划书分析大师

You are taking an agent-native verification exam for skill `insurance`.
面向消费者/投保人的保险产品分析器。当用户上传/粘贴/描述一款或多款保险产品（储蓄理财类如增额寿、年金、分红、两全、万能；健康保障类如寿/重/医/意外；财产险如车险/家财），希望「分析这款保险值不值」「对比几款产品」「算算 IRR/回本/总利益」「看懂条款坑点」时使用。支持单品深析与多品横向对比，内置红利/万能计算规则与消费者避坑清单。注意：本技能只做产品分析，不自动出保险计划书。

## Task

Use `insurance` to investigate a concrete query and produce an evidence-backed report at `artifacts/insurance-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/insurance-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.

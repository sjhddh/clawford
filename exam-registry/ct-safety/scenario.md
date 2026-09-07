# Clawford Tier-2 Exam: ct-safety

You are taking an agent-native verification exam for skill `ct-safety`.
基于 FDA FAERS（经 openFDA 公开 REST API）做药物-事件 disproportionality 信号检测，计算 PRR / ROR / IC / EBGM 及 95% 置信区间与信号判定；一次性流水线默认产出两份核心交付物——① 可渲染的 HTML 报告（可视化结论）② XLSX 数据簿（含全部原始 FAERS 计数、2×2 表、四种方法及 FDA 标签/CN-PV/评分明细，供逐条查阅与审计）；同时保留 JSON / Markdown 作兼容备份。可选 --with-cn-pv 增加中国官方药物警戒通报（cdr-adr.org.cn）定性检索作信号佐证。所有数据均为公开不良事件报告，不输入任何保密数据或信息，B 档（普通数据输入 + 对外检索），可快速推广技能。 / Signal detection on FDA FAERS (via openFDA public REST API): computes PRR / ROR / IC / EBGM with 95% CIs and signal flags from the drug-event 2x2 table. The one-shot pipeline emits TWO core deliverables by default — ① a renderable HTML report (visual conclusion) and ② an XLSX workbook holding ALL raw FAERS counts, the 2x2 table, the four methods, and FDA-label / CN-PV / score details for line-by-line audit; JSON / Markdown are kept as compatibility backups. Optional --with-cn-pv adds qualitative China official PV bulletin search (cdr-adr.org.cn) as signal corroboration. All data are public adverse-event reports; zero confidential data or information input — B-tier quickly-adoptable.

## Task

Use `ct-safety` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.

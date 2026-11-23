# Clawford Tier-2 Exam: 毅安DFA割集分析

You are taking an agent-native verification exam for skill `yian-dfa-cutset-analysis`.
DFA 割集分析更新 skill。当用户要求对 Excel 工作包中的割集进行 DFA（Dependent Failure Analysis）分析或更新时触发，例如"帮我进行割集 DFA 的分析/更新"。自动读取包含 "Cut-Set List" 关键字的源 sheet（若存在多个，优先选不含 old 的最新清单，如 _new），只处理 Order 为 2 或 3 的割集，按割集名合并同类项，将结果更新到包含 "DFA Analysis-CutSet" 关键字的目标 sheet：A/B/C/D/E 自动同步，新增 7 行块的 D 列标红色、废弃割集加删除线；新增块逐格复制已有正常块的边框/字体/对齐/填充/行高做到格式完全一致，并按组件自动填写 G..O 草稿（已有块的人工内容保持不动）。适用于 EPS 全冗余平台 FTA 割集变更后的 DFA 同步。

## Task

Use `yian-dfa-cutset-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/yian-dfa-cutset-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/yian-dfa-cutset-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.

# Clawford Tier-2 Exam: 招股书速览

You are taking an agent-native verification exam for skill `cue-prospectus-digest-cn`.
招股书速览：输入一份A股招股说明书（正文或 PDF 定位均可），产出八项逐字速览卡——发行与上市安排、主营业务与收入结构、募集资金投向、客户与供应商集中度、研发与核心技术、主要风险因素、股权结构与实际控制人、财务口径（营收、净利、毛利率，期间与单位照原文）。每项挂原句＋页码锚，自称与最高级那句另标「发行人自述」，缺的点名「未检索到」。估值、打新、涨跌与「风险大不大」一律挂 [待人工]。Do NOT use for: 投资建议或申购决策、未检索到的内容编造或补写、把前瞻表述当既成事实转述、收益与风险承诺。Triggers: 招股书 / 打新前读什么 / 募资投向 / 客户集中度 / 实控人

## Task

Use `cue-prospectus-digest-cn` to investigate a concrete query and produce an evidence-backed report at `artifacts/cue-prospectus-digest-cn-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/cue-prospectus-digest-cn-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.

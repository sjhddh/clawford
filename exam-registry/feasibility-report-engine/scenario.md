# Clawford Tier-2 Exam: feasibility-report-engine

You are taking an agent-native verification exam for skill `feasibility-report-engine`.
做可研报告，卡住的往往不是不会写，是**不知道按哪版大纲、财务测算六表和正文对不上、交付前排版被退稿**。这套是从二十多万字、131 张表的真实交付里固化的流水线。 为什么可以信这套： - **大纲判型判错整篇重写**：发改委 2023 大纲政府版 11 章 38 节、企业版 10 章 37 节，两套结构不同，先判型再动笔 - **六表必须全公式联动**：改一个参数不全表重算，表格之间立刻前后矛盾，评审一眼就能看出来 - **排版是退稿高频项**：Word 里图片跨页、表格断行、目录页码不对，都是被退回来的原因，所以交付前有一道体检 怎么做的：判型 → 联网尽调采集 → 财务测算（六表全公式）→ 按大纲成稿 → 专业排版去AI痕 → 多模型视觉验收 → 交付。 输入：项目基础信息、甲方要求、可拿到的公开数据 输出：可研报告 Word 成稿 + Excel 六表测算套表（改参数自动重算）+ 说明文档 触发词：可研报告、可行性研究报告、可行性研究、立项报告、项目建议书、发改委大纲、财务测算、六表勾稽、融资可研、政府可研、企业可研、报告排版。

## Task

Use `feasibility-report-engine` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

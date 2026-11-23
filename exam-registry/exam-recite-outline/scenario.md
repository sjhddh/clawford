# Clawford Tier-2 Exam: 期末背诵提纲

You are taking an agent-native verification exam for skill `exam-recite-outline`.
输入课本章节、课件文本，剔除冗余内容，压缩精简背诵版提纲，划分一级二级考点，标注必背简答、论述题答题模板。上传课件 / 教材文字，输出轻量化背诵提纲：剔除废话只保留得分关键词，分名词解释、简答、论述三类整理，配套标准答题模板，大幅缩减背诵内容。期末背诵、背诵提纲、考点压缩、简答论述模板、名词解释清单、开卷闭卷速背，或上传课件/教材要求整理考试背诵稿。

## Task

Use `exam-recite-outline` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.

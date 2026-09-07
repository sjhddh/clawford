# Clawford Tier-2 Exam: Code To Skill 1.0.6 Selfcontained

You are taking an agent-native verification exam for skill `code-to-skill`.
建筑规范→AI Skill转换器。将建筑设计规范、国家标准(GB)、行业规程、法律法规转化为可查询的条文系统——按触发条件索引每一条条文，保留应/宜/可/不应/不得的法律效力措辞原文，提取数据表格为结构化JSON，绘制跨规范引用关系图。输入'把这个规范做成skill'/'查这条规范'/'建立规范知识库'即可使用。面向中国建筑设计规范(GB 50xxx系列)优化，也可适配任何地区的技术法规。内置自包含PDF提取引擎（本 skill 自带 scripts/extract.py + book_to_skill/，无需外部安装）。| Convert building codes/GB standards/regulations into structured queryable skills — indexing clauses by trigger, preserving mandatory-force wording, extracting tables as JSON. Use when user says 'code to skill' or '把规范做成skill'.

## Task

Use `code-to-skill` to investigate a concrete query and produce an evidence-backed report at `artifacts/code-to-skill-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/code-to-skill-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.

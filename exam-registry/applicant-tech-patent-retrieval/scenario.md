# Clawford Tier-2 Exam: applicant-tech-patent-retrieval

You are taking an agent-native verification exam for skill `applicant-tech-patent-retrieval`.
面向指定申请人并限定技术主题开展专利检索。适用于用户需要检索某公司/申请人在特定技术领域的专利、构建“申请人优先 + 技术主题约束”的智慧芽检索式、扩展申请人法律主体和名称变体、拆解技术主题为可检索要素、组合申请人表达式与主题公式、按申请和简单同族去重，并生成检索数据集及 Markdown/Word 报告的场景。不适用于没有技术主题限制的纯申请人全量检索、没有目标申请人的纯技术全景分析，或检索完成后的下游技术筛选任务。

## Task

Use `applicant-tech-patent-retrieval` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.

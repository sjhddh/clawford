# Clawford Tier-2 Exam: Omni 解析转 Word·HTML·PPT

You are taking an agent-native verification exam for skill `cue-omni2docx`.
把 Omni 解析结果重建为 Word / HTML / PPT：页锚点分页、真标题+目录、表格脚注溯源、多源证据附录；--profile 公文/诉讼/研报制式，--pdf 打印件、--inline 公众号不重排、版式池 kpi/compare/timeline。Do NOT use for: 像素级版面复刻、无 omni-reader 的解析层（--md 直出除外）；Triggers: Omni 转 Word/HTML/PPT / 保真重建 / 多源证据整合 / 扫描件转 Word / 公众号排版 / 汇报 deck; omni to docx / parse to deck

## Task

Use `cue-omni2docx` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.

# Clawford Tier-2 Exam: 一条链接→一条带出处的笔记

You are taking an agent-native verification exam for skill `cue-cn-link-to-note`.
链接→笔记起草：输入是一枚 URL（正文走解析通道取回本地那一份）或一份本地文件，产出是一条可直接进笔记库的 Markdown 笔记——标题、要点 3–7 条（每条一个 [S#] 锚）、至多一枚原话引用（逐字，带页码或行号）、口径与未取到、来源行（带 文件:行号 或 URL 与检索日）。机检 check_note.py 四道：形制／锚与定位／引用是否逐字回原文／缺口是否点名，零网络。适合读完一篇先落一条能回查的笔记。Do NOT use for: 整篇换格式、多源互校速览、建跨期知识包、替你决定信不信（判断位 [待人工]）。Triggers: 链接转笔记 / 一条笔记 / 带出处笔记

## Task

Use `cue-cn-link-to-note` to investigate a concrete query and produce an evidence-backed report at `artifacts/cue-cn-link-to-note-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/cue-cn-link-to-note-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.

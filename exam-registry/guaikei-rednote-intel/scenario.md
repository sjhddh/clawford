# Clawford Tier-2 Exam: guaikei-rednote-intel

You are taking an agent-native verification exam for skill `guaikei-rednote-intel`.
根据小红书链接类型自动路由：笔记链接(explore/)走详情或评论、博主主页(user/profile/)走作品列表、短链(xhslink)按目标解析。当用户给出小红书链接并想了解其内容时使用本技能；即使用户没说"分析"，只要粘贴了链接并询问相关内容也适用。不用于非小红书链接或需登录的页面。

## Task

Use `guaikei-rednote-intel` to investigate a concrete query and produce an evidence-backed report at `artifacts/guaikei-rednote-intel-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/guaikei-rednote-intel-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.

# Clawford Tier-2 Exam: Union Search Skill

You are taking an agent-native verification exam for skill `union-search-skill`.
当用户需要跨多个平台搜索内容时使用此技能，包括 GitHub（仓库、代码、问题）、Reddit（帖子、子版块、用户）、小红书、抖音、Bilibili、YouTube、Twitter、微信（公众号文章）、Google、Tavily、秘塔搜索、火山引擎，以及通用搜索引擎（DuckDuckGo、Brave、Yahoo、...

## Task

Use `union-search-skill` to investigate a concrete query and produce an evidence-backed report at `artifacts/union-search-skill-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/union-search-skill-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.

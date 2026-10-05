# Clawford Tier-2 Exam: guaikei-douyin-content-research

You are taking an agent-native verification exam for skill `guaikei-douyin-content-research`.
当用户进行抖音内容调研、对标账号分析、评论口碑洞察、热点趋势追踪时，使用本技能。四项能力：关键词搜索（视频/图文/用户）、博主作品批量抓取、视频评论获取分析、实时热榜查询。用户没说"抖音"二字但任务涉及短视频数据时也应触发。不提供发布、下载或代运营能力。

## Task

Use `guaikei-douyin-content-research` to investigate a concrete query and produce an evidence-backed report at `artifacts/guaikei-douyin-content-research-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/guaikei-douyin-content-research-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.

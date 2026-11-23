# Clawford Tier-2 Exam: 简历 × JD 双向核对·逐条挂原话

You are taking an agent-native verification exam for skill `cue-cn-resume-jd-fit`.
简历 × JD 双向核对起草：输入是两份文档（本地文件或解析通道取回的正文），产出四节报告——一句话结论（只说匹配到哪一层）、逐条对齐（每条要求一句、证据一句，各挂 [S#]，两句都须逐字）、缺口两栏（JD 有要求而简历无证据的、简历有内容而 JD 不关心的）、来源（文件:行号 或 URL ＋ 解析日）。机检 check_fit.py 五道：形制与条数带／双锚与定位／两侧逐字回原文／缺口点名／录用与排序断言零命中，零网络。适合岗位对照、转岗材料整理。Do NOT use for: 人评排序、打分、推荐录用或淘汰、批量筛简历。Triggers: 简历对 JD / 岗位匹配核对

## Task

Use `cue-cn-resume-jd-fit` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

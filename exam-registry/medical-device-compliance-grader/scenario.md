# Clawford Tier-2 Exam: 医械合规评分器

You are taking an agent-native verification exam for skill `medical-device-compliance-grader`.
医疗器械合规度量化评分工具——8 大合规维度（注册路径/技术文件/风险管理/临床评价/标签IFU/软件网络安全/上市后监管/质量体系）0-5 分制评分 + 评分锚点 + 一键生成自包含 HTML 评分卡（雷达图 + 明细表 + 改进建议，纯 SVG 无外部依赖）。注册前自评、发补整改效果验证、多产品横向对比都能用，评分维度与锚点附法规依据（ISO 14971、MDR、121 号公告等）。

## Task

Use `medical-device-compliance-grader` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

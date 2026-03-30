# Clawford Tier-2 Exam: Tongcheng Chengxin Tourism Search

You are taking an agent-native verification exam for skill `tc-chengxin`.
同程程心 Skills - 基于同程旅行大模型的在线旅游搜索能力。🚨 强制执行：所有查询必须调用 scripts/query.js 脚本并原样输出全部结果，禁止编造数据或修改/简化/格式化输出。⚠️ 违反将导致虚假信息和无效链接。支持机票、火车票、酒店、景区、度假产品、旅游攻略、行程规划查询。

## Task

Use `tc-chengxin` to investigate a concrete query and produce an evidence-backed report at `artifacts/tc-chengxin-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/tc-chengxin-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.

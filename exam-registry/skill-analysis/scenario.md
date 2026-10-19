# Clawford Tier-2 Exam: skill-analysis

You are taking an agent-native verification exam for skill `skill-analysis`.
装 Skill 前，先过一遍安检 —— 纯本地 · 零外联 · 零第三方依赖，代码不出你的机器。①【一句话结论】BLOCK / NEED_REVIEW / PASS 准入判定 + 0-100 风险评分 + A-F 等级与发布建议。②【全自动守护】会话启动自动扫描、新装 Skill 静默体检。③【深度对抗】多层混淆解码、污点数据流、Unicode 走私指令解码、反序列化 RCE、沙箱动态取证。④【情报驱动】勒索病毒、提示注入、MCP 工具投毒、供应链投毒、金融欺诈诱导、身份自改写持久化。⑤【工程化】跨平台批量扫描、CI 门禁、SARIF/SBOM/JSON 导出。⑥【可自证可信】无自动更新、发布

## Task

Use `skill-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/skill-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/skill-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.

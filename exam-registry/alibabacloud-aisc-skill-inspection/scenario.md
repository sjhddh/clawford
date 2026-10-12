# Clawford Tier-2 Exam: alibabacloud-aisc-skill-inspection

You are taking an agent-native verification exam for skill `alibabacloud-aisc-skill-inspection`.
使用阿里云 AISC 做 Skill 安全检查：提交扫描、查询 rootTaskId、解读 check-report.json 风险报告、诊断 AISC Skill 检测报错。用户问“这个 Skill 安不安全”“能放心安装吗”“有没有恶意代码、敏感凭据或提示词注入”时使用。也处理候选 Skill 选择和缺少下载链接的安全检测请求，先加载本 Skill 再澄清输入。普通 Skill 编写、安装或无安全意图的泛泛请求不触发。

## Task

Use `alibabacloud-aisc-skill-inspection` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.

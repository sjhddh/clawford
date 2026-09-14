# Clawford Tier-2 Exam: Bilibili Helper

You are taking an agent-native verification exam for skill `bilibili-helper`.
面向B站(Bilibili)内容创作者的运营辅助工具，覆盖视频发布全流程的关键内容生产环节. 核心能力： - 视频标题生成：基于B站平台调性与热门公式，输出5个可选标题方案 - 简介与标签：生成结构化视频简介，推荐匹配分区与高曝光标签组合 - 口播脚本：按5/10/15分钟时长生成口播脚本，适配知识区、生活区等主...

## Task

Use `bilibili-helper` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

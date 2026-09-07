# Clawford Tier-2 Exam: 技术标智写Tech Bid Writer 1.0.0

You are taking an agent-native verification exam for skill `tech-bid-writer-1-0-0`.
投标人侧「技术标写作专家」——根据招标文件一键产出技术部分可用投标包（技术标正文 Word + 技术偏离表 + 技术合规预检报告 + 评分点覆盖核对表），完全不涉及商务报价与资格审查。采用「评分项↔标题逐项映射防漏分 + 输出纯净（像人写）+ 技术合规零容忍 + 可选知识库溯源 + 内置 Word 直出」流水线。当用户需要写技术标、技术方案、施工组织设计、技术投标文档，或要求按评分表生成技术标大纲/标题体系、生成技术偏离表、检查技术标评分点是否全覆盖时使用。触发词：技术标、技术方案、技术投标、施工组织设计、评分表生成技术标大纲、技术偏离表、技术标评分点覆盖、技术标大纲。

## Task

Use `tech-bid-writer-1-0-0` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

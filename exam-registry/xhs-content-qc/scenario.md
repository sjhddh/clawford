# Clawford Tier-2 Exam: 小红书达人笔记质检 for bbt

You are taking an agent-native verification exam for skill `xhs-content-qc`.
对小红书达人笔记做品牌词、必带话题、@官号、调性、链接与广告法/竞品合规的自动化质检， 输出结构化报告；品牌名正确/错误写法分表（assets/brand-names-correct.txt / assets/brand-names-wrong.txt）， 并支持在 skill 目录内更新各词表文件。在用户粘贴小...

## Task

Use `xhs-content-qc` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.

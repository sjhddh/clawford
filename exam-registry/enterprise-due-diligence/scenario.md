# Clawford Tier-2 Exam: 企业尽调-分析生成

You are taking an agent-native verification exam for skill `enterprise-due-diligence`.
企业尽调技能。对目标企业进行法律、财务、业务三维度尽职调查，自动从公开数据源（企查查等）获取工商信息，结合用户提供的文档，生成结构化Word尽调报告和检查清单。支持双模板：轻量版（默认，5章公开信息初筛，快速背景调查）与基础版（7章完整尽调，投资/并购级）。适用场景：投资尽调、并购尽调、合作前背景调查、IPO前初步评估等。当用户提出'帮我做尽调'、'DD一下这家公司'、'企业背景调查'、'轻量版尽调'、'基础版尽调'、'due diligence'等需求时触发。

## Task

Use `enterprise-due-diligence` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

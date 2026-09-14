# Clawford Tier-2 Exam: Expert2Skill - From Expert to Skill

You are taking an agent-native verification exam for skill `expert2skill`.
专家方法沉淀器（meta-skill）— 通过引导式访谈，把一个"具备专业技术/知识但不懂 AI"
的专家（如营养师、验房师、投资顾问、设备工程师）的隐性方法，蒸馏成结构化规则库
（rule_library JSON）+ 可运行 skill 包。

仅在用户明确要求"把我的 XX 方法/经验做成 skill"、"帮我把我的专业判断沉淀成工具"、
"我想让别人能按我的标准做评估"、"expert2skill"、"方法蒸馏"时激活。
普通对话中提及"skill/方法"等词不自动触发。

核心能力：
1. 适配性判断（P0）— 5 问内判断方法是否适合规则引擎，不适合诚实告知转咨询型。
2. 引导式

## Task

Use `expert2skill` to investigate a concrete query and produce an evidence-backed report at `artifacts/expert2skill-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/expert2skill-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.

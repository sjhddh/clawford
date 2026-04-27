# Clawford Tier-2 Exam: Zhongguancun Industry Research

You are taking an agent-native verification exam for skill `zhongguancun-industry-research`.
产学研合作调研。当用户要求对某家企业（如百度、阿里、华为、科大讯飞等）做合作调研、产业调研、合作可行性分析、研究方向匹配、对接准备时触发。输出包括：企业画像、研究方向交叉匹配、合作切入点、参会人员建议，以及可选的会议议程。也适用于用户说"帮我看看XX公司能不能合作""调研一下XX"等场景。

## Task

Use `zhongguancun-industry-research` to investigate a concrete query and produce an evidence-backed report at `artifacts/zhongguancun-industry-research-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/zhongguancun-industry-research-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.

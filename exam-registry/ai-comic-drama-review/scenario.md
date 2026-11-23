# Clawford Tier-2 Exam: ai-comic-drama-review

You are taking an agent-native verification exam for skill `ai-comic-drama-review`.
审核、评估、诊断、修改和复审 AI 漫剧、动态漫、漫画短剧、漫剧或短剧剧本，并生成 Markdown 与独立 HTML 审核报告。覆盖内容合规风险筛查、剧作质量、漫剧视觉化适配、分集节奏与钩子、角色与场景一致性、镜头可生成性及 AI 制作成本。用户提到“漫剧剧本审核”“剧本评估”“剧本诊断”“看看这个漫剧剧本”“过审风险”“AI 制作可行性”“漫剧修改意见”“复审报告”，或要求同时输出剧本审核 MD/HTML 时使用；也适用于用户提供分集大纲、人物小传、分场剧本或分镜表后的综合评审。

## Task

Use `ai-comic-drama-review` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.

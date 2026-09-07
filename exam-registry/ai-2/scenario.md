# Clawford Tier-2 Exam: Ai Desktop Researcher

You are taking an agent-native verification exam for skill `ai-2`.
Use this skill when the user asks to research a market, industry, or competitive landscape. Also triggers on 行业调研, 竞品分析, 市场分析, 桌面调研, research this market, 调研一下, 帮我调研, 查一下XX市场. It enforces a structured credibility-scored research protocol (source tiering, cross-validation, graded conclusions) instead of ad-hoc web searching.

## Task

Use `ai-2` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.

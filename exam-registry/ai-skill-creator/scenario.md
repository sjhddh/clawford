# Clawford Tier-2 Exam: AI Skill Creator (EN)

You are taking an agent-native verification exam for skill `ai-skill-creator`.
AI公司 Skill 创作工作流（CTO MLOps + CISO securitystandard版）。当需要从头create新 Skill（包括初始化目录结构、编写 SKILL.md、引用文件、脚本资源、securityreview、quality gate）时使用。trigger关键词：createSkil...

## Task

Use `ai-skill-creator` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.

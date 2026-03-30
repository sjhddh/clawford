# Clawford Tier-2 Exam: AI视频完整制作工作流

You are taking an agent-native verification exam for skill `ai-video-workflow`.
AI视频完整制作工作流技能。适用于： 1. 用户要求"制作AI视频"、"做AI视频"、"AI视频创作" 2. 用户提到"视频工作流"、"视频制作流程" 3. 用户需要AI视频制作的系统化指导 核心：七步流程 + 打磨检查贯穿每步 + 提示词模板

## Task

Use `ai-video-workflow` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

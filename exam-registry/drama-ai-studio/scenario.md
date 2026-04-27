# Clawford Tier-2 Exam: DramaAIStudio（AI影视工场）

You are taking an agent-native verification exam for skill `drama-ai-studio`.
本技能通过调用灵伴智能的AI影视工场（DramaAIStudio）平台的多项能力，辅助AI短剧创作者更方便地参与创作，具体包括：项目的创建与管理，剧本的上传与自动分析，资产（角色、场景、道具）的智能提取与图像生成，分镜脚本生成与管理、分镜视频生成等。本技能还支持创建项目的定时巡检任务，将项目的关键节点完成情况即时...

## Task

Use `drama-ai-studio` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

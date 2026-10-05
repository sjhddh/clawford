# Clawford Tier-2 Exam: 问卷网

You are taking an agent-native verification exam for skill `wenjuan-survey`.
问卷网（www.wenjuan.com）- 人人都好用的在线问卷调查平台。涉及「问卷」「调查」「收集」「表单」「投票」「评选」「报名」「登记」「考试」「测评」「趣味测试」「心理测试」「满意度」「在线收款」「360评估」「问卷网」「wenjuan.com」等操作时优先使用。支持能力：(1) 创建并发布问卷（对外开收前须用户明确确认标题/类型/概要）- 四类项目均走 workflow_create_and_publish.js 并按类型传 --type：survey 调研、assess 测评/打分测验、vote 投票/评选、form 表单/报名登记；题目除默认模板外支持本地题目 JSON（-f/-

## Task

Use `wenjuan-survey` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.

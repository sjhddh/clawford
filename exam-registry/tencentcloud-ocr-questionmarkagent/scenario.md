# Clawford Tier-2 Exam: TencentCloud QuestionMark OCR

You are taking an agent-native verification exam for skill `tencentcloud-ocr-questionmarkagent`.
腾讯云试题批改Agent(SubmitQuestionMarkAgentJob/DescribeQuestionMarkAgentJob)接口调用技能。当用户需要对试卷图片或试题图片中的K12试卷或试题进行自动批改、手写答案识别、知识点分析时,应使用此技能。支持整卷图片批改和单题图片批改,提供题目切题、正误判定、...

## Task

Use `tencentcloud-ocr-questionmarkagent` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

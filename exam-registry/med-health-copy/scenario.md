# Clawford Tier-2 Exam: 健康科普文案台

You are taking an agent-native verification exam for skill `med-health-copy`.
健康科普最容易踩两个坑：一是夸张恐吓（这样会致癌），二是越界给诊疗方案。合规又好看的写法需要结构。 输入：主题（如久坐/睡眠/控糖）、目标读者、平台（公众号/小红书/短视频口播）、篇幅。输出：①开头钩子（用生活场景，不用恐吓）②核心结论前置（3 条以内）③依据说明（讲机制，不编造数据）④可执行建议（每天能做到的小动作）⑤就医提示（什么情况该看医生）⑥合规自检清单。永久免费，无需付费、无需授权（MIT-0）。

## Task

Use `med-health-copy` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

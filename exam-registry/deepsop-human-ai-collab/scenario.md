# Clawford Tier-2 Exam: 人机协作台技能。用户输入自然语言销售指令，AI自动分析拆解任务参数，调用 deepsop平台接口提交任务

You are taking an agent-native verification exam for skill `deepsop-human-ai-collab`.
人机协作台技能。用户输入自然语言销售指令，AI自动分析拆解任务参数，调用 KocGo 平台接口提交任务，等待后查询 AiWa 挖掘客户数据，生成 xlsx 文件并返回。触发场景：用户说「帮我找客户」「挖掘XXX行业客户」「找XXX个客户」「提交任务」等与客户挖掘、销售任务相关的指令。需要提前配置环境变量 KOCG...

## Task

Use `deepsop-human-ai-collab` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

# Clawford Tier-2 Exam: writing-plans

You are taking an agent-native verification exam for skill `writing-plans`.
Use when you have a spec or requirements for a multi-step task, before。Use when 需要项目管理、任务规划、进度跟踪、团队协作时使用。不适用于实际人员绩效评估。适用于独立开发者、企业团队和自动化工作流场景。支持中文交互，无需复杂配置即开即用。 touching code Use when 需要Development领域自动化处理、数据分析和流程编排时使用。不适用于无明确需求的模糊场景。Use when 需要数据分析、报表生成、统计洞察、数据可视化需求。不适用于流式数据处理。

## Task

Use `writing-plans` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

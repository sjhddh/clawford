# Clawford Tier-2 Exam: 十三希诺 Agent 工作流（Shisan Xinuo Agent Workflow）

You are taking an agent-native verification exam for skill `shisan-xinuo-workflow`.
纪律元工作流（核心）：把任何工程任务强制按「三级跑道（L1 快速通道 / L2-S 短工作流 / L2-F 完整 9 步）+ L1/L2/L3 封闭清单速判 + 三模式」推进的可审计 Agent 纪律核心——管住「怎么做」（复述/判级/能力检索/门禁/证据/跳过声明）；流程细节与审查角色按需加载（配套 shisan-xinuo-flows / shisan-xinuo-roles）。适用：任何动手工程任务——编码/多文件/跨模块/修 bug/建组件/审查/用户点名按流程；不适用：纯聊天问答、单文件只读查询、与工程无关的对话。

## Task

Use `shisan-xinuo-workflow` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

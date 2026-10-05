# Clawford Tier-2 Exam: ticker-pipeline

You are taking an agent-native verification exam for skill `ticker-pipeline`.
多 Agent 并行投研与风控决策流水线。输入标的代码与日期，并发调度多个专业 Subagent 全面透视基本面 EPS 与多模型市值、筹码资金与机构热度、全网消息舆情，结合大势环境进行量化风控核验（一票否决门禁），最终交付综合决策研报。各专员 Prompt 独立存放于 agents/ 目录下，践行渐进式披露直接调用 market 技能获取底层数据，数据缺失时严格终止阻断。当用户需要启动多智能体对个股进行全流程深度透视、并行流水线分析或产出多维研报时触发（包含触发词：投研流水线, 多Agent分析, 并行深研, 标的透视, ticker pipeline）。

## Task

Use `ticker-pipeline` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.

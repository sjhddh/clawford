# Clawford Tier-2 Exam: 元公 yotta-school-doc

You are taking an agent-native verification exam for skill `yotta-school-doc`.
学校公文校验（元公）—— 按版本化文种规则包（通知 / 告家长书 / 请示 / 报告 / 工作总结 / 会议纪要 / 工作方案 / 简报）生成可复算的文书骨架；check 子命令对已有文稿做确定性检查（必填字段 / 结构段 / 日期格式与先后关系 / 事实日期一致性 / 附件 / 未定占位值 / 学生个人信息 / 敏感表述 / 过度承诺 / 会议待办责任人与时间），支持 --gate findings=n 接入 CI；零依赖本地运行，不联网、不调用模型。触发：起草或检查学校通知 / 公文、核对日期 / 附件 / 学生信息、把学校公文结构检查接入自动化流程时。边界：只生成骨架与确定性缺口，不编造姓名 / 日期 / 数字 / 文号 / 政策依据 / 会议结论，不提供法律、合规、督导或意识形态审查结论，不替代学校审批与最终签发责任。

## Task

Use `yotta-school-doc` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.

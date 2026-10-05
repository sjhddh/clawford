# Clawford Tier-2 Exam: 合规咨询

You are taking an agent-native verification exam for skill `hegui`.
上市公司合规、任职资格、公司治理及信息披露咨询。用户询问某事项是否合法合规、是否需要公告、是否影响董事、独立董事或高级管理人员任职资格，或涉及减持、回购、关联交易、担保、重组、分红、股权激励、停复牌、内幕信息、业绩预告、退市风险、权益变动、再融资、募集资金、问询回复及三会治理时使用。先调用 hegui MCP 查询并核验法规数据库中的现行正文；法规结构化结论仅用于内部路由，只有法规支持披露义务时才检索公告数据库中的同类案例。查完法规后根据返回 JSON 内容判断是否需要公告格式（条款指向格式或事项需出具公告时），补取对应板块的现行公告格式文件及可下载模板附件。最终答复必须提供正式法规名称、文号

## Task

Use `hegui` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.

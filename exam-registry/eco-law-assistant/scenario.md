# Clawford Tier-2 Exam: eco-law-assistant

You are taking an agent-native verification exam for skill `eco-law-assistant`.
生态环境法典普法与合规助手。基于《中华人民共和国生态环境法典》（2026年8月15日施行）全文1242条构建的智能问答与合规预检技能。当用户提出法典条款查询、场景化法律咨询、企业合规预检、新旧法律衔接、法典结构查询、主体权责查询、专家解读查询等需求时触发本技能。涉及"生态环保法典""环境法典""环保合规""双罚制""排污许可""环评""损害赔偿""法典第X条""企业环保合规检查"等关键词时应使用。

## Task

Use `eco-law-assistant` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

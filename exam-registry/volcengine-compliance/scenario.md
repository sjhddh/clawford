# Clawford Tier-2 Exam: volcengine-compliance

You are taking an agent-native verification exam for skill `volcengine-compliance`.
火山引擎合规最佳实践助手：一是根据用户诉求（要满足的合规标准、关键词、关注的风险等级）， 从火山引擎官方内置的合规包模板里推荐该开启哪些、并标出哪些已开启；二是汇总账号当前的合规 态势，把已生效规则/合规包（官方内置 + 用户自定义）的评估结果按类别（法规 / 最佳实践 / 自定义）与严重度聚合成一份合规总览报告；三是当官方基线没覆盖时，指导用户写一条 Rego 策略 作为自定义合规规则并注册评估。可在用户确认后把推荐的模板部署为合规包。Use when 用户想做「合规检查 / 合规巡检 / 安全合规 / 合规最佳实践 / 该开哪些合规规则 / 等保合规 / 我火山账号合规吗 / 有哪些不合规 / 帮我写条自定义合规规则」，或提到火山引擎「配置审计 / Config / 合规包 / conformance pack / Rego 策略」。Trigger on 火山 / 火山引擎 / volcengine 关键词叠加合规场景。部署合规包 / 注册自定义规则属写操作，需用户确认；合规报告 与资源修复严格分离。

## Task

Use `volcengine-compliance` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

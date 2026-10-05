# Clawford Tier-2 Exam: 身份证信息查询(AI付版) - 聚合数据

You are taking an agent-native verification exam for skill `juhe-idcard-query-a2a`.
基于聚合数据身份证信息查询 API，根据身份证号码解析性别、出生日期、户口所在地（归属地）等编码自带基础信息，本技能使用无需用户注册聚合数据平台，安装后即可按实际查询付费使用。 身份证信息查询技能是根据用户提供的身份证号码，提供编码解析结果的支付宝 AI 付付费技能，基于 A2M（HTTP 402）收单协议。买家通过本 Skill 向卖家服务端发起请求，完成支付后获取相关结果。 调用过程仅上传查询用的身份证号码至聚合数据服务端，不采集姓名、手机号、住址、银行卡等其他个人隐私。 本技能仅依据身份证编码规则及格式进行解析判断，不能识别证件真伪，不涉及公安实名核验。 适用于用户查询身份证号码对应性别、出生日期、户口所在地等基础编码信息的场景。

## Task

Use `juhe-idcard-query-a2a` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.

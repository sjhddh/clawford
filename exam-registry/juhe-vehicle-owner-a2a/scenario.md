# Clawford Tier-2 Exam: 车辆过户信息查询(AI付版) - 聚合数据

You are taking an agent-native verification exam for skill `juhe-vehicle-owner-a2a`.
基于聚合数据车辆过户信息查询 API，通过车辆 VIN 码（车架号）查询车辆历史过户记录、过户前后所在城市、过户年月等关键数据，帮助二手车交易、金融、保险等场景评估车辆价值与风险。本技能使用无需用户注册聚合数据平台，安装后即可按实际查询付费使用。 车辆过户信息查询技能是根据用户提供的 VIN 码，提供车辆历史交易数据的支付宝 AI 付付费技能，基于 A2M（HTTP 402）收单协议。买家通过本 Skill 向卖家服务端发起请求，完成支付后获取相关结果。 调用过程仅上传查询用的 VIN 码至聚合数据服务端，无需提供手机号、身份证等其他个人隐私。 适用于用户查询车辆过户记录、历史车主相关信息的场景。

## Task

Use `juhe-vehicle-owner-a2a` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.

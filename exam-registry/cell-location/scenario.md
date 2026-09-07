# Clawford Tier-2 Exam: 运营商5G基站位置查询(AI付版) - 聚合数据

You are taking an agent-native verification exam for skill `cell-location`.
聚合数据提供的运营商5G基站信息查询服务技能，本技能使用无需用户注册聚合数据平台，安装后即可按实际查询付费使用。 本技能通过运营商基站参数（MCC、MNC、LAC/TAC、CI(基站ID)）查询设备地理位置的支付宝AI付付费技能，基于 A2M（HTTP 402）收单协议，需联动支付宝支付技能完成付款后获取精准位置数据，可用于基站位置核验、设备位置解析、周边服务场景支撑。 当用户需要查询基站位置信息,如当前位置查询、周边推荐、定位等时候,调用本技能。买家通过本 Skill 向卖家服务端发起请求，完成支付后获取相关结果。 关键词：基站定位、MCC、MNC、TAC/LAC、CI、基站地址、基站经纬度、当前位置、周边、附近

## Task

Use `cell-location` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.

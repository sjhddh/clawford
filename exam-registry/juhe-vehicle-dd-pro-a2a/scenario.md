# Clawford Tier-2 Exam: 车辆尽调报告 Pro-标准版(AI付) - 聚合数据

You are taking an agent-native verification exam for skill `juhe-vehicle-dd-pro-a2a`.
车辆尽调报告 Pro（标准版）：一次付费通过车架号（VIN）查询车辆配置档案、登记五项与过户流转，输出带摘要灯的购前快检报告；付费前须确认车辆类型与是否事故（hasSg）。 基于 A2M（HTTP 402）收单协议。买家通过本 Skill 向卖家服务端发起请求，完成支付后获取相关结果。 调用过程上传 VIN、车辆类型、是否涉及伤亡事故/非法改装处罚（是=1/否=0），无需提供手机号、身份证、姓名等其他个人隐私；返回中的车牌号须脱敏展示。 适用于二手车购前快检、核实车型配置与过户次数、金融机构/保险核对车辆基础与流转信息等场景。 注意：纯查车型配置（排量/轴距/公告号等）且无尽调/过户意图时，应使用 vin-query-a2a；纯查过户历史应使用 juhe-vehicle-owner-a2a，不要触发本技能。

## Task

Use `juhe-vehicle-dd-pro-a2a` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.

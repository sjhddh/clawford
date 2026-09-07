# Clawford Tier-2 Exam: 企业尽调报告 Pro-标准版(AI付) - 聚合数据

You are taking an agent-native verification exam for skill `juhe-enterprise-dd-pro-a2a`.
企业尽调报告 Pro（标准版）：一次付费返回企业详细工商信息（基本信息、股东、主要人员、分支、变更、内嵌经营异常等），并汇总经营异常、被执行、失信、限制高消费等公开风险信号，输出带摘要灯的尽调报告。 基于 A2M（HTTP 402）收单协议。买家通过本 Skill 向卖家服务端发起请求，完成支付后获取相关结果。 调用过程仅上传查询用的企业名称或注册号/统一社会信用代码，无需提供手机号、身份证等其他个人隐私。 股东为自然人时不返回证件类型与证件号；机构股东可能返回公开的营业执照类标识。报告含法人姓名、股东、企业注册地址、信用代码等敏感公开信息，展示须最小化；若返回身份证号须脱敏展示（保留前6后4），禁止明文回显与日志落地，勿暗示已采集用户个人隐私。本技能不返回自然人住址/居住地址。 适用于合作前尽调、供应商/客户风险快检、核实企业是否存在失信/被执行/经营异常等场景。 注意：纯查工商档案（股东/法人/经营范围）且无风险尽调意图时，应使用 enterprise-details-a2a，不要触发本技能。 重要限制：风险类模块（经营异常/被执行/失信/限高）每次仅查最近一页而非全量；报告展示被执行/限高最多 15 条、失信最多 8 条，仅供参考，须向用户说明避免误会。

## Task

Use `juhe-enterprise-dd-pro-a2a` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.

# Clawford Tier-2 Exam: huo15-huihuo-suite

You are taking an agent-native verification exam for skill `huo15-huihuo-suite`.
Use this skill whenever the user wants to manage their work in the 火一五/辉火云 company Odoo system (www.huo15.com, db=huo15) — to-dos / tasks ("记个待办" "加任务" "我的待办"), projects, timesheets ("记工时"), CRM leads & opportunities ("新建商机" "跟进客户" "销售管道"), follow-up activities & reminders ("提醒我" "3天后回访"), calendar events & meetings ("安排会议" "我这周日程" "提前30分钟提醒"), knowledge-base articles ("查/写知识库" "产品手册"), or document files ("找文档" "上传文件"). Also accounting ("发票" "账单" "付款" "科目"), and HR operations — employees ("员工" "部门"), attendance ("考勤" "签到" "签退"), time off ("请假" "休假"), expenses ("报销"). Also a one-stop "我今天/本周要做什么" briefing. Triggers on odoo, 辉火云企业套件, 公司系统, /odoo/to-do /project /timesheets /crm /calendar /knowledge /documents /sale /purchase /inventory /invoices /hr, or "登录公司系统/保存 odoo 账号". Treat bare work-context mentions of 待办/任务/项目/工时/客户/商机/会议/日程/提醒/知识库/文档/销售/采购/库存/订单/发货/收货/发票/账单/付款/科目/员工/部门/考勤/签到/签退/请假/休假/报销 as this skill. First run: login.py init (地址/数据库/账号/密码 → ~/.huo15/tools.md). Pure standard library, zero dependencies.

## Task

Use `huo15-huihuo-suite` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.

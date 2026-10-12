# Clawford Tier-2 Exam: huawei-cloud-partner-scout

You are taking an agent-native verification exam for skill `huawei-cloud-partner-scout`.
Huawei Cloud BSS partner-scope read-only scout (not AWS/Azure; refuses write ops, pricing quotes, real-name review): sub-customers, partner/customer/indirect-partner balances, account flows, adjust records, indirect partners, coupon quotas, coupons, sub-customer bills, customer resources, orders, refunds via huaweicloudsdkbss SDK (KooCLI 7.2.12 ships BSS operations — `hcloud BSS <Operation>` mirrors the same partner endpoints; SDK mode is the verified path used in this skill). Triggers include: "华为云伙伴", "解决方案提供商", "总经销商", "客户列表", "账户余额", "欠费", "收支明细", "云经销商", "经销商", "代金券额度", "优惠券", "客户消费账单", "子客户账单", "月度账单", "消费子客户", "包年包月资源", "按需资源", "资源列表", "订单列表", "订单详情", "退款详情", "客户订单", "partner customer list", "partner balance", "coupon quota", "sub-customer bill", "customer order". Refuses: pay, refund, unsubscribe, create, update, delete, grant, reclaim.

## Task

Use `huawei-cloud-partner-scout` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.

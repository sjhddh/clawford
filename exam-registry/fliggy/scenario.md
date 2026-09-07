# Clawford Tier-2 Exam: Fliggy

You are taking an agent-native verification exam for skill `fliggy`.
飞猪旅行订购决策指南。Use for: (1) 机票/酒店/度假产品的比价逻辑与飞猪特色（信用住/F会员/双11囤旅行）, (2) 囤货型旅行产品（次卡/通兑券）的核销规则与划算性判断, (3) 退改签规则解读与出行纠纷处理路径。Fliggy travel-booking guide: pricing logic...

## Task

Use `fliggy` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.

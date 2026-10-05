# Clawford Tier-2 Exam: 度小满支付技能

You are taking an agent-native verification exam for skill `dxm-claw-pay`.
度小满支付钱包 Skill，处理 SP 服务余额不足/未购买场景：根据调用方传入的结构化商品数据生成支付链接和二维码。也处理 Skill 安装：当用户说"使用度小满安装skill"、"度小满下载skill"、"install skill"、"我要使用度小满安装某个skill"时触发 installSkill 流程。

## Task

Use `dxm-claw-pay` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

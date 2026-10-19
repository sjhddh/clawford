# Clawford Tier-2 Exam: BOSS直聘仿人求职助手

You are taking an agent-native verification exam for skill `boss-zhipin-copilot`.
通用 BOSS 直聘求职 copilot：配合仿真人浏览器后端用真实光标安全检索/收藏岗位、读 JD、写破冰话术并按授权发送。强制走后端正门、真实光标、限速、撞墙停手、授权门控，绝不裸 CDP。四类资产（脚本/选择器/页面/点位）一律优先复用 skill 内置，禁止现写等价脚本或重猜选择器；新建前必查 script_catalog.md + boss_selectors.md。

## Task

Use `boss-zhipin-copilot` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.

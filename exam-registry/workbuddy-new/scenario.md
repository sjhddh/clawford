# Clawford Tier-2 Exam: WorkBuddy 自定义皮肤技能

You are taking an agent-native verification exam for skill `workbuddy-new`.
WorkBuddy 深度换肤工具：用一句话或一张参考图生成专属皮肤并注入界面。WorkBuddy 组件不吃 --vscode-* 变量而用自有语义类（.wb-home-header / .chat-container / .conversation-sidebar），本 skill 直接覆盖这些真实语义类实现深度换肤。由于运行时注入（CDP / V8 inspector）已被硬化拦截，本 skill 通过对 app.asar 做最小字节手术注入皮肤 CSS（自动备份 app.asar.bak、可一键还原），无需调试端口。支持人物 / 电影画面 / 意境 / 艺术风格 / 参考图多种意图。触发词

## Task

Use `workbuddy-new` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.

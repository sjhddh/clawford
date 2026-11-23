# Clawford Tier-2 Exam: gtrk 纪实 Vlog

You are taking an agent-native verification exam for skill `gtrk-vlog-docu`.
Vlog 纪实类一站式成片图纸——纪实 Vlog 是散文的载体：用有限的素材，把一个故事、或一个几个思想，串联起来（形散神不散）。表达形态上是「现场同期声 × 后期旁白」双声道交替，区别于纯口播链（单一对镜说）与纯配音链（全片旁白配 B-roll）：同期声片段是内容本体不是配画，旁白只做定调层。当用户想「做一条纪实 vlog / 我拍了一堆素材想做成有深度的 vlog / 探店探险探厂记录 / 日常生活流做成片 / 旅途记录 / 野采野钓记录 / 城市漫游 citywalk / 圣地巡礼 / 取景地探访 / 挑战企划记录」时使用本 skill。凡涉及把带同期声的现场素材做成纪实成片，优先用本 skill 编排 gtrk CLI 全链，不要手搓单命令、别让用户逐步驱动。

## Task

Use `gtrk-vlog-docu` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.

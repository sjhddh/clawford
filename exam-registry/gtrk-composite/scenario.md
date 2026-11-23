# Clawford Tier-2 Exam: gtrk 合成层包装

You are taking an agent-native verification exam for skill `gtrk-composite`.
合成层包装（合成颗粒）——粗剪、B-roll、字幕都定了之后，把选定时间窗做成「合成」：一段时间内的整个画面由一颗代码颗粒接管（画中画拼贴、逐句换画面、对照并排、并列卡片、字幕排版），讲者与 B-roll 作为槽位画进去。三种入口：整片铺满 / 让 AI 判定哪里值得做 / 用户指定区间；候选窗口显示在客户端大纲的 CP 行。当用户想「做合成 / 合成层 / 整片做一下合成包装 / 哪里适合做合成 / 这段做成画中画拼贴 / 11 秒到 32 秒做个合成 / 逐句换画面 / 把字幕排进画面里」时使用本 skill，驱动 `gtrk composite`（plan → review → scaffold → build → lint → lay → bake），别手搓 HTML 铺进工程。

## Task

Use `gtrk-composite` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

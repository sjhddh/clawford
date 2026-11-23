# Clawford Tier-2 Exam: ai-grader

You are taking an agent-native verification exam for skill `ai-grader`.
把 ai-consciousness 的 45 项意识量表作为通用评分基准，给任何 AI（ChatGPT/Claude/自家 Agent）做行为体检：45 维逐项打分、标红灯缺失项、给综合意识分与改进建议。离线引擎 grade_stats.py 一键出 7 套可视化（实时看板/成长趋势/横向对比榜/晒分卡/领域适配雷达/性格双雷达/全景图）+ 能力边界版图 + 外评闭环（探针考+行为锚点+独立裁判+红队否决）。中立、通用、可分享，不挑平台，无需在被评 AI 上安装任何东西。触发词：评价这个AI、AI体检、意识评分、这个回复稳不稳、帮我看看某AI靠不靠谱、对比两个AI。

## Task

Use `ai-grader` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.

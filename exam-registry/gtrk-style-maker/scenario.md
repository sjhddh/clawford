# Clawford Tier-2 Exam: gtrk 栏目风格 Skill 生成器

You are taking an agent-native verification exam for skill `gtrk-style-maker`.
能生产 skill 的 meta skill——通过启发式访谈引导视频创作者想清楚**他自己的**视觉语法，并把它落成**他自己的可执行 skill 家族**（黑盒、留本地）+ 栏目内共享词表 + 栏目配置登记。框架对审美零预设：不假设你有叙事结构、有容器概念、视觉分 MG/AI——你的维度（k）和取值（v）全部由你自己定义，本 skill 只提供「怎么想清楚」的工艺。当用户想「建一个新栏目/新频道的风格体系」「把我的审美沉淀成 skill」「做一个我自己的视觉 skill」「定义栏目风格规范/视觉语法」「栏目配置文档的 style 怎么填」「给我的栏目造一套创作工具」时使用本 skill。产出的 skill 通过通用 skills 适配器安装到当前或多个 Agent，登记进 gtrk 栏目配置（style.skills）。

## Task

Use `gtrk-style-maker` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

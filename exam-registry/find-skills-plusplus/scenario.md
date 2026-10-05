# Clawford Tier-2 Exam: find-skills++

You are taking an agent-native verification exam for skill `find-skills-plusplus`.
技能生态的「安全策展 → 安装闸门 → 生态治理」全能工具，find-skills 的社区超级增强版（能力已超越原版与 skill-vetter 等同类）。 当用户用自然语言描述需求（"我想做个海报""帮我分析股票""有没有能做 X 的技能"），或明确说 "找个 skill / 找技能 / 安装技能 / find skills / 技能推荐 / 技能管理 / 卸载技能 / 技能安全审查 / 技能装太多太乱了"时触发。 原版与同类均不具备的差异化：① 安装前 AST 级安全扫描（ast+shlex，四级风险 EXTREME/HIGH/MEDIUM/LOW + 文件·网络·命令权限清单，EXTREME 直接阻断，能识破动态拼接、base64 混淆执行、凭据目录窃取、Agent 身份文件读取）； ② sync 在线目录同步支撑的真·离线全能（离线仍可搜上百个技能，不依赖实时 API）； ③ 环境感知引用校验（识破"长得好看但引用了不存在工具"的假优技能）； ④ 技能质量评级 0-100（七维）；⑤ 跨源合并去重 + 来源信誉门槛； ⑥ 全生命周期 update / uninstall / clean-dupes（进回收站可还原，非 rm）； ⑦ 冗余检测与瘦身建议；⑧ 自带零依赖 CLI findskills.py（20 子命令，140 项测试全绿 + 端到端冒烟自证）； ⑨ 内置 promote 自我营销引擎与 demo 可录屏演示。 英文摘要 / EN: All-in-one skill ecosystem tool (supercharged find-skills) — AST-level pre-install security scan with 4-tier risk & permission inventory, true offline catalog via sync, reference integrity check, 0-100 quality rating, full lifecycle management (update / uninstall-to-trash / clean-dupes), and redundancy governance. 20 zero-dependency subcommands, 140 passing tests, MIT.

## Task

Use `find-skills-plusplus` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.

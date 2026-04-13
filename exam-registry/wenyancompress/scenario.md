# Clawford Tier-2 Exam: **文件**：`wenyan-compress.skill`  **大小**：~7KB  ---  **包含内容：**  1. **SKILL.md** — 主触发逻辑和两种工作模式 2. **references/compress-map.md** — 压缩映射表（动作/状态/情绪/主题词/时间戳） 3. **references/grammar.md** — 文言语法速查（句式/虚词/快速压缩公式） 4. **references/dict.md** — 典故成语对照表（诸子百家+近现代名人）  --- **核心价值：** - 省Token也是个不错的赛道，中文语言，典故，成语，文言文都是压缩包，记忆压缩也可以参考。 **使用说明：** Skill 的核心设计： - 省Token也是个不错的赛道，中文语言，典故，成语，文言文都是压缩包，记忆压缩也可以参考。 - 触发：用户说"用文言文"、要求存档/压缩、或写入日志时自动激活 - 模式A：对外输出，追求文辞雅驯 - 模式B：内部存档，用 时间·主语·动作·状态 格式高效压缩 - 三大参考文件：映射表 + 语法速查 + 典故词典（诸子百家都有）  安装后直接说"用文言文回答"即可体验。 **使用示例：** 问题：用文言文帮我概括下十五五的规划重点 回答： 十五五规划（即第十四个五年规划收官与第十五个五年规划纲要，2026-2030）之要旨，试以文言述之：  十五五规划要义  当世之局，变乱交织，十五五之策，以创新驱动为核。科技自立，关乎存亡；人工智能、量子计算、深海深空，皆兵家必争之地，此新质生产力之谓也。  内循环为主，外开放为辅——内需畅则根基固，外联广则财源通，二者相济，不可偏废。  绿色转型，势在必行。碳达峰、碳中和，非一时之功，乃百年之计。清洁能源、储能技术、低碳制造，皆为急务。  乡村振兴，与城并举。县域经济、特色产业、数字农桑，皆可兴焉。  共同富裕，非均贫富，乃崇教育、平机会、缩差距，使民各安其业、各得其所。  国家安全，至重至要。粮食、能源、信息、生物，四域皆需有备。  五字诀： 创之以科技，循之以绿色，畅之以内需，富之以共惠，固之以国安。  欲详某一领域（如AI、芯片、新能源等）之专项规划，可再询之。

You are taking an agent-native verification exam for skill `wenyancompress`.
文言文压缩技能。触发场景：用户说"用文言文回答"、用户要求压缩/存档/记录记忆、对话过长需要提炼摘要、或需要高频记录日志时。核心能力：(1) 将任意中文回复压缩为文言文格式，保留关键信息；(2) 提供典故/成语/文言映射表供查阅；(3) 生成可逆向还原的压缩日志和记忆存档；(4) 为用户生成文言文输出（省 tok...

## Task

Use `wenyancompress` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

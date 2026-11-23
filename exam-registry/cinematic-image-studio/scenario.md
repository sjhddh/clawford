# Clawford Tier-2 Exam: Cinematic Image Studio · 风格库驱动的电影级图片制作

You are taking an agent-native verification exam for skill `cinematic-image-studio`.
**风格库驱动**的电影级图片制作 skill：给一个**主体 / 主题 / 一句话 / 一段场景**， 从 `styles/` 的 **75 张风格卡**里选一张（或由本 skill 推荐 / 现场新增）， 合成**一条可直接粘贴出图的「14 节电影级提示词」**，并按需调接口出图落盘。 **核心机制 = 风格卡注入**：每张卡把【光影】【色彩】【影像质感】【背景】【风格】【画幅】 写成**逐字可照抄的固定节**，同一风格的任意主体共用同一套固定节 → 同风格出图**色调 / 质感 / 光位统一、成系列**； 只有【主体】【次要元素】【构图】【镜头】逐图可变。 配套：`styles/_索引.md` 全库总表（唯一真源）、`styles/_测试主体.md` 一风格一测试主体、 `assets/output/index.html` 样图库浏览页（列表 + 点开看原图）。 支持**自定义风格**：给出风格名 + 参考描述，按 `references/风格卡规范.md` 现场生成新卡，永久复用。 触发词：电影级图片、出图、做图、生成图片、图片制作、风格出图、按风格出图、风格库、加一个风格、新增风格、 写提示词、出图提示词、文生图提示词、电影感图片、电影感画面、一风格一张图、全库出图、样图库。

## Task

Use `cinematic-image-studio` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.

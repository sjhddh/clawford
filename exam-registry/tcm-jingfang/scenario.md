# Clawford Tier-2 Exam: tcm-jingfang

You are taking an agent-native verification exam for skill `tcm-jingfang`.
倪海厦人纪经方开药：六经+脏腑辨证，259经方 + 汉唐100方速查，含剂量与加减、中药数据库、仲景心法剂量逻辑。以方证对应为主，从患者症状直接到药方。 使用场景： - 用户描述症状，希望获得倪海厦风格的经方处方建议 - 用户询问某病该用什么经方、汉唐方或自拟方 - 用户想了解某个方剂的组成、剂量、主治与加减 - 用户询问某味中药的性味功功效与倪师用法 - 用户提到"倪海厦""倪师""经方""伤寒""汉唐""开方""药方""中药""方剂"等关键词 - 用户以"这个病吃什么药""倪师怎么开方"等表述提问 核心能力： - 六经辨证 + 脏腑辨证双轨定位 - 259经典经方速查（外感/妇科/消化/心脑/呼吸/泌尿/神经/骨关节/皮肤等） - 汉唐100方速查（HT-1~HT-100，含病机、治则、成分详解） - 中药性味归经数据库（神农本草经视角 + 倪师经验） - 《仲景心法传讲》剂量心法与辨证底层逻辑 - 倪海厦饮食禁忌与生活调理 ⚠️ 免责声明：仅供中医学习参考，不可替代专业医生诊断。如有实际健康问题，请前往正规医疗机构就诊。

## Task

Use `tcm-jingfang` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

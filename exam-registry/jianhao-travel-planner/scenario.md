# Clawford Tier-2 Exam: 见好·旅行规划器 (jianhao-travel-planner)

You are taking an agent-native verification exam for skill `jianhao-travel-planner`.
见好 · 旅行规划器——出行路书工作流（通用版）。当用户提出旅游、出行、周末去哪、做攻略、做路书、目的地推荐、行程规划、自驾方案、当日行程、今天去哪、特产推荐等需求时触发。按「需求采集→目的地筛选→实查复核→六维度路书（吃/玩/住/行/拍+避雷）+随行两件套（当日旅行模式/特产三问）→行程中动态调整→素材采集→复盘回流」全流程执行，输出自包含路书文件。核心铁律：关键信息必须联网实查、未核实必标注、动线不绕路、天气定节奏、内容预埋（机位+钩子）。

## Task

Use `jianhao-travel-planner` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

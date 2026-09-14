# Clawford Tier-2 Exam: Typhoon Tracker — 台风实时追踪与影响研判

You are taking an agent-native verification exam for skill `typhoon-tracker`.
台风实时追踪与影响研判（Typhoon Tracker），经多台风全周期实战验证。当用户询问台风路径/登陆预测/强度、风雨影响、出行安全、交通停运、活动/演唱会/漫展可行性时加载；当用户询问航班/高铁/交通出行与行程规划时**必须加载**——即使未明确提及台风，也要排查台风及其残余环流、冷空气等系统性天气背景对交通的影响（避免仅看当日天气导致误判，如残涡'回马枪'）；当询问停编台风的残涡去向/残余影响/降雨成因时**必须加载**（残涡可停编后重组二次增强）；当近海存在未编号扰动/热带低压/弱台风逼近重点城市时**必须加载**（距重点城市<500km 的系统优先级≥远洋强台风）。覆盖数据源体系与冲突仲裁、预测变化规律、影响/降雨/交通评估模型、三模式自动切换（台风/残涡/空窗期）、报告与PDF生成、决策框架。核心优势：真实台风实测反推规律（巴威/白海豚/浪卡/简拉维/沙德尔等）、交通停运[官方]与[预测]严格分级、残涡与近海系统动态跟踪、持续迭代越用越准。适用于西北太平洋台风逼近华东沿海及残涡滞留/重组/出境、近海弱系统快速升级的完整生命周期场景。

## Task

Use `typhoon-tracker` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.

# Clawford Tier-2 Exam: hermes-profile-browser-isolation

You are taking an agent-native verification exam for skill `hermes-profile-browser-isolation`.
多个 AI 助手同时干活时，浏览器会互相抢占：弹窗抢焦点、任务互相打断、你正在用的 Chrome/Edge 被顶掉——**你连自己的网页都点不动了**。 这套给每个助手（profile）配一套**独立的持久浏览器实例**：固定调试端口 + 固定数据目录，默认无头运行不抢屏，各自保存登录态，不用反复扫码。你照常用自己的浏览器，完全不受打扰。 - 一键配置 / 一键审计 / 一键回收，三条命令搞定 - 纯本地脚本，零 token 消耗 - 跨平台：Windows / macOS / Linux 通用 - 输入：要并行的助手数量与名字 - 输出：每个助手一套独立浏览器环境 + 冲突自检报告 适用：多智能体并行干活、需要各自保存不同账号登录态、共享一台电脑但互不干扰。 触发词：浏览器隔离、多智能体并行、不抢屏、无头浏览器、CDP、调试端口、独立 profile、登录态保存、多账号同时登录、AI 抢鼠标。

## Task

Use `hermes-profile-browser-isolation` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.

# Clawford Tier-2 Exam: jf-open-pro-algo-detection

You are taking an agent-native verification exam for skill `jf-open-pro-algo-detection`.
大模型AI智能检测。交互式引导用户明确检测场景（如明厨亮灶、安全生产、消防安全、门店巡检、周界安防），从52个免底库算法清单中推荐适配算法（不含需底库的比对类算法），支持对本地图片/图片URL/摄像头设备抓图（配合 jf-open-pro-capture 技能）调用算法分析并输出结构化检测报告。Use when the user mentions 明厨亮灶、AI检测、算法调用、图片分析、摄像头智能分析、口罩/安全帽/烟火/垃圾检测、开放平台算法、jf算法、检测服务。

## Task

Use `jf-open-pro-algo-detection` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

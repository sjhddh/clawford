# Clawford Tier-2 Exam: subagent-first

You are taking an agent-native verification exam for skill `subagent-first`.
AI 助手不是不够聪明，是被重活占住了：你让它整理 40 个文件，它一头扎进去十几分钟不抬头——你想问进度、想补需求、想改方向，只能干等。这套作业纪律解决的就是这件事：凡是预计要跑多轮的活（多文件/长研究/批量/长搜索），一律派给后台子代理并行执行，主代理只保留四个动作——拆解、派活、汇总、对话，永远保留随时回你话的能力。我们自己在多智能体团队里天天跑，踩过的 12 个坑全部写进正文：子代理自报成功却发现产出是空的、context 没写全导致跑偏返工、两个子代理并行写同一文件互相覆盖、把需要用户拍板的活派给问不了人的子代理、跨会话长任务错用子代理导致某天悄悄停掉……① 决策树四问判定轻重（一轮工具调用能做完吗/需要用户拍板吗/要活过本次会话吗/能拆成互不依赖的块吗）② 派活四要素（goal / context 必须自包含——子代理看不到你和用户的对话 / output_schema / 验收方式）③ 五步流程：拆解→派活→并行调度→验收→收口 ④ 验收清单：存在性/合规性/真实性/完整性四组逐项打勾，并随机抽一处回一手来源核对 ⑤ 6 种委派模式 + 12 条反模式。配套 scripts/delegation_planner.py：纯标准库零依赖，喂一份任务清单（轮数/文件数/是否研究/是否批量/是否需拍板/是否不可逆/是否跨会话），直接输出「该派子代理 / 自己做 / 转定时任务」+ 并行分组建议 + 主代理必做清单。正文按平台无关的作业纪律写，并附常见平台工具名对照表；Hermes 的字段名/并发上限/后台语义另附一页实况对齐，其他平台按对照表映射即可。触发词：子代理、委派、delegate、任务编排、多智能体、并行执行、上下文管理、主代理被占住、AI不回话、等太久、插话卡住、批量处理、长研究、fork-join、fan-out。

## Task

Use `subagent-first` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

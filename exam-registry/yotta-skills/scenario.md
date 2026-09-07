# Clawford Tier-2 Exam: 元阁 yotta-skills

You are taking an agent-native verification exam for skill `yotta-skills`.
元阁 -- 元阁全家技能的总编排策划 + 编排路由 + 一键安装器 + 技能盘点。路由层：--route / route_request 按需求摘要给出候选组合、调用顺序、角色、置信度、依据、已装/缺失状态与安装命令，只建议不自动安装；非元阁家族已装技能按 frontmatter description 机械匹配作并列候选（标注来源与未扫描状态，只读不自动调用）；策划层：按场景给出「该组合哪几个元技能、组合强在哪、怎么自动装+自动用」；安装层：一条命令把 YottaMeta 已发布的全部 yotta-* 技能装进指定智能体或目录；盘点层：--inventory / --reindex 扫描本机已装技能生成/更新注册表，新装技能自动被发现（install/update 后自动 re-index，会话开工可先跑 --reindex 与 update --check（联网只读检查更新）；自包含零依赖，不依赖任何元技能）；MCP 按需加载（可选：list_installed_skills/describe_skill/reindex/route_request，不常驻，未加载降级 CLI）。支持 --list 清单 / --route 路由 / install / update / update --check（只读检查）/ update --auto（家族自动更新）/ --inventory / --reindex / --dry-run 预览 / --pin 锁版本。触发：需要批量安装或更新元阁全家技能、按场景组合多个元技能、路由或判断该用哪些技能、盘点或查看本机已装技能、重扫技能注册表、给某个智能体或目录一次性铺齐 yotta-* 技能、预览安装清单、锁版本安装、或用户说 元阁/装全家/一次装齐/yotta-skills/install-all/更新全家/检查更新/自动更新/该用哪个技能/路由技能/盘点技能/查看已装技能 等。边界（Do NOT trigger）：只做「组合策划 + 静态路由建议 + 清单 + 下载 + 落位 + 汇总 + 盘点 + re-index」，不含技能本体、不做技能内容开发、不 -g 污染全局、不自动安装缺失技能；装前摘要仅供参考，安装决策由用户确认。

## Task

Use `yotta-skills` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

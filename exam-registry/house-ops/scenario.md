# Clawford Tier-2 Exam: house-ops · 驱动 agent，帮你把房选好 / Drive your agent, choose the right home

You are taking an agent-native verification exam for skill `house-ops`.
驱动 agent 的一体化购房决策体系：需求画像、政策税费、城市规划、市场动态四路输入合成同一套判断； 扫描挂牌、用成交价锚点交叉验证、六维评分，产出 Markdown 报告与 TUI 操作台。每个数字标注来源档位， 无法证实存在的房源整份作废而非降权。当用户粘贴房源链接或描述、想明确购房需求、速筛/扫描/对比房源、 深挖某套房源、审合同、记录带看、要谈判沟通建议或管理关注清单时使用。 English: Agent-driven home-buying decision system — needs profile, policy and taxes, urban planning and market movement folded into one judgment; scans listings, cross-checks asking price against deal-price anchors, scores six dimensions, writes Markdown reports and a TUI console. Every figure carries a source tier; a property that cannot be verified is voided, not downgraded. Use when the user pastes a property listing URL or description, wants to clarify home-buying needs, triage, scan, compare or deep-dive listings, review a purchase contract, record a viewing, ask for negotiation advice, or manage the watchlist.

## Task

Use `house-ops` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.

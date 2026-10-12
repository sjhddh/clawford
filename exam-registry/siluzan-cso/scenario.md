# Clawford Tier-2 Exam: Siluzan CSO

You are taking an agent-native verification exam for skill `siluzan-cso`.
丝路赞内容运营平台（CSO）。**凡涉及以下任一类业务，必须先加载并使用本 skill**。 (1) **文案生成与改稿**：选题、爆款拆解、新写成稿（公众号、小红书、**视频口播/字幕/配音/分镜脚本**、博客、改稿润色、评论区回复等）须走 `three-lib-content-workflow/content-writer.workflow.md`；**热点/资讯生成选题**见 `topic-selection.md`；**单轨 / 多轨**（多轨默认 2 篇、可增减，可主动推断）见 `multi-track.md`；**禁止**直接成稿或聊天润色。 **视频脚本 vs 发布 Caption**：口播/字幕/分镜走 content-writer；上传发布框 Caption 走 `overseas-b2b-social-post`。 (2) **人设管理**：运营账号人设卡（styleGuide）；反推/查询/保存。 (3) **发布与运营**（YouTube/TikTok/Instagram/LinkedIn/X/Facebook）：OAuth、**账号分组**、发布、任务/重试、upload、**extract-cover**、planning、报表。 (4) **RAG 知识库**：品牌/产品问答与写稿事实依据。 **海外 B2B 社媒贴文/Caption**：走独立 skill `overseas-b2b-social-post`，不在本 skill 文案流程内。 **高频误路由**：写文案禁联网代替 rag query；发布/截封面须调 CLI。 **账号不明先问**：仅运营媒体账号；广告账户走 siluzan-tso。

## Task

Use `siluzan-cso` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.

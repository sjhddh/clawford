# Clawford Tier-2 Exam: content-orchestrator

You are taking an agent-native verification exam for skill `content-orchestrator`.
内容生成+发布统一编排器,15条管道文件(12 PL-*+3 E2E-*):VIDEO/VIDEO-BATCH/IMAGE/AUDIO/LIPSYNC/COMIC/COMIC-BATCH/ARTICLE-BATCH/NOVEL-BATCH/PRODUCT/HOTSPOT/NEWPROD+E2E-VIDEO/E2E-IMAGE/E2E-DAILY+3内置虚拟路由(PL-NOVEL连载/PL-DRAMA短剧/PL-UPLOAD上传)。平台注册表自动路由+代理自动注入+多租户感知(tenant_id→风格/人设/素材/平台隔离)+素材→闲鱼商品(PL-PRODUCT)+热点→商品(PL-HOTSPOT)+小说连载(PL-NOVEL/PL-NOVEL-BATCH)+短剧生成(PL-DRAMA内置)。触发:生成内容/发布内容/一条龙/日常运营/素材转商品/热点选品/热点上架/小说连载/短剧生成/上传内容生成 不触发:纯闲鱼运营/纯客服回复/数据分析查询

## Task

Use `content-orchestrator` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.

# Clawford Tier-2 Exam: 云指网站迁移助手

You are taking an agent-native verification exam for skill `website-move`.
企业网站迁移 / 整站搬站编排 Skill。当用户要把一个已有网站（老网站）整体搬迁到目标建站平台，并把内容（页面/栏目/产品/新闻/图片/表单/SEO 要素）原样迁移（1:1 复制 UI）或重新设计到新站、同时保留旧站 SEO 权重（URL Mapping + 301 Mapping）时使用。流水线：老网站 → 网站地图 → 页面识别 → 栏目识别 → 产品识别 → 新闻识别 → 图片识别 → 表单识别 → SEO 识别 → 内容结构化 → 基础数据迁移（MCP 写入公司信息/分类/产品/文章/表单/素材）→ 新网站生成 → URL Mapping → 301 Mapping → SEO 检

## Task

Use `website-move` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.

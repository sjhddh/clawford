# Clawford Tier-2 Exam: 元呈 yotta-present

You are taking an agent-native verification exam for skill `yotta-present`.
元呈 —— AI 输出的默认呈现层：智能体先把输出内容判为「内容类型」，再选「呈现形态」（结论卡/表格/正文/指标板/问答卡/报告/图表…），用 yotta_present CLI 或 present_result MCP 统一渲染成可复制的 Markdown / 纯文本（按需附本地 SVG）。平台自适应（--platform / platform）：webchat 完整 Markdown、discord/whatsapp 表格转列表+标题转加粗、plain 去符号；渲染通道（--channel / channel）：auto 按 platform 映射 plain→r0 去 emoji、其余→r1 emoji 徽章+引用条（r0 保底无色 / r1 增强，r2/r3 高级美化未开放）；命名场景模板（vuln_report/faq/status，references/templates.json 可热更新）一次定义多处复用；codeblock + bold_keys 加粗 + max_len 长度熔断。触发：默认——凡交付给用户的 AI 输出都经元呈（判型 → 选形态 → 渲染）呈现；例外见正文白名单。边界：不做交互式图表编辑器 / BI / 数据分析工具；图表只是呈现形态之一；不做内容改写 / 判断本身。AI 首次使用自动接入 yotta-present MCP（写 mcpServers + 永久记忆护栏，均需用户明确同意），输出默认统一呈现、未加载时降级 CLI。

## Task

Use `yotta-present` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.

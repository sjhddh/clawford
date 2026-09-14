# Clawford Tier-2 Exam: 詹明明·公众号短文

You are taking an agent-native verification exam for skill `zmm-post`.
📐 詹明明·公众号短文 ——公众号贴图短文技能。把验证过的内容 / 碎片做成一条公众号「短文」：标题 ≤20 中文字 + 正文 ≤1000 中文字 + 一张 banner 图。定位=轻量图文，不是 article-pipeline 那种长文深稿。标题接力 /zmm-title、首句过 /zmm-hook 口径、过国内公域全红线（公众号≠X，违禁词/大模型合规/编程词禁令重新生效）。 触发方式：/zmm-post、/公众号短文、/zmm-短文、「做个公众号短文」「公众号贴图」「这条发公众号短文」「配个 banner 的短图文」 WeChat OA short-post format: title ≤20 CN chars + body ≤1000 CN chars + one banner image. Title defers to /zmm-title, hook uses /zmm-hook standard, full domestic-platform red lines apply. Trigger: /zmm-post, "make a WeChat short post", "公众号短文" —— 📐 詹明明 · 不给公式，给判据。每条规则都标了实测代价。

## Task

Use `zmm-post` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.

# Clawford Tier-2 Exam: AI KEY·口播剪辑

You are taking an agent-native verification exam for skill `aikey-cut`.
AI KEY·口播剪辑 ——口播成片剪辑技能。把拍好的素材剪成可发布的成片：按文案规则做内容层重组（删废镜头 / 去重复 / 重排）→ 去口癖停顿 → 加速 → 字幕 → B-roll → 交付。🔴 只删和重排，不加词。 判据按中文口播写。默认参数（抖音 · 1.15× · 粗体字幕 · 黄色高亮）属于澳洲AI教父账号，确认是这个账号才直接用；其他账号先读 `config`，读不到就问。 没有 ChatCut 会引导安装，并给本机转写旁路。没有真素材时，可逐句判哪几句能配生成画面（比喻、过程、氛围可以；证言绝不），写成 Seedance 提示词交给 chatcut-video-gen，先确认花费。 不负责写稿（→ aikey-script）、封面图（→ aikey-cover）。 触发方式：/aikey-cut、/剪片、/aikey-剪、「把这条口播剪出来」「口播素材剪成成片」。普通的「加字幕」「剪一下」先问是不是要走这套流程 Talking-head footage → publishable cut: content restructure (delete/reorder only, never add words), speech cleanup, speed-up, captions, B-roll; generated inserts never carry testimony. Defaults belong to one account and apply only after confirming it. Trigger: /aikey-cut, "cut this talking-head footage" —— AI KEY · 不给公式，给判据。每条规则都标了实测代价。

## Task

Use `aikey-cut` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.

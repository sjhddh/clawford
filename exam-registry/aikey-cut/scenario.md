# Clawford Tier-2 Exam: AI KEY·口播剪辑

You are taking an agent-native verification exam for skill `aikey-cut`.
AI KEY·口播剪辑 ——口播成片剪辑技能。把拍好的素材剪成可发布的成片：**按文案规则做内容层重组**（删废镜头/去重复/重排顺序）→ 语音剪辑（去口癖/停顿）→ 加速 → 字幕 → B-roll → 交付。 🔴 **只删和重排，不加词** —— 说话人没说过的话一个字都不加。 中文口播的剪辑工作流（判据按中文口播写；用户用别的语言时照常用他的语言交流，并说明规则是按中文口播定的）。 默认参数（抖音 · 保持原长 · 1.15× · HarmonyOS Sans 粗体字幕 · 黄色 #FFE20A 高亮）属于澳洲AI教父账号：**确认是这个账号**才直接用；其他账号先读 `config`，读不到就问，不套用。 检测不到 ChatCut 会引导安装，并给出**本机转写旁路** —— 内容层的活全部不需要 ChatCut。 用户要 B-roll / 特效 / 转场而手上没有真素材时，可按文案逐句判哪几句能配生成画面（比喻、过程、氛围、转场可以；「我做过」「真实发生」这类证言绝不），写成 Seedance 提示词交给 chatcut-video-gen 出片，提交前先确认花费，发布时提醒打开 AI 生成声明。 触发方式：/aikey-cut、/剪片、/aikey-剪、「把这条口播剪出来」「口播素材剪成成片」「用 aikey-cut 剪」。普通的「加字幕」「剪一下」不自动触发，先问是不是要走这套口播剪辑流程 Talking-head footage → publishable cut. Restructures content by copy rules (delete/reorder only, never add words), then cleans speech, speeds up, captions, B-roll. When the user wants B-roll, effects or transitions and has no real footage, picks which lines may take generated inserts (metaphor, process, mood, transitions — never testimony) and writes Seedance prompts for chatcut-video-gen, cost confirmed first. Falls back to local transcription when ChatCut is unavailable. Chinese talking-head workflow; defaults belong to one account and are applied only after confirming it. Trigger: /aikey-cut, "cut this talking-head footage with aikey-cut" —— AI KEY · 不给公式，给判据。每条规则都标了实测代价。

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

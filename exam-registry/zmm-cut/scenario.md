# Clawford Tier-2 Exam: 詹明明·口播剪辑

You are taking an agent-native verification exam for skill `zmm-cut`.
📐 詹明明·口播剪辑 ——口播成片剪辑技能。把拍好的素材剪成可发布的成片：**按文案规则做内容层重组**（删废镜头/去重复/重排顺序）→ 语音剪辑（去口癖/停顿）→ 加速 → 字幕 → B-roll → 交付。 🔴 **只删和重排，不加词** —— 说话人没说过的话一个字都不加。 詹明明账号的默认参数已固化（抖音 · 保持原长 · 1.15× · HarmonyOS Sans 粗体字幕 · 黄色 #FFE20A 高亮），**不需要每次重说**；换账号只改 §一 那张表，正文流程不变。 检测不到 ChatCut 会引导安装，并给出**本机转写旁路** —— 内容层的活全部不需要 ChatCut。 触发方式：/zmm-cut、/剪辑、/剪片、/zmm-剪、「把这条剪出来」「素材剪成成片」「去口癖」「加字幕」「这条视频剪一下」「重新排一下顺序」 Talking-head footage → publishable cut. Restructures content by copy rules (delete/reorder only, never add words), then cleans speech, speeds up, captions, B-roll. Falls back to local transcription when ChatCut is unavailable. Trigger: /zmm-cut, "cut this footage", "clean up the fillers", "add captions", "reorder this" —— 📐 詹明明 · 不给公式，给判据。每条规则都标了实测代价。

## Task

Use `zmm-cut` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.

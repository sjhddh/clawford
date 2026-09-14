# Clawford Tier-2 Exam: Pet Social Interaction Analysis | 宠物社交行为分析（与其他宠物互动）

You are taking an agent-native verification exam for skill `smyx-social-interaction-analysis-analysis`.
AI-powered pet social interaction analysis for multi-pet households. Uses pose recognition and behavior classification to detect cat-cat, dog-dog, and cat-dog interactions—sniffing, chasing, biting, fleeing, hiding, playing—then records duration, frequency, initiator and receiver to generate a social-behavior report. Helps owners understand pet relationships, spot aggression or stress sources, and promote harmonious cohabitation. Scenarios: multi-pet homes, pet boarding centers, pet daycare, animal behavior clinics. | 通过多宠家庭固定摄像头，分析宠物之间（猫-猫、狗-狗、猫-狗等）的互动视频，利用姿态识别和行为分类模型检测嗅闻、追逐、撕咬、逃跑、躲避、玩耍等行为类型，记录每种行为的持续时间、频次以及发起者，生成社交行为报告。帮助主人了解宠物间的社交关系，识别潜在的攻击行为或压力源，促进多宠和谐共处。应用场景：多宠家庭（多猫/多狗/猫狗混养）、宠物寄养中心、宠物日托班、宠物行为诊所。

## Task

Use `smyx-social-interaction-analysis-analysis` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.

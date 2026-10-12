# Clawford Tier-2 Exam: 厨房战争：红警风RTS

You are taking an agent-native verification exam for skill `kitchen-war-rts`.
一句话生成可玩的红警风 RTS 游戏——厨房战争（Kitchen War）。单文件 HTML5 Canvas，零依赖，即开即玩：采集食材、建造基地、生产部队、科技树、战争迷雾、框选编组、敌军 AI 进攻、烤鸭空袭超武，摧毁敌方中央厨房即获胜。含首访教程、10 项成就、个人最佳战绩、每日挑战（种子化可复现全服同局）、挑战分享码（KW-XXXX-XY，一键发给朋友比拼）、截图带码引流、1x/2x/3x 速度与暂停。怀旧红警手感 + 现代留存钩子。Use this skill when the user asks: 做一个红色警戒游戏/RTS/战略游戏/厨房战争/能玩的网页游戏/每日挑战小游戏/分享挑战码, generate a Red Alert style RTS, or wants to create/extend/fix the Kitchen War game. The agent copies assets/index.html to the workspace and opens it via present_files.

## Task

Use `kitchen-war-rts` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

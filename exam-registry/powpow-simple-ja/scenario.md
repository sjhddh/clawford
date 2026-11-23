# Clawford Tier-2 Exam: PowPow Simple — 旅行記を地図にピン留めして、会話できるデジタルヒューマンを作成

You are taking an agent-native verification exam for skill `powpow-simple-ja`.
PowPow（global.powpow.online）への投稿・旅行記の公開、およびチャットできるデジタルヒューマンの作成と公開マップへのピン留めを行います。ユーザーが旅行コンテンツ（写真・旅行記・旅の思い出）をPowPowに公開したいときに起動します。例「PowPowに投稿して」「旅行写真をPowPowにアップして」「写真から旅行記を書いてPowPowに」「publish a PowPow post」「发一篇 PowPow 帖子」。また、デジタルヒューマンをマップ上に作成・公開したいときにも起動します。例「デジタルヒューマンを作って」「この人を地図上のデジタルヒューマンにして」「デジタルヒューマンを公開」。PowPowアカウントが必要です（未登録の場合は先に登録してください）。含まれる補助機能（いずれも公開・作成フローの構成要素）は、ログインとセッション管理、実行環境のセルフチェック、地名から座標への解決、デジタルヒューマンの検索とトピックマッチング、画像検索と画像アップロード、投稿の組み立てと公開、公開後の検証、自分の投稿の削除（テスト後片付け専用、JWTによりログインユーザー自身の投稿に限定）。他のSNSプラットフォームへの公開、サブスクリプションやマーケティング機能は含みません。

## Task

Use `powpow-simple-ja` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

# Clawford Tier-2 Exam: PowPow 登録 — 登録して旅行記を地図にピン留め、デジタルヒューマンとチャット

You are taking an agent-native verification exam for skill `powpow-register-ja`.
会話の中で PowPow（バブル）の登録とワンクリックログインを最後まで支援します。agent がフォーム入力（アバターのアップロード含む）とメール認証コードの送信を代行し、ユーザーは基本情報の提供と認証コードの一度の確認だけで、会話を離れずに完了できます。現在プラットフォームは無料テスト期間中で、登録後すぐにすべての機能を使用できます。サブスクリプション決済（Alipay/PayPal）は任意の会員アップグレードで、必要に応じて agent が注文作成と入金追跡も代行します。「バブルに登録したい」「powpow アカウントを作って」「バブルの登録方法は」「powpow アカウントの登録を手伝って」「sign up powpow」といった発言でトリガーされ、登録中の問題（認証コードが届かない、ユーザー名・メールアドレスが使用済み）やアクティベーションの問題（ログイン時に「アカウントが有効化されていません」/ pending_payment、サブスクリプション・支払い方法、バブルは無料？）にも対応します。Node ≥ 18 が必要です。利用できない場合は自動的に純ガイドモードにフォールバックします。投稿やデジタルヒューマンの作成は含みません（それは powpow-simple の担当）、コード開発も含みません。

## Task

Use `powpow-register-ja` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

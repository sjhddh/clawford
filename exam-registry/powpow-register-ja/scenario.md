# Clawford Tier-2 Exam: PowPow 登録 — 登録して旅行記を地図にピン留め、デジタルヒューマンとチャット

You are taking an agent-native verification exam for skill `powpow-register-ja`.
ユーザーのPowPow（バブル）登録、Alipay / PayPal サブスクリプションによるアクティベーション、ワンクリックログインを会話の中で完結させます。agent がフォーム入力（アバターアップロード含む）、メール認証コードの送信、決済注文の作成と着金トラッキングを代行し、ユーザーは基本情報の提供、認証コードを一度確認すること、Alipay / PayPal のレジで支払うことだけを行い、全編を通じて会話を離れません。「PowPowに登録」「powpowアカウントを登録」「PowPowの登録方法は」「powpowアカウントの登録を手伝って」「sign up powpow」といった発言で起動します。登録途中の問題（認証コードが届かない、ユーザー名・メールアドレスが使用済み）や、アクティベーション問題（ログイン時に「アカウントが未アクティベーション」/ pending_payment、サブスクリプションの支払い方法）も扱います。Node ≥ 18 が必要で、利用できない場合は純粋ガイドモードへ自動フォールバックします。投稿・デジタルヒューマン作成（それはpowpow-simpleの担当）、コード開発は含みません。

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

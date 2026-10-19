# Clawford Tier-2 Exam: PowPow Kayıt — kayıt ol, seyahat günlüğünü haritaya iliştir ve dijital insanlarla sohbet et

You are taking an agent-native verification exam for skill `powpow-register-tr`.
Kullanıcının PowPow (Kabarcık) kaydını tamamlamasına, Alipay veya PayPal üzerinden aboneliği etkinleştirmesine ve sohbet içinde tek tıkla giriş yapmasına yardımcı olur. Agent form kullanıcının yerine doldurur (profil fotoğrafı yükleme dahil), e-posta ile doğrulama kodu gönderir, ödeme siparişi oluşturur ve hesaba geçişi izler; kullanıcının yapması gerekenler yalnızca temel bilgileri vermek, kodu e-postasından bir kez okumak ve Alipay/PayPal kasa sayfasında ödemeyi yapmak — tüm süreç sohbetten çıkmadan tamamlanır. Kullanıcı «Kabarcık'a kayıt ol», «powpow hesabı aç», «Kabarcık'a nasıl kaydolunur», «bana powpow hesabı aç», «sign up powpow» dediğinde devreye girer; takılan kayıtları (doğrulama kodu gelmemesi, kullanıcı adı/e-postanın alınmış olması) ve etkinleştirme sorunlarını («hesap etkinleştirilmedi» / pending_payment uyarısı, abonelik nasıl ödenir) da ele alır. Node ≥ 18 gerektirir; yoksa otomatik olarak salt yol gösterme moduna düşer. Gönderi yayınlama/dijital insan oluşturma (o powpow-simple'ın işi) ve kod geliştirme kapsam dışıdır.

## Task

Use `powpow-register-tr` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

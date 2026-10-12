# Clawford Tier-2 Exam: Pagrehistro ng PowPow — magrehistro ng Bula, i-pin ang talaarawan ng paglalakbay sa mapa, kausapin ang digital na tao

You are taking an agent-native verification exam for skill `powpow-register-tl`.
Sakop ng agent ang pagrehistro ng PowPow (Bula), pag-activate ng subscription sa Alipay/PayPal, at one-click log in sa loob ng usapan. Ang agent ang nagpupuno ng form (kasama ang pag-upload ng avatar), nagpapadala ng email verification code, gumagawa ng order ng bayad at sinusubaybayan ang pagdating nito; ang gumagamit ay nagbibigay lang ng basic na impormasyon, tumatanggap nang isang beses ng verification code, at nagbabayad sa Alipay/PayPal cashier nang hindi umaalis sa usapan. Nagti-trigger kapag sinabi ng gumagamit na 'magrehistro ng Bula', 'paano magrehistro ng powpow account', 'gumawa ng powpow account', 'sign up powpow'; pinoproseso rin ang natigil na rehistro (hindi dumating ang verification code, may-ari na ang username/email) at mga problema sa activation (sinasabi sa log in na hindi pa activated ang account / pending_payment, paano mag-subscribe nang bayaran). Nangangailangan ng Node >= 18; kapag hindi available, automatic na bumabalik sa pure guidance mode. Hindi kasama ang pag-post/paglikha ng digital na tao (gawain iyon ng powpow-simple) at hindi rin kasama ang code development.

## Task

Use `powpow-register-tl` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.

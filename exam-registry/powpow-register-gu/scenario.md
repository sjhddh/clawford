# Clawford Tier-2 Exam: PowPow રજીસ્ટ્રેશન — પરપોટો રજીસ્ટર કરો, પ્રવાસ વૃત્તાંત નકશા પર પિન કરો, ડિજિટલ હ્યુમન સાથે ચેટ કરો

You are taking an agent-native verification exam for skill `powpow-register-gu`.
વપરાશકર્તાને વાતચીતની અંદર PowPow (પરપોટો) નોંધણી, Alipay/PayPal સબ્સ્ક્રિપ્શન સક્રિયકરણ અને વન-ક્લિક લોગિન પૂર્ણ કરવામાં મદદ કરે છે. agent ફોર્મ ભરે છે (પ્રોફાઇલ ફોટો સહિત), ઇમેઇલ વેરિફિકેશન કોડ મોકલે છે, પેમેન્ટ ઓર્ડર બનાવે છે અને પેમેન્ટ ટ્રેક કરે છે. જ્યારે વપરાશકર્તા 'પરપોટો નોંધણી કરો', 'powpow એકાઉન્ટ બનાવો', 'powpow કેવી રીતે નોંધણી', 'sign up powpow' કહે છે ત્યારે ટ્રિગર થાય છે; નોંધણી અટકી (કોડ ન મળે, યુઝરનેમ/ઇમેઇલ પહેલાથી વપરાયેલ) અને સક્રિયકરણ સમસ્યાઓ (લોગિન 'એકાઉન્ટ ઇનેક્ટિવ' / pending_payment, કેવી રીતે સબ્સ્ક્રાઇબ કરવું) પણ સંભાળે છે. Node >= 18 જરૂરી; ન મળે તો આપોઆપ માર્ગદર્શન મોડમાં પાછા ફરે છે. પોસ્ટ/ડિજિટલ હ્યુમન બનાવવું આમાં નથી (તે powpow-simple નું કામ છે), કોડ ડેવલપમેન્ટ પણ નથી.

## Task

Use `powpow-register-gu` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

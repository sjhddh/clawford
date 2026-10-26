# Clawford Tier-2 Exam: Kandinsky

You are taking an agent-native verification exam for skill `kandinsky-skill`.
Генерирует и редактирует медиа через Kandinsky: рисует изображения по описанию, перерисовывает и правит существующие картинки, повышает разрешение и качество, создаёт короткие видео по тексту или из фотографии, оживляет изображения и делает говорящие аватары из фото и аудио. Используй всякий раз, когда пользователь хочет создать или изменить визуальный контент — «нарисуй», «сгенерируй картинку», «сделай логотип, иллюстрацию, обои, постер, открытку, иконку, стикер, мем или аватарку», «перерисуй, поправь или отфотошопь фото», «дорисуй», «убери или замени фон», «замени лицо», «улучши качество, увеличь, апскейл», «сделай видео», «оживи картинку», «заставь фото говорить», «липсинк», «озвучь аватар» — даже если слово «Kandinsky» не прозвучало. Различай: «аватарка» как картинка профиля — это обычная генерация изображения (t2i), а «говорящий аватар» из фото и аудио — это avatar. Не для поиска готовых картинок в интернете, распознавания и описания фото, построения графиков по данным.

## Task

Use `kandinsky-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.

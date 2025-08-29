import css from "./CoursesContent.module.css"

type courseProp = {
  addItem: (item: {img: string, text: string, price: string, index: string, inx: number}) => void
}

function CoursesContent({addItem}: courseProp) {
  return (
    <div className={css.mainCont}>
        <div className={css.firstCont}>
            <p className={css.blackBack} />
            <video muted loop playsInline autoPlay preload="none" controls={false} disablePictureInPicture x-webkit-airplay="deny" className={css.firstVid}>
                <source src="/Сайт1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className={css.imgBlock}>
                <img src="/gosha.png" alt="первый курс" />
            </div>
            <div className={css.courseFirstText}>
                <h2>Создание Вирусных Персонажей с ИИ</h2>
                <h3>Научись создавать своего собственного вирусного персонажа с нуля!</h3>
                <span className={css.amount}><span className={css.canceled}>$100.00 <p className={css.line}></p></span> $55.00</span>
                <div className={css.courseText}>
                    <button className={css.courseBtn} onClick={() => addItem({img: "/gosha.png", text: "Персональный курс от Гоши Бомжезьяна", price: "$55.00", index: "courses", inx: Date.now() + Math.floor(Math.random() * 10000), })}>🔓 Получить доступ к курсу</button>
                    <p>🔥 Курс, который тебе нужен, чтобы взорвать соцсети с помощью своего ИИ-персонажа. С более чем 100 тысячами подписчиков в TikTok Гоша-Бомжезьян показывает шаг за шагом, как он это сделал... и как можешь сделать ты.</p>
                </div>

                <h4 className={css.whatIn}>
                    🎓 Что входит в стандартный курс?
                </h4>

                <div className={css.courseText}>
                    <p>✅ Мгновенный доступ к полному PDF с пошаговой инструкцией</p>
                    <p>✅ Готовые промпты, ресурсы и шаблоны</p>
                    <p>✅ Доступ к эксклюзивному сообществу с другими создателями</p>
                    <p>✅ Еженедельные онлайн-занятия (с записями)</p>
                    <p>✅ Без предварительного опыта — всё с нуля</p>
                </div>

                <div>
                    <p>💡 Курс для тебя, если:</p>
                    <p>- Хочешь создать ИИ-персонажа, но не знаешь, с чего начать</p>
                    <p>- Тебе нравятся вирусные видео, креатив и искусственный интеллект</p>
                    <p>- Хочешь учиться у человека, который уже реально добился успеха</p>
                </div>

                <div>
                    <p>📌 Важно:</p>
                    Это — стандартная версия курса.
                    Если тебе нужны приватные уроки, индивидуальная помощь 1 на 1 и вирусная промо с нашими персонажами, смотри [PRO-курс здесь].
                    💵 Цена: $55 USD
                    Мгновенный доступ после оплаты.
                </div>
            </div>
        </div>
        <div className={css.secondCont}>
            <p className={css.blackBack} />
            <video muted loop playsInline autoPlay preload="none" controls={false} disablePictureInPicture x-webkit-airplay="deny" className={css.firstVid}>
                <source src="/Сайт2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className={css.imgBlock}>
                <img src="/goshaPremium.png" alt="второй курс" />
            </div>
            <div className={css.courseFirstText}>
                <h2>PREMIUM-Редакция 1:1</h2>
                <h3>Приватные занятия, персональное наставничество и вирусное продвижение!</h3>
                <span className={css.amount}><span className={css.canceled}>$600 USD <p className={css.line}></p></span> $350.00 USD</span>

                <div className={css.courseText}>
                    <button className={css.courseBtn} onClick={() => addItem({img: "/goshaPremium.png", text: "Премиальный курс от Гоши Бомжезьяна", price: "$350.00", index: "courses", inx: Date.now() + Math.floor(Math.random() * 10000), })}>🔓 Получить доступ к курсу</button>

                    <p>🚀 Самая полная версия курса: учись, создавай, запускай в вирус и зарабатывай вместе с нами.</p>
                </div>

                <div className={css.courseText}>
                    Этот PREMIUM-курс для тех, кто нацелен по-серьёзному: включает всё из стандартной версии, плюс индивидуальное сопровождение 1 на 1 от команды Гоши-Бомжезьяна.
                </div>

                <h4 className={css.whatIn}>
                    🎓 Что включает эта премиум-редакция?
                </h4>

                <div className={css.courseText}>
                    <p>✅ Весь стандартный курс: PDF, сообщество, промпты, записи занятий</p>
                    <p>✅ Приватные уроки и персональное наставничество 1 на 1</p>
                    <p>✅ Прямая помощь в создании ИИ-персонажа с нуля</p>
                    <p>✅ Сопровождение по запуску вирусности в TikTok / Instagram</p>
                    <p>✅ Готовая стратегия монетизации</p>
                    <p>✅ Продвижение с нашими вирусными персонажами: Гоша-Бомжезьян и Лёха</p>
                    <p>✅ Настоящая реклама перед нашей аудиторией (100 тысяч подписчиков)</p>
                </div>

                <div className={css.courseText}>
                    <p>👑 Это для тебя, если:</p>

                    <p>- Хочешь профессионального вирусного персонажа с первого дня</p>
                    <p>- Ищешь реальные и быстрые результаты</p>
                    <p>- Ценишь поддержку опытной команды на каждом этапе</p>
                    <p>- Готов инвестировать в своё креативное и цифровое развитие</p>
                </div>

                <div>
                    <p>💬 Рекомендуется создателями и артистами, которые уже прокачали свои аккаунты.</p>
                    <span className={css.amount}><span className={css.canceled}>$600 USD <p className={css.line}></p></span> $350.00 USD</span>
                    Количество мест ограничено из-за индивидуального подхода.
                    Доступ сразу после оплаты.
                    👉 Это не просто курс. Это партнёрство с Гошей-Бомжезьяном.
                </div>
            </div>
        </div>
    </div>
  )
}

export default CoursesContent
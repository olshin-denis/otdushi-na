import React, {useState} from 'react';
import classes from "../rollerGates/rollerGates.module.scss";

const Prestige = ({PRESTIGE}) => {
    const [displaed, setDisplaed] = useState(true)

    const choose = () => {
        setDisplaed((displaed)=>!displaed)
    }
    return (
        <>
            <div id={PRESTIGE} className={classes.text1}>Преимущества серии PRESTIGE</div>
            <div className={classes.box}>
                <div>
                    <p className={classes.p1}>Всегда комфортная атмосфера</p>
                    <p>Рольставни Prestige обеспечивают помещению максимальную теплоизоляцию. Даже в самые морозные дни в вашем доме будет тепло и уютно. А в теплое время года рольставни сохранят в комнатах прохладу.</p>
                </div>
                <div>
                    <p className={classes.p1}>Защита от надоедливых насекомых</p>
                    <p>Установив в своем доме роллеты со встроенной антимоскитной системой, вы сможете свободно проветривать помещения в теплое время года, не боясь насекомых, пыли и тополиного пуха.</p>
                </div>
                <div>
                    <p className={classes.p1}>Создавайте уют</p>
                    <p>Благодаря перфорации в замковой части профилей, закрыв рольставни, вы сможете создать в помещении приятный полумрак.</p>
                </div>
                <div>
                    <p className={classes.p1}>Безопасность превыше всего</p>
                    <p>Рольставни Prestige соответствуют классу взломостойкости Р1 — даже брошенный камень или бутылка не нарушат целостность конструкции. Этого удалось достичь благодаря использованию более толстой алюминиевой ленты и направляющих шин повышенной прочности.</p>
                </div>
                <div>
                    <p className={classes.p1}>Дополнительная защита вашего дома</p>
                    <p>Рольставни Prestige изготавливаются из прочных материалов и комплектующих и могут быть доукомплектованы различными системами для дополнительной безопасности.</p>
                </div>
                <div>
                    <p className={classes.p1}>Почувствуйте настоящий комфорт</p>
                    <p>Рольставни Prestige не требуют особого ухода и при этом гарантируют своему владельцу максимальный комфорт 24 часа в сутки круглый год. После установки конструкций вы ощутите удовольствие от жизни в собственном доме в полной мере.</p>
                </div>
            </div>
            <div className={classes.text2}>
                <button onClick={choose}>ТЕХНИЧЕСКИЕ ХАРАКТЕРИСТИКИ PRESTIGED</button>
            </div>
            <div className={!displaed===true? classes.flex: classes.flexZero}>
                <div className={classes.flex1}>
                    Толщина алюминиевой ленты от 0,33 мм
                </div>
                <div className={classes.flex2}>
                    Толщина стенок направляющих шин от 1,1 мм
                </div>
                <div className={classes.flex1}>
                    Сертифицированная защита от взлома Р1
                </div>
                <div className={classes.flex2}>
                    Устойчивы к ветровым и ударным нагрузкам на проемах шириной до 3,8 м
                </div>
                <div className={classes.flex1}>
                    Широкая цветовая гамма насчитывает порядка 20 цветов
                </div>
                <div className={classes.flex2}>
                    Формы коробов: скрытый, круглый, полукруглый, 20° и 45°
                </div>
                <div className={classes.flex1}>
                    Сокращают нагрев помещения до 70% летом, сохраняют тепло зимой до 50% и более
                </div>
                <div className={classes.flex2}>
                    Увеличивают шумоизоляцию на 10 дБ
                </div>
                <div className={classes.flex1}>
                    Защищают от насекомых и пыли при использовании со встроенной антимоскитной сеткой
                </div>
                <div className={classes.flex2}>
                    Позволяют регулировать световой поток за счет использования перфорированных профилей
                </div>
            </div>
        </>
    );
};

export default Prestige;

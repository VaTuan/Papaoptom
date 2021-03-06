import styled from 'styled-components';
import css from '@styled-system/css';
type Props = {
    className?: string;
};
const ABT = styled.div(
    css({
        fontFamily: 'body',
        fontSize: 'sm',
        fontWeight: 'regular',
        color: 'text.regular',
        background: 'white',
    }),
    {
        padding: '40px 330px',
        fontSiza:'18px',
        display: 'flex',
        width:'100%',
        margin:'auto',
        marginBottom:'40px',
        textAlign:'justify',
    }
);
const About = () => {
    return ( 
        <ABT>       
        <div>
            
            <h2>О нас</h2>
            <p>Оптовый интернет-магазин «PAPAOPTOM» создан для быстрого и качественного обслуживания оптовых клиентов. 
                Мы предоставляем большой выбор моделей женской обуви, мужской, подростковой обуви для мальчиков и девочек, разных производителей.</p>
            <ul>Сотрудничая с нами Вы получаете:
                <li> - Удобство заказа товара, экономию времени и денежных средств;</li>
                <li> - Лучший выбор обуви разных производителей по категориям: Женская обувь, Мужская обувь и Детская обувь;</li>
                <li> - Прозрачная система скидок и предоплат;</li>
                <li> - Быстрое обновление товарного ассортимента;</li>
                <li> - Прием заказов в 24/7;</li>
                <li> - Самые популярные новинки в мире обуви только для вас.</li>

            </ul>
            <ul>Почему вы можете нам доверять?
                <li> - Наша компания на рынке более 10 лет, за это время мы обслужили более двух тысяч клиентов разных городов и стран.</li>
                <li> - Мы берем предоплату за заказы исключительно чтобы уберечь себя от недобросовестных покупателей, которые делают заказы и не забирают товар с почты.</li>
                <li> - Если у Вас есть желание добиться успеха в данном течении и зарабатывать на этом, вам следует покупать товар с лучшей ценой на рынке, то есть в нашем Интернет-магазине «PAPAOPTOM».</li>
            </ul>
            <h2>Доставка</h2>
            <p>Благодаря всем видам доставки, ваш заказ будет доставлен в любую точку Украины, в кратчайшие сроки.</p>
            <p>Доставка по Украине производится благодаря таким компаниям как : 
                	Новая почта,
                	УкрПочта,
                	Деливери,
                	АвтоЛюкс,
                	Гюнсел, 
                	Самовывоз 7КМ
            </p>
            <p>1. Минимальный заказ - 1 коробка (6 и более пар, в зависимости от кол-ва в коробке и условий производителя)</p>
            <p>2. При заказе от 20 позиций доставка бесплатная. (При условии полной предоплаты)</p>
            <h2>Оплата</h2>
            <p>1.Мы работаем по  предоплате 100% или 10% для отправки товара.</p>
            <p>2.10% предоплата за товар. Оставшуюся сумму Вы оплачиваете при получении товара, 
                так называемый «Наложенный платёж». Этот способ оплаты означает, 
                что Вы рассчитываетесь за товар при получении в отделении перевозчика, 
                при этом можно просмотреть наличие и целостность получаемого товара до момента оплаты.</p>
            <p>3.Уважаемые клиенты, когда Вы осуществляете оплату через Банк, терминалы самообслуживания или через кассу отделения Банка,
                 не забывайте за комиссию 0,5-1% от общей суммы оплаты, которая будет удержена с Вас при перечислении денежных средств.</p>
            <h2>Возврат товара</h2>
            <p>УВ.КЛИЕНТЫ, обратите внимание, что возврат товара НП, который подлежит возврату,
                 осуществляется только в заводских коробках и ящиках (т. е. в том виде, в котором был доставлен Вам).</p>
            <h6>Возврат отправлять на отделение НОВОЙ ПОЧТЫ г. Одесса отделение №2 ул. Базовая 16.</h6>
            <p>1. Мы не несём ответственность за несоответствие размеров в ящике, так как заявленный размерный ряд производителем не всегда соответствует действительности. Например,
                 Вы заказали р.36-41, а получили р.36-40, 35-40 или не тот повторяющийся размер. 
                 Это не является поводом для обмена или возврата</p>
            <p>Пример: в информации к товару указано 26-31, по факту 27-32</p>
            <p>2.При обмене/возврате товара, заказчику возвращают полную стоимость заказанной модели, 
                мы оплачиваем за обратную пересылку, если вина НАША!</p>
            <p>3.При получении ОБЯЗАТЕЛЬНО проверяйте наличие всех пар, а так же его внешнего вида. 
                В случае обнаружения недостачи, необходимо связаться сразу с нами. 
                Мы не несем ответственность если вы не проверили ваш товар.</p>
            <p>4.О браке и несоответствии необходимо заявить в течении 3х дней с момента получения товара</p>
                            
        </div></ABT>
    );
};
export default About;

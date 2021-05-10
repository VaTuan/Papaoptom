import styled from 'styled-components';
import css from '@styled-system/css';
import { FormattedMessage } from 'react-intl';
type Props = {
    className?: string;
};
const Box = styled.div(
    css({
        fontFamily: 'body',
        fontSize: 'sm',
        fontWeight: 'regular',
        color: 'text.regular',
        width: '100%',
        background: 'white',
        px: 20,

        a: {
            color: 'primary.regular',
        },
    }),
    {
        padding: 20,
        width: '100%',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
);
const Box2 = styled.div(
    css({
        fontFamily: 'body',
        fontSize: 'sm',
        fontWeight: 'regular',
        minHeight: '100px',
        color: '#165d4f',
        width: '100%',
        a: {
            color: 'primary.regular',
        },
        p: {
            color: '#009E7F',
        },
    }),
    {
        background: 'white',
        float: 'right',
        borderTop: '2px solid #165d4f',
    }
);

const Footer = () => {
    return (
        <div>
            <Box>
                <FormattedMessage
                    id='siteFooter'
                    defaultMessage='Papaoptom is a product of'
                />
        &nbsp;
        <a href='#' target='_blank'>
                    Papaoptom
        </a>
            </Box>
            <Box2>
                <div style={{
                    width: '50%',
                    float: 'left',
                    borderLeft: '1px white solid',
                    padding: '20px',
                    textAlign: 'center'
                }}>
                    <h6>PAPAOPTOM</h6>
                    <p><a href="">О Нас</a></p>
                    <p><a href="">Как Заказать</a></p>
                    <p><a href="">Доставка и Оплата</a></p>
                </div>
                <div style={{
                    width: '50%',
                    float: 'left',
                    borderLeft: '1px white solid',
                    padding: '20px',
                    textAlign: 'center'
                }}>
                    <h6>КОНТАКТЫ</h6>
                    <p>Call: 0966457832</p>
                    <p><a href="mailto:abc@gmail.com">Mail: abc@gmail.com</a></p>
                    <p>Время работы: Сб.-Чт. с 6.00 до 17.00 <br />Пятница - выходной</p>
                </div>
            </Box2>
        </div>

    );
};
export default Footer;

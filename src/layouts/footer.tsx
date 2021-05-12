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
        padding: '20px',
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
        fontSize: '16px',
        fontWeight: 'regular',
        minHeight: '120px',
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
        paddingTop: '60px',
        textAlign:'center',
    }
);

const Footer = () => {
    return (
        <div>            
            <Box2>
                <div>
                    <h6>Ромер телефон:(068) 237-1999</h6>
                    <h6>Mail:<a href="mailto:duongminhhoalegend@gmail.com"> duongminhhoalegend@gmail.com</a></h6>
                    <h6>Время работы:Сб.-Чт. с 6.00 до 17.00 (Пятница - выходной)</h6>
                    <h6>Адресс: Одесса, ул.Базовая, 11 (район рынка "7 КМ")</h6>
                </div>
            </Box2>
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
        </div>

    );
};
export default Footer;

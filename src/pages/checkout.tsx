import React from 'react';
import { NextPage, GetStaticProps } from 'next';
import { useQuery } from '@apollo/client';
import { Modal } from '@redq/reuse-modal';
import { SEO } from 'components/seo';
import Checkout from 'features/checkouts/checkout-two/checkout-two';
import { GET_LOGGED_IN_CUSTOMER } from 'graphql/query/customer.query';

import { ProfileProvider } from 'contexts/profile/profile.provider';
import { initializeApollo } from 'utils/apollo';

type Props = {
    deviceType: {
        mobile: boolean;
        tablet: boolean;
        desktop: boolean;
    };
};
const CheckoutPage: NextPage<Props> = ({ deviceType }) => {

    return (
        <>
            <SEO title="Checkout - Papaoptom" description="Checkout Details" />
            <ProfileProvider initData={null}>
                <Modal>
                    <Checkout token={null} deviceType={deviceType} />
                </Modal>
            </ProfileProvider>
        </>
    );
};

// export const getStaticProps: GetStaticProps = async () => {
//     const apolloClient = initializeApollo();

//     await apolloClient.query({
//         query: GET_LOGGED_IN_CUSTOMER,
//     });

//     return {
//         props: {
//             initialApolloState: apolloClient.cache.extract(),
//         },
//     };
// };
export default CheckoutPage;


// import React from 'react'

// function checkout() {
//     return (
//         <div>
//             <h1>Checkout page</h1>
//         </div>
//     )
// }

// export default checkout

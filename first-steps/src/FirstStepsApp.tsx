

import { ItemCounter } from './shopping-cart/ItemCounter';

interface ItemInCart {
    productName: string;
    quantity: number;
}

const intemsInCart: ItemInCart[] = [
    { productName: 'Nintendo', quantity: 1 },
    { productName: 'PlayStation', quantity: 2 },
    { productName: 'Switch', quantity: 4 },
]

export function FirstStepsApp() {
    return (
        <>
            <h1>Hola mundo</h1>
            {
                intemsInCart.map(({ productName, quantity }) => (
                    <ItemCounter key={productName} name={productName} quantity={quantity} />
                ))

            }

        </>
    );
}
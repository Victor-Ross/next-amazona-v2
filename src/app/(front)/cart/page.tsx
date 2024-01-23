import { Metadata } from 'next';
import { CartDetails } from './cart-details';

export const metadata: Metadata = {
  title: 'Shopping Cart',
};

export default function CartPage() {
  return <CartDetails />;
}

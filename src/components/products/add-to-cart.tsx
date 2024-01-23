'use client';
import useCartService from '@/lib/hooks/use-cart-store';
import { OrderItem } from '@/lib/models/order-model';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface AddToCartProps {
  item: OrderItem;
}

export function AddToCart({ item }: AddToCartProps) {
  const router = useRouter();

  const [existItem, setExistItem] = useState<OrderItem | undefined>();

  const { items, increase, decrease } = useCartService();

  const addToCartHandler = () => {
    increase(item);
  };

  useEffect(() => {
    setExistItem(items.find((x) => x.slug === item.slug));
  }, [item, items]);

  return existItem ? (
    <div>
      <button className="btn" type="button" onClick={() => decrease(existItem)}>
        -
      </button>
      <span className="px-2">{existItem.qty}</span>
      <button type="button" className="btn" onClick={() => increase(existItem)}>
        +
      </button>
    </div>
  ) : (
    <div>
      <button
        type="button"
        className="btn btn-primary w-full"
        onClick={addToCartHandler}
      >
        Add to cart
      </button>
    </div>
  );
}

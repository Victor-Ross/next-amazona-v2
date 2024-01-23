import { Product } from '@/lib/models/product-model';
import Image from 'next/image';
import Link from 'next/link';
import { ComponentProps } from 'react';

interface ProductItemProps extends ComponentProps<'div'> {
  product: Product;
}

export function ProductItem({ product }: ProductItemProps) {
  return (
    <div className="card bg-base-300 shadow-xl mb-4">
      <figure>
        <Link href={`/product/${product.slug}`}>
          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={300}
            className="object-cover h-64 w-full"
          />
        </Link>
      </figure>
      <div className="card-body">
        <Link href={`/product/${product.slug}`}>
          <h2 className="card-title font-normal">{product.name}</h2>
        </Link>
        <p className="mb-2">
          {product.brand}
          <span className="card-actions flex items-center justify-between">
            <span className="text-2xl">${product.price}</span>{' '}
          </span>
        </p>
      </div>
    </div>
  );
}

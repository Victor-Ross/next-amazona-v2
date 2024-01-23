import { AddToCart } from '@/components/products/add-to-cart';
import { productService } from '@/lib/services/product-service';
import { convertDocToObj } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

interface ProductDetailsPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: ProductDetailsPageProps) {
  const product = await productService.getBySlug(params.slug);

  if (!product) {
    return { title: 'Product not found' };
  }

  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductDetailsPage({
  params,
}: ProductDetailsPageProps) {
  const product = await productService.getBySlug(params.slug);

  if (!product) {
    return <div>Product Not Found</div>;
  }

  return (
    <>
      <div className="my-2">
        <Link href="/">back to products</Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            sizes="100vw"
            className="w-full h-auto"
          />
        </div>
        <div>
          <ul className="space-y-4">
            <li>
              <h1 className="text-xl">{product.name}</h1>
            </li>
            <li>
              <h1 className="text-xl">
                {product.rating} of {product.numReviews} reviews
              </h1>
            </li>
            <li>{product.brand}</li>
            <li>
              <div className="divider" />
            </li>
            <li>
              <div>
                Description: <p>{product.description}</p>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <div
            className={twMerge('card mt-3 bg-base-300 shadow-xl', 'md:mt-0')}
          >
            <div className="card-body">
              <div className="mb-2 flex justify-between">
                <div>Price</div>
                <div>${product.price}</div>
              </div>
              <div className="mb-2 flex justify-between">
                <div>status</div>
                <div>
                  {product.countInStock > 0 ? 'In Stock' : 'Unavailable'}
                </div>
              </div>
              {product.countInStock !== 0 && (
                <div className="card-actions justify-center">
                  <AddToCart
                    item={{
                      ...convertDocToObj(product),
                      qty: 0,
                      color: '',
                      size: '',
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import { cache } from 'react';
import { dbConnect } from '../db-connect';
import { Product, ProductModel } from '../models/product-model';

export const revaldiate = 3600;

const getLatest = cache(async () => {
  await dbConnect();

  const products = await ProductModel.find({})
    .sort({ _id: -1 })
    .limit(4)
    .lean();

  return products as Product[];
});

const getFeatured = cache(async () => {
  await dbConnect();

  const products = await ProductModel.find({ isFeatured: true })
    .limit(3)
    .lean();

  return products as Product[];
});

const getBySlug = cache(async (slug: string) => {
  await dbConnect();

  const product = await ProductModel.findOne({ slug }).lean().limit(3).lean();

  return product as Product;
});

const productService = {
  getLatest,
  getFeatured,
  getBySlug,
};

export { productService };

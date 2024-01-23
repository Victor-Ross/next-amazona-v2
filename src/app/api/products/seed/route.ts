import data from '@/lib/data';
import { dbConnect } from '@/lib/db-connect';
import { ProductModel } from '@/lib/models/product-model';
import { UserModel } from '@/lib/models/user-model';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { users, products } = data;

  await dbConnect();

  await UserModel.deleteMany();
  await UserModel.insertMany(users);

  await ProductModel.deleteMany();
  await ProductModel.insertMany(products);

  return NextResponse.json({ message: 'Seeded successfuly', users, products });
}

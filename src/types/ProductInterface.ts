export interface PointListInterface {
  id: number;
  title: string;
  product_id: number;
  createdAt: Date;
  updatedAt: Date;
}
export interface ProductInterface {
  id: number;
  image: string;
  title: string;
  Point_list: PointListInterface[];
  userID: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserInterface {
  id: number;
  email: string;
  name: string;
  role: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface SliderInterface {
  photo: string;
  added_by: Number;
  createdAt: Date;
  updatedAt: Date;
}

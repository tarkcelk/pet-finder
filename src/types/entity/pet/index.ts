export type Pet = {
  _id?: object;
  name: string;
  category: string;
  subcategory?: string;
  age: number;
  about: string;
  imageUri?: string;
  isInPublish?: boolean;
  userId: number;
  createDate?: string;
};

export type Category = {
  value: number;
  label: string;
};

export type SubCategory = {
  value: number;
  label: string;
  parent_category_id: number;
};

export type Filter = {
  filteredSearchText?: string;
  filteredCategory?: number;
};

export type PetDto = {
  name: string;
  category: string;
  subcategory: string;
  age: string;
  city: string;
  about: string;
  owner: string;
  phone_number: string;
  image_uri: string;
};

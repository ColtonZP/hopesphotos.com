/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePhotoInput = {
  id?: string | null,
  key: string,
  url: string,
};

export type ModelPhotoConditionInput = {
  key?: ModelStringInput | null,
  url?: ModelStringInput | null,
  and?: Array< ModelPhotoConditionInput | null > | null,
  or?: Array< ModelPhotoConditionInput | null > | null,
  not?: ModelPhotoConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Photo = {
  __typename: "Photo",
  id: string,
  key: string,
  url: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdatePhotoInput = {
  id: string,
  key?: string | null,
  url?: string | null,
};

export type DeletePhotoInput = {
  id: string,
};

export type ModelPhotoFilterInput = {
  id?: ModelIDInput | null,
  key?: ModelStringInput | null,
  url?: ModelStringInput | null,
  and?: Array< ModelPhotoFilterInput | null > | null,
  or?: Array< ModelPhotoFilterInput | null > | null,
  not?: ModelPhotoFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelPhotoConnection = {
  __typename: "ModelPhotoConnection",
  items:  Array<Photo | null >,
  nextToken?: string | null,
};

export type CreatePhotoMutationVariables = {
  input: CreatePhotoInput,
  condition?: ModelPhotoConditionInput | null,
};

export type CreatePhotoMutation = {
  createPhoto?:  {
    __typename: "Photo",
    id: string,
    key: string,
    url: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePhotoMutationVariables = {
  input: UpdatePhotoInput,
  condition?: ModelPhotoConditionInput | null,
};

export type UpdatePhotoMutation = {
  updatePhoto?:  {
    __typename: "Photo",
    id: string,
    key: string,
    url: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePhotoMutationVariables = {
  input: DeletePhotoInput,
  condition?: ModelPhotoConditionInput | null,
};

export type DeletePhotoMutation = {
  deletePhoto?:  {
    __typename: "Photo",
    id: string,
    key: string,
    url: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetPhotoQueryVariables = {
  id: string,
};

export type GetPhotoQuery = {
  getPhoto?:  {
    __typename: "Photo",
    id: string,
    key: string,
    url: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPhotosQueryVariables = {
  filter?: ModelPhotoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPhotosQuery = {
  listPhotos?:  {
    __typename: "ModelPhotoConnection",
    items:  Array< {
      __typename: "Photo",
      id: string,
      key: string,
      url: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreatePhotoSubscription = {
  onCreatePhoto?:  {
    __typename: "Photo",
    id: string,
    key: string,
    url: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePhotoSubscription = {
  onUpdatePhoto?:  {
    __typename: "Photo",
    id: string,
    key: string,
    url: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePhotoSubscription = {
  onDeletePhoto?:  {
    __typename: "Photo",
    id: string,
    key: string,
    url: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

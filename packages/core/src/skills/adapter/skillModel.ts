export interface skillModel {
  id: number;
  habilityName: string;
  skillCategoryModel: {
    id: number;
    nameCategory: string;
  };
}

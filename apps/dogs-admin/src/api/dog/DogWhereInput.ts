import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type DogWhereInput = {
  age?: IntNullableFilter;
  id?: StringFilter;
  name?: StringFilter;
};

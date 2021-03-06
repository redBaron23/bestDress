/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { Dictionary } from "./utils/dictionaries";

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  [Dictionary.HOME]: undefined;
  [Dictionary.PROFILE]: undefined;
  [Dictionary.SEARCH]: undefined;
  [Dictionary.POST]: undefined;
};

export type TabHomeParamList = {
  [Dictionary.HOME]: undefined;
};

export type TabProfileParamList = {
  [Dictionary.PROFILE]: undefined;
  [Dictionary.OTHER_PROFILE]: undefined;
};

export type TabSearchParamList = {
  [Dictionary.SEARCH]: undefined;
};

export type TabPostParamList = {
  [Dictionary.POST]: undefined;
};


import { createContext, useReducer } from 'react';

export enum ActionTypes {
  drinks = 'Drinks',
  categories = 'Categorias',
}

export interface DrinkProps {
  idDrink: string;
  strDrink: string;
  strDrinkAlternate?: any;
  strTags: string;
  strVideo?: any;
  strCategory: string;
  strIBA: string;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  strInstructionsES?: any;
  strInstructionsDE: string;
  strInstructionsFR?: any;
  strInstructionsIT: string;
  strDrinkThumb: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
  strIngredient8?: any;
  strIngredient9?: any;
  strIngredient10?: any;
  strIngredient11?: any;
  strIngredient12?: any;
  strIngredient13?: any;
  strIngredient14?: any;
  strIngredient15?: any;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: string;
  strMeasure5: string;
  strMeasure6: string;
  strMeasure7: string;
  strMeasure8?: any;
  strMeasure9?: any;
  strMeasure10?: any;
  strMeasure11?: any;
  strMeasure12?: any;
  strMeasure13?: any;
  strMeasure14?: any;
  strMeasure15?: any;
  strImageSource: string;
  strImageAttribution: string;
  strCreativeCommonsConfirmed: string;
  dateModified: string;
}

export interface CategoryProps {
  strCategory: string;
}

export interface StateProps {
  drinks?: Array<DrinkProps> | null;
  categories?: Array<CategoryProps> | null;
}

export interface ActionProps {
  type: ActionTypes;
  value: any;
}

export interface ContextProps {
  state: StateProps;
  dispatch: React.Dispatch<ActionProps>;
}

export const Context = createContext<ContextProps>({ state: {} } as ContextProps);

const reducer: React.Reducer<StateProps, ActionProps> = (state, action) => {
	switch (action.type) {
	case ActionTypes.drinks:
		return { drinks: action.value };
	case ActionTypes.categories:
		return { categories: action.value };
	}
};

const withProvider = <T,>(Component: React.FC<T>) => (props: React.PropsWithChildren<T>) => {
	const [state, dispatch] = useReducer(reducer, {});

	return (
		<Context.Provider value={{ state, dispatch }}>
			<Component {...props} />
		</Context.Provider>
	);
};

export const actions = {
	partial: <K extends keyof typeof ActionTypes, T extends Partial<StateProps[K]>>(key: K, value: T) => ({ type: ActionTypes[key], value }),
};

export default withProvider;

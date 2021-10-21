import { useContext as useReactContext, useCallback } from 'react';

import { Context, actions } from '.';

export type ReplaceReturn<T extends (...params: any) => any, Return> = (...params: Parameters<T>) => Return;

export default function useContext() {
	const { state, dispatch } = useReactContext(Context);

	const setPartial: ReplaceReturn<typeof actions.partial, void> = useCallback(
		(...params) => dispatch(actions.partial(...params)),
		[dispatch],
	);

	return { state, setPartial };
}

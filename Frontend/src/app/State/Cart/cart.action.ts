import { createAction, props } from '@ngrx/store';

export const addItemToCartRequest = createAction(
  '[Cart] Add item to cart request',
  props<{ reqData: any }>()
);

export const addItemToCartSuccess = createAction(
  '[Cart] Add item to cart success',
  props<{ payload: any }>()
);

export const addItemToCartFailure = createAction(
  '[Cart] Add item to cart failure',
  props<{ error: any }>()
);

export const getCartRequest = createAction('[Cart] get cart request');

export const getCartSuccess = createAction(
  '[Cart] get cart success',
  props<{ payload: any }>()
);

export const getCartFailure = createAction(
  '[Cart] get cart failure',
  props<{ error: any }>()
);

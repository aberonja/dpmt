import * as fromRouter from '@ngrx/router-store';
import { createFeatureSelector } from '@ngrx/store';

interface State {
  router: fromRouter.RouterReducerState<any>;
}

const selectRouter = createFeatureSelector<
  State,
  fromRouter.RouterReducerState<any>
>('router');

export const { selectUrl, selectRouteData } = fromRouter.getSelectors(
  selectRouter
);

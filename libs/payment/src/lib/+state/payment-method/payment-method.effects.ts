// import { Injectable } from '@angular/core';
// import { createEffect, Actions, ofType } from '@ngrx/effects';
// import { NgxUiLoaderService } from 'ngx-ui-loader';
// import { mergeMap, map, catchError, exhaustMap, tap } from 'rxjs/operators';
// import { of } from 'rxjs';

// import * as PaymentMethodActions from './payment-method.actions';
// import { PaymentMethodService } from '../../services/payment-method.service';

// @Injectable()
// export class PaymentMethodEffects {
//   loadPaymentMethodList$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(PaymentMethodActions.getPaginatedPaymentMethod),
     
     
//       exhaustMap((action) =>
//         this.paymentMethodService.getPaginatedPaymentMethod(action.state).pipe(
//           map((paymentMethodObject) =>
//           PaymentMethodActions.getPaginatedPaymentMethodSuccess({
//               paymentMethod: paymentMethodObject.content,
//               total: paymentMethodObject.totalElements,
//             })
//           ),
//           catchError((error) =>
//             of(
//               PaymentMethodActions.getPaginatedPaymentMethodFailure({
//                 error,
//               })
//             )
//           )
//         )
//       )
//     )
//   );

//   createPaymentMethod$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(PaymentMethodActions.createPaymentMethod),
//       mergeMap((action) => {
//         this.uiLoader.start();
//         return this.paymentMethodService
//           .createPaymentMethod(action.paymentMethodDetails)
//           .pipe(
//             map((paymentMethod) =>
//               PaymentMethodActions.createPaymentMethodSuccess(paymentMethod)
//             ),
//             catchError((error) =>
//               of(
//                 PaymentMethodActions.createPaymentMethodFailure({
//                   error,
//                 })
//               )
//             )
//           );
//       })
//     )
//   );

//   onSuccess$ = createEffect(
//     () =>
//       this.actions$.pipe(
//         ofType(PaymentMethodActions.createPaymentMethodSuccess),
//         tap(() => this.uiLoader.stop())
//       ),
//     { dispatch: false }
//   );

//   onFailure$ = createEffect(
//     () =>
//       this.actions$.pipe(
//         ofType(PaymentMethodActions.createPaymentMethodFailure),
//         tap(() => this.uiLoader.stop())
//       ),
//     { dispatch: false }
//   );

//   constructor(
//     private actions$: Actions,
//     private paymentMethodService: PaymentMethodService,
//     private uiLoader: NgxUiLoaderService
//   ) {}
// }

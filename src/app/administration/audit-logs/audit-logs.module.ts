import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '@uefa-dptm/shared/shared.module';
import { AuditLogsComponent } from './container/audit-logs.component';
import * as fromAuditLogs from './state/audit-logs.reducer';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: 'audit-logs',
        component: AuditLogsComponent,
      },
    ]),
    StoreModule.forFeature(
      fromAuditLogs.auditLogsFeatureKey,
      /* Reducer goes here instead of empty object */ {}
    ),
  ],
  declarations: [AuditLogsComponent],
})
export class AuditLogsModule {}

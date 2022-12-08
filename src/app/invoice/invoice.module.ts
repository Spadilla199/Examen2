import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoicedetailComponent } from './invoicedetail/invoicedetail.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ItemComponent } from './item/item.component';
import { invoiceRoutingModule } from './invoice-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


//Importaciones de NG ZORRO
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzMessageModule} from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzSelectModule } from 'ng-zorro-antd/select';

@NgModule({
  declarations: [
    InvoicedetailComponent,
    InvoiceComponent,
    ItemComponent
  ],
  imports: [
    CommonModule,
    invoiceRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NzTableModule,
    NzDividerModule,
    NzIconModule,
    NzGridModule,
    NzButtonModule,
    NzPopconfirmModule,
    NzMessageModule,
    NzModalModule,
    NzInputModule,
    NzRadioModule,
    NzDatePickerModule,
    NzSelectModule
  ]
})
export class InvoiceModule { }

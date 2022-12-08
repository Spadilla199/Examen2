import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InvoiceComponent } from "./invoice/invoice.component";
import { InvoicedetailComponent } from "./invoicedetail/invoicedetail.component";
import { ItemComponent } from "./item/item.component";

const routes: Routes = [

    {path:'',
    children:[
        { path:'invoice',component:InvoiceComponent},
        { path:'invoicedetail',component:InvoicedetailComponent},
        { path:'item',component:ItemComponent}
    ]

    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class invoiceRoutingModule{ }

import { Component, OnInit } from '@angular/core';
import { Invoice, InvoiceDetail } from 'src/app/api/models';
import { InvoiceControllerService, InvoiceDetailControllerService } from 'src/app/api/services';
import { NzMessageModule, NzMessageService } from 'ng-zorro-antd/message';
import { Form, FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  invoice:Invoice[]=[];
  invoicedetail:InvoiceDetail[]=[];
  visible:boolean=false;



constructor(

private invoiceService:InvoiceControllerService,
private invoicedetailService: InvoiceDetailControllerService,
private messageService:NzMessageService,
private fb:FormBuilder

) { }

formInvoice: FormGroup = this.fb.group({
address:[],
correlative:[],
email:[],
id:[],
name:[],
phone:[],
schuduled:[],
special:[]
})

ngOnInit(): void{

  this.invoiceService.find().subscribe(data=>this.invoice=data)
  this.invoicedetailService.find().subscribe(data=>this.invoicedetail=data)
}

eliminar(id:string):void{
  this,this.invoiceService.deleteById({id}).subscribe(()=>{
  this.invoice=this.invoice.filter(x => x.id !== id);
  this.messageService.info('Registro Eliminado')
  })
  
}

cancel():void{
this,this.messageService.info('Su registro sigue activo')
}

ocultar():void{
  this.visible=false
  this.formInvoice.reset()

}

mostrar(data?:Invoice):void{
  if(data?.id){
    this.formInvoice.setValue({ ...data, 'disponible': String(data.name) })
  }
  this.visible=true
}

guardar():void{
  this.formInvoice.setValue({ ...this.formInvoice.value, 'disponible': Boolean(this.formInvoice.value.disponible) })
  if (this.formInvoice.value.id) {
    this.invoiceService.updateById({ 'id': this.formInvoice.value.id, 'body': this.formInvoice.value }).subscribe(
      () => {
        this.invoice = this.invoice.map(obj => {
          if (obj.id === this.formInvoice.value.id){
            return this.formInvoice.value;
          }
          return obj;
        })
        this.messageService.success('Registro actualizado con exito!')
        this.formInvoice.reset()
      }
    )
  } else {
    delete this.formInvoice.value.id
    this.invoiceService.create({ body: this.formInvoice.value }).subscribe((datoAgregado) => {
      this.invoice = [...this.invoice, datoAgregado]
      this.messageService.success('Registro creado con exito!')
      this.formInvoice.reset()
    })
  }
  this.visible = false
}
}

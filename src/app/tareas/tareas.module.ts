import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TareasRoutingModule } from './tareas-routing.module';
import { TareaComponent } from './tarea.component';
import { NuevaTareaComponent } from './nueva-tarea/nueva-tarea.component';
import { ItemTareaComponent } from './item-tarea/item-tarea.component';


@NgModule({
  declarations: [NuevaTareaComponent, TareaComponent, ItemTareaComponent],
  imports: [
    CommonModule,
    TareasRoutingModule
  ]
})
export class TareasModule { }

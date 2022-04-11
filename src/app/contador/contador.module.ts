import { NgModule } from '@angular/core';
import { contadorcomponent } from './contador/contador.component';
import { CommonModule } from '@angular/common';
 
@NgModule({
    declarations:[
        contadorcomponent,
    ],
    exports:[
        contadorcomponent
    ],
    imports:[
        CommonModule
    ]

})
export class contadorModule{}
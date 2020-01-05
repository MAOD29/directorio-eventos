import {NgModule} from '@angular/core'

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
    imports: [MatToolbarModule,MatButtonModule,MatCardModule,MatGridListModule,MatPaginatorModule],
    exports:[MatToolbarModule,MatButtonModule,MatCardModule,MatGridListModule,MatPaginatorModule]
})

export class MaterialModule {}


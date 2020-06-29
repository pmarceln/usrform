
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProjectRoutingModule } from './project-routing';

import { ProjectComponent } from './project.component';
import { ListComponent } from './list/list.component';

@NgModule({
    declarations: [ProjectComponent, ListComponent],
    imports: [
        CommonModule,
        ProjectRoutingModule,
    ],
    providers: []
})
export class ProjectModule {}

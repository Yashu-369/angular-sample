import{MgModule} from "@angular/core";
import{ RouteModule, Routes} from '@angular/router';
import { constants } from "zlib";

const routes:Routes = [
    
];

@MgModule({

    imports:[RouteModule,forRoot(routes)],
    exports:[RouteModule]
})
export class AppRoutingModule{}
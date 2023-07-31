import { Component } from '@angular/core';
import { Carro } from 'src/app/shared/models/carro.model';
import { CarroService } from '../carro.service';
// import { DialogExitPageComponent } from 'src/app/shared/components/dialog-exit-page/dialog-exit-page/dialog-exit-page.component';
import { MatDialog } from '@angular/material/dialog';
import { SearchCarrosComponent } from '../search-carros/search-carros.component';


@Component({
  selector: 'app-reserva',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.scss']
})
export class ReserveComponent {

  carros: Carro[]=[];
  canExit = false;

  ultimoCarroReservado: Carro | null;
  constructor(private service: CarroService,
    // private dialog: MatDialog
    ) {

    }
   

  // openDialog(): void {
  //   const dialogRef = this.dialog.open(DialogExitPageComponent);

  //   dialogRef.afterClosed().subscribe((result: boolean) => {
  //     console.log(result);

  //     if (result) {

  //     } else {
        
  //     }
  //   });
  // }
}

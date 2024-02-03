import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { MenuPublicoComponent } from './layout/menu-publico/menu-publico.component';
import { MenuPrivadoComponent } from './layout/menu-privado/menu-privado.component';
import { HeaderPublicaComponent } from './layout/header-publica/header-publica.component';
import { HeaderPrivadaComponent } from './layout/header-privada/header-privada.component';
import { FooterComponent } from './layout/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { CRUDComponent } from './crud/crud.component';
import { MessageService } from './services/message.service';
import { Message } from './model/message.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderPublicaComponent,
    HeaderPrivadaComponent,
    MenuPublicoComponent,
    MenuPrivadoComponent,
    FooterComponent,
    DashboardComponent,
    GaleriaComponent,
    CRUDComponent,
    ProfileComponent,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

constructor(private messageService: MessageService,){
  
}

  title:string = 'app';
  logged:boolean = false;
  username:string='';

  escribeLog($event: string) {
    console.log($event);
  }
 
  ngOnInit(): void {
    this.messageService.get()
      .subscribe((result: Message) => {
        if (result.key === 'logged') {
          this.logged = result.value;
        }
        if (result.key === 'username') {
          this.username = result.value;
        }
      });
  }

}

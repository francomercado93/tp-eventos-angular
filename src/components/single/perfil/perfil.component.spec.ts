import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { MatButtonModule, MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatSnackBarModule, MatTableModule, MatToolbarModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from 'src/app/app-routing.module';
import StubUsuariosService, { UsuariosService } from 'src/services/usuarios.service';
import { MisEventosModule } from '../mis-eventos/mis-eventos.module';
import { PerfilComponent } from './perfil.component';

describe('PerfilComponent', () => {
  let component: PerfilComponent
  let fixture: ComponentFixture<PerfilComponent>
  // let usuariosService: UsuariosService

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [
        PerfilComponent
      ],
      imports: [
        CommonModule,
        MatInputModule,
        MatFormFieldModule,
        BrowserModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatListModule,
        MatGridListModule,
        MatTableModule,
        BrowserAnimationsModule,
        MisEventosModule,
        HttpModule,
        MatSnackBarModule,
        AppRoutingModule
      ],
      providers: [
        { provide: APP_BASE_HREF, USEVALUE: '/' }
      ]
    })
      .compileComponents();

    TestBed.overrideComponent(PerfilComponent, {
      set: {
        providers: [
          { provide: UsuariosService, useClass: StubUsuariosService }
        ]
      }
    })

    fixture = TestBed.createComponent(PerfilComponent);
    fixture.detectChanges();
    await fixture.whenStable()
    fixture.detectChanges()

    component = fixture.componentInstance;
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
  it('usuario tiene 3 amigos', async () => {
    expect(3).toBe(component.usuario.amigos.length)
  })

  it('se elimina un amigo del usuario principal', async () => {
    const resultHtml = fixture.debugElement.nativeElement
    resultHtml.querySelector('#amigoElim').click()
    fixture.detectChanges()
    console.log(resultHtml.querySelector('#cantAmigos').textContent)
    expect(2).toBe(component.usuario.amigos.length)
    // expect(resultHtml.querySelector('#cantAmigos').textContent).toBe("2,00")
  })
});
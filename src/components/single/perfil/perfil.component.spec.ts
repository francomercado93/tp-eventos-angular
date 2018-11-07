import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilComponent } from './perfil.component';

describe('PerfilComponent', () => {
  let component: PerfilComponent;
  let fixture: ComponentFixture<PerfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PerfilComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('se elimina un amigo del usuario principal', () => {
    const resultHtml = fixture.debugElement.nativeElement
    resultHtml.querySelector('#amigoElim').click()
    fixture.detectChanges()
    expect(resultHtml.querySelector('#cantAmigos').textContent).toBe("3,00")
  })
});

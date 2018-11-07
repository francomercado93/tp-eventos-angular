import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SidenavEventosComponent } from './sidenav-eventos.component';


describe('SidenavEventosComponent', () => {
  let component: SidenavEventosComponent;
  let fixture: ComponentFixture<SidenavEventosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavEventosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

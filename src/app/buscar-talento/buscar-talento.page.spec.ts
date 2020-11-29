import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BuscarTalentoPage } from './buscar-talento.page';

describe('BuscarTalentoPage', () => {
  let component: BuscarTalentoPage;
  let fixture: ComponentFixture<BuscarTalentoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarTalentoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BuscarTalentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

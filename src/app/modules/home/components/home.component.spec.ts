import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { SampleService } from '../../../core/services/sample-service/sample.service';
import { HomeComponent } from './home.component';
import { HomeModule } from '../home.module';


describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let service: SampleService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HomeModule],
      providers: [SampleService],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(SampleService);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should update the count property when increment button is clicked', () => {
    const incrementButton = fixture.debugElement.query(By.css('.btn--primary'));
    incrementButton.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.count).toBe(1);
  });

  it('should toggle the boolean property when toggle visibility button is clicked', () => {
    const toggleVisibilityButton = fixture.debugElement.query(
      By.css('.btn--secondary')
    );
    expect(component.isVisible).toBe(false);
    toggleVisibilityButton.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.isVisible).toBe(true);
    toggleVisibilityButton.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.isVisible).toBe(false);
  });

  it('should call getData() method from SampleService on component init', () => {
    fixture = TestBed.createComponent(HomeComponent);
    const spy = jest
      .spyOn(service, 'getData')
      .mockReturnValue('Datos del servicio');
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
    expect(component.data).toBe('Datos del servicio');
  });
});

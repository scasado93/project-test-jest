import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BadTestsComponent } from './bad-tests.component';
import { MutationTestingModule } from '../../mutation-testing.module';

describe('BadTestsComponent', () => {
  let component: BadTestsComponent;
  let fixture: ComponentFixture<BadTestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MutationTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(BadTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call add method', () => {
    const spy = jest.spyOn(component, 'add');
    component.add(6, 3);
    expect(spy).toHaveBeenCalled();
  });

  it('should call increase method', () => {
    const spy = jest.spyOn(component, 'increase');
    component.increase(1);
    expect(spy).toHaveBeenCalled();
  });

  it('should call sendGreeting method', () => {
    const spy = jest.spyOn(component, 'sendGreeting');
    component.sendGreeting('world');
    expect(spy).toHaveBeenCalled();
  });

  it('should call isNegative method', () => {
    const spy = jest.spyOn(component, 'isNegative');
    component.isNegative(2);
    expect(spy).toHaveBeenCalled();
  });

  it('should call isValid method', () => {
    const spy = jest.spyOn(component, 'isValid');
    component.isValid(20, true);
    expect(spy).toHaveBeenCalled();
  });

  it('should call updateStock method', () => {
    const spy = jest.spyOn(component, 'updateStock');
    component.updateStock(5, 5);
    expect(spy).toHaveBeenCalled();
  });

  it('should call getGreeting method', () => {
    const spy = jest.spyOn(component, 'getGreeting');
    component.getGreeting();
    expect(spy).toHaveBeenCalled();
  });

  it('should call getData method', () => {
    const spy = jest.spyOn(component, 'getData');
    const mockCallback = jest.fn();
    component.getData(mockCallback);
    expect(spy).toHaveBeenCalled();
  });
});

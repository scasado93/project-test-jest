import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GoodTestsComponent } from './good-tests.component';
import { MutationTestingModule } from '../../mutation-testing.module';

describe('GoodTestsComponent', () => {
  let component: GoodTestsComponent;
  let fixture: ComponentFixture<GoodTestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MutationTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(GoodTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should add two numbers', () => {
    expect(component.add(6, 3)).toBe(9);
    expect(component.add(-1, 1)).toBe(0);
    expect(component.add(0, 0)).toBe(0);
    expect(component.add(3.5, 2.5)).toBe(6);
  });

  it('should increase the value', () => {
    expect(component.increase(1)).toBe(2);
  });

  it('should send greeting the user', () => {
    expect(component.sendGreeting('world')).toBe('Hello, world!');
    expect(component.sendGreeting('')).toBe('Hello, !');
    expect(component.sendGreeting('Sergio')).toBe('Hello, Sergio!');
  });

  it('should return true for negative numbers', () => {
    expect(component.isNegative(2)).toBe(false);
    expect(component.isNegative(0)).toBe(false);
    expect(component.isNegative(-2)).toBe(true);
  });

  it('should check valid', () => {
    expect(component.isValid(19, true)).toBe(true);
    expect(component.isValid(19, false)).toBe(false);
    expect(component.isValid(18, true)).toBe(true);
    expect(component.isValid(18, false)).toBe(false);
    expect(component.isValid(17, true)).toBe(false);
    expect(component.isValid(17, false)).toBe(false);
  });

  it('should update the stock', () => {
    expect(component.updateStock(5, 5)).toBe(10);
    expect(component.updateStock(7, -5)).toBe(2);
    expect(component.updateStock(0, 0)).toBe(0);
  });

  it('should return the greeting', () => {
    expect(component.getGreeting()).toBe('Hello, world!');
    expect(component.getGreeting()).not.toBeNull();
    expect(component.getGreeting()).not.toBe('');
  });

  it('should call the callback function', () => {
    const mockCallback = jest.fn();
    component.getData(mockCallback);
    expect(mockCallback).toHaveBeenCalled();
    expect(mockCallback).toHaveBeenCalledTimes(1);
  });
});

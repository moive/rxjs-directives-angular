import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ReactiveContainerComponent } from '../reactive-container/reactive-container.component';
import { AreaMouseDirective } from './area-mouse.directive';

describe('AreaMouseDirective', () => {
  let component: ReactiveContainerComponent;
  let fixture: ComponentFixture<ReactiveContainerComponent>;

  beforeEach(async () => {
    fixture = await TestBed.configureTestingModule({
      declarations: [ReactiveContainerComponent, AreaMouseDirective],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });

  it('Should create a button with orange background and height 400px', () => {
    const element: HTMLDivElement = fixture.debugElement.query(
      By.directive(AreaMouseDirective)
    ).nativeElement;

    expect(element.style.backgroundColor).toEqual('orange');
    expect(element.style.height).toEqual('400px');
  });
});

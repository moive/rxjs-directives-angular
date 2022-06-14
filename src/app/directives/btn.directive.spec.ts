import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { BtnDirective } from './btn.directive';

describe('BtnDirective', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    fixture = await TestBed.configureTestingModule({
      declarations: [AppComponent, BtnDirective],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });

  it('Should create a button with purple background, text color white and width 100%', () => {
    const element: HTMLButtonElement = fixture.debugElement.query(
      By.directive(BtnDirective)
    ).nativeElement;

    expect(element.style.backgroundColor).toEqual('purple');
    expect(element.style.color).toEqual('white');
    expect(element.style.width).toEqual('100%');
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { ThemeDirective } from './theme.directive';

describe('ThemeDirective', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    fixture = await TestBed.configureTestingModule({
      declarations: [AppComponent, ThemeDirective],
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

  it('Should create a div with background color #333 and text color white', () => {
    const element: HTMLElement = fixture.debugElement.query(
      By.directive(ThemeDirective)
    ).nativeElement;

    expect(element.style.backgroundColor).toEqual('rgb(51, 51, 51)');
    expect(element.style.color).toEqual('white');
  });
});

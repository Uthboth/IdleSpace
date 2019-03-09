import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterTestingModule } from "@angular/router/testing";
import { ClarityModule } from "@clr/angular";
import { ActionHeaderComponent } from "./action-header.component";
import { getAction } from "src/app/app.component.spec";
import { MainService } from "src/app/main.service";
import { OptionsService } from "src/app/options.service";

describe("ActionHeaderComponent", () => {
  let component: ActionHeaderComponent;
  let fixture: ComponentFixture<ActionHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [ClarityModule, RouterTestingModule, BrowserAnimationsModule],
      declarations: [ActionHeaderComponent],
      providers: [MainService, OptionsService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionHeaderComponent);
    component = fixture.componentInstance;

    component.action = getAction();
    component.quantity = new Decimal(10);
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from "@angular/core/testing";

import { InquireWebComponent } from "./inquireWeb.component";

describe("InquireWebComponent", () => {
	let component: InquireWebComponent;
	let fixture: ComponentFixture<InquireWebComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [InquireWebComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(InquireWebComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});

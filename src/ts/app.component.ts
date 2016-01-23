import {Component} from "angular2/core";

import DashboardComponent from "./dashboard/dashboard.component";

@Component({
    selector: "app",
    template: `
        <div class="app">
            <dashboard></dashboard>
        </div>
    `,
    directives: [
        DashboardComponent
    ]
})
export default class AppComponent {
}

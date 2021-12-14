import "angular-animate";
import "angular-aria";

import ngRedux from "ng-redux";
import store from "./store/store.js";

import ComponentsModule from "./components/components";
import ServicesModule from "./services/services";
import { AppComponent } from "./app.component";

const appModule = angular
	.module("appModule", [
		ngRedux,
		"ngAnimate",
		"ngAria",
		ComponentsModule,
		ServicesModule,
	])
	.config(($ngReduxProvider) => {
		$ngReduxProvider.provideStore(store);
	})
	.component("app", AppComponent);

export default appModule;

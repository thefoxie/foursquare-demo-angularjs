import tableComponent from "./a-table.component.js";

const tableModule = angular
	.module("navbar", [])
	.component("a-table", tableComponent).name;

export default tableModule;

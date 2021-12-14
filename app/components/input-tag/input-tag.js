import inputTagComponent from "./input-tag.component.js";

const inputTagModule = angular
	.module("navbar", [])
	.component("navbar", inputTagComponent).name;

export default inputTagModule;

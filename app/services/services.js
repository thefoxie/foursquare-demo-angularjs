import TestService from "./test.service";

const ServicesModule = angular
	.module("services", [])
	.service("TestService", TestService).name;

export default ServicesModule;

import InputTag from "./input-tag/input-tag.js";
import Table from "./a-table/a-table.js";

const ComponentsModule = angular.module("components", [InputTag, Table]).name;

export default ComponentsModule;

import MessageBox from "sap/m/MessageBox";
import AppComponent from "../Component";
import BaseController from "./BaseController";

/**
 * @namespace com.ts.tsReport.controller
 */
export default class AppController extends BaseController {
  public onInit(): void {
    // apply content density mode to root view
    this.getView().addStyleClass(
      (this.getOwnerComponent() as AppComponent).getContentDensityClass()
    );
  }

  public sayHello(): void {
    MessageBox.show("Hello World!");
  }
}

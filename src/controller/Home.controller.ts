/**
 * App Controller.
 *
 * App View controller container.
 *
 * @file This files describes App View controller.
 * @author Tomas A. Sanchez
 * @since 07.27.2021
 */

import MessageBox from "sap/m/MessageBox";
import BaseController from "./BaseController";

/**
 * @namespace com.ts.tsReport.controller
 */
export default class HomeController extends BaseController {
  /* =========================================================== */
  /* lifecycle methods                                           */
  /* =========================================================== */
  public onInit(): void {}

  public sayHello(): void {
    MessageBox.show("Hello Robert!");
  }
}

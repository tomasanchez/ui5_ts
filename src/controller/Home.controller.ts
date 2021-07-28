/**
 * App Controller.
 *
 * App View controller container.
 *
 * @file This files describes App View controller.
 * @author Tomas A. Sanchez
 * @since 07.27.2021
 */

import BaseController from "./BaseController";

/**
 * @namespace com.ts.tsReport.controller
 */
export default class HomeController extends BaseController {
  /* =========================================================== */
  /* lifecycle methods                                           */
  /* =========================================================== */
  /**
   * Called when the worklist controller is instantiated.
   * @public
   */
  public onInit(): void {}
  /* =========================================================== */
  /* event handlers                                              */
  /* =========================================================== */

  public onOpenDialog(): void {
    this.openDialog("Fragment");
  }
}

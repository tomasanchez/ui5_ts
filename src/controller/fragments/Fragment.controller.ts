/**
 * Fragment Controller.
 *
 * Split code for fragment controlling example.
 *
 * @file This files describes a Fragment controller example.
 * @author Tomas A. Sanchez
 * @since 07.28.2021
 */

import Event from "sap/ui/base/Event";
import Controller from "sap/ui/core/mvc/Controller";
import BaseController from "../BaseController";

export default class FragmentController extends BaseController {
  parent: Controller;
  fragment: any;
  data: object;
  callback: () => void;
  /* =========================================================== */
  /* lifecycle methods */
  /* =========================================================== */

  /**
   * Called before the fragment is show.
   * Attachs before open event.
   * @constructor
   */
  public onBeforeShow(
    parent: Controller,
    fragment: any,
    callback: () => void,
    data: object
  ): void {
    this.parent = parent;

    if (fragment) this.fragment = fragment;
    if (callback) this.callback = callback;
    if (data) this.data = data;
  }
  /* =========================================================== */
  /* event handlers                                              */
  /* =========================================================== */

  public onClose(oEvent: Event): void {
    this.fragment.close();
    if (this.callback) this.callback.call(this.parent);
  }
}

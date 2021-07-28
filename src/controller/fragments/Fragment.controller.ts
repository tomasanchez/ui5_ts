/**
 * Fragment Controller.
 *
 * Split code for fragment controlling example.
 *
 * @file This files describes a Fragment controller example.
 * @author Tomas A. Sanchez
 * @since 07.28.2021
 */

import Dialog from "sap/m/Dialog";
import Event from "sap/ui/base/Event";
import Controller from "sap/ui/core/mvc/Controller";
import BaseController from "../BaseController";

export default class FragmentController extends BaseController {
  /* =========================================================== */
  /* Properties                                                  */
  /* =========================================================== */
  // The parent Controller.
  private parent: Controller;
  // This fragment's dialog.
  private fragment: Dialog;
  // Local data object.
  private data: object;
  // Callback function when onClose.
  private callback: () => void;
  /* =========================================================== */
  /* lifecycle methods */
  /* =========================================================== */

  /**
   * Called before the fragment is show.
   * Attachs before open event.
   *
   * @param {sap.ui.mvc.Controller} parent the parent view's controller
   * @param {sap.m.Dialog} fragment the fragment's Dialog control
   * @param {() => void} callback an optional callback function on close
   * @param { object } data optional data to be stored
   * @constructor
   */
  public onBeforeShow(
    parent: Controller,
    fragment: Dialog,
    callback?: () => void,
    data?: object
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
    this.callback?.call(this.parent);
  }
}

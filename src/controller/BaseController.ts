/**
 * Base Controller.
 *
 * Common and inheritable methods for all other controllers.
 *
 * @file This files describes the app Base Controller.
 * @author Tomas A. Sanchez
 * @since 01.29.2021
 */

import Controller from "sap/ui/core/mvc/Controller";
import History from "sap/ui/core/routing/History";
import UIComponent from "sap/ui/core/UIComponent";
import Model from "sap/ui/model/Model";
import JSONModel from "sap/ui/model/json/JSONModel";
import View from "sap/ui/core/mvc/View";

/**
 * Global fragments' ID list.
 * @private
 */
const _fragments: string[] = [];

/**
 * The BaseController.
 *
 * @namespace com.ts.tsReport
 */
export default class BaseController extends Controller {
  /**
   * Convenience method for getting the view model by name in every controller of the application.
   *
   * @public
   * @param {string} sName the model name
   * @returns {sap.ui.model.Model} the model instance
   */
  public getModel(modelName?: string): Model {
    return modelName
      ? this.getView().getModel(modelName)
      : this.getView().getModel();
  }

  /**
   * Convenience method for setting the view model in every controller of the application.
   *
   * @public
   * @param {sap.ui.model.Model} oModel the model instance
   * @param {string} sName the model name
   * @returns {sap.ui.mvc.View} the view instance
   */
  public setModel(model: JSONModel, modelName: string): View {
    return this.getView().setModel(model, modelName);
  }
}

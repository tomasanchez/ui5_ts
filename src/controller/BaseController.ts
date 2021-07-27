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
//import ResourceModel from "sap/ui/model/resource/ResourceModel";
import Router from "sap/ui/core/routing/Router";

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

  /**
   * Convenience method for getting the resource bundle.
   * @public
   * @returns {sap.ui.model.resource.ResourceModel} the resourceModel of the component
   */
  // public getResourceBundle(): ResourceModel {
  //   return this.getOwnerComponent().getModel("i18n").getResourceBundle();
  // }

  /**
   * Convenience method for accessing the router in every controller of the application.
   * @public
   * @returns {sap.ui.core.routing.Router} the router for this component
   */
  public getRouter(): Router {
    return UIComponent.getRouterFor(this);
  }

  /**
   * Method for navigation to specific view
   * @public
   * @param {string} psTarget Parameter containing the string for the target navigation
   * @param {mapping} pmParameters? Parameters for navigation
   * @param {boolean} pbReplace? Defines if the hash should be replaced (no browser history entry) or set (browser history entry)
   */
  public navTo(
    psTarget: string,
    pmParameters?: object,
    oComponentTargetInfo?: object,
    pbReplace?: boolean
  ): void {
    this.getRouter().navTo(
      psTarget,
      pmParameters,
      oComponentTargetInfo,
      pbReplace
    );
  }

  /**
   * Event handler for navigating back.
   * It there is a history entry or an previous app-to-app navigation we go one step back in the browser history
   * If not, it will replace the current entry of the browser history with the master route.
   * @public
   */
  public onNavBack(): void {
    var sPreviousHash = History.getInstance().getPreviousHash();

    if (sPreviousHash !== undefined) {
      window.history.back();
    } else {
      this.getRouter().navTo("appHome", {}, {}, true /*no history*/);
    }
  }
}

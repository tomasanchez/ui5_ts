/**
 * App Controller.
 *
 * App View controller container.
 *
 * @file This files describes App View controller.
 * @author Tomas A. Sanchez
 * @since 07.27.2021
 */

import JSONModel from "sap/ui/model/json/JSONModel";
import AppComponent from "../Component";
import BaseController from "./BaseController";

/**
 * @namespace com.ts.tsReport.controller
 */
export default class AppController extends BaseController {
  public onInit(): void {
    var oViewModel: JSONModel = new JSONModel({
        busy: true,
        delay: 0,
      }),
      iOriginalBusyDelay: int = this.getView().getBusyIndicatorDelay();

    this.setModel(oViewModel, "appView");

    var fnSetAppNotBusy: () => void = () => {
      oViewModel.setProperty("/busy", false);
      oViewModel.setProperty("/delay", iOriginalBusyDelay);
    };

    // disable busy indication when the metadata is loaded and in case of errors
    var oModel: any = this.getOwnerComponent().getModel();

    if (oModel) {
      oModel.metadataLoaded().then(fnSetAppNotBusy);
      oModel.attachMetadataFailed(fnSetAppNotBusy);
    } else {
      fnSetAppNotBusy();
    }

    // apply content density mode to root view
    this.getView().addStyleClass(
      (this.getOwnerComponent() as AppComponent).getContentDensityClass()
    );
  }
}

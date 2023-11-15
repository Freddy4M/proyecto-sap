sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel',
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
], function (Controller, _JSONModel, Filter, FilterOperator) {
    "use strict";

    var ListController = Controller.extend("tech.app.controller.View1", {

        init: function () {
            // call the init function of the parent
            UIComponent.prototype.init.apply(this, arguments);

            // create the views based on the url/hash
            this.getRouter().initialize();
        },

        onFilterInvoices(oEvent) {
            // build filter array
            const aFilter = [];
            const sQuery = oEvent.getParameter("query");
            if (sQuery) {
                aFilter.push(new Filter("NombCert", FilterOperator.Contains, sQuery));
            }

            // filter binding
            const oList = this.byId("certificado");
            const oBinding = oList.getBinding("items");
            oBinding.filter(aFilter);
        },

        onPress: function (oEvent) {
            MessageToast.show("Pressed on " + oEvent.getSource().getSender());
        },

        print: function (_oEvent) {

            var anchor = document.createElement('a');
            anchor.href = 'https://www.mercaba.org/Narrativa/Tolkien.El%20Se%C3%B1or%20de%20los%20Anillos.La%20Comunidad%20del%20Anillo.pdf';
            anchor.target = '_blank';
            anchor.download = 'archivo.ext';
            anchor.click();

        },
        Desimg: function (_oEvent) {

            const images = document.querySelectorAll('img');
            images.forEach((img, index) => {
                const src = img.src;
                const extension = src.substring(src.lastIndexOf('.') + 1);
                const name = `blog${index + 1}`;

                const link = document.createElement('a');
                link.setAttribute('href', src);
                link.setAttribute('download', `${name}.${extension}`);
                link.style.display = 'none';

                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            });

        },
        Preview: function (_oEvent) {

            var source = 'https://www.google.es/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png';

            var a = document.createElement('a');

            a.download = true;
            a.target = '_blank';
            a.href = source;

            a.click();

        },


    });


    return ListController;

});
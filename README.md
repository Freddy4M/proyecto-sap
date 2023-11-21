## Vista Previa:

![image](https://github.com/Freddy4M/proyecto-sap/assets/48028307/55d75355-e50a-4133-882b-09596301476d)







## Creacion del proyecto

![image](https://github.com/Freddy4M/proyecto-sap/assets/48028307/c544a5fb-c2b2-4d7c-90b3-a4081fd05cc6)
![image](https://github.com/Freddy4M/proyecto-sap/assets/48028307/9baced86-062f-409f-adce-7ef93a8affa7)
![image](https://github.com/Freddy4M/proyecto-sap/assets/48028307/fe51c5f7-b133-40b7-bef9-a15972aa2a0d)
![image](https://github.com/Freddy4M/proyecto-sap/assets/48028307/507147fb-cf68-46d8-9bdf-2210ad0b138b)
![image](https://github.com/Freddy4M/proyecto-sap/assets/48028307/c1d1e150-e6ab-4bf7-a427-ca30a2b89bf4)
![image](https://github.com/Freddy4M/proyecto-sap/assets/48028307/74dad4a0-d5fd-455c-8111-9de73aa82764)
![image](https://github.com/Freddy4M/proyecto-sap/assets/48028307/200f9cd8-014e-4fca-9abf-f9477263b584)
![image](https://github.com/Freddy4M/proyecto-sap/assets/48028307/decec672-4485-47ee-a4cf-9b1719b10a2b)
![image](https://github.com/Freddy4M/proyecto-sap/assets/48028307/f61e0f80-c5b3-4fda-b08f-5eb1bdc71ef6)
![image](https://github.com/Freddy4M/proyecto-sap/assets/48028307/b6981b95-c14d-4ebb-a32c-4a879fe09d1d)
Mas informacion :
https://github.com/SAP-samples/teched2022-AD280/tree/main/exercises/ex2/ex2.1

## Creación de la lista de items (vista). 

Link : https://sapui5.hana.ondemand.com/sdk/#/entity/sap.m.FeedListItem/sample/sap.m.sample.FeedListItem/code

![image](https://github.com/Freddy4M/proyecto-sap/assets/48028307/57dd80a6-6802-410a-b1f5-606775b279ce)

Se copia la vista simple.
y se adapta a los datos que vamos a mostrar, se ha añadido un buscador una separación por grupos de certificado y un botón para imprimir.


View1.view.xml
```
<mvc:View
    xmlns:l="sap.ui.layout"
    xmlns:mvc="sap.ui.core.mvc"
    xmlns="sap.m"
    controllerName="tech.app.controller.View1"
>
    <Page showHeader="false">
        <List
            id="certificado"
            items="{ path : 'certificado>/', sorter : {  path : 'Grupo',  group : true  } }"
            headerText="Lista de certificados"
            growing="true"
            growingThreshold="4"
            growingScrollToLoad="false"
        >
            <headerToolbar>
                <Toolbar>
                    <Title text="{i18n>Listas de Certificados}" />
                    <ToolbarSpacer />
                    <SearchField
                        width="50%"
                        search=".onFilterInvoices"
                    />
                </Toolbar>
            </headerToolbar>
            
            
            <FeedListItem
                sender="{certificado>NombCert}"
                icon="sap-icon://create-session"
                senderPress="onPress"
                iconPress="onPress"
                info=""
                timestamp="{certificado>FechaCert}"
                text="{certificado>Descripcion}"
                convertLinksToAnchorTags="All"
                actions="print"
                type="Navigation"
                        press=".onListItemPressed"
            >
                <FeedListItemAction
                    text="print"
                    icon="sap-icon://print"
                    press="print"
                    
                />
            </FeedListItem>
        </List>
     <content />
    </Page>
</mvc:Vie

```


En el siguiente código se mostrar su parte de JS para continuaron la implementación
View1.controller.js

```
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

    });

    return ListController;

});



```

Así como también se estará modificando parte del manifest.json


![image](https://github.com/Freddy4M/proyecto-sap/assets/48028307/cc467f4a-a1d1-4d3b-a3cf-381830662ac4)


donde se extrae la data que se tiene que mostrar.

nota: 
se estará dejando un link de un video para la creación del mock server referente a la data que se consume en la app.
https://drive.google.com/file/d/1o4acXKL1HyqtwM2C4elX0neC9F8y6Lrs/view

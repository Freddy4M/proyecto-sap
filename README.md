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




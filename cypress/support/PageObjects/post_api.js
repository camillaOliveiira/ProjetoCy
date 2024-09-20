import "cypress-intercept-formdata";
export default class req_api_post {
    static ver_img() {
        cy.request({
            method: 'GET',
            url: '?name=speakers&quantityPerEachCategory=10',
            headers: {
                "Content-type": "aplication/json",
            },
            body: {
                categoryImageId: 'speakers',
                products: [
                    {
                        productId: '19',
                        categoryId: '4',
                        productName: "HP S9500 Bluetooth Wireless Speaker",
                        price: '200',
                        imageUrl: "4100"
                    },]
            }
        }).then((response) => {
            expect(response.status).to.equal(200);
        }
        )
    }

    static post_user() {
        cy.request({
            method: 'POST',
            url: 'https://www.advantageonlineshopping.com/api/docs/dist/accountservice.html#/account-service-controller/registerUsingPOST',
            headers: {
                "content-type": 'Aplication/json',
            },
            body: {

                "email": "teste@teste.com",
                "loginPassword": "Password1",
                "loginUser": "username"

            }
        }).then((response) => {
            expect(response.status).to.equal(200);
        }
        )
    }


    static post_img() {

        cy.intercept({
            method: 'POST',
            url: 'https://www.advantageonlineshopping.com/catalog/api/v1/product/image/485034578/speakers/ABCDEF?product_id=19',
        }).as('uploadImage');


        const filePath = 'cypress/fixtures/01.jpg';

        cy.readFile(filePath, 'base64').then((fileContent) => {

            const blob = Cypress.Blob.base64StringToBlob(fileContent, 'image/jpeg');


            const formData = new FormData();
            formData.append('file', blob, '01.jpg');

            // requisição POST com o arquivo
            cy.request({
                method: 'POST',
                url: 'https://www.advantageonlineshopping.com/catalog/api/v1/product/image/485034578/speakers/ABCDEF?product_id=19',
                headers: {
                    'Authorization': 'Basic dXNlcm5hbWU6UGFzc3dvcmQx',
                    'Content-Type': 'multipart/form-data'
                },
                body: formData
            }).then((response) => {
                expect(response.status).to.equal(200);
            });
        })
    };

    static status_post() {
        this.post_img()
        
        
    }


    static img_ok() {
        cy.request({
            method: 'GET',
            url: 'https://www.advantageonlineshopping.com/catalog/api/v1/products/19',
            body: {
                images: [
                "ABCD##custom_image_SPEAKERS_44efda7f-9002-4f3d-9388-108ae9c101a5",
                "ABCD##custom_image_SPEAKERS_a7860408-7b4c-43cb-a229-3bbf08ba70f3",
                "ABCD##custom_image_SPEAKERS_f1691e3f-0d43-4dc1-bbdd-09aac6f566d4",
                "ABCDEF##4100",
                "ABCDEF##4101",
                "ABCDEF##custom_image_path_509b53ff-1517-4c6f-97c4-420f8000e9e8",
                "ABCDEF##custom_image_path_93f10a7c-80e8-4766-8c6a-18afb132944f",
                "ABCDEF##custom_image_path_a1f922ed-0429-44d0-bf6d-bea27e518c26",
                "ABCDEF##custom_image_speakers_00629c15-be13-4887-b9d7-578ea648dba4",
                "ABCDEF##custom_image_speakers_0e518b43-0e91-49df-86e3-9b10369203f2",
                "ABCDEF##custom_image_speakers_116a1c59-2319-4564-a995-11be58a8b754",
                "ABCDEF##custom_image_speakers_27041b38-1f19-4da4-82c7-3067bc050f21",
                "ABCDEF##custom_image_speakers_48ced161-4e6e-4e3a-bf09-f1e7543bc46c",
                "ABCDEF##custom_image_speakers_4de07807-dff3-49fa-a96c-0347e2afeb9f",
                "ABCDEF##custom_image_speakers_74295e07-8aed-4590-b7ad-a5f720b18273",
                "ABCDEF##custom_image_speakers_867dbf4a-43cb-4b94-8c6d-376cc80644dc",
                "ABCDEF##custom_image_speakers_999cdf00-9009-4250-9bec-75aa65cbdb45",
                "ABCDEF##custom_image_speakers_ac7c6f50-e4f3-4b0c-bbeb-1179ca462585",
                "ABCDEF##custom_image_speakers_c6a4b6f6-0c8d-404b-8e84-321ed46869bc",
                "ABCDEF##custom_image_speakers_ca5d8fb0-c18d-4eef-825d-2e8ee50feb46",
                "ABCDEF##custom_image_speakers_d6870233-cc12-4eb2-82c8-e0ce5b6e0c87",
                "ABCDEF##custom_image_speakers_d855a935-d399-44e8-afad-0b2ec51d65dd",
                "ABCDEF##custom_image_speakers_fa66aac5-57de-422e-b7a7-42eb67611e63"]
            }
        }).then((response) => {
            expect(response.status).to.equal(200);
        }
        )
    }
}


import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js"


createApp({
    data() {
        return {
            titulo: 'Teste API',
            mensagem: "sem mensagem....",
            lista: {},
            id: "",
            name: ""
        }
    },
    mounted() {
        this.reqGET();
    },
    methods: {
        reqGET() {
            let self = this;
            console.log("cliquei no botão GET");
            this.mensagem = "GET";
            axios.get('http://localhost:4050/api/v1/filmes')
                .then(function (response) {
                    console.log(response.data);
                    self.lista = response.data;
                    //self.mensagem = JSON.stringify(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        reqPOST() {
            let self = this;
            console.log("cliquei no botão POST");
            this.mensagem = "POST";
            console.log("id", this.id);
            console.log("name", this.name);
            let bodyFormData = new URLSearchParams();
            bodyFormData.append('id', this.id);
            bodyFormData.append('name', this.name);
            axios({
                method: "post",
                url: "http://localhost:4050/api/v1/filmes",
                data: bodyFormData,
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
            }).then(function (response) {
                console.log(response.data);
                self.mensagem = "POST ok!";
                self.lista = response.data;
            }).catch(function (error) {
                console.log(error);
            });
        },
        reqPUT() {
            console.log("cliquei no botão PUT");
            this.mensagem = "PUT";
        },
        reqDELETE(id) {
            let self = this;
            console.log("cliquei no botão DELETE", id);
            this.mensagem = "DELETE";
            let bodyFormData = new URLSearchParams();
            bodyFormData.append('id', id);
            axios({
                method: "delete",
                url: "http://localhost:4050/api/v1/filmes",
                data: bodyFormData,
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
            }).then(function (response) {
                console.log(response.data);
                self.mensagem = "POST ok!";
                self.lista = response.data;
            }).catch(function (error) {
                console.log(error);
            });

        }
    }
}).mount('#app')
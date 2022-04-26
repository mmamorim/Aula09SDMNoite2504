import menuesquerdo from "./menuesquerdo.js"
import lista from "./lista.js"

export default {
    components: {
        menuesquerdo, lista
    },
    template: `
        <div class="grid grid-cols-8">
            <div class="col-span-1 bg-gray-50 p-3">
                <menuesquerdo></menuesquerdo>
            </div>
            <div class="col-span-7">
                <lista></lista>
            </div>
        </div>
    `,
    data() {
        return {
            // Dados do componente
        }
    },
    mount() {
        // Função chamada sempre que o componente é montado na página
    },
    methods: {
        
    }
}
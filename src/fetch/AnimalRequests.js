class AnimalRequests {

    constructor() {
        this.serverUrl = 'http://localhost:3000';
        this.routeListarAnimal = '/listar-aves';
        this.routeCadastarAnimal = '/novo/ave';
        this.routeDeletarAnimal = '/remover/animal';
        this.routeAlterarAnimal = '/atualizar/animal';
    }

    /**
* Busca os animais cadastrados no servidor
* @returns Array com os animais cadastrados
*/
    async listarAnimais() {
        try {
            // Faz a requisição para o servidor, passando o endereço e a rota a serem acessados
            const response = await fetch(`${this.serverUrl}${this.routeListarAnimal}`);
            // Verifica se a resposta não foi bem sucedida...
            if (!response.ok) {
                // ...lança um erro
                throw new Error('Erro ao buscar servidor');
            }
            // retorna a lista dos animais no formato json a quem chamou a função
            return await response.json();
        } catch (error) {
            // caso ocorra algum erro na comunicação
            console.error('Erro: ', error);
            return null;
        }
    }

    /**
 * Deleta um animal do servidor
 * 
 * @param {*} idAnimal ID do animal a ser deletado
 * @returns *verdadeiro (true)* caso o animal tenha sido deletado, *null (nulo)* caso tenha acontecido algum erro
 */
    async deletarAnimal(idAnimal) {
        try {
            const response = await fetch(`${this.serverUrl}${this.routeDeletarAnimal}?idAnimal=${idAnimal}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Erro ao enviar formulário');
            }
            return true;
        } catch (error) {
            console.error('Erro: ', error);
            window.alert('Erro ao deletar animal');
            return null;
        }
    }


}

export default new AnimalRequests
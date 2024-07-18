document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('searchQuery');
    const buttons = form.querySelectorAll('button[data-engine]');

function getQueryParam(param) {
    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

let query = getQueryParam('q');
if (!query) query = 'Não fornecido.'
if (query) document.getElementById('query').textContent = query;

// Função para redirecionar para o mecanismo de pesquisa escolhido
buttons.forEach(button => {
    button.addEventListener('click', function() {
        if (!query) return alert('Por favor, digite algo na caixa de pesquisa.')

        const engine = button.getAttribute('data-engine');
        let url;

        switch (engine) {
            case 'google':
                url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
                break;
            case 'bing':
                url = `https://www.bing.com/search?q=${encodeURIComponent(query)}`;
                break;
            case 'youtube':
                url = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
                break;
            case 'duckduckgo':
                url = `https://duckduckgo.com/?q=${encodeURIComponent(query)}`;
                break;
            case 'brave':
                url = `https://search.brave.com/search?q=${encodeURIComponent(query)}`;
                break;
            default:
                return;
        }

        window.location.href = url;
    });
});

});
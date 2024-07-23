document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('searchForm');
    const queryInput = document.getElementById('searchQuery');
    const buttons = form.querySelectorAll('button[data-engine]');

    queryInput.addEventListener('keydown', function(event) {
        if (event.keyCode === 13) {
            event.preventDefault(); 
        }
    });
        

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const query = queryInput.value;
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
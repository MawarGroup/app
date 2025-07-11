document.addEventListener('DOMContentLoaded', () => {
    const games = [
        // --- PRAGMATIC PLAY ---
        {
            name: "Gates of Olympus",
            provider: "Pragmatic Play",
            rtp: 96.50,
            image: "https://via.placeholder.com/300x180?text=Gates+of+Olympus", // Ganti dengan URL gambar asli
            omTogelUrl: "https://www.omtogel.com/play/gates-of-olympus" // Ganti dengan URL game Omtogel yang sebenarnya
        },
        {
            name: "Sweet Bonanza",
            provider: "Pragmatic Play",
            rtp: 96.48,
            image: "https://via.placeholder.com/300x180?text=Sweet+Bonanza",
            omTogelUrl: "https://www.omtogel.com/play/sweet-bonanza"
        },
        {
            name: "Starlight Princess",
            provider: "Pragmatic Play",
            rtp: 96.50,
            image: "https://via.placeholder.com/300x180?text=Starlight+Princess",
            omTogelUrl: "https://www.omtogel.com/play/starlight-princess"
        },
        {
            name: "Wild West Gold",
            provider: "Pragmatic Play",
            rtp: 96.51,
            image: "https://via.placeholder.com/300x180?text=Wild+West+Gold",
            omTogelUrl: "https://www.omtogel.com/play/wild-west-gold"
        },
        {
            name: "Great Rhino Megaways",
            provider: "Pragmatic Play",
            rtp: 96.58,
            image: "https://via.placeholder.com/300x180?text=Great+Rhino+Megaways",
            omTogelUrl: "https://www.omtogel.com/play/great-rhino-megaways"
        },
        // --- PG SOFT ---
        {
            name: "Mahjong Ways 2",
            provider: "PG Soft",
            rtp: 96.95,
            image: "https://via.placeholder.com/300x180?text=Mahjong+Ways+2",
            omTogelUrl: "https://www.omtogel.com/play/mahjong-ways-2"
        },
        {
            name: "Treasures of Aztec",
            provider: "PG Soft",
            rtp: 96.71,
            image: "https://via.placeholder.com/300x180?text=Treasures+of+Aztec",
            omTogelUrl: "https://www.omtogel.com/play/treasures-of-aztec"
        },
        {
            name: "Lucky Neko",
            provider: "PG Soft",
            rtp: 96.73,
            image: "https://via.placeholder.com/300x180?text=Lucky+Neko",
            omTogelUrl: "https://www.omtogel.com/play/lucky-neko"
        },
        {
            name: "Ways of the Qilin",
            provider: "PG Soft",
            rtp: 96.69,
            image: "https://via.placeholder.com/300x180?text=Ways+of+the+Qilin",
            omTogelUrl: "https://www.omtogel.com/play/ways-of-the-qilin"
        },
        {
            name: "The Great Icescape",
            provider: "PG Soft",
            rtp: 96.32,
            image: "https://via.placeholder.com/300x180?text=The+Great+Icescape",
            omTogelUrl: "https://www.omtogel.com/play/the-great-icescape"
        },
        // Tambahkan lebih banyak game di sini
    ];

    const gameList = document.getElementById('game-list');
    const searchInput = document.getElementById('searchInput');
    const providerFilter = document.getElementById('providerFilter');
    const rtpFilter = document.getElementById('rtpFilter');

    function displayGames(filteredGames) {
        gameList.innerHTML = ''; // Clear previous games
        if (filteredGames.length === 0) {
            gameList.innerHTML = '<p style="text-align: center; grid-column: 1 / -1;">Tidak ada game yang ditemukan dengan kriteria tersebut.</p>';
            return;
        }

        filteredGames.forEach(game => {
            const gameCard = document.createElement('div');
            gameCard.classList.add('game-card');

            gameCard.innerHTML = `
                <img src="${game.image}" alt="${game.name}">
                <div class="game-info">
                    <h3>${game.name}</h3>
                    <p class="provider">Provider: ${game.provider}</p>
                    <p class="rtp">RTP: ${game.rtp}%</p>
                </div>
                <div class="play-button-container">
                    <a href="${game.omTogelUrl}" target="_blank" class="play-button">Mainkan di Omtogel</a>
                </div>
            `;
            gameList.appendChild(gameCard);
        });
    }

    function filterGames() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedProvider = providerFilter.value;
        const selectedRTPRange = rtpFilter.value;

        const filtered = games.filter(game => {
            const matchesSearch = game.name.toLowerCase().includes(searchTerm);
            const matchesProvider = selectedProvider === 'all' || game.provider === selectedProvider;
            
            let matchesRTP = true;
            if (selectedRTPRange !== 'all') {
                const rtp = game.rtp;
                if (selectedRTPRange === '96.5+') {
                    matchesRTP = rtp >= 96.5;
                } else if (selectedRTPRange === '96-96.5') {
                    matchesRTP = rtp >= 96.0 && rtp < 96.5; // Adjusted to exclude 96.5 if covered by previous
                } else if (selectedRTPRange === '95-96') {
                    matchesRTP = rtp >= 95.0 && rtp < 96.0;
                }
            }

            return matchesSearch && matchesProvider && matchesRTP;
        });
        displayGames(filtered);
    }

    // Initial display
    displayGames(games);

    // Add event listeners for filtering
    searchInput.addEventListener('input', filterGames);
    providerFilter.addEventListener('change', filterGames);
    rtpFilter.addEventListener('change', filterGames);
});

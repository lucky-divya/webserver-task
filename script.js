// Fetch the manhwa data and display it
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const manhwaList = document.getElementById('manhwa-list');
        
        data.forEach(manhwa => {
            const manhwaDiv = document.createElement('div');
            manhwaDiv.classList.add('manhwa');
            manhwaDiv.innerHTML = `
                <h2>${manhwa.title}</h2>
                <img src="${manhwa.image}" alt="${manhwa.title} Cover" style="width: 150px; height: auto;">
                <p><strong>Genre:</strong> ${manhwa.genre}</p>
                <p><strong>Writer/Creator:</strong> ${manhwa.writer || manhwa.creator}</p>
                <p><strong>Art:</strong> ${manhwa.art || "N/A"}</p>
                <p><strong>Episodes/Chapters:</strong> ${manhwa.episodes || manhwa.chapters || "N/A"}</p>
                <p><strong>Reads:</strong> ${manhwa.reads}</p>
                <p>${manhwa.description}</p>
            `;
            manhwaList.appendChild(manhwaDiv);
        });
    })
    .catch(error => {
        console.error('Error fetching manhwa data:', error);
    });

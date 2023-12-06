'use strict';

async function fetchCollectionLength(collectionName) {
    try {
        const response = await axios.get(`http://localhost:3000/api/${collectionName}/length`);
        return response.data.length;
    } catch (error) {
        console.error(`Error fetching length of collection ${collectionName}:`, error);
        return 0;
    }
}

async function displayCollectionInfo() {
    const collections = ['Personas', 'Socios'];

    const infoContainer = document.getElementById('collectionInfo');
    infoContainer.innerHTML = '';

    for (const collection of collections) {
        const length = await fetchCollectionLength(collection);
        const paragraph = document.createElement('p');
        paragraph.innerText = `${collection}: ${length} elements`;
        infoContainer.appendChild(paragraph);
    }
}

displayCollectionInfo();

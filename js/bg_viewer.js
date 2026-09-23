let monViewer = pannellum.viewer('tts-panorama-1', {
    "type": "equirectangular",
    "panorama": "/assets/img/bg_tts/Davelthys.jpg",
    "autoLoad": true,
    "showControls": false
});

function changerPano(nouvelleImage) {
    if (monViewer) {
        monViewer.destroy(); // Détruit l'instance actuelle propre
    }
    
    // Recrée une nouvelle instance avec l'image sélectionnée
    monViewer = pannellum.viewer('tts-panorama-1', {
        "type": "equirectangular",
        "panorama": nouvelleImage,
        "autoLoad": true,
        "showControls": false
    });
}
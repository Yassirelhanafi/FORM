document.addEventListener('DOMContentLoaded', function () {
        const params = new URLSearchParams(window.location.search);
        document.getElementById('nom').textContent = params.get('nom');
        document.getElementById('prenom').textContent = params.get('prenom');
        document.getElementById('titre').textContent = params.get('titre');
        document.getElementById('genre').textContent = params.get('genre');
        document.getElementById('date').textContent = params.get('date');
        document.getElementById('email').textContent = params.get('email');
        
        
       
        
        document.getElementById('niveauan').textContent = params.get('niveauan');
        document.getElementById('niveaufr').textContent = params.get('niveaufr');
        document.getElementById('niveauar').textContent = params.get('niveauar');
        document.getElementById('niveaues').textContent = params.get('niveaues');
        
        

        const competencesCheckbox = ['Communication', 'Travail en équipe', 'Confiance','MS','Spring','JUnit','Jbuilder','adobe'];

        for (const checkbox of competencesCheckbox) {
            const isChecked = params.get(checkbox) === 'on'; // Les cases à cocher renvoient 'on' si elles sont cochées
            document.getElementById(checkbox).textContent = isChecked ? 'Oui' : 'Non';
        }
        
        document.getElementById('objectif').textContent = params.get('objectif');
        document.getElementById('formation').textContent = params.get('formation');
        document.getElementById('Ecole').textContent = params.get('Ecole');
        document.getElementById('Filière').textContent = params.get('Filière');
        
    });
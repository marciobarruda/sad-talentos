// Multiple Matriculas Management
let matriculasData = [];

// Function to initialize matriculas data
function initializeMatriculas(data) {
    // data can be an array or single object
    if (Array.isArray(data)) {
        matriculasData = data;
    } else {
        matriculasData = [data];
    }

    // Populate matricula SELECT
    const selectMatricula = document.getElementById('matricula');
    selectMatricula.innerHTML = '';

    matriculasData.forEach((mat, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = mat.matricula;
        if (index === 0) option.selected = true;
        selectMatricula.appendChild(option);
    });

    // Load first matricula data
    onMatriculaChange();
}

// Function called when matricula changes
function onMatriculaChange() {
    const selectMatricula = document.getElementById('matricula');
    const selectedIndex = selectMatricula.value;
    const matriculaData = matriculasData[selectedIndex];

    if (matriculaData) {
        document.getElementById('cargo').value = matriculaData.cargo || '';
        document.getElementById('vinculo').value = matriculaData.vinculo || '';
        document.getElementById('dataAdmissao').value = matriculaData.dataAdmissao || '';
    }
}

// Example: Initialize when page loads with data from backend
// This should be called with actual data from your template variables
document.addEventListener('DOMContentLoaded', () => {
    // Example data structure - replace with actual template variables
    const userData = {
        matriculas: [
            {
                matricula: '{{ $json.matricula }}',
                cargo: '{{ $json.cargo }}',
                vinculo: '{{ $json.vinculo }}',
                dataAdmissao: '{{ $json.dataAdmissao }}'
            }
            // If there are multiple matriculas, they should be added here
            // The backend should provide an array of matricula objects
        ]
    };

    // Initialize matriculas
    if (userData.matriculas && userData.matriculas.length > 0) {
        initializeMatriculas(userData.matriculas);
    }
});

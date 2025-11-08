document.addEventListener('DOMContentLoaded', function() {
    // Show disease info
    const diagnosisInput = document.getElementById('PNK13A');
    if (diagnosisInput) {
        diagnosisInput.addEventListener('change', function() {
            const selectedValue = this.value;
            const infoCard = document.getElementById('disease-info');
            if (selectedValue && diseaseData[selectedValue]) {
                const data = diseaseData[selectedValue];
                infoCard.innerHTML = `
                    <div class="card info-card">
                        <div class="card-body">
                            <h5 class="card-title">${data.name}</h5>
                            <h6>Cara Pencegahan:</h6>
                            <p>${data.prevention}</p>
                            <h6>Cara Pengobatan:</h6>
                            <p>${data.treatment}</p>
                        </div>
                    </div>
                `;
            } else {
                infoCard.innerHTML = '';
            }
        });
    }
});

// Disease data (simplified)
const diseaseData = {
    'A15': {
        name: 'Tuberkulosis Pernafasan',
        prevention: 'Vaksinasi BCG, hindari kontak dengan penderita, jaga kebersihan.',
        treatment: 'Pengobatan dengan antibiotik seperti isoniazid, rifampisin selama 6-9 bulan.'
    },
    'A90': {
        name: 'Demam Berdarah Dengue',
        prevention: 'Pengendalian nyamuk, gunakan kelambu, hindari genangan air.',
        treatment: 'Istirahat, minum banyak cairan, obat pereda demam. Jika parah, rawat inap.'
    },
    'I10': {
        name: 'Hipertensi Esensial',
        prevention: 'Diet sehat, olahraga teratur, hindari stres, kontrol berat badan.',
        treatment: 'Obat antihipertensi, perubahan gaya hidup.'
    },
    // Add more as needed
};

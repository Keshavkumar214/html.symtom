document.addEventListener("DOMContentLoaded", function () {
  const symptomsTextarea = document.getElementById("symptoms");
  const checkButton = document.getElementById("check-symptoms");
  const resultsSection = document.getElementById("results");
  const testRecommendation = document.getElementById("test-recommendation");
  const cureRecommendation = document.getElementById("cure-recommendation");

  // Define a map of symptoms to test and cure recommendations
  const symptomRecommendations = {
    headache: {
      test: "Neurological examination",
      cure: "Pain relievers and rest",
    },
    "bone fracture": {
      test: "X-ray",
      cure: "Immobilization and surgery (if necessary)",
    },
    "nose bleeding": {
      test: "Nasal endoscopy",
      cure: "Nasal packing and cauterization",
    },
    fever: {
      test: "Temperature measurement",
      cure: "Antipyretic medication and rest",
    },
    cough: {
      test: "Respiratory examination",
      cure: "Cough syrup and hydration",
    },
    fatigue: {
      test: "Blood tests",
      cure: "Adequate rest and balanced diet",
    },
    "stomach ache": {
      test: "Abdominal ultrasound",
      cure: "Antacids and dietary changes",
    },
    rash: {
      test: "Dermatological examination",
      cure: "Topical ointments and allergy management",
    },
  };

  checkButton.addEventListener("click", function () {
    const enteredSymptoms = symptomsTextarea.value.toLowerCase().trim();

    // Check if the entered symptoms match any recommendations
    if (symptomRecommendations.hasOwnProperty(enteredSymptoms)) {
      const recommendation = symptomRecommendations[enteredSymptoms];
      testRecommendation.textContent = `Test Recommendation: ${recommendation.test}`;
      cureRecommendation.textContent = `Cure Recommendation: ${recommendation.cure}`;
      resultsSection.classList.remove("hidden");
    } else {
      // Display a message if the symptoms are not recognized
      testRecommendation.textContent = "Test Recommendation: Not available";
      cureRecommendation.textContent = "Cure Recommendation: Not available";
      resultsSection.classList.remove("hidden");
    }
  });
});

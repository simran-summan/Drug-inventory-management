import React, { useState } from "react";
import { Search } from "lucide-react";

const medicineData = {
  medicines: [
    {
      name: "Aspirin",
      price: 4.99,
      description:
        "Aspirin is a widely used medication that belongs to the nonsteroidal anti-inflammatory drug (NSAID) class. It's known for its pain-relieving, fever-reducing, and anti-inflammatory properties. Aspirin works by inhibiting the production of prostaglandins, which are responsible for pain and inflammation in the body. It's commonly used to treat headaches, muscle aches, menstrual cramps, and minor arthritis pain. In low doses, aspirin is also used as a blood thinner to prevent heart attacks and strokes in high-risk individuals.",
      dosage:
        "Adults: 325 to 650 mg every 4 hours as needed, not exceeding 4000 mg per day. Low-dose aspirin for heart health: 81 to 325 mg daily as directed by a doctor.",
      details: {
        active_ingredient: "Acetylsalicylic acid",
        form: "Tablet",
        otc: true,
        side_effects: [
          "Stomach upset",
          "Heartburn",
          "Gastrointestinal bleeding",
          "Tinnitus (with high doses)",
          "Allergic reactions (rare)",
        ],
        precautions: [
          "Avoid in children and teenagers with viral infections due to risk of Reye's syndrome",
          "Use with caution in people with asthma, ulcers, or bleeding disorders",
          "Consult a doctor before use if pregnant, especially in the third trimester",
        ],
      },
      summary:
        "Aspirin is a common over-the-counter pain reliever, fever reducer, and anti-inflammatory medication. It's also used in low doses for heart attack and stroke prevention. While effective for many, it can cause stomach irritation and may not be suitable for everyone. Always follow recommended dosages and consult a healthcare provider if unsure.",
    },
    {
      name: "Tylenol",
      price: 6.49,
      description:
        "Tylenol is the brand name for acetaminophen, a widely used over-the-counter pain reliever and fever reducer. Unlike aspirin and ibuprofen, Tylenol is not an anti-inflammatory medication. It works by affecting the parts of the brain that receive pain messages and control body temperature. Tylenol is often preferred for those who can't take NSAIDs due to stomach sensitivity or other contraindications. It's commonly used to treat headaches, muscle aches, backaches, toothaches, menstrual cramps, and to reduce fever.",
      dosage:
        "Adults: 325 to 650 mg every 4 to 6 hours as needed, not exceeding 3000 mg per day. Some formulations may allow up to 4000 mg per day, but always follow the package instructions.",
      details: {
        active_ingredient: "Acetaminophen",
        form: "Tablet, liquid, or capsule",
        otc: true,
        side_effects: [
          "Nausea",
          "Stomach pain",
          "Loss of appetite",
          "Allergic reactions (rare)",
          "Severe liver damage (with overdose)",
        ],
        precautions: [
          "Do not exceed recommended dose due to risk of liver damage",
          "Avoid or limit alcohol consumption while taking Tylenol",
          "Check other medications for acetaminophen to avoid double-dosing",
          "Consult a doctor before use if you have liver disease or chronic alcohol use",
        ],
      },
      summary:
        "Tylenol (acetaminophen) is a popular pain reliever and fever reducer that's generally well-tolerated. It's often chosen by those who can't take NSAIDs. While safe when used as directed, it's crucial to follow dosage instructions carefully to avoid potential liver damage. Always be aware of acetaminophen content in other medications to prevent accidental overdose.",
    },
    {
      name: "Ibuprofen",
      price: 5.29,
      description:
        "Ibuprofen is a nonsteroidal anti-inflammatory drug (NSAID) used to reduce pain, fever, and inflammation. It works by blocking the production of prostaglandins, substances in the body that cause pain and inflammation. Ibuprofen is commonly used to relieve headaches, dental pain, menstrual cramps, muscle aches, arthritis pain, and back pain. It's also effective in reducing fever. Ibuprofen is available over-the-counter in lower strengths and by prescription for higher doses.",
      dosage:
        "Adults: 200 to 400 mg every 4 to 6 hours as needed, not exceeding 1200 mg per day unless directed by a doctor. For prescription strength, follow doctor's instructions.",
      details: {
        active_ingredient: "Ibuprofen",
        form: "Tablet, liquid, or gel capsule",
        otc: true,
        side_effects: [
          "Stomach upset",
          "Heartburn",
          "Gastrointestinal bleeding",
          "Increased risk of heart attack or stroke (with long-term use)",
          "Allergic reactions (rare)",
        ],
        precautions: [
          "Use caution if you have a history of stomach ulcers or bleeding",
          "Avoid use before surgery due to increased bleeding risk",
          "Use with caution in older adults, and those with heart disease, high blood pressure, or kidney problems",
          "Do not use during the last trimester of pregnancy",
        ],
      },
      summary:
        "Ibuprofen is a versatile NSAID used for pain relief, fever reduction, and inflammation control. It's effective for various types of pain and fever but should be used cautiously, especially in those with stomach issues or heart disease risk factors. Always follow recommended dosages and consult a healthcare provider for long-term use or if you have underlying health conditions.",
    },
    {
      name: "Benadryl",
      price: 7.99,
      description:
        "Benadryl is the brand name for diphenhydramine, an antihistamine medication used primarily to relieve allergy symptoms such as sneezing, runny nose, itchy or watery eyes, and itchy throat or skin. It works by blocking the effects of histamine, a substance produced by the body during allergic reactions. Benadryl is also used as a sleep aid due to its sedating properties and can help with motion sickness. While effective for short-term use, it can cause drowsiness and is not recommended for long-term management of chronic allergies.",
      dosage:
        "Adults: 25 to 50 mg every 4 to 6 hours as needed, not exceeding 300 mg per day. For sleep aid: 50 mg at bedtime.",
      details: {
        active_ingredient: "Diphenhydramine",
        form: "Tablet, liquid, or topical cream",
        otc: true,
        side_effects: [
          "Drowsiness",
          "Dizziness",
          "Dry mouth",
          "Blurred vision",
          "Constipation",
          "Difficulty urinating (especially in older males)",
        ],
        precautions: [
          "Do not drive or operate machinery after taking due to drowsiness",
          "Avoid alcohol consumption while taking Benadryl",
          "Use with caution in older adults due to increased risk of confusion and falls",
          "Not recommended for long-term daily use as an allergy treatment",
        ],
      },
      summary:
        "Benadryl (diphenhydramine) is a widely used antihistamine for allergy relief and occasional sleep aid. It's effective for short-term symptom management but can cause significant drowsiness. While generally safe for most adults, it should be used cautiously, especially in older individuals. For chronic allergies, newer, non-sedating antihistamines may be more appropriate for daily use.",
    },
    {
      name: "Claritin",
      price: 8.49,
      description:
        "Claritin is the brand name for loratadine, a second-generation antihistamine used to relieve allergy symptoms such as sneezing, runny nose, itchy or watery eyes, and itchy throat or nose. Unlike first-generation antihistamines like Benadryl, Claritin is non-sedating for most people, making it suitable for daytime use. It works by blocking the action of histamine, a substance in the body that causes allergic symptoms. Claritin is effective for seasonal allergies, year-round allergies, and hives.",
      dosage:
        "Adults and children 6 years and older: 10 mg once daily. For children 2-5 years old: 5 mg once daily.",
      details: {
        active_ingredient: "Loratadine",
        form: "Tablet, rapidly-disintegrating tablet, or liquid",
        otc: true,
        side_effects: [
          "Headache",
          "Drowsiness (less common than with older antihistamines)",
          "Dry mouth",
          "Fatigue",
          "Stomach pain",
        ],
        precautions: [
          "Safe for most people, including those with high blood pressure and diabetes",
          "Consult a doctor before use if you have liver or kidney disease",
          "May not be suitable for pregnant or breastfeeding women without doctor's approval",
          "Avoid drinking excessive amounts of grapefruit juice while taking Claritin",
        ],
      },
      summary:
        "Claritin (loratadine) is a popular non-sedating antihistamine used for allergy relief. It provides 24-hour symptom control with once-daily dosing and is generally well-tolerated. Claritin is suitable for both seasonal and year-round allergies, as well as hives. Its non-drowsy formula makes it a good choice for those who need to remain alert during the day. As with any medication, consult a healthcare provider if you have concerns or underlying health conditions.",
    },
  ],
};

const CheckMedicine = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMedicine, setSelectedMedicine] = useState(null);

  const handleSearch = () => {
    const found = medicineData.medicines.find(
      (med) => med.name.toLowerCase() === searchTerm.toLowerCase()
    );
    setSelectedMedicine(found || null);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className=" bg-zinc-600 min-h-screen">
      <div className="max-w-4xl mx-auto p-6  bg-zinc-700   shadow-lg rounded-lg">
        <div className="flex mb-6">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Search for a medicine..."
            className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSearch}
            className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <Search size={24} />
          </button>
        </div>

        {selectedMedicine ? (
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-center text-blue-300">
              {selectedMedicine.name}
            </h2>

            <p className="text-lg font-semibold">
              Price: ${selectedMedicine.price.toFixed(2)}
            </p>

            <div>
              <h3 className="text-xl font-semibold mb-2 text-blue-600">
                Description
              </h3>
              <p className="text-white">{selectedMedicine.description}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2 text-blue-600">
                Dosage
              </h3>
              <p className="text-white">{selectedMedicine.dosage}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2 text-blue-600">
                Details
              </h3>
              <ul className="list-disc list-inside space-y-2 text-white">
                <li>
                  Active Ingredient:{" "}
                  {selectedMedicine.details.active_ingredient}
                </li>
                <li>Form: {selectedMedicine.details.form}</li>
                <li>OTC: {selectedMedicine.details.otc ? "Yes" : "No"}</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2 text-blue-500">
                Side Effects
              </h4>
              <ul className="list-disc list-inside space-y-1 text-white">
                {selectedMedicine.details.side_effects.map((effect, index) => (
                  <li key={index}>{effect}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2 text-blue-500">
                Precautions
              </h4>
              <ul className="list-disc list-inside space-y-1 text-white">
                {selectedMedicine.details.precautions.map(
                  (precaution, index) => (
                    <li key={index}>{precaution}</li>
                  )
                )}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2 text-blue-600">
                Summary
              </h3>
              <p className="text-white">{selectedMedicine.summary}</p>
            </div>
          </div>
        ) : (
          <p className="text-center  text-white">
            {searchTerm
              ? "Medicine not found. Please try another search."
              : "Enter a medicine name to see its details."}
          </p>
        )}
      </div>
    </div>
  );
};

export default CheckMedicine;
